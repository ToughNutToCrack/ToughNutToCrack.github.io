# Media conversion cheatsheet

Quick reference for converting media before adding it to the portfolio.
All commands require [FFmpeg](https://ffmpeg.org/download.html) installed locally.

---

## GIF → video (biggest win)

```bash
# Step 1 — WebM (smallest, all modern browsers)
ffmpeg -i input.gif \
  -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" \
  -c:v libvpx-vp9 -b:v 0 -crf 33 \
  -pass 1 -an -f null /dev/null && \
ffmpeg -i input.gif \
  -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" \
  -c:v libvpx-vp9 -b:v 0 -crf 33 \
  -pass 2 -an \
  output.webm

# Step 2 — MP4 (Safari fallback)
ffmpeg -i input.gif \
  -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" \
  -c:v libx264 -pix_fmt yuv420p \
  -movflags +faststart \
  output.mp4

# Step 3 — Poster image (first frame)
ffmpeg -i input.gif -vframes 1 poster.jpg
```

Drop all three files in `/public/media/projects/` then use:

```astro
<VideoLoop
  webm="/media/projects/output.webm"
  mp4="/media/projects/output.mp4"
  poster="/media/projects/poster.jpg"
  alt="Description of what the video shows"
/>
```

---

## Video → web-optimised video

```bash
# WebM
ffmpeg -i input.mp4 \
  -c:v libvpx-vp9 -b:v 0 -crf 33 \
  -c:a libopus \
  output.webm

# MP4 (re-encode for web, with audio)
ffmpeg -i input.mp4 \
  -c:v libx264 -crf 23 -preset slow \
  -c:a aac -b:a 128k \
  -pix_fmt yuv420p \
  -movflags +faststart \
  output-web.mp4
```

---

## Resize while converting

```bash
# Scale to max 1280px wide, keep aspect ratio
ffmpeg -i input.gif \
  -vf "scale=1280:-2" \
  -c:v libx264 -pix_fmt yuv420p \
  output.mp4
```

---

## Quick size comparison

| Format   | Typical size | Notes                      |
|----------|-------------|----------------------------|
| GIF      | 8 MB        | Never use on the web       |
| MP4 H264 | ~700 KB     | Universal support           |
| WebM VP9 | ~350 KB     | Best compression, no Safari |
| WebM AV1 | ~200 KB     | Cutting-edge, use as extra  |

---

## Vimeo quick guide

1. Upload the original high-quality file to Vimeo (they re-encode it)
2. Get the video ID from the URL: `vimeo.com/123456789` → ID is `123456789`
3. Download a thumbnail from Vimeo's settings, save to `/public/images/projects/`
4. Use the component:

```astro
<VimeoEmbed
  id="123456789"
  title="Project walkthrough"
  thumbnail="/images/projects/my-thumb.jpg"
/>
```

For silent background / hero videos:

```astro
<VimeoEmbed
  id="123456789"
  mode="background"
  thumbnail="/images/projects/my-thumb.jpg"
/>
```
