/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/md-portfolio/edit.js":
/*!*****************************************!*\
  !*** ./src/blocks/md-portfolio/edit.js ***!
  \*****************************************/
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
/* harmony import */ var _placeholder_image_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./placeholder-image.png */ "./src/blocks/md-portfolio/placeholder-image.png");
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
    subheading,
    heading,
    showSubheading,
    showHeading,
    subheadingColor,
    headingColor,
    categories,
    showCategories,
    categoryColor,
    numberOfPortfolioItemsPerRow,
    portfolioItems,
    showZoomIcon,
    showLinkIcon,
    showCategoryInPortfolio,
    portfolioTitleColor,
    portfolioCategoryColor,
    backgroundHoverColor,
    blockStyle,
    enableFooter,
    footerText,
    footerButton,
    footerTextColor,
    showFooterButton,
    footerButtonColor,
    footerButtonBackgroundColor,
    footerButtonHoverColor,
    footerButtonHoverBackgroundColor
  } = attributes;
  const siteURL = window.location.origin;
  const [currentCategory, setCurrentCategory] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const addStaticPostObj = () => {
    const staticPostObj = [...portfolioItems, {
      id: portfolioItems.length + 1,
      title: "",
      portfolioImage: "",
      portfolioLink: "",
      portfolioCategory: currentCategory
    }];
    setAttributes({
      portfolioItems: staticPostObj
    });
  };
  const updateStaticPostObj = (index, key, value) => {
    const updatedStaticPostObj = [...portfolioItems];
    updatedStaticPostObj[index][key] = value;
    setAttributes({
      portfolioItems: updatedStaticPostObj
    });
  };
  const removeStaticPostObj = index => {
    const updatedStaticPostObj = [...portfolioItems];
    updatedStaticPostObj.splice(index, 1);
    setAttributes({
      portfolioItems: updatedStaticPostObj
    });
  };
  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...portfolioItems];
    arrayCopy[oldIndex] = portfolioItems[newIndex];
    arrayCopy[newIndex] = portfolioItems[oldIndex];
    setAttributes({
      portfolioItems: arrayCopy
    });
  };
  const addStaticCategory = () => {
    const staticCategoryObj = [...categories, {
      id: categories.length + 1,
      name: ""
    }];
    setAttributes({
      categories: staticCategoryObj
    });
  };
  const updateStaticCategory = (index, key, value) => {
    const updatedStaticCategoryObj = [...categories];
    updatedStaticCategoryObj[index][key] = value;
    setAttributes({
      categories: updatedStaticCategoryObj
    });
  };
  const removeStaticCategory = index => {
    const updatedStaticCategoryObj = [...categories];
    updatedStaticCategoryObj.splice(index, 1);
    setAttributes({
      categories: updatedStaticCategoryObj
    });
  };
  const moveCategory = (oldIndex, newIndex) => {
    const arrayCopy = [...categories];
    arrayCopy[oldIndex] = categories[newIndex];
    arrayCopy[newIndex] = categories[oldIndex];
    setAttributes({
      categories: arrayCopy
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
      className: "md_portfolio_section"
    }),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Portfolio Settings"),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Subheading"),
          checked: showSubheading,
          onChange: () => setAttributes({
            showSubheading: !showSubheading
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Heading"),
          checked: showHeading,
          onChange: () => setAttributes({
            showHeading: !showHeading
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Categories"),
          checked: showCategories,
          onChange: () => setAttributes({
            showCategories: !showCategories
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enable Fancy Box"),
          checked: showZoomIcon,
          onChange: () => setAttributes({
            showZoomIcon: !showZoomIcon
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Link Icon"),
          checked: showLinkIcon,
          onChange: () => setAttributes({
            showLinkIcon: !showLinkIcon
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Category in Portfolio"),
          checked: showCategoryInPortfolio,
          onChange: () => setAttributes({
            showCategoryInPortfolio: !showCategoryInPortfolio
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Number of Portfolio Items Per Row"),
          value: numberOfPortfolioItemsPerRow,
          onChange: value => setAttributes({
            numberOfPortfolioItemsPerRow: value
          }),
          min: 1,
          max: 4
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Block Style"),
          value: blockStyle,
          options: [{
            label: "Style 1",
            value: "style1"
          }, {
            label: "Style 2",
            value: "style2"
          }],
          onChange: value => setAttributes({
            blockStyle: value
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Footer Settings"),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enable Footer"),
          checked: enableFooter,
          onChange: () => setAttributes({
            enableFooter: !enableFooter
          })
        }), enableFooter && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.PanelColorSettings, {
            title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Footer Color Settings"),
            colorSettings: [{
              value: footerTextColor,
              onChange: colorValue => setAttributes({
                footerTextColor: colorValue
              }),
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Footer Text Color")
            }, {
              value: footerButtonColor,
              onChange: colorValue => setAttributes({
                footerButtonColor: colorValue
              }),
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button Color")
            }, {
              value: footerButtonBackgroundColor,
              onChange: colorValue => setAttributes({
                footerButtonBackgroundColor: colorValue
              }),
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button Background Color")
            }, {
              value: footerButtonHoverColor,
              onChange: colorValue => setAttributes({
                footerButtonHoverColor: colorValue
              }),
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button Hover Color")
            }, {
              value: footerButtonHoverBackgroundColor,
              onChange: colorValue => setAttributes({
                footerButtonHoverBackgroundColor: colorValue
              }),
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button Hover Background Color")
            }]
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color Settings"),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.PanelColorSettings, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color Settings"),
          colorSettings: [{
            value: subheadingColor,
            onChange: colorValue => setAttributes({
              subheadingColor: colorValue
            }),
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Subheading Color")
          }, {
            value: headingColor,
            onChange: colorValue => setAttributes({
              headingColor: colorValue
            }),
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Heading Color")
          }, {
            value: categoryColor,
            onChange: colorValue => setAttributes({
              categoryColor: colorValue
            }),
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Category Color")
          }, {
            value: portfolioTitleColor,
            onChange: colorValue => setAttributes({
              portfolioTitleColor: colorValue
            }),
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Portfolio Title Color")
          }, {
            value: portfolioCategoryColor,
            onChange: colorValue => setAttributes({
              portfolioCategoryColor: colorValue
            }),
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Portfolio Category Color")
          }]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "settings-row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
            htmlFor: "backgroundHoverColor",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Background Hover Color")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.GradientPicker, {
            id: "backgroundHoverColor",
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Background Hover Color"),
            value: backgroundHoverColor ? backgroundHoverColor : null,
            onChange: value => setAttributes({
              backgroundHoverColor: value
            }),
            gradients: [{
              name: "Gradient 1",
              gradient: "linear-gradient(50deg, #0039E3 0%, #8600D4 90%)"
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
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("style", {
      children: `
          .md_portfolio_footer__button__wrapper .md_portfolio_footer__button {
            background-color: ${footerButtonBackgroundColor};
            color: ${footerButtonColor};
          }
          .md_portfolio_footer__button__wrapper .md_portfolio_footer__button:hover {
            background-color: ${footerButtonHoverBackgroundColor} !important;
            color: ${footerButtonHoverColor} !important;
            border: 1px solid ${footerButtonHoverColor} !important;
          }
        `
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "md_portfolio_section_inner " + blockStyle,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "md_portfolio_heading__wrapper",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "md_portfolio_heading",
          children: [showSubheading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "p",
            value: subheading,
            onChange: value => setAttributes({
              subheading: value
            }),
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Subheading"),
            style: {
              color: subheadingColor
            }
          }), showHeading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
            tagName: "h2",
            value: heading,
            onChange: value => setAttributes({
              heading: value
            }),
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Heading"),
            style: {
              color: headingColor
            }
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "md_portfolio_categories",
          children: showCategories && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "md_portfolio_categories_inner",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "md_portfolio_category_item " + (currentCategory === "" ? "active" : ""),
              onClick: () => setCurrentCategory(""),
              onKeyDown: e => {
                if (e.key === "Enter" || e.key === " ") {
                  setCurrentCategory("");
                }
              },
              role: "button",
              tabIndex: 0,
              "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Select All Categories", "md-pofo"),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "md_portfolio_category_item__title",
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("All", "md-pofo")
              })
            }), categories.map((category, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "md_portfolio_category_item show-items-hover-wrap " + (currentCategory === category.name ? "active" : ""),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: `item-action-wrap show-items-hover pos-abs`,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "move-item",
                  children: [0 < index && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
                    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Move Left", "md-pofo"),
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                      className: "dashicons dashicons-arrow-left-alt move-left",
                      onClick: () => moveCategory(index, index - 1),
                      onKeyDown: event => {
                        if (event.key === "Enter" || event.key === " ") {
                          moveCategory(index, index - 1);
                        }
                      },
                      role: "button",
                      tabIndex: 0,
                      "aria-label": "Move item left"
                    })
                  }), index + 1 < categories.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
                    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Move Right", "md-pofo"),
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                      className: "dashicons dashicons-arrow-right-alt move-right",
                      role: "button",
                      tabIndex: 0,
                      onClick: () => moveCategory(index, index + 1),
                      onKeyDown: e => {
                        if (e.key === "Enter" || e.key === " ") {
                          moveCategory(index, index + 1);
                        }
                      },
                      "aria-label": "Move item right"
                    })
                  })]
                }), 1 < categories.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
                  text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Remove Item", "md-prime"),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                    className: "remove-item dashicons dashicons-no-alt",
                    role: "button",
                    tabIndex: 0,
                    onClick: () => {
                      const toDelete =
                      // eslint-disable-next-line no-alert
                      confirm((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Are you sure you want to delete this item?", "md-prime"));
                      if (toDelete === true) {
                        removeStaticCategory(index);
                      }
                    },
                    onKeyDown: e => {
                      if (e.key === "Enter" || e.key === " ") {
                        // Simulate click behavior for keyboard users
                        e.preventDefault(); // Prevent default action for space key
                        const toDelete =
                        // eslint-disable-next-line no-alert
                        confirm((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Are you sure you want to delete this item?", "md-prime"));
                        if (toDelete === true) {
                          removeStaticCategory(index);
                        }
                      }
                    },
                    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Remove this item", "md-prime")
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: "span",
                className: "md_portfolio_category_item__title",
                value: category.name,
                onChange: value => updateStaticCategory(index, "name", value),
                onClick: () => setCurrentCategory(category.name),
                placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Category"),
                style: {
                  color: categoryColor
                }
              })]
            }, index)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "add-item-wrap",
              onClick: addStaticCategory,
              onKeyDown: e => {
                if (e.key === "Enter" || e.key === " ") {
                  addStaticCategory();
                }
              },
              role: "button",
              tabIndex: 0,
              "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Add new item", "md-prime"),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
                text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Add New Item", "md-prime"),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                  className: "add-new-item dashicons dashicons-plus"
                })
              })
            })]
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "md_portfolio_items",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "md_portfolio_item__inner",
          children: portfolioItems.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "md_portfolio_item show-items-hover-wrap " + (currentCategory === "" || currentCategory === item.portfolioCategory ? "active" : ""),
            style: {
              width: `${100 / numberOfPortfolioItemsPerRow}%`
            },
            "data-category": item.portfolioCategory,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: `item-action-wrap show-items-hover pos-abs`,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "move-item",
                children: [0 < index && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
                  text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Move Left", "md-pofo"),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
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
                }), index + 1 < portfolioItems.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
                  text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Move Right", "md-pofo"),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                    className: "dashicons dashicons-arrow-right-alt move-right",
                    role: "button",
                    tabIndex: 0,
                    onClick: () => moveItem(index, index + 1),
                    onKeyDown: e => {
                      if (e.key === "Enter" || e.key === " ") {
                        moveItem(index, index + 1);
                      }
                    },
                    "aria-label": "Move item right"
                  })
                })]
              }), 1 < portfolioItems.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
                text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Remove Item", "md-prime"),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                  className: "remove-item dashicons dashicons-no-alt",
                  role: "button",
                  tabIndex: 0,
                  onClick: () => {
                    const toDelete =
                    // eslint-disable-next-line no-alert
                    confirm((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Are you sure you want to delete this item?", "md-prime"));
                    if (toDelete === true) {
                      removeStaticPostObj(index);
                    }
                  },
                  onKeyDown: e => {
                    if (e.key === "Enter" || e.key === " ") {
                      // Simulate click behavior for keyboard users
                      e.preventDefault(); // Prevent default action for space key
                      const toDelete =
                      // eslint-disable-next-line no-alert
                      confirm((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Are you sure you want to delete this item?", "md-prime"));
                      if (toDelete === true) {
                        removeStaticPostObj(index);
                      }
                    }
                  },
                  "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Remove this item", "md-prime")
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "md_portfolio_item_inner",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "md-prime-block-control image-preview image-controle-visible-hover md_portfolio_item_inner__media",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: `image-controls small-icons icon-center-fixed`,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
                      onSelect: media => updateStaticPostObj(index, "portfolioImage", media.url),
                      allowedTypes: ["image"],
                      value: item.portfolioImage,
                      render: ({
                        open
                      }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
                        children: item.portfolioImage ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
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
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
                            text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Remove Image", "md-prime"),
                            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                              className: "dashicons dashicons-no-alt remove-image",
                              onClick: () => updateStaticPostObj(index, "portfolioImage", ""),
                              role: "button",
                              tabIndex: 0,
                              onKeyDown: e => {
                                if (e.key === "Enter" || e.key === " ") {
                                  e.preventDefault();
                                  updateStaticPostObj(index, "portfolioImage", "");
                                }
                              },
                              "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Remove image", "md-prime")
                            })
                          })]
                        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                          className: "upload-wrap",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
                            onClick: open,
                            className: "button media_and_text__upload_btn",
                            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
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
                  src: item.portfolioImage ? item.portfolioImage : siteURL + _placeholder_image_png__WEBPACK_IMPORTED_MODULE_4__,
                  alt: "slider"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "md_portfolio_item_inner__hover",
                  style: {
                    background: backgroundHoverColor
                  }
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "md_portfolio_item_inner__content",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                  tagName: "h3",
                  value: item.title,
                  onChange: value => updateStaticPostObj(index, "title", value),
                  placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Title"),
                  style: {
                    color: portfolioTitleColor
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                  className: "md_portfolio_item_inner__content__category",
                  children: showCategoryInPortfolio && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
                    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Category"),
                    value: item.portfolioCategory,
                    options: categories.map(category => ({
                      label: category.name,
                      value: category.name
                    })),
                    onChange: value => updateStaticPostObj(index, "portfolioCategory", value)
                  })
                }), showLinkIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
                  value: item.portfolioLink,
                  onChange: value => updateStaticPostObj(index, "portfolioLink", value),
                  placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Link")
                })]
              })]
            })]
          }, index))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "add-item-wrap",
          onClick: addStaticPostObj,
          onKeyDown: e => {
            if (e.key === "Enter" || e.key === " ") {
              addStaticPostObj();
            }
          },
          role: "button",
          tabIndex: 0,
          "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Add new item", "md-prime"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
            text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Add New Item", "md-prime"),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
              className: "add-new-item dashicons dashicons-plus"
            })
          })
        })]
      }), enableFooter && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "md_portfolio_footer",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "container",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "md_portfolio_footer__inner",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "md_portfolio_footer__text",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "md_portfolio_footer__text--line"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: "p",
                value: footerText,
                onChange: value => setAttributes({
                  footerText: value
                }),
                placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Footer Text"),
                style: {
                  color: footerTextColor
                }
              })]
            }), showFooterButton && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "md_portfolio_footer__button__wrapper",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: "p",
                className: "md_portfolio_footer__button",
                value: footerButton,
                onChange: value => setAttributes({
                  footerButton: value
                }),
                placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button Text"),
                style: {
                  color: footerButtonColor
                }
              })
            })]
          })
        })
      })]
    })]
  });
}

