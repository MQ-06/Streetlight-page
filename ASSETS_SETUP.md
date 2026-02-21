# 🎨 Assets Setup Guide

This guide explains how to set up the background image and other assets for StreetLight.

---

## 📸 Background Image

The hero section uses a dark road/street background image to enhance the cinematic feel.

### Required Image

- **Filename:** `dark-road.png` (or `.jpg`)
- **Location:** `public/images/dark-road.png`
- **Recommended specs:**
  - Resolution: 1920x1080 or higher
  - Format: PNG or JPG
  - Style: Dark, moody street or road scene
  - File size: Keep under 500KB for performance

### Setup Steps

1. **Create the images directory** (if not exists):
   ```bash
   mkdir -p public/images
   ```

2. **Add your background image**:
   - Place your dark road image in `public/images/`
   - Rename it to `dark-road.png` (or update the path in the component)

3. **If using a different filename**, update the component:
   ```typescript
   // components/Hero/StreetLightHero.tsx
   style={{ 
     backgroundImage: `url(/images/your-image-name.jpg)`,
   }}
   ```

### Where to Find Images

**Free Stock Photo Sites:**
- [Unsplash](https://unsplash.com) - Search: "dark road night", "street night pakistan"
- [Pexels](https://pexels.com) - Search: "dark street", "road night"
- [Pixabay](https://pixabay.com) - Search: "dark highway"

**Recommended Search Terms:**
- "dark road night"
- "empty street night"
- "urban road darkness"
- "highway night pakistan"
- "street light night"

### Image Optimization

Before adding the image, optimize it:

1. **Use online tools:**
   - [TinyPNG](https://tinypng.com) - Compress PNG files
   - [Squoosh](https://squoosh.app) - Google's image optimizer
   - [Compressor.io](https://compressor.io) - Universal compressor

2. **Recommended settings:**
   - Quality: 80-85%
   - Format: WebP (best) or JPG
   - Remove metadata

---

## 🎭 Fallback (No Image)

If you don't have a background image yet, the component will still work! It will display with:
- Solid dark background
- All animations and effects intact
- Film grain texture overlay

The experience is still cinematic without the image.

---

## 🖼️ Next.js Image Component (Future Enhancement)

For better performance, consider using Next.js `<Image>` component:

```typescript
import Image from 'next/image';
import bgImage from '@/public/images/dark-road.png';

// In component:
<Image
  src={bgImage}
  alt="Dark road background"
  fill
  className="object-cover"
  priority
  quality={85}
/>
```

This provides:
- Automatic optimization
- Lazy loading
- Responsive images
- Better performance

---

## 🎨 Additional Assets (Future)

### Favicon
- Location: `public/favicon.ico`
- Size: 32x32 or 64x64
- Format: ICO or PNG

### Logo
- Location: `public/images/logo.png`
- Transparent background
- SVG preferred

### Open Graph Image (for social sharing)
- Location: `public/og-image.png`
- Size: 1200x630
- Includes: Logo + tagline

---

## ✅ Quick Checklist

- [ ] Background image added to `public/images/`
- [ ] Image optimized (< 500KB)
- [ ] Favicon created/added
- [ ] Test on mobile and desktop
- [ ] Check image loads correctly

---

## 🛠️ Troubleshooting

### Image Not Showing

1. **Check file path:**
   ```
   public/images/dark-road.png  ✅ Correct
   public/dark-road.png         ❌ Wrong location
   src/images/dark-road.png     ❌ Wrong directory
   ```

2. **Check filename case:**
   - File: `Dark-Road.PNG`
   - Code: `dark-road.png`
   - These don't match on Linux/Mac! Use exact case.

3. **Restart dev server:**
   ```bash
   # Stop server (Ctrl+C)
   npm run dev
   ```

4. **Clear Next.js cache:**
   ```bash
   rm -rf .next
   npm run dev
   ```

### Image Performance Issues

If the image slows down your site:

1. **Compress it more** - Aim for < 200KB
2. **Convert to WebP** - Better compression
3. **Reduce dimensions** - 1920x1080 is enough
4. **Use Next.js Image** - Automatic optimization

---

## 📞 Need Help?

Check the main [README.md](./README.md) or create an issue on GitHub.

---

🇵🇰 **Once your image is added, the hero section will look absolutely stunning!**

