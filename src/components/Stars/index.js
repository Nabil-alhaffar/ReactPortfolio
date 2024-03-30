// FallingStars.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const FallingStars = () => {
  const containerRef = useRef(null);
  const starsRef = useRef([]);

  useEffect(() => {
    if (!containerRef.current) return; // Exit early if containerRef is not initialized

    // Create scene
    const scene = new THREE.Scene();

    // Create camera
    const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1500);
    camera.position.z = 5;

    // Create renderer with alpha set to true for transparency
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create stars
    const stars = [];
    const numStars = 1000; // Increase the number of stars
    for (let i = 0; i < numStars; i++) {
      const star = new THREE.Vector3(
        (Math.random() - 2) * 2, // Randomize x position within smaller range
        Math.random() * 3, // Randomize y position within visible range
        (Math.random() - 0.5) * 2 // Randomize z position within smaller range
      );
      stars.push(star);
    }

    const starGeometry = new THREE.BufferGeometry().setFromPoints(stars);
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 1.25, sizeAttenuation: false });
    const starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);

    starsRef.current = stars; // Save stars reference

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Move stars along y-axis to simulate rising
      stars.forEach(star => {
        star.y += 0.01; // Adjust speed as needed
        if (star.y > 3) { // Reset position when star reaches the top
          star.y = 0; // Reset y position
        }
      });

      // Update buffer geometry attributes based on updated positions
      const positions = starGeometry.attributes.position.array;
      stars.forEach((star, index) => {
        positions[index * 3] = star.x;
        positions[index * 3 + 1] = star.y;
        positions[index * 3 + 2] = star.z;
      });
      starGeometry.attributes.position.needsUpdate = true;

      // Render scene
      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      if (containerRef.current) { // Check if containerRef is initialized before removing child
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }} />;
};

export default FallingStars;


// // FallingStars.js
// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';

// const FallingStars = () => {
//   const containerRef = useRef(null);
//   const starsRef = useRef([]);

//   useEffect(() => {
//     if (!containerRef.current) return; // Exit early if containerRef is not initialized

//     // Create scene
//     const scene = new THREE.Scene();

//     // Create camera
//     const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1500);
//     camera.position.z = 5;

//     // Create renderer with alpha set to true for transparency
//     const renderer = new THREE.WebGLRenderer({ alpha: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     containerRef.current.appendChild(renderer.domElement);

//     // Create stars
//     const stars = [];
//     for (let i = 0; i < 1000; i++) {
//       const star = new THREE.Vector3(
//         (Math.random() - 2) * 2, // Randomize x position within smaller range
//         (Math.random() - 0.10) * 20, // Randomize y position within smaller range
//         (Math.random() - 0.5) * 2 // Randomize z position within smaller range
//       );
//       stars.push(star);
//     }

//     const starGeometry = new THREE.BufferGeometry().setFromPoints(stars);
//     const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 1, sizeAttenuation: false, shadowSide:true });
//     const starField = new THREE.Points(starGeometry, starMaterial);
//     scene.add(starField);

//     starsRef.current = stars; // Save stars reference

//     // Animation loop
//     const animate = () => {
//       requestAnimationFrame(animate);

//       // Move stars along y-axis to simulate falling
//       stars.forEach(star => {
//         star.y -= 0.0075; // Adjust speed as needed
//         if (star.y < 0) { // Reset position when star falls out of view
//           star.y = Math.random() * 3; // Reset y position within visible range
//         }
//       });

//       // Update buffer geometry attributes based on updated positions
//       const positions = starGeometry.attributes.position.array;
//       stars.forEach((star, index) => {
//         positions[index * 3] = star.x;
//         positions[index * 3 + 1] = star.y;
//         positions[index * 3 + 2] = star.z;
//       });
//       starGeometry.attributes.position.needsUpdate = true;

//       // Render scene
//       renderer.render(scene, camera);
//     };

//     animate();

//     // Clean up
//     return () => {
//       if (containerRef.current) { // Check if containerRef is initialized before removing child
//         containerRef.current.removeChild(renderer.domElement);
//       }
//     };
//   }, []);

//   return <div ref={containerRef} style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }} />;
// };

// export default FallingStars;