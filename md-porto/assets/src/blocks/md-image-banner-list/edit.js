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
} from "@wordpress/components";

import placeholder from "./placeholder-image.png";

import { leftAlign, rightAlign } from "../icons";

import lineSvg from "./line.svg";

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
    title,
    headingContent,
    mediaPosition,
    backgroundColor,
    titleColor,
    headingContentColor,
    showTitle,
    showHeadingContent,
    mediaImage,
    showListItems,
    listItems,
    listItemColor,
    listItemIconColor,
    listItemIconBackgroundColor,
    showNumberBlock,
    numberBlockTitle,
    numberBlockSign,
    numberBlockSubTitle,
    numberBlockDescription,
    numberBlockTitleColor,
    numberBlockSignColor,
    numberBlockSubTitleColor,
    numberBlockDescriptionColor,
  } = attributes;

  const siteURL = window.location.origin;

  const addListItems = () => {
    const listItemsCopy = [
      ...listItems,
      {
        id: listItems.length + 1,
        feature: "",
      },
    ];
    setAttributes({ listItems: listItemsCopy });
  };
  const updateListItems = (index, key, value) => {
    const updatedListItems = [...listItems];
    updatedListItems[index][key] = value;
    setAttributes({ listItems: updatedListItems });
  };
  const moveListItemsItem = (oldIndex, newIndex) => {
    const arrayCopy = [...listItems];
    arrayCopy[oldIndex] = listItems[newIndex];
    arrayCopy[newIndex] = listItems[oldIndex];

    setAttributes({
      listItems: arrayCopy,
    });
  };

  return (
    <div {...useBlockProps({ className: "md_porto_video_header_section" })}>
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-porto")}>
          <ToggleControl
            label={__("Show Title", "md-porto")}
            checked={showTitle}
            onChange={(value) => setAttributes({ showTitle: value })}
          />
          <ToggleControl
            label={__("Show Heading Content", "md-porto")}
            checked={showHeadingContent}
            onChange={(value) => setAttributes({ showHeadingContent: value })}
          />
          <ToggleControl
            label={__("Show List Items", "md-porto")}
            checked={showListItems}
            onChange={(value) => setAttributes({ showListItems: value })}
          />
          <ToggleControl
            label={__("Show Number Block", "md-porto")}
            checked={showNumberBlock}
            onChange={(value) => setAttributes({ showNumberBlock: value })}
          />
          <div className="setting-row inspector-field inspector-field-alignment">
            <label htmlFor="alignment" className="inspector-mb-0">
              {__("Media Position")}
            </label>
            <div className="inspector-field-button-list inspector-field-button-list-fluid">
              <button
                className={
                  "left" === mediaPosition
                    ? "active inspector-button"
                    : " inspector-button"
                }
                onClick={() => setAttributes({ mediaPosition: "left" })}
              >
                {leftAlign}
              </button>
              <button
                className={
                  "right" === mediaPosition
                    ? "active inspector-button"
                    : " inspector-button"
                }
                onClick={() => setAttributes({ mediaPosition: "right" })}
              >
                {rightAlign}
              </button>
            </div>
          </div>
        </PanelBody>
        <PanelBody title={__("Color Settings", "md-porto")} initialOpen={false}>
          <PanelColorSettings
            title={__("Typography Colors", "md-porto")}
            initialOpen={false}
            colorSettings={[
              {
                value: titleColor,
                onChange: (colorValue) =>
                  setAttributes({ titleColor: colorValue }),
                label: __("Title Color", "md-porto"),
              },
              {
                value: headingContentColor,
                onChange: (colorValue) =>
                  setAttributes({ headingContentColor: colorValue }),
                label: __("Heading Content Color", "md-porto"),
              },
              {
                value: backgroundColor,
                onChange: (colorValue) =>
                  setAttributes({ backgroundColor: colorValue }),
                label: __("Background Color", "md-porto"),
              },
              {
                value: listItemColor,
                onChange: (colorValue) =>
                  setAttributes({ listItemColor: colorValue }),
                label: __("List Item Color", "md-porto"),
              },
              {
                value: listItemIconColor,
                onChange: (colorValue) =>
                  setAttributes({ listItemIconColor: colorValue }),
                label: __("List Item Icon Color", "md-porto"),
              },
              {
                value: listItemIconBackgroundColor,
                onChange: (colorValue) =>
                  setAttributes({ listItemIconBackgroundColor: colorValue }),
                label: __("List Item Icon Background Color", "md-porto"),
              },
              {
                value: numberBlockTitleColor,
                onChange: (colorValue) =>
                  setAttributes({ numberBlockTitleColor: colorValue }),
                label: __("Number Block Title Color", "md-porto"),
              },
              {
                value: numberBlockSignColor,
                onChange: (colorValue) =>
                  setAttributes({ numberBlockSignColor: colorValue }),
                label: __("Number Block Sign Color", "md-porto"),
              },
              {
                value: numberBlockSubTitleColor,
                onChange: (colorValue) =>
                  setAttributes({ numberBlockSubTitleColor: colorValue }),
                label: __("Number Block Sub Title Color", "md-porto"),
              },
              {
                value: numberBlockDescriptionColor,
                onChange: (colorValue) =>
                  setAttributes({ numberBlockDescriptionColor: colorValue }),
                label: __("Number Block Description Color", "md-porto"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className={`md_porto_image_banner_lisr_wrap`}>
        <div className="md_porto_image_banner_lisr" style={{ backgroundColor }}>
          <div className="container">
            <div
              className="md_porto_image_banner_lisr__inner"
              style={{
                flexDirection: mediaPosition === "left" ? "row-reverse" : "row",
              }}
            >
              <div className="md_porto_image_banner_lisr__heading">
                {showTitle && (
                  <RichText
                    tagName="h2"
                    value={title}
                    onChange={(value) => setAttributes({ title: value })}
                    placeholder={__("Enter Title", "md-porto")}
                    style={{ color: titleColor }}
                  />
                )}
                {showHeadingContent && (
                  <RichText
                    tagName="p"
                    className="md_porto_image_banner_lisr__content"
                    value={headingContent}
                    onChange={(value) =>
                      setAttributes({ headingContent: value })
                    }
                    placeholder={__("Enter Content", "md-porto")}
                    style={{
                      color: headingContentColor,
                    }}
                  />
                )}
                <div className="md_porto_features_list_wrap">
                  {showListItems && (
                    <div className="md_porto_features_list">
                      {listItems &&
                        listItems.map((feature, index) => (
                          <div
                            key={feature.id}
                            className="md_porto_features_list_item show-items-hover-wrap"
                          >
                            <div className="item-action-wrap show-items-hover small-icons">
                              <div className="move-item">
                                {0 < index && (
                                  <Tooltip text={__("Move Left", "md-prime")}>
                                    <span
                                      className="dashicons dashicons-arrow-left-alt move-left"
                                      onClick={() =>
                                        moveListItemsItem(index, index - 1)
                                      }
                                      onKeyDown={(event) => {
                                        if (
                                          event.key === "Enter" ||
                                          event.key === " "
                                        ) {
                                          moveListItemsItem(index, index - 1);
                                        }
                                      }}
                                      role="button"
                                      tabIndex={0}
                                      aria-label="Move item left"
                                    ></span>
                                  </Tooltip>
                                )}
                                {index + 1 < listItems.length && (
                                  <Tooltip text={__("Move Right", "md-prime")}>
                                    <span
                                      className="dashicons dashicons-arrow-right-alt move-right"
                                      role="button"
                                      tabIndex="0"
                                      onClick={() =>
                                        moveListItemsItem(index, index + 1)
                                      }
                                      onKeyDown={(e) => {
                                        if (
                                          e.key === "Enter" ||
                                          e.key === " "
                                        ) {
                                          moveListItemsItem(index, index + 1);
                                        }
                                      }}
                                      aria-label="Move item right"
                                    ></span>
                                  </Tooltip>
                                )}
                              </div>
                              {1 < listItems.length && (
                                <Tooltip text={__("Remove Item", "md-prime")}>
                                  <i
                                    className="remove-item dashicons dashicons-no-alt"
                                    role="button"
                                    tabIndex="0"
                                    onClick={() => {
                                      const toDelete =
                                        // eslint-disable-next-line no-alert
                                        confirm(
                                          __(
                                            "Are you sure you want to delete this item?",
                                            "md-prime"
                                          )
                                        );
                                      if (toDelete) {
                                        const updatedArray = listItems.filter(
                                          (item, itemIndex) =>
                                            itemIndex !== index
                                        );
                                        setAttributes({
                                          listItems: updatedArray,
                                        });
                                      }
                                    }}
                                    onKeyDown={(e) => {
                                      if (e.key === "Enter" || e.key === " ") {
                                        const toDelete =
                                          // eslint-disable-next-line no-alert
                                          confirm(
                                            __(
                                              "Are you sure you want to delete this item?",
                                              "md-prime"
                                            )
                                          );
                                        if (toDelete) {
                                          const updatedArray = listItems.filter(
                                            (item, itemIndex) =>
                                              itemIndex !== index
                                          );
                                          setAttributes({
                                            listItems: updatedArray,
                                          });
                                        }
                                      }
                                    }}
                                    aria-label="Delete item"
                                  ></i>
                                </Tooltip>
                              )}
                            </div>
                            <div className="md_porto_features_list_item_inner">
                              <div
                                className="item-icon-wrap"
                                style={{
                                  color: listItemIconColor,
                                  backgroundColor: listItemIconBackgroundColor,
                                }}
                              >
                                <i className={"fa fa-check"}></i>
                              </div>
                              <RichText
                                tagName="p"
                                value={feature.feature}
                                onChange={(value) =>
                                  updateListItems(index, "feature", value)
                                }
                                placeholder={__("Enter Feature", "md-prime")}
                                style={{ color: listItemColor }}
                              />
                            </div>
                          </div>
                        ))}
                    </div>
                  )}
                  <div
                    className="add-item-wrap"
                    onClick={addListItems}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault(); // Prevent default action for space key
                        addListItems(); // Trigger the click handler
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
              <div className="md_porto_image_banner_lisr__media">
                <div className="md-prime-block-control image-preview image-controle-visible-hover md_porto_image_banner_lisr__media1">
                  <div
                    className={`image-controls small-icons icon-center-fixed`}
                  >
                    <MediaUploadCheck>
                      <MediaUpload
                        onSelect={(media) =>
                          setAttributes({ mediaImage: media.url })
                        }
                        allowedTypes={["image"]}
                        value={mediaImage}
                        render={({ open }) => (
                          <>
                            {mediaImage ? (
                              <>
                                <Tooltip text={__("Edit Image", "md-prime")}>
                                  <i
                                    className="dashicons dashicons-edit edit-image"
                                    onClick={open}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                      if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault(); // Prevent default action for space key
                                        open(); // Trigger the click handler
                                      }
                                    }}
                                    aria-label={__("Edit image", "md-prime")}
                                  ></i>
                                </Tooltip>
                                <Tooltip text={__("Remove Image", "md-prime")}>
                                  <i
                                    className="dashicons dashicons-no-alt remove-image"
                                    onClick={() =>
                                      setAttributes({ mediaImage: "" })
                                    }
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                      if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault();
                                        setAttributes({ mediaImage: "" });
                                      }
                                    }}
                                    aria-label={__("Remove image", "md-prime")}
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
                    src={mediaImage ? mediaImage : siteURL + placeholder}
                    alt={"slider"}
                  />
                </div>
                {showNumberBlock && (
                  <div className="md_porto_image_banner_list__number_block">
                    <div className="md-portomd_number_block__item-icon__wrapper">
                      <div className="md-portomd_number_block__item-icon__wrapper-heading">
                        <div
                          className="number-list"
                          style={{
                            color: numberBlockTitleColor,
                          }}
                        >
                          <RichText
                            tagName="span"
                            className="number"
                            value={numberBlockTitle}
                            onChange={(value) =>
                              setAttributes({ numberBlockTitle: value })
                            }
                            placeholder={__("Number", "md-prime")}
                          />
                          <RichText
                            tagName="span"
                            className="sign"
                            value={numberBlockSign}
                            onChange={(value) =>
                              setAttributes({ numberBlockSign: value })
                            }
                            placeholder={__("Sign", "md-prime")}
                            style={{ color: numberBlockSignColor }}
                          />
                          <div className="md-portomd_number_block__item-icon__wrapper-line">
                            <img src={lineSvg} alt="line" />
                          </div>
                        </div>
                      </div>
                      <div className="md-portomd_number_block__item-icon__wrapper-text">
                        <RichText
                          tagName="h4"
                          className="image-title"
                          value={numberBlockSubTitle}
                          onChange={(value) =>
                            setAttributes({ numberBlockSubTitle: value })
                          }
                          placeholder={__("Image Title", "md-prime")}
                          style={{ color: numberBlockSubTitleColor }}
                        />
                        <RichText
                          tagName="p"
                          className="image-text"
                          value={numberBlockDescription}
                          onChange={(value) =>
                            setAttributes({ numberBlockDescription: value })
                          }
                          placeholder={__("Image Text", "md-prime")}
                          style={{ color: numberBlockDescriptionColor }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
