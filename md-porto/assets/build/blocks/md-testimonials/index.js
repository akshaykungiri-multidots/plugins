/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/md-testimonials/edit.js":
/*!********************************************!*\
  !*** ./src/blocks/md-testimonials/edit.js ***!
  \********************************************/
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
/* harmony import */ var _placeholder_image_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./placeholder-image.png */ "./src/blocks/md-testimonials/placeholder-image.png");
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
    subTitle,
    title,
    headingContent,
    buttonLink,
    backgroundColor,
    subTitleColor,
    titleColor,
    headingContentColor,
    showSubTitle,
    showTitle,
    showHeadingContent,
    showButton,
    buttonColor,
    buttonBackgroundColor,
    buttonHoverColor,
    buttonHoverBackgroundColor,
    joinUsText,
    joinUsTextColor,
    showJoinUs,
    showTestimonials,
    testimonials,
    showSlideAuthorImage,
    showSlideAuthorName,
    showSlideAuthorDesignation,
    showSlideTestimonialText,
    showSlideRating,
    showSlideDateOfTestimonial,
    slideAuthorNameColor,
    slideAuthorDesignationColor,
    slideTestimonialTextColor,
    slideRatingTextColor,
    slideDateOfTestimonialColor
  } = attributes;
  const siteURL = window.location.origin;
  const addStaticPostObj = () => {
    const staticPostObj = [...testimonials, {
      id: testimonials.length + 1,
      authorImage: "",
      authorName: "",
      authorDesignation: "",
      testimonialText: "",
      rating: "",
      dateOfTestimonial: ""
    }];
    setAttributes({
      testimonials: staticPostObj
    });
  };
  const updateStaticPostObj = (index, key, value) => {
    const updatedStaticPostObj = [...testimonials];
    updatedStaticPostObj[index][key] = value;
    setAttributes({
      testimonials: updatedStaticPostObj
    });
  };
  const removeStaticPostObj = index => {
    const updatedStaticPostObj = [...testimonials];
    updatedStaticPostObj.splice(index, 1);
    setAttributes({
      testimonials: updatedStaticPostObj
    });
  };
  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...testimonials];
    arrayCopy[oldIndex] = testimonials[newIndex];
    arrayCopy[newIndex] = testimonials[oldIndex];
    setAttributes({
      testimonials: arrayCopy
    });
  };
  const displaySlideReviewStars = rating => {
    const stars = [];
    if (isNaN(rating)) {
      rating = 0;
    }
    for (let i = 0; i < rating; i++) {
      stars.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
        className: "fa fa-star"
      }, i));
    }
    return stars;
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
      className: "md_porto_testimonials_section"
    }),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Block Settings", "md-porto"),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Sub Title", "md-porto"),
          checked: showSubTitle,
          onChange: value => setAttributes({
            showSubTitle: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Title", "md-porto"),
          checked: showTitle,
          onChange: value => setAttributes({
            showTitle: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Heading Content", "md-porto"),
          checked: showHeadingContent,
          onChange: value => setAttributes({
            showHeadingContent: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Join Us", "md-porto"),
          checked: showJoinUs,
          onChange: value => setAttributes({
            showJoinUs: value
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Testimonials Settings", "md-porto"),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Testimonials", "md-porto"),
          checked: showTestimonials,
          onChange: value => setAttributes({
            showTestimonials: value
          })
        }), showTestimonials && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "settings-row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Slide Author Image", "md-porto"),
            checked: showSlideAuthorImage,
            onChange: value => setAttributes({
              showSlideAuthorImage: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Slide Author Name", "md-porto"),
            checked: showSlideAuthorName,
            onChange: value => setAttributes({
              showSlideAuthorName: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Slide Author Designation", "md-porto"),
            checked: showSlideAuthorDesignation,
            onChange: value => setAttributes({
              showSlideAuthorDesignation: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Slide Testimonial Text", "md-porto"),
            checked: showSlideTestimonialText,
            onChange: value => setAttributes({
              showSlideTestimonialText: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Slide Rating", "md-porto"),
            checked: showSlideRating,
            onChange: value => setAttributes({
              showSlideRating: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Slide Date Of Testimonial", "md-porto"),
            checked: showSlideDateOfTestimonial,
            onChange: value => setAttributes({
              showSlideDateOfTestimonial: value
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.PanelColorSettings, {
            title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color Settings", "md-porto"),
            initialOpen: false,
            colorSettings: [{
              value: slideAuthorNameColor,
              onChange: value => setAttributes({
                slideAuthorNameColor: value
              }),
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Slide Author Name Color", "md-porto")
            }, {
              value: slideAuthorDesignationColor,
              onChange: value => setAttributes({
                slideAuthorDesignationColor: value
              }),
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Slide Author Designation Color", "md-porto")
            }, {
              value: slideTestimonialTextColor,
              onChange: value => setAttributes({
                slideTestimonialTextColor: value
              }),
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Slide Testimonial Text Color", "md-porto")
            }, {
              value: slideRatingTextColor,
              onChange: value => setAttributes({
                slideRatingTextColor: value
              }),
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Slide Rating Text Color", "md-porto")
            }, {
              value: slideDateOfTestimonialColor,
              onChange: value => setAttributes({
                slideDateOfTestimonialColor: value
              }),
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Slide Date Of Testimonial Color", "md-porto")
            }]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button Settings"),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Button", "md-porto"),
          checked: showButton,
          onChange: value => setAttributes({
            showButton: value
          })
        }), showButton && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "settings-row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.PanelColorSettings, {
            title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button Color Settings", "md-porto"),
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
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "settings-row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
              htmlFor: "buttonBackgroundColor",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button Background Color")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.GradientPicker, {
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
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "settings-row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
              htmlFor: "buttonHoverBackgroundColor",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button Hover Background Color")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.GradientPicker, {
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
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color Settings", "md-porto"),
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.PanelColorSettings, {
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
            value: headingContentColor,
            onChange: colorValue => setAttributes({
              headingContentColor: colorValue
            }),
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Heading Content Color", "md-porto")
          }, {
            value: backgroundColor,
            onChange: colorValue => setAttributes({
              backgroundColor: colorValue
            }),
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Background Color", "md-porto")
          }, {
            value: joinUsTextColor,
            onChange: colorValue => setAttributes({
              joinUsTextColor: colorValue
            }),
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Join Us Text Color", "md-porto")
          }]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: `md_porto_testimonials_wrap`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("style", {
        children: `
            .md_porto_testimonials__btn .md_btn {
              color: ${buttonColor};
              background: ${buttonBackgroundColor};
              &:before {
                background: ${buttonBackgroundColor};
              }
            }
            .md_porto_testimonials__btn .md_btn:hover {
              color: ${buttonHoverColor} !important;
              background: ${buttonHoverBackgroundColor};
              &:before {
                background: ${buttonHoverBackgroundColor};
              }
            }
          `
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "md_porto_testimonials",
        style: {
          backgroundColor
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "container",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "md_porto_testimonials__inner",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "md_porto_testimonials__heading",
              children: [showSubTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: "h4",
                value: subTitle,
                onChange: value => setAttributes({
                  subTitle: value
                }),
                placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enter Sub Title", "md-porto"),
                style: {
                  color: subTitleColor
                }
              }), showTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: "h2",
                value: title,
                onChange: value => setAttributes({
                  title: value
                }),
                placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enter Title", "md-porto"),
                style: {
                  color: titleColor
                }
              }), showHeadingContent && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: "p",
                className: "md_porto_testimonials__content",
                value: headingContent,
                onChange: value => setAttributes({
                  headingContent: value
                }),
                placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enter Content", "md-porto"),
                style: {
                  color: headingContentColor
                }
              }), showJoinUs && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: "md_porto_testimonials__join_us",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                  className: "fa fa-users"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                  tagName: "p",
                  className: "",
                  value: joinUsText,
                  onChange: value => setAttributes({
                    joinUsText: value
                  }),
                  placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enter Join Us Text", "md-porto"),
                  style: {
                    color: joinUsTextColor
                  }
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "md_btn__wrapper md_porto_testimonials__btn",
                children: showButton && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                  className: "md_btn md_btn__arrow",
                  tagName: "p",
                  value: buttonLink,
                  onChange: value => setAttributes({
                    buttonLink: value
                  }),
                  placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enter Button Text", "md-porto")
                })
              })]
            }), showTestimonials && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "md_porto_testimonials__slider",
              children: [testimonials.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: `md_customer_stories_grid_item show-items-hover-wrap"`,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: `item-action-wrap show-items-hover pos-abs`,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: "move-item",
                    children: [0 < index && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
                      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Move Left", "md-crafto"),
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
                    }), index + 1 < testimonials.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
                      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Move Right", "md-crafto"),
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
                  }), 1 < testimonials.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
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
                  className: "md_customer_stories_grid_item__inner",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: "md_customer_stories_grid_item__authorHeading",
                    children: [showSlideAuthorImage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: "md-prime-block-control image-preview image-controle-visible-hover md_customer_stories_grid_item__authoImage",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                        className: `image-controls small-icons icon-center-fixed`,
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, {
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
                            onSelect: media => updateStaticPostObj(index, "authorImage", media.url),
                            allowedTypes: ["image"],
                            value: item.authorImage,
                            render: ({
                              open
                            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
                              children: item.authorImage ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
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
                                    onClick: () => updateStaticPostObj(index, "authorImage", ""),
                                    role: "button",
                                    tabIndex: 0,
                                    onKeyDown: e => {
                                      if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault();
                                        updateStaticPostObj(index, "authorImage", "");
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
                        src: item.authorImage ? item.authorImage : siteURL + _placeholder_image_png__WEBPACK_IMPORTED_MODULE_4__,
                        alt: "slider"
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: "md_customer_stories_grid_item__authorDetails",
                      children: [showSlideAuthorName && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                        tagName: "h3",
                        className: "md_customer_stories_grid_item__authorName",
                        value: item.authorName,
                        onChange: value => updateStaticPostObj(index, "authorName", value),
                        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Author Name", "md-prime"),
                        style: {
                          color: slideAuthorNameColor
                        }
                      }), showSlideAuthorDesignation && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                        tagName: "p",
                        className: "md_customer_stories_grid_item__authorDesignation",
                        value: item.authorDesignation,
                        onChange: value => updateStaticPostObj(index, "authorDesignation", value),
                        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Author Designation", "md-prime"),
                        style: {
                          color: slideAuthorDesignationColor
                        }
                      })]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    className: "md_customer_stories_grid_item__content",
                    children: showSlideTestimonialText && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                      tagName: "p",
                      className: "md_customer_stories_grid_item__testimonialText",
                      value: item.testimonialText,
                      onChange: value => updateStaticPostObj(index, "testimonialText", value),
                      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Testimonial Text", "md-prime"),
                      style: {
                        color: slideTestimonialTextColor
                      }
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: "md_customer_stories_grid_item__rating",
                    children: [showSlideRating && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: "md_customer_stories_grid_item__ratingStars",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                        tagName: "p",
                        value: item.rating,
                        onChange: value => updateStaticPostObj(index, "rating", value),
                        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rating", "md-prime"),
                        style: {
                          color: slideRatingTextColor
                        }
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                        className: "md_customer_stories_grid_item__ratingStars__stars",
                        children: displaySlideReviewStars(item.rating)
                      })]
                    }), showSlideDateOfTestimonial && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                      className: "md_customer_stories_grid_item__dateOfTestimonial",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                        tagName: "p",
                        value: item.dateOfTestimonial,
                        onChange: value => updateStaticPostObj(index, "dateOfTestimonial", value),
                        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Date Of Testimonial", "md-prime"),
                        style: {
                          color: slideDateOfTestimonialColor
                        }
                      })
                    })]
                  })]
                })]
              }, index)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
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
            })]
          })
        })
      })]
    })]
  });
}

