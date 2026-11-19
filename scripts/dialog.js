const saveButton = document.querySelector('.save-button');
const saveDialog = document.querySelector('#save-dialog');
saveButton.addEventListener('click', () => saveDialog.showModal());
document.querySelectorAll('.card').forEach((card) => {
  const heart = card.querySelector('.like-icon');
  const buttons = card.querySelectorAll('.card__icon-button, .card__like-button');
  new MutationObserver(() => {
    buttons.forEach((button) => button.setAttribute('aria-pressed', String(heart.classList.contains('is-liked'))));
  }).observe(heart, { attributes: true, attributeFilter: ['class'] });
});
