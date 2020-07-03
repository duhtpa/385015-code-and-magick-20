'use strict';

(function () {
  window.util = {
    randomize: function (array) {
      var randomElementIndex = Math.floor(Math.random() * array.length);
      return array[randomElementIndex];
    },
    isEscEvent: function (evt, action) {
      if (evt.key === 'Escape') {
        action();
      }
    }
  };
})();
