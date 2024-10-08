"use client";
import { useEffect } from "react";

const ARView = () => {
  useEffect(() => {
    // Dynamically load AR.js script
    const script = document.createElement("script");
    script.src =
      "https://cdn.rawgit.com/jeromeetienne/ar.js/master/aframe/build/aframe-ar.js";
    script.async = true;
    script.onload = () => {
      // After the script is loaded, create the AR scene
      const scene = document.createElement("a-scene");
      scene.setAttribute("embedded", "true");
      scene.setAttribute("arjs", "sourceType: webcam; debugUIEnabled: false;");

      const marker = document.createElement("a-marker");
      marker.setAttribute("preset", "hiro");

      const model = document.createElement("a-entity");
      model.setAttribute("gltf-model", "/dog.glb");
      model.setAttribute("scale", "0.5 0.5 0.5");
      model.setAttribute("rotation", "0 0 0");

      marker.appendChild(model);
      scene.appendChild(marker);
      document.body.appendChild(scene);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      const scene = document.querySelector("a-scene");
      if (scene) document.body.removeChild(scene);
    };
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">View in Augmented Reality</h1>
      <p>Scan the Hiro marker using your camera to view the 3D model in AR.</p>
    </div>
  );
};

export default ARView;
