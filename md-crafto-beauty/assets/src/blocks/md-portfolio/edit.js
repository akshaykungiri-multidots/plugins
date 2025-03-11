/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {
  useBlockProps,
  RichText,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  PanelColorSettings,
} from "@wordpress/block-editor";

import { Fragment, useState } from "@wordpress/element";

import {
  PanelBody,
  Button,
  ToggleControl,
  Tooltip,
  RangeControl,
  SelectControl,
  GradientPicker,
  TextControl,
} from "@wordpress/components";

import placeholder from "./placeholder-image.png";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
  const {
    subheading,
    heading,
    showSubheading,
    showHeading,
    subheadingColor,
    headingColor,
    numberOfPortfolioItemsPerRow,
    portfolioItems,
    showZoomIcon,
    showLinkIcon,
    portfolioTitleColor,
    backgroundHoverColor,
    enableFooter,
    footerText,
    footerButton,
    footerTextColor,
    showFooterButton,
    footerButtonColor,
    footerButtonBackgroundColor,
    footerButtonHoverColor,
    footerButtonHoverBackgroundColor,
  } = attributes;

  const siteURL = window.location.origin;

  const addStaticPostObj = () => {
    const staticPostObj = [
      ...portfolioItems,
      {
        id: portfolioItems.length + 1,
        title: "",
        portfolioSubTitle: "",
        portfolioImage: "",
        portfolioLink: "",
      },
    ];
    setAttributes({ portfolioItems: staticPostObj });
  };
  const updateStaticPostObj = (index, key, value) => {
    const updatedStaticPostObj = [...portfolioItems];
    updatedStaticPostObj[index][key] = value;
    setAttributes({ portfolioItems: updatedStaticPostObj });
  };
  const removeStaticPostObj = (index) => {
    const updatedStaticPostObj = [...portfolioItems];
    updatedStaticPostObj.splice(index, 1);
    setAttributes({ portfolioItems: updatedStaticPostObj });
  };
  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...portfolioItems];
    arrayCopy[oldIndex] = portfolioItems[newIndex];
    arrayCopy[newIndex] = portfolioItems[oldIndex];

    setAttributes({
      portfolioItems: arrayCopy,
    });
  };
  return (
    <div {...useBlockProps({ className: "md_portfolio_section" })}>
      <InspectorControls>
        <PanelBody title={__("Portfolio Settings")}>
          <ToggleControl
            label={__("Show Subheading")}
            checked={showSubheading}
            onChange={() => setAttributes({ showSubheading: !showSubheading })}
          />
          <ToggleControl
            label={__("Show Heading")}
            checked={showHeading}
            onChange={() => setAttributes({ showHeading: !showHeading })}
          />
          <ToggleControl
            label={__("Enable Fancy Box")}
            checked={showZoomIcon}
            onChange={() => setAttributes({ showZoomIcon: !showZoomIcon })}
          />
          <ToggleControl
            label={__("Show Link Icon")}
            checked={showLinkIcon}
            onChange={() => setAttributes({ showLinkIcon: !showLinkIcon })}
          />
          <RangeControl
            label={__("Number of Portfolio Items Per Row")}
            value={numberOfPortfolioItemsPerRow}
            onChange={(value) =>
              setAttributes({ numberOfPortfolioItemsPerRow: value })
            }
            min={1}
            max={4}
          />
        </PanelBody>
        <PanelBody title={__("Footer Settings")} initialOpen={false}>
          <ToggleControl
            label={__("Enable Footer")}
            checked={enableFooter}
            onChange={() => setAttributes({ enableFooter: !enableFooter })}
          />
          {enableFooter && (
            <Fragment>
              <PanelColorSettings
                title={__("Footer Color Settings")}
                colorSettings={[
                  {
                    value: footerTextColor,
                    onChange: (colorValue) =>
                      setAttributes({ footerTextColor: colorValue }),
                    label: __("Footer Text Color"),
                  },
                  {
                    value: footerButtonColor,
                    onChange: (colorValue) =>
                      setAttributes({ footerButtonColor: colorValue }),
                    label: __("Button Color"),
                  },
                  {
                    value: footerButtonBackgroundColor,
                    onChange: (colorValue) =>
                      setAttributes({
                        footerButtonBackgroundColor: colorValue,
                      }),
                    label: __("Button Background Color"),
                  },
                  {
                    value: footerButtonHoverColor,
                    onChange: (colorValue) =>
                      setAttributes({ footerButtonHoverColor: colorValue }),
                    label: __("Button Hover Color"),
                  },
                  {
                    value: footerButtonHoverBackgroundColor,
                    onChange: (colorValue) =>
                      setAttributes({
                        footerButtonHoverBackgroundColor: colorValue,
                      }),
                    label: __("Button Hover Background Color"),
                  },
                ]}
              />
            </Fragment>
          )}
        </PanelBody>
        <PanelBody title={__("Color Settings")} initialOpen={false}>
          <PanelColorSettings
            title={__("Color Settings")}
            colorSettings={[
              {
                value: subheadingColor,
                onChange: (colorValue) =>
                  setAttributes({ subheadingColor: colorValue }),
                label: __("Subheading Color"),
              },
              {
                value: headingColor,
                onChange: (colorValue) =>
                  setAttributes({ headingColor: colorValue }),
                label: __("Heading Color"),
              },
              {
                value: portfolioTitleColor,
                onChange: (colorValue) =>
                  setAttributes({ portfolioTitleColor: colorValue }),
                label: __("Portfolio Title Color"),
              }
            ]}
          />
          <div className="settings-row">
            <label htmlFor="backgroundHoverColor">
              {__("Background Hover Color")}
            </label>
            <GradientPicker
              id="backgroundHoverColor"
              label={__("Background Hover Color")}
              value={backgroundHoverColor ? backgroundHoverColor : null}
              onChange={(value) =>
                setAttributes({ backgroundHoverColor: value })
              }
              gradients={[
                {
                  name: "Gradient 1",
                  gradient: "linear-gradient(50deg, #0039E3 0%, #8600D4 90%)",
                },
                {
                  name: "Gradient 2",
                  gradient: "linear-gradient(45deg, #f3ec78, #af4261)",
                },
                {
                  name: "Gradient 3",
                  gradient: "linear-gradient(45deg, #f3ec78, #af4261)",
                },
              ]}
            />
          </div>
        </PanelBody>
      </InspectorControls>
      <style>
        {`
          .md_portfolio_footer__button__wrapper .md_portfolio_footer__button {
            background-color: ${footerButtonBackgroundColor};
            color: ${footerButtonColor};
          }
          .md_portfolio_footer__button__wrapper .md_portfolio_footer__button:hover {
            background-color: ${footerButtonHoverBackgroundColor} !important;
            color: ${footerButtonHoverColor} !important;
            border: 1px solid ${footerButtonHoverColor} !important;
          }
        `}
      </style>
      <div className={"md_portfolio_section_inner "}>
        <div className="md_portfolio_heading__wrapper">
          <div className="md_portfolio_heading">
            {showSubheading && (
              <RichText
                tagName="p"
                value={subheading}
                onChange={(value) => setAttributes({ subheading: value })}
                placeholder={__("Subheading")}
                style={{ color: subheadingColor }}
              />
            )}
            {showHeading && (
              <RichText
                tagName="h2"
                value={heading}
                onChange={(value) => setAttributes({ heading: value })}
                placeholder={__("Heading")}
                style={{ color: headingColor }}
              />
            )}
          </div>
        </div>
        <div className="md_portfolio_items">
          <div className="md_portfolio_item__inner">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className={
                  "md_portfolio_item show-items-hover-wrap"
                }
                style={{
                  width: `${100 / numberOfPortfolioItemsPerRow}%`,
                }}
              >
                <div className={`item-action-wrap show-items-hover pos-abs`}>
                  <div className="move-item">
                    {0 < index && (
                      <Tooltip text={__("Move Left", "md-crafto-beauty")}>
                        <span
                          className="dashicons dashicons-arrow-left-alt move-left"
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
                    {index + 1 < portfolioItems.length && (
                      <Tooltip text={__("Move Right", "md-crafto-beauty")}>
                        <span
                          className="dashicons dashicons-arrow-right-alt move-right"
                          role="button"
                          tabIndex={0}
                          onClick={() => moveItem(index, index + 1)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              moveItem(index, index + 1);
                            }
                          }}
                          aria-label="Move item right"
                        ></span>
                      </Tooltip>
                    )}
                  </div>
                  {1 < portfolioItems.length && (
                    <Tooltip text={__("Remove Item", "md-prime")}>
                      <i
                        className="remove-item dashicons dashicons-no-alt"
                        role="button"
                        tabIndex={0}
                        onClick={() => {
                          const toDelete =
                            // eslint-disable-next-line no-alert
                            confirm(
                              __(
                                "Are you sure you want to delete this item?",
                                "md-prime"
                              )
                            );
                          if (toDelete === true) {
                            removeStaticPostObj(index);
                          }
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            // Simulate click behavior for keyboard users
                            e.preventDefault(); // Prevent default action for space key
                            const toDelete =
                              // eslint-disable-next-line no-alert
                              confirm(
                                __(
                                  "Are you sure you want to delete this item?",
                                  "md-prime"
                                )
                              );
                            if (toDelete === true) {
                              removeStaticPostObj(index);
                            }
                          }
                        }}
                        aria-label={__("Remove this item", "md-prime")}
                      ></i>
                    </Tooltip>
                  )}
                </div>
                <div className="md_portfolio_item_inner">
                  <div className="md-prime-block-control image-preview image-controle-visible-hover md_portfolio_item_inner__media">
                    <div
                      className={`image-controls small-icons icon-center-fixed`}
                    >
                      <MediaUploadCheck>
                        <MediaUpload
                          onSelect={(media) =>
                            updateStaticPostObj(
                              index,
                              "portfolioImage",
                              media.url
                            )
                          }
                          allowedTypes={["image"]}
                          value={item.portfolioImage}
                          render={({ open }) => (
                            <>
                              {item.portfolioImage ? (
                                <>
                                  <Tooltip text={__("Edit Image", "md-prime")}>
                                    <i
                                      className="dashicons dashicons-edit edit-image"
                                      onClick={open}
                                      role="button"
                                      tabIndex={0}
                                      onKeyDown={(e) => {
                                        if (
                                          e.key === "Enter" ||
                                          e.key === " "
                                        ) {
                                          e.preventDefault(); // Prevent default action for space key
                                          open(); // Trigger the click handler
                                        }
                                      }}
                                      aria-label={__("Edit image", "md-prime")}
                                    ></i>
                                  </Tooltip>
                                  <Tooltip
                                    text={__("Remove Image", "md-prime")}
                                  >
                                    <i
                                      className="dashicons dashicons-no-alt remove-image"
                                      onClick={() =>
                                        updateStaticPostObj(
                                          index,
                                          "portfolioImage",
                                          ""
                                        )
                                      }
                                      role="button"
                                      tabIndex={0}
                                      onKeyDown={(e) => {
                                        if (
                                          e.key === "Enter" ||
                                          e.key === " "
                                        ) {
                                          e.preventDefault();
                                          updateStaticPostObj(
                                            index,
                                            "portfolioImage",
                                            ""
                                          );
                                        }
                                      }}
                                      aria-label={__(
                                        "Remove image",
                                        "md-prime"
                                      )}
                                    ></i>
                                  </Tooltip>
                                </>
                              ) : (
                                <div className="upload-wrap">
                                  <Button
                                    onClick={open}
                                    className="button media_and_text__upload_btn"
                                  >
                                    <Tooltip
                                      text={__("Upload Image", "md-prime")}
                                    >
                                      <i className="dashicons dashicons-upload"></i>
                                    </Tooltip>
                                  </Button>
                                </div>
                              )}
                            </>
                          )}
                        />
                      </MediaUploadCheck>
                    </div>
                    <img
                      src={
                        item.portfolioImage
                          ? item.portfolioImage
                          : siteURL + placeholder
                      }
                      alt={"slider"}
                    />
                    <div
                      className="md_portfolio_item_inner__hover"
                      style={{ background: backgroundHoverColor }}
                    ></div>
                  </div>
                  <div className="md_portfolio_item_inner__content">
                    <RichText
                      tagName="h3"
                      value={item.title}
                      onChange={(value) =>
                        updateStaticPostObj(index, "title", value)
                      }
                      placeholder={__("Title")}
                      style={{ color: portfolioTitleColor }}
                    />
                    <RichText
                      tagName="p"
                      value={item.portfolioSubTitle}
                      onChange={(value) =>
                        updateStaticPostObj(index, "portfolioSubTitle", value)
                      }
                      placeholder={__("Sub Title")}
                    />
                    {showLinkIcon && (
                      <TextControl
                        value={item.portfolioLink}
                        onChange={(value) =>
                          updateStaticPostObj(index, "portfolioLink", value)
                        }
                        placeholder={__("Link")}
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className="add-item-wrap"
            onClick={addStaticPostObj}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                addStaticPostObj();
              }
            }}
            role="button"
            tabIndex={0}
            aria-label={__("Add new item", "md-prime")}
          >
            <Tooltip text={__("Add New Item", "md-prime")}>
              <i className="add-new-item dashicons dashicons-plus"></i>
            </Tooltip>
          </div>
        </div>
        {enableFooter && (
          <div className="md_portfolio_footer">
            <div className="container">
              <div className="md_portfolio_footer__inner">
                <div className="md_portfolio_footer__text">
                  <div className="md_portfolio_footer__text--line"></div>
                  <RichText
                    tagName="p"
                    value={footerText}
                    onChange={(value) => setAttributes({ footerText: value })}
                    placeholder={__("Footer Text")}
                    style={{ color: footerTextColor }}
                  />
                </div>
                {showFooterButton && (
                  <div className="md_portfolio_footer__button__wrapper">
                    <RichText
                      tagName="p"
                      className="md_portfolio_footer__button"
                      value={footerButton}
                      onChange={(value) =>
                        setAttributes({ footerButton: value })
                      }
                      placeholder={__("Button Text")}
                      style={{ color: footerButtonColor }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
