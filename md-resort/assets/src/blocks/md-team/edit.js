/* eslint-disable react-hooks/exhaustive-deps */
import { __ } from "@wordpress/i18n";

import { useEffect } from "@wordpress/element";

/**
 * React hook that is used to mark the components element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/
 */
import {
  Button,
  PanelBody,
  PanelRow,
  FormToggle,
  TextControl,
  Tooltip,
  SelectControl,
} from "@wordpress/components";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {
  RichText,
  MediaUpload,
  InspectorControls,
  PanelColorSettings,
  useBlockProps,
} from "@wordpress/block-editor";

import defaultImage from "./placeholder-image.jpeg";
import { mdprimeColors } from "../common";
import "./editor.scss";

import fontIcons from "./fontIcons";

export default function Edit({ attributes, setAttributes }) {
  const {
    products,
    heading,
    bgcolor,
    headingcolor,
    authornamecolor,
    authortitlecolor,
    teamheading,
    teamheadinginner,
    button,
    callToAction,
    displayAuthorname,
    displayAuthortitle,
    displayTeamHeading,
    displaySocialIcon,
    displayBio,
  } = attributes;

  const siteURL = window.location.origin;

  useEffect(() => {
    if (0 === products.length) {
      initList();
    }
  }, []);

  const initList = () => {
    setAttributes({
      products: [
        ...products,
        {
          leadershipName: "",
          leadershipTitle: "",
          leadershipHeadshot: "",
          leadershipBio: "",
          leaderlink: "",
          leaderlinkIcon: "fa fa-linkedin",
          popup: false,
        },
      ],
    });
  };

  const addNewItem = () => {
    const attr = {
      leadershipName: "",
      leadershipTitle: "",
      leadershipHeadshot: "",
      leadershipBio: "",
      leaderlink: "",
      popup: false,
    };
    setAttributes({
      products: [...products, attr],
      uniqueId: Math.random(),
    });
  };

  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...products];
    arrayCopy[oldIndex] = products[newIndex];
    arrayCopy[newIndex] = products[oldIndex];

    setAttributes({
      products: arrayCopy,
    });
  };

  const itemList = products.map((product, index) => {
    return (
      <div
        className=" leadership__author__box-item show-items-hover-wrap"
        key={index}
      >
        <div className="item-action-wrap show-items-hover small-icons">
          <div className="move-item">
            {0 < index && (
              <Tooltip text={__("Move Left", "md-prime")}>
                <span
                  className="dashicons dashicons-arrow-left-alt move-up"
                  onClick={() => moveItem(index, index - 1)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      moveItem(index, index - 1);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label="Move item left"
                ></span>
              </Tooltip>
            )}
            {index + 1 < products.length && (
              <Tooltip text={__("Move Right", "md-prime")}>
                <span
                  className="dashicons dashicons-arrow-right-alt move-down"
                  onClick={() => moveItem(index, index + 1)}
                  role="button"
                  tabIndex={0}
                  aria-label="Move item down"
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      // Simulate the click event on Enter or Space key
                      event.target.click();
                    }
                  }}
                ></span>
              </Tooltip>
            )}
          </div>
          {1 < products.length && (
            <Tooltip text={__("Remove Item", "md-prime")}>
              <i
                className="remove-item dashicons dashicons-no-alt"
                onClick={() => {
                  const toDelete =
                    // eslint-disable-next-line no-alert
                    confirm(
                      __(
                        "Are you sure you want to remove this item?",
                        "md-prime"
                      )
                    );
                  if (toDelete === true) {
                    const updatedProducts = products.filter(
                      (item, itemIndex) => itemIndex !== index
                    );

                    setAttributes({
                      products: updatedProducts,
                    });
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label="Remove item"
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    // Simulate the click event on Enter or Space key
                    event.target.click();
                  }
                }}
              ></i>
            </Tooltip>
          )}
        </div>
        <div className=" leadership__author__box-item-inner">
          <div className="leadership__author__box-item-inner-img">
            <MediaUpload
              onSelect={(leadershipHeadshot) => {
                const copyData = [...products];
                copyData[index].leadershipHeadshot =
                  leadershipHeadshot.sizes.full.url;
                setAttributes({
                  products: copyData,
                });
              }}
              allowedTypes={["image"]}
              value={product.leadershipHeadshot}
              render={({ open }) =>
                !product.leadershipHeadshot ? (
                  <Button
                    className={
                      product.leadershipHeadshot
                        ? "image-button "
                        : " button-large"
                    }
                    onClick={open}
                  >
                    <p className="components-button button button-large">
                      <i className="fa fa-upload"></i>
                      {__("Update Image", "md-prime")}
                    </p>
                  </Button>
                ) : (
                  <Button
                    className={
                      product.leadershipHeadshot
                        ? "image-button "
                        : " button-large"
                    }
                    onClick={open}
                  >
                    <p className="components-button button button-large">
                      <i className="fa fa-pencil"></i>
                      {__("Update Image", "md-prime")}
                    </p>
                  </Button>
                )
              }
            />

            {product.leadershipHeadshot ? (
              <img
                src={product.leadershipHeadshot}
                alt="Leadership"
                className="author-img"
              />
            ) : (
              <img
                src={siteURL + defaultImage}
                alt="placeholder img"
                className="author-img"
              />
            )}
            {displaySocialIcon && (
              <div className="link">
                <TextControl
                  placeholder="Linked-in Link"
                  type="string"
                  value={product.leaderlink}
                  onChange={(leaderlink) => {
                    const newObject = Object.assign({}, product, {
                      leaderlink,
                    });
                    const blockDetails = [...products];
                    blockDetails[index] = newObject;
                    setAttributes({
                      products: blockDetails,
                    });
                  }}
                />
                <div className="md_resort_features_list_item_icon">
                  <label htmlFor={`select-icon-${index}`}>
                    {__("Select Icon")}
                  </label>
                  <SelectControl
                    id={`select-icon-${index}`}
                    closeMenuOnSelect={false}
                    value={product.leaderlinkIcon}
                    options={fontIcons}
                    onChange={(value) => {
                      const newObject = Object.assign({}, product, {
                        leaderlinkIcon: value,
                      });
                      const blockDetails = [...products];
                      blockDetails[index] = newObject;
                      setAttributes({
                        products: blockDetails,
                      });
                    }}
                  />
                </div>
                <a href={product.leaderlink} target="_blank" rel="noreferrer">
                  <i className={"fa " + product.leaderlinkIcon}></i>
                </a>
              </div>
            )}
          </div>
          <div className="leadership__author__box-item-inner-content">
            {displayAuthorname && (
              <RichText
                tagName="h3"
                placeholder={__("Name")}
                value={product.leadershipName}
                keepPlaceholderOnFocus="true"
                className="leadershipName"
                style={
                  authornamecolor
                    ? {
                        color: authornamecolor,
                      }
                    : {}
                }
                onChange={(leadershipName) => {
                  const newObject = Object.assign({}, product, {
                    leadershipName,
                  });
                  const blockDetails = [...products];
                  blockDetails[index] = newObject;
                  setAttributes({
                    products: blockDetails,
                  });
                }}
              />
            )}
            {displayAuthortitle && (
              <RichText
                tagName="p"
                placeholder={__("Position")}
                value={product.leadershipTitle}
                className="leadershipTitle"
                keepPlaceholderOnFocus="true"
                style={
                  authortitlecolor
                    ? {
                        color: authortitlecolor,
                      }
                    : {}
                }
                onChange={(leadershipTitle) => {
                  const newObject = Object.assign({}, product, {
                    leadershipTitle,
                  });
                  const blockDetails = [...products];
                  blockDetails[index] = newObject;
                  setAttributes({
                    products: blockDetails,
                  });
                }}
              />
            )}
            {displayBio && (
              <>
                <strong
                  className="about-popup"
                  onClick={() => {
                    const updatedProducts = [...products];
                    updatedProducts[index].popup = true;
                    setAttributes({
                      products: updatedProducts,
                    });
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label="Open popup"
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      // Trigger the click event when Enter or Space key is pressed
                      event.target.click();
                    }
                  }}
                >
                  Edit Bio
                  <i className="fa fa-pencil-square-o"></i>
                </strong>
                <div
                  className={`leadership__popup-model ${
                    product.popup ? "open-popup" : ""
                  }`}
                >
                  <div className=" leadership__popup-model-content">
                    <div className="leadership__popup-model-header">
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                        onClick={() => {
                          const tempProdcut = [...products];
                          tempProdcut[index].popup = false;
                          setAttributes({
                            products: tempProdcut,
                          });
                        }}
                      >
                        <span aria-hidden="true">X</span>
                      </button>
                    </div>

                    <div className="leadership__popup-model-body">
                      <div className="leadership__popup-model-author-details-main">
                        <div className="leadership__popup-model-author-details-main-img-section">
                          {product.leadershipHeadshot ? (
                            <figure>
                              <img
                                src={product.leadershipHeadshot}
                                alt="First img"
                                className="author-img"
                              />
                            </figure>
                          ) : (
                            <figure>
                              <img
                                src={siteURL + defaultImage}
                                className="author-img"
                                alt="placeholder img"
                              />
                            </figure>
                          )}

                          {displaySocialIcon && (
                            <div className="linked-in-icon">
                              <a href={product.leaderlink}>
                                <i className={product.leaderlinkIcon}></i>
                              </a>
                            </div>
                          )}
                        </div>
                        <div className="leadership__popup-model-author-details-box">
                          {displayAuthorname && (
                            <RichText
                              value={product.leadershipName}
                              onChange={(leadershipName) => {
                                const newObject = Object.assign({}, product, {
                                  leadershipName,
                                });
                                const blockDetails = [...products];
                                blockDetails[index] = newObject;
                                setAttributes({
                                  products: blockDetails,
                                });
                              }}
                              className="leadershipName"
                            />
                          )}
                          {displayAuthortitle && (
                            <RichText
                              value={product.leadershipTitle}
                              className="leadershipTitle"
                              onChange={(leadershipTitle) => {
                                const newObject = Object.assign({}, product, {
                                  leadershipTitle,
                                });
                                const blockDetails = [...products];
                                blockDetails[index] = newObject;
                                setAttributes({
                                  products: blockDetails,
                                });
                              }}
                            />
                          )}
                        </div>
                      </div>

                      <div className="leadership__popup-model-about-author-box">
                        <strong className="about-head">About</strong>
                        <RichText
                          tagName="p"
                          className="leadershipBio"
                          placeholder={__("Leadership Bio")}
                          value={product.leadershipBio}
                          keepPlaceholderOnFocus="true"
                          onChange={(leadershipBio) => {
                            const newObject = Object.assign({}, product, {
                              leadershipBio,
                            });
                            const blockDetails = [...products];
                            blockDetails[index] = newObject;
                            setAttributes({
                              products: blockDetails,
                            });
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg_overlay"
                  onClick={() => {
                    const updatedProducts = [...products];
                    updatedProducts[index].popup = false;
                    setAttributes({
                      products: updatedProducts,
                    });
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label="Close popup overlay"
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      event.target.click();
                    }
                  }}
                ></div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <InspectorControls>
        <PanelColorSettings
          title={__("Color Settings")}
          colorSettings={[
            {
              value: headingcolor,
              onChange: (newColor) => {
                setAttributes({ headingcolor: newColor });
              },
              label: __("Heading Color"),
              mdprimeColors,
            },
            {
              value: authornamecolor,
              onChange: (newColor) => {
                setAttributes({
                  authornamecolor: newColor,
                });
              },
              label: __("Team member name color"),
              mdprimeColors,
            },
            {
              value: authortitlecolor,
              onChange: (newColor) => {
                setAttributes({
                  authortitlecolor: newColor,
                });
              },
              label: __("Team member Position color"),
              mdprimeColors,
            },
            {
              value: bgcolor,
              onChange: (newColor) => {
                setAttributes({ bgcolor: newColor });
              },
              label: __("Heading background color"),
              mdprimeColors,
            },
          ]}
        />

        <PanelBody title="Visibility Settings" initialOpen={false}>
          <PanelRow>
            <label htmlFor="display settings">
              {__("Name Visibility", "md-prime")}
            </label>
            <FormToggle
              checked={displayAuthorname}
              onChange={() =>
                setAttributes({
                  displayAuthorname: !displayAuthorname,
                })
              }
            />
          </PanelRow>
          <PanelRow>
            <label htmlFor="display settings">
              {__("Position Visibility", "md-prime")}
            </label>
            <FormToggle
              checked={displayAuthortitle}
              onChange={() =>
                setAttributes({
                  displayAuthortitle: !displayAuthortitle,
                })
              }
            />
          </PanelRow>
          <PanelRow>
            <label htmlFor="display settings">
              {__("SocialIcon Icon Visibility", "md-prime")}
            </label>
            <FormToggle
              checked={displaySocialIcon}
              onChange={() =>
                setAttributes({
                  displaySocialIcon: !displaySocialIcon,
                })
              }
            />
          </PanelRow>
          <PanelRow>
            <label htmlFor="display settings">
              {__("CTA Heading Visibility", "md-prime")}
            </label>
            <FormToggle
              checked={displayTeamHeading}
              onChange={() =>
                setAttributes({
                  displayTeamHeading: !displayTeamHeading,
                })
              }
            />
          </PanelRow>
          <PanelRow>
            <label htmlFor="display settings">
              {__("CTA Button Visibility", "md-prime")}
            </label>
            <FormToggle
              checked={callToAction}
              onChange={() =>
                setAttributes({
                  callToAction: !callToAction,
                })
              }
            />
          </PanelRow>
          <PanelRow>
            <label htmlFor="display settings">
              {__("Bio Visibility", "md-prime")}
            </label>
            <FormToggle
              checked={displayBio}
              onChange={() =>
                setAttributes({
                  displayBio: !displayBio,
                })
              }
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <div {...useBlockProps()}>
        <div className="leadership">
          <div
            className="leadership__header"
            style={bgcolor ? { background: bgcolor } : {}}
          >
            <RichText
              tagName="h2"
              value={heading}
              className="leadership__header-heading"
              onChange={(value) => setAttributes({ heading: value })}
              placeholder="Leadership"
              style={
                headingcolor
                  ? {
                      color: headingcolor,
                    }
                  : {}
              }
            />
          </div>
          <div className="container">
            <div className="box-main leadership__author__box">
              {itemList}
              <div
                className="add-item-wrap"
                onClick={() => {
                  addNewItem();
                }}
                role="button"
                tabIndex={0}
                aria-label="Add new item"
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    addNewItem();
                  }
                }}
              >
                <Tooltip text={__("Add New Item", "md-prime")}>
                  <i
                    onClick={() => {
                      setAttributes({
                        products: [
                          ...products,
                          {
                            leadershipName: "",
                            leadershipTitle: "",
                            leadershipHeadshot: "",
                            leadershipBio: "",
                            leaderlink: "",
                            popup: false,
                          },
                        ],
                      });
                    }}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        setAttributes({
                          products: [
                            ...products,
                            {
                              leadershipName: "",
                              leadershipTitle: "",
                              leadershipHeadshot: "",
                              leadershipBio: "",
                              leaderlink: "",
                              popup: false,
                            },
                          ],
                        });
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label="Add new product"
                    className="add-new-item dashicons dashicons-plus"
                  ></i>
                </Tooltip>
              </div>
            </div>
            <div className="leadership__join-team">
              {displayTeamHeading && (
                <RichText
                  tagName="h4"
                  value={teamheading}
                  className="leadership__join-team__heading"
                  onChange={(value) => setAttributes({ teamheading: value })}
                  placeholder="Want to work with us"
                />
              )}
              {displayTeamHeading && (
                <RichText
                  tagName="span"
                  value={teamheadinginner}
                  className="leadership__join-team__heading-span"
                  onChange={(value) =>
                    setAttributes({
                      teamheadinginner: value,
                    })
                  }
                  placeholder="Join our growing team"
                />
              )}

              {callToAction && (
                <div className="sbtn sbtn-arrow-primary">
                  <RichText
                    tagName="span"
                    value={button}
                    className="btn-main"
                    onChange={(value) => setAttributes({ button: value })}
                    placeholder="Request a Demo"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
