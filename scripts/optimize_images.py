from pathlib import Path
from PIL import Image, ImageChops, ImageEnhance, ImageFilter, ImageOps

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / 'public' / 'images'
OUT = PUBLIC / 'generated'
OUT.mkdir(parents=True, exist_ok=True)

JOBS = {
    'hero-kinugasa': (PUBLIC / 'hero' / 'hero-kinugasa-clocktower.jpg', 1920, None, 84, 'hero'),
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


def enhance_hero(image: Image.Image) -> Image.Image:
    """Brighten the photo while selectively enriching sky and greenery."""
    image = ImageEnhance.Brightness(image).enhance(1.07)
    image = ImageEnhance.Contrast(image).enhance(1.08)
    image = ImageEnhance.Color(image).enhance(1.22)

    width, height = image.size

    blue_layer = Image.new('RGB', image.size, (32, 151, 246))
    blue_treatment = ImageChops.soft_light(image, blue_layer)
    sky_mask = vertical_mask(width, height, ((0.0, 120), (0.10, 112), (0.58, 0), (1.0, 0)))
    image = Image.composite(blue_treatment, image, sky_mask)

    green_layer = Image.new('RGB', image.size, (63, 181, 57))
    green_treatment = ImageChops.soft_light(image, green_layer)
    green_mask = vertical_mask(width, height, ((0.0, 0), (0.45, 0), (0.76, 68), (1.0, 82)))
    image = Image.composite(green_treatment, image, green_mask)

    return image.filter(ImageFilter.UnsharpMask(radius=1.4, percent=75, threshold=3))


for name, (source, width, height, quality, treatment) in JOBS.items():
    if not source.exists():
        raise FileNotFoundError(f'Missing source image: {source}')
    with Image.open(source) as original:
        image = ImageOps.exif_transpose(original).convert('RGB')
        if treatment == 'hero':
            image = enhance_hero(image)
            # The page references the source JPG directly. Replacing the build-time
            # copy keeps that stable URL while deploying the enhanced photograph.
            image.save(source, 'JPEG', quality=90, optimize=True, progressive=True)
        else:
            image = ImageEnhance.Color(image).enhance(1.04)
        image = fit(image, width, height)
        image.save(OUT / f'{name}.webp', 'WEBP', quality=quality, method=6)
        print(f'generated {name}.webp')
