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
      $(".md-woodward-header").addClass("fixed-header");
    } else {
      $(".md-woodward-header").removeClass("fixed-header");
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
    $(".md_media_text_slideshow_media").find(".md_slider").each(function () {
      const autoplay = $(this).data("autoplay");
      const autoplaySpeed = $(this).data("autoplayspeed");
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
        autoplaySpeed
      });
    });
    $(".md_our_team_media").find(".md_slider").each(function () {
      const autoplay = $(this).data("autoplay");
      const autoplaySpeed = $(this).data("autoplayspeed");
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
        autoplaySpeed
      });
    });
  }
  $(document).on("click", ".md_hero_banner_slider_v2 .slick-prev", function () {
    $(".md_hero_banner_slider_v2 .md_slider").slick("slickPrev");
  });
  $(document).on("click", ".md_hero_banner_slider_v2 .slick-next", function () {
    $(".md_hero_banner_slider_v2 .md_slider").slick("slickNext");
  });
  mdCreateSlickSlider();
  $('.md_logo_slider__slider').each(function () {
    const slidesToShow = $(this).data('slides-to-show');
    const slidesToScroll = $(this).data('slides-to-scroll');
    $(this).slick({
      slidesToShow,
      slidesToScroll,
      autoplay: $(this).data('autoplay') ? 1 : 0,
      infinite: $(this).data('infinite'),
      dots: $(this).data('show-dots'),
      arrows: $(this).data('show-arrows')
    });
  });
  $(document).on("click", ".md_suppliers_block__tabs .md_suppliers_block__tabs-title .md_suppliers_block__tab-title-wrap", function () {
    const tab = $(this).data("tab");
    $(this).closest(".md_suppliers_block__tabs").find(".md_suppliers_block__tab-title-wrap").removeClass("active");
    $(this).addClass("active");
    $(this).closest(".md_suppliers_block__tabs").find(".md_suppliers_block__tabs-content .md_suppliers_block__tab-content_item").removeClass("active");
    $(this).closest(".md_suppliers_block__tabs").find(".md_suppliers_block__tabs-content .md_suppliers_block__tab-content_item[data-tab='" + tab + "']").addClass("active");
  });
  $(document).on("click", ".md_tab_navigation_list .md_tab_navigation_item", function () {
    const tab = $(this).data("tab");
    $(this).closest(".md_tab_navigation_list").find(".md_tab_navigation_item").removeClass("active");
    $(this).addClass("active");
    $(this).closest(".md_tab_navigation_inner").find(".md_tab_navigation_content_item").removeClass("active");
    $(this).closest(".md_tab_navigation_inner").find(".md_tab_navigation_content_item[data-tab='" + tab + "']").addClass("active");
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