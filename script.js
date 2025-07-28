// Open the modal when you click “View”
document.querySelectorAll('[data-modal]').forEach(btn =>
  btn.addEventListener('click', () => {
    const modal = document.getElementById(btn.dataset.modal);
    if (modal) modal.style.display = 'flex';
  })
);

// Close button inside the modal
document.querySelectorAll('.close').forEach(btn =>
  btn.addEventListener('click', () => {
    const modal = document.getElementById(btn.dataset.modal);
    if (modal) modal.style.display = 'none';
  })
);

// Close if you click outside the modal content
window.addEventListener('click', e => {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
  }
});
