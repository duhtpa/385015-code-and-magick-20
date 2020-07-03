'use strict';

(function () {
  var COAT_COLOR = [
    'rgb(146, 100, 161)',
    'rgb(215, 210, 55)',
    'rgb(241, 43, 107)',
    'rgb(101, 137, 164)',
    'rgb(0, 0, 0)',
    'rgb(215, 210, 55)',
    'rgb(56, 159, 117)',
    'rgb(241, 43, 107)'
  ];

  var EYES_COLOR = [
    'red',
    'orange',
    'yellow',
    'green',
    'lightblue',
    'blue',
    'purple',
    'black'
  ];

  var FIREBALL_COLOR = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var wizard = {
    onEyesChange: function (color) {
      return color;
    },
    onCoatChange: function (color) {
      return color;
    }
  };

  var wizardElement = document.querySelector('.setup-wizard');
  var wizardCoatElement = wizardElement.querySelector('.wizard-coat');
  var wizardEyesElement = wizardElement.querySelector('.wizard-eyes');

  wizardCoatElement.addEventListener('click', function () {
    var newColor = window.util.randomize(COAT_COLOR);
    wizardCoatElement.style.fill = newColor;
    wizard.onCoatChange(newColor);
  });

  wizardEyesElement.addEventListener('click', function () {
    var newColor = window.util.randomize(EYES_COLOR);
    wizardEyesElement.style.fill = newColor;
    wizard.onEyesChange(newColor);
  });

  var getWizardColorParameter = function (wizardParameter) {
    var arrColorsName;

    if (wizardParameter === 'wizard-coat') {
      arrColorsName = COAT_COLOR;
    } else if (wizardParameter === 'wizard-eyes') {
      arrColorsName = EYES_COLOR;
    } else if (wizardParameter === 'setup-fireball') {
      arrColorsName = FIREBALL_COLOR;
    }

    return arrColorsName;
  };

  var getColorByGroup = function (colorGroup) {
    var color = colorGroup[window.util.randomize(colorGroup)];

    return color;
  };

  window.colorize = {
    getWizardColorParameter: getWizardColorParameter,
    getColorByGroup: getColorByGroup,
    wizard: wizard
  };
})();