/***/ }),

/***/ "./src/blocks/md-testimonials/index.js":
/*!*********************************************!*\
  !*** ./src/blocks/md-testimonials/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/md-testimonials/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/md-testimonials/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/md-testimonials/block.json");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/md-testimonials/style.scss");
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

/***/ "./src/blocks/md-testimonials/save.js":
/*!********************************************!*\
  !*** ./src/blocks/md-testimonials/save.js ***!
  \********************************************/
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
    headingContent,
    buttonLink,
    backgroundColor,
    subTitleColor,
    titleColor,
    headingContentColor,
    showSubTitle,
    showTitle,
    showHeadingContent,
    showButton,
    buttonColor,
    buttonBackgroundColor,
    buttonHoverColor,
    buttonHoverBackgroundColor,
    joinUsText,
    joinUsTextColor,
    showJoinUs,
    showTestimonials,
    testimonials,
    showSlideAuthorImage,
    showSlideAuthorName,
    showSlideAuthorDesignation,
    showSlideTestimonialText,
    showSlideRating,
    showSlideDateOfTestimonial,
    slideAuthorNameColor,
    slideAuthorDesignationColor,
    slideTestimonialTextColor,
    slideRatingTextColor,
    slideDateOfTestimonialColor
  } = attributes;
  const displaySlideReviewStars = rating => {
    const stars = [];
    if (isNaN(rating)) {
      rating = 0;
    }
    for (let i = 0; i < rating; i++) {
      stars.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("i", {
        className: "fa fa-star"
      }, i));
    }
    return stars;
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
      className: "md_porto_testimonials_section"
    }),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: `md_porto_testimonials_wrap`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("style", {
        children: `
				.md_porto_testimonials__btn .md_btn {
				  color: ${buttonColor};
				  background: ${buttonBackgroundColor};
				  &:before {
					background: ${buttonBackgroundColor};
				  }
				}
				.md_porto_testimonials__btn .md_btn:hover {
				  color: ${buttonHoverColor} !important;
				  background: ${buttonHoverBackgroundColor};
				  &:before {
					background: ${buttonHoverBackgroundColor};
				  }
				}
			  `
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "md_porto_testimonials",
        style: {
          backgroundColor
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "container",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "md_porto_testimonials__inner",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "md_porto_testimonials__heading",
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
              }), showHeadingContent && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                tagName: "p",
                className: "md_porto_testimonials__content",
                value: headingContent,
                placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enter Content", "md-porto"),
                style: {
                  color: headingContentColor
                }
              }), showJoinUs && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "md_porto_testimonials__join_us",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("i", {
                  className: "fa fa-users"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                  tagName: "p",
                  className: "",
                  value: joinUsText,
                  placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enter Join Us Text", "md-porto"),
                  style: {
                    color: joinUsTextColor
                  }
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "md_btn__wrapper md_porto_testimonials__btn",
                children: showButton && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                  className: "md_btn md_btn__arrow",
                  tagName: "p",
                  value: buttonLink,
                  placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enter Button Text", "md-porto")
                })
              })]
            }), showTestimonials && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "md_porto_testimonials__slider",
              children: testimonials.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: `md_customer_stories_grid_item show-items-hover-wrap"`,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "md_customer_stories_grid_item__inner",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                    className: "md_customer_stories_grid_item__authorHeading",
                    children: [showSlideAuthorImage && item.authorImage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                      className: "md-prime-block-control image-preview image-controle-visible-hover md_customer_stories_grid_item__authoImage",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
                        src: item.authorImage,
                        alt: "slider"
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                      className: "md_customer_stories_grid_item__authorDetails",
                      children: [showSlideAuthorName && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                        tagName: "h3",
                        className: "md_customer_stories_grid_item__authorName",
                        value: item.authorName,
                        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Author Name", "md-prime"),
                        style: {
                          color: slideAuthorNameColor
                        }
                      }), showSlideAuthorDesignation && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                        tagName: "p",
                        className: "md_customer_stories_grid_item__authorDesignation",
                        value: item.authorDesignation,
                        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Author Designation", "md-prime"),
                        style: {
                          color: slideAuthorDesignationColor
                        }
                      })]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                    className: "md_customer_stories_grid_item__content",
                    children: showSlideTestimonialText && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                      tagName: "p",
                      className: "md_customer_stories_grid_item__testimonialText",
                      value: item.testimonialText,
                      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Testimonial Text", "md-prime"),
                      style: {
                        color: slideTestimonialTextColor
                      }
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                    className: "md_customer_stories_grid_item__rating",
                    children: [showSlideRating && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                      className: "md_customer_stories_grid_item__ratingStars",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                        tagName: "p",
                        value: item.rating,
                        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rating", "md-prime"),
                        style: {
                          color: slideRatingTextColor
                        }
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                        className: "md_customer_stories_grid_item__ratingStars__stars",
                        children: displaySlideReviewStars(item.rating)
                      })]
                    }), showSlideDateOfTestimonial && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                      className: "md_customer_stories_grid_item__dateOfTestimonial",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                        tagName: "p",
                        value: item.dateOfTestimonial,
                        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Date Of Testimonial", "md-prime"),
                        style: {
                          color: slideDateOfTestimonialColor
                        }
                      })
                    })]
                  })]
                })
              }, index))
            })]
          })
        })
      })]
    })
  });
}

