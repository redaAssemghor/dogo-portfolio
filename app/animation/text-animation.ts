import { PrimitiveProps } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const textRevealAnimation = (element: NodeListOf<Element>) => {
  gsap.from(element, {
    duration: 2,
    y: 10,
    opacity: 0,
    stagger: 0.1,
    ease: "power3.inOut",
  });
};

// model animation
export const modelAnimation = (object: PrimitiveProps) => {
  gsap.fromTo(
    object.scale,
    {
      x: 0.01, // Start with a very small scale
      y: 0.01,
      z: 0.01,
      opacity: 0.5,
    },
    {
      x: 1, // Scale to normal size
      y: 1,
      z: 1,
      opacity: 1,
      duration: 4, // Increase the duration to make the scale-up slower
      ease: "power2.out", // Use a smoother easing function
    }
  );
};

export const floatYoyoEffect = (object: PrimitiveProps) => {
  gsap.to(object.position, {
    y: "+=0.3",
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  });
};

// skills animations
export const skillsAnimation = (element: HTMLElement) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
    },
    duration: 1,
    y: 30,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.inOut",
  });
};

// reveal animation onscroll
export const revealAnimation = (element: HTMLElement) => {
  gsap.fromTo(
    element,
    { opacity: 0, x: -60 },
    {
      opacity: 1,
      duration: 1,
      x: 0,
      stagger: 0.5,
      scrollTrigger: { trigger: element, start: "top 90%" },
    }
  );
};

// background colors animation
export const backgroundAnimation = (element: HTMLElement) => {
  gsap.to(element, {
    backgroundPosition: "100% 50%", // Move the gradient across the element
    duration: 3,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
  });
};
