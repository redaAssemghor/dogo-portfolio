"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { textRevealAnimation } from "../animation/text-animation";
import Scene from "./DogModel";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaVrCardboard } from "react-icons/fa6";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const heroText = "Meet Max, your new furry friend!";

  useGSAP(() => {
    const textRef = document.querySelectorAll(".hero-txt");
    if (textRef) {
      textRevealAnimation(textRef);
    }
  });

  return (
    <div className="bg-gray-800 flex justify-between items-center flex-col lg:flex-row p-6 lg:px-40">
      <span className="font-black text-5xl rotate-90 absolute lg:-right-20 left-10 -translate-x-1/2 top-1/2 opacity-25">
        DOGO THEME
      </span>
      <div className="space-y-10">
        <h1 className="lg:text-7xl text-3xl text-[--orange-primary] font-bold text-balance">
          {heroText.split(" ").map((char, index) => (
            <span className="hero-txt inline-block m-1" key={index}>
              {char}
            </span>
          ))}
        </h1>
        <p className="hero-txt text-xl mt-5">
          Welcome to Max&apos;s world! This playful portfolio is all about Max,
          a loyal and loving companion with a passion for fetch and belly rubs.
          Explore his adventures, 3D animations, and much more!
        </p>
        <div className="flex flex-col lg:flex-row lg:items-center items-start gap-10 w-full justify-between">
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#ff8e00" }}
            whileTap={{ scale: 0.9 }}
          >
            <button className="py-3 px-6 font-semibold border">
              Download Max&apos;s Resume (Doggo Style)
            </button>
          </motion.button>

          <motion.button
            className="bg-orange-500 text-white py-2 px-4 rounded-lg items-start"
            whileHover={{ scale: 1.1, backgroundColor: "#ff8e00" }}
            whileTap={{ scale: 0.9 }}
          >
            <Link className="flex gap-2 items-center" href="/ar">
              <span>AR View</span>
              <FaVrCardboard />
            </Link>
          </motion.button>
        </div>
      </div>
      <div className="custom-radial">
        <Scene />
      </div>
    </div>
  );
};

export default Hero;
