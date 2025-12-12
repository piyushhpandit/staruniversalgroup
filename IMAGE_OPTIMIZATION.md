# Image Optimization Guide

This project uses many images. Here's how to optimize them for better performance.

## Quick Wins (Already Implemented)

1. **Lazy Loading** - Images now load only when they enter the viewport
2. **Code Splitting** - Image-heavy pages are split into separate chunks
3. **Browser Caching** - Images are cached via PWA service worker

## Manual Optimization Steps

### 1. Compress Images Before Adding to Project

Use these tools to compress images before committing:

**Online Tools:**
- [TinyPNG](https://tinypng.com/) - Compress PNG and JPEG
- [Squoosh](https://squoosh.app/) - Advanced compression with preview
- [ImageOptim](https://imageoptim.com/) - Mac app for batch optimization

**Recommended Settings:**
- JPEG: Quality 80-85%
- PNG: Use PNG-8 when possible, or convert to JPEG
- Max width: 1920px for hero images, 1200px for gallery images

### 2. Convert to WebP Format (Optional but Recommended)

WebP provides 25-35% better compression than JPEG:

```bash
# Install cwebp (WebP encoder)
# macOS: brew install webp
# Linux: sudo apt-get install webp

# Convert single image
cwebp -q 80 input.jpg -o output.webp

# Batch convert (using ImageMagick)
magick mogrify -format webp -quality 80 *.jpg
```

### 3. Use Responsive Images

For critical images, consider using `srcset`:

```tsx
<img
  srcSet={`
    ${image400} 400w,
    ${image800} 800w,
    ${image1200} 1200w
  `}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  src={image800}
  alt="Description"
  loading="lazy"
/>
```

### 4. Optimize Image Sizes

**Recommended dimensions:**
- Hero images: 1920x1080px (max)
- Gallery thumbnails: 800x600px
- Client logos: 400x300px (max)
- Icons: 200x200px (max)

### 5. Use CDN (Future Enhancement)

Consider using a CDN with image optimization:
- Cloudinary
- ImageKit
- Imgix
- Cloudflare Images

## Current Image Count

- Wedding images: 16
- Corporate images: 17
- NGO images: 26
- Client logos: 27
- Travel images: ~50+
- Total: ~150+ images

## Performance Tips

1. **Lazy load all gallery images** ✅ (Done)
2. **Preload critical above-the-fold images** (Hero images)
3. **Use appropriate image formats** (JPEG for photos, PNG for logos)
4. **Compress before deployment**
5. **Consider using a CDN** for production

## Build Optimization

The build process now:
- Splits image-heavy pages into separate chunks
- Enables lazy loading for all gallery images
- Caches images via service worker

## Monitoring

Check your site's performance:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)
- Chrome DevTools Lighthouse

Target scores:
- Performance: 90+
- Largest Contentful Paint (LCP): < 2.5s
- First Input Delay (FID): < 100ms

