
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.scroll-section');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          entry.target.scrollTop = 0;
        }
      });
    },
    {
      threshold: 0,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});
