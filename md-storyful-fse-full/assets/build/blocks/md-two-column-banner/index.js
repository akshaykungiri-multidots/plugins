/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/md-two-column-banner/edit.js":
/*!*************************************************!*\
  !*** ./src/blocks/md-two-column-banner/edit.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
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
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param  root0
 * @param  root0.attributes
 * @param  root0.setAttributes
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

function Edit({
  attributes,
  setAttributes
}) {
  const {
    sectionLeftTitle,
    sectionLeftDescription,
    sectionLeftButtonLink,
    sectionLeftImage,
    sectionRightTitle,
    sectionRightDescription,
    sectionRightButtonLink,
    sectionRightImage,
    sectionLeftTitleFontColor,
    sectionLeftDescriptionFontColor,
    sectionRightTitleFontColor,
    sectionRightDescriptionFontColor,
    showSectionLeftTitle,
    showSectionLeftDescription,
    showSectionLeftButton,
    showSectionRightTitle,
    showSectionRightDescription,
    showSectionRightButton
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
      className: "md_two_column_banner"
    }),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Toggle Settings", "md-storyful-fse-full"),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Left Title", "md-storyful-fse-full"),
          checked: showSectionLeftTitle,
          onChange: value => setAttributes({
            showSectionLeftTitle: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Left Description", "md-storyful-fse-full"),
          checked: showSectionLeftDescription,
          onChange: value => setAttributes({
            showSectionLeftDescription: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Left Button", "md-storyful-fse-full"),
          checked: showSectionLeftButton,
          onChange: value => setAttributes({
            showSectionLeftButton: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Right Title", "md-storyful-fse-full"),
          checked: showSectionRightTitle,
          onChange: value => setAttributes({
            showSectionRightTitle: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Right Description", "md-storyful-fse-full"),
          checked: showSectionRightDescription,
          onChange: value => setAttributes({
            showSectionRightDescription: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Right Button", "md-storyful-fse-full"),
          checked: showSectionRightButton,
          onChange: value => setAttributes({
            showSectionRightButton: value
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color Settings", "md-storyful-fse-full"),
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.PanelColorSettings, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Typography Colors", "md-storyful-fse-full"),
          initialOpen: false,
          colorSettings: [{
            value: sectionLeftTitleFontColor,
            onChange: value => setAttributes({
              sectionLeftTitleFontColor: value
            }),
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Left Title Font Color")
          }, {
            value: sectionLeftDescriptionFontColor,
            onChange: value => setAttributes({
              sectionLeftDescriptionFontColor: value
            }),
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Left Description Font Color")
          }, {
            value: sectionRightTitleFontColor,
            onChange: value => setAttributes({
              sectionRightTitleFontColor: value
            }),
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Right Title Font Color")
          }, {
            value: sectionRightDescriptionFontColor,
            onChange: value => setAttributes({
              sectionRightDescriptionFontColor: value
            }),
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Right Description Font Color")
          }]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "cta-section",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "container-fluid",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "cta-section__right",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "intelligence-section",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "intelligence-section__details wow fadeInLeft",
              children: [showSectionLeftTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: "h2",
                className: "section-title h1 with-darkbg",
                value: sectionLeftTitle,
                onChange: value => setAttributes({
                  sectionLeftTitle: value
                }),
                placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enter title…", "md-blocks"),
                style: {
                  color: sectionLeftTitleFontColor
                }
              }), showSectionLeftDescription && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: "p",
                className: "cta-section-desc",
                value: sectionLeftDescription,
                onChange: value => setAttributes({
                  sectionLeftDescription: value
                }),
                placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enter description…", "md-blocks"),
                style: {
                  color: sectionLeftDescriptionFontColor
                }
              }), showSectionLeftButton && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "sbtn sbtn-arrow-primary-v2",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: "btn-text",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                    tagName: "a",
                    value: sectionLeftButtonLink,
                    onChange: value => setAttributes({
                      sectionLeftButtonLink: value
                    }),
                    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enter button text…", "md-blocks")
                  })
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "intelligence-section__media wow bounceIn",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "media-image-wrapper",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("figure", {
                  id: "img-two",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
                    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Feature Image"),
                    onSelect: media => setAttributes({
                      sectionLeftImage: media.url
                    }),
                    multiple: false,
                    render: ({
                      open
                    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
                      children: sectionLeftImage === "" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                        onClick: open,
                        variant: "primary",
                        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Upload")
                      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                        className: "md-prime-image image-preview image-controle-visible-hover",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                          className: "item-action-wrap image-controls small-icons icon-center-fixed",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("i", {
                            onClick: open,
                            className: "dashicons dashicons-edit edit-image"
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("i", {
                            onClick: () => setAttributes({
                              sectionLeftImage: ""
                            }),
                            className: "dashicons dashicons-no-alt remove-image"
                          })]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
                          src: sectionLeftImage,
                          alt: sectionLeftTitle
                        })]
                      })
                    })
                  })
                })
              })
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "cta-section__left",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "cta-news-section",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "cta-news-section__details wow fadeInLeft",
              children: [showSectionRightTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: "h2",
                className: "section-title h1",
                value: sectionRightTitle,
                onChange: value => setAttributes({
                  sectionRightTitle: value
                }),
                placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enter title…", "md-blocks"),
                style: {
                  color: sectionRightTitleFontColor
                }
              }), showSectionRightDescription && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: "p",
                className: "cta-section-desc",
                value: sectionRightDescription,
                onChange: value => setAttributes({
                  sectionRightDescription: value
                }),
                placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enter description…", "md-blocks"),
                style: {
                  color: sectionRightDescriptionFontColor
                }
              }), showSectionRightButton && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "sbtn sbtn-arrow-primary-v2",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: "btn-text",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                    tagName: "a",
                    value: sectionRightButtonLink,
                    onChange: value => setAttributes({
                      sectionRightButtonLink: value
                    }),
                    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enter button text…", "md-blocks")
                  })
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "cta-news-section__media wow bounceIn",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "media-image-wrapper",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("figure", {
                  id: "img-one",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
                    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Feature Image"),
                    onSelect: media => setAttributes({
                      sectionRightImage: media.url
                    }),
                    multiple: false,
                    render: ({
                      open
                    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
                      children: sectionRightImage === "" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                        onClick: open,
                        variant: "primary",
                        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Upload")
                      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                        className: "md-prime-image image-preview image-controle-visible-hover",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                          className: "item-action-wrap image-controls small-icons icon-center-fixed",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("i", {
                            onClick: open,
                            className: "dashicons dashicons-edit edit-image"
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("i", {
                            onClick: () => setAttributes({
                              sectionRightImage: ""
                            }),
                            className: "dashicons dashicons-no-alt remove-image"
                          })]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
                          src: sectionRightImage,
                          alt: sectionRightTitle
                        })]
                      })
                    })
                  })
                })
              })
            })]
          })
        })]
      })
    })]
  });
}

/***/ }),

