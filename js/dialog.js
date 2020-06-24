'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var userDialogOpen = document.querySelector('.setup-open');
  var userDialogClose = userDialog.querySelector('.setup-close');

  var onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closePopup);
  };

  var openPopup = function () {
    userDialog.classList.remove('hidden');

    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    userDialog.classList.add('hidden');

    var setupDialogElement = document.querySelector('.setup');
    setupDialogElement.style.top = '80px';
    setupDialogElement.style.left = '50%';

    document.removeEventListener('keydown', onPopupEscPress);
  };

  userDialogOpen.addEventListener('click', function () {
    openPopup();
  });

  userDialogOpen.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      openPopup();
    }
  });

  userDialogClose.addEventListener('click', function () {
    closePopup();
  });

  userDialogClose.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      closePopup();
    }
  });
})();
