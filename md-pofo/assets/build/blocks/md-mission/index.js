/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/md-mission/edit.js":
/*!***************************************!*\
  !*** ./src/blocks/md-mission/edit.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _placeholder_image_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./placeholder-image.png */ "./src/blocks/md-mission/placeholder-image.png");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */


/**
 * React hook that is used to mark the packages element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-element/
 */




/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

function Edit({
  attributes,
  setAttributes
}) {
  const {
    heading,
    subHeading,
    mediaImage,
    mediaImage1,
    mediaContent,
    ourApproachHeading,
    ourApproachContent,
    ourMissionHeading,
    ourMissionContent,
    showHeading,
    showSubHeading,
    showMediaContent,
    showOurApproach,
    showOurMission,
    showMediaImage,
    showMediaImage1,
    headingColor,
    subHeadingColor,
    mediaContentColor,
    ourApproachHeadingColor,
    ourApproachContentColor,
    ourMissionHeadingColor,
    ourMissionContentColor
  } = attributes;
  const siteURL = window.location.origin;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
      className: "md_mission_block"
    }),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Block Settings", "md-pofo"),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Heading", "md-pofo"),
          checked: showHeading,
          onChange: value => setAttributes({
            showHeading: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Sub Heading", "md-pofo"),
          checked: showSubHeading,
          onChange: value => setAttributes({
            showSubHeading: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Media Content", "md-pofo"),
          checked: showMediaContent,
          onChange: value => setAttributes({
            showMediaContent: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Our Approach", "md-pofo"),
          checked: showOurApproach,
          onChange: value => setAttributes({
            showOurApproach: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Our Mission", "md-pofo"),
          checked: showOurMission,
          onChange: value => setAttributes({
            showOurMission: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Media Image", "md-pofo"),
          checked: showMediaImage,
          onChange: value => setAttributes({
            showMediaImage: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Media Image 1", "md-pofo"),
          checked: showMediaImage1,
          onChange: value => setAttributes({
            showMediaImage1: value
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color Settings", "md-pofo"),
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.PanelColorSettings, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Typography Colors", "md-pofo"),
          initialOpen: false,
          colorSettings: [{
            value: headingColor,
            onChange: value => setAttributes({
              headingColor: value
            }),
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Heading Color", "md-pofo")
          }, {
            value: subHeadingColor,
            onChange: value => setAttributes({
              subHeadingColor: value
            }),
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sub Heading Color", "md-pofo")
          }, {
            value: mediaContentColor,
            onChange: value => setAttributes({
              mediaContentColor: value
            }),
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Media Content Color", "md-pofo")
          }, {
            value: ourApproachHeadingColor,
            onChange: value => setAttributes({
              ourApproachHeadingColor: value
            }),
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Our Approach Heading Color", "md-pofo")
          }, {
            value: ourApproachContentColor,
            onChange: value => setAttributes({
              ourApproachContentColor: value
            }),
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Our Approach Content Color", "md-pofo")
          }, {
            value: ourMissionHeadingColor,
            onChange: value => setAttributes({
              ourMissionHeadingColor: value
            }),
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Our Mission Heading Color", "md-pofo")
          }, {
            value: ourMissionContentColor,
            onChange: value => setAttributes({
              ourMissionContentColor: value
            }),
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Our Mission Content Color", "md-pofo")
          }]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "md_mission_block__heading",
      children: [showSubHeading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
        tagName: "p",
        value: subHeading,
        onChange: value => setAttributes({
          subHeading: value
        }),
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sub Heading", "md-pofo"),
        style: {
          color: subHeadingColor
        }
      }), showHeading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
        tagName: "h2",
        value: heading,
        onChange: value => setAttributes({
          heading: value
        }),
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Heading", "md-pofo"),
        style: {
          color: headingColor
        }
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "md_mission_block__media",
      children: [showMediaImage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "md-prime-block-control md_media_image image-preview image-controle-visible-hover",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: `image-controls small-icons icon-center-fixed`,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
              onSelect: media => setAttributes({
                mediaImage: media.url
              }),
              allowedTypes: ["image"],
              value: mediaImage,
              render: ({
                open
              }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
                children: mediaImage ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {
                    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Edit Image", "md-prime"),
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                      className: "dashicons dashicons-edit edit-image",
                      onClick: open,
                      role: "button",
                      tabIndex: 0,
                      onKeyDown: e => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault(); // Prevent default action for space key
                          open(); // Trigger the click handler
                        }
                      },
                      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Edit image", "md-prime")
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {
                    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Remove Image", "md-prime"),
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                      className: "dashicons dashicons-no-alt remove-image",
                      onClick: () => setAttributes({
                        mediaImage: ""
                      }),
                      role: "button",
                      tabIndex: 0,
                      onKeyDown: e => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setAttributes({
                            mediaImage: ""
                          });
                        }
                      },
                      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Remove image", "md-prime")
                    })
                  })]
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "upload-wrap",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
                    onClick: open,
                    className: "button media_and_text__upload_btn",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {
                      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Upload Image", "md-prime"),
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                        className: "dashicons dashicons-upload"
                      })
                    })
                  })
                })
              })
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
          src: mediaImage || siteURL + _placeholder_image_png__WEBPACK_IMPORTED_MODULE_3__,
          alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Media Image", "md-pofo")
        })]
      }), showMediaImage1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "md-prime-block-control md_media_image1 image-preview image-controle-visible-hover",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: `image-controls small-icons icon-center-fixed`,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
              onSelect: media => setAttributes({
                mediaImage1: media.url
              }),
              allowedTypes: ["image"],
              value: mediaImage1,
              render: ({
                open
              }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
                children: mediaImage1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {
                    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Edit Image", "md-prime"),
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                      className: "dashicons dashicons-edit edit-image",
                      onClick: open,
                      role: "button",
                      tabIndex: 0,
                      onKeyDown: e => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault(); // Prevent default action for space key
                          open(); // Trigger the click handler
                        }
                      },
                      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Edit image", "md-prime")
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {
                    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Remove Image", "md-prime"),
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                      className: "dashicons dashicons-no-alt remove-image",
                      onClick: () => setAttributes({
                        mediaImage1: ""
                      }),
                      role: "button",
                      tabIndex: 0,
                      onKeyDown: e => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setAttributes({
                            mediaImage1: ""
                          });
                        }
                      },
                      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Remove image", "md-prime")
                    })
                  })]
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "upload-wrap",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
                    onClick: open,
                    className: "button media_and_text__upload_btn",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {
                      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Upload Image", "md-prime"),
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                        className: "dashicons dashicons-upload"
                      })
                    })
                  })
                })
              })
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
          src: mediaImage1 || siteURL + _placeholder_image_png__WEBPACK_IMPORTED_MODULE_3__,
          alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Media Image", "md-pofo")
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "md_mission_block__content",
      children: [showMediaContent && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "md_mission_block__media_content",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
          tagName: "div",
          value: mediaContent,
          onChange: value => setAttributes({
            mediaContent: value
          }),
          placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Media Content", "md-pofo"),
          style: {
            color: mediaContentColor
          }
        })
      }), showOurApproach && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "md_mission_block__our_approach",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
          tagName: "h3",
          value: ourApproachHeading,
          onChange: value => setAttributes({
            ourApproachHeading: value
          }),
          placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Our Approach Heading", "md-pofo"),
          style: {
            color: ourApproachHeadingColor
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
          tagName: "div",
          value: ourApproachContent,
          onChange: value => setAttributes({
            ourApproachContent: value
          }),
          placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Our Approach Content", "md-pofo"),
          style: {
            color: ourApproachContentColor
          }
        })]
      }), showOurMission && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "md_mission_block__our_mission",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
          tagName: "h3",
          value: ourMissionHeading,
          onChange: value => setAttributes({
            ourMissionHeading: value
          }),
          placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Our Mission Heading", "md-pofo"),
          style: {
            color: ourMissionHeadingColor
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
          tagName: "div",
          value: ourMissionContent,
          onChange: value => setAttributes({
            ourMissionContent: value
          }),
          placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Our Mission Content", "md-pofo"),
          style: {
            color: ourMissionContentColor
          }
        })]
      })]
    })]
  });
}

