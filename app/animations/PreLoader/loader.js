import gsap from "gsap";

// Declare a general timeline to use in all the animation functions.
const tl = gsap.timeline();

// Optional intro animation
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
    .from(".sub", {
      duration: 1,
      opacity: 0,
      y: 80,
      ease: "expo.easeOut",
    });

  if (window.innerWidth < 763) {
    mobileLanding();
  }
};

export const mobileLanding = () => {
  tl.from(".landing__main2", {
    duration: 1,
    opacity: 0,
    y: 80,
    ease: "expo.easeOut",
  });
};
