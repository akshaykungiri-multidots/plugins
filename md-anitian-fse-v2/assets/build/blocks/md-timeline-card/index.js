/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/md-timeline-card/edit.js":
/*!*********************************************!*\
  !*** ./src/blocks/md-timeline-card/edit.js ***!
  \*********************************************/
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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/md-timeline-card/editor.scss");
/* harmony import */ var _placeholder_image_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./placeholder-image.png */ "./src/blocks/md-timeline-card/placeholder-image.png");

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
  setAttributes,
  clientId
}) {
  const {
    heading,
    headingColor,
    backHeadingColor,
    content,
    contentColor,
    backContentColor,
    enableSliderImage,
    sliderImage,
    sliderImageBGColor,
    sliderBorderColor,
    enableClickHere,
    backgroundMediaType,
    backgroundMediaColor,
    backgroundMediaImage,
    innerHeading,
    innerContent,
    showCardTitle,
    showCardContent,
    showInnerCardTitle,
    showInnerCardContent
  } = attributes;
  const siteURL = window.location.origin;
  function MyButtonBlockAppender({
    rootClientId
  }) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.Inserter, {
      rootClientId: rootClientId,
      renderToggle: ({
        onToggle,
        disabled
      }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        className: "my-button-block-appender",
        onClick: onToggle,
        disabled: disabled,
        icon: "plus"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Add More Block")),
      isAppender: true
    });
  }
  const ALLOWED_BLOCKS = ["core/paragraph", "core/heading", "md-anitian-fse-v2/md-quote"];
  const [innerCard, setInnerCard] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Block Settings", "md-anitian")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enable Card Image"),
    checked: enableSliderImage,
    onChange: value => setAttributes({
      enableSliderImage: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Display Click Here Icon"),
    checked: enableClickHere,
    onChange: value => setAttributes({
      enableClickHere: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show Card Title"),
    checked: showCardTitle,
    onChange: value => setAttributes({
      showCardTitle: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show Card Content"),
    checked: showCardContent,
    onChange: value => setAttributes({
      showCardContent: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show Inner Card Title"),
    checked: showInnerCardTitle,
    onChange: value => setAttributes({
      showInnerCardTitle: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show Inner Card Content"),
    checked: showInnerCardContent,
    onChange: value => setAttributes({
      showInnerCardContent: value
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background Settings"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background Type"),
    help: backgroundMediaType ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Media") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Color"),
    checked: backgroundMediaType,
    onChange: () => setAttributes({
      backgroundMediaType: !backgroundMediaType
    })
  }), backgroundMediaType ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "setting-row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "background-image"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background Image", "md-prime")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, !backgroundMediaImage ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: selectedImage => {
      setAttributes({
        backgroundMediaImage: selectedImage.url
      });
    },
    allowedTypes: ["image"],
    value: backgroundMediaImage,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: open,
      className: "button button-large"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Upload Image", "md-prime"))
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "image-preview"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: backgroundMediaImage,
    alt: "Background-image-preview"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    onClick: () => {
      setAttributes({
        backgroundMediaImage: ""
      });
    },
    className: "is-link is-destructive"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Remove Image", "md-prime"))))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "setting-row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "background-gradient"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background Gradient", "md-prime")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.GradientPicker, {
    __nextHasNoMargin: true,
    value: backgroundMediaColor,
    onChange: currentGradient => setAttributes({
      backgroundMediaColor: currentGradient
    }),
    gradients: [{
      name: "JShine",
      gradient: "linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)",
      slug: "jshine"
    }, {
      name: "Moonlit Asteroid",
      gradient: "linear-gradient(135deg,#0F2027 0%, #203A43 0%, #2c5364 100%)",
      slug: "moonlit-asteroid"
    }, {
      name: "Rastafarie",
      gradient: "linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)",
      slug: "rastafari"
    }]
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Color Settings"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Color Settings"),
    colorSettings: [{
      value: headingColor,
      onChange: value => setAttributes({
        headingColor: value
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Heading Color")
    }, {
      value: contentColor,
      onChange: value => setAttributes({
        contentColor: value
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Content Color")
    }, {
      value: backHeadingColor,
      onChange: value => setAttributes({
        backHeadingColor: value
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Inner Heading Color")
    }, {
      value: backContentColor,
      onChange: value => setAttributes({
        backContentColor: value
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Inner Content Color")
    }, {
      value: sliderImageBGColor,
      onChange: value => setAttributes({
        sliderImageBGColor: value
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Image Background Color")
    }, {
      value: sliderBorderColor,
      onChange: value => setAttributes({
        sliderBorderColor: value
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Slider Border Color")
    }]
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_timeline_slider_wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_timeline_slider_inner"
  }, innerCard === 0 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_slider_card",
    style: {
      background: backgroundMediaType ? backgroundMediaImage : backgroundMediaColor
    }
  }, enableSliderImage && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_timeline_slider_image",
    style: {
      backgroundColor: sliderImageBGColor
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md-prime-block-control image-preview image-controle-visible-hover"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `image-controls small-icons icon-center-fixed`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => setAttributes({
      sliderImage: media.url
    }),
    allowedTypes: ["image"],
    value: sliderImage,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, sliderImage ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
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
            sliderImage: ""
          });
        }
      },
      role: "button",
      tabIndex: 0,
      onKeyDown: e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setAttributes({
            sliderImage: ""
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
  }))), sliderImage ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: sliderImage,
    alt: "Slider Icon"
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: siteURL + _placeholder_image_png__WEBPACK_IMPORTED_MODULE_6__,
    alt: "Slider Icon"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_timeline_slider_content"
  }, showCardTitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    style: {
      color: headingColor
    },
    tagName: "h2",
    className: "heading",
    name: "heading",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enter Title"),
    value: heading,
    onChange: value => setAttributes({
      heading: value
    })
  }), showCardContent && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    style: {
      color: contentColor
    },
    tagName: "p",
    className: "content",
    name: "content",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enter Paragraph…"),
    value: content,
    onChange: value => setAttributes({
      content: value
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "click-here"
  }, enableClickHere && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    version: "1.0",
    xmlns: "http://www.w3.org/2000/svg",
    width: "137px",
    height: "64px",
    viewBox: "0 0 305.000000 144.000000",
    preserveAspectRatio: "xMidYMid meet"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    transform: "translate(0.000000,144.000000) scale(0.100000,-0.100000)",
    fill: "currentColor",
    stroke: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M1251 1097 c-5 -12 -15 -58 -22 -102 -7 -44 -19 -90 -26 -102 -8 -12 -12 -30 -9 -41 5 -15 -5 -22 -55 -40 -47 -17 -65 -19 -75 -11 -23 19 -16 47 21 75 40 30 45 54 12 54 -52 0 -108 -98 -86 -152 15 -36 48 -42 111 -18 63 24 68 24 68 6 0 -18 30 -29 35 -13 2 6 6 24 9 40 4 15 11 27 16 27 6 0 38 -14 71 -31 48 -24 64 -28 75 -18 21 17 9 28 -74 66 -87 39 -86 50 11 77 55 16 71 31 44 42 -8 3 -35 -2 -61 -11 -26 -9 -50 -14 -53 -11 -3 2 0 28 6 56 14 64 14 130 1 130 -6 0 -14 -10 -19 -23z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M594 1086 c-72 -32 -154 -130 -169 -202 -9 -45 16 -99 57 -120 72 -39 183 -15 281 60 l47 36 0 -49 c0 -30 5 -53 14 -60 23 -19 36 17 36 96 0 37 7 103 15 145 14 74 12 108 -5 108 -17 0 -30 -30 -41 -98 -12 -72 -12 -73 -73 -121 -84 -66 -116 -81 -179 -81 -44 0 -59 5 -81 25 -31 29 -32 44 -6 95 24 47 66 81 144 115 42 19 57 30 54 43 -4 22 -53 26 -94 8z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M1674 1054 c-17 -41 -54 -228 -54 -275 0 -15 6 -29 14 -32 16 -6 32 10 67 68 l24 40 7 -43 c9 -55 14 -62 44 -62 27 0 29 3 12 33 -6 12 -14 51 -17 87 -5 56 -9 65 -26 65 -13 0 -28 -15 -45 -45 -34 -62 -38 -33 -10 87 16 68 19 98 11 106 -7 7 -15 -1 -27 -29z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M953 1023 c-23 -9 -15 -35 10 -31 12 2 22 9 22 17 0 16 -14 22 -32 14z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M937 933 c-12 -21 -30 -174 -21 -183 18 -18 35 7 44 66 14 86 13 124 -4 124 -8 0 -17 -3 -19 -7z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M1873 930 c-29 -12 -43 -40 -43 -87 0 -51 44 -97 93 -97 39 0 91 34 117 77 l18 30 7 -46 c11 -74 29 -78 60 -13 15 31 45 72 71 94 24 22 44 42 44 46 0 3 -12 6 -27 6 -18 0 -38 -13 -64 -40 l-39 -40 -6 25 c-8 31 -30 33 -38 3 -9 -30 -104 -108 -132 -108 -12 0 -27 6 -33 14 -10 12 -7 18 18 30 35 19 46 47 30 78 -20 38 -36 44 -76 28z m43 -45 c7 -18 -12 -45 -32 -45 -14 0 -20 41 -7 53 11 12 33 7 39 -8z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M2293 930 c-29 -12 -43 -40 -43 -87 0 -52 44 -97 94 -97 40 0 99 41 121 85 21 39 12 37 -42 -11 -48 -42 -82 -50 -102 -26 -10 12 -7 18 18 30 35 19 46 47 30 78 -20 38 -36 44 -76 28z m43 -45 c7 -18 -12 -45 -32 -45 -14 0 -20 41 -7 53 11 12 33 7 39 -8z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M2088 609 c-14 -6 -29 -16 -32 -24 -10 -27 21 -42 101 -49 91 -7 142 -19 126 -29 -18 -11 -250 -64 -343 -79 -113 -17 -526 -17 -640 0 -141 22 -307 61 -454 108 -141 45 -184 47 -131 6 60 -47 310 -124 530 -163 301 -53 768 -28 1028 54 42 14 77 23 77 21 0 -14 -355 -204 -381 -204 -23 0 -31 -26 -13 -41 22 -18 70 -6 177 44 123 58 357 196 364 215 10 24 -10 45 -71 75 -104 51 -284 86 -338 66z"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    role: "button",
    tabIndex: 0,
    onClick: () => setInnerCard(1),
    onKeyDown: e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setInnerCard(1);
      }
    },
    className: "dashicons dashicons-plus-alt",
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Add inner card", "md-prime")
  }))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_slider_card md_no_image md_back_card",
    style: {
      borderTopColor: sliderBorderColor
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_timeline_slider_content"
  }, showInnerCardTitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    style: {
      color: backHeadingColor
    },
    tagName: "h2",
    className: "heading",
    name: "innerHeading",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enter Title"),
    value: innerHeading,
    onChange: value => setAttributes({
      innerHeading: value
    })
  }), showInnerCardContent && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    style: {
      color: backContentColor
    },
    tagName: "p",
    className: "innerContent",
    name: "innerContent",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enter Paragraph…"),
    value: innerContent,
    onChange: value => setAttributes({
      innerContent: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_block_inserter"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
    allowedBlocks: ALLOWED_BLOCKS,
    renderAppender: () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(MyButtonBlockAppender, {
      rootClientId: clientId
    })
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "click-here"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    role: "button",
    tabIndex: 0,
    onClick: () => setInnerCard(0),
    onKeyDown: e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setInnerCard(0);
      }
    },
    className: "dashicons dashicons-plus-alt",
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Add inner card", "md-prime")
  }))))));
}