/***/ }),

/***/ "./src/blocks/md-mission/index.js":
/*!****************************************!*\
  !*** ./src/blocks/md-mission/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/md-mission/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/md-mission/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/md-mission/block.json");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/md-mission/style.scss");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Internal dependencies
 */





/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/blocks/md-mission/save.js":
/*!***************************************!*\
  !*** ./src/blocks/md-mission/save.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */


/**
 * React hook that is used to mark the packages element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-element/
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

function save({
  attributes
}) {
  const {
    heading,
    subHeading,
    mediaImage,
    mediaImage1,
    mediaContent,
    ourApproachHeading,
    ourApproachContent,
    ourMissionHeading,
    ourMissionContent,
    showHeading,
    showSubHeading,
    showMediaContent,
    showOurApproach,
    showOurMission,
    showMediaImage,
    showMediaImage1,
    headingColor,
    subHeadingColor,
    mediaContentColor,
    ourApproachHeadingColor,
    ourApproachContentColor,
    ourMissionHeadingColor,
    ourMissionContentColor
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
      className: "md_mission_block"
    }),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "md_mission_block__heading",
      children: [showSubHeading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
        tagName: "p",
        value: subHeading,
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sub Heading", "md-pofo"),
        style: {
          color: subHeadingColor
        }
      }), showHeading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
        tagName: "h2",
        value: heading,
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Heading", "md-pofo"),
        style: {
          color: headingColor
        }
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "md_mission_block__media",
      children: [showMediaImage && mediaImage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "md-prime-block-control md_media_image image-preview image-controle-visible-hover",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
          src: mediaImage,
          alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Media Image", "md-pofo")
        })
      }), showMediaImage1 && mediaImage1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "md-prime-block-control md_media_image1 image-preview image-controle-visible-hover",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
          src: mediaImage1,
          alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Media Image", "md-pofo")
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "md_mission_block__content",
      children: [showMediaContent && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "md_mission_block__media_content",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
          tagName: "div",
          value: mediaContent,
          placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Media Content", "md-pofo"),
          style: {
            color: mediaContentColor
          }
        })
      }), showOurApproach && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "md_mission_block__our_approach",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
          tagName: "h3",
          value: ourApproachHeading,
          placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Our Approach Heading", "md-pofo"),
          style: {
            color: ourApproachHeadingColor
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
          tagName: "div",
          value: ourApproachContent,
          placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Our Approach Content", "md-pofo"),
          style: {
            color: ourApproachContentColor
          }
        })]
      }), showOurMission && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "md_mission_block__our_mission",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
          tagName: "h3",
          value: ourMissionHeading,
          placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Our Mission Heading", "md-pofo"),
          style: {
            color: ourMissionHeadingColor
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
          tagName: "div",
          value: ourMissionContent,
          placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Our Mission Content", "md-pofo"),
          style: {
            color: ourMissionContentColor
          }
        })]
      })]
    })]
  });
}

/***/ }),

