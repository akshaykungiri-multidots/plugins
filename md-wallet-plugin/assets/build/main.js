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
  "use strict";

  var publishableKey = siteConfig.publishableKey;
  var md_wallet_nonce = siteConfig.md_wallet_nonce;
  var stripe = Stripe(publishableKey);

  function createCheckoutSession() {
    let amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    let order_id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    fetch("/wp-json/md-wallet/v1/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        amount: amount,
        order_id: order_id,
        customer_id: $("#md_wallet_customer_id").val(),
        customer_email: $("#md_wallet_customer_email").val(),
        customer_name: $("#md_wallet_customer_name").val(),
        customer_billing_address: $("#md_wallet_customer_billing_address").val(),
        customer_billing_address_2: $("#md_wallet_customer_billing_address_2").val(),
        customer_city: $("#md_wallet_customer_city").val(),
        customer_state: $("#md_wallet_customer_state").val(),
        customer_postal_code: $("#md_wallet_customer_postal_code").val(),
        customer_country: $("#md_wallet_customer_country").val(),
        md_wallet_nonce: md_wallet_nonce
      })
    }).then(function (response) {
      return response.json();
    }).then(function (session) {
      return stripe.redirectToCheckout({
        sessionId: session.id
      });
    }).then(function (result) {
      if (result.error) {
        alert(result.error.message);
      }
    }).catch(function (error) {
      console.error("Error:", error);
    });
  }

  $(document).ready(function () {
    // 2. Creating a submit event and checking for errors
    const form = document.getElementById("payment-form");
    form.addEventListener("submit", async event => {
      event.preventDefault();
      let amount = $("#md_wallet_amount").val();
      createCheckoutSession(amount);
    });
  });
  $(document).on("click", ".md-wallet_action.pay", function (e) {
    e.preventDefault();
    let amount = $(this).data("amount");
    let order_id = $(this).data("order_id");
    createCheckoutSession(amount, order_id);
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