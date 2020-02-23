'use strict';

window.util = (function () {
  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';
  var DEBOUNCE_INTERVAL = 300;
  var lastTimeout;

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

      var result = children.reduce(function (acc, child) {
        acc.appendChild(child);
        return acc;
      }, fragment);

      parent.appendChild(result);
    },
    getMaxElement: function (arr) {
      return arr.reduce(function (max, next) {
        return Math.max(max, next);
      }, arr[0]);
    },
    errorHandler: function (errorMessage) {
      var node = document.createElement('div');
      node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
      node.style.position = 'absolute';
      node.style.left = 0;
      node.style.right = 0;
      node.style.fontSize = '30px';

      node.textContent = errorMessage;
      document.body.insertAdjacentElement('afterbegin', node);
    },
    isUnique: function (element, array) {
      var result = array.filter(function (currentElement) {
        return currentElement === element;
      });

      return result.length === 1;
    },
    debounce: function (cb) {
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(cb, DEBOUNCE_INTERVAL);
    }
  };
})();
