/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/md-slider/edit.js":
/*!**************************************!*\
  !*** ./src/blocks/md-slider/edit.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);

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
    autoplay,
    arrows,
    dots,
    slideInfinite,
    slideSlidesToShow,
    slideSlidesToScroll,
    slideItems,
    sliderTitleFontColor,
    sliderDescriptionFontColor,
    sliderLinkFontColor
  } = attributes;
  const [currentSlide, setCurrentSlide] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
  const addStaticPostObj = () => {
    const staticPostObj = [...slideItems, {
      id: slideItems.length + 1,
      title: "",
      description: "",
      link: "",
      backgroundImage: "",
      boxColor: null
    }];
    setAttributes({
      slideItems: staticPostObj
    });
  };
  const updateStaticPostObj = (index, key, value) => {
    const updatedStaticPostObj = [...slideItems];
    updatedStaticPostObj[index][key] = value;
    setAttributes({
      slideItems: updatedStaticPostObj
    });
  };
  const removeStaticPostObj = index => {
    const updatedStaticPostObj = [...slideItems];
    updatedStaticPostObj.splice(index, 1);
    if (currentSlide >= updatedStaticPostObj.length) {
      setCurrentSlide(updatedStaticPostObj.length - 1); // Set to last slide if current is out of bounds
    }
    setAttributes({
      slideItems: updatedStaticPostObj
    });
  };
  console.log(currentSlide);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
      className: "md_slider_section"
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Slider Settings")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Autoplay", "md-prime"),
    checked: autoplay,
    onChange: autoplay => setAttributes({
      autoplay
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Hide/Show Arrows", "md-prime"),
    checked: arrows,
    onChange: arrows => setAttributes({
      arrows
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Hide/Show Dots", "md-prime"),
    checked: dots,
    onChange: dots => setAttributes({
      dots
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Infinite Loop", "md-prime"),
    checked: slideInfinite,
    onChange: slideInfinite => setAttributes({
      slideInfinite
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Slides To Show"),
    value: slideSlidesToShow,
    min: 1,
    max: 10,
    step: 1,
    onChange: slideSlidesToShow => setAttributes({
      slideSlidesToShow
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Slides To Scroll"),
    value: slideSlidesToScroll,
    min: 1,
    max: 10,
    step: 1,
    onChange: slideSlidesToScroll => setAttributes({
      slideSlidesToScroll
    })
  })), currentSlide > -1 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Current Slide Settings"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "setting-row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "background-image"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background Image", "md-prime")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, !slideItems[currentSlide].backgroundImage ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => {
      updateStaticPostObj(currentSlide, "backgroundImage", media.url);
    },
    allowedTypes: ["image"],
    value: slideItems[currentSlide].background_image,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      onClick: open,
      className: "button button-large"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Upload Image", "md-prime"))
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "image-preview"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: slideItems[currentSlide].backgroundImage,
    alt: "Background-image-preview"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    onClick: () => {
      updateStaticPostObj(currentSlide, "backgroundImage", "");
    },
    className: "is-link is-destructive"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Remove Image", "md-prime"))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Box Background Color")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.GradientPicker, {
    value: slideItems[currentSlide].boxColor !== undefined ? slideItems[currentSlide].boxColor : null,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Box Color"),
    onChange: color => updateStaticPostObj(currentSlide, "boxColor", color),
    gradients: [{
      name: "gradient1",
      gradient: "linear-gradient(298.12deg, #11152c 14.52%, #145980 105.31%)",
      slug: "gradient1"
    }, {
      name: "Moonlit Asteroid",
      gradient: "linear-gradient(135deg,#0F2027 0%, #203A43 0%, #2c5364 100%)",
      slug: "moonlit-asteroid"
    }, {
      name: "Rastafarie",
      gradient: "linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)",
      slug: "rastafari"
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    isDestructive: true,
    onClick: () => removeStaticPostObj(currentSlide)
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Delete Slide"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Color Settings"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Color Settings", "md-storyful-fse-full"),
    initialOpen: false,
    colorSettings: [{
      value: sliderTitleFontColor,
      onChange: newColor => setAttributes({
        sliderTitleFontColor: newColor
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Slider Title Font Color")
    }, {
      value: sliderDescriptionFontColor,
      onChange: newColor => setAttributes({
        sliderDescriptionFontColor: newColor
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Slider Description Font Color")
    }, {
      value: sliderLinkFontColor,
      onChange: newColor => setAttributes({
        sliderLinkFontColor: newColor
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Slider Link Font Color")
    }]
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_hero_banner_slider md_slider_grid"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_slider",
    "data-autoplay": autoplay,
    "data-arrows": arrows,
    "data-dots": dots,
    "data-infinite": slideInfinite,
    "data-slidesToShow": slideSlidesToShow,
    "data-slidesToScroll": slideSlidesToScroll
  }, slideItems.map((item, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `md_slider_grid_item ${currentSlide === index ? "active" : ""}`,
    key: index
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `md_slider__item`
  }, item.backgroundImage && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "md_slider__item__bg",
    src: item.backgroundImage,
    alt: "slide"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_slider__item__content",
    style: {
      background: item.boxColor
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_slider__item__content__inner"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "h2",
    className: "md_slider__item__content__title",
    value: item.title,
    onChange: value => updateStaticPostObj(index, "title", value),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enter Title", "md-prime"),
    style: {
      color: sliderTitleFontColor
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "p",
    className: "md_slider__item__content__description",
    value: item.description,
    onChange: value => updateStaticPostObj(index, "description", value),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enter Description", "md-prime"),
    style: {
      color: sliderDescriptionFontColor
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_slider__item__content__btn md_btn_arrow"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "p",
    value: item.link,
    onChange: value => updateStaticPostObj(index, "link", value),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enter Button Text", "md-prime"),
    style: {
      color: sliderLinkFontColor
    }
  }))))))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_slider_section__items"
  }, slideItems.map((item, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_slider_section__item show-items-hover-wrap" + ` ${currentSlide === index ? "active" : ""}`,
    key: index,
    role: "button",
    tabIndex: 0,
    "data-index": index,
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Edit this item", "md-prime")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `item-action-wrap show-items-hover pos-abs`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "move-item"
  }, 0 < index && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Move Left", "md-efi-fse-full")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
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
  })), index + 1 < slideItems.length && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Move Right", "md-efi-fse-full")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
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
  }))), 1 < slideItems.length && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Remove Item", "md-prime")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "remove-item dashicons dashicons-no-alt",
    role: "button",
    tabIndex: 0,
    onClick: () => {
      const toDelete =
      // eslint-disable-next-line no-alert
      confirm((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Are you sure you want to delete this item?", "md-prime"));
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
        confirm((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Are you sure you want to delete this item?", "md-prime"));
        if (toDelete === true) {
          removeStaticPostObj(index);
        }
      }
    },
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Remove this item", "md-prime")
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "item-title",
    onClick: () => setCurrentSlide(index)
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Slide"), " ", index + 1)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "add-item-wrap",
    onClick: addStaticPostObj,
    role: "button",
    tabIndex: 0,
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Add new item", "md-prime")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Add New Item", "md-prime")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "add-new-item dashicons dashicons-plus"
  }))));
}

/***/ }),

