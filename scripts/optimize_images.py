from pathlib import Path
from PIL import Image, ImageEnhance, ImageOps

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / 'public' / 'images'
OUT = PUBLIC / 'generated'
OUT.mkdir(parents=True, exist_ok=True)

JOBS = {
    'hero-kinugasa': (PUBLIC / 'hero' / 'hero-kinugasa-clocktower.jpg', 1600, None, 80, True),
    'rsjp': (PUBLIC / 'IMG_8178.JPG', 720, 480, 76, False),
    'rsjp-express': (PUBLIC / 'IMG_5092.JPG', 720, 480, 76, False),
    'rwjp': (PUBLIC / 'IMG_8263.JPG', 720, 480, 76, False),
    'rwjp-express': (PUBLIC / 'IMG_1588.JPG', 720, 480, 76, False),
    'rdsp': (PUBLIC / 'IMG_3725.JPG', 720, 480, 76, False),
    'rbmp': (PUBLIC / 'IMG_6091.JPG', 720, 480, 76, False),
    'custom': (PUBLIC / 'IMG_1687.JPG', 720, 480, 76, False),
}


def fit(img: Image.Image, width: int, height: int | None) -> Image.Image:
    if height is None:
        ratio = width / img.width
        return img.resize((width, round(img.height * ratio)), Image.Resampling.LANCZOS)
    return ImageOps.fit(img, (width, height), method=Image.Resampling.LANCZOS, centering=(0.5, 0.5))


for name, (source, width, height, quality, brighten) in JOBS.items():
    if not source.exists():
        raise FileNotFoundError(f'Missing source image: {source}')
    with Image.open(source) as original:
        image = ImageOps.exif_transpose(original).convert('RGB')
        if brighten:
            image = ImageEnhance.Brightness(image).enhance(1.13)
            image = ImageEnhance.Contrast(image).enhance(1.05)
            image = ImageEnhance.Color(image).enhance(1.15)
        else:
            image = ImageEnhance.Color(image).enhance(1.04)
        image = fit(image, width, height)
        image.save(OUT / f'{name}.webp', 'WEBP', quality=quality, method=6)
        print(f'generated {name}.webp')
