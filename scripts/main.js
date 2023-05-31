// NAVBAR
const nav = document.querySelector("nav");

function addClassScroll() {
  window.addEventListener("scroll", () => {
    const heightPage = window.scrollY;
    if (nav) {
      if (heightPage > 10) {
        nav.classList.add("scroll");
      } else {
        nav.classList.remove("scroll");
      }
    }
  });
}
addClassScroll();

// CLOSE MENU ON CLICK
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarText')
const bsCollapse = new bootstrap.Collapse(menuToggle)
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})