/***/ }),

/***/ "./src/blocks/md-portfolio/index.js":
/*!******************************************!*\
  !*** ./src/blocks/md-portfolio/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/md-portfolio/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/md-portfolio/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/md-portfolio/block.json");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/md-portfolio/style.scss");
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

/***/ "./src/blocks/md-portfolio/save.js":
/*!*****************************************!*\
  !*** ./src/blocks/md-portfolio/save.js ***!
  \*****************************************/
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
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

function save({
  attributes
}) {
  const {
    subheading,
    heading,
    showSubheading,
    showHeading,
    subheadingColor,
    headingColor,
    categories,
    showCategories,
    categoryColor,
    numberOfPortfolioItemsPerRow,
    portfolioItems,
    showZoomIcon,
    showLinkIcon,
    showCategoryInPortfolio,
    portfolioTitleColor,
    portfolioCategoryColor,
    backgroundHoverColor,
    blockStyle,
    enableFooter,
    footerText,
    footerButton,
    footerTextColor,
    showFooterButton,
    footerButtonColor,
    footerButtonBackgroundColor,
    footerButtonHoverColor,
    footerButtonHoverBackgroundColor
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
      className: "md_portfolio_section"
    }),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("style", {
      children: `
          .md_portfolio_footer__button__wrapper .md_portfolio_footer__button {
            background-color: ${footerButtonBackgroundColor};
            color: ${footerButtonColor};
          }
          .md_portfolio_footer__button__wrapper .md_portfolio_footer__button:hover {
            background-color: ${footerButtonHoverBackgroundColor} !important;
            color: ${footerButtonHoverColor} !important;
            border: 1px solid ${footerButtonHoverColor} !important;
          }
        `
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: `md_portfolio_section_inner ${blockStyle}`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "md_portfolio_heading__wrapper",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "md_portfolio_heading",
          children: [showSubheading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
            tagName: "p",
            value: subheading,
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Subheading"),
            style: {
              color: subheadingColor
            }
          }), showHeading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
            tagName: "h2",
            value: heading,
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Heading"),
            style: {
              color: headingColor
            }
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "md_portfolio_categories",
          children: showCategories && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "md_portfolio_categories_inner",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "md_portfolio_category_item active",
              role: "button",
              tabIndex: 0,
              "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Select All Categories", "md-pofo"),
              "data-category": "",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                className: "md_portfolio_category_item__title",
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("All", "md-pofo")
              })
            }), categories.map((category, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "md_portfolio_category_item show-items-hover-wrap ",
              "data-category": category.name,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                tagName: "span",
                className: "md_portfolio_category_item__title",
                value: category.name,
                placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Category"),
                style: {
                  color: categoryColor
                }
              })
            }, index))]
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "md_portfolio_items",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "md_portfolio_item__inner",
          children: portfolioItems.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "md_portfolio_item show-items-hover-wrap active",
            style: {
              width: `${100 / numberOfPortfolioItemsPerRow}%`
            },
            "data-category": item.portfolioCategory,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "md_portfolio_item_inner",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "md-prime-block-control image-preview image-controle-visible-hover md_portfolio_item_inner__media",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                  src: item.portfolioImage,
                  alt: "slider"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "md_portfolio_item_inner__hover",
                  style: {
                    background: backgroundHoverColor
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  className: "md_portfolio_item_inner__hover__icons",
                  children: [showZoomIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                    href: item.portfolioImage,
                    target: "_blank",
                    rel: "noreferrer",
                    "data-fancybox": "gallery",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                      className: "dashicons dashicons-search"
                    })
                  }), showLinkIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                    href: item.portfolioLink,
                    target: "_blank",
                    rel: "noreferrer",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
                      className: "dashicons dashicons-admin-links"
                    })
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "md_portfolio_item_inner__content",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                  tagName: "h3",
                  value: item.title,
                  placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Title"),
                  style: {
                    color: portfolioTitleColor
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "md_portfolio_item_inner__content__category",
                  style: {
                    color: portfolioCategoryColor
                  },
                  children: showCategoryInPortfolio && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                    children: item.portfolioCategory
                  })
                })]
              })]
            })
          }, index))
        })
      }), enableFooter && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "md_portfolio_footer",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "container",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "md_portfolio_footer__inner",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "md_portfolio_footer__text",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "md_portfolio_footer__text--line"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                tagName: "p",
                value: footerText,
                placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Footer Text"),
                style: {
                  color: footerTextColor
                }
              })]
            }), showFooterButton && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "md_portfolio_footer__button__wrapper",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                tagName: "p",
                className: "md_portfolio_footer__button",
                value: footerButton,
                placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button Text"),
                style: {
                  color: footerButtonColor
                }
              })
            })]
          })
        })
      })]
    })]
  });
}

