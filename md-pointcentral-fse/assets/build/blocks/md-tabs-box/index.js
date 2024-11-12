/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/md-tabs-box/edit.js":
/*!****************************************!*\
  !*** ./src/blocks/md-tabs-box/edit.js ***!
  \****************************************/
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
/* harmony import */ var _placeholder_image_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./placeholder-image.png */ "./src/blocks/md-tabs-box/placeholder-image.png");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);

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
    tabItems,
    tabBackgroundColor,
    tabTextColor,
    tabActiveBackgroundColor,
    tabActiveTextColor,
    tabContentTitleColor,
    tabContentTextColor,
    tabContentButtonColor,
    showTabContentTitle,
    showTabContentText,
    showTabContentButton,
    showTabContentImage
  } = attributes;
  const [selectedTab, setSelectedTab] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)(0);
  const addStaticPostObj = () => {
    const staticPostObj = [...tabItems, {
      id: tabItems.length + 1,
      icon: "",
      title: "",
      tabInnerTitle: "",
      tabInnerContent: "",
      tabInnerButton: "",
      tabInnerImage: ""
    }];
    setAttributes({
      tabItems: staticPostObj
    });
  };
  const updateStaticPostObj = (index, key, value) => {
    const updatedStaticPostObj = [...tabItems];
    updatedStaticPostObj[index][key] = value;
    setAttributes({
      tabItems: updatedStaticPostObj
    });
  };
  const removeStaticPostObj = index => {
    const updatedStaticPostObj = [...tabItems];
    updatedStaticPostObj.splice(index, 1);
    if (selectedTab >= updatedStaticPostObj.length) {
      setSelectedTab(updatedStaticPostObj.length - 1); // Set to last slide if current is out of bounds
    }
    setAttributes({
      tabItems: updatedStaticPostObj
    });
  };
  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...tabItems];
    arrayCopy[oldIndex] = tabItems[newIndex];
    arrayCopy[newIndex] = tabItems[oldIndex];
    setAttributes({
      tabItems: arrayCopy
    });
  };
  const siteURL = window.location.origin;
  const activeTabStyle = {
    backgroundColor: tabActiveBackgroundColor,
    color: tabActiveTextColor
  };
  const inactiveTabStyle = {
    backgroundColor: tabBackgroundColor,
    color: tabTextColor
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
      className: "MD_Pointcentral_TabsBox"
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Toggle Settings", "md-prime"),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show Tab Content Title", "md-prime"),
    checked: showTabContentTitle,
    onChange: value => setAttributes({
      showTabContentTitle: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show Tab Content Text", "md-prime"),
    checked: showTabContentText,
    onChange: value => setAttributes({
      showTabContentText: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show Tab Content Button", "md-prime"),
    checked: showTabContentButton,
    onChange: value => setAttributes({
      showTabContentButton: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show Tab Content Image", "md-prime"),
    checked: showTabContentImage,
    onChange: value => setAttributes({
      showTabContentImage: value
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Color Settings", "md-prime"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Color Settings", "md-prime"),
    initialOpen: true,
    colorSettings: [{
      value: tabBackgroundColor,
      onChange: colorValue => setAttributes({
        tabBackgroundColor: colorValue
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Tab Background Color", "md-prime")
    }, {
      value: tabTextColor,
      onChange: colorValue => setAttributes({
        tabTextColor: colorValue
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Tab Text Color", "md-prime")
    }, {
      value: tabActiveBackgroundColor,
      onChange: colorValue => setAttributes({
        tabActiveBackgroundColor: colorValue
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Tab Active Background Color", "md-prime")
    }, {
      value: tabActiveTextColor,
      onChange: colorValue => setAttributes({
        tabActiveTextColor: colorValue
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Tab Active Text Color", "md-prime")
    }, {
      value: tabContentTitleColor,
      onChange: colorValue => setAttributes({
        tabContentTitleColor: colorValue
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Tab Content Title Color", "md-prime")
    }, {
      value: tabContentTextColor,
      onChange: colorValue => setAttributes({
        tabContentTextColor: colorValue
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Tab Content Text Color", "md-prime")
    }, {
      value: tabContentButtonColor,
      onChange: colorValue => setAttributes({
        tabContentButtonColor: colorValue
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Tab Content Button Color", "md-prime")
    }]
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pointcentral-tab-banner"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tab-list",
    style: {
      backgroundColor: "#0f5aa8"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tab-list-inner"
  }, tabItems && tabItems.map((postObj, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `tab-list-item show-items-hover-wrap ${index === selectedTab ? "active" : ""}`,
    "data-tab": index,
    key: index,
    role: "button",
    tabIndex: 0,
    "aria-label": `Tab ${index + 1}`
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
  })), index + 1 < tabItems.length && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
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
  }))), 1 < tabItems.length && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
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
        removeStaticPostObj(index);
      }
    },
    onKeyDown: e => {
      if (e.key === "Enter" || e.key === " ") {
        const toDelete =
        // eslint-disable-next-line no-alert
        confirm((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Are you sure you want to delete this item?", "md-prime"));
        if (toDelete) {
          removeStaticPostObj(index);
        }
      }
    },
    "aria-label": "Delete item"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md-tab-icon md-prime-block-control image-preview image-controle-visible-hover",
    style: index === selectedTab ? activeTabStyle : inactiveTabStyle,
    role: "tab",
    tabIndex: 0,
    "aria-selected": index === selectedTab,
    onClick: () => setSelectedTab(index),
    onKeyDown: e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault(); // Prevent default action for space key
        setSelectedTab(index); // Trigger the click handler
      }
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `image-controls small-icons icon-center-fixed`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => updateStaticPostObj(index, "icon", media.url),
    allowedTypes: ["image"],
    value: postObj.icon,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, postObj.icon ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
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
          updateStaticPostObj(index, "icon", "");
        }
      },
      role: "button",
      tabIndex: 0,
      onKeyDown: e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          updateStaticPostObj(index, "icon", "");
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
  }))), postObj.icon ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: postObj.icon,
    alt: "slider"
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: siteURL + _placeholder_image_png__WEBPACK_IMPORTED_MODULE_4__,
    alt: "slider"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "span",
    className: "tab-title",
    value: postObj.title,
    onChange: value => updateStaticPostObj(index, "title", value),
    placeholder: "Tab Title"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
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
  }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tab-content",
    style: {
      backgroundColor: "#f5f5f5"
    }
  }, selectedTab > -1 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tab-content-item active",
    "data-tab": "0"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tab-content-inner"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tab-content-left"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tab-content-left-inner"
  }, showTabContentTitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "h2",
    value: tabItems[selectedTab].tabInnerTitle,
    onChange: value => updateStaticPostObj(selectedTab, "tabInnerTitle", value),
    placeholder: "Tab Content Title",
    style: {
      color: tabContentTitleColor
    }
  }), showTabContentText && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "p",
    value: tabItems[selectedTab].tabInnerContent,
    onChange: value => updateStaticPostObj(selectedTab, "tabInnerContent", value),
    placeholder: "Tab Content Description",
    style: {
      color: tabContentTextColor
    }
  }), showTabContentButton && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "span",
    className: "tab-content-button",
    value: tabItems[selectedTab].tabInnerButton,
    onChange: value => updateStaticPostObj(selectedTab, "tabInnerButton", value),
    placeholder: "Button Text",
    style: {
      backgroundColor: tabContentButtonColor
    }
  }))), showTabContentImage && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tab-content-right"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md-prime-block-control image-preview image-controle-visible-hover"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `image-controls small-icons icon-center-fixed`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => updateStaticPostObj(selectedTab, "tabInnerImage", media.url),
    allowedTypes: ["image"],
    value: tabItems[selectedTab].tabInnerImage,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, tabItems[selectedTab].tabInnerImage ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
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
          updateStaticPostObj(selectedTab, "tabInnerImage", "");
        }
      },
      role: "button",
      tabIndex: 0,
      onKeyDown: e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          updateStaticPostObj(selectedTab, "tabInnerImage", "");
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
  }))), tabItems[selectedTab].tabInnerImage ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: tabItems[selectedTab].tabInnerImage,
    alt: "slider"
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: siteURL + _placeholder_image_png__WEBPACK_IMPORTED_MODULE_4__,
    alt: "slider"
  })))))))));
}

