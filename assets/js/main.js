const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const sections = Array.from(document.querySelectorAll("main section[id]"));
const navAnchors = Array.from(document.querySelectorAll(".nav-links a"));

function setActiveSection() {
  let currentId = "";
  const offset = 120;

  sections.forEach((section) => {
    const top = section.getBoundingClientRect().top;
    if (top <= offset) {
      currentId = section.getAttribute("id");
    }
  });

  navAnchors.forEach((anchor) => {
    const href = anchor.getAttribute("href");
    if (!href || !href.startsWith("#")) return;
    anchor.classList.toggle("active", href === `#${currentId}`);
  });
}

window.addEventListener("scroll", setActiveSection, { passive: true });
window.addEventListener("load", setActiveSection);

if (navLinks) {
  navLinks.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      navLinks.classList.remove("open");
      navToggle?.setAttribute("aria-expanded", "false");
    }
  });
}
