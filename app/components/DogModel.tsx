import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useRef, useEffect } from "react";
import { floatYoyoEffect, modelAnimation } from "../animation/text-animation";
import { useGSAP } from "@gsap/react";
import { OrbitControls as OrbitControlsImpl } from "three-stdlib";

const Model = () => {
  const modelRef = useRef(null);

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
  const controlsRef = useRef<OrbitControlsImpl | null>(null);

  useEffect(() => {
    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length === 2) {
        // Custom two-finger gesture detection
        const touch1 = event.touches[0];
        const touch2 = event.touches[1];

        const deltaX = touch1.pageX - touch2.pageX;
        const deltaY = touch1.pageY - touch2.pageY;

        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        console.log("Two-finger touch move detected", distance);
      }
    };

    window.addEventListener("touchmove", handleTouchMove);
    return () => {
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div className="h-[600px] w-[800px]">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls
          ref={controlsRef}
          minDistance={4}
          maxDistance={5}
          enableDamping={true} // For smooth rotations
          enablePan={false} // Disable panning for better mobile experience
          rotateSpeed={1.2} // Speed up the rotation
          dampingFactor={0.05} // Adds a slight delay for smoother interactions
        />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/dog.glb");
