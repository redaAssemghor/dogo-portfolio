"use client";
import { useEffect } from "react";
import Head from "next/head";

const ARView = () => {
  useEffect(() => {
    // Dynamically create the AR.js and A-Frame scene
    const scene = document.createElement("a-scene");
    scene.setAttribute("embedded", "true");
    scene.setAttribute("arjs", "sourceType: webcam; debugUIEnabled: false;");

    const marker = document.createElement("a-marker");
    marker.setAttribute("preset", "hiro");

    const model = document.createElement("a-entity");
    model.setAttribute("gltf-model", "/dog.glb"); // Adjust the path if needed
    model.setAttribute("scale", "0.5 0.5 0.5");
    model.setAttribute("rotation", "0 0 0");

    marker.appendChild(model);
    scene.appendChild(marker);

    document.body.appendChild(scene);

    // Cleanup when component unmounts
    return () => {
      document.body.removeChild(scene);
    };
  }, []);

  return (
    <div>
      <Head>
        <script src="https://cdn.rawgit.com/jeromeetienne/ar.js/master/aframe/build/aframe-ar.js"></script>
      </Head>
      <h1 className="text-2xl font-bold">View in Augmented Reality</h1>
      <p>Scan the Hiro marker using your camera to view the 3D model in AR.</p>
    </div>
  );
};

export default ARView;
