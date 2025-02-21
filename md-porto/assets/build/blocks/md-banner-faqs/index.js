/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/md-banner-faqs/edit.js":
/*!*******************************************!*\
  !*** ./src/blocks/md-banner-faqs/edit.js ***!
  \*******************************************/
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
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
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
    subTitle,
    title,
    titleContent,
    buttonText,
    faqs,
    showSubTitle,
    showTitle,
    showTitleContent,
    showButton,
    showFaqs,
    subTitleColor,
    titleColor,
    titleContentColor,
    buttonColor,
    buttonBackgroundColor,
    buttonHoverColor,
    buttonHoverBackgroundColor,
    faqsTextColor,
    faqsListBackgroundColor
  } = attributes;
  const addStaticPostObj = () => {
    const staticPostObj = [...faqs, {
      id: faqs.length + 1,
      title: "",
      content: ""
    }];
    setAttributes({
      faqs: staticPostObj
    });
  };
  const updateStaticPostObj = (index, key, value) => {
    const updatedStaticPostObj = [...faqs];
    updatedStaticPostObj[index][key] = value;
    setAttributes({
      faqs: updatedStaticPostObj
    });
  };
  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...faqs];
    arrayCopy[oldIndex] = faqs[newIndex];
    arrayCopy[newIndex] = faqs[oldIndex];
    setAttributes({
      faqs: arrayCopy
    });
  };
  const [activeFaqItem, setActiveFaqItem] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
      className: "md_porto_banner_faqs__section"
    }),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Block Settings", "md-porto"),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Sub Title", "md-porto"),
          checked: showSubTitle,
          onChange: value => setAttributes({
            showSubTitle: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Title", "md-porto"),
          checked: showTitle,
          onChange: value => setAttributes({
            showTitle: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Title Content", "md-porto"),
          checked: showTitleContent,
          onChange: value => setAttributes({
            showTitleContent: value
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button Settings"),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Button", "md-porto"),
          checked: showButton,
          onChange: value => setAttributes({
            showButton: value
          })
        }), showButton && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "settings-row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.PanelColorSettings, {
            title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button Color Settings", "md-storyful-fse-full"),
            initialOpen: false,
            colorSettings: [{
              value: buttonColor,
              onChange: newColor => setAttributes({
                buttonColor: newColor
              }),
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button Font Color")
            }, {
              value: buttonHoverColor,
              onChange: newColor => setAttributes({
                buttonHoverColor: newColor
              }),
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button Hover Font Color")
            }]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "settings-row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
              htmlFor: "buttonBackgroundColor",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button Background Color")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.GradientPicker, {
              id: "buttonBackgroundColor",
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button Background Color"),
              value: buttonBackgroundColor ? buttonBackgroundColor : null,
              onChange: value => setAttributes({
                buttonBackgroundColor: value
              }),
              gradients: [{
                name: "Gradient 1",
                gradient: "linear-gradient(90deg, #C73727 0%, #E76A24 100.28%)"
              }, {
                name: "Gradient 2",
                gradient: "linear-gradient(45deg, #f3ec78, #af4261)"
              }, {
                name: "Gradient 3",
                gradient: "linear-gradient(45deg, #f3ec78, #af4261)"
              }]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "settings-row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
              htmlFor: "buttonHoverBackgroundColor",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button Hover Background Color")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.GradientPicker, {
              id: "buttonHoverBackgroundColor",
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button Hover Background Color"),
              value: buttonHoverBackgroundColor ? buttonHoverBackgroundColor : null,
              onChange: value => setAttributes({
                buttonHoverBackgroundColor: value
              }),
              gradients: [{
                name: "Gradient 1",
                gradient: "linear-gradient(90deg, #C73727 0%, #E76A24 100.28%)"
              }, {
                name: "Gradient 2",
                gradient: "linear-gradient(45deg, #f3ec78, #af4261)"
              }, {
                name: "Gradient 3",
                gradient: "linear-gradient(45deg, #f3ec78, #af4261)"
              }]
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color Settings", "md-porto"),
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.PanelColorSettings, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Typography Colors", "md-porto"),
          initialOpen: false,
          colorSettings: [{
            value: subTitleColor,
            onChange: colorValue => setAttributes({
              subTitleColor: colorValue
            }),
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sub Title Color", "md-porto")
          }, {
            value: titleColor,
            onChange: colorValue => setAttributes({
              titleColor: colorValue
            }),
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Title Color", "md-porto")
          }, {
            value: titleContentColor,
            onChange: colorValue => setAttributes({
              titleContentColor: colorValue
            }),
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Title Content Color", "md-porto")
          }]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: `md_porto_banner_faqs_wrap`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("style", {
        children: `
            .md_porto_banner_faqs__btn .md_btn {
              color: ${buttonColor};
              background: ${buttonBackgroundColor};
            }
              .md_porto_banner_faqs__btn .md_btn:before {
                background: ${buttonBackgroundColor} !important;
                color: ${buttonColor} !important;
              }
            .md_porto_banner_faqs__btn .md_btn:hover {
              color: ${buttonHoverColor} !important;
              background: ${buttonHoverBackgroundColor};
            }
            .md_porto_banner_faqs__btn .md_btn:hover:before {
              background: ${buttonHoverBackgroundColor} !important;
              color: ${buttonHoverColor} !important;
            }
          `
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "md_porto_banner_faqs",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "container",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "md_porto_banner_faqs__inner",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "md_porto_banner_faqs__heading",
              children: [showSubTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: "h4",
                value: subTitle,
                onChange: value => setAttributes({
                  subTitle: value
                }),
                placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enter Sub Title", "md-porto"),
                style: {
                  color: subTitleColor
                }
              }), showTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: "h2",
                value: title,
                onChange: value => setAttributes({
                  title: value
                }),
                placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enter Title", "md-porto"),
                style: {
                  color: titleColor
                }
              }), showTitleContent && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: "p",
                className: "md_porto_banner_faqs__content",
                value: titleContent,
                onChange: value => setAttributes({
                  titleContent: value
                }),
                placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enter Content", "md-porto"),
                style: {
                  color: titleContentColor
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "md_btn__wrapper md_porto_banner_faqs__btn",
                children: showButton && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                  className: "md_btn md_btn__arrow",
                  tagName: "p",
                  value: buttonText,
                  onChange: value => setAttributes({
                    buttonText: value
                  }),
                  placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enter Button Text", "md-porto")
                })
              })]
            }), showFaqs && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "md_faq_section__faq_items",
                children: [faqs && faqs.map((postObj, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: index === activeFaqItem ? "ma_faq_block--inner-item active show-items-hover-wrap" : "ma_faq_block--inner-item show-items-hover-wrap",
                  style: {
                    backgroundColor: faqsListBackgroundColor
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: "item-action-wrap show-items-hover small-icons",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                      className: "move-item",
                      children: [0 < index && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
                        text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Move Left", "md-prime"),
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                          className: "dashicons dashicons-arrow-left-alt move-left",
                          onClick: () => moveItem(index, index - 1),
                          onKeyDown: event => {
                            if (event.key === "Enter" || event.key === " ") {
                              moveItem(index, index - 1);
                            }
                          },
                          role: "button",
                          tabIndex: 0,
                          "aria-label": "Move item left"
                        })
                      }), index + 1 < faqs.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
                        text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Move Right", "md-prime"),
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                          className: "dashicons dashicons-arrow-right-alt move-right",
                          role: "button",
                          tabIndex: "0",
                          onClick: () => moveItem(index, index + 1),
                          onKeyDown: e => {
                            if (e.key === "Enter" || e.key === " ") {
                              moveItem(index, index + 1);
                            }
                          },
                          "aria-label": "Move item right"
                        })
                      })]
                    }), 1 < faqs.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
                      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Remove Item", "md-prime"),
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
                        className: "remove-item dashicons dashicons-no-alt",
                        role: "button",
                        tabIndex: "0",
                        onClick: () => {
                          const toDelete =
                          // eslint-disable-next-line no-alert
                          confirm((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Are you sure you want to delete this item?", "md-prime"));
                          if (toDelete) {
                            const updatedArray = faqs.filter((item, itemIndex) => itemIndex !== index);
                            setAttributes({
                              faqs: updatedArray
                            });
                          }
                        },
                        onKeyDown: e => {
                          if (e.key === "Enter" || e.key === " ") {
                            const toDelete =
                            // eslint-disable-next-line no-alert
                            confirm((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Are you sure you want to delete this item?", "md-prime"));
                            if (toDelete) {
                              const updatedArray = faqs.filter((item, itemIndex) => itemIndex !== index);
                              setAttributes({
                                faqs: updatedArray
                              });
                            }
                          }
                        },
                        "aria-label": "Delete item"
                      })
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: "ma_faq_block--inner-item-heading",
                    onClick: () => setActiveFaqItem(index),
                    onKeyDown: e => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault(); // Prevent default action for space key
                        setActiveFaqItem(index); // Trigger the click handler
                      }
                    },
                    role: "button",
                    tabIndex: 0,
                    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Toggle item", "md-prime"),
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                      tagName: "span",
                      name: "accordian-title",
                      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Title…"),
                      value: postObj.title,
                      onChange: value => updateStaticPostObj(index, "title", value),
                      style: {
                        color: faqsTextColor
                      }
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
                      className: activeFaqItem === index ? "fa fa-angle-up" : "fa fa-angle-down",
                      role: "button",
                      tabIndex: 0,
                      "aria-label": activeFaqItem === index ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Collapse item", "md-prime") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Expand item", "md-prime")
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                    className: "ma_faq_block--inner-item-content",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                      tagName: "div",
                      name: "accordian-content",
                      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Content…"),
                      value: postObj.content,
                      onChange: value => updateStaticPostObj(index, "content", value),
                      style: {
                        color: faqsTextColor
                      }
                    })
                  })]
                }, index)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "add-item-wrap",
                  onClick: addStaticPostObj,
                  onKeyDown: e => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault(); // Prevent default action for space key
                      addStaticPostObj(); // Trigger the click handler
                    }
                  },
                  role: "button",
                  tabIndex: 0,
                  "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Add new item", "md-prime"),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
                    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Add New Item", "md-prime"),
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
                      className: "add-new-item dashicons dashicons-plus"
                    })
                  })
                })]
              })
            })]
          })
        })
      })]
    })]
  });
}

