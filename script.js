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
  // TEXT ANIMATION
  //
  const headerText = document.querySelector(".header_paragraph");
  const headerTl = gsap.timeline();
  let mySplitText = SplitText.create(headerText, {
    type: "chars, words",
    charsClass: "char",
  });
  let chars = mySplitText.chars;

  headerTl
    .from(".header_heading", {
      xPercent: -100,
      opacity: 0,
      ease: "Power1.in",
      duration: 0.6,
    })
    .from(chars, {
      duration: 0.01,
      opacity: 0,
      scale: 0,
      y: 60,
      rotationX: 180,
      // transformOrigin: "0% 50% -50%",
      ease: "back",
      stagger: 0.02,
    });
});
