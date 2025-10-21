import React, { useEffect, useState } from 'react';
import './index.scss';

const PerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    imagesLoaded: 0,
    totalImages: 0,
    fps: 0,
    memoryUsage: 0
  });

  useEffect(() => {
    const startTime = performance.now();
    
    // Monitor image loading
    const images = document.querySelectorAll('img');
    let loadedCount = 0;
    
    // FPS monitoring
    let lastTime = performance.now();
    let frameCount = 0;
    let fps = 0;
    
    const updateMetrics = () => {
      const loadTime = Math.round(performance.now() - startTime);
      
      // Calculate FPS
      frameCount++;
      const currentTime = performance.now();
      if (currentTime - lastTime >= 1000) {
        fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      // Memory usage (if available)
      const memoryUsage = performance.memory ? 
        Math.round(performance.memory.usedJSHeapSize / 1024 / 1024) : 0;
      
      setMetrics({
        loadTime,
        imagesLoaded: loadedCount,
        totalImages: images.length,
        fps,
        memoryUsage
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

    // Update metrics every second
    const interval = setInterval(updateMetrics, 1000);
    updateMetrics();

    return () => clearInterval(interval);
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="performance-monitor">
      <div className="metric">
        <span className="label">Load:</span>
        <span className="value">{metrics.loadTime}ms</span>
      </div>
      <div className="metric">
        <span className="label">Images:</span>
        <span className="value">{metrics.imagesLoaded}/{metrics.totalImages}</span>
      </div>
      <div className="metric">
        <span className="label">FPS:</span>
        <span className="value">{metrics.fps}</span>
      </div>
      <div className="metric">
        <span className="label">Memory:</span>
        <span className="value">{metrics.memoryUsage}MB</span>
      </div>
    </div>
  );
};

export default PerformanceMonitor;
