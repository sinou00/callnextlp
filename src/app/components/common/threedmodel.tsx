"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

// Load GLB Model
const Model = () => {
  const { scene } = useGLTF("/3d/basketcourt.glb"); // Fix path
  return <primitive object={scene} scale={10} position={[0, -1, 0]} />;
};

const ThreeDModel = () => {
  return (
    <div className="w-[400px] h-[400px] z-[100] pointer-events-none">
      <Canvas camera={{ position: [10, 10,-5 ], fov: 50 }} shadows>
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} castShadow />
        <Suspense fallback={null}>
            <Model />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default ThreeDModel;

