'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var form = setup.querySelector('.setup-wizard-form');
  var wizardCoatInput = form.querySelector('[name="coat-color"]');
  var wizardEyesInput = form.querySelector('[name="eyes-color"]');
  var fireballInput = form.querySelector('[name="fireball-color"]');

  var wizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
  var fireball = setup.querySelector('.setup-fireball-wrap');

  var onWizardCoatClick = function () {
    var coatColor = window.util.getNewColor(wizardCoat.style.fill, COAT_COLOR);
    wizardCoat.style.fill = coatColor;
    wizardCoatInput.value = coatColor;
  };

  var onWizardEyesClick = function () {
    var eyesColor = window.util.getNewColor(wizardEyes.style.fill, EYES_COLOR);
    wizardEyes.style.fill = eyesColor;
    wizardEyesInput.value = eyesColor;
  };

  var onFireballClick = function () {
    var fireballColor = window.util.getNewColor(fireball.style.background, FIREBALL_COLOR);
    fireball.style.background = fireballColor;
    fireballInput.value = fireballColor;
  };

  wizardCoat.addEventListener('click', onWizardCoatClick);
  wizardEyes.addEventListener('click', onWizardEyesClick);
  fireball.addEventListener('click', onFireballClick);

  var similarListElement = setup.querySelector('.setup-similar-list');

  var WIZARD_AMOUNT = 4;
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

  var getUniqueWizard = function (wizards, wizardsArray) {
    var uniqueWizard = window.util.getRandom(wizards);
    for (var i = 0; i < wizardsArray.length; i++) {
      if (wizardsArray[i].name === uniqueWizard.name) {
        uniqueWizard = getUniqueWizard(wizards, wizardsArray);
      }
    }

    return uniqueWizard;
  };

  var getWizards = function (wizards) {
    var wizardsArray = [];
    for (var i = 0; i < WIZARD_AMOUNT; i++) {
      wizardsArray.push(getUniqueWizard(wizards, wizardsArray));
    }

    window.util.appendChildren(similarListElement, renderWizards(wizardsArray));
    setup.querySelector('.setup-similar').classList.remove('hidden');
  };

  var renderWizards = function (wizards) {
    var wizardElements = [];

    for (var i = 0; i < wizards.length; i++) {
      var wizardElement = wizardTemplate.cloneNode(true);
      wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
      wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].colorCoat;
      wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].colorEyes;
      wizardElements.push(wizardElement);
    }

    return wizardElements;
  };

  window.backend.load(getWizards, window.util.errorHandler);

  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      setup.classList.add('hidden');
    }, window.util.errorHandler);
    evt.preventDefault();
  });
})();
