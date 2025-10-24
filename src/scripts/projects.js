function filterProjects(filter) {
  const projects = document.querySelectorAll('.project-item');
  const buttons = document.querySelectorAll('[data-filter]');

  // Update button states
  buttons.forEach(button => {
    if (button.dataset.filter === filter) {
      button.className = 'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 bg-gray-900 text-white';
    } else {
      button.className = 'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 bg-gray-100 text-gray-700 hover:bg-gray-200';
    }
  });

  // Filter projects
  projects.forEach(project => {
    const category = project.dataset.category;
    if (filter === 'all' || category === filter) {
      project.style.display = 'block';
      project.style.animation = 'fadeIn 0.3s ease-in-out';
    } else {
      project.style.display = 'none';
    }
  });
}

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);

// Add event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('[data-filter]');
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.dataset.filter;
      filterProjects(filter);
    });
  });
});
