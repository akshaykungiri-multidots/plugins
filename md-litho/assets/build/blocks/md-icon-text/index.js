/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/md-icon-text/edit.js":
/*!*****************************************!*\
  !*** ./src/blocks/md-icon-text/edit.js ***!
  \*****************************************/
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
/* harmony import */ var _fontIcons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fontIcons */ "./src/blocks/md-icon-text/fontIcons.js");

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
    logos,
    logosTitleColor,
    logosDescriptionColor,
    logoIconColor,
    showLogos,
    showLogosTitle,
    showLogosDescription,
    showLogosIcon,
    showLeftCounter,
    showRightCounter,
    leftCounterNumber,
    leftCounterTitle,
    leftCounterDescription,
    leftCounterNumberColor,
    leftCounterTitleColor,
    leftCounterDescriptionColor,
    rightCounterNumber,
    rightCounterTitle,
    rightCounterDescription,
    rightCounterNumberColor,
    rightCounterTitleColor,
    rightCounterDescriptionColor,
    yearOfExperience,
    yearOfExperienceText,
    yearOfExperienceColor,
    yearOfExperienceTextColor,
    yearOfExperienceBackgroundImage,
    showYearOfExperience,
    showYearOfExperienceBackgroundImage
  } = attributes;
  const addStaticPostObj = () => {
    const staticPostObj = [...logos, {
      id: logos.length + 1,
      icon: "fa-500px",
      iconTitle: "",
      iconText: ""
    }];
    setAttributes({
      logos: staticPostObj
    });
  };
  const updateStaticPostObj = (index, key, value) => {
    const updatedStaticPostObj = [...logos];
    updatedStaticPostObj[index][key] = value;
    setAttributes({
      logos: updatedStaticPostObj
    });
  };
  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...logos];
    arrayCopy[oldIndex] = logos[newIndex];
    arrayCopy[newIndex] = logos[oldIndex];
    setAttributes({
      logos: arrayCopy
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Toggle Settings", "md-logo-slider"),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show Logos", "md-logo-slider"),
    checked: showLogos,
    onChange: value => setAttributes({
      showLogos: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show Logos Title", "md-logo-slider"),
    checked: showLogosTitle,
    onChange: value => setAttributes({
      showLogosTitle: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show Logos Description", "md-logo-slider"),
    checked: showLogosDescription,
    onChange: value => setAttributes({
      showLogosDescription: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show Logos Icon", "md-logo-slider"),
    checked: showLogosIcon,
    onChange: value => setAttributes({
      showLogosIcon: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show Left Counter", "md-logo-slider"),
    checked: showLeftCounter,
    onChange: value => setAttributes({
      showLeftCounter: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show Right Counter", "md-logo-slider"),
    checked: showRightCounter,
    onChange: value => setAttributes({
      showRightCounter: value
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Year of Experience", "md-logo-slider"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show Year of Experience", "md-logo-slider"),
    checked: showYearOfExperience,
    onChange: value => setAttributes({
      showYearOfExperience: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show Year of Experience Background Image", "md-logo-slider"),
    checked: showYearOfExperienceBackgroundImage,
    onChange: value => setAttributes({
      showYearOfExperienceBackgroundImage: value
    })
  }), showYearOfExperienceBackgroundImage && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "setting-row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "background-image"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background Image", "md-prime")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, !yearOfExperienceBackgroundImage ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: selectedImage => {
      setAttributes({
        yearOfExperienceBackgroundImage: selectedImage.url
      });
    },
    allowedTypes: ["image"],
    value: yearOfExperienceBackgroundImage,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: open,
      className: "button button-large"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Upload Image", "md-prime"))
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "image-preview"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: yearOfExperienceBackgroundImage,
    alt: "Background-image-preview"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    onClick: () => {
      setAttributes({
        yearOfExperienceBackgroundImage: ""
      });
    },
    className: "is-link is-destructive"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Remove Image", "md-prime"))))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Color Settings", "md-logo-slider"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Color Settings", "md-logo-slider"),
    colorSettings: [{
      value: logosTitleColor,
      onChange: newColor => setAttributes({
        logosTitleColor: newColor
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Logos Title Color", "md-logo-slider")
    }, {
      value: logosDescriptionColor,
      onChange: newColor => setAttributes({
        logosDescriptionColor: newColor
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Logos Description Color", "md-logo-slider")
    }, {
      value: logoIconColor,
      onChange: newColor => setAttributes({
        logoIconColor: newColor
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Logo Icon Color", "md-logo-slider")
    }, {
      value: leftCounterNumberColor,
      onChange: newColor => setAttributes({
        leftCounterNumberColor: newColor
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Left Counter Number Color", "md-logo-slider")
    }, {
      value: leftCounterTitleColor,
      onChange: newColor => setAttributes({
        leftCounterTitleColor: newColor
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Left Counter Title Color", "md-logo-slider")
    }, {
      value: leftCounterDescriptionColor,
      onChange: newColor => setAttributes({
        leftCounterDescriptionColor: newColor
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Left Counter Description Color", "md-logo-slider")
    }, {
      value: rightCounterNumberColor,
      onChange: newColor => setAttributes({
        rightCounterNumberColor: newColor
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Right Counter Number Color", "md-logo-slider")
    }, {
      value: rightCounterTitleColor,
      onChange: newColor => setAttributes({
        rightCounterTitleColor: newColor
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Right Counter Title Color", "md-logo-slider")
    }, {
      value: rightCounterDescriptionColor,
      onChange: newColor => setAttributes({
        rightCounterDescriptionColor: newColor
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Right Counter Description Color", "md-logo-slider")
    }, {
      value: yearOfExperienceColor,
      onChange: newColor => setAttributes({
        yearOfExperienceColor: newColor
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Year of Experience Number Color", "md-logo-slider")
    }, {
      value: yearOfExperienceTextColor,
      onChange: newColor => setAttributes({
        yearOfExperienceTextColor: newColor
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Year of Experience Text Color", "md-logo-slider")
    }]
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_icon_text"
  }, showLogos && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_icon_text__slider_wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_icon_text__slider"
  }, logos && logos.map((postObj, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: postObj.id,
    className: "logo-slide show-items-hover-wrap"
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
  })), index + 1 < logos.length && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
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
  }))), 1 < logos.length && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
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
        const updatedArray = logos.filter((item, itemIndex) => itemIndex !== index);
        setAttributes({
          logos: updatedArray
        });
      }
    },
    onKeyDown: e => {
      if (e.key === "Enter" || e.key === " ") {
        const toDelete =
        // eslint-disable-next-line no-alert
        confirm((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Are you sure you want to delete this item?", "md-prime"));
        if (toDelete) {
          const updatedArray = logos.filter((item, itemIndex) => itemIndex !== index);
          setAttributes({
            logos: updatedArray
          });
        }
      }
    },
    "aria-label": "Delete item"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md-lithomd_icon_text__item-icon"
  }, showLogosIcon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md-lithomd_icon_text__item-icon-inner"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    id: `select-icon-${index}`,
    closeMenuOnSelect: false,
    value: postObj.icon,
    options: _fontIcons__WEBPACK_IMPORTED_MODULE_4__["default"],
    onChange: value => updateStaticPostObj(index, "icon", value)
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md-lithomd_icon_text__item-icon__wrapper"
  }, showLogosIcon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md-lithomd_icon_text__item-icon__wrapper-icon"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "fa " + postObj.icon,
    style: {
      color: logoIconColor
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md-lithomd_icon_text__item-icon__wrapper-text"
  }, showLogosTitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "h4",
    className: "image-title",
    value: postObj.iconTitle,
    onChange: value => updateStaticPostObj(index, "iconTitle", value),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Image Title", "md-prime"),
    style: {
      color: logosTitleColor
    }
  }), showLogosDescription && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "p",
    className: "image-text",
    value: postObj.iconText,
    onChange: value => updateStaticPostObj(index, "iconText", value),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Image Text", "md-prime"),
    style: {
      color: logosDescriptionColor
    }
  }))))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
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
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Add new item", "md-prime")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Add New Item", "md-prime")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "add-new-item dashicons dashicons-plus"
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_icon_text__counter_wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_icon_text__counter"
  }, showLeftCounter && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "counter-item md_left_counter"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "counter-number"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "h4",
    className: "counter-number",
    value: leftCounterNumber,
    onChange: value => setAttributes({
      leftCounterNumber: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("0+", "md-prime"),
    style: {
      color: leftCounterNumberColor
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "counter-title"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "h4",
    className: "counter-title",
    value: leftCounterTitle,
    onChange: value => setAttributes({
      leftCounterTitle: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Counter Title", "md-prime"),
    style: {
      color: leftCounterTitleColor
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "counter-description"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "p",
    className: "counter-description",
    value: leftCounterDescription,
    onChange: value => setAttributes({
      leftCounterDescription: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Counter Description", "md-prime"),
    style: {
      color: leftCounterDescriptionColor
    }
  }))), showYearOfExperience && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "counter-item md_year_of_experience"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "counter-number"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "span",
    className: "counter-number",
    value: yearOfExperience,
    onChange: value => setAttributes({
      yearOfExperience: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("20+", "md-prime"),
    style: {
      color: yearOfExperienceColor,
      backgroundImage: showYearOfExperienceBackgroundImage ? `url(${yearOfExperienceBackgroundImage})` : "none",
      WebkitTextFillColor: showYearOfExperienceBackgroundImage ? "transparent" : "initial",
      WebkitBackgroundClip: showYearOfExperienceBackgroundImage ? "text" : "initial"
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "counter-title"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "h4",
    className: "counter-title",
    value: yearOfExperienceText,
    onChange: value => setAttributes({
      yearOfExperienceText: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Year of Experience Text", "md-prime"),
    style: {
      color: yearOfExperienceTextColor
    }
  }))), showRightCounter && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "counter-item md_right_counter"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "counter-number"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "h4",
    className: "counter-number",
    value: rightCounterNumber,
    onChange: value => setAttributes({
      rightCounterNumber: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("0+", "md-prime"),
    style: {
      color: rightCounterNumberColor
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "counter-title"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "h4",
    className: "counter-title",
    value: rightCounterTitle,
    onChange: value => setAttributes({
      rightCounterTitle: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Counter Title", "md-prime"),
    style: {
      color: rightCounterTitleColor
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "counter-description"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "p",
    className: "counter-description",
    value: rightCounterDescription,
    onChange: value => setAttributes({
      rightCounterDescription: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Counter Description", "md-prime"),
    style: {
      color: rightCounterDescriptionColor
    }
  })))))));
}

/***/ }),

/***/ "./src/blocks/md-icon-text/fontIcons.js":
/*!**********************************************!*\
  !*** ./src/blocks/md-icon-text/fontIcons.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const fontIcons = [{
  "label": 'fa-500px',
  "value": "fa-500px"
}, {
  "label": 'fa-address-book',
  "value": "fa-address-book"
}, {
  "label": 'fa-address-book-o',
  "value": "fa-address-book-o"
}, {
  "label": 'fa-address-card',
  "value": "fa-address-card"
}, {
  "label": 'fa-address-card-o',
  "value": "fa-address-card-o"
}, {
  "label": 'fa-adjust',
  "value": "fa-adjust"
}, {
  "label": 'fa-adn',
  "value": "fa-adn"
}, {
  "label": 'fa-align-center',
  "value": "fa-align-center"
}, {
  "label": 'fa-align-justify',
  "value": "fa-align-justify"
}, {
  "label": 'fa-align-left',
  "value": "fa-align-left"
}, {
  "label": 'fa-align-right',
  "value": "fa-align-right"
}, {
  "label": 'fa-amazon',
  "value": "fa-amazon"
}, {
  "label": 'fa-ambulance',
  "value": "fa-ambulance"
}, {
  "label": 'fa-american-sign-language-interpreting',
  "value": "fa-american-sign-language-interpreting"
}, {
  "label": 'fa-anchor',
  "value": "fa-anchor"
}, {
  "label": 'fa-android',
  "value": "fa-android"
}, {
  "label": 'fa-angellist',
  "value": "fa-angellist"
}, {
  "label": 'fa-angle-double-down',
  "value": "fa-angle-double-down"
}, {
  "label": 'fa-angle-double-left',
  "value": "fa-angle-double-left"
}, {
  "label": 'fa-angle-double-right',
  "value": "fa-angle-double-right"
}, {
  "label": 'fa-angle-double-up',
  "value": "fa-angle-double-up"
}, {
  "label": 'fa-angle-down',
  "value": "fa-angle-down"
}, {
  "label": 'fa-angle-left',
  "value": "fa-angle-left"
}, {
  "label": 'fa-angle-right',
  "value": "fa-angle-right"
}, {
  "label": 'fa-angle-up',
  "value": "fa-angle-up"
}, {
  "label": 'fa-apple',
  "value": "fa-apple"
}, {
  "label": 'fa-archive',
  "value": "fa-archive"
}, {
  "label": 'fa-area-chart',
  "value": "fa-area-chart"
}, {
  "label": 'fa-arrow-circle-down',
  "value": "fa-arrow-circle-down"
}, {
  "label": 'fa-arrow-circle-left',
  "value": "fa-arrow-circle-left"
}, {
  "label": 'fa-arrow-circle-o-down',
  "value": "fa-arrow-circle-o-down"
}, {
  "label": 'fa-arrow-circle-o-left',
  "value": "fa-arrow-circle-o-left"
}, {
  "label": 'fa-arrow-circle-o-right',
  "value": "fa-arrow-circle-o-right"
}, {
  "label": 'fa-arrow-circle-o-right',
  "value": "fa-arrow-circle-o-right"
}, {
  "label": 'fa-arrow-circle-o-up',
  "value": "fa-arrow-circle-o-up"
}, {
  "label": 'fa-arrow-circle-right',
  "value": "fa-arrow-circle-right"
}, {
  "label": 'fa-arrow-circle-up',
  "value": "fa-arrow-circle-up"
}, {
  "label": 'fa-arrow-down',
  "value": "fa-arrow-down"
}, {
  "label": 'fa-arrow-left',
  "value": "fa-arrow-left"
}, {
  "label": 'fa-arrow-right',
  "value": "fa-arrow-right"
}, {
  "label": 'fa-arrow-up',
  "value": "fa-arrow-up"
}, {
  "label": 'fa-arrows',
  "value": "fa-arrows"
}, {
  "label": 'fa-arrows-alt',
  "value": "fa-arrows-alt"
}, {
  "label": 'fa-arrows-h',
  "value": "fa-arrows-h"
}, {
  "label": 'fa-arrows-v',
  "value": "fa-arrows-v"
}, {
  "label": 'fa-asl-interpreting',
  "value": "fa-asl-interpreting"
}, {
  "label": 'fa-assistive-listening-systems',
  "value": "fa-assistive-listening-systems"
}, {
  "label": 'fa-assistive-listening-systems',
  "value": "fa-assistive-listening-systems"
}, {
  "label": 'fa-asterisk',
  "value": "fa-asterisk"
}, {
  "label": 'fa-at',
  "value": "fa-at"
}, {
  "label": 'fa-audio-description',
  "value": "fa-audio-description"
}, {
  "label": 'fa-automobile',
  "value": "fa-automobile"
}, {
  "label": 'fa-backward',
  "value": "fa-backward"
}, {
  "label": 'fa-balance-scale',
  "value": "fa-balance-scale"
}, {
  "label": 'fa-ban',
  "value": "fa-ban"
}, {
  "label": 'fa-bandcamp',
  "value": "fa-bandcamp"
}, {
  "label": 'fa-bank',
  "value": "fa-bank"
}, {
  "label": 'fa-bar-chart',
  "value": "fa-bar-chart"
}, {
  "label": 'fa-bar-chart-o',
  "value": "fa-bar-chart-o"
}, {
  "label": 'fa-barcode',
  "value": "fa-barcode"
}, {
  "label": 'fa-bars',
  "value": "fa-bars"
}, {
  "label": 'fa-bath',
  "value": "fa-bath"
}, {
  "label": 'fa-bathtub',
  "value": "fa-bathtub"
}, {
  "label": 'fa-battery',
  "value": "fa-battery"
}, {
  "label": 'fa-battery-0',
  "value": "fa-battery-0"
}, {
  "label": 'fa-battery-1',
  "value": "fa-battery-1"
}, {
  "label": 'fa-battery-2',
  "value": "fa-battery-2"
}, {
  "label": 'fa-battery-3',
  "value": "fa-battery-3"
}, {
  "label": 'fa-battery-4',
  "value": "fa-battery-4"
}, {
  "label": 'fa-battery-empty',
  "value": "fa-battery-empty"
}, {
  "label": 'fa-battery-full',
  "value": "fa-battery-full"
}, {
  "label": 'fa-battery-half',
  "value": "fa-battery-half"
}, {
  "label": 'fa-battery-quarter',
  "value": "fa-battery-quarter"
}, {
  "label": 'fa-battery-three-quarters',
  "value": "fa-battery-three-quarters"
}, {
  "label": 'fa-battery-three-quarters',
  "value": "fa-battery-three-quarters"
}, {
  "label": 'fa-bed',
  "value": "fa-bed"
}, {
  "label": 'fa-beer',
  "value": "fa-beer"
}, {
  "label": 'fa-behance',
  "value": "fa-behance"
}, {
  "label": 'fa-behance-square',
  "value": "fa-behance-square"
}, {
  "label": 'fa-bell',
  "value": "fa-bell"
}, {
  "label": 'fa-bell-o',
  "value": "fa-bell-o"
}, {
  "label": 'fa-bell-slash',
  "value": "fa-bell-slash"
}, {
  "label": 'fa-bell-slash-o',
  "value": "fa-bell-slash-o"
}, {
  "label": 'fa-bicycle',
  "value": "fa-bicycle"
}, {
  "label": 'fa-binoculars',
  "value": "fa-binoculars"
}, {
  "label": 'fa-birthday-cake',
  "value": "fa-birthday-cake"
}, {
  "label": 'fa-bitbucket',
  "value": "fa-bitbucket"
}, {
  "label": 'fa-bitbucket-square',
  "value": "fa-bitbucket-square"
}, {
  "label": 'fa-bitcoin',
  "value": "fa-bitcoin"
}, {
  "label": 'fa-black-tie',
  "value": "fa-black-tie"
}, {
  "label": 'fa-blind',
  "value": "fa-blind"
}, {
  "label": 'fa-bluetooth',
  "value": "fa-bluetooth"
}, {
  "label": 'fa-bluetooth-b',
  "value": "fa-bluetooth-b"
}, {
  "label": 'fa-bold',
  "value": "fa-bold"
}, {
  "label": 'fa-bolt',
  "value": "fa-bolt"
}, {
  "label": 'fa-bomb',
  "value": "fa-bomb"
}, {
  "label": 'fa-book',
  "value": "fa-book"
}, {
  "label": 'fa-bookmark',
  "value": "fa-bookmark"
}, {
  "label": 'fa-bookmark-o',
  "value": "fa-bookmark-o"
}, {
  "label": 'fa-braille',
  "value": "fa-braille"
}, {
  "label": 'fa-briefcase',
  "value": "fa-briefcase"
}, {
  "label": 'fa-btc',
  "value": "fa-btc"
}, {
  "label": 'fa-bug',
  "value": "fa-bug"
}, {
  "label": 'fa-building',
  "value": "fa-building"
}, {
  "label": 'fa-building-o',
  "value": "fa-building-o"
}, {
  "label": 'fa-bullhorn',
  "value": "fa-bullhorn"
}, {
  "label": 'fa-bullseye',
  "value": "fa-bullseye"
}, {
  "label": 'fa-bus',
  "value": "fa-bus"
}, {
  "label": 'fa-buysellads',
  "value": "fa-buysellads"
}, {
  "label": 'fa-cab',
  "value": "fa-cab"
}, {
  "label": 'fa-calculator',
  "value": "fa-calculator"
}, {
  "label": 'fa-calendar',
  "value": "fa-calendar"
}, {
  "label": 'fa-calendar-check-o',
  "value": "fa-calendar-check-o"
}, {
  "label": 'fa-calendar-minus-o',
  "value": "fa-calendar-minus-o"
}, {
  "label": 'fa-calendar-o',
  "value": "fa-calendar-o"
}, {
  "label": 'fa-calendar-plus-o',
  "value": "fa-calendar-plus-o"
}, {
  "label": 'fa-calendar-times-o',
  "value": "fa-calendar-times-o"
}, {
  "label": 'fa-camera',
  "value": "fa-camera"
}, {
  "label": 'fa-camera-retro',
  "value": "fa-camera-retro"
}, {
  "label": 'fa-car',
  "value": "fa-car"
}, {
  "label": 'fa-caret-down',
  "value": "fa-caret-down"
}, {
  "label": 'fa-caret-left',
  "value": "fa-caret-left"
}, {
  "label": 'fa-caret-right',
  "value": "fa-caret-right"
}, {
  "label": 'fa-caret-square-o-down',
  "value": "fa-caret-square-o-down"
}, {
  "label": 'fa-caret-square-o-left',
  "value": "fa-caret-square-o-left"
}, {
  "label": 'fa-caret-square-o-right',
  "value": "fa-caret-square-o-right"
}, {
  "label": 'fa-caret-square-o-right',
  "value": "fa-caret-square-o-right"
}, {
  "label": 'fa-caret-square-o-up',
  "value": "fa-caret-square-o-up"
}, {
  "label": 'fa-caret-up',
  "value": "fa-caret-up"
}, {
  "label": 'fa-cart-arrow-down',
  "value": "fa-cart-arrow-down"
}, {
  "label": 'fa-cart-plus',
  "value": "fa-cart-plus"
}, {
  "label": 'fa-cc',
  "value": "fa-cc"
}, {
  "label": 'fa-cc-amex',
  "value": "fa-cc-amex"
}, {
  "label": 'fa-cc-diners-club',
  "value": "fa-cc-diners-club"
}, {
  "label": 'fa-cc-discover',
  "value": "fa-cc-discover"
}, {
  "label": 'fa-cc-jcb',
  "value": "fa-cc-jcb"
}, {
  "label": 'fa-cc-mastercard',
  "value": "fa-cc-mastercard"
}, {
  "label": 'fa-cc-paypal',
  "value": "fa-cc-paypal"
}, {
  "label": 'fa-cc-stripe',
  "value": "fa-cc-stripe"
}, {
  "label": 'fa-cc-visa',
  "value": "fa-cc-visa"
}, {
  "label": 'fa-certificate',
  "value": "fa-certificate"
}, {
  "label": 'fa-chain',
  "value": "fa-chain"
}, {
  "label": 'fa-chain-broken',
  "value": "fa-chain-broken"
}, {
  "label": 'fa-check',
  "value": "fa-check"
}, {
  "label": 'fa-check-circle',
  "value": "fa-check-circle"
}, {
  "label": 'fa-check-circle-o',
  "value": "fa-check-circle-o"
}, {
  "label": 'fa-check-square',
  "value": "fa-check-square"
}, {
  "label": 'fa-check-square-o',
  "value": "fa-check-square-o"
}, {
  "label": 'fa-chevron-circle-down',
  "value": "fa-chevron-circle-down"
}, {
  "label": 'fa-chevron-circle-left',
  "value": "fa-chevron-circle-left"
}, {
  "label": 'fa-chevron-circle-right',
  "value": "fa-chevron-circle-right"
}, {
  "label": 'fa-chevron-circle-right',
  "value": "fa-chevron-circle-right"
}, {
  "label": 'fa-chevron-circle-up',
  "value": "fa-chevron-circle-up"
}, {
  "label": 'fa-chevron-down',
  "value": "fa-chevron-down"
}, {
  "label": 'fa-chevron-left',
  "value": "fa-chevron-left"
}, {
  "label": 'fa-chevron-right',
  "value": "fa-chevron-right"
}, {
  "label": 'fa-chevron-up',
  "value": "fa-chevron-up"
}, {
  "label": 'fa-child',
  "value": "fa-child"
}, {
  "label": 'fa-chrome',
  "value": "fa-chrome"
}, {
  "label": 'fa-circle',
  "value": "fa-circle"
}, {
  "label": 'fa-circle-o',
  "value": "fa-circle-o"
}, {
  "label": 'fa-circle-o-notch',
  "value": "fa-circle-o-notch"
}, {
  "label": 'fa-circle-thin',
  "value": "fa-circle-thin"
}, {
  "label": 'fa-clipboard',
  "value": "fa-clipboard"
}, {
  "label": 'fa-clock-o',
  "value": "fa-clock-o"
}, {
  "label": 'fa-clone',
  "value": "fa-clone"
}, {
  "label": 'fa-close',
  "value": "fa-close"
}, {
  "label": 'fa-cloud',
  "value": "fa-cloud"
}, {
  "label": 'fa-cloud-download',
  "value": "fa-cloud-download"
}, {
  "label": 'fa-cloud-upload',
  "value": "fa-cloud-upload"
}, {
  "label": 'fa-cny',
  "value": "fa-cny"
}, {
  "label": 'fa-code',
  "value": "fa-code"
}, {
  "label": 'fa-code-fork',
  "value": "fa-code-fork"
}, {
  "label": 'fa-codepen',
  "value": "fa-codepen"
}, {
  "label": 'fa-codiepie',
  "value": "fa-codiepie"
}, {
  "label": 'fa-coffee',
  "value": "fa-coffee"
}, {
  "label": 'fa-cog',
  "value": "fa-cog"
}, {
  "label": 'fa-cogs',
  "value": "fa-cogs"
}, {
  "label": 'fa-columns',
  "value": "fa-columns"
}, {
  "label": 'fa-comment',
  "value": "fa-comment"
}, {
  "label": 'fa-comment-o',
  "value": "fa-comment-o"
}, {
  "label": 'fa-commenting',
  "value": "fa-commenting"
}, {
  "label": 'fa-commenting-o',
  "value": "fa-commenting-o"
}, {
  "label": 'fa-comments',
  "value": "fa-comments"
}, {
  "label": 'fa-comments-o',
  "value": "fa-comments-o"
}, {
  "label": 'fa-compass',
  "value": "fa-compass"
}, {
  "label": 'fa-compress',
  "value": "fa-compress"
}, {
  "label": 'fa-connectdevelop',
  "value": "fa-connectdevelop"
}, {
  "label": 'fa-contao',
  "value": "fa-contao"
}, {
  "label": 'fa-copy',
  "value": "fa-copy"
}, {
  "label": 'fa-copyright',
  "value": "fa-copyright"
}, {
  "label": 'fa-creative-commons',
  "value": "fa-creative-commons"
}, {
  "label": 'fa-credit-card',
  "value": "fa-credit-card"
}, {
  "label": 'fa-credit-card-alt',
  "value": "fa-credit-card-alt"
}, {
  "label": 'fa-crop',
  "value": "fa-crop"
}, {
  "label": 'fa-crosshairs',
  "value": "fa-crosshairs"
}, {
  "label": 'fa-css3',
  "value": "fa-css3"
}, {
  "label": 'fa-cube',
  "value": "fa-cube"
}, {
  "label": 'fa-cubes',
  "value": "fa-cubes"
}, {
  "label": 'fa-cut',
  "value": "fa-cut"
}, {
  "label": 'fa-cutlery',
  "value": "fa-cutlery"
}, {
  "label": 'fa-dashboard',
  "value": "fa-dashboard"
}, {
  "label": 'fa-dashcube',
  "value": "fa-dashcube"
}, {
  "label": 'fa-database',
  "value": "fa-database"
}, {
  "label": 'fa-deaf',
  "value": "fa-deaf"
}, {
  "label": 'fa-deafness',
  "value": "fa-deafness"
}, {
  "label": 'fa-dedent',
  "value": "fa-dedent"
}, {
  "label": 'fa-delicious',
  "value": "fa-delicious"
}, {
  "label": 'fa-desktop',
  "value": "fa-desktop"
}, {
  "label": 'fa-deviantart',
  "value": "fa-deviantart"
}, {
  "label": 'fa-diamond',
  "value": "fa-diamond"
}, {
  "label": 'fa-digg',
  "value": "fa-digg"
}, {
  "label": 'fa-dollar',
  "value": "fa-dollar"
}, {
  "label": 'fa-dot-circle-o',
  "value": "fa-dot-circle-o"
}, {
  "label": 'fa-download',
  "value": "fa-download"
}, {
  "label": 'fa-dribbble',
  "value": "fa-dribbble"
}, {
  "label": 'fa-drivers-license',
  "value": "fa-drivers-license"
}, {
  "label": 'fa-drivers-license-o',
  "value": "fa-drivers-license-o"
}, {
  "label": 'fa-dropbox',
  "value": "fa-dropbox"
}, {
  "label": 'fa-drupal',
  "value": "fa-drupal"
}, {
  "label": 'fa-edge',
  "value": "fa-edge"
}, {
  "label": 'fa-edit',
  "value": "fa-edit"
}, {
  "label": 'fa-eercast',
  "value": "fa-eercast"
}, {
  "label": 'fa-eject',
  "value": "fa-eject"
}, {
  "label": 'fa-ellipsis-h',
  "value": "fa-ellipsis-h"
}, {
  "label": 'fa-ellipsis-v',
  "value": "fa-ellipsis-v"
}, {
  "label": 'fa-empire',
  "value": "fa-empire"
}, {
  "label": 'fa-envelope',
  "value": "fa-envelope"
}, {
  "label": 'fa-envelope-o',
  "value": "fa-envelope-o"
}, {
  "label": 'fa-envelope-open',
  "value": "fa-envelope-open"
}, {
  "label": 'fa-envelope-open-o',
  "value": "fa-envelope-open-o"
}, {
  "label": 'fa-envelope-square',
  "value": "fa-envelope-square"
}, {
  "label": 'fa-envira',
  "value": "fa-envira"
}, {
  "label": 'fa-eraser',
  "value": "fa-eraser"
}, {
  "label": 'fa-etsy',
  "value": "fa-etsy"
}, {
  "label": 'fa-eur',
  "value": "fa-eur"
}, {
  "label": 'fa-euro',
  "value": "fa-euro"
}, {
  "label": 'fa-exchange',
  "value": "fa-exchange"
}, {
  "label": 'fa-exclamation',
  "value": "fa-exclamation"
}, {
  "label": 'fa-exclamation-circle',
  "value": "fa-exclamation-circle"
}, {
  "label": 'fa-exclamation-triangle',
  "value": "fa-exclamation-triangle"
}, {
  "label": 'fa-exclamation-triangle',
  "value": "fa-exclamation-triangle"
}, {
  "label": 'fa-expand',
  "value": "fa-expand"
}, {
  "label": 'fa-expeditedssl',
  "value": "fa-expeditedssl"
}, {
  "label": 'fa-external-link',
  "value": "fa-external-link"
}, {
  "label": 'fa-external-link-square',
  "value": "fa-external-link-square"
}, {
  "label": 'fa-external-link-square',
  "value": "fa-external-link-square"
}, {
  "label": 'fa-eye',
  "value": "fa-eye"
}, {
  "label": 'fa-eye-slash',
  "value": "fa-eye-slash"
}, {
  "label": 'fa-eyedropper',
  "value": "fa-eyedropper"
}, {
  "label": 'fa-fa',
  "value": "fa-fa"
}, {
  "label": 'fa-facebook',
  "value": "fa-facebook"
}, {
  "label": 'fa-facebook-f',
  "value": "fa-facebook-f"
}, {
  "label": 'fa-facebook-official',
  "value": "fa-facebook-official"
}, {
  "label": 'fa-facebook-square',
  "value": "fa-facebook-square"
}, {
  "label": 'fa-fast-backward',
  "value": "fa-fast-backward"
}, {
  "label": 'fa-fast-forward',
  "value": "fa-fast-forward"
}, {
  "label": 'fa-fax',
  "value": "fa-fax"
}, {
  "label": 'fa-feed',
  "value": "fa-feed"
}, {
  "label": 'fa-female',
  "value": "fa-female"
}, {
  "label": 'fa-fighter-jet',
  "value": "fa-fighter-jet"
}, {
  "label": 'fa-file',
  "value": "fa-file"
}, {
  "label": 'fa-file-archive-o',
  "value": "fa-file-archive-o"
}, {
  "label": 'fa-file-audio-o',
  "value": "fa-file-audio-o"
}, {
  "label": 'fa-file-code-o',
  "value": "fa-file-code-o"
}, {
  "label": 'fa-file-excel-o',
  "value": "fa-file-excel-o"
}, {
  "label": 'fa-file-image-o',
  "value": "fa-file-image-o"
}, {
  "label": 'fa-file-movie-o',
  "value": "fa-file-movie-o"
}, {
  "label": 'fa-file-o',
  "value": "fa-file-o"
}, {
  "label": 'fa-file-pdf-o',
  "value": "fa-file-pdf-o"
}, {
  "label": 'fa-file-photo-o',
  "value": "fa-file-photo-o"
}, {
  "label": 'fa-file-picture-o',
  "value": "fa-file-picture-o"
}, {
  "label": 'fa-file-powerpoint-o',
  "value": "fa-file-powerpoint-o"
}, {
  "label": 'fa-file-sound-o',
  "value": "fa-file-sound-o"
}, {
  "label": 'fa-file-text',
  "value": "fa-file-text"
}, {
  "label": 'fa-file-text-o',
  "value": "fa-file-text-o"
}, {
  "label": 'fa-file-video-o',
  "value": "fa-file-video-o"
}, {
  "label": 'fa-file-word-o',
  "value": "fa-file-word-o"
}, {
  "label": 'fa-file-zip-o',
  "value": "fa-file-zip-o"
}, {
  "label": 'fa-files-o',
  "value": "fa-files-o"
}, {
  "label": 'fa-film',
  "value": "fa-film"
}, {
  "label": 'fa-filter',
  "value": "fa-filter"
}, {
  "label": 'fa-fire',
  "value": "fa-fire"
}, {
  "label": 'fa-fire-extinguisher',
  "value": "fa-fire-extinguisher"
}, {
  "label": 'fa-firefox',
  "value": "fa-firefox"
}, {
  "label": 'fa-first-order',
  "value": "fa-first-order"
}, {
  "label": 'fa-flag',
  "value": "fa-flag"
}, {
  "label": 'fa-flag-checkered',
  "value": "fa-flag-checkered"
}, {
  "label": 'fa-flag-o',
  "value": "fa-flag-o"
}, {
  "label": 'fa-flash',
  "value": "fa-flash"
}, {
  "label": 'fa-flask',
  "value": "fa-flask"
}, {
  "label": 'fa-flickr',
  "value": "fa-flickr"
}, {
  "label": 'fa-floppy-o',
  "value": "fa-floppy-o"
}, {
  "label": 'fa-folder',
  "value": "fa-folder"
}, {
  "label": 'fa-folder-o',
  "value": "fa-folder-o"
}, {
  "label": 'fa-folder-open',
  "value": "fa-folder-open"
}, {
  "label": 'fa-folder-open-o',
  "value": "fa-folder-open-o"
}, {
  "label": 'fa-font',
  "value": "fa-font"
}, {
  "label": 'fa-font-awesome',
  "value": "fa-font-awesome"
}, {
  "label": 'fa-fonticons',
  "value": "fa-fonticons"
}, {
  "label": 'fa-fort-awesome',
  "value": "fa-fort-awesome"
}, {
  "label": 'fa-forumbee',
  "value": "fa-forumbee"
}, {
  "label": 'fa-forward',
  "value": "fa-forward"
}, {
  "label": 'fa-foursquare',
  "value": "fa-foursquare"
}, {
  "label": 'fa-free-code-camp',
  "value": "fa-free-code-camp"
}, {
  "label": 'fa-frown-o',
  "value": "fa-frown-o"
}, {
  "label": 'fa-futbol-o',
  "value": "fa-futbol-o"
}, {
  "label": 'fa-gamepad',
  "value": "fa-gamepad"
}, {
  "label": 'fa-gavel',
  "value": "fa-gavel"
}, {
  "label": 'fa-gbp',
  "value": "fa-gbp"
}, {
  "label": 'fa-ge',
  "value": "fa-ge"
}, {
  "label": 'fa-gear',
  "value": "fa-gear"
}, {
  "label": 'fa-gears',
  "value": "fa-gears"
}, {
  "label": 'fa-genderless',
  "value": "fa-genderless"
}, {
  "label": 'fa-get-pocket',
  "value": "fa-get-pocket"
}, {
  "label": 'fa-gg',
  "value": "fa-gg"
}, {
  "label": 'fa-gg-circle',
  "value": "fa-gg-circle"
}, {
  "label": 'fa-gift',
  "value": "fa-gift"
}, {
  "label": 'fa-git',
  "value": "fa-git"
}, {
  "label": 'fa-git-square',
  "value": "fa-git-square"
}, {
  "label": 'fa-github',
  "value": "fa-github"
}, {
  "label": 'fa-github-alt',
  "value": "fa-github-alt"
}, {
  "label": 'fa-github-square',
  "value": "fa-github-square"
}, {
  "label": 'fa-gitlab',
  "value": "fa-gitlab"
}, {
  "label": 'fa-gittip',
  "value": "fa-gittip"
}, {
  "label": 'fa-glass',
  "value": "fa-glass"
}, {
  "label": 'fa-glide',
  "value": "fa-glide"
}, {
  "label": 'fa-glide-g',
  "value": "fa-glide-g"
}, {
  "label": 'fa-globe',
  "value": "fa-globe"
}, {
  "label": 'fa-google',
  "value": "fa-google"
}, {
  "label": 'fa-google-plus',
  "value": "fa-google-plus"
}, {
  "label": 'fa-google-plus-circle',
  "value": "fa-google-plus-circle"
}, {
  "label": 'fa-google-plus-official',
  "value": "fa-google-plus-official"
}, {
  "label": 'fa-google-plus-official',
  "value": "fa-google-plus-official"
}, {
  "label": 'fa-google-plus-square',
  "value": "fa-google-plus-square"
}, {
  "label": 'fa-google-wallet',
  "value": "fa-google-wallet"
}, {
  "label": 'fa-graduation-cap',
  "value": "fa-graduation-cap"
}, {
  "label": 'fa-gratipay',
  "value": "fa-gratipay"
}, {
  "label": 'fa-grav',
  "value": "fa-grav"
}, {
  "label": 'fa-group',
  "value": "fa-group"
}, {
  "label": 'fa-h-square',
  "value": "fa-h-square"
}, {
  "label": 'fa-hacker-news',
  "value": "fa-hacker-news"
}, {
  "label": 'fa-hand-grab-o',
  "value": "fa-hand-grab-o"
}, {
  "label": 'fa-hand-lizard-o',
  "value": "fa-hand-lizard-o"
}, {
  "label": 'fa-hand-o-down',
  "value": "fa-hand-o-down"
}, {
  "label": 'fa-hand-o-left',
  "value": "fa-hand-o-left"
}, {
  "label": 'fa-hand-o-right',
  "value": "fa-hand-o-right"
}, {
  "label": 'fa-hand-o-up',
  "value": "fa-hand-o-up"
}, {
  "label": 'fa-hand-paper-o',
  "value": "fa-hand-paper-o"
}, {
  "label": 'fa-hand-peace-o',
  "value": "fa-hand-peace-o"
}, {
  "label": 'fa-hand-pointer-o',
  "value": "fa-hand-pointer-o"
}, {
  "label": 'fa-hand-rock-o',
  "value": "fa-hand-rock-o"
}, {
  "label": 'fa-hand-scissors-o',
  "value": "fa-hand-scissors-o"
}, {
  "label": 'fa-hand-spock-o',
  "value": "fa-hand-spock-o"
}, {
  "label": 'fa-hand-stop-o',
  "value": "fa-hand-stop-o"
}, {
  "label": 'fa-handshake-o',
  "value": "fa-handshake-o"
}, {
  "label": 'fa-hard-of-hearing',
  "value": "fa-hard-of-hearing"
}, {
  "label": 'fa-hashtag',
  "value": "fa-hashtag"
}, {
  "label": 'fa-hdd-o',
  "value": "fa-hdd-o"
}, {
  "label": 'fa-header',
  "value": "fa-header"
}, {
  "label": 'fa-headphones',
  "value": "fa-headphones"
}, {
  "label": 'fa-heart',
  "value": "fa-heart"
}, {
  "label": 'fa-heart-o',
  "value": "fa-heart-o"
}, {
  "label": 'fa-heartbeat',
  "value": "fa-heartbeat"
}, {
  "label": 'fa-history',
  "value": "fa-history"
}, {
  "label": 'fa-home',
  "value": "fa-home"
}, {
  "label": 'fa-hospital-o',
  "value": "fa-hospital-o"
}, {
  "label": 'fa-hotel',
  "value": "fa-hotel"
}, {
  "label": 'fa-hourglass',
  "value": "fa-hourglass"
}, {
  "label": 'fa-hourglass-1',
  "value": "fa-hourglass-1"
}, {
  "label": 'fa-hourglass-2',
  "value": "fa-hourglass-2"
}, {
  "label": 'fa-hourglass-3',
  "value": "fa-hourglass-3"
}, {
  "label": 'fa-hourglass-end',
  "value": "fa-hourglass-end"
}, {
  "label": 'fa-hourglass-half',
  "value": "fa-hourglass-half"
}, {
  "label": 'fa-hourglass-o',
  "value": "fa-hourglass-o"
}, {
  "label": 'fa-hourglass-start',
  "value": "fa-hourglass-start"
}, {
  "label": 'fa-houzz',
  "value": "fa-houzz"
}, {
  "label": 'fa-html5',
  "value": "fa-html5"
}, {
  "label": 'fa-i-cursor',
  "value": "fa-i-cursor"
}, {
  "label": 'fa-id-badge',
  "value": "fa-id-badge"
}, {
  "label": 'fa-id-card',
  "value": "fa-id-card"
}, {
  "label": 'fa-id-card-o',
  "value": "fa-id-card-o"
}, {
  "label": 'fa-ils',
  "value": "fa-ils"
}, {
  "label": 'fa-image',
  "value": "fa-image"
}, {
  "label": 'fa-imdb',
  "value": "fa-imdb"
}, {
  "label": 'fa-inbox',
  "value": "fa-inbox"
}, {
  "label": 'fa-indent',
  "value": "fa-indent"
}, {
  "label": 'fa-industry',
  "value": "fa-industry"
}, {
  "label": 'fa-info',
  "value": "fa-info"
}, {
  "label": 'fa-info-circle',
  "value": "fa-info-circle"
}, {
  "label": 'fa-inr',
  "value": "fa-inr"
}, {
  "label": 'fa-instagram',
  "value": "fa-instagram"
}, {
  "label": 'fa-institution',
  "value": "fa-institution"
}, {
  "label": 'fa-internet-explorer',
  "value": "fa-internet-explorer"
}, {
  "label": 'fa-intersex',
  "value": "fa-intersex"
}, {
  "label": 'fa-ioxhost',
  "value": "fa-ioxhost"
}, {
  "label": 'fa-italic',
  "value": "fa-italic"
}, {
  "label": 'fa-joomla',
  "value": "fa-joomla"
}, {
  "label": 'fa-jpy',
  "value": "fa-jpy"
}, {
  "label": 'fa-jsfiddle',
  "value": "fa-jsfiddle"
}, {
  "label": 'fa-key',
  "value": "fa-key"
}, {
  "label": 'fa-keyboard-o',
  "value": "fa-keyboard-o"
}, {
  "label": 'fa-krw',
  "value": "fa-krw"
}, {
  "label": 'fa-language',
  "value": "fa-language"
}, {
  "label": 'fa-laptop',
  "value": "fa-laptop"
}, {
  "label": 'fa-lastfm',
  "value": "fa-lastfm"
}, {
  "label": 'fa-lastfm-square',
  "value": "fa-lastfm-square"
}, {
  "label": 'fa-leaf',
  "value": "fa-leaf"
}, {
  "label": 'fa-leanpub',
  "value": "fa-leanpub"
}, {
  "label": 'fa-legal',
  "value": "fa-legal"
}, {
  "label": 'fa-lemon-o',
  "value": "fa-lemon-o"
}, {
  "label": 'fa-level-down',
  "value": "fa-level-down"
}, {
  "label": 'fa-level-up',
  "value": "fa-level-up"
}, {
  "label": 'fa-life-bouy',
  "value": "fa-life-bouy"
}, {
  "label": 'fa-life-buoy',
  "value": "fa-life-buoy"
}, {
  "label": 'fa-life-ring',
  "value": "fa-life-ring"
}, {
  "label": 'fa-life-saver',
  "value": "fa-life-saver"
}, {
  "label": 'fa-lightbulb-o',
  "value": "fa-lightbulb-o"
}, {
  "label": 'fa-line-chart',
  "value": "fa-line-chart"
}, {
  "label": 'fa-link',
  "value": "fa-link"
}, {
  "label": 'fa-linkedin',
  "value": "fa-linkedin"
}, {
  "label": 'fa-linkedin-square',
  "value": "fa-linkedin-square"
}, {
  "label": 'fa-linode',
  "value": "fa-linode"
}, {
  "label": 'fa-linux',
  "value": "fa-linux"
}, {
  "label": 'fa-list',
  "value": "fa-list"
}, {
  "label": 'fa-list-alt',
  "value": "fa-list-alt"
}, {
  "label": 'fa-list-ol',
  "value": "fa-list-ol"
}, {
  "label": 'fa-list-ul',
  "value": "fa-list-ul"
}, {
  "label": 'fa-location-arrow',
  "value": "fa-location-arrow"
}, {
  "label": 'fa-lock',
  "value": "fa-lock"
}, {
  "label": 'fa-long-arrow-down',
  "value": "fa-long-arrow-down"
}, {
  "label": 'fa-long-arrow-left',
  "value": "fa-long-arrow-left"
}, {
  "label": 'fa-long-arrow-right',
  "value": "fa-long-arrow-right"
}, {
  "label": 'fa-long-arrow-up',
  "value": "fa-long-arrow-up"
}, {
  "label": 'fa-low-vision',
  "value": "fa-low-vision"
}, {
  "label": 'fa-magic',
  "value": "fa-magic"
}, {
  "label": 'fa-magnet',
  "value": "fa-magnet"
}, {
  "label": 'fa-mail-forward',
  "value": "fa-mail-forward"
}, {
  "label": 'fa-mail-reply',
  "value": "fa-mail-reply"
}, {
  "label": 'fa-mail-reply-all',
  "value": "fa-mail-reply-all"
}, {
  "label": 'fa-male',
  "value": "fa-male"
}, {
  "label": 'fa-map',
  "value": "fa-map"
}, {
  "label": 'fa-map-marker',
  "value": "fa-map-marker"
}, {
  "label": 'fa-map-o',
  "value": "fa-map-o"
}, {
  "label": 'fa-map-pin',
  "value": "fa-map-pin"
}, {
  "label": 'fa-map-signs',
  "value": "fa-map-signs"
}, {
  "label": 'fa-mars',
  "value": "fa-mars"
}, {
  "label": 'fa-mars-double',
  "value": "fa-mars-double"
}, {
  "label": 'fa-mars-stroke',
  "value": "fa-mars-stroke"
}, {
  "label": 'fa-mars-stroke-h',
  "value": "fa-mars-stroke-h"
}, {
  "label": 'fa-mars-stroke-v',
  "value": "fa-mars-stroke-v"
}, {
  "label": 'fa-maxcdn',
  "value": "fa-maxcdn"
}, {
  "label": 'fa-meanpath',
  "value": "fa-meanpath"
}, {
  "label": 'fa-medium',
  "value": "fa-medium"
}, {
  "label": 'fa-medkit',
  "value": "fa-medkit"
}, {
  "label": 'fa-meetup',
  "value": "fa-meetup"
}, {
  "label": 'fa-meh-o',
  "value": "fa-meh-o"
}, {
  "label": 'fa-mercury',
  "value": "fa-mercury"
}, {
  "label": 'fa-microchip',
  "value": "fa-microchip"
}, {
  "label": 'fa-microphone',
  "value": "fa-microphone"
}, {
  "label": 'fa-microphone-slash',
  "value": "fa-microphone-slash"
}, {
  "label": 'fa-minus',
  "value": "fa-minus"
}, {
  "label": 'fa-minus-circle',
  "value": "fa-minus-circle"
}, {
  "label": 'fa-minus-square',
  "value": "fa-minus-square"
}, {
  "label": 'fa-minus-square-o',
  "value": "fa-minus-square-o"
}, {
  "label": 'fa-mixcloud',
  "value": "fa-mixcloud"
}, {
  "label": 'fa-mobile',
  "value": "fa-mobile"
}, {
  "label": 'fa-mobile-phone',
  "value": "fa-mobile-phone"
}, {
  "label": 'fa-modx',
  "value": "fa-modx"
}, {
  "label": 'fa-money',
  "value": "fa-money"
}, {
  "label": 'fa-moon-o',
  "value": "fa-moon-o"
}, {
  "label": 'fa-mortar-board',
  "value": "fa-mortar-board"
}, {
  "label": 'fa-motorcycle',
  "value": "fa-motorcycle"
}, {
  "label": 'fa-mouse-pointer',
  "value": "fa-mouse-pointer"
}, {
  "label": 'fa-music',
  "value": "fa-music"
}, {
  "label": 'fa-navicon',
  "value": "fa-navicon"
}, {
  "label": 'fa-neuter',
  "value": "fa-neuter"
}, {
  "label": 'fa-newspaper-o',
  "value": "fa-newspaper-o"
}, {
  "label": 'fa-object-group',
  "value": "fa-object-group"
}, {
  "label": 'fa-object-ungroup',
  "value": "fa-object-ungroup"
}, {
  "label": 'fa-odnoklassniki',
  "value": "fa-odnoklassniki"
}, {
  "label": 'fa-odnoklassniki-square',
  "value": "fa-odnoklassniki-square"
}, {
  "label": 'fa-odnoklassniki-square',
  "value": "fa-odnoklassniki-square"
}, {
  "label": 'fa-opencart',
  "value": "fa-opencart"
}, {
  "label": 'fa-openid',
  "value": "fa-openid"
}, {
  "label": 'fa-opera',
  "value": "fa-opera"
}, {
  "label": 'fa-optin-monster',
  "value": "fa-optin-monster"
}, {
  "label": 'fa-outdent',
  "value": "fa-outdent"
}, {
  "label": 'fa-pagelines',
  "value": "fa-pagelines"
}, {
  "label": 'fa-paint-brush',
  "value": "fa-paint-brush"
}, {
  "label": 'fa-paper-plane',
  "value": "fa-paper-plane"
}, {
  "label": 'fa-paper-plane-o',
  "value": "fa-paper-plane-o"
}, {
  "label": 'fa-paperclip',
  "value": "fa-paperclip"
}, {
  "label": 'fa-paragraph',
  "value": "fa-paragraph"
}, {
  "label": 'fa-paste',
  "value": "fa-paste"
}, {
  "label": 'fa-pause',
  "value": "fa-pause"
}, {
  "label": 'fa-pause-circle',
  "value": "fa-pause-circle"
}, {
  "label": 'fa-pause-circle-o',
  "value": "fa-pause-circle-o"
}, {
  "label": 'fa-paw',
  "value": "fa-paw"
}, {
  "label": 'fa-paypal',
  "value": "fa-paypal"
}, {
  "label": 'fa-pencil',
  "value": "fa-pencil"
}, {
  "label": 'fa-pencil-square',
  "value": "fa-pencil-square"
}, {
  "label": 'fa-pencil-square-o',
  "value": "fa-pencil-square-o"
}, {
  "label": 'fa-percent',
  "value": "fa-percent"
}, {
  "label": 'fa-phone',
  "value": "fa-phone"
}, {
  "label": 'fa-phone-square',
  "value": "fa-phone-square"
}, {
  "label": 'fa-photo',
  "value": "fa-photo"
}, {
  "label": 'fa-picture-o',
  "value": "fa-picture-o"
}, {
  "label": 'fa-pie-chart',
  "value": "fa-pie-chart"
}, {
  "label": 'fa-pied-piper',
  "value": "fa-pied-piper"
}, {
  "label": 'fa-pied-piper-alt',
  "value": "fa-pied-piper-alt"
}, {
  "label": 'fa-pied-piper-pp',
  "value": "fa-pied-piper-pp"
}, {
  "label": 'fa-pinterest',
  "value": "fa-pinterest"
}, {
  "label": 'fa-pinterest-p',
  "value": "fa-pinterest-p"
}, {
  "label": 'fa-pinterest-square',
  "value": "fa-pinterest-square"
}, {
  "label": 'fa-plane',
  "value": "fa-plane"
}, {
  "label": 'fa-play',
  "value": "fa-play"
}, {
  "label": 'fa-play-circle',
  "value": "fa-play-circle"
}, {
  "label": 'fa-play-circle-o',
  "value": "fa-play-circle-o"
}, {
  "label": 'fa-plug',
  "value": "fa-plug"
}, {
  "label": 'fa-plus',
  "value": "fa-plus"
}, {
  "label": 'fa-plus-circle',
  "value": "fa-plus-circle"
}, {
  "label": 'fa-plus-square',
  "value": "fa-plus-square"
}, {
  "label": 'fa-plus-square-o',
  "value": "fa-plus-square-o"
}, {
  "label": 'fa-podcast',
  "value": "fa-podcast"
}, {
  "label": 'fa-power-off',
  "value": "fa-power-off"
}, {
  "label": 'fa-print',
  "value": "fa-print"
}, {
  "label": 'fa-product-hunt',
  "value": "fa-product-hunt"
}, {
  "label": 'fa-puzzle-piece',
  "value": "fa-puzzle-piece"
}, {
  "label": 'fa-qq',
  "value": "fa-qq"
}, {
  "label": 'fa-qrcode',
  "value": "fa-qrcode"
}, {
  "label": 'fa-question',
  "value": "fa-question"
}, {
  "label": 'fa-question-circle',
  "value": "fa-question-circle"
}, {
  "label": 'fa-question-circle-o',
  "value": "fa-question-circle-o"
}, {
  "label": 'fa-quora',
  "value": "fa-quora"
}, {
  "label": 'fa-quote-left',
  "value": "fa-quote-left"
}, {
  "label": 'fa-quote-right',
  "value": "fa-quote-right"
}, {
  "label": 'fa-ra',
  "value": "fa-ra"
}, {
  "label": 'fa-random',
  "value": "fa-random"
}, {
  "label": 'fa-ravelry',
  "value": "fa-ravelry"
}, {
  "label": 'fa-rebel',
  "value": "fa-rebel"
}, {
  "label": 'fa-recycle',
  "value": "fa-recycle"
}, {
  "label": 'fa-reddit',
  "value": "fa-reddit"
}, {
  "label": 'fa-reddit-alien',
  "value": "fa-reddit-alien"
}, {
  "label": 'fa-reddit-square',
  "value": "fa-reddit-square"
}, {
  "label": 'fa-refresh',
  "value": "fa-refresh"
}, {
  "label": 'fa-registered',
  "value": "fa-registered"
}, {
  "label": 'fa-remove',
  "value": "fa-remove"
}, {
  "label": 'fa-renren',
  "value": "fa-renren"
}, {
  "label": 'fa-reorder',
  "value": "fa-reorder"
}, {
  "label": 'fa-repeat',
  "value": "fa-repeat"
}, {
  "label": 'fa-reply',
  "value": "fa-reply"
}, {
  "label": 'fa-reply-all',
  "value": "fa-reply-all"
}, {
  "label": 'fa-resistance',
  "value": "fa-resistance"
}, {
  "label": 'fa-retweet',
  "value": "fa-retweet"
}, {
  "label": 'fa-rmb',
  "value": "fa-rmb"
}, {
  "label": 'fa-road',
  "value": "fa-road"
}, {
  "label": 'fa-rocket',
  "value": "fa-rocket"
}, {
  "label": 'fa-rotate-left',
  "value": "fa-rotate-left"
}, {
  "label": 'fa-rotate-right',
  "value": "fa-rotate-right"
}, {
  "label": 'fa-rouble',
  "value": "fa-rouble"
}, {
  "label": 'fa-rss',
  "value": "fa-rss"
}, {
  "label": 'fa-rss-square',
  "value": "fa-rss-square"
}, {
  "label": 'fa-rub',
  "value": "fa-rub"
}, {
  "label": 'fa-ruble',
  "value": "fa-ruble"
}, {
  "label": 'fa-rupee',
  "value": "fa-rupee"
}, {
  "label": 'fa-s15',
  "value": "fa-s15"
}, {
  "label": 'fa-safari',
  "value": "fa-safari"
}, {
  "label": 'fa-save',
  "value": "fa-save"
}, {
  "label": 'fa-scissors',
  "value": "fa-scissors"
}, {
  "label": 'fa-scribd',
  "value": "fa-scribd"
}, {
  "label": 'fa-search',
  "value": "fa-search"
}, {
  "label": 'fa-search-minus',
  "value": "fa-search-minus"
}, {
  "label": 'fa-search-plus',
  "value": "fa-search-plus"
}, {
  "label": 'fa-sellsy',
  "value": "fa-sellsy"
}, {
  "label": 'fa-send',
  "value": "fa-send"
}, {
  "label": 'fa-send-o',
  "value": "fa-send-o"
}, {
  "label": 'fa-server',
  "value": "fa-server"
}, {
  "label": 'fa-share',
  "value": "fa-share"
}, {
  "label": 'fa-share-alt',
  "value": "fa-share-alt"
}, {
  "label": 'fa-share-alt-square',
  "value": "fa-share-alt-square"
}, {
  "label": 'fa-share-square',
  "value": "fa-share-square"
}, {
  "label": 'fa-share-square-o',
  "value": "fa-share-square-o"
}, {
  "label": 'fa-shekel',
  "value": "fa-shekel"
}, {
  "label": 'fa-sheqel',
  "value": "fa-sheqel"
}, {
  "label": 'fa-shield',
  "value": "fa-shield"
}, {
  "label": 'fa-ship',
  "value": "fa-ship"
}, {
  "label": 'fa-shirtsinbulk',
  "value": "fa-shirtsinbulk"
}, {
  "label": 'fa-shopping-bag',
  "value": "fa-shopping-bag"
}, {
  "label": 'fa-shopping-basket',
  "value": "fa-shopping-basket"
}, {
  "label": 'fa-shopping-cart',
  "value": "fa-shopping-cart"
}, {
  "label": 'fa-shower',
  "value": "fa-shower"
}, {
  "label": 'fa-sign-in',
  "value": "fa-sign-in"
}, {
  "label": 'fa-sign-language',
  "value": "fa-sign-language"
}, {
  "label": 'fa-sign-out',
  "value": "fa-sign-out"
}, {
  "label": 'fa-signal',
  "value": "fa-signal"
}, {
  "label": 'fa-signing',
  "value": "fa-signing"
}, {
  "label": 'fa-simplybuilt',
  "value": "fa-simplybuilt"
}, {
  "label": 'fa-sitemap',
  "value": "fa-sitemap"
}, {
  "label": 'fa-skyatlas',
  "value": "fa-skyatlas"
}, {
  "label": 'fa-skype',
  "value": "fa-skype"
}, {
  "label": 'fa-slack',
  "value": "fa-slack"
}, {
  "label": 'fa-sliders',
  "value": "fa-sliders"
}, {
  "label": 'fa-slideshare',
  "value": "fa-slideshare"
}, {
  "label": 'fa-smile-o',
  "value": "fa-smile-o"
}, {
  "label": 'fa-snapchat',
  "value": "fa-snapchat"
}, {
  "label": 'fa-snapchat-ghost',
  "value": "fa-snapchat-ghost"
}, {
  "label": 'fa-snapchat-square',
  "value": "fa-snapchat-square"
}, {
  "label": 'fa-snowflake-o',
  "value": "fa-snowflake-o"
}, {
  "label": 'fa-soccer-ball-o',
  "value": "fa-soccer-ball-o"
}, {
  "label": 'fa-sort',
  "value": "fa-sort"
}, {
  "label": 'fa-sort-alpha-asc',
  "value": "fa-sort-alpha-asc"
}, {
  "label": 'fa-sort-alpha-desc',
  "value": "fa-sort-alpha-desc"
}, {
  "label": 'fa-sort-amount-asc',
  "value": "fa-sort-amount-asc"
}, {
  "label": 'fa-sort-amount-desc',
  "value": "fa-sort-amount-desc"
}, {
  "label": 'fa-sort-asc',
  "value": "fa-sort-asc"
}, {
  "label": 'fa-sort-desc',
  "value": "fa-sort-desc"
}, {
  "label": 'fa-sort-down',
  "value": "fa-sort-down"
}, {
  "label": 'fa-sort-numeric-asc',
  "value": "fa-sort-numeric-asc"
}, {
  "label": 'fa-sort-numeric-desc',
  "value": "fa-sort-numeric-desc"
}, {
  "label": 'fa-sort-up',
  "value": "fa-sort-up"
}, {
  "label": 'fa-soundcloud',
  "value": "fa-soundcloud"
}, {
  "label": 'fa-space-shuttle',
  "value": "fa-space-shuttle"
}, {
  "label": 'fa-spinner',
  "value": "fa-spinner"
}, {
  "label": 'fa-spoon',
  "value": "fa-spoon"
}, {
  "label": 'fa-spotify',
  "value": "fa-spotify"
}, {
  "label": 'fa-square',
  "value": "fa-square"
}, {
  "label": 'fa-square-o',
  "value": "fa-square-o"
}, {
  "label": 'fa-stack-exchange',
  "value": "fa-stack-exchange"
}, {
  "label": 'fa-stack-overflow',
  "value": "fa-stack-overflow"
}, {
  "label": 'fa-star',
  "value": "fa-star"
}, {
  "label": 'fa-star-half',
  "value": "fa-star-half"
}, {
  "label": 'fa-star-half-empty',
  "value": "fa-star-half-empty"
}, {
  "label": 'fa-star-half-full',
  "value": "fa-star-half-full"
}, {
  "label": 'fa-star-half-o',
  "value": "fa-star-half-o"
}, {
  "label": 'fa-star-o',
  "value": "fa-star-o"
}, {
  "label": 'fa-steam',
  "value": "fa-steam"
}, {
  "label": 'fa-steam-square',
  "value": "fa-steam-square"
}, {
  "label": 'fa-step-backward',
  "value": "fa-step-backward"
}, {
  "label": 'fa-step-forward',
  "value": "fa-step-forward"
}, {
  "label": 'fa-stethoscope',
  "value": "fa-stethoscope"
}, {
  "label": 'fa-sticky-note',
  "value": "fa-sticky-note"
}, {
  "label": 'fa-sticky-note-o',
  "value": "fa-sticky-note-o"
}, {
  "label": 'fa-stop',
  "value": "fa-stop"
}, {
  "label": 'fa-stop-circle',
  "value": "fa-stop-circle"
}, {
  "label": 'fa-stop-circle-o',
  "value": "fa-stop-circle-o"
}, {
  "label": 'fa-street-view',
  "value": "fa-street-view"
}, {
  "label": 'fa-strikethrough',
  "value": "fa-strikethrough"
}, {
  "label": 'fa-stumbleupon',
  "value": "fa-stumbleupon"
}, {
  "label": 'fa-stumbleupon-circle',
  "value": "fa-stumbleupon-circle"
}, {
  "label": 'fa-subscript',
  "value": "fa-subscript"
}, {
  "label": 'fa-subway',
  "value": "fa-subway"
}, {
  "label": 'fa-suitcase',
  "value": "fa-suitcase"
}, {
  "label": 'fa-sun-o',
  "value": "fa-sun-o"
}, {
  "label": 'fa-superpowers',
  "value": "fa-superpowers"
}, {
  "label": 'fa-superscript',
  "value": "fa-superscript"
}, {
  "label": 'fa-support',
  "value": "fa-support"
}, {
  "label": 'fa-table',
  "value": "fa-table"
}, {
  "label": 'fa-tablet',
  "value": "fa-tablet"
}, {
  "label": 'fa-tachometer',
  "value": "fa-tachometer"
}, {
  "label": 'fa-tag',
  "value": "fa-tag"
}, {
  "label": 'fa-tags',
  "value": "fa-tags"
}, {
  "label": 'fa-tasks',
  "value": "fa-tasks"
}, {
  "label": 'fa-taxi',
  "value": "fa-taxi"
}, {
  "label": 'fa-telegram',
  "value": "fa-telegram"
}, {
  "label": 'fa-television',
  "value": "fa-television"
}, {
  "label": 'fa-tencent-weibo',
  "value": "fa-tencent-weibo"
}, {
  "label": 'fa-terminal',
  "value": "fa-terminal"
}, {
  "label": 'fa-text-height',
  "value": "fa-text-height"
}, {
  "label": 'fa-text-width',
  "value": "fa-text-width"
}, {
  "label": 'fa-th',
  "value": "fa-th"
}, {
  "label": 'fa-th-large',
  "value": "fa-th-large"
}, {
  "label": 'fa-th-list',
  "value": "fa-th-list"
}, {
  "label": 'fa-themeisle',
  "value": "fa-themeisle"
}, {
  "label": 'fa-thermometer',
  "value": "fa-thermometer"
}, {
  "label": 'fa-thermometer-0',
  "value": "fa-thermometer-0"
}, {
  "label": 'fa-thermometer-1',
  "value": "fa-thermometer-1"
}, {
  "label": 'fa-thermometer-2',
  "value": "fa-thermometer-2"
}, {
  "label": 'fa-thermometer-3',
  "value": "fa-thermometer-3"
}, {
  "label": 'fa-thermometer-4',
  "value": "fa-thermometer-4"
}, {
  "label": 'fa-thermometer-empty',
  "value": "fa-thermometer-empty"
}, {
  "label": 'fa-thermometer-full',
  "value": "fa-thermometer-full"
}, {
  "label": 'fa-thermometer-half',
  "value": "fa-thermometer-half"
}, {
  "label": 'fa-thermometer-quarter',
  "value": "fa-thermometer-quarter"
}, {
  "label": 'fa-thermometer-three-quarters',
  "value": "fa-thermometer-three-quarters"
}, {
  "label": 'fa-thermometer-three-quarters',
  "value": "fa-thermometer-three-quarters"
}, {
  "label": 'fa-thumb-tack',
  "value": "fa-thumb-tack"
}, {
  "label": 'fa-thumbs-down',
  "value": "fa-thumbs-down"
}, {
  "label": 'fa-thumbs-o-down',
  "value": "fa-thumbs-o-down"
}, {
  "label": 'fa-thumbs-o-up',
  "value": "fa-thumbs-o-up"
}, {
  "label": 'fa-thumbs-up',
  "value": "fa-thumbs-up"
}, {
  "label": 'fa-ticket',
  "value": "fa-ticket"
}, {
  "label": 'fa-times',
  "value": "fa-times"
}, {
  "label": 'fa-times-circle',
  "value": "fa-times-circle"
}, {
  "label": 'fa-times-circle-o',
  "value": "fa-times-circle-o"
}, {
  "label": 'fa-times-rectangle',
  "value": "fa-times-rectangle"
}, {
  "label": 'fa-times-rectangle-o',
  "value": "fa-times-rectangle-o"
}, {
  "label": 'fa-tint',
  "value": "fa-tint"
}, {
  "label": 'fa-toggle-down',
  "value": "fa-toggle-down"
}, {
  "label": 'fa-toggle-left',
  "value": "fa-toggle-left"
}, {
  "label": 'fa-toggle-off',
  "value": "fa-toggle-off"
}, {
  "label": 'fa-toggle-on',
  "value": "fa-toggle-on"
}, {
  "label": 'fa-toggle-right',
  "value": "fa-toggle-right"
}, {
  "label": 'fa-toggle-up',
  "value": "fa-toggle-up"
}, {
  "label": 'fa-trademark',
  "value": "fa-trademark"
}, {
  "label": 'fa-train',
  "value": "fa-train"
}, {
  "label": 'fa-transgender',
  "value": "fa-transgender"
}, {
  "label": 'fa-transgender-alt',
  "value": "fa-transgender-alt"
}, {
  "label": 'fa-trash',
  "value": "fa-trash"
}, {
  "label": 'fa-trash-o',
  "value": "fa-trash-o"
}, {
  "label": 'fa-tree',
  "value": "fa-tree"
}, {
  "label": 'fa-trello',
  "value": "fa-trello"
}, {
  "label": 'fa-tripadvisor',
  "value": "fa-tripadvisor"
}, {
  "label": 'fa-trophy',
  "value": "fa-trophy"
}, {
  "label": 'fa-truck',
  "value": "fa-truck"
}, {
  "label": 'fa-try',
  "value": "fa-try"
}, {
  "label": 'fa-tty',
  "value": "fa-tty"
}, {
  "label": 'fa-tumblr',
  "value": "fa-tumblr"
}, {
  "label": 'fa-tumblr-square',
  "value": "fa-tumblr-square"
}, {
  "label": 'fa-turkish-lira',
  "value": "fa-turkish-lira"
}, {
  "label": 'fa-tv',
  "value": "fa-tv"
}, {
  "label": 'fa-twitch',
  "value": "fa-twitch"
}, {
  "label": 'fa-twitter',
  "value": "fa-twitter"
}, {
  "label": 'fa-twitter-square',
  "value": "fa-twitter-square"
}, {
  "label": 'fa-umbrella',
  "value": "fa-umbrella"
}, {
  "label": 'fa-underline',
  "value": "fa-underline"
}, {
  "label": 'fa-undo',
  "value": "fa-undo"
}, {
  "label": 'fa-universal-access',
  "value": "fa-universal-access"
}, {
  "label": 'fa-university',
  "value": "fa-university"
}, {
  "label": 'fa-unlink',
  "value": "fa-unlink"
}, {
  "label": 'fa-unlock',
  "value": "fa-unlock"
}, {
  "label": 'fa-unlock-alt',
  "value": "fa-unlock-alt"
}, {
  "label": 'fa-unsorted',
  "value": "fa-unsorted"
}, {
  "label": 'fa-upload',
  "value": "fa-upload"
}, {
  "label": 'fa-usb',
  "value": "fa-usb"
}, {
  "label": 'fa-usd',
  "value": "fa-usd"
}, {
  "label": 'fa-user',
  "value": "fa-user"
}, {
  "label": 'fa-user-circle',
  "value": "fa-user-circle"
}, {
  "label": 'fa-user-circle-o',
  "value": "fa-user-circle-o"
}, {
  "label": 'fa-user-md',
  "value": "fa-user-md"
}, {
  "label": 'fa-user-o',
  "value": "fa-user-o"
}, {
  "label": 'fa-user-plus',
  "value": "fa-user-plus"
}, {
  "label": 'fa-user-secret',
  "value": "fa-user-secret"
}, {
  "label": 'fa-user-times',
  "value": "fa-user-times"
}, {
  "label": 'fa-users',
  "value": "fa-users"
}, {
  "label": 'fa-vcard',
  "value": "fa-vcard"
}, {
  "label": 'fa-vcard-o',
  "value": "fa-vcard-o"
}, {
  "label": 'fa-venus',
  "value": "fa-venus"
}, {
  "label": 'fa-venus-double',
  "value": "fa-venus-double"
}, {
  "label": 'fa-venus-mars',
  "value": "fa-venus-mars"
}, {
  "label": 'fa-viacoin',
  "value": "fa-viacoin"
}, {
  "label": 'fa-viadeo',
  "value": "fa-viadeo"
}, {
  "label": 'fa-viadeo-square',
  "value": "fa-viadeo-square"
}, {
  "label": 'fa-video-camera',
  "value": "fa-video-camera"
}, {
  "label": 'fa-vimeo',
  "value": "fa-vimeo"
}, {
  "label": 'fa-vimeo-square',
  "value": "fa-vimeo-square"
}, {
  "label": 'fa-vine',
  "value": "fa-vine"
}, {
  "label": 'fa-vk',
  "value": "fa-vk"
}, {
  "label": 'fa-volume-control-phone',
  "value": "fa-volume-control-phone"
}, {
  "label": 'fa-volume-control-phone',
  "value": "fa-volume-control-phone"
}, {
  "label": 'fa-volume-down',
  "value": "fa-volume-down"
}, {
  "label": 'fa-volume-off',
  "value": "fa-volume-off"
}, {
  "label": 'fa-volume-up',
  "value": "fa-volume-up"
}, {
  "label": 'fa-warning',
  "value": "fa-warning"
}, {
  "label": 'fa-wechat',
  "value": "fa-wechat"
}, {
  "label": 'fa-weibo',
  "value": "fa-weibo"
}, {
  "label": 'fa-weixin',
  "value": "fa-weixin"
}, {
  "label": 'fa-whatsapp',
  "value": "fa-whatsapp"
}, {
  "label": 'fa-wheelchair',
  "value": "fa-wheelchair"
}, {
  "label": 'fa-wheelchair-alt',
  "value": "fa-wheelchair-alt"
}, {
  "label": 'fa-wifi',
  "value": "fa-wifi"
}, {
  "label": 'fa-wikipedia-w',
  "value": "fa-wikipedia-w"
}, {
  "label": 'fa-window-close',
  "value": "fa-window-close"
}, {
  "label": 'fa-window-close-o',
  "value": "fa-window-close-o"
}, {
  "label": 'fa-window-maximize',
  "value": "fa-window-maximize"
}, {
  "label": 'fa-window-minimize',
  "value": "fa-window-minimize"
}, {
  "label": 'fa-window-restore',
  "value": "fa-window-restore"
}, {
  "label": 'fa-windows',
  "value": "fa-windows"
}, {
  "label": 'fa-won',
  "value": "fa-won"
}, {
  "label": 'fa-wordpress',
  "value": "fa-wordpress"
}, {
  "label": 'fa-wpbeginner',
  "value": "fa-wpbeginner"
}, {
  "label": 'fa-wpexplorer',
  "value": "fa-wpexplorer"
}, {
  "label": 'fa-wpforms',
  "value": "fa-wpforms"
}, {
  "label": 'fa-wrench',
  "value": "fa-wrench"
}, {
  "label": 'fa-xing',
  "value": "fa-xing"
}, {
  "label": 'fa-xing-square',
  "value": "fa-xing-square"
}, {
  "label": 'fa-y-combinator',
  "value": "fa-y-combinator"
}, {
  "label": 'fa-y-combinator-square',
  "value": "fa-y-combinator-square"
}, {
  "label": 'fa-yahoo',
  "value": "fa-yahoo"
}, {
  "label": 'fa-yc',
  "value": "fa-yc"
}, {
  "label": 'fa-yc-square',
  "value": "fa-yc-square"
}, {
  "label": 'fa-yelp',
  "value": "fa-yelp"
}, {
  "label": 'fa-yen',
  "value": "fa-yen"
}, {
  "label": 'fa-yoast',
  "value": "fa-yoast"
}, {
  "label": 'fa-youtube',
  "value": "fa-youtube"
}, {
  "label": 'fa-youtube-play',
  "value": "fa-youtube-play"
}, {
  "label": 'fa-youtube-square',
  "value": "fa-youtube-square"
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fontIcons);

/***/ }),

/***/ "./src/blocks/md-icon-text/index.js":
/*!******************************************!*\
  !*** ./src/blocks/md-icon-text/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/md-icon-text/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/md-icon-text/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/md-icon-text/block.json");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/md-icon-text/style.scss");
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

/***/ "./src/blocks/md-icon-text/save.js":
/*!*****************************************!*\
  !*** ./src/blocks/md-icon-text/save.js ***!
  \*****************************************/
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
    logos,
    logosTitleColor,
    logosDescriptionColor,
    logoIconColor,
    showLogos,
    showLogosTitle,
    showLogosDescription,
    showLogosIcon,
    showLeftCounter,
    showRightCounter,
    leftCounterNumber,
    leftCounterTitle,
    leftCounterDescription,
    leftCounterNumberColor,
    leftCounterTitleColor,
    leftCounterDescriptionColor,
    rightCounterNumber,
    rightCounterTitle,
    rightCounterDescription,
    rightCounterNumberColor,
    rightCounterTitleColor,
    rightCounterDescriptionColor,
    yearOfExperience,
    yearOfExperienceText,
    yearOfExperienceColor,
    yearOfExperienceTextColor,
    yearOfExperienceBackgroundImage,
    showYearOfExperience,
    showYearOfExperienceBackgroundImage
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_icon_text"
  }, showLogos && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_icon_text__slider_wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_icon_text__slider"
  }, logos && logos.map(postObj => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: postObj.id,
    className: "logo-slide show-items-hover-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md-lithomd_icon_text__item-icon"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md-lithomd_icon_text__item-icon__wrapper"
  }, showLogosIcon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md-lithomd_icon_text__item-icon__wrapper-icon"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "fa " + postObj.icon,
    style: {
      color: logoIconColor
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md-lithomd_icon_text__item-icon__wrapper-text"
  }, showLogosTitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "h4",
    className: "image-title",
    value: postObj.iconTitle,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Image Title", "md-prime"),
    style: {
      color: logosTitleColor
    }
  }), showLogosDescription && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "p",
    className: "image-text",
    value: postObj.iconText,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Image Text", "md-prime"),
    style: {
      color: logosDescriptionColor
    }
  })))))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_icon_text__counter_wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_icon_text__counter"
  }, showLeftCounter && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "counter-item md_left_counter"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "counter-number"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "h4",
    className: "counter-number",
    value: leftCounterNumber,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("0+", "md-prime"),
    style: {
      color: leftCounterNumberColor
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "counter-title"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "h4",
    className: "counter-title",
    value: leftCounterTitle,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Counter Title", "md-prime"),
    style: {
      color: leftCounterTitleColor
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "counter-description"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "p",
    className: "counter-description",
    value: leftCounterDescription,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Counter Description", "md-prime"),
    style: {
      color: leftCounterDescriptionColor
    }
  }))), showYearOfExperience && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "counter-item md_year_of_experience"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "counter-number"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "span",
    className: "counter-number",
    value: yearOfExperience,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("20+", "md-prime"),
    style: {
      color: yearOfExperienceColor,
      backgroundImage: showYearOfExperienceBackgroundImage ? `url(${yearOfExperienceBackgroundImage})` : "none"
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "counter-title"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "h4",
    className: "counter-title",
    value: yearOfExperienceText,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Year of Experience Text", "md-prime"),
    style: {
      color: yearOfExperienceTextColor
    }
  }))), showRightCounter && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "counter-item md_right_counter"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "counter-number"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "h4",
    className: "counter-number",
    value: rightCounterNumber,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("0+", "md-prime"),
    style: {
      color: rightCounterNumberColor
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "counter-title"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "h4",
    className: "counter-title",
    value: rightCounterTitle,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Counter Title", "md-prime"),
    style: {
      color: rightCounterTitleColor
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "counter-description"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "p",
    className: "counter-description",
    value: rightCounterDescription,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Counter Description", "md-prime"),
    style: {
      color: rightCounterDescriptionColor
    }
  })))))));
}

