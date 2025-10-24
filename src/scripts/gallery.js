document.addEventListener('DOMContentLoaded', function() {
  const modals = Array.from(document.querySelectorAll('.gallery-modal'));
  const triggers = document.querySelectorAll('.gallery-trigger');
  let currentModalIndex = -1;

  modals.forEach(modal => {
    document.body.appendChild(modal);
  });

  function showModal(index) {
    if (currentModalIndex !== -1) {
      modals[currentModalIndex].classList.add('hidden');
    }
    if (index >= 0 && index < modals.length) {
      modals[index].classList.remove('hidden');
      currentModalIndex = index;
    } else {
      currentModalIndex = -1;
    }
  }

  function hideModals() {
    if (currentModalIndex !== -1) {
      modals[currentModalIndex].classList.add('hidden');
      currentModalIndex = -1;
    }
  }

  triggers.forEach(btn => {
    btn.addEventListener('click', function() {
      const idx = parseInt(btn.getAttribute('data-modal'), 10);
      showModal(idx);
    });
  });

  modals.forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (!e.target.closest('.gallery-modal-content')) {
        hideModals();
      }
    });
    const closeBtn = modal.querySelector('.gallery-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', hideModals);
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' || e.key === 'Esc') {
      hideModals();
    }
    if (currentModalIndex !== -1) {
      if (e.key === 'ArrowRight') {
        showModal((currentModalIndex + 1) % modals.length);
      }
      if (e.key === 'ArrowLeft') {
        showModal((currentModalIndex - 1 + modals.length) % modals.length);
      }
    }
  });
});
