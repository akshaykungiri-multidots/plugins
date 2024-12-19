/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/common.js":
/*!******************************!*\
  !*** ./src/blocks/common.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   backgroundPositions: () => (/* binding */ backgroundPositions),
/* harmony export */   backgroundSizes: () => (/* binding */ backgroundSizes),
/* harmony export */   initSlickSlider: () => (/* binding */ initSlickSlider),
/* harmony export */   isMobileDevice: () => (/* binding */ isMobileDevice),
/* harmony export */   mdprimeBtnStyles: () => (/* binding */ mdprimeBtnStyles),
/* harmony export */   mdprimeColors: () => (/* binding */ mdprimeColors)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);


// background image sizes
const backgroundSizes = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select Background Size'),
  value: ''
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('auto'),
  value: 'auto'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('cover'),
  value: 'cover'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('contain'),
  value: 'contain'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('initial'),
  value: 'initial'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('inherit'),
  value: 'inherit'
}];

// background image positions
const backgroundPositions = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select Position'),
  value: ''
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('inherit'),
  value: 'inherit'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('initial'),
  value: 'initial'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('bottom'),
  value: 'bottom'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('center'),
  value: 'center'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('left'),
  value: 'left'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('right'),
  value: 'right'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('top'),
  value: 'top'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('unset'),
  value: 'unset'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('center center'),
  value: 'center center'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('left top'),
  value: 'left top'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('left center'),
  value: 'left center'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('left bottom'),
  value: 'left bottom'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('right top'),
  value: 'right top'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('right center'),
  value: 'right center'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('right bottom'),
  value: 'right bottom'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('center top'),
  value: 'center top'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('center bottom'),
  value: 'center bottom'
}];
const mdprimeColors = [{
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Palatinate Blue'),
  color: '#3333ff'
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Beau Blue'),
  color: '#b8d9f7'
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Non-Photo Blue'),
  color: '#a5d9f5'
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Dark Imperial Blue'),
  color: '#0b1571'
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Turquoise'),
  color: '#2ED9C3'
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Water'),
  color: '#d5f7f3'
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Azureish White'),
  color: '#D9f1ee'
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('White'),
  color: '#ffffff'
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Black'),
  color: '#000000'
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Chinese Black'),
  color: '#171417'
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Cultured'),
  color: '#f6f6f6'
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Macaroni And Cheese'),
  color: '#f6c485'
}];
const mdprimeBtnStyles = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Primary'),
  value: 'btn-main'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Secondary'),
  value: 'btn-main btn-secondary'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Tertiary'),
  value: 'btn-main btn-tertiary'
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Link With Icon'),
  value: 'btn-main btn-link-right-arrow'
}];
function initSlickSlider() {
  // Get all elements with class '.slick-slider'
  const sliders = document.querySelectorAll('.slick-slider');

  // Loop through each slider and initialize Slick slider if not already initialized
  sliders.forEach(slider => {
    if (!slider.classList.contains('slick-initialized')) {
      jQuery(slider).slick();
    }
  });
}
let isMobile = window.innerWidth < 992; // Initial value

function updateIsMobile() {
  isMobile = window.innerWidth < 992;
}
window.addEventListener('resize', updateIsMobile);
function isMobileDevice() {
  return isMobile;
}

/***/ }),

/***/ "./src/blocks/md-client-testimonials/edit.js":
/*!***************************************************!*\
  !*** ./src/blocks/md-client-testimonials/edit.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _placeholder_image_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./placeholder-image.jpeg */ "./src/blocks/md-client-testimonials/placeholder-image.jpeg");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common */ "./src/blocks/common.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/md-client-testimonials/editor.scss");

/* eslint-disable react-hooks/exhaustive-deps */



/**
 * React hook that is used to mark the components element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */




