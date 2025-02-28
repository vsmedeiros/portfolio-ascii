function toggleDarkMode() {
  document.documentElement.classList.toggle("light-mode");
  const icon = document.querySelector(".dark-mode-toggle i");
  if (document.documentElement.classList.contains("light-mode")) {
    icon.classList.replace("fa-sun", "fa-moon");
  } else {
    icon.classList.replace("fa-moon", "fa-sun");
  }
}
