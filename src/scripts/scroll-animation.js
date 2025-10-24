console.log("Scroll animation script loaded.");

document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM content loaded.");

  const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
  console.log(`Found ${elementsToAnimate.length} elements to animate.`);

  if (elementsToAnimate.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      console.log("IntersectionObserver callback fired.");
      entries.forEach(entry => {
        console.log(entry.target, `is intersecting: ${entry.isIntersecting}`);
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1 // Trigger when 10% of the element is visible
    });

    elementsToAnimate.forEach(element => {
      observer.observe(element);
    });
  }
});