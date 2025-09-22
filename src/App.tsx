import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Define the main App component
const App = () => {
  // Use a ref to get a reference to the DOM element where we'll render the scene
  // FIX: Added 'null' as the initial value for useRef to fix the TypeScript error.
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Make sure the ref has a value before trying to access it
    if (!containerRef.current) {
      console.error("Container element not found.");
      return;
    }

    // === Scene Setup ===
    // Get the width and height of the container
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera with perspective projection
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

    // Create a WebGL renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    
    // Append the renderer's DOM element to our container div
    containerRef.current.appendChild(renderer.domElement);

    // === Object Creation ===
    // Create the geometry for the cube
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    
    // Create the material with a basic color
    const material = new THREE.MeshBasicMaterial({ color: 0x00aaff, wireframe: true });
    
    // Create the cube mesh
    const cube = new THREE.Mesh(geometry, material);
    
    // Add the cube to the scene
    scene.add(cube);
    
    // Position the camera so we can see the cube
    camera.position.z = 2;

    // === Animation Loop ===
    // Define the animation function
    const animate = () => {
      // requestAnimationFrame will call this function again on the next frame
      requestAnimationFrame(animate);

      // Rotate the cube on the x and y axes for a nice spin effect
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      // Render the scene from the camera's perspective
      renderer.render(scene, camera);
    };

    // Start the animation loop
    animate();

    // === Cleanup Function ===
    // Return a function to clean up when the component unmounts
    return () => {
      if (containerRef.current && renderer.domElement) {
        // Dispose of the renderer and its DOM element
        containerRef.current.removeChild(renderer.domElement);
        renderer.dispose();
        geometry.dispose();
        material.dispose();
      }
    };
  }, []); // The empty array ensures this effect runs only once on mount

  // Render the component
  return (
    <div
      ref={containerRef}
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1a1a1a',
      }}
    >
      {/* The Three.js canvas will be added here */}
    </div>
  );
};

export default App;
