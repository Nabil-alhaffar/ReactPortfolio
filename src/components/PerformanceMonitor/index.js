import React, { useEffect, useState } from 'react';
import './index.scss';

const PerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    imagesLoaded: 0,
    totalImages: 0
  });

  useEffect(() => {
    const startTime = performance.now();
    
    // Monitor image loading
    const images = document.querySelectorAll('img');
    let loadedCount = 0;
    
    const updateMetrics = () => {
      const loadTime = Math.round(performance.now() - startTime);
      setMetrics({
        loadTime,
        imagesLoaded: loadedCount,
        totalImages: images.length
      });
    };

    images.forEach(img => {
      if (img.complete) {
        loadedCount++;
      } else {
        img.addEventListener('load', () => {
          loadedCount++;
          updateMetrics();
        });
      }
    });

    updateMetrics();
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="performance-monitor">
      <div className="metric">
        <span className="label">Load Time:</span>
        <span className="value">{metrics.loadTime}ms</span>
      </div>
      <div className="metric">
        <span className="label">Images:</span>
        <span className="value">{metrics.imagesLoaded}/{metrics.totalImages}</span>
      </div>
    </div>
  );
};

export default PerformanceMonitor;
