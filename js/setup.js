'use strict';

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY && !evt.target.matches('.setup-user-name')) {
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

setupOpen.addEventListener('click', openPopup);
setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});
setupClose.addEventListener('click', closePopup);
setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

var form = setup.querySelector('.setup-wizard-form');
var wizardCoatInput = form.querySelector('[name="coat-color"]');
var wizardEyesInput = form.querySelector('[name="eyes-color"]');
var fireballInput = form.querySelector('[name="fireball-color"]');

var wizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
var fireball = setup.querySelector('.setup-fireball-wrap');

var getNewColor = function (currentColor, colors) {
  if (!currentColor) {
    return getRandom(colors);
  }

  var currentColorIndex = colors.indexOf(currentColor);
  var nextColorIndex = currentColorIndex + 1;

  return nextColorIndex > colors.length - 1 ? colors[0] : colors[nextColorIndex];
};

var onWizardCoatClick = function () {
  var coatColor = getNewColor(wizardCoat.style.fill, COAT_COLOR);
  wizardCoat.style.fill = coatColor;
  wizardCoatInput.value = coatColor;
};

var onWizardEyesClick = function () {
  var eyesColor = getNewColor(wizardEyes.style.fill, EYES_COLOR);
  wizardEyes.style.fill = eyesColor;
  wizardEyesInput.value = eyesColor;
};

var onFireballClick = function () {
  var fireballColor = getNewColor(fireball.style.background, FIREBALL_COLOR);
  fireball.style.background = fireballColor;
  fireballInput.value = fireballColor;
};

wizardCoat.addEventListener('click', onWizardCoatClick);
wizardEyes.addEventListener('click', onWizardEyesClick);
fireball.addEventListener('click', onFireballClick);

var similarListElement = setup.querySelector('.setup-similar-list');

var WIZARD_AMOUNT = 4;
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLOR = [
  'rgb(238, 72, 48)',
  'rgb(48, 168, 238)',
  'rgb(92, 230, 192)',
  'rgb(232, 72, 213)',
  'rgb(230, 232, 72)'
];

var wizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var getRandom = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var createWizards = function (wizardsAmount) {
  var wizards = [];
  for (var i = 0; i < wizardsAmount; i++) {
    wizards.push({
      name: getRandom(WIZARD_NAMES) + ' ' + getRandom(WIZARD_LAST_NAMES),
      coatColor: getRandom(COAT_COLOR),
      eyesColor: getRandom(EYES_COLOR)
    });
  }

  return wizards;
};

var renderWizards = function (wizards) {
  var wizardElements = [];

  for (var i = 0; i < wizards.length; i++) {
    var wizardElement = wizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
    wizardElements.push(wizardElement);
  }

  return wizardElements;
};

var appendChildren = function (parent, children) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < children.length; i++) {
    fragment.appendChild(children[i]);
  }

  parent.appendChild(fragment);
};

appendChildren(similarListElement, renderWizards(createWizards(WIZARD_AMOUNT)));
setup.querySelector('.setup-similar').classList.remove('hidden');