/***/ }),

/***/ "./src/blocks/md-banner-faqs/index.js":
/*!********************************************!*\
  !*** ./src/blocks/md-banner-faqs/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/md-banner-faqs/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/md-banner-faqs/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/md-banner-faqs/block.json");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/md-banner-faqs/style.scss");
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

/***/ "./src/blocks/md-banner-faqs/save.js":
/*!*******************************************!*\
  !*** ./src/blocks/md-banner-faqs/save.js ***!
  \*******************************************/
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
    subTitle,
    title,
    titleContent,
    buttonText,
    faqs,
    showSubTitle,
    showTitle,
    showTitleContent,
    showButton,
    showFaqs,
    subTitleColor,
    titleColor,
    titleContentColor,
    buttonColor,
    buttonBackgroundColor,
    buttonHoverColor,
    buttonHoverBackgroundColor,
    faqsTextColor,
    faqsListBackgroundColor
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
      className: "md_porto_banner_faqs__section"
    }),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: `md_porto_banner_faqs_wrap`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("style", {
        children: `
            .md_porto_banner_faqs__btn .md_btn {
              color: ${buttonColor};
              background: ${buttonBackgroundColor};
            }
              .md_porto_banner_faqs__btn .md_btn:before {
                background: ${buttonBackgroundColor} !important;
                color: ${buttonColor} !important;
              }
            .md_porto_banner_faqs__btn .md_btn:hover {
              color: ${buttonHoverColor} !important;
              background: ${buttonHoverBackgroundColor};
            }
            .md_porto_banner_faqs__btn .md_btn:hover:before {
              background: ${buttonHoverBackgroundColor} !important;
              color: ${buttonHoverColor} !important;
            }
          `
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "md_porto_banner_faqs",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "container",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "md_porto_banner_faqs__inner",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "md_porto_banner_faqs__heading",
              children: [showSubTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                tagName: "h4",
                value: subTitle,
                placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enter Sub Title", "md-porto"),
                style: {
                  color: subTitleColor
                }
              }), showTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                tagName: "h2",
                value: title,
                placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enter Title", "md-porto"),
                style: {
                  color: titleColor
                }
              }), showTitleContent && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                tagName: "p",
                className: "md_porto_banner_faqs__content",
                value: titleContent,
                placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enter Content", "md-porto"),
                style: {
                  color: titleContentColor
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "md_btn__wrapper md_porto_banner_faqs__btn",
                children: showButton && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                  className: "md_btn md_btn__arrow",
                  tagName: "p",
                  value: buttonText,
                  placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enter Button Text", "md-porto")
                })
              })]
            }), showFaqs && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "md_faq_section__faq_items",
                children: faqs && faqs.map((postObj, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: index === 0 ? "ma_faq_block--inner-item active show-items-hover-wrap" : "ma_faq_block--inner-item show-items-hover-wrap",
                  style: {
                    backgroundColor: faqsListBackgroundColor
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                    className: "ma_faq_block--inner-item-heading",
                    role: "button",
                    tabIndex: 0,
                    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Toggle item", "md-prime"),
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                      tagName: "span",
                      name: "accordian-title",
                      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Title…"),
                      value: postObj.title,
                      style: {
                        color: faqsTextColor
                      }
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("i", {
                      className: 0 === index ? "fa fa-angle-up" : "fa fa-angle-down",
                      role: "button",
                      tabIndex: 0,
                      "aria-label": 0 === index ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Collapse item", "md-prime") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Expand item", "md-prime")
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                    className: "ma_faq_block--inner-item-content",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                      tagName: "div",
                      name: "accordian-content",
                      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Content…"),
                      value: postObj.content,
                      style: {
                        color: faqsTextColor
                      }
                    })
                  })]
                }, index))
              })
            })]
          })
        })
      })]
    })
  });
}

