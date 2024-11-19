/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/md-timeline-phase/edit.js":
/*!**********************************************!*\
  !*** ./src/blocks/md-timeline-phase/edit.js ***!
  \**********************************************/
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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/md-timeline-phase/editor.scss");
/* harmony import */ var _placeholder_image_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./placeholder-image.png */ "./src/blocks/md-timeline-phase/placeholder-image.png");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/
 */


/**
 * React hook that is used to mark the components element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/
 */




/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param root0
 * @param root0.attributes
 * @param root0.attributes.heading
 * @param root0.setAttributes
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @return {WPElement} Element to render.
 */
function Edit({
  attributes,
  setAttributes
}) {
  const {
    phaseIcon,
    aheadHeading,
    enableAheadContent,
    aheadContent,
    behindHeading,
    enableBehindContent,
    behindContent,
    enableAheadPhaseImage,
    aheadPhaseImage,
    enableBehindPhaseImage,
    behindPhaseImage,
    aheadHeadingColor,
    aheadContentColor,
    behindHeadingColor,
    behindContentColor,
    aheadPhaseImageBGColor,
    behindPhaseImageBGColor
  } = attributes;
  const siteURL = window.location.origin;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Block Settings", "md-anitian")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enable Ahead Phase Image", "md-anitian"),
    checked: enableAheadPhaseImage,
    onChange: value => setAttributes({
      enableAheadPhaseImage: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enable Behind Phase Image", "md-anitian"),
    checked: enableBehindPhaseImage,
    onChange: value => setAttributes({
      enableBehindPhaseImage: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enable Ahead Content", "md-anitian"),
    checked: enableAheadContent,
    onChange: value => setAttributes({
      enableAheadContent: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enable Behind Content", "md-anitian"),
    checked: enableBehindContent,
    onChange: value => setAttributes({
      enableBehindContent: value
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Color Settings"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Color Settings", "md-anitian"),
    colorSettings: [{
      value: aheadHeadingColor,
      onChange: value => setAttributes({
        aheadHeadingColor: value
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Ahead Heading Color", "md-anitian")
    }, {
      value: aheadContentColor,
      onChange: value => setAttributes({
        aheadContentColor: value
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Ahead Content Color", "md-anitian")
    }, {
      value: aheadPhaseImageBGColor,
      onChange: value => setAttributes({
        aheadPhaseImageBGColor: value
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Ahead Phase Image BG Color", "md-anitian")
    }, {
      value: behindHeadingColor,
      onChange: value => setAttributes({
        behindHeadingColor: value
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Behind Heading Color", "md-anitian")
    }, {
      value: behindContentColor,
      onChange: value => setAttributes({
        behindContentColor: value
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Behind Content Color", "md-anitian")
    }, {
      value: behindPhaseImageBGColor,
      onChange: value => setAttributes({
        behindPhaseImageBGColor: value
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Behind Phase Image BG Color", "md-anitian")
    }]
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_timeline_phase"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_timeline_phase_block ahead"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_timeline_phase_wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_timeline_phase_icon"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md-prime-block-control image-preview image-controle-visible-hover"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `image-controls small-icons icon-center-fixed`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => setAttributes({
      phaseIcon: media.url
    }),
    allowedTypes: ["image"],
    value: phaseIcon,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, phaseIcon ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Edit Image", "md-prime")
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
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
      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Edit image", "md-prime")
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Remove Image", "md-prime")
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: "dashicons dashicons-no-alt remove-image",
      onClick: () => {
        const toDelete =
        // eslint-disable-next-line no-alert
        confirm((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Are you sure you want to delete this image?", "md-prime"));
        if (toDelete) {
          setAttributes({
            phaseIcon: ""
          });
        }
      },
      role: "button",
      tabIndex: 0,
      onKeyDown: e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setAttributes({
            phaseIcon: ""
          });
        }
      },
      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Remove image", "md-prime")
    }))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "upload-wrap"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: open,
      className: "button media_and_text__upload_btn"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Upload Image", "md-prime")
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: "dashicons dashicons-upload"
    })))))
  }))), phaseIcon ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: phaseIcon,
    alt: "Slider Icon"
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: siteURL + _placeholder_image_png__WEBPACK_IMPORTED_MODULE_5__,
    alt: "Slider Icon"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_timeline_phase_content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "timeline__phase-card",
    style: enableAheadPhaseImage ? {
      background: `linear-gradient(90deg, #f7f7f7 75%, ${aheadPhaseImageBGColor} 25%)`
    } : {
      background: "#f7f7f7"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    style: {
      color: aheadHeadingColor
    },
    tagName: "h4",
    className: "heading",
    name: "heading",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enter Title"),
    value: aheadHeading,
    onChange: value => setAttributes({
      aheadHeading: value
    })
  }), enableAheadPhaseImage && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "timeline__phase-image"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md-prime-block-control image-preview image-controle-visible-hover"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `image-controls small-icons icon-center-fixed`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => setAttributes({
      aheadPhaseImage: media.url
    }),
    allowedTypes: ["image"],
    value: aheadPhaseImage,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, aheadPhaseImage ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Edit Image", "md-prime")
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
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
      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Edit image", "md-prime")
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Remove Image", "md-prime")
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: "dashicons dashicons-no-alt remove-image",
      onClick: () => {
        const toDelete =
        // eslint-disable-next-line no-alert
        confirm((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Are you sure you want to delete this image?", "md-prime"));
        if (toDelete) {
          setAttributes({
            aheadPhaseImage: ""
          });
        }
      },
      role: "button",
      tabIndex: 0,
      onKeyDown: e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setAttributes({
            aheadPhaseImage: ""
          });
        }
      },
      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Remove image", "md-prime")
    }))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "upload-wrap"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: open,
      className: "button media_and_text__upload_btn"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Upload Image", "md-prime")
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: "dashicons dashicons-upload"
    })))))
  }))), aheadPhaseImage ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: aheadPhaseImage,
    alt: "Slider Icon"
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: siteURL + _placeholder_image_png__WEBPACK_IMPORTED_MODULE_5__,
    alt: "Slider Icon"
  })))), enableAheadContent && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    style: {
      color: aheadContentColor
    },
    tagName: "p",
    className: "content",
    name: "content",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enter Paragraph…"),
    value: aheadContent,
    onChange: value => setAttributes({
      aheadContent: value
    })
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_timeline_phase_block behind"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_timeline_phase_wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_timeline_phase_icon"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_timeline__phase-caution"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "fa fa-exclamation-triangle",
    "aria-hidden": "true"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_timeline_phase_content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "timeline__phase-card",
    style: enableBehindPhaseImage ? {
      background: `linear-gradient(270deg, #f7f7f7 75%, ${behindPhaseImageBGColor} 25%)`
    } : {
      background: "#f7f7f7"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    style: {
      color: behindHeadingColor
    },
    tagName: "h4",
    className: "heading",
    name: "behindHeading",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enter Title"),
    value: behindHeading,
    onChange: value => setAttributes({
      behindHeading: value
    })
  }), enableBehindPhaseImage && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "timeline__phase-image"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md-prime-block-control image-preview image-controle-visible-hover"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `image-controls small-icons icon-center-fixed`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => setAttributes({
      behindPhaseImage: media.url
    }),
    allowedTypes: ["image"],
    value: behindPhaseImage,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, behindPhaseImage ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Edit Image", "md-prime")
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
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
      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Edit image", "md-prime")
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Remove Image", "md-prime")
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: "dashicons dashicons-no-alt remove-image",
      onClick: () => {
        const toDelete =
        // eslint-disable-next-line no-alert
        confirm((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Are you sure you want to delete this image?", "md-prime"));
        if (toDelete) {
          setAttributes({
            behindPhaseImage: ""
          });
        }
      },
      role: "button",
      tabIndex: 0,
      onKeyDown: e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setAttributes({
            behindPhaseImage: ""
          });
        }
      },
      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Remove image", "md-prime")
    }))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "upload-wrap"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: open,
      className: "button media_and_text__upload_btn"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Upload Image", "md-prime")
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: "dashicons dashicons-upload"
    })))))
  }))), behindPhaseImage ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: behindPhaseImage,
    alt: "Slider Icon"
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: siteURL + _placeholder_image_png__WEBPACK_IMPORTED_MODULE_5__,
    alt: "Slider Icon"
  })))), enableBehindContent && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    style: {
      color: behindContentColor
    },
    tagName: "p",
    className: "content",
    name: "behindContent",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enter Paragraph…"),
    value: behindContent,
    onChange: value => setAttributes({
      behindContent: value
    })
  }))))));
}

