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
  var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLOR = [
    'rgb(238, 72, 48)',
    'rgb(48, 168, 238)',
    'rgb(92, 230, 192)',
    'rgb(232, 72, 213)',
    'rgb(230, 232, 72)'
  ];

  var setup = document.querySelector('.setup');
  var form = setup.querySelector('.setup-wizard-form');

  var wizardCoatInput = form.querySelector('[name="coat-color"]');
  var wizardEyesInput = form.querySelector('[name="eyes-color"]');
  var wizardFireballInput = form.querySelector('[name="fireball-color"]');

  var wizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireball = setup.querySelector('.setup-fireball-wrap');

  var onWizardCoatClick = function () {
    var newCoatColor = window.util.getNewColor(wizardCoat.style.fill, COAT_COLOR);
    wizardCoat.style.fill = newCoatColor;
    wizardCoatInput.value = newCoatColor;
    wizard.onCoatChange(newCoatColor);
  };

  var onWizardEyesClick = function () {
    var newEyesColor = window.util.getNewColor(wizardEyes.style.fill, EYES_COLOR);
    wizardEyes.style.fill = newEyesColor;
    wizardEyesInput.value = newEyesColor;
    wizard.onEyesChange(newEyesColor);
  };

  var onFireballClick = function () {
    var fireballColor = window.util.getNewColor(wizardFireball.style.background, FIREBALL_COLOR);
    wizardFireball.style.background = fireballColor;
    wizardFireballInput.value = fireballColor;
  };

  wizardCoat.addEventListener('click', onWizardCoatClick);
  wizardEyes.addEventListener('click', onWizardEyesClick);
  wizardFireball.addEventListener('click', onFireballClick);

  var wizard = {
    coatColor: wizardCoat.style.fill,
    eyesColor: wizardEyes.style.fill,
    onEyesChange: function () {},
    onCoatChange: function () {}
  };

  window.wizard = wizard;
})();
