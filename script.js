// Slider arrow buttons
const filmStillsArrowRight = document.querySelector(
  ".column-images .arrow.right"
);
const filmStillsArrowLeft = document.querySelector(
  ".column-images .arrow.left"
);

// Slider arrow buttons-->Right arrow
filmStillsArrowRight.addEventListener("click", () => {
  // Viewport width
  const viewportWidth = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  document.querySelector(".column-images .slider-slides").scrollLeft +=
    viewportWidth;
});

// Slider arrow buttons-->Left arrow
filmStillsArrowLeft.addEventListener("click", () => {
  // Viewport width
  const viewportWidth = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  document.querySelector(".column-images .slider-slides").scrollLeft -=
    viewportWidth;
});

// Media query for desktop, from 700px
const mediaQuery = window.matchMedia("(min-width: 700px)");

function handleViewportChange(e) {
  if (e.matches) {
    const filmDetailCollapsible = document.querySelectorAll(
      ".column-details .collapsible-content"
    );
    filmDetailCollapsible.forEach((collapsible) => {
      collapsible.classList.add("expanded");
    });
  } else {
    const filmDetailCollapsible = document.querySelectorAll(
      ".column-details .collapsible-content"
    );
    filmDetailCollapsible.forEach((collapsible) => {
      collapsible.classList.remove("expanded");
    });
  }
}
// Register the listener
mediaQuery.addEventListener("change", handleViewportChange);
// Initial check
handleViewportChange(mediaQuery);

// Collapsible sections
const collapsibleTitles = document.querySelectorAll(".column-details h2");
collapsibleTitles.forEach((title) => {
  title.addEventListener("click", () => {
    if (!mediaQuery.matches) {
      title.classList.toggle("expanded");
      const content = title.nextElementSibling;
      content.classList.toggle("expanded");
    }
  });
});

// Mouse over .book-btns
const bookBtns = document.querySelectorAll(".book-btn");
bookBtns.forEach((btn) => {
  btn.addEventListener("mouseover", () => {
    btn.classList.add("hover");
  });
  btn.addEventListener("mouseout", () => {
    btn.classList.remove("hover");
  });
});
