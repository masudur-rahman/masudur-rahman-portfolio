document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById("header");
  const hamburgerButton = document.getElementById('hamburger-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuLinks = mobileMenu.querySelectorAll('a');

  // Define gradients using the site's accent color
  const accentColor = "#1d4ed8"; // From siteConfig
  const lightGradient = `linear-gradient(to right, ${accentColor}10, #ffffffb3)`; // Lighter alpha
  const darkGradient = `linear-gradient(to right, ${accentColor}20, #1a1a1a99)`; // Lighter alpha

  const updateHeaderStyle = () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (window.scrollY > 100) {
      header.style.background = isDark ? darkGradient : lightGradient;
      header.classList.add("backdrop-blur-sm", "shadow-sm");
    } else {
      header.style.background = "";
      header.classList.remove("backdrop-blur-sm", "shadow-sm");
    }
  };

  // 1. Update header on scroll
  window.addEventListener("scroll", updateHeaderStyle);

  // 2. Update header on theme change
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
        updateHeaderStyle();
      }
    }
  });

  observer.observe(document.documentElement, { attributes: true });

  // --- Hamburger Menu Logic ---
  hamburgerButton.addEventListener('click', () => {
    const isExpanded = hamburgerButton.getAttribute('aria-expanded') === 'true';
    hamburgerButton.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.classList.toggle('hidden');
    const svgs = hamburgerButton.querySelectorAll('svg');
    svgs[0].classList.toggle('hidden');
    svgs[1].classList.toggle('block');
  });

  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburgerButton.setAttribute('aria-expanded', 'false');
      mobileMenu.classList.add('hidden');
      const svgs = hamburgerButton.querySelectorAll('svg');
      svgs[0].classList.remove('hidden');
      svgs[1].classList.remove('block');
      svgs[1].classList.add('hidden');
    });
  });
});