/***/ }),

/***/ "./src/blocks/md-tabs-box/index.js":
/*!*****************************************!*\
  !*** ./src/blocks/md-tabs-box/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/md-tabs-box/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/md-tabs-box/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/md-tabs-box/block.json");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/md-tabs-box/style.scss");
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

/***/ "./src/blocks/md-tabs-box/save.js":
/*!****************************************!*\
  !*** ./src/blocks/md-tabs-box/save.js ***!
  \****************************************/
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
    tabItems,
    tabBackgroundColor,
    tabTextColor,
    tabActiveBackgroundColor,
    tabActiveTextColor,
    tabContentTitleColor,
    tabContentTextColor,
    tabContentButtonColor,
    showTabContentTitle,
    showTabContentText,
    showTabContentButton,
    showTabContentImage
  } = attributes;
  const activeTabStyle = {
    backgroundColor: tabActiveBackgroundColor,
    color: tabActiveTextColor
  };
  const inactiveTabStyle = {
    backgroundColor: tabBackgroundColor,
    color: tabTextColor
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
      className: 'MD_Pointcentral_TabsBox'
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pointcentral-tab-banner"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md_container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tab-list",
    style: {
      backgroundColor: "#0f5aa8"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tab-list-inner"
  }, tabItems && tabItems.map((postObj, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `tab-list-item show-items-hover-wrap ${index === 0 ? "active" : ""}`,
    "data-tab": index,
    key: index,
    role: "button",
    tabIndex: 0,
    "aria-label": `Tab ${index + 1}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md-tab-icon md-prime-block-control image-preview image-controle-visible-hover",
    style: index === 0 ? activeTabStyle : inactiveTabStyle,
    role: "tab",
    tabIndex: 0
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `image-controls small-icons icon-center-fixed`
  }), postObj.icon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: postObj.icon,
    alt: "slider"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "span",
    className: "tab-title",
    value: postObj.title
  }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tab-content",
    style: {
      backgroundColor: "#f5f5f5"
    }
  }, tabItems && tabItems.map((postObj, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `tab-content-item ${index === 0 ? "active" : ""}`,
    key: index,
    "data-tab": index
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tab-content-inner"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tab-content-left"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tab-content-left-inner"
  }, showTabContentTitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "h2",
    value: postObj.tabInnerTitle,
    style: {
      color: tabContentTitleColor
    }
  }), showTabContentText && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "p",
    value: postObj.tabInnerContent,
    style: {
      color: tabContentTextColor
    }
  }), showTabContentButton && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "span",
    className: "tab-content-button",
    value: postObj.tabInnerButton,
    style: {
      backgroundColor: tabContentButtonColor
    }
  }))), showTabContentImage && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tab-content-right"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "md-prime-block-control image-preview image-controle-visible-hover"
  }, postObj.tabInnerImage && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: postObj.tabInnerImage,
    alt: "slider"
  }))))))))));
}

/***/ }),

/***/ "./src/blocks/md-tabs-box/style.scss":
/*!*******************************************!*\
  !*** ./src/blocks/md-tabs-box/style.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/md-tabs-box/placeholder-image.png":
/*!******************************************************!*\
  !*** ./src/blocks/md-tabs-box/placeholder-image.png ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/wp-content/themes/md-pointcentral-fse/assets/build/images/placeholder-image.2d0b00c1.png";

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

/***/ "./src/blocks/md-tabs-box/block.json":
/*!*******************************************!*\
  !*** ./src/blocks/md-tabs-box/block.json ***!
  \*******************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","name":"md-pointcentral-fse/md-tabs-box","version":"0.1.0","title":"MD Tabs Box","apiVersion":3,"category":"md-pointcentral-fse","icon":"index-card","description":"A block to display a box with tabs","keywords":["tabs","box"],"supports":{"html":false},"textdomain":"md-pointcentral-fse","attributes":{"tabItems":{"type":"array","default":[]},"tabBackgroundColor":{"type":"string","default":""},"tabTextColor":{"type":"string","default":""},"tabActiveBackgroundColor":{"type":"string","default":""},"tabActiveTextColor":{"type":"string","default":""},"tabContentTitleColor":{"type":"string","default":""},"tabContentTextColor":{"type":"string","default":""},"tabContentButtonColor":{"type":"string","default":""},"showTabContentTitle":{"type":"boolean","default":true},"showTabContentText":{"type":"boolean","default":true},"showTabContentButton":{"type":"boolean","default":true},"showTabContentImage":{"type":"boolean","default":true}},"editorScript":"file:./index.js","style":"file:./style-index.css"}');

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
/******/ 			"blocks/md-tabs-box/index": 0,
/******/ 			"blocks/md-tabs-box/style-index": 0
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkmd_pointcentral_fse"] = self["webpackChunkmd_pointcentral_fse"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/md-tabs-box/style-index"], () => (__webpack_require__("./src/blocks/md-tabs-box/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map