/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/md-card-block/edit.js":
/*!******************************************!*\
  !*** ./src/blocks/md-card-block/edit.js ***!
  \******************************************/
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
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);

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
    sub_title,
    title,
    heading_content,
    card_block_style,
    card_block_list,
    sub_title_font_size,
    sub_title_font_color,
    title_font_size,
    title_font_color,
    heading_content_font_size,
    heading_content_font_color,
    card_title_font_size,
    card_title_font_color,
    card_content_font_size,
    card_content_font_color,
    card_learn_more_font_size,
    card_learn_more_font_color
  } = attributes;
  const [currentSlide, setCurrentSlide] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
  const addStaticPostObj = () => {
    const staticPostObj = [...card_block_list, {
      id: card_block_list.length + 1,
      card_image: "",
      card_title: "",
      card_description: "",
      learn_more_link: ""
    }];
    setAttributes({
      card_block_list: staticPostObj
    });
  };
  const updateStaticPostObj = (index, key, value) => {
    const updatedStaticPostObj = [...card_block_list];
    updatedStaticPostObj[index][key] = value;
    setAttributes({
      card_block_list: updatedStaticPostObj
    });
  };
  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...card_block_list];
    arrayCopy[oldIndex] = card_block_list[newIndex];
    arrayCopy[newIndex] = card_block_list[oldIndex];
    setAttributes({
      card_block_list: arrayCopy
    });
  };
  const fontSizes = [{
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("S"),
    slug: "small",
    size: "12px"
  }, {
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("M"),
    slug: "medium",
    size: "18px"
  }, {
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("L"),
    slug: "large",
    size: "26px"
  }, {
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("XL"),
    slug: "xtra-large",
    size: "48px"
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
      className: "md_anitian_card_block"
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Block Settings", "md-storyful-fse-full")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Card Block Style", "md-anitian-fse-full"),
    value: card_block_style,
    options: [{
      label: "Style 1",
      value: "style1"
    }, {
      label: "Style 2",
      value: "style2"
    }, {
      label: "Style 3",
      value: "style3"
    }],
    onChange: value => setAttributes({
      card_block_style: value
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Typography", "md-storyful-fse-full")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Sub Title Font Size"), " "), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FontSizePicker, {
    __nextHasNoMarginBottom: true,
    fontSizes: fontSizes,
    value: sub_title_font_size,
    fallbackFontSize: sub_title_font_size,
    onChange: newFontSize => setAttributes({
      sub_title_font_size: newFontSize
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Title Font Size"), " "), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FontSizePicker, {
    __nextHasNoMarginBottom: true,
    fontSizes: fontSizes,
    value: title_font_size,
    fallbackFontSize: title_font_size,
    onChange: newFontSize => setAttributes({
      title_font_size: newFontSize
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Heading Content Font Size"), " "), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FontSizePicker, {
    __nextHasNoMarginBottom: true,
    fontSizes: fontSizes,
    value: heading_content_font_size,
    fallbackFontSize: heading_content_font_size,
    onChange: newFontSize => setAttributes({
      heading_content_font_size: newFontSize
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Card Title Font Size"), " "), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FontSizePicker, {
    __nextHasNoMarginBottom: true,
    fontSizes: fontSizes,
    value: card_title_font_size,
    fallbackFontSize: card_title_font_size,
    onChange: newFontSize => setAttributes({
      card_title_font_size: newFontSize
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Card Description Font Size"), " "), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FontSizePicker, {
    __nextHasNoMarginBottom: true,
    fontSizes: fontSizes,
    value: card_content_font_size,
    fallbackFontSize: card_content_font_size,
    onChange: newFontSize => setAttributes({
      card_content_font_size: newFontSize
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Card Learn More Font Size"), " "), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FontSizePicker, {
    __nextHasNoMarginBottom: true,
    fontSizes: fontSizes,
    value: card_learn_more_font_size,
    fallbackFontSize: card_learn_more_font_size,
    onChange: newFontSize => setAttributes({
      card_learn_more_font_size: newFontSize
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Typography Colors", "md-storyful-fse-full"),
    initialOpen: false,
    colorSettings: [{
      value: sub_title_font_color,
      onChange: newColor => setAttributes({
        sub_title_font_color: newColor
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Sub Title Font Color")
    }, {
      value: title_font_color,
      onChange: newColor => setAttributes({
        title_font_color: newColor
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Title Font Color")
    }, {
      value: heading_content_font_color,
      onChange: newColor => setAttributes({
        heading_content_font_color: newColor
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Heading Content Font Color")
    }, {
      value: card_title_font_color,
      onChange: newColor => setAttributes({
        card_title_font_color: newColor
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Card Title Font Color")
    }, {
      value: card_content_font_color,
      onChange: newColor => setAttributes({
        card_content_font_color: newColor
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Card Description Font Color")
    }, {
      value: card_learn_more_font_color,
      onChange: newColor => setAttributes({
        card_learn_more_font_color: newColor
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Card Learn More Font Color")
    }]
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `md_anitian_card_block ${card_block_style}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_anitian_card_block__head"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_anitian_card_block__heading"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "h3",
    value: sub_title,
    onChange: value => setAttributes({
      sub_title: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enter Sub Title", "md-anitian-fse-full"),
    style: {
      fontSize: sub_title_font_size,
      color: sub_title_font_color
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "h2",
    value: title,
    onChange: value => setAttributes({
      title: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enter Title", "md-anitian-fse-full"),
    style: {
      fontSize: title_font_size,
      color: title_font_color
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "p",
    value: heading_content,
    onChange: value => setAttributes({
      heading_content: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enter Heading Content", "md-anitian-fse-full"),
    style: {
      fontSize: heading_content_font_size,
      color: heading_content_font_color
    }
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_anitian_card_block__content"
  }, card_block_list && card_block_list.map((postObj, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_anitian_card_block__item show-items-hover-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "item-action-wrap show-items-hover small-icons"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "move-item"
  }, 0 < index && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Move Left", "md-prime")
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
  })), index + 1 < card_block_list.length && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Move Right", "md-prime")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
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
  }))), 1 < card_block_list.length && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Remove Item", "md-prime")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "remove-item dashicons dashicons-no-alt",
    role: "button",
    tabIndex: "0",
    onClick: () => {
      const toDelete =
      // eslint-disable-next-line no-alert
      confirm((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Are you sure you want to delete this item?", "md-prime"));
      if (toDelete) {
        const updatedArray = card_block_list.filter((item, itemIndex) => itemIndex !== index);
        setAttributes({
          card_block_list: updatedArray
        });
      }
    },
    onKeyDown: e => {
      if (e.key === "Enter" || e.key === " ") {
        const toDelete =
        // eslint-disable-next-line no-alert
        confirm((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Are you sure you want to delete this item?", "md-prime"));
        if (toDelete) {
          const updatedArray = card_block_list.filter((item, itemIndex) => itemIndex !== index);
          setAttributes({
            card_block_list: updatedArray
          });
        }
      }
    },
    "aria-label": "Delete item"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_anitian_card_block__item__image"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Image"),
    onSelect: media => updateStaticPostObj(index, "card_image", media.url),
    multiple: false,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, postObj.card_image == "" ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      variant: "primary",
      onClick: open
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Upload")) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      onClick: open,
      src: postObj.card_image
    }))
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_anitian_card_block__item__content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "h3",
    className: "column-item-title",
    value: postObj.card_title,
    onChange: value => updateStaticPostObj(index, "card_title", value),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enter Title"),
    style: {
      fontSize: card_title_font_size,
      color: card_title_font_color
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_anitian_card_block__item__content__link"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "p",
    className: "column-item-desc",
    value: postObj.card_description,
    onChange: value => updateStaticPostObj(index, "card_description", value),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enter Description"),
    style: {
      fontSize: card_content_font_size,
      color: card_content_font_color
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "a",
    className: "md_anitian_card_block__item__link",
    value: postObj.learn_more_link,
    onChange: value => updateStaticPostObj(index, "learn_more_link", value),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enter Title"),
    style: {
      fontSize: card_learn_more_font_size,
      color: card_learn_more_font_color
    }
  }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "add-item-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "primary",
    onClick: addStaticPostObj
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Add New Slide")))))));
}

/***/ }),

/***/ "./src/blocks/md-card-block/index.js":
/*!*******************************************!*\
  !*** ./src/blocks/md-card-block/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/md-card-block/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/md-card-block/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/md-card-block/block.json");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/md-card-block/style.scss");
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

/***/ "./src/blocks/md-card-block/save.js":
/*!******************************************!*\
  !*** ./src/blocks/md-card-block/save.js ***!
  \******************************************/
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
    sub_title,
    title,
    heading_content,
    card_block_style,
    card_block_list,
    sub_title_font_size,
    sub_title_font_color,
    title_font_size,
    title_font_color,
    heading_content_font_size,
    heading_content_font_color,
    card_title_font_size,
    card_title_font_color,
    card_content_font_size,
    card_content_font_color,
    card_learn_more_font_size,
    card_learn_more_font_color
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
      className: "md_anitian_card_block"
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `md_anitian_card_block ${card_block_style}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_anitian_card_block__head"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_anitian_card_block__heading"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "h3",
    value: sub_title,
    style: {
      fontSize: sub_title_font_size,
      color: sub_title_font_color
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "h2",
    value: title,
    style: {
      fontSize: title_font_size,
      color: title_font_color
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "p",
    value: heading_content,
    style: {
      fontSize: heading_content_font_size,
      color: heading_content_font_color
    }
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_anitian_card_block__content"
  }, card_block_list && card_block_list.map((postObj, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_anitian_card_block__item  show-items-hover-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_anitian_card_block__item__image"
  }, postObj.card_image && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: postObj.card_image,
    alt: postObj.card_title
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_anitian_card_block__item__content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "h3",
    className: "column-item-title",
    value: postObj.card_title,
    style: {
      fontSize: card_title_font_size,
      color: card_title_font_color
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_anitian_card_block__item__content__link"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "p",
    className: "column-item-desc",
    value: postObj.card_description,
    style: {
      fontSize: card_content_font_size,
      color: card_content_font_color
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "a",
    className: "md_anitian_card_block__item__link",
    value: postObj.learn_more_link,
    style: {
      fontSize: card_learn_more_font_size,
      color: card_learn_more_font_color
    }
  })))))))));
}

/***/ }),

/***/ "./src/blocks/md-card-block/style.scss":
/*!*********************************************!*\
  !*** ./src/blocks/md-card-block/style.scss ***!
  \*********************************************/
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

/***/ "./src/blocks/md-card-block/block.json":
/*!*********************************************!*\
  !*** ./src/blocks/md-card-block/block.json ***!
  \*********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","name":"md-anitian-fse-full/md-card-block","version":"0.1.0","title":"MD Card Block","apiVersion":3,"category":"md-anitian-fse-full","icon":"index-card","description":"A flexible block that displays information in a card format, often used for showcasing services, features, or profiles with an image, title, and description.","keywords":["md-anitian-fse-full","md-card-block"],"supports":{"html":false,"align":["wide","full"]},"textdomain":"md-anitian-fse-full","attributes":{"sub_title":{"type":"string","default":""},"title":{"type":"string","default":""},"heading_content":{"type":"string","default":""},"card_block_style":{"type":"string","default":"style1"},"card_block_list":{"type":"array","default":[]},"sub_title_font_size":{"type":"string","default":""},"sub_title_font_color":{"type":"string","default":""},"title_font_size":{"type":"string","default":""},"title_font_color":{"type":"string","default":""},"heading_content_font_size":{"type":"string","default":""},"heading_content_font_color":{"type":"string","default":""},"card_title_font_size":{"type":"string","default":""},"card_title_font_color":{"type":"string","default":""},"card_content_font_size":{"type":"string","default":""},"card_content_font_color":{"type":"string","default":""},"card_learn_more_font_size":{"type":"string","default":""},"card_learn_more_font_color":{"type":"string","default":""}},"editorScript":"file:./index.js","style":"file:./style-index.css"}');

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
/******/ 			"blocks/md-card-block/index": 0,
/******/ 			"blocks/md-card-block/style-index": 0
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkmd_anitian_fse_full"] = self["webpackChunkmd_anitian_fse_full"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/md-card-block/style-index"], () => (__webpack_require__("./src/blocks/md-card-block/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map