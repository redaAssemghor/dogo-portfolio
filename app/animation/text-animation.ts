import gsap from "gsap";

export const textRevealAnimation = (element: NodeListOf<Element>) => {
  gsap.from(element, {
    duration: 2,
    y: 10,
    opacity: 0,
    stagger: 0.1,
    ease: "power3.inOut",
  });
};
