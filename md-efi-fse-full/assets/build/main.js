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
      $(".md-efi-fse-full-header").addClass("fixed-header");
    } else {
      $(".md-efi-fse-full-header").removeClass("fixed-header");
    }
  });
  function md_load_posts() {
    let post_attributes = $(".md-posts").find('input[name="md-posts__loadmore-post_attributes"]').val();
    let taxonomies = [];
    $(".md-posts__filter .md-posts__filter-select").each(function () {
      let taxonomy = $(this).attr("name");
      console.log(taxonomy);
      let term = $(this).val();
      if (term == "") {
        return;
      }
      taxonomies.push({
        taxonomy: taxonomy,
        term: term
      });
    });
    let current_page = $(".md-posts").find('input[name="md-posts__loadmore-current_page"]').val();
    var data = {
      action: "md_efi_fse_full_load_more",
      post_attributes: post_attributes,
      current_page: current_page,
      taxonomies: taxonomies,
      ajax_nonce: siteConfig.ajax_nonce
    };
    $.post(siteConfig.ajaxUrl, data, function (response) {
      let jsondata = response.data;
      let htmldata = jsondata.data;
      let loadmore = jsondata.more;
      let current_page = jsondata.current_page;
      if (!loadmore) {
        $(".md-posts__loadmore-button").hide();
      } else {
        $(".md-posts__loadmore-button").show();
      }
      $(".md-posts").find('input[name="md-posts__loadmore-current_page"]').val(current_page);
      $(".md-posts__grid").append(htmldata);
    });
  }

  // Post load more event
  $(document).on("click", ".md-posts__loadmore-button", function (e) {
    e.preventDefault();
    $(this).text("Loading...");
    md_load_posts();
    $(".md-posts__loadmore-button").text("Load More");
  });
  $(document).on("change", ".md-posts__filter .md-posts__filter-select", function (e) {
    $(".md-posts__grid").html("");
    $(".md-posts").find('input[name="md-posts__loadmore-current_page"]').val(0);
    md_load_posts();
  });
  function md_create_slick_slider() {
    $(".md_hero_banner_slider").find(".md_slider").each(function () {
      let autoplay = $(this).data("autoplay");
      let arrows = $(this).data("arrows");
      let dots = $(this).data("dots");
      let infinite = $(this).data("infinite");
      let slidesToShow = $(this).data("slidestoshow");
      let slidesToScroll = $(this).data("slidestoscroll");
      $(this).slick({
        autoplay: autoplay,
        arrows: arrows,
        dots: dots,
        infinite: infinite,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll
      });
    });
    $(".md_hero_banner_slider_v2").find(".md_slider").each(function () {
      let autoplay = $(this).data("autoplay");
      let arrows = $(this).data("arrows");
      let dots = $(this).data("dots");
      let infinite = $(this).data("infinite");
      let slidesToShow = $(this).data("slidestoshow");
      let slidesToScroll = $(this).data("slidestoscroll");
      $(this).slick({
        autoplay: autoplay,
        arrows: arrows,
        dots: dots,
        infinite: infinite,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll,
        centerMode: true
      });
    });
    $(".md_hero_banner_slider_v3").find(".md_slider").each(function () {
      let autoplay = $(this).data("autoplay");
      let arrows = $(this).data("arrows");
      let dots = $(this).data("dots");
      let infinite = $(this).data("infinite");
      let slidesToShow = $(this).data("slidestoshow");
      let slidesToScroll = $(this).data("slidestoscroll");
      $(this).slick({
        autoplay: autoplay,
        arrows: arrows,
        dots: dots,
        infinite: infinite,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll
      });
    });
  }
  $(document).on("click", ".md_hero_banner_slider_v2 .slick-prev", function () {
    $(".md_hero_banner_slider_v2 .md_slider").slick("slickPrev");
  });
  $(document).on("click", ".md_hero_banner_slider_v2 .slick-next", function () {
    $(".md_hero_banner_slider_v2 .md_slider").slick("slickNext");
  });
  md_create_slick_slider();
  $(document).ready(function () {
    if ($(".history-list").length) {
      $(".history-list .history-list__years-list .history-list__year-item").first().addClass("active");
      $(".history-list__year-detail .history-list__year-detail-item").first().addClass("active");
    }
  });
  $(document).on("click", ".history-list .history-list__years-list .history-list__year-item", function () {
    let year = $(this).data("getyear");
    $(".history-list .history-list__years-list .history-list__year-item").removeClass("active");
    $(this).addClass("active");
    $(".history-list__year-detail .history-list__year-detail-item").removeClass("active");
    $(".history-list__year-detail .history-list__year-detail-item[data-year=" + year + "]").addClass("active");
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
// Styles


// Javascript

})();

/******/ })()
;
//# sourceMappingURL=main.js.map