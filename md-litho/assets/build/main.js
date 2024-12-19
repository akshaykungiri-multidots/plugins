/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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
  "use strict";

  $(".menu-toggle").click(function () {
    $("header .main-navigation").toggleClass("toggled");
  });

  // responsive menu css
  $(".main-navigation ul.menu>li.menu-item-has-children").on("click", function () {
    const windowWidth = $(window).width();
    if (767 > windowWidth) {
      $(this).find(".sub-menu,.children").slideToggle();
      $(this).toggleClass("active-sub");
    }
  });

  // Sticky Header
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 67) {
      $(".md-litho-header").addClass("fixed-header");
    } else {
      $(".md-litho-header").removeClass("fixed-header");
    }
  });
  function mdCreateSlickSlider() {
    $(".md_hero_banner_slider").find(".md_slider").each(function () {
      const autoplay = $(this).data("autoplay");
      const arrows = $(this).data("arrows");
      const dots = $(this).data("dots");
      const infinite = $(this).data("infinite");
      const slidesToShow = $(this).data("slidestoshow");
      const slidesToScroll = $(this).data("slidestoscroll");
      $(this).slick({
        autoplay,
        arrows,
        dots,
        infinite,
        slidesToShow,
        slidesToScroll
      });
    });
    $(".md_hero_banner_slider").find(".md_slider_v2").each(function () {
      const autoplay = $(this).data("autoplay");
      const arrows = $(this).data("arrows");
      const dots = $(this).data("dots");
      const infinite = $(this).data("infinite");
      const slidesToShow = $(this).data("slidestoshow");
      const slidesToScroll = $(this).data("slidestoscroll");
      $(this).slick({
        autoplay,
        arrows,
        dots,
        infinite,
        slidesToShow,
        slidesToScroll,
        centerMode: true
      });
    });
    $(".md_service_banner_slider").find(".md_slider").each(function () {
      const autoplay = $(this).data("autoplay");
      const arrows = $(this).data("arrows");
      const dots = $(this).data("dots");
      const infinite = $(this).data("infinite");
      const slidesToShow = $(this).data("slidestoshow");
      const slidesToScroll = $(this).data("slidestoscroll");
      $(this).slick({
        autoplay,
        arrows,
        dots,
        infinite,
        slidesToShow,
        slidesToScroll
      });
    });
  }
  mdCreateSlickSlider();
  jQuery(document).ready(function () {
    $(document).on("click", ".md_about_tabs__inner .md_about_tabs_item", function () {
      const tabIndex = $(this).data("tab");
      $(this).addClass("active").siblings().removeClass("active");
      $(".md_about_tabs__content-inner[data-tab=" + tabIndex + "]").addClass("active").siblings().removeClass("active");
    });
    $(document).on("click", ".md_portfolio_category_item", function () {
      const category = $(this).data("category");
      $(".md_portfolio_item").removeClass("active");
      $(".md_portfolio_category_item").removeClass("active");
      if (category === "") {
        $(".md_portfolio_item").addClass("active");
      } else {
        $(".md_portfolio_item[data-category=" + category + "]").addClass("active");
      }
      $(this).addClass("active");
    });
  });
  $(document).on("submit", ".md-subscribe__form form", function (e) {
    e.preventDefault();
    const form = $(this);
    const email = form.find("input[name=email]").val();
    const action = form.attr("action");
    $.ajax({
      type: "POST",
      url: action,
      data: {
        email
      },
      success() {
        form.parent().find(".md-subscribe__success-message").show();
      },
      error() {
        form.parent().find(".md-subscribe__error-message").show();
      }
    });
  });
  $(".md_logo_slider__slider").each(function () {
    const slidesToShow = $(this).data("slides-to-show");
    const slidesToScroll = $(this).data("slides-to-scroll");
    $(this).slick({
      slidesToShow,
      slidesToScroll,
      autoplay: $(this).data("autoplay") ? 1 : 0,
      infinite: $(this).data("infinite"),
      dots: $(this).data("show-dots"),
      arrows: $(this).data("show-arrows")
    });
  });
  $(document).on("click", ".md_litho_pricing_table_terms ul li button", function () {
    const termPlan = $(this).data("term");
    $(this).parent().addClass("active").siblings().removeClass("active");
    $(".md_litho_pricing_table_item").removeClass("active");
    $(".md_litho_pricing_table_item[data-term=" + termPlan + "]").addClass("active");
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
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _navigation_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation/index */ "./src/js/navigation/index.js");
/* harmony import */ var _navigation_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_navigation_index__WEBPACK_IMPORTED_MODULE_1__);
// Styles


// Javascript

})();

/******/ })()
;
//# sourceMappingURL=main.js.map