function Edit({
  attributes,
  setAttributes
}) {
  const {
    products,
    subHeading,
    heading,
    bgcolor,
    headingcolor,
    authornamecolor,
    authortitlecolor,
    displayAuthorname,
    displayAuthortitle,
    displayTestimonials,
    subheadingcolor,
    testimonialcolor
  } = attributes;
  const siteURL = window.location.origin;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (0 === products.length) {
      initList();
    }
  }, []);
  const initList = () => {
    setAttributes({
      products: [...products, {
        testimonialsName: "",
        testimonialsTitle: "",
        testimonialsHeadshot: "",
        testimonial: ""
      }]
    });
  };
  const addNewItem = () => {
    const attr = {
      testimonialsName: "",
      testimonialsTitle: "",
      testimonialsHeadshot: "",
      testimonial: ""
    };
    setAttributes({
      products: [...products, attr],
      uniqueId: Math.random()
    });
  };
  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...products];
    arrayCopy[oldIndex] = products[newIndex];
    arrayCopy[newIndex] = products[oldIndex];
    setAttributes({
      products: arrayCopy
    });
  };
  const itemList = products.map((product, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: " testimonials__author__box-item show-items-hover-wrap",
      key: index
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "item-action-wrap show-items-hover small-icons"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "move-item"
    }, 0 < index && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Move Left", "md-prime")
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "dashicons dashicons-arrow-left-alt move-up",
      onClick: () => moveItem(index, index - 1),
      onKeyDown: event => {
        if (event.key === "Enter" || event.key === " ") {
          moveItem(index, index - 1);
        }
      },
      role: "button",
      tabIndex: 0,
      "aria-label": "Move item left"
    })), index + 1 < products.length && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Move Right", "md-prime")
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "dashicons dashicons-arrow-right-alt move-down",
      onClick: () => moveItem(index, index + 1),
      role: "button",
      tabIndex: 0,
      "aria-label": "Move item down",
      onKeyDown: event => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          // Simulate the click event on Enter or Space key
          event.target.click();
        }
      }
    }))), 1 < products.length && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Remove Item", "md-prime")
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: "remove-item dashicons dashicons-no-alt",
      onClick: () => {
        const toDelete =
        // eslint-disable-next-line no-alert
        confirm((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Are you sure you want to remove this item?", "md-prime"));
        if (toDelete === true) {
          const updatedProducts = products.filter((item, itemIndex) => itemIndex !== index);
          setAttributes({
            products: updatedProducts
          });
        }
      },
      role: "button",
      tabIndex: 0,
      "aria-label": "Remove item",
      onKeyDown: event => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          // Simulate the click event on Enter or Space key
          event.target.click();
        }
      }
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "testimonials__author__box-item-inner"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "testimonials__author__box-item-inner-img"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUpload, {
      onSelect: testimonialsHeadshot => {
        const copyData = [...products];
        copyData[index].testimonialsHeadshot = testimonialsHeadshot.sizes.full.url;
        setAttributes({
          products: copyData
        });
      },
      allowedTypes: ["image"],
      value: product.testimonialsHeadshot,
      render: ({
        open
      }) => !product.testimonialsHeadshot ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        className: product.testimonialsHeadshot ? "image-button " : " button-large",
        onClick: open
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        className: "components-button button button-large"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
        className: "fa fa-upload"
      }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Update Image", "md-prime"))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        className: product.testimonialsHeadshot ? "image-button " : " button-large",
        onClick: open
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        className: "components-button button button-large"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
        className: "fa fa-pencil"
      }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Update Image", "md-prime")))
    }), product.testimonialsHeadshot ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: product.testimonialsHeadshot,
      alt: "testimonials",
      className: "author-img"
    }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: siteURL + _placeholder_image_jpeg__WEBPACK_IMPORTED_MODULE_5__,
      alt: "placeholder img",
      className: "author-img"
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "testimonials__author__box-item-inner-content"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "testimonials-rounded-icon"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: "testimonials-quotes fa fa-solid fa-quote-left"
    })), displayTestimonials && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
      tagName: "p",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Testimonial"),
      value: product.testimonial,
      keepPlaceholderOnFocus: "true",
      className: "testimonial",
      style: testimonialcolor ? {
        color: testimonialcolor
      } : {},
      onChange: testimonial => {
        const newObject = Object.assign({}, product, {
          testimonial
        });
        const blockDetails = [...products];
        blockDetails[index] = newObject;
        setAttributes({
          products: blockDetails
        });
      }
    }), displayAuthorname && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
      tagName: "h3",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Name"),
      value: product.testimonialsName,
      keepPlaceholderOnFocus: "true",
      className: "testimonialsName",
      style: authornamecolor ? {
        color: authornamecolor
      } : {},
      onChange: testimonialsName => {
        const newObject = Object.assign({}, product, {
          testimonialsName
        });
        const blockDetails = [...products];
        blockDetails[index] = newObject;
        setAttributes({
          products: blockDetails
        });
      }
    }), displayAuthortitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
      tagName: "p",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Position"),
      value: product.testimonialsTitle,
      className: "testimonialsTitle",
      keepPlaceholderOnFocus: "true",
      style: authortitlecolor ? {
        color: authortitlecolor
      } : {},
      onChange: testimonialsTitle => {
        const newObject = Object.assign({}, product, {
          testimonialsTitle
        });
        const blockDetails = [...products];
        blockDetails[index] = newObject;
        setAttributes({
          products: blockDetails
        });
      }
    }))));
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Color Settings"),
    colorSettings: [{
      value: headingcolor,
      onChange: newColor => {
        setAttributes({
          headingcolor: newColor
        });
      },
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Heading Color"),
      mdprimeColors: _common__WEBPACK_IMPORTED_MODULE_6__.mdprimeColors
    }, {
      value: subheadingcolor,
      onChange: newColor => {
        setAttributes({
          subheadingcolor: newColor
        });
      },
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Subheading Color")
    }, {
      value: testimonialcolor,
      onChange: newColor => {
        setAttributes({
          testimonialcolor: newColor
        });
      },
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Testimonial Color")
    }, {
      value: authornamecolor,
      onChange: newColor => {
        setAttributes({
          authornamecolor: newColor
        });
      },
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Team member name color"),
      mdprimeColors: _common__WEBPACK_IMPORTED_MODULE_6__.mdprimeColors
    }, {
      value: authortitlecolor,
      onChange: newColor => {
        setAttributes({
          authortitlecolor: newColor
        });
      },
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Team member Position color"),
      mdprimeColors: _common__WEBPACK_IMPORTED_MODULE_6__.mdprimeColors
    }, {
      value: bgcolor,
      onChange: newColor => {
        setAttributes({
          bgcolor: newColor
        });
      },
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Heading background color"),
      mdprimeColors: _common__WEBPACK_IMPORTED_MODULE_6__.mdprimeColors
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "Visibility Settings",
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "display settings"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Name Visibility", "md-prime")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FormToggle, {
    checked: displayAuthorname,
    onChange: () => setAttributes({
      displayAuthorname: !displayAuthorname
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "display settings"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Position Visibility", "md-prime")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FormToggle, {
    checked: displayAuthortitle,
    onChange: () => setAttributes({
      displayAuthortitle: !displayAuthortitle
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "display settings"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Testimonial Visibility", "md-prime")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FormToggle, {
    checked: displayTestimonials,
    onChange: () => setAttributes({
      displayTestimonials: !displayTestimonials
    })
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "testimonials"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "testimonials__header",
    style: bgcolor ? {
      background: bgcolor
    } : {}
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
    tagName: "h3",
    value: subHeading,
    className: "testimonials__header-subheading",
    onChange: value => setAttributes({
      subHeading: value
    }),
    placeholder: "Our testimonials",
    style: subheadingcolor ? {
      color: subheadingcolor
    } : {}
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
    tagName: "h2",
    value: heading,
    className: "testimonials__header-heading",
    onChange: value => setAttributes({
      heading: value
    }),
    placeholder: "testimonials",
    style: headingcolor ? {
      color: headingcolor
    } : {}
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "box-main testimonials__author__box"
  }, itemList, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "add-item-wrap",
    onClick: () => {
      addNewItem();
    },
    role: "button",
    tabIndex: 0,
    "aria-label": "Add new item",
    onKeyDown: event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        addNewItem();
      }
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Add New Item", "md-prime")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    onClick: () => {
      setAttributes({
        products: [...products, {
          testimonialsName: "",
          testimonialsTitle: "",
          testimonialsHeadshot: "",
          testimonialsBio: "",
          leaderlink: "",
          popup: false
        }]
      });
    },
    onKeyDown: event => {
      if (event.key === "Enter" || event.key === " ") {
        setAttributes({
          products: [...products, {
            testimonialsName: "",
            testimonialsTitle: "",
            testimonialsHeadshot: "",
            testimonialsBio: "",
            leaderlink: "",
            popup: false
          }]
        });
      }
    },
    role: "button",
    tabIndex: 0,
    "aria-label": "Add new product",
    className: "add-new-item dashicons dashicons-plus"
  }))))))));
}