/***/ }),

/***/ "./src/blocks/md-banner-faqs/style.scss":
/*!**********************************************!*\
  !*** ./src/blocks/md-banner-faqs/style.scss ***!
  \**********************************************/
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

/***/ "./src/blocks/md-banner-faqs/block.json":
/*!**********************************************!*\
  !*** ./src/blocks/md-banner-faqs/block.json ***!
  \**********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","name":"md-porto/md-banner-faqs","version":"0.1.0","title":"MD Banner FAQs","apiVersion":3,"category":"md-porto","icon":"admin-comments","titleContent":"A block to display a banner with FAQs","keywords":["banner","faqs"],"supports":{"html":false,"align":["wide","full"]},"textdomain":"md-porto","attributes":{"subTitle":{"type":"string","default":""},"title":{"type":"string","default":""},"titleContent":{"type":"string","default":""},"buttonText":{"type":"string","default":""},"faqs":{"type":"array","default":[]},"showSubTitle":{"type":"boolean","default":true},"showTitle":{"type":"boolean","default":true},"showTitleContent":{"type":"boolean","default":true},"showButton":{"type":"boolean","default":true},"showFaqs":{"type":"boolean","default":true},"subTitleColor":{"type":"string","default":""},"titleColor":{"type":"string","default":""},"titleContentColor":{"type":"string","default":""},"buttonColor":{"type":"string","default":""},"buttonBackgroundColor":{"type":"string","default":""},"buttonHoverColor":{"type":"string","default":""},"buttonHoverBackgroundColor":{"type":"string","default":""},"faqsTextColor":{"type":"string","default":""},"faqsListBackgroundColor":{"type":"string","default":""}},"editorScript":"file:./index.js","style":"file:./style-index.css"}');

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
/******/ 			"blocks/md-banner-faqs/index": 0,
/******/ 			"blocks/md-banner-faqs/style-index": 0
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
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkmd_porto"] = globalThis["webpackChunkmd_porto"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/md-banner-faqs/style-index"], () => (__webpack_require__("./src/blocks/md-banner-faqs/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map