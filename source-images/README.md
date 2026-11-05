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