/***/ }),

/***/ "./src/blocks/md-client-testimonials/index.js":
/*!****************************************************!*\
  !*** ./src/blocks/md-client-testimonials/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/md-client-testimonials/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/md-client-testimonials/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/md-client-testimonials/block.json");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/md-client-testimonials/style.scss");
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

/***/ "./src/blocks/md-client-testimonials/save.js":
/*!***************************************************!*\
  !*** ./src/blocks/md-client-testimonials/save.js ***!
  \***************************************************/
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
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {null} No element to render.
 */



function save({
  attributes
}) {
  const {
    products,
    subHeading,
    heading,
    bgcolor,
    headingcolor,
    authornamecolor,
    authortitlecolor,
    displayAuthorname,
    displayAuthortitle,
    displayTestimonials,
    subheadingcolor,
    testimonialcolor
  } = attributes;
  const itemList = products.map((product, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: " testimonials__author__box-item show-items-hover-wrap",
      key: index
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "testimonials__author__box-item-inner"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "testimonials__author__box-item-inner-img"
    }, product.testimonialsHeadshot && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: product.testimonialsHeadshot,
      alt: "testimonials",
      className: "author-img"
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "testimonials__author__box-item-inner-content"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "testimonials-rounded-icon"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: "testimonials-quotes fa fa-solid fa-quote-left"
    })), displayTestimonials && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: "p",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Testimonial"),
      value: product.testimonial,
      keepPlaceholderOnFocus: "true",
      className: "testimonial",
      style: testimonialcolor ? {
        color: testimonialcolor
      } : {}
    }), displayAuthorname && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: "h3",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Name"),
      value: product.testimonialsName,
      keepPlaceholderOnFocus: "true",
      className: "testimonialsName",
      style: authornamecolor ? {
        color: authornamecolor
      } : {}
    }), displayAuthortitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: "p",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Position"),
      value: product.testimonialsTitle,
      className: "testimonialsTitle",
      keepPlaceholderOnFocus: "true",
      style: authortitlecolor ? {
        color: authortitlecolor
      } : {}
    }))));
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "testimonials"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "testimonials__header",
    style: bgcolor ? {
      background: bgcolor
    } : {}
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "h3",
    value: subHeading,
    className: "testimonials__header-subheading",
    placeholder: "Our testimonials",
    style: subheadingcolor ? {
      color: subheadingcolor
    } : {}
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "h2",
    value: heading,
    className: "testimonials__header-heading",
    placeholder: "testimonials",
    style: headingcolor ? {
      color: headingcolor
    } : {}
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "box-main testimonials__author__box"
  }, itemList)))));
}

