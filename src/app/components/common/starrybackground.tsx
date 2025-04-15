"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useMemo, useEffect, useState } from "react";
import * as THREE from "three";

const Stars = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const [scrollY, setScrollY] = useState(0);

  // Generate random star positions
  const stars = useMemo(() => {
    const positions = new Float32Array(5000 * 3); // Create more stars
    for (let i = 0; i < 5000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100; // Spread wider
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
    }
    return positions;
  }, []);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY * 0.002); // Adjust scroll speed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate stars based on scroll and drifting motion
  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.position.y = -scrollY; // Move upwards when scrolling down
      pointsRef.current.rotation.x = clock.getElapsedTime() * 0.02; // Slow rotation
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.015; // Slow rotation
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute attach="attributes-position" args={[stars, 3]} />
      </bufferGeometry>
      <PointMaterial size={0.05} color="white" transparent opacity={0.8} />
    </points>
  );
};

const StarryBackground = () => {
  return (
    <div className="absolute inset-0 z-10">
      <Canvas camera={{ position: [0, 0, 15] }}>
        <ambientLight intensity={0.5} />
        <Stars />
      </Canvas>
    </div>
  );
};

export default StarryBackground;