/***/ }),

/***/ "./src/blocks/md-portfolio/style.scss":
/*!********************************************!*\
  !*** ./src/blocks/md-portfolio/style.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/md-portfolio/placeholder-image.png":
/*!*******************************************************!*\
  !*** ./src/blocks/md-portfolio/placeholder-image.png ***!
  \*******************************************************/
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

/***/ "./src/blocks/md-portfolio/block.json":
/*!********************************************!*\
  !*** ./src/blocks/md-portfolio/block.json ***!
  \********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","name":"md-pofo/md-portfolio","version":"0.1.0","title":"MD Portfolio","apiVersion":3,"category":"md-pofo","icon":"portfolio","description":"A custom block for displaying portfolio items.","keywords":["portfolio","md-pofo"],"supports":{"html":false,"align":["wide","full"]},"textdomain":"md-pofo","attributes":{"subheading":{"type":"string","default":""},"heading":{"type":"string","default":""},"showSubheading":{"type":"boolean","default":true},"showHeading":{"type":"boolean","default":true},"subheadingColor":{"type":"string","default":""},"headingColor":{"type":"string","default":""},"categories":{"type":"array","default":[]},"showCategories":{"type":"boolean","default":true},"categoryColor":{"type":"string","default":""},"numberOfPortfolioItemsPerRow":{"type":"number","default":3},"portfolioItems":{"type":"array","default":[]},"showZoomIcon":{"type":"boolean","default":true},"showLinkIcon":{"type":"boolean","default":true},"showCategoryInPortfolio":{"type":"boolean","default":true},"portfolioTitleColor":{"type":"string","default":""},"portfolioCategoryColor":{"type":"string","default":""},"backgroundHoverColor":{"type":"string","default":""},"blockStyle":{"type":"string","default":""},"enableFooter":{"type":"boolean","default":true},"footerText":{"type":"string","default":""},"footerButton":{"type":"string","default":""},"footerTextColor":{"type":"string","default":""},"showFooterButton":{"type":"boolean","default":true},"footerButtonColor":{"type":"string","default":""},"footerButtonBackgroundColor":{"type":"string","default":""},"footerButtonHoverColor":{"type":"string","default":""},"footerButtonHoverBackgroundColor":{"type":"string","default":""}},"editorScript":"file:./index.js","style":"file:./style-index.css"}');

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
/******/ 			"blocks/md-portfolio/index": 0,
/******/ 			"blocks/md-portfolio/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/md-portfolio/style-index"], () => (__webpack_require__("./src/blocks/md-portfolio/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map