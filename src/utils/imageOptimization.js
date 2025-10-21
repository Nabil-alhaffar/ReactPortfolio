// Image optimization utilities
export const createOptimizedImageUrl = (originalSrc, options = {}) => {
  const {
    width = 800,
    height = 600,
    quality = 80,
    format = 'webp'
  } = options;

  // For now, return the original src
  // In production, you would integrate with a service like Cloudinary, ImageKit, or similar
  return originalSrc;
};

export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

export const getImageDimensions = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve({
        width: img.naturalWidth,
        height: img.naturalHeight
      });
    };
    img.onerror = reject;
    img.src = src;
  });
};

// Generate responsive image sources
export const generateResponsiveSources = (baseSrc, sizes = [400, 800, 1200]) => {
  return sizes.map(size => ({
    src: baseSrc,
    width: size,
    media: `(max-width: ${size}px)`
  }));
};
