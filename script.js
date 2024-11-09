document.getElementById("show").addEventListener("click", function() {
    const recipes = document.querySelector(".recipes");
    recipes.classList.toggle("show");
    console.log("Show class toggled:", recipes.classList.contains("show")); // Check if class is applied
});

const card = document.querySelector('.card');
const recipes = document.querySelector('.recipes');


const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      recipes.style.width = `${entry.contentRect.width}px`;
    }
});

resizeObserver.observe(card);