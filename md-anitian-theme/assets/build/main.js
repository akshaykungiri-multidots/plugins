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

  $(document).on("click", ".md_anitian_leadership__tabs li a", function () {
    var tab_id = $(this).attr('href');
    $('.md_anitian_leadership__tabs .tab-content .tab-pane').removeClass('show');
    $('.md_anitian_leadership__tabs li').removeClass('active');
    $(this).parent().addClass('active');
    $(tab_id).addClass('show');
  });
  $(document).on("click", ".leadership__member-description .read-more", function () {
    $(this).parent().find('.hidden-description').show();
    $(this).parent().find('.read-less').show();
    $(this).parent().find('.ellipsis').hide();
    $(this).hide();
  });
  $(document).on("click", ".leadership__member-description .read-less", function () {
    $(this).parent().find('.hidden-description').hide();
    $(this).parent().find('.read-more').show();
    $(this).parent().find('.ellipsis').show();
    $(this).hide();
  });
  function md_create_slick_slider() {
    // Create slick slider js for md-slick-slider.
    setTimeout(function () {
      var $slider = $('.md-slick-slider');
      if ($slider.length > 0) {
        $slider.each(function () {
          if ($(this).hasClass('slick-initialized')) {
            $(this).slick('unslick');
          }
          console.log($(this).data('dots'));
          $(this).slick({
            slidesToShow: $(this).data('slides-to-show'),
            slidesToScroll: $(this).data('slides-to-scroll'),
            autoplay: $(this).data('autoplay') == 'yes' ? true : false,
            autoplaySpeed: $(this).data('autoplay-speed'),
            infinite: $(this).data('infinite-scroll') == 'yes' ? true : false,
            arrows: $(this).data('arrows') == 'yes' ? true : false,
            dots: $(this).data('dots') == 'yes' ? true : false,
            speed: 300
          });
        });
      }
    }, 10);
  }
  md_create_slick_slider();
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
      $('.md-anitian-header').addClass('fixed-header');
    } else {
      $('.md-anitian-header').removeClass('fixed-header');
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