/***/ "./src/blocks/md-slider/index.js":
/*!***************************************!*\
  !*** ./src/blocks/md-slider/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/md-slider/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/md-slider/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/md-slider/block.json");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/md-slider/style.scss");
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

/***/ "./src/blocks/md-slider/save.js":
/*!**************************************!*\
  !*** ./src/blocks/md-slider/save.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);

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
    autoplay,
    arrows,
    dots,
    slideInfinite,
    slideSlidesToShow,
    slideSlidesToScroll,
    slideItems,
    sliderTitleFontColor,
    sliderDescriptionFontColor,
    sliderLinkFontColor
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
      className: "md_slider_section"
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_hero_banner_slider"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_slider",
    "data-autoplay": autoplay,
    "data-arrows": arrows,
    "data-dots": dots,
    "data-infinite": slideInfinite,
    "data-slidesToShow": slideSlidesToShow,
    "data-slidesToScroll": slideSlidesToScroll
  }, slideItems && slideItems.map((postObj, currentSlide) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_slider__item"
  }, slideItems[currentSlide].backgroundImage && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "md_slider__item__bg",
    src: slideItems[currentSlide].backgroundImage,
    alt: "slide"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_slider__item__content",
    style: {
      background: slideItems[currentSlide].boxColor
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_slider__item__content__inner"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "h2",
    className: "md_slider__item__content__title",
    value: slideItems[currentSlide].title,
    style: {
      color: sliderTitleFontColor
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "p",
    className: "md_slider__item__content__description",
    value: slideItems[currentSlide].description,
    style: {
      color: sliderDescriptionFontColor
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_slider__item__content__btn md_btn_arrow"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "p",
    value: slideItems[currentSlide].link,
    style: {
      color: sliderLinkFontColor
    }
  })))))))));
}

/***/ }),

/***/ "./src/blocks/md-slider/style.scss":
/*!*****************************************!*\
  !*** ./src/blocks/md-slider/style.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

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

/***/ "./src/blocks/md-slider/block.json":
/*!*****************************************!*\
  !*** ./src/blocks/md-slider/block.json ***!
  \*****************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","name":"md-efi-fse-full/md-slider","version":"0.1.0","title":"MD Slider","apiVersion":3,"category":"md-efi-fse-full","icon":"slides","description":"A block to display slider","keywords":["md-efi-fse-full","md-slider"],"supports":{"html":false,"align":["wide","full"]},"textdomain":"md-efi-fse-full","attributes":{"slideItems":{"type":"array","default":[{"id":1,"title":"","description":"","link":"","backgroundImage":"","boxColor":null}]},"sliderTitleFontSize":{"type":"string","default":""},"sliderTitleFontColor":{"type":"string","default":"#000000"},"sliderDescriptionFontSize":{"type":"string","default":""},"sliderDescriptionFontColor":{"type":"string","default":"#000000"},"sliderLinkFontSize":{"type":"string","default":""},"sliderLinkFontColor":{"type":"string","default":"#000000"},"autoplay":{"type":"boolean","default":false},"arrows":{"type":"boolean","default":true},"dots":{"type":"boolean","default":false},"slideInfinite":{"type":"boolean","default":false},"slideSlidesToShow":{"type":"number","default":1},"slideSlidesToScroll":{"type":"number","default":1}},"editorScript":"file:./index.js","style":"file:./style-index.css"}');

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
/******/ 			"blocks/md-slider/index": 0,
/******/ 			"blocks/md-slider/style-index": 0
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkmd_efi_fse_full"] = self["webpackChunkmd_efi_fse_full"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/md-slider/style-index"], () => (__webpack_require__("./src/blocks/md-slider/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map