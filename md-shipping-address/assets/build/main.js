/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/frontend/index.js":
/*!**********************************!*\
  !*** ./src/js/frontend/index.js ***!
  \**********************************/
/***/ (() => {

/**
 * File frontend.js.
 *
 * Handles frontend scripts
 */
(function ($) {
  'use strict';

  $(document).ready(function () {
    // display shiiping address on checkout page when check md_display_shipping_address is checked
    $(document.body).on('change', '#md_display_shipping_address', function () {
      if ($(this).is(':checked')) {
        $('.md-shipping-address').show();
      } else {
        $('.md-shipping-address').hide();
      } // Apply select2 to country and state


      $('.md-country-dropdown select, .md-state-dropdown select').select2({
        width: '100%'
      });
    });
  });

  function updateStates(countryField, stateField) {
    var country = countryField.val();
    var stateContainer = stateField.closest('.woocommerce-input-wrapper'); // Clear existing states

    stateField.empty().append('<option value="">Select a state...</option>').attr('disabled', 'disabled'); // If country is selected

    if (country) {
      $.ajax({
        type: 'POST',
        url: siteConfig.ajaxUrl,
        data: {
          action: 'md_get_states_by_country',
          country: country,
          nonce: siteConfig.ajax_nonce
        },
        success: function (result) {
          if (result) {
            var states = result;

            if (states.success === false) {
              stateField.append('<option value="">No states found</option>');
            } else {
              stateField.html(states.data);
            }

            stateField.removeAttr('disabled');
            return;
          }
        }
      });
    }
  } // Trigger updateStates on country change


  $(document).on('change', '.md-country-dropdown select', function () {
    var countryField = $(this);
    var stateField = countryField.parent().parent().parent().find('.md-state-dropdown select');
    updateStates(countryField, stateField);
  });
})(jQuery);

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/main.scss */ "./src/sass/main.scss");
/* harmony import */ var _frontend_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./frontend/index */ "./src/js/frontend/index.js");
/* harmony import */ var _frontend_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_frontend_index__WEBPACK_IMPORTED_MODULE_1__);
// Styles
 // Javascript


})();

/******/ })()
;
//# sourceMappingURL=main.js.map