// src/utils/preloadImages.ts
// Utility to preload an array of image URLs
export function preloadImages(urls: string[]) {
  urls.forEach(url => {
    if (url && typeof url === 'string') {
      const img = new window.Image();
      img.src = url;
    }
  });
}
