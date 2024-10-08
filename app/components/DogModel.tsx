import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const Model = () => {
  // Load the GLTF or GLB model using useGLTF
  const { scene } = useGLTF("/dog.glb"); // or .glb

  return <primitive object={scene} scale={0.5} />;
};

export default function Scene() {
  return (
    <div style={{ height: "100vh" }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

// This is required by React Three Fiber to preload the GLTF models
useGLTF.preload("/model.glb"); // or .glb
