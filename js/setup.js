'use strict';

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');
var similarListElement = setup.querySelector('.setup-similar-list');

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

appendChildren(similarListElement, renderWizards(createWizards(4)));
setup.querySelector('.setup-similar').classList.remove('hidden');
