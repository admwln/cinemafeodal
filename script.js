// Collapsible sections
const collapsibleTitles = document.querySelectorAll(".column-details h2");
collapsibleTitles.forEach((title) => {
  title.addEventListener("click", () => {
    title.classList.toggle("expanded");
    const content = title.nextElementSibling;
    content.classList.toggle("expanded");
  });
});

// Slider arrow buttons
const filmStillsArrowRight = document.querySelector(
  ".column-images .arrow.right"
);
const filmStillsArrowLeft = document.querySelector(
  ".column-images .arrow.left"
);

filmStillsArrowRight.addEventListener("click", () => {
  // Viewport width
  const viewportWidth = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );

  document.querySelector(".column-images .slider-slides").scrollLeft +=
    viewportWidth;
});

filmStillsArrowLeft.addEventListener("click", () => {
  // Viewport width
  const viewportWidth = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );

  document.querySelector(".column-images .slider-slides").scrollLeft -=
    viewportWidth;
});
