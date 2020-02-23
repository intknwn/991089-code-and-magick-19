'use strict';

(function () {
  var WIZARD_AMOUNT = 4;
  var wizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');
  var similarBlock = document.querySelector('.setup-similar');
  var similarList = document.querySelector('.setup-similar-list');

  window.render = function (wizards) {
    var firstWizardIndex = 0;
    var lastWizardIndex = wizards.length > WIZARD_AMOUNT ? WIZARD_AMOUNT : wizards.length;
    var wizardsArray = wizards.slice(firstWizardIndex, lastWizardIndex);

    similarList.innerHTML = '';
    window.util.appendChildren(similarList, renderWizards(wizardsArray));
    similarBlock.classList.remove('hidden');
  };

  var renderWizards = function (wizards) {
    var wizardElements = wizards.map(function (wizard) {
      var wizardElement = wizardTemplate.cloneNode(true);
      wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
      wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
      wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
      return wizardElement;
    });

    return wizardElements;
  };
})();
