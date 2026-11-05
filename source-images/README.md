# Source images

Full-size originals of the photos used on the page. They are kept here, outside
`public/`, so they are not shipped with the site.

The page uses WebP copies in `public/images/`, made with ffmpeg
(width capped at 1600px for the hero and problem photos, quality 80):

```
ffmpeg -i "source-images/HVAC Hero image.png" -vf "scale='min(1600,iw)':-2" -c:v libwebp -quality 80 -compression_level 6 public/images/hero-technician-homeowner.webp
```

| Original | Web copy |
|----------|----------|
| HVAC Hero image.png | hero-technician-homeowner.webp |
| HVAC problem.png | technician-ac-repair.webp |
| Woman Reviewing Warranty.png | homeowner-warranty.webp |

## Smaller copies for phones and tablets

The page picks these with `srcset` (set in `src/content/site.ts`; the hero is also
preloaded in `index.html`). Same ffmpeg settings, smaller width:

| Web copy | Small copy | Width |
|----------|------------|-------|
| hero-technician-homeowner.webp | hero-technician-homeowner-800.webp | 800 |
| technician-ac-repair.webp | technician-ac-repair-800.webp | 800 |
| homeowner-warranty.webp | homeowner-warranty-1100.webp | 1100 |
| ac-quality-air-logo.webp | ac-quality-air-logo-320.webp | 320 |

```
ffmpeg -i public/images/hero-technician-homeowner.webp -vf "scale=800:-2" -c:v libwebp -quality 80 -compression_level 6 public/images/hero-technician-homeowner-800.webp
```