/***/ }),

/***/ "./src/blocks/md-timeline-card/index.js":
/*!**********************************************!*\
  !*** ./src/blocks/md-timeline-card/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/md-timeline-card/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/md-timeline-card/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/md-timeline-card/block.json");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/md-timeline-card/style.scss");
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

/***/ "./src/blocks/md-timeline-card/save.js":
/*!*********************************************!*\
  !*** ./src/blocks/md-timeline-card/save.js ***!
  \*********************************************/
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

/***/ "./src/blocks/md-timeline-card/editor.scss":
/*!*************************************************!*\
  !*** ./src/blocks/md-timeline-card/editor.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/md-timeline-card/style.scss":
/*!************************************************!*\
  !*** ./src/blocks/md-timeline-card/style.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/md-timeline-card/placeholder-image.png":
/*!***********************************************************!*\
  !*** ./src/blocks/md-timeline-card/placeholder-image.png ***!
  \***********************************************************/
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

/***/ "./src/blocks/md-timeline-card/block.json":
/*!************************************************!*\
  !*** ./src/blocks/md-timeline-card/block.json ***!
  \************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","name":"md-anitian-fse-v2/md-timeline-card","version":"0.1.0","title":"MD Timeline Card","apiVersion":3,"category":"md-anitian-fse-v2","icon":"id-alt","description":"A custom block for displaying timeline card.","keywords":["md-anitian-fse-v2","md-timeline-card"],"supports":{"html":false},"textdomain":"md-anitian-fse-v2","attributes":{"heading":{"type":"string","default":"This is Default Heading"},"headingColor":{"type":"string","default":"#000"},"backHeadingColor":{"type":"string","default":"#000"},"content":{"type":"string","default":"This is Default Content....."},"contentColor":{"type":"string","default":"#000"},"backContentColor":{"type":"string","default":"#000"},"enableSliderImage":{"type":"boolean","default":true},"sliderImage":{"type":"string","default":""},"sliderImageBGColor":{"type":"string","default":"#1ca5ff"},"sliderBorderColor":{"type":"string","default":""},"enableClickHere":{"type":"boolean","default":true},"backgroundMediaType":{"type":"boolean","default":true},"backgroundMediaColor":{"type":"string","default":"linear-gradient(to right bottom, #fac534, #ffa549, #ff8966, #ff7482, #e46a99)"},"backgroundMediaImage":{"type":"string","default":""},"innerHeading":{"type":"string","default":""},"innerContent":{"type":"string","default":""},"showCardTitle":{"type":"boolean","default":true},"showCardContent":{"type":"boolean","default":true},"showInnerCardTitle":{"type":"boolean","default":true},"showInnerCardContent":{"type":"boolean","default":true}},"editorScript":"file:./index.js","viewScript":["file:./view.js"],"editorStyle":"file:./index.css","style":"file:./style-index.css"}');

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
/******/ 			"blocks/md-timeline-card/index": 0,
/******/ 			"blocks/md-timeline-card/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/md-timeline-card/style-index"], () => (__webpack_require__("./src/blocks/md-timeline-card/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map