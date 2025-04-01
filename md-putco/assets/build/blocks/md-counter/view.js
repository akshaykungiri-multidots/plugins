/******/ (() => { // webpackBootstrap
/*!***************************************!*\
  !*** ./src/blocks/md-counter/view.js ***!
  \***************************************/
/**
 * File Sample-dynamic.js
 *
 */
(function ($) {
  "use strict";

  $(document).ready(function () {
    const counters = document.querySelectorAll(".md_counter_number");
    function formatNumber(number) {
      return number.toLocaleString('en-US'); // Formats the number with commas for thousands
    }
    counters.forEach(counter => {
      counter.innerText = "0";
      const updateCounter = () => {
        const count = +counter.innerText;
        const target = +counter.getAttribute("data-target");
        const increment = target / 200;
        const formattedTarget = formatNumber(count + increment);
        if (count < target) {
          counter.innerText = `${formattedTarget}`;
          setTimeout(updateCounter, 1);
        } else {
          counter.innerText = formatNumber(target);
        }
      };
      updateCounter();
    });
  });
})(jQuery);
/******/ })()
;
//# sourceMappingURL=view.js.map