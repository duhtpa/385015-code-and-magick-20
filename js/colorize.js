'use strict';

(function () {
  var COAT_COLOR = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var EYES_COLOR = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var FIREBALL_COLOR = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  window.colorize = {
    getWizardColorParameter: function (wizardParameter) {
      var arrColorsName;

      if (wizardParameter === 'wizard-coat') {
        arrColorsName = COAT_COLOR;
      } else if (wizardParameter === 'wizard-eyes') {
        arrColorsName = EYES_COLOR;
      } else if (wizardParameter === 'setup-fireball') {
        arrColorsName = FIREBALL_COLOR;
      }

      return arrColorsName;
    },

    getColorByGroup: function (colorGroup) {
      var color = colorGroup[window.util.randomize(0, colorGroup.length - 1)];

      return color;
    }
  };
})();
