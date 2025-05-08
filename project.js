document.addEventListener("DOMContentLoaded", (event) => {
  /***
   *      _____  ______          _____    __  __  ____  _____  ______   ____ _______ _   _
   *     |  __ \|  ____|   /\   |  __ \  |  \/  |/ __ \|  __ \|  ____| |  _ \__   __| \ | |
   *     | |__) | |__     /  \  | |  | | | \  / | |  | | |__) | |__    | |_) | | |  |  \| |
   *     |  _  /|  __|   / /\ \ | |  | | | |\/| | |  | |  _  /|  __|   |  _ <  | |  | . ` |
   *     | | \ \| |____ / ____ \| |__| | | |  | | |__| | | \ \| |____  | |_) | | |  | |\  |
   *     |_|  \_\______/_/    \_\_____/  |_|  |_|\____/|_|  \_\______| |____/  |_|  |_| \_|
   *
   *
   */
  const readMoreBtn = document.querySelector(".read-more-button");
  const readMoreBtnText = document.querySelector(".read-more");
  const projectDetails = document.querySelector(".details-project");

  readMoreBtn.addEventListener("click", () => {
    projectDetails.classList.toggle("expanded");
    readMoreBtnText.textContent = projectDetails.classList.contains("expanded")
      ? "Read less"
      : "Read more";
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
  const projectHeader = document.querySelector(".section_header");

  ScrollTrigger.create({
    trigger: projectHeader,
    start: "bottom bottom",
    end: "bottom top",
    pin: true,
    pinSpacing: false,
  });
});
