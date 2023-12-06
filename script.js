// Collapsible sections
const collapsibleTitles = document.querySelectorAll(".column-details h2");
collapsibleTitles.forEach((title) => {
  title.addEventListener("click", () => {
    title.classList.toggle("expanded");
    const content = title.nextElementSibling;
    content.classList.toggle("expanded");
  });
});