/***/ }),

/***/ "./src/blocks/md-timeline-phase/index.js":
/*!***********************************************!*\
  !*** ./src/blocks/md-timeline-phase/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/md-timeline-phase/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/md-timeline-phase/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/md-timeline-phase/block.json");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/md-timeline-phase/style.scss");
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

/***/ "./src/blocks/md-timeline-phase/save.js":
/*!**********************************************!*\
  !*** ./src/blocks/md-timeline-phase/save.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

function save() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null);
}

/***/ }),

/***/ "./src/blocks/md-timeline-phase/editor.scss":
/*!**************************************************!*\
  !*** ./src/blocks/md-timeline-phase/editor.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/md-timeline-phase/style.scss":
/*!*************************************************!*\
  !*** ./src/blocks/md-timeline-phase/style.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/md-timeline-phase/placeholder-image.png":
/*!************************************************************!*\
  !*** ./src/blocks/md-timeline-phase/placeholder-image.png ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "/wp-content/themes/md-anitian-fse-v2/assets/build/images/placeholder-image.2d0b00c1.png";

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

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/blocks/md-timeline-phase/block.json":
/*!*************************************************!*\
  !*** ./src/blocks/md-timeline-phase/block.json ***!
  \*************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","name":"md-anitian-fse-v2/md-timeline-phase","version":"0.1.0","title":"MD Timeline Phase","apiVersion":3,"category":"md-anitian-fse-v2","icon":"chart-line","description":"A block to display the finish timeline","keywords":["md-anitian-fse-v2","md-timeline-phase"],"supports":{"html":false},"textdomain":"md-anitian-fse-v2","attributes":{"phaseIcon":{"type":"string","default":""},"aheadHeading":{"type":"string","default":""},"enableAheadContent":{"type":"boolean","default":true},"aheadContent":{"type":"string","default":""},"behindHeading":{"type":"string","default":""},"enableBehindContent":{"type":"boolean","default":true},"behindContent":{"type":"string","default":""},"enableAheadPhaseImage":{"type":"boolean","default":true},"aheadPhaseImage":{"type":"string","default":""},"enableBehindPhaseImage":{"type":"boolean","default":true},"behindPhaseImage":{"type":"string","default":""},"aheadHeadingColor":{"type":"string","default":""},"aheadContentColor":{"type":"string","default":""},"behindHeadingColor":{"type":"string","default":""},"behindContentColor":{"type":"string","default":""},"aheadPhaseImageBGColor":{"type":"string","default":"#1ca5ff"},"behindPhaseImageBGColor":{"type":"string","default":"#F47528"}},"editorScript":"file:./index.js","viewScript":["file:./view.js"],"editorStyle":"file:./index.css","style":"file:./style-index.css"}');

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
/******/ 			"blocks/md-timeline-phase/index": 0,
/******/ 			"blocks/md-timeline-phase/style-index": 0
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkmd_anitian_fse_v2"] = self["webpackChunkmd_anitian_fse_v2"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/md-timeline-phase/style-index"], () => (__webpack_require__("./src/blocks/md-timeline-phase/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map