'use strict';

(function () {
  window.util = {
    randomize: function (min, max) {
      var rand = min + Math.random() * (max - min + 1);
      return Math.round(rand);
    },

    isEscEvent: function (evt, action) {
      if (evt.key === 'Escape') {
        action();
      }
    }
  };
})();
