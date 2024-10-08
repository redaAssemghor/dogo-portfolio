"use client";
import { useEffect, useRef } from "react";

const ARView = () => {
  const arContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Check if window is defined (as Next.js has server-side rendering)
    if (typeof window === "undefined") return;

    // Load A-Frame script
    const aframeScript = document.createElement("script");
    aframeScript.src = "https://aframe.io/releases/1.2.0/aframe.min.js";
    aframeScript.async = true; // Load asynchronously
    aframeScript.onload = () => {
      // Load AR.js script after A-Frame is ready
      const arScript = document.createElement("script");
      arScript.src =
        "https://cdn.rawgit.com/jeromeetienne/ar.js/master/aframe/build/aframe-ar.js";
      arScript.async = true; // Load asynchronously

      arScript.onload = () => {
        // Create the AR scene after both scripts are loaded
        const scene = document.createElement("a-scene");
        scene.setAttribute("embedded", "true");
        scene.setAttribute(
          "arjs",
          "sourceType: webcam; debugUIEnabled: false;"
        );

        const marker = document.createElement("a-marker");
        marker.setAttribute("preset", "hiro");

        const model = document.createElement("a-entity");
        model.setAttribute("gltf-model", "/dog.glb");
        model.setAttribute("scale", "0.5 0.5 0.5");
        model.setAttribute("rotation", "0 0 0");

        marker.appendChild(model);
        scene.appendChild(marker);

        if (arContainerRef.current) {
          arContainerRef.current.appendChild(scene);
        }
      };

      document.body.appendChild(arScript);
    };

    // Append A-Frame script to the head
    document.head.appendChild(aframeScript);

    // Cleanup function to remove scripts and the scene
    return () => {
      const aframeScript = document.querySelector(
        `script[src="https://aframe.io/releases/1.2.0/aframe.min.js"]`
      );
      const arScript = document.querySelector(
        `script[src="https://cdn.rawgit.com/jeromeetienne/ar.js/master/aframe/build/aframe-ar.js"]`
      );
      if (aframeScript) document.head.removeChild(aframeScript);
      if (arScript) document.body.removeChild(arScript);

      const scene = document.querySelector("a-scene");
      if (scene && arContainerRef.current) {
        arContainerRef.current.removeChild(scene);
      }
    };
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">View in Augmented Reality</h1>
      <p>Scan the Hiro marker using your camera to view the 3D model in AR.</p>
      <div ref={arContainerRef} style={{ width: "100%", height: "400px" }} />
    </div>
  );
};

export default ARView;
