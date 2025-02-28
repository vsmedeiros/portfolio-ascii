// Código para dropdown menu do header
const dropdownButton = document.getElementById("dropdownButton");
const dropdownMenu = document.getElementById("dropdownMenu");

dropdownButton.addEventListener("click", () =>
  dropdownMenu.classList.toggle("show")
);

function updateHoverEvent() {
  if (isDesktop()) {
    dropdownButton.addEventListener("mouseover", showMenu);
  } else {
    dropdownButton.removeEventListener("mouseover", showMenu);
  }
}

window.addEventListener("click", function (event) {
  if (!event.target.matches("#dropdownButton")) {
    if (dropdownMenu.classList.contains("show")) {
      dropdownMenu.classList.remove("show");
    }
  }
});

dropdownButton.addEventListener("blur", function () {
  dropdownMenu.classList.remove("show");
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    dropdownMenu.classList.remove("show");
  }
});

function isDesktop() {
  return window.innerWidth > 768 && !("ontouchstart" in window);
}

function showMenu() {
  dropdownMenu.classList.add("show");
}

updateHoverEvent();
window.addEventListener("resize", updateHoverEvent);