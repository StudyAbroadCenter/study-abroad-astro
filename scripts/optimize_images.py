from pathlib import Path
from PIL import Image, ImageChops, ImageEnhance, ImageFilter, ImageOps

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / 'public' / 'images'
OUT = PUBLIC / 'generated'
OUT.mkdir(parents=True, exist_ok=True)

JOBS = {
    'hero-kinugasa': (PUBLIC / 'hero' / 'hero-kinugasa-clocktower.jpg', 1920, None, 86, 'hero'),
    'rsjp': (PUBLIC / 'IMG_8178.JPG', 720, 480, 76, 'standard'),
    'rsjp-express': (PUBLIC / 'IMG_5092.JPG', 720, 480, 76, 'standard'),
    'rwjp': (PUBLIC / 'IMG_8263.JPG', 720, 480, 76, 'standard'),
    'rwjp-express': (PUBLIC / 'IMG_1588.JPG', 720, 480, 76, 'standard'),
    'rdsp': (PUBLIC / 'IMG_3725.JPG', 720, 480, 76, 'standard'),
    'rbmp': (PUBLIC / 'IMG_6091.JPG', 720, 480, 76, 'standard'),
    'custom': (PUBLIC / 'IMG_1687.JPG', 720, 480, 76, 'standard'),
}


def fit(img: Image.Image, width: int, height: int | None) -> Image.Image:
    if height is None:
        ratio = width / img.width
        return img.resize((width, round(img.height * ratio)), Image.Resampling.LANCZOS)
    return ImageOps.fit(img, (width, height), method=Image.Resampling.LANCZOS, centering=(0.5, 0.5))


def vertical_mask(width: int, height: int, stops: tuple[tuple[float, int], ...]) -> Image.Image:
    """Create a one-dimensional alpha mask interpolated between percentage stops."""
    values: list[int] = []
    for y in range(height):
        position = y / max(height - 1, 1)
        for index in range(len(stops) - 1):
            start_pos, start_value = stops[index]
            end_pos, end_value = stops[index + 1]
            if start_pos <= position <= end_pos:
                ratio = (position - start_pos) / max(end_pos - start_pos, 0.0001)
                values.append(round(start_value + (end_value - start_value) * ratio))
                break
        else:
            values.append(stops[-1][1])
    mask = Image.new('L', (1, height))
    mask.putdata(values)
    return mask.resize((width, height))


def lift_shadows(image: Image.Image) -> Image.Image:
    """Open dark areas without flattening the sky and highlights."""
    luminance = ImageOps.grayscale(image)
    shadow_mask = ImageOps.invert(luminance).point(
        lambda value: max(0, min(92, round((value - 42) * 0.58)))
    )
    lifted = ImageEnhance.Brightness(image).enhance(1.30)
    return Image.composite(lifted, image, shadow_mask)


def enhance_hero(image: Image.Image) -> Image.Image:
    """Create a vivid midsummer blue-sky treatment for the Japanese Hero."""
    image = lift_shadows(image)
    image = ImageEnhance.Brightness(image).enhance(1.10)
    image = ImageEnhance.Contrast(image).enhance(1.09)
    image = ImageEnhance.Color(image).enhance(1.30)

    width, height = image.size

    # Push the upper half toward a vivid midsummer blue rather than a pale sky-blue.
    blue_layer = Image.new('RGB', image.size, (0, 112, 238))
    blue_treatment = ImageChops.soft_light(image, blue_layer)
    sky_mask = vertical_mask(
        width,
        height,
        ((0.0, 214), (0.16, 202), (0.36, 156), (0.56, 54), (0.68, 0), (1.0, 0)),
    )
    image = Image.composite(blue_treatment, image, sky_mask)

    # Add a second restrained multiply pass near the very top to create a deeper,
    # clear-summer-sky gradient while preserving clouds and architectural detail.
    deep_blue_layer = Image.new('RGB', image.size, (24, 118, 228))
    deep_blue_treatment = ImageChops.multiply(image, deep_blue_layer)
    deep_blue_mask = vertical_mask(
        width,
        height,
        ((0.0, 34), (0.22, 27), (0.46, 8), (0.60, 0), (1.0, 0)),
    )
    image = Image.composite(deep_blue_treatment, image, deep_blue_mask)

    # Keep the lawn fresh and bright without making the building look artificial.
    green_layer = Image.new('RGB', image.size, (76, 190, 73))
    green_treatment = ImageChops.soft_light(image, green_layer)
    green_mask = vertical_mask(
        width,
        height,
        ((0.0, 0), (0.48, 0), (0.74, 52), (1.0, 70)),
    )
    image = Image.composite(green_treatment, image, green_mask)

    # Retain a little airy lift only below the sky so the deep blue is not washed out.
    airy_layer = Image.new('RGB', image.size, (232, 246, 255))
    airy_treatment = ImageChops.screen(image, airy_layer)
    airy_mask = vertical_mask(
        width,
        height,
        ((0.0, 0), (0.42, 0), (0.62, 4), (1.0, 8)),
    )
    image = Image.composite(airy_treatment, image, airy_mask)

    return image.filter(ImageFilter.UnsharpMask(radius=1.35, percent=74, threshold=3))


for name, (source, width, height, quality, treatment) in JOBS.items():
    if not source.exists():
        raise FileNotFoundError(f'Missing source image: {source}')
    with Image.open(source) as original:
        image = ImageOps.exif_transpose(original).convert('RGB')
        if treatment == 'hero':
            image = enhance_hero(image)
            # The Japanese page currently uses this stable source URL. The build
            # works from a fresh checkout, so the committed original remains intact.
            image.save(source, 'JPEG', quality=92, optimize=True, progressive=True)
        else:
            image = ImageEnhance.Color(image).enhance(1.04)
        image = fit(image, width, height)
        image.save(OUT / f'{name}.webp', 'WEBP', quality=quality, method=6)
        print(f'generated {name}.webp')
