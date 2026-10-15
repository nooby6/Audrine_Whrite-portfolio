const menuToggle = document.querySelector(".menu-toggle");
const primaryLinks = document.querySelector("#primary-links");

if (menuToggle && primaryLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = primaryLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  primaryLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      primaryLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    });
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());