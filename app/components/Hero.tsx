"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { textRevealAnimation } from "../animation/text-animation";
import Scene from "./DogModel";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const heroText = "Welcome to my portfolio!";

  useGSAP(() => {
    const textRef = document.querySelectorAll(".hero-txt");
    if (textRef) {
      textRevealAnimation(textRef);
    }
  });

  return (
    <div className="p-16">
      <div>
        <h1 className="text-5xl font-bold">
          {heroText.split(" ").map((char, index) => (
            <span className="hero-txt inline-block m-1" key={index}>
              {char}
            </span>
          ))}
        </h1>
        <p className="hero-txt text-xl mt-5">
          This is a simple portfolio made with Next.js and Tailwind CSS. and 3d
          animation with Three.js gsap
        </p>
      </div>
      <Scene />
    </div>
  );
};

export default Hero;