/***/ "./src/blocks/md-two-column-banner/index.js":
/*!**************************************************!*\
  !*** ./src/blocks/md-two-column-banner/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/md-two-column-banner/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/md-two-column-banner/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/md-two-column-banner/block.json");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/md-two-column-banner/style.scss");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * Internal dependencies
 */





/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/blocks/md-two-column-banner/save.js":
/*!*************************************************!*\
  !*** ./src/blocks/md-two-column-banner/save.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
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
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @param  root0
 * @param  root0.attributes
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

function save({
  attributes
}) {
  const {
    sectionLeftTitle,
    sectionLeftDescription,
    sectionLeftButtonLink,
    sectionLeftImage,
    sectionRightTitle,
    sectionRightDescription,
    sectionRightButtonLink,
    sectionRightImage,
    sectionLeftTitleFontColor,
    sectionLeftDescriptionFontColor,
    sectionRightTitleFontColor,
    sectionRightDescriptionFontColor,
    showSectionLeftTitle,
    showSectionLeftDescription,
    showSectionLeftButton,
    showSectionRightTitle,
    showSectionRightDescription,
    showSectionRightButton
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
      className: 'md_two_column_banner'
    }),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "cta-section",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "container-fluid",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "cta-section__right",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "intelligence-section",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "intelligence-section__details wow fadeInLeft",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                tagName: "h2",
                className: "section-title h1 with-darkbg",
                value: sectionLeftTitle,
                style: {
                  color: sectionLeftTitleFontColor
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                tagName: "p",
                className: "cta-section-desc",
                value: sectionLeftDescription,
                style: {
                  color: sectionLeftDescriptionFontColor
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "sbtn sbtn-arrow-primary-v2",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                  className: "btn-text",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                    tagName: "a",
                    value: sectionLeftButtonLink
                  })
                })
              })]
            }), sectionLeftImage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "intelligence-section__media wow bounceIn",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "media-image-wrapper",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("figure", {
                  id: "img-two",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                    src: sectionLeftImage
                  })
                })
              })
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "cta-section__left",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "cta-news-section",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "cta-news-section__details wow fadeInLeft",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                tagName: "h2",
                className: "section-title h1",
                value: sectionRightTitle,
                style: {
                  color: sectionRightTitleFontColor
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                tagName: "p",
                className: "cta-section-desc",
                value: sectionRightDescription,
                style: {
                  color: sectionRightDescriptionFontColor
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "sbtn sbtn-arrow-primary-v2",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                  className: "btn-text",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                    tagName: "a",
                    value: sectionRightButtonLink
                  })
                })
              })]
            }), sectionRightImage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "cta-news-section__media wow bounceIn",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "media-image-wrapper",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("figure", {
                  id: "img-one",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                    src: sectionRightImage
                  })
                })
              })
            })]
          })
        })]
      })
    })
  });
}

/***/ }),

