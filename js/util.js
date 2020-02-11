'use strict';

window.util = (function () {
  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';

  return {
    isEscEvent: function (evt) {
      if (evt.key === ESC_KEY) {
        return true;
      }

      return false;
    },
    isEnterEvent: function (evt) {
      if (evt.key === ENTER_KEY) {
        return true;
      }

      return false;
    },
    getRandom: function (arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    },
    getNewColor: function (currentColor, colors) {
      if (!currentColor) {
        return this.getRandom(colors);
      }

      var currentColorIndex = colors.indexOf(currentColor);
      var nextColorIndex = currentColorIndex + 1;

      return nextColorIndex > colors.length - 1 ? colors[0] : colors[nextColorIndex];
    },
    appendChildren: function (parent, children) {
      var fragment = document.createDocumentFragment();

      for (var i = 0; i < children.length; i++) {
        fragment.appendChild(children[i]);
      }

      parent.appendChild(fragment);
    },
    getMaxElement: function (arr) {
      var maxElement = arr[0];

      for (var i = 0; i < arr.length; i++) {
        maxElement = Math.max(maxElement, arr[i]);
      }

      return maxElement;
    }
  };
})();
