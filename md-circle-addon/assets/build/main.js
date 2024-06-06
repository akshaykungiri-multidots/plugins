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

  function md_create_slick_slider() {
    // Create slick slider js for circle_slick_slider.
    setTimeout(function () {
      var $slider = $('.circle_slick_slider');

      if ($slider.length > 0) {
        $slider.each(function () {
          if ($(this).hasClass('slick-initialized')) {
            $(this).slick('unslick');
          }

          $(this).slick({
            slidesToShow: $(this).data('slide-to-show'),
            slidesToScroll: $(this).data('slide-to-scroll'),
            autoplay: $(this).data('autoplay') == 'yes' ? true : false,
            autoplaySpeed: $(this).data('autoplay-speed'),
            infinite: $(this).data('infinite') == 'yes' ? true : false,
            arrows: $(this).data('arrows') == 'yes' ? true : false,
            dots: $(this).data('dots') == 'yes' ? true : false,
            pauseOnHover: $(this).data('pause-on-hover') == 'yes' ? true : false,
            adaptiveHeight: $(this).data('adaptive-height') == 'yes' ? true : false,
            centerMode: $(this).data('center-mode') == 'yes' ? true : false,
            speed: 300
          });
        });
      }
    }, 10);
  }

  $(window).on('elementor/frontend/init', function () {
    elementorFrontend.hooks.addAction('frontend/element_ready/circle_faq.default', function (scope, $) {
      $(document).on('click', '.circle-faq-title', function () {
        // Slide up except the current one
        $('.circle-faq-content').not($(this).next('.circle-faq-content')).slideUp(); // Change the icon of the current one

        $('.circle-faq-title').not($(this)).find('i').removeClass('fa-minus').addClass('fa-plus');
        $(this).next('.circle-faq-content').slideDown();
        $(this).find('i').toggleClass('fa-minus fa-plus'); // Change image of right side

        var imageUrl = $(this).parent().find('.circle-faq-image').data('faq-image');
        $('.circle-faq-item-image img').attr('src', imageUrl);
      });
    });
    elementorFrontend.hooks.addAction('frontend/element_ready/circle-animated-text-banner.default', function (scope, $) {
      setTimeout(function () {
        let animated_titles = $('.circle-animated-text-banner__title').find('.animated-title').data('animated-titles');
        let animated_titles_array = [];

        if (animated_titles) {
          animated_titles.map(_ref => {
            let {
              animated_title
            } = _ref;
            animated_titles_array.push(animated_title);
          });
          window.ityped.init(document.querySelector('.animated-title'), {
            strings: animated_titles_array,
            loop: true
          });
        }
      }, 1000);
    });
    elementorFrontend.hooks.addAction('frontend/element_ready/circle_image_categories.default', function (scope, $) {
      $(document).on('click', '.circle-image-categories__category_name', function () {
        $(this).parent().find('.circle-image-categories__category_name').removeClass('active');
        $(this).addClass('active');
        $(this).parent().parent().find('.circle-image-categories__category_content').removeClass('active');
        let category_key = $(this).data('category-key');
        $(this).parent().parent().find('.circle-image-categories__category_content[data-category-key="' + category_key + '"]').addClass('active');
      });
    });
    elementorFrontend.hooks.addAction('frontend/element_ready/circle-testimonials.default', function (scope, $) {
      md_create_slick_slider();
    });
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