/***/ "./src/blocks/md-mission/style.scss":
/*!******************************************!*\
  !*** ./src/blocks/md-mission/style.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/md-mission/placeholder-image.png":
/*!*****************************************************!*\
  !*** ./src/blocks/md-mission/placeholder-image.png ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "/wp-content/themes/md-pofo/assets/build/images/placeholder-image.2d0b00c1.png";

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/blocks/md-mission/block.json":
/*!******************************************!*\
  !*** ./src/blocks/md-mission/block.json ***!
  \******************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","name":"md-pofo/md-mission","version":"0.1.0","title":"MD Mission","apiVersion":3,"category":"md-pofo","icon":"lock","description":"A block that displays a mission statement","keywords":["mission","statement"],"supports":{"html":false,"align":["wide","full"]},"textdomain":"md-pofo","attributes":{"heading":{"type":"string","default":""},"subHeading":{"type":"string","default":""},"mediaImage":{"type":"string","default":""},"mediaImage1":{"type":"string","default":""},"mediaContent":{"type":"string","default":""},"ourApproachHeading":{"type":"string","default":""},"ourApproachContent":{"type":"string","default":""},"ourMissionHeading":{"type":"string","default":""},"ourMissionContent":{"type":"string","default":""},"showHeading":{"type":"boolean","default":true},"showSubHeading":{"type":"boolean","default":true},"showMediaContent":{"type":"boolean","default":true},"showOurApproach":{"type":"boolean","default":true},"showOurMission":{"type":"boolean","default":true},"showMediaImage":{"type":"boolean","default":true},"showMediaImage1":{"type":"boolean","default":true},"headingColor":{"type":"string","default":""},"subHeadingColor":{"type":"string","default":""},"mediaContentColor":{"type":"string","default":""},"ourApproachHeadingColor":{"type":"string","default":""},"ourApproachContentColor":{"type":"string","default":""},"ourMissionHeadingColor":{"type":"string","default":""},"ourMissionContentColor":{"type":"string","default":""}},"editorScript":"file:./index.js","style":"file:./style-index.css"}');

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"blocks/md-mission/index": 0,
/******/ 			"blocks/md-mission/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkmd_pofo"] = globalThis["webpackChunkmd_pofo"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/md-mission/style-index"], () => (__webpack_require__("./src/blocks/md-mission/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map