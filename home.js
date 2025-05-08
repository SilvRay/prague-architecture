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
});
