/**
 * Image optimization utilities
 * Helps with responsive images and optimization
 */

/**
 * Generate responsive image srcset for different screen sizes
 */
export const generateSrcSet = (baseSrc: string, sizes: number[] = [400, 800, 1200, 1600]): string => {
  // For now, return the base src
  // In production, you could use a CDN or image service to generate different sizes
  return baseSrc;
};

/**
 * Get optimized image URL
 * In production, you could integrate with:
 * - Cloudinary
 * - ImageKit
 * - Imgix
 * - Or use Vite's image optimization
 */
export const getOptimizedImageUrl = (
  src: string,
  options: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'webp' | 'jpg' | 'png';
  } = {}
): string => {
  // For now, return original src
  // You can integrate with image optimization services here
  return src;
};

/**
 * Preload critical images
 */
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Preload multiple images
 */
export const preloadImages = async (srcs: string[]): Promise<void[]> => {
  return Promise.all(srcs.map(preloadImage));
};

/**
 * Check if image is already cached
 */
export const isImageCached = (src: string): boolean => {
  const img = new Image();
  img.src = src;
  return img.complete;
};

