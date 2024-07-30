/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/bakery_addons/index.js":
/*!***************************************!*\
  !*** ./src/js/bakery_addons/index.js ***!
  \***************************************/
/***/ (() => {

/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
(function ($) {
  'use strict';

  $(document).on('click', '.pointcentral-tab-banner .tab-list-item', function (e) {
    e.preventDefault();
    $('.pointcentral-tab-banner .tab-list-item').removeClass('active');
    $(this).addClass('active');
    $('.pointcentral-tab-banner .tab-content .tab-content-item').hide();
    $('.pointcentral-tab-banner .tab-content .tab-content-item[data-tab="' + $(this).data('tab') + '"]').show();
  });
  $(document).ready(function () {
    if ($('.pointcentral-testimonials-slider').length) {
      $('.pointcentral-testimonials-slider').each(function () {
        $(this).slick({
          dots: $(this).data('dots') === 'yes' ? true : false,
          infinite: $(this).data('infinite-loop') === 'yes' ? true : false,
          speed: 300,
          slidesToShow: 1,
          adaptiveHeight: true,
          autoplay: $(this).data('auto-play') === 'yes' ? true : false,
          autoplaySpeed: 3000,
          arrows: $(this).data('arrows') === 'yes' ? true : false,
          pauseOnHover: $(this).data('pause-on-hover') === 'yes' ? true : false
        });
      });
    }
    if ($('.pointcentral-logo-slider-wrap').length) {
      $('.pointcentral-logo-slider-wrap').each(function () {
        $(this).slick({
          dots: $(this).data('dots'),
          arrows: $(this).data('arrows'),
          pauseOnHover: $(this).data('pause-on-hover'),
          slidesToShow: $(this).data('slide-to-show'),
          slidesToScroll: $(this).data('slide-to-scroll'),
          autoplay: $(this).data('auto-play'),
          infinite: true,
          speed: 300,
          adaptiveHeight: true,
          autoplaySpeed: 2000
        });
      });
    }
  });
})(jQuery);

/***/ }),

/***/ "./src/js/navigation/index.js":
/*!************************************!*\
  !*** ./src/js/navigation/index.js ***!
  \************************************/
/***/ (() => {

/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
(function ($) {
  'use strict';

  $('.menu-toggle').click(function () {
    $('header .main-navigation').toggleClass('toggled');
  });

  // responsive menu css
  $('.main-navigation ul.menu>li.menu-item-has-children').on('click', function () {
    const windowWidth = $(window).width();
    if (767 > windowWidth) {
      $(this).find('.sub-menu,.children').slideToggle();
      $(this).toggleClass('active-sub');
    }
  });

  // Sticky Header
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 67) {
      $('.md-pointcentral-header').addClass('fixed-header');
    } else {
      $('.md-pointcentral-header').removeClass('fixed-header');
    }
  });
})(jQuery);

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
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
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _navigation_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation/index */ "./src/js/navigation/index.js");
/* harmony import */ var _navigation_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_navigation_index__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bakery_addons_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bakery_addons/index */ "./src/js/bakery_addons/index.js");
/* harmony import */ var _bakery_addons_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_bakery_addons_index__WEBPACK_IMPORTED_MODULE_2__);
// Styles


// Javascript


// Bakery Addons

})();

/******/ })()
;
//# sourceMappingURL=main.js.map