document.addEventListener("DOMContentLoaded", (event) => {
  /***
   *       _____  _____         _____
   *      / ____|/ ____|  /\   |  __ \
   *     | |  __| (___   /  \  | |__) |
   *     | | |_ |\___ \ / /\ \ |  ___/
   *     | |__| |____) / ____ \| |
   *      \_____|_____/_/    \_\_|
   *
   *
   */

  //
  // IMAGE AND CONTENT ANIMATION
  //
  const historyGrid = document.querySelector(".about-grid.history");
  const approachGrid = document.querySelector(".about-grid.approach");
  const historyTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-grid",
      start: "top 80%",
    },
  });
  const approachTl = gsap.timeline({
    scrollTrigger: {
      trigger: approachGrid,
      start: "top 80%",
    },
  });
  historyTl
    .from(".history_img", {
      scale: 1.3,
      duration: 0.8,
      ease: "power2.in",
    })
    .from(".history_wrapper-content", {
      xPercent: 100,
      opacity: 0,
      duration: 0.5,
    });
  approachTl
    .from(".approach_img", {
      scale: 1.3,
      duration: 0.8,
      ease: "power2.in",
    })
    .from(".approach_wrapper-content", {
      xPercent: -100,
      opacity: 0,
      duration: 0.5,
    });
});
