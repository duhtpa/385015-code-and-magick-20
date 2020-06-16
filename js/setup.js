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

var getRandomInteger = function (min, max) {
  var rand = min + Math.random() * (max - min + 1);
  return Math.round(rand);
};

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var getWizard = function () {
  var wizard = {
    name: WIZARD_NAMES[getRandomInteger(0, WIZARD_NAMES.length - 1)] + ' ' + WIZARD_SURNAMES[getRandomInteger(0, WIZARD_SURNAMES.length - 1)],
    coatColor: COAT_COLOR[getRandomInteger(0, COAT_COLOR.length - 1)],
    eyesColor: EYES_COLOR[getRandomInteger(0, EYES_COLOR.length - 1)]
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

// 4. Обработка событий. Открытие/закрытие окна настройки персонажа
var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

// 4. Обработка событий. Валидация ввода имени персонажа
var MIN_NAME_LENGTH = 2;
var MAX_NAME_LENGTH = 25;

var userNameInput = document.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function () {
  var valueLength = userNameInput.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) + ' симв.');
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity('Удалите лишние ' + (valueLength - MAX_NAME_LENGTH) + ' симв.');
  } else {
    userNameInput.setCustomValidity('');
  }
});

var popupCreationWizard = document.querySelector('.setup-wizard-form');

var wizardCoatColorSelected = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyesColorSelected = document.querySelector('.setup-wizard .wizard-eyes');
var wizardFireballColorSelected = document.querySelector('.setup-fireball-wrap');
var inputCoatColorSelected = document.getElementsByName('coat-color');
var inputEyesColorSelected = document.getElementsByName('eyes-color');
var inputFireballColorSelected = document.getElementsByName('fireball-color');

popupCreationWizard.addEventListener('click', function (evt) {
  var wizardParameter = evt.target.classList.value;
  var wizardColorArr = getWizardColorParameter(wizardParameter);

  if (wizardParameter === 'setup-fireball') {
    var fireballColor = FIREBALL_COLOR[getRandomInteger(0, FIREBALL_COLOR.length - 1)];
    wizardFireballColorSelected.style = 'background-color:' + fireballColor;
  } else {
    evt.target.style.fill = wizardColorArr[getRandomInteger(0, wizardColorArr.length - 1)];
  }

  setColorsInputs(fireballColor);
}, true);

var setColorsInputs = function (fireballColor) {
  inputCoatColorSelected[0].value = wizardCoatColorSelected.style.fill;

  if (wizardFireballColorSelected.style.backgroundColor) {
    inputFireballColorSelected[0].value = fireballColor;
  }

  if (wizardEyesColorSelected.style.fill) {
    inputEyesColorSelected[0].value = wizardEyesColorSelected.style.fill;
  }
};

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
