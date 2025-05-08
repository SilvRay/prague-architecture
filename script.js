document.addEventListener("DOMContentLoaded", (event) => {
  /***
   *       _____ _      _____ _____  ______ _____
   *      / ____| |    |_   _|  __ \|  ____|  __ \
   *     | (___ | |      | | | |  | | |__  | |__) |
   *      \___ \| |      | | | |  | |  __| |  _  /
   *      ____) | |____ _| |_| |__| | |____| | \ \
   *     |_____/|______|_____|_____/|______|_|  \_\
   *
   *
   */
  const progressCircle = document.querySelector(".autoplay-progress svg");
  const progressContent = document.querySelector(".autoplay-progress span");

  let swiper = new Swiper(".swiper", {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    on: {
      autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty("--progress", 1 - progress);
        progressContent.textContent = `${Math.ceil(time / 1000)}s`;
      },
    },
  });
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
  // GALLERY ANIMATION
  //
  const projectHeader = document.querySelector(".section_header.project");

  ScrollTrigger.create({
    trigger: projectHeader,
    start: "bottom bottom",
    end: "bottom top",
    pin: true,
    pinSpacing: false,
  });

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
