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

/***/ "./src/blocks/md-leadership/edit.js":
/*!******************************************!*\
  !*** ./src/blocks/md-leadership/edit.js ***!
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
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _placeholder_image_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./placeholder-image.jpeg */ "./src/blocks/md-leadership/placeholder-image.jpeg");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common */ "./src/blocks/common.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/md-leadership/editor.scss");

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




const siteURL = window.location.origin;
function Edit({
  attributes,
  setAttributes
}) {
  const {
    heading,
    leadersRoles,
    bgcolor,
    headingcolor,
    authornamecolor,
    authortitlecolor,
    displayAuthorname,
    displayAuthortitle
  } = attributes;
  const [currentRole, setCurrentRole] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
  const leadersAttr = {
    leadershipName: "",
    leadershipTitle: "",
    leadershipHeadshot: "",
    leadershipBio: "",
    popup: false
  };
  const leadersRolesAttr = {
    leadershipRole: "",
    leaders: [leadersAttr]
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (0 === leadersRoles.length) {
      initList();
    }
  }, []);
  const initList = () => {
    setAttributes({
      leadersRoles: [...leadersRoles, leadersRolesAttr]
    });
  };
  const addNewItem = () => {
    setAttributes({
      leadersRoles: [...leadersRoles, leadersRolesAttr],
      uniqueId: Math.random()
    });
  };
  const addNewLeader = index => {
    const updatedleaders = [...leadersRoles];
    updatedleaders[index].leaders = [...updatedleaders[index].leaders, leadersAttr];
    setAttributes({
      leadersRoles: updatedleaders
    });
  };
  const moveItem = (roleIndex, oldIndex, newIndex) => {
    const arrayRoleCopy = [...leadersRoles];
    const arrayCopy = arrayRoleCopy[roleIndex].leaders;
    const leadersCopy = arrayCopy;
    const item = leadersCopy[oldIndex];
    const updatedArray = arrayCopy.filter((itemObj, itemIndex) => {
      return itemIndex !== oldIndex;
    });
    updatedArray.splice(newIndex, 0, item);
    arrayRoleCopy[roleIndex].leaders = updatedArray;
    setAttributes({
      leadersRoles: arrayRoleCopy
    });
  };
  const leadersPopup = index => {
    const currentLeader = leadersRoles[currentRole].leaders[index];
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `leader_role_popup__wrap ${currentLeader.popup ? "show-popup" : ""}`,
      key: index
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "leader_role_popup__inner"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "leader_role_popup__inner-header"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: "dashicons dashicons-no-alt close-popup",
      onClick: () => {
        const updatedleaders = [...leadersRoles];
        updatedleaders[currentRole].leaders[index].popup = false;
        setAttributes({
          leadersRoles: updatedleaders
        });
      },
      role: "button",
      tabIndex: 0,
      "aria-label": "Close popup",
      onKeyDown: event => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          // Trigger the click event when Enter or Space key is pressed
          event.target.click();
        }
      }
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "leader_role_popup__inner-content"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "leader_role_popup__inner-content-heading"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "leader_role_popup__inner-content-img-wrap"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUpload, {
      onSelect: leadershipHeadshot => {
        const copyData = [...leadersRoles];
        copyData[currentRole].leaders[index].leadershipHeadshot = leadershipHeadshot.sizes.full.url;
        setAttributes({
          leadersRoles: copyData
        });
      },
      allowedTypes: ["image"],
      value: currentLeader.leadershipHeadshot,
      render: ({
        open
      }) => !currentLeader.leadershipHeadshot ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        className: currentLeader.leadershipHeadshot ? "image-button " : " button-large",
        onClick: open
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        className: "components-button button button-large"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
        className: "fa fa-upload"
      }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Update Image", "md-prime"))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        className: currentLeader.leadershipHeadshot ? "image-button " : " button-large",
        onClick: open
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        className: "components-button button button-large"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
        className: "fa fa-pencil"
      }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Update Image", "md-prime")))
    }), currentLeader.leadershipHeadshot ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: currentLeader.leadershipHeadshot,
      alt: "Leadership",
      className: "author-img"
    }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: siteURL + _placeholder_image_jpeg__WEBPACK_IMPORTED_MODULE_5__,
      alt: "placeholder img",
      className: "author-img"
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "leader_role_popup__inner-content-heading-text"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
      tagName: "h3",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Name"),
      value: currentLeader.leadershipName,
      keepPlaceholderOnFocus: "true",
      className: "leadershipName",
      style: authornamecolor ? {
        color: authornamecolor
      } : {},
      onChange: leadershipName => {
        const newObject = Object.assign({}, currentLeader, {
          leadershipName
        });
        const blockDetails = [...leadersRoles[currentRole].leaders];
        blockDetails[index] = newObject;
        const updatedRoles = [...leadersRoles];
        updatedRoles[currentRole].leaders = blockDetails;
        setAttributes({
          leadersRoles: updatedRoles
        });
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
      tagName: "p",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Position"),
      value: currentLeader.leadershipTitle,
      className: "leadershipTitle",
      keepPlaceholderOnFocus: "true",
      style: authortitlecolor ? {
        color: authortitlecolor
      } : {},
      onChange: leadershipTitle => {
        const newObject = Object.assign({}, currentLeader, {
          leadershipTitle
        });
        const blockDetails = [...leadersRoles[currentRole].leaders];
        blockDetails[index] = newObject;
        const updatedRoles = [...leadersRoles];
        updatedRoles[currentRole].leaders = blockDetails;
        setAttributes({
          leadersRoles: updatedRoles
        });
      }
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "leader_role_popup__inner-content-text"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
      tagName: "p",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Bio"),
      value: currentLeader.leadershipBio,
      className: "leadershipBio",
      keepPlaceholderOnFocus: "true",
      onChange: leadershipBio => {
        const newObject = Object.assign({}, currentLeader, {
          leadershipBio
        });
        const blockDetails = [...leadersRoles[currentRole].leaders];
        blockDetails[index] = newObject;
        const updatedRoles = [...leadersRoles];
        updatedRoles[currentRole].leaders = blockDetails;
        setAttributes({
          leadersRoles: updatedRoles
        });
      }
    })))));
  };
  const itemList = leadersRoles[currentRole].leaders.map((leader, leaderIndex) => {
    const index = currentRole;
    const product = leadersRoles[index];
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "leadership__author__box-item show-items-hover-wrap",
      key: leaderIndex
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "item-action-wrap show-items-hover small-icons"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "move-item"
    }, 0 < leaderIndex && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Move Left", "md-prime")
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "dashicons dashicons-arrow-left-alt move-up",
      onClick: () => moveItem(index, leaderIndex, leaderIndex - 1),
      onKeyDown: event => {
        if (event.key === "Enter" || event.key === " ") {
          moveItem(index, leaderIndex, leaderIndex - 1);
        }
      },
      role: "button",
      tabIndex: 0,
      "aria-label": "Move item left"
    })), leaderIndex + 1 < product.leaders.length && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Move Right", "md-prime")
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "dashicons dashicons-arrow-right-alt move-down",
      onClick: () => moveItem(index, leaderIndex, leaderIndex + 1),
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
    }))), 1 < product.leaders.length && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Remove Item", "md-prime")
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: "remove-item dashicons dashicons-no-alt",
      onClick: () => {
        const toDelete =
        // eslint-disable-next-line no-alert
        confirm((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Are you sure you want to remove this item?", "md-prime"));
        if (toDelete === true) {
          const updatedleaders = product.leaders.filter((item, itemIndex) => itemIndex !== leaderIndex);
          const updatedRoles = [...leadersRoles];
          updatedRoles[index].leaders = updatedleaders;
          setAttributes({
            leadersRoles: updatedRoles
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
      className: "leadership__author__box-item-inner"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "leadership__author__box-item-inner-img"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUpload, {
      onSelect: leadershipHeadshot => {
        const copyData = [...leadersRoles];
        copyData[index].leaders[leaderIndex].leadershipHeadshot = leadershipHeadshot.sizes.full.url;
        setAttributes({
          leadersRoles: copyData
        });
      },
      allowedTypes: ["image"],
      value: leader.leadershipHeadshot,
      render: ({
        open
      }) => !leader.leadershipHeadshot ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        className: leader.leadershipHeadshot ? "image-button " : " button-large",
        onClick: open
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        className: "components-button button button-large"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
        className: "fa fa-upload"
      }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Update Image", "md-prime"))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        className: leader.leadershipHeadshot ? "image-button " : " button-large",
        onClick: open
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        className: "components-button button button-large"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
        className: "fa fa-pencil"
      }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Update Image", "md-prime")))
    }), leader.leadershipHeadshot ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: leader.leadershipHeadshot,
      alt: "Leadership",
      className: "author-img"
    }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: siteURL + _placeholder_image_jpeg__WEBPACK_IMPORTED_MODULE_5__,
      alt: "placeholder img",
      className: "author-img"
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "leadership__author__box-item-inner-content"
    }, displayAuthorname && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
      tagName: "h3",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Name"),
      value: leader.leadershipName,
      keepPlaceholderOnFocus: "true",
      className: "leadershipName",
      style: authornamecolor ? {
        color: authornamecolor
      } : {},
      onChange: leadershipName => {
        const newObject = Object.assign({}, leader, {
          leadershipName
        });
        const blockDetails = [...product.leaders];
        blockDetails[leaderIndex] = newObject;
        const updatedRoles = [...leadersRoles];
        updatedRoles[index].leaders = blockDetails;
      }
    }), displayAuthortitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
      tagName: "p",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Position"),
      value: leader.leadershipTitle,
      className: "leadershipTitle",
      keepPlaceholderOnFocus: "true",
      style: authortitlecolor ? {
        color: authortitlecolor
      } : {},
      onChange: leadershipTitle => {
        const newObject = Object.assign({}, leader, {
          leadershipTitle
        });
        const blockDetails = [...product.leaders];
        blockDetails[leaderIndex] = newObject;
        const updatedRoles = [...leadersRoles];
        updatedRoles[index].leaders = blockDetails;
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", {
      className: "about-popup",
      onClick: () => {
        const updatedleaders = [...leadersRoles];
        updatedleaders[index].leaders[leaderIndex].popup = true;
        setAttributes({
          leadersRoles: updatedleaders
        });
      },
      role: "button",
      tabIndex: 0,
      "aria-label": "Open popup",
      onKeyDown: event => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          // Trigger the click event when Enter or Space key is pressed
          event.target.click();
        }
      }
    }, "Edit Bio", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: "fa fa-pencil-square-o"
    })))));
  });
  const rolesList = leadersRoles.map((role, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `leadership__roles__box-item show-items-hover-wrap ${index === currentRole ? "active" : ""}`,
      key: index
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "item-action-wrap show-items-hover small-icons"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "move-item"
    }, 0 < index && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Move Left", "md-prime")
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "dashicons dashicons-arrow-left-alt move-up",
      onClick: () => {
        const updatedRoles = [...leadersRoles];
        const item = updatedRoles[index];
        updatedRoles.splice(index, 1);
        updatedRoles.splice(index - 1, 0, item);
        setAttributes({
          leadersRoles: updatedRoles
        });
      },
      role: "button",
      tabIndex: 0,
      "aria-label": "Move item left",
      onKeyDown: event => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          // Trigger the click event when Enter or Space key is pressed
          event.target.click();
        }
      }
    })), index + 1 < leadersRoles.length && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Move Right", "md-prime")
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "dashicons dashicons-arrow-right-alt move-down",
      onClick: () => {
        const updatedRoles = [...leadersRoles];
        const item = updatedRoles[index];
        updatedRoles.splice(index, 1);
        updatedRoles.splice(index + 1, 0, item);
        setAttributes({
          leadersRoles: updatedRoles
        });
      },
      role: "button",
      tabIndex: 0,
      "aria-label": "Move item right",
      onKeyDown: event => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          // Trigger the click event when Enter or Space key is pressed
          event.target.click();
        }
      }
    }))), 1 < leadersRoles.length && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Remove Item", "md-prime")
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: "remove-item dashicons dashicons-no-alt",
      onClick: () => {
        const toDelete =
        // eslint-disable-next-line no-alert
        confirm((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Are you sure you want to remove this item?", "md-prime"));
        if (toDelete === true) {
          const updatedRoles = leadersRoles.filter((item, itemIndex) => itemIndex !== index);
          setAttributes({
            leadersRoles: updatedRoles
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
      className: "leadership__roles__box-item-inner"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
      tagName: "h3",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Role"),
      value: role.leadershipRole,
      keepPlaceholderOnFocus: "true",
      className: "leadershipRole",
      onClick: () => {
        setCurrentRole(index);
      },
      onChange: leadershipRole => {
        const newObject = Object.assign({}, role, {
          leadershipRole
        });
        const blockDetails = [...leadersRoles];
        blockDetails[index] = newObject;
        setAttributes({
          leadersRoles: blockDetails
        });
      }
    })));
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
    title: "Visibility Settings"
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
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "leadership"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "leadership__header",
    style: bgcolor ? {
      background: bgcolor
    } : {}
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
    tagName: "h2",
    value: heading,
    className: "leadership__header-heading",
    onChange: value => setAttributes({
      heading: value
    }),
    placeholder: "Leadership",
    style: headingcolor ? {
      color: headingcolor
    } : {}
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "leadership__roles"
  }, rolesList), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "add-item-wrap",
    onClick: () => {
      addNewItem();
    },
    role: "button",
    tabIndex: 0,
    "aria-label": "Add new role",
    onKeyDown: event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        addNewItem();
      }
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Add New Role", "md-prime")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    onClick: () => {
      setAttributes({
        leadersRoles: [...leadersRoles, {
          leadershipRole: ""
        }]
      });
    },
    onKeyDown: event => {
      if (event.key === "Enter" || event.key === " ") {
        setAttributes({
          leadersRoles: [...leadersRoles, {
            leadershipRole: ""
          }]
        });
      }
    },
    role: "button",
    tabIndex: 0,
    "aria-label": "Add new role",
    className: "add-new-item dashicons dashicons-plus"
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "box-main leadership__author__box"
  }, itemList), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "leader_role_popup"
  }, leadersRoles[currentRole].leaders.map((leader, index) => {
    return leadersPopup(index);
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "add-item-wrap",
    onClick: () => {
      addNewLeader(currentRole);
    },
    role: "button",
    tabIndex: 0,
    "aria-label": "Add new item",
    onKeyDown: event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        addNewLeader(currentRole);
      }
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Add New Item", "md-prime")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    role: "button",
    tabIndex: 0,
    "aria-label": "Add new product",
    className: "add-new-item dashicons dashicons-plus"
  })))))));
}

