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

import { Fragment } from "@wordpress/element";

import {
  PanelBody,
  Button,
  ToggleControl,
  Tooltip,
  RangeControl,
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
    numberOfBrandsItemsPerRow,
    brandsItems,
  } = attributes;

  const siteURL = window.location.origin;

  const addStaticPostObj = () => {
    const staticPostObj = [
      ...brandsItems,
      {
        id: brandsItems.length + 1,
        brandsImage: "",
      },
    ];
    setAttributes({ brandsItems: staticPostObj });
  };
  const updateStaticPostObj = (index, key, value) => {
    const updatedStaticPostObj = [...brandsItems];
    updatedStaticPostObj[index][key] = value;
    setAttributes({ brandsItems: updatedStaticPostObj });
  };
  const removeStaticPostObj = (index) => {
    const updatedStaticPostObj = [...brandsItems];
    updatedStaticPostObj.splice(index, 1);
    setAttributes({ brandsItems: updatedStaticPostObj });
  };
  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...brandsItems];
    arrayCopy[oldIndex] = brandsItems[newIndex];
    arrayCopy[newIndex] = brandsItems[oldIndex];

    setAttributes({
      brandsItems: arrayCopy,
    });
  };
  return (
    <div {...useBlockProps({ className: "md_brands_section" })}>
      <InspectorControls>
        <PanelBody title={__("Brands Settings")}>
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
          <RangeControl
            label={__("Number of Brands Items Per Row")}
            value={numberOfBrandsItemsPerRow}
            onChange={(value) =>
              setAttributes({ numberOfBrandsItemsPerRow: value })
            }
            min={1}
            max={4}
          />
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
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <style>
        {`
          .md_brands_item__inner {
            .md_brands_item:nth-child(${numberOfBrandsItemsPerRow}n) {
            border-right: none;
          }
          .md_brands_item:nth-child(-n + ${numberOfBrandsItemsPerRow}) {
            border-bottom: none;
          }
        `}
      </style>
      <div className={"md_brands_section_inner "}>
        <div className="md_brands_heading__wrapper">
          <div className="md_brands_heading">
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
        <div className="md_brands_items">
          <div
            className="md_brands_item__inner"
            style={{
              gridTemplateColumns: `repeat(${numberOfBrandsItemsPerRow}, 1fr)`,
            }}
          >
            {brandsItems.map((item, index) => (
              <div
                key={index}
                className={"md_brands_item show-items-hover-wrap"}
              >
                <div className={`item-action-wrap show-items-hover pos-abs`}>
                  <div className="move-item">
                    {0 < index && (
                      <Tooltip text={__("Move Left", "md-crafto-design")}>
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
                    {index + 1 < brandsItems.length && (
                      <Tooltip text={__("Move Right", "md-crafto-design")}>
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
                  {1 < brandsItems.length && (
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
                <div className="md_brands_item_inner">
                  <div className="md-prime-block-control image-preview image-controle-visible-hover md_brands_item_inner__media">
                    <div
                      className={`image-controls small-icons icon-center-fixed`}
                    >
                      <MediaUploadCheck>
                        <MediaUpload
                          onSelect={(media) =>
                            updateStaticPostObj(index, "brandsImage", media.url)
                          }
                          allowedTypes={["image"]}
                          value={item.brandsImage}
                          render={({ open }) => (
                            <>
                              {item.brandsImage ? (
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
                                          "brandsImage",
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
                                            "brandsImage",
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
                        item.brandsImage
                          ? item.brandsImage
                          : siteURL + placeholder
                      }
                      alt={"slider"}
                    />
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
      </div>
    </div>
  );
}
