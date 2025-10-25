document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main');
  const homeLink = document.getElementById('home-link');

  if (homeLink) {
    homeLink.addEventListener('click', (e) => {
      e.preventDefault();
      main.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      history.pushState("", document.title, window.location.pathname + window.location.search);
    });
  }
});