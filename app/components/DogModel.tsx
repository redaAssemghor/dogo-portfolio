import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { floatYoyoEffect, modelAnimation } from "../animation/text-animation";
import { useGSAP } from "@gsap/react";

const Model = () => {
  const modelRef = useRef();

  useGSAP(() => {
    if (modelRef.current) {
      floatYoyoEffect(modelRef.current); // Apply the yoyo effect
      modelAnimation(modelRef.current); // Apply the model animation
    }
  });

  const { scene } = useGLTF("/dog.glb");

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={0.8}
      position={[0, -1, 0]}
    />
  );
};

export default function Scene() {
  return (
    <div className="h-[600px] w-[800px]">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls minDistance={4} maxDistance={5} />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/model.glb");
