import gsap from "gsap";

// Declare a general timeline to use in all the animation functions.
const tl = gsap.timeline();

// Preloader Animation (without the wipe-down)
export const preLoaderAnim = () => {
  tl.to(".texts-container", {
    duration: 0,
    opacity: 1,
    ease: "Power3.easeOut",
  })
    .from(".texts-container span", {
      duration: 1.5,
      delay: 1,
      y: 70,
      skewY: 10,
      stagger: 0.4,
      ease: "Power3.easeOut",
    })
    .to(".texts-container span", {
      duration: 1,
      y: 70,
      skewY: -20,
      stagger: 0.2,
      ease: "Power3.easeOut",
    })
    .to("body", {
      duration: 0.01,
      css: { overflowY: "scroll" },
      ease: "power3.inOut",
    })
    .from(".sub", {
      duration: 1,
      opacity: 0,
      y: 80,
      ease: "expo.easeOut",
    })
    // Skip the wipe-down animation (height to 0vh)
    .set(".preloader", {
      css: { display: "none" },
      onComplete: mobileLanding, // Reference the function, don't call it
    });
};

export const mobileLanding = () => {
  if (window.innerWidth < 763) {
    tl.from(".landing__main2", {
      duration: 1,
      opacity: 0,
      y: 80,
      ease: "expo.easeOut",
    });
  }
};