/***/ "./src/blocks/md-two-column-banner/style.scss":
/*!****************************************************!*\
  !*** ./src/blocks/md-two-column-banner/style.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/blocks/md-two-column-banner/block.json":
/*!****************************************************!*\
  !*** ./src/blocks/md-two-column-banner/block.json ***!
  \****************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","name":"md-storyful-fse-full/md-two-column-banner","version":"0.1.0","title":"MD Two Column Banner","apiVersion":3,"category":"md-storyful-fse-full","icon":"layout","description":"A Two Column Banner block for Storyful FSE","keywords":["md-storyful-fse-full","md-two-column-banner"],"supports":{"html":false,"align":["wide","full"]},"textdomain":"md-storyful-fse-full","attributes":{"section_left_strong_title":{"type":"string","default":""},"sectionLeftTitle":{"type":"string","default":""},"sectionLeftDescription":{"type":"string","default":""},"sectionLeftButtonLink":{"type":"string","default":""},"sectionLeftImage":{"type":"string","default":""},"sectionRightTitle":{"type":"string","default":""},"sectionRightDescription":{"type":"string","default":""},"sectionRightButtonLink":{"type":"string","default":""},"sectionRightImage":{"type":"string","default":""},"section_left_strong_title_font_color":{"type":"string","default":""},"sectionLeftTitleFontColor":{"type":"string","default":""},"sectionLeftDescriptionFontColor":{"type":"string","default":""},"sectionRightTitleFontColor":{"type":"string","default":""},"sectionRightDescriptionFontColor":{"type":"string","default":""},"showSectionLeftTitle":{"type":"boolean","default":true},"showSectionLeftDescription":{"type":"boolean","default":true},"showSectionLeftButton":{"type":"boolean","default":true},"showSectionRightTitle":{"type":"boolean","default":true},"showSectionRightDescription":{"type":"boolean","default":true},"showSectionRightButton":{"type":"boolean","default":true}},"editorScript":"file:./index.js","style":"file:./style-index.css"}');

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
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
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
/******/ 			"blocks/md-two-column-banner/index": 0,
/******/ 			"blocks/md-two-column-banner/style-index": 0
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
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkmd_storyful_fse_full"] = self["webpackChunkmd_storyful_fse_full"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/md-two-column-banner/style-index"], () => (__webpack_require__("./src/blocks/md-two-column-banner/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map