/***/ }),

/***/ "./src/blocks/md-testimonials/style.scss":
/*!***********************************************!*\
  !*** ./src/blocks/md-testimonials/style.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/md-testimonials/placeholder-image.png":
/*!**********************************************************!*\
  !*** ./src/blocks/md-testimonials/placeholder-image.png ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "/wp-content/themes/md-porto/assets/build/images/placeholder-image.2d0b00c1.png";

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

/***/ "./src/blocks/md-testimonials/block.json":
/*!***********************************************!*\
  !*** ./src/blocks/md-testimonials/block.json ***!
  \***********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","name":"md-porto/md-testimonials","version":"0.1.0","title":"MD Testimonials","apiVersion":3,"category":"md-porto","icon":"admin-comments","description":"A block to display testimonials.","keywords":["testimonial","quote"],"supports":{"html":false},"textdomain":"md-porto","attributes":{"subTitle":{"type":"string","default":""},"title":{"type":"string","default":""},"headingContent":{"type":"string","default":""},"buttonLink":{"type":"string","default":""},"backgroundColor":{"type":"string","default":""},"subTitleColor":{"type":"string","default":""},"titleColor":{"type":"string","default":""},"headingContentColor":{"type":"string","default":""},"showSubTitle":{"type":"boolean","default":true},"showTitle":{"type":"boolean","default":true},"showHeadingContent":{"type":"boolean","default":true},"showButton":{"type":"boolean","default":true},"buttonColor":{"type":"string","default":""},"buttonBackgroundColor":{"type":"string","default":""},"buttonHoverColor":{"type":"string","default":""},"buttonHoverBackgroundColor":{"type":"string","default":""},"joinUsText":{"type":"string","default":""},"joinUsTextColor":{"type":"string","default":""},"showJoinUs":{"type":"boolean","default":true},"showTestimonials":{"type":"boolean","default":true},"testimonials":{"type":"array","default":[]},"showSlideAuthorImage":{"type":"boolean","default":true},"showSlideAuthorName":{"type":"boolean","default":true},"showSlideAuthorDesignation":{"type":"boolean","default":true},"showSlideTestimonialText":{"type":"boolean","default":true},"showSlideRating":{"type":"boolean","default":true},"showSlideDateOfTestimonial":{"type":"boolean","default":true},"slideAuthorNameColor":{"type":"string","default":""},"slideAuthorDesignationColor":{"type":"string","default":""},"slideTestimonialTextColor":{"type":"string","default":""},"slideRatingTextColor":{"type":"string","default":""},"slideDateOfTestimonialColor":{"type":"string","default":""}},"editorScript":"file:./index.js","style":"file:./style-index.css"}');

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
/******/ 			"blocks/md-testimonials/index": 0,
/******/ 			"blocks/md-testimonials/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/md-testimonials/style-index"], () => (__webpack_require__("./src/blocks/md-testimonials/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map