function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

// Close mobile menu on outside click
document.addEventListener('click', function (e) {
  const menu = document.getElementById('mobileMenu');
  const burger = document.querySelector('.burger');
  if (!menu.contains(e.target) && !burger.contains(e.target)) {
    menu.classList.remove('open');
  }
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav nav a');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach((s) => observer.observe(s));
