const themeToggle = document.querySelector(".switch input");
const html = document.documentElement;
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
const navbarCollapse = document.querySelector(".navbar-collapse");

themeToggle.checked = html.getAttribute("data-bs-theme") === "dark";

themeToggle.addEventListener("change", () => {
  const theme = themeToggle.checked ? "dark" : "light";
  html.setAttribute("data-bs-theme", theme);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navbarCollapse.classList.contains("show")) {
      bootstrap.Collapse.getInstance(navbarCollapse)?.hide();
    }
  });
});
