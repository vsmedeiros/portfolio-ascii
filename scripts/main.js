const dropdownButton = document.getElementById("dropdownButton");
const dropdownMenu = document.getElementById("dropdownMenu");

dropdownButton.addEventListener("click", () =>
  dropdownMenu.classList.toggle("show")
);
dropdownButton.addEventListener("mouseover", () =>
  dropdownMenu.classList.add("show")
);

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
