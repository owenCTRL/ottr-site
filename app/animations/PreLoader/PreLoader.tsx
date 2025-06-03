import gsap from "gsap";

// Declare a general timeline to use in all the animation functions.
const tl = gsap.timeline();

// Mobile landing animation (only if under 763px)
export const mobileLanding = () => {
  tl.from(".landing__main2", {
    duration: 1,
    opacity: 0,
    y: 80,
    ease: "expo.easeOut",
  });
};