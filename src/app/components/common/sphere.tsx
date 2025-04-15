// Sphere.tsx
"use client";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { useLoader } from "@react-three/fiber";

// Define your textures (replace these with your actual image paths)
const textures = [
  "/texture/basket-texture.jpg", // Default texture
  "/texture/soccertexture.jpg", // Alternate texture 1
  "/texture/basket-texture.jpg", // Alternate texture 2
];

const Sphere = () => {
  const sphereRef = useRef<THREE.Mesh>(null);
  const [blendFactor, setBlendFactor] = useState(0); // Blending factor between 0 and 1

  // Preload all textures
  const textureMaps = textures.map((src) => {
    const texture = useLoader(THREE.TextureLoader, src);
    texture.minFilter = THREE.LinearFilter; // Improve texture filtering
    return texture;
  });

  // Use the frame loop to update sphere rotation and texture blending
  useFrame((state, delta) => {
    if (sphereRef.current) {
      // Rotate the sphere around its Y-axis
      sphereRef.current.rotation.y += delta * 0.1; // Adjust rotation speed

      // Calculate the texture blend factor based on the rotation angle
      const angle = sphereRef.current.rotation.y;
      const newBlendFactor = Math.abs(Math.sin(angle)); // Smooth blend factor using sine of the angle
      setBlendFactor(newBlendFactor);

      // Update shader material blend factor
      const material = sphereRef.current.material as THREE.ShaderMaterial;
      material.uniforms.uBlendFactor.value = newBlendFactor; // Update blending factor in shader
      material.uniforms.uTexture1.value = textureMaps[0]; // First texture
      material.uniforms.uTexture2.value = textureMaps[1]; // Second texture
    }
  });

  // Custom shader material for blending textures (without shadow effect)
  const shaderMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uTexture1: { value: textureMaps[0] }, // First texture
      uTexture2: { value: textureMaps[1] }, // Second texture
      uBlendFactor: { value: 0 }, // Blending factor (0 = texture1, 1 = texture2)
    },
    vertexShader: `
      varying vec2 vUv;
      varying vec3 vNormal;
      void main() {
        vUv = uv;
        vNormal = normal;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform sampler2D uTexture1;
      uniform sampler2D uTexture2;
      uniform float uBlendFactor;
      varying vec2 vUv;
      varying vec3 vNormal;

      void main() {
        // Blend between textures
        vec4 color1 = texture2D(uTexture1, vUv);
        vec4 color2 = texture2D(uTexture2, vUv);
        vec4 blendedColor = mix(color1, color2, uBlendFactor);

        // No shadow applied, directly output blended color
        gl_FragColor = blendedColor;
      }
    `,
  });

  return (
    <mesh ref={sphereRef} position={[0, 0, 0]} castShadow={false}>
      <sphereGeometry args={[5, 64, 64]} /> {/* Radius, widthSegments, heightSegments */}
      <primitive object={shaderMaterial} attach="material" />
    </mesh>
  );
};

export default Sphere;
