document.addEventListener('DOMContentLoaded', function() {
  const modals = Array.from(document.querySelectorAll('.gallery-modal'));
  const triggers = document.querySelectorAll('.gallery-trigger');
  let currentModalIndex = -1;
  let touchstartX = 0;
  let touchendX = 0;

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

  function showNext() {
    showModal((currentModalIndex + 1) % modals.length);
  }

  function showPrev() {
    showModal((currentModalIndex - 1 + modals.length) % modals.length);
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

    const nextBtn = modal.querySelector('.gallery-next');
    if (nextBtn) {
      nextBtn.addEventListener('click', showNext);
    }

    const prevBtn = modal.querySelector('.gallery-prev');
    if (prevBtn) {
      prevBtn.addEventListener('click', showPrev);
    }

    // Swipe gestures
    modal.addEventListener('touchstart', function(event) {
        touchstartX = event.changedTouches[0].screenX;
    }, false);

    modal.addEventListener('touchend', function(event) {
        touchendX = event.changedTouches[0].screenX;
        handleGesture();
    }, false); 
  });

  function handleGesture() {
    if (touchendX < touchstartX) {
        showNext();
    }

    if (touchendX > touchstartX) {
        showPrev();
    }
  }

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' || e.key === 'Esc') {
      hideModals();
    }
    if (currentModalIndex !== -1) {
      if (e.key === 'ArrowRight') {
        showNext();
      }
      if (e.key === 'ArrowLeft') {
        showPrev();
      }
    }
  });
});