/***/ }),

/***/ "./src/blocks/md-client-testimonials/editor.scss":
/*!*******************************************************!*\
  !*** ./src/blocks/md-client-testimonials/editor.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/md-client-testimonials/style.scss":
/*!******************************************************!*\
  !*** ./src/blocks/md-client-testimonials/style.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/md-client-testimonials/placeholder-image.jpeg":
/*!******************************************************************!*\
  !*** ./src/blocks/md-client-testimonials/placeholder-image.jpeg ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "/wp-content/themes/md-litho/assets/build/images/placeholder-image.db2b4d5c.jpeg";

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

/***/ "./src/blocks/md-client-testimonials/block.json":
/*!******************************************************!*\
  !*** ./src/blocks/md-client-testimonials/block.json ***!
  \******************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","name":"md-litho/md-client-testimonials","version":"0.1.0","apiVersion":3,"title":"MD Client Testimonials","category":"md-litho","icon":"dashicons dashicons-admin-users","description":"A block to display client testimonials","keywords":["testimonial","client","md-litho"],"attributes":{"products":{"type":"array","default":[]},"subHeading":{"type":"string","default":"What our clients say"},"heading":{"type":"string","default":"Client Testimonials"},"bgcolor":{"type":"string"},"authornamecolor":{"type":"string"},"authortitlecolor":{"type":"string"},"headingcolor":{"type":"string"},"subheadingcolor":{"type":"string"},"testimonialcolor":{"type":"string"},"displayAuthorname":{"type":"boolean","default":true},"displayAuthortitle":{"type":"boolean","default":true},"displayTestimonials":{"type":"boolean","default":true}},"supports":{"html":false,"align":["wide","full"]},"textdomain":"md-litho","editorScript":"file:./index.js","viewScript":["file:./view.js"],"editorStyle":"file:./index.css","style":"file:./style-index.css"}');

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
/******/ 			"blocks/md-client-testimonials/index": 0,
/******/ 			"blocks/md-client-testimonials/style-index": 0
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
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkmd_litho"] = globalThis["webpackChunkmd_litho"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/md-client-testimonials/style-index"], () => (__webpack_require__("./src/blocks/md-client-testimonials/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map