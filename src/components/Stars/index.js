import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';

const Stars = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const animationIdRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  // Performance optimization: Reduce stars based on device capability
  const getStarCount = useCallback(() => {
    const isMobile = window.innerWidth <= 768;
    const isLowEnd = navigator.hardwareConcurrency <= 2;
    
    if (isMobile || isLowEnd) return 200;
    if (window.innerWidth <= 1200) return 800;
    return 1200;
  }, []);

  // Optimized star creation
  const createStars = useCallback((numStars) => {
    const positions = new Float32Array(numStars * 3);
    const colors = new Float32Array(numStars * 3);
    const sizes = new Float32Array(numStars);

    for (let i = 0; i < numStars; i++) {
      const i3 = i * 3;
      
      // Position
      positions[i3] = (Math.random() - 0.5) * 4;
      positions[i3 + 1] = (Math.random() - 0.5) * 4;
      positions[i3 + 2] = (Math.random() - 0.5) * 4;

      // Color (white with slight variations)
      const colorVariation = 0.8 + Math.random() * 0.2;
      colors[i3] = colorVariation;
      colors[i3 + 1] = colorVariation;
      colors[i3 + 2] = colorVariation;

      // Size
      sizes[i] = Math.random() * 0.5 + 0.5;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.PointsMaterial({
      size: 0.5,
      sizeAttenuation: false,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    return new THREE.Points(geometry, material);
  }, []);

  // Optimized animation loop
  const animate = useCallback(() => {
    if (!isVisible) return;
    
    animationIdRef.current = requestAnimationFrame(animate);
    
    if (sceneRef.current && rendererRef.current) {
      // Gentle rotation for subtle movement
      sceneRef.current.rotation.y += 0.0005;
      sceneRef.current.rotation.x += 0.0002;
      
      rendererRef.current.render(sceneRef.current, sceneRef.current.userData.camera);
    }
  }, [isVisible]);

  // Initialize Three.js scene
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;
    scene.userData.camera = camera;

    // Renderer setup with performance optimizations
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: false, // Disable for better performance
      powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio
    container.appendChild(renderer.domElement);

    // Create stars
    const numStars = getStarCount();
    const starField = createStars(numStars);
    scene.add(starField);

    // Store references
    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Start animation
    animate();

    // Handle resize
    const handleResize = () => {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Intersection Observer for performance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      
      // Dispose of Three.js objects
      scene.clear();
      renderer.dispose();
    };
  }, [getStarCount, createStars, animate]);

  return (
    <div 
      ref={containerRef}
      className="stars-container"
      style={{ 
        width: '100%', 
        height: '100%', 
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  );
};

export default Stars;