/***/ }),

/***/ "./src/blocks/md-leadership/index.js":
/*!*******************************************!*\
  !*** ./src/blocks/md-leadership/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/md-leadership/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/md-leadership/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/md-leadership/block.json");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/md-leadership/style.scss");
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

/***/ "./src/blocks/md-leadership/save.js":
/*!******************************************!*\
  !*** ./src/blocks/md-leadership/save.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {null} No element to render.
 */

function save() {
  return null;
}

/***/ }),

/***/ "./src/blocks/md-leadership/editor.scss":
/*!**********************************************!*\
  !*** ./src/blocks/md-leadership/editor.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/md-leadership/style.scss":
/*!*********************************************!*\
  !*** ./src/blocks/md-leadership/style.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/md-leadership/placeholder-image.jpeg":
/*!*********************************************************!*\
  !*** ./src/blocks/md-leadership/placeholder-image.jpeg ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "/wp-content/themes/md-woodward/assets/build/images/placeholder-image.db2b4d5c.jpeg";

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

/***/ "./src/blocks/md-leadership/block.json":
/*!*********************************************!*\
  !*** ./src/blocks/md-leadership/block.json ***!
  \*********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","name":"md-woodward/md-leadership","version":"0.1.0","apiVersion":3,"title":"MD Leadership","category":"md-woodward","icon":"dashicons dashicons-admin-users","description":"A block to display leadership team","keywords":["Team","Leader"],"attributes":{"heading":{"type":"string","default":"Leadership"},"leadersRoles":{"type":"array","default":[]},"bgcolor":{"type":"string"},"authornamecolor":{"type":"string"},"authortitlecolor":{"type":"string"},"headingcolor":{"type":"string"},"displayAuthorname":{"type":"boolean","default":true},"displayAuthortitle":{"type":"boolean","default":true}},"supports":{"html":false,"align":["wide","full"]},"textdomain":"md-woodward","editorScript":"file:./index.js","viewScript":["file:./view.js"],"editorStyle":"file:./index.css","style":"file:./style-index.css"}');

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
/******/ 			"blocks/md-leadership/index": 0,
/******/ 			"blocks/md-leadership/style-index": 0
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkmd_woodward"] = self["webpackChunkmd_woodward"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/md-leadership/style-index"], () => (__webpack_require__("./src/blocks/md-leadership/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map