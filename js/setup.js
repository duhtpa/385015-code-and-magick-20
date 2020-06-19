'use strict';

var WIZARDS_COUNT = 4;

var WIZARD_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var WIZARD_SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var getWizard = function () {
  var wizard = {
    name: WIZARD_NAMES[window.util.randomize(0, WIZARD_NAMES.length - 1)] + ' ' + WIZARD_SURNAMES[window.util.randomize(0, WIZARD_SURNAMES.length - 1)],
    coatColor: window.colorize.getColorByGroup(window.colorize.getWizardColorParameter('wizard-coat')),
    eyesColor: window.colorize.getColorByGroup(window.colorize.getWizardColorParameter('wizard-eyes'))
  };

  return wizard;
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var renderWizardsList = function (count) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < count; i++) {
    fragment.appendChild(renderWizard(getWizard()));
  }
  similarListElement.appendChild(fragment);
};

renderWizardsList(WIZARDS_COUNT);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