/***/ }),

/***/ "./src/blocks/md-icon-text/style.scss":
/*!********************************************!*\
  !*** ./src/blocks/md-icon-text/style.scss ***!
  \********************************************/
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

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/blocks/md-icon-text/block.json":
/*!********************************************!*\
  !*** ./src/blocks/md-icon-text/block.json ***!
  \********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","name":"md-litho/md-icon-text","version":"0.1.0","title":"MD Icon Text","apiVersion":3,"category":"md-litho","icon":"star-filled","description":"A block to display a logo with text.","keywords":["md-litho","md-icon-text"],"supports":{"html":false},"textdomain":"md-litho","attributes":{"logos":{"type":"array","default":[]},"logosTitleColor":{"type":"string","default":""},"logosDescriptionColor":{"type":"string","default":""},"logoIconColor":{"type":"string","default":""},"showLogos":{"type":"boolean","default":true},"showLogosTitle":{"type":"boolean","default":true},"showLogosDescription":{"type":"boolean","default":true},"showLogosIcon":{"type":"boolean","default":true},"leftCounterNumber":{"type":"string","default":""},"leftCounterTitle":{"type":"string","default":""},"leftCounterDescription":{"type":"string","default":""},"leftCounterNumberColor":{"type":"string","default":""},"leftCounterTitleColor":{"type":"string","default":""},"leftCounterDescriptionColor":{"type":"string","default":""},"rightCounterNumber":{"type":"string","default":""},"rightCounterTitle":{"type":"string","default":""},"rightCounterDescription":{"type":"string","default":""},"rightCounterNumberColor":{"type":"string","default":""},"rightCounterTitleColor":{"type":"string","default":""},"rightCounterDescriptionColor":{"type":"string","default":""},"showLeftCounter":{"type":"boolean","default":true},"showRightCounter":{"type":"boolean","default":true},"yearOfExperience":{"type":"string","default":""},"yearOfExperienceText":{"type":"string","default":""},"yearOfExperienceColor":{"type":"string","default":""},"yearOfExperienceTextColor":{"type":"string","default":""},"yearOfExperienceBackgroundImage":{"type":"string","default":""},"showYearOfExperience":{"type":"boolean","default":true},"showYearOfExperienceBackgroundImage":{"type":"boolean","default":true},"enableOverlay":{"type":"boolean","default":false},"overlayColor":{"type":"string","default":""},"overlayOpacity":{"type":"number","default":0.5}},"editorScript":"file:./index.js","style":"file:./style-index.css"}');

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
/******/ 			"blocks/md-icon-text/index": 0,
/******/ 			"blocks/md-icon-text/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/md-icon-text/style-index"], () => (__webpack_require__("./src/blocks/md-icon-text/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map