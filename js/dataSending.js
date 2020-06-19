'use strict';

(function () {
  var popupCreationWizard = document.querySelector('.setup-wizard-form');

  var wizardCoatColorSelected = document.querySelector('.setup-wizard .wizard-coat');
  var wizardEyesColorSelected = document.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireballColorSelected = document.querySelector('.setup-fireball-wrap');
  var inputCoatColorSelected = document.getElementsByName('coat-color');
  var inputEyesColorSelected = document.getElementsByName('eyes-color');
  var inputFireballColorSelected = document.getElementsByName('fireball-color');

  popupCreationWizard.addEventListener('click', function (evt) {
    var wizardParameter = evt.target.classList.value;
    var wizardColorArr = window.colorize.getWizardColorParameter(wizardParameter);

    if (wizardParameter === 'setup-fireball') {
      var arrColorsName = window.colorize.getWizardColorParameter(wizardParameter);
      var fireballColor = window.colorize.getColorByGroup(arrColorsName);
      wizardFireballColorSelected.style = 'background-color:' + fireballColor;
    } else {
      evt.target.style.fill = window.colorize.getColorByGroup(wizardColorArr);
    }

    setColorsInputs(fireballColor);
  }, true);

  var setColorsInputs = function (fireballColor) {
    inputCoatColorSelected[0].value = wizardCoatColorSelected.style.fill;

    if (wizardFireballColorSelected.style.backgroundColor && fireballColor !== undefined) {
      inputFireballColorSelected[0].value = fireballColor;
    }

    if (wizardEyesColorSelected.style.fill) {
      inputEyesColorSelected[0].value = wizardEyesColorSelected.style.fill;
    }
  };
})();
