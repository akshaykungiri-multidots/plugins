/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/admin/index.js":
/*!*******************************!*\
  !*** ./src/js/admin/index.js ***!
  \*******************************/
/***/ (() => {

/**
 * File admin.js.
 *
 * Handles admin scripts
 */
(function ($) {
  'use strict';

  jQuery(document).ready(function ($) {
    $('#sync-posts').click(function (e) {
      e.preventDefault();
      var postType = $('#md_post_type').val();
      var searchContent = $('#search_content').val();
      var blockContent = $('#block_content').val();
      var batchSize = 20; // Set batch size

      // Function to sync posts in batches
      function syncPosts(offset) {
        var data = {
          action: 'md_addblock_sync_posts',
          post_type: postType,
          search_content: searchContent,
          block_content: blockContent,
          offset: offset,
          // Include offset for pagination
          batch_size: batchSize // Include batch size
        };
        $.ajax({
          type: 'POST',
          url: siteConfig.ajaxUrl,
          data: data,
          dataType: 'json',
          beforeSend: function () {
            // Show loading indicator or any other UI feedback
          },
          success: function (response) {
            // Process response
            if (response.success && response.data.length > 0) {
              $.each(response.data, function (index, item) {
                console.log('Post ID: ' + item.post_id + ', Message: ' + item.message);
              });
              // console.log('Posts synced successfully.');
              // Continue syncing if there are more posts
              syncPosts(offset + batchSize);
            } else {
              console.log('No more posts to sync.');
            }
          },
          error: function (xhr, status, error) {
            // Handle error
            console.error(xhr.responseText);
            alert('An error occurred while syncing posts.');
          },
          complete: function () {
            // Hide loading indicator or perform any cleanup
          }
        });
      }

      // Start syncing posts
      syncPosts(0);
    });
  });
})(jQuery);

/***/ }),

/***/ "./src/sass/admin.scss":
/*!*****************************!*\
  !*** ./src/sass/admin.scss ***!
  \*****************************/
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
/*!*************************!*\
  !*** ./src/js/admin.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_admin_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/admin.scss */ "./src/sass/admin.scss");
/* harmony import */ var _admin_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin/index */ "./src/js/admin/index.js");
/* harmony import */ var _admin_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_admin_index__WEBPACK_IMPORTED_MODULE_1__);
// Styles


// Javascript

})();

/******/ })()
;
//# sourceMappingURL=admin.js.map