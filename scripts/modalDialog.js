document.addEventListener('DOMContentLoaded', function() {

  let showButton = document.querySelector('.js-open-modal');
  let closeButton = document.querySelector('.js-close-modal');
  let modalWindow = document.querySelector('.modal-container');

  if (showButton !== null) {
    showButton.addEventListener('click', function (e) {
      e.preventDefault();
      modalWindow.classList.remove('hide');
    });
  }

  if (closeButton !== null) {
    closeButton.addEventListener('click', function (e) {
      e.preventDefault();
      modalWindow.classList.add('hide');
    });
  }
});
