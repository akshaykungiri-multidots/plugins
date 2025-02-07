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
  GradientPicker,
} from "@wordpress/components";

import placeholder from "./placeholder-image.png";

import { leftAlign, rightAlign } from "../icons";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes, clientId }) {
  const {
    blockId,
    subTitle,
    title,
    headingContent,
    buttonLink,
    mediaPosition,
    backgroundColor,
    subTitleColor,
    titleColor,
    headingContentColor,
    showSubTitle,
    showTitle,
    showHeadingContent,
    showButton,
    mediaImage,
    buttonColor,
    buttonBackgroundColor,
    buttonHoverColor,
    buttonHoverBackgroundColor,
    contentBackgroundColor,
    listItems,
    showList,
    listItemColor,
    listItemIconColor,
  } = attributes;

  const siteURL = window.location.origin;

  const addStaticPostObj = () => {
    const staticPostObj = [
      ...listItems,
      {
        id: listItems.length + 1,
        title: "",
      },
    ];
    setAttributes({ listItems: staticPostObj });
  };
  const updateStaticPostObj = (index, key, value) => {
    const updatedStaticPostObj = [...listItems];
    updatedStaticPostObj[index][key] = value;
    setAttributes({ listItems: updatedStaticPostObj });
  };
  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...listItems];
    arrayCopy[oldIndex] = listItems[newIndex];
    arrayCopy[newIndex] = listItems[oldIndex];

    setAttributes({
      listItems: arrayCopy,
    });
  };

  if (blockId !== clientId) {
    setAttributes({ blockId: clientId });
  }

  return (
    <div {...useBlockProps({ className: "md_pofo_video_header_section" })}>
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-pofo")}>
          <ToggleControl
            label={__("Show Sub Title", "md-pofo")}
            checked={showSubTitle}
            onChange={(value) => setAttributes({ showSubTitle: value })}
          />
          <ToggleControl
            label={__("Show Title", "md-pofo")}
            checked={showTitle}
            onChange={(value) => setAttributes({ showTitle: value })}
          />
          <ToggleControl
            label={__("Show Heading Content", "md-pofo")}
            checked={showHeadingContent}
            onChange={(value) => setAttributes({ showHeadingContent: value })}
          />
          <ToggleControl
            label={__("Show List", "md-pofo")}
            checked={showList}
            onChange={(value) => setAttributes({ showList: value })}
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
        <PanelBody title={__("Button Settings")} initialOpen={false}>
          <ToggleControl
            label={__("Show Button", "md-pofo")}
            checked={showButton}
            onChange={(value) => setAttributes({ showButton: value })}
          />
          {showButton && (
            <div className="settings-row">
              <PanelColorSettings
                title={__("Button Color Settings", "md-storyful-fse-full")}
                initialOpen={false}
                colorSettings={[
                  {
                    value: buttonColor,
                    onChange: (newColor) =>
                      setAttributes({ buttonColor: newColor }),
                    label: __("Button Font Color"),
                  },
                  {
                    value: buttonHoverColor,
                    onChange: (newColor) =>
                      setAttributes({ buttonHoverColor: newColor }),
                    label: __("Button Hover Font Color"),
                  },
                ]}
              />
              <div className="settings-row">
                <label htmlFor="buttonBackgroundColor">
                  {__("Button Background Color")}
                </label>
                <GradientPicker
                  id="buttonBackgroundColor"
                  label={__("Button Background Color")}
                  value={buttonBackgroundColor ? buttonBackgroundColor : null}
                  onChange={(value) =>
                    setAttributes({ buttonBackgroundColor: value })
                  }
                  gradients={[
                    {
                      name: "Gradient 1",
                      gradient:
                        "linear-gradient(90deg, #C73727 0%, #E76A24 100.28%)",
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
              <div className="settings-row">
                <label htmlFor="buttonHoverBackgroundColor">
                  {__("Button Hover Background Color")}
                </label>
                <GradientPicker
                  id="buttonHoverBackgroundColor"
                  label={__("Button Hover Background Color")}
                  value={
                    buttonHoverBackgroundColor
                      ? buttonHoverBackgroundColor
                      : null
                  }
                  onChange={(value) =>
                    setAttributes({ buttonHoverBackgroundColor: value })
                  }
                  gradients={[
                    {
                      name: "Gradient 1",
                      gradient:
                        "linear-gradient(90deg, #C73727 0%, #E76A24 100.28%)",
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
            </div>
          )}
        </PanelBody>
        <PanelBody title={__("Color Settings", "md-pofo")} initialOpen={false}>
          <PanelColorSettings
            title={__("Typography Colors", "md-pofo")}
            initialOpen={false}
            colorSettings={[
              {
                value: subTitleColor,
                onChange: (colorValue) =>
                  setAttributes({ subTitleColor: colorValue }),
                label: __("Sub Title Color", "md-pofo"),
              },
              {
                value: titleColor,
                onChange: (colorValue) =>
                  setAttributes({ titleColor: colorValue }),
                label: __("Title Color", "md-pofo"),
              },
              {
                value: headingContentColor,
                onChange: (colorValue) =>
                  setAttributes({ headingContentColor: colorValue }),
                label: __("Heading Content Color", "md-pofo"),
              },
              {
                value: backgroundColor,
                onChange: (colorValue) =>
                  setAttributes({ backgroundColor: colorValue }),
                label: __("Background Color", "md-pofo"),
              },
              {
                value: contentBackgroundColor,
                onChange: (colorValue) =>
                  setAttributes({ contentBackgroundColor: colorValue }),
                label: __("Content Background Color", "md-pofo"),
              },
              {
                value: listItemColor,
                onChange: (colorValue) =>
                  setAttributes({ listItemColor: colorValue }),
                label: __("List Item Color", "md-pofo"),
              },
              {
                value: listItemIconColor,
                onChange: (colorValue) =>
                  setAttributes({ listItemIconColor: colorValue }),
                label: __("List Item Icon Color", "md-pofo"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className={`md_pofo_image_banner_v2_wrap`}>
        <style>
          {`
            #block-${blockId} .md_pofo_image_banner_v2__btn_wrapper .md_pofo_image_banner_v2__btn {
              color: ${buttonColor} !important;
              background: ${buttonBackgroundColor} !important;
              border-color: ${buttonColor} !important;
            }
            #block-${blockId} .md_pofo_image_banner_v2__btn_wrapper .md_pofo_image_banner_v2__btn:hover {
              color: ${buttonHoverColor} !important;
              background: ${buttonHoverBackgroundColor} !important;
              border-color: ${buttonHoverColor} !important;
            }
          `}
        </style>
        <div className="md_pofo_image_banner_v2" style={{ backgroundColor }}>
          <div
            className="md_pofo_image_banner_v2__inner"
            style={{
              flexDirection: mediaPosition === "left" ? "row-reverse" : "row",
            }}
          >
            <div
              className="md_pofo_image_banner_v2__heading"
              style={{ backgroundColor: contentBackgroundColor }}
            >
              {showSubTitle && (
                <RichText
                  tagName="h4"
                  value={subTitle}
                  onChange={(value) => setAttributes({ subTitle: value })}
                  placeholder={__("Enter Sub Title", "md-pofo")}
                  style={{
                    color: subTitleColor,
                  }}
                />
              )}
              {showTitle && (
                <RichText
                  tagName="h2"
                  value={title}
                  onChange={(value) => setAttributes({ title: value })}
                  placeholder={__("Enter Title", "md-pofo")}
                  style={{ color: titleColor }}
                />
              )}
              {showHeadingContent && (
                <RichText
                  tagName="p"
                  className="md_pofo_image_banner_v2__content"
                  value={headingContent}
                  onChange={(value) => setAttributes({ headingContent: value })}
                  placeholder={__("Enter Content", "md-pofo")}
                  style={{
                    color: headingContentColor,
                  }}
                />
              )}
              {showList && (
                <div className="md_pofo_image_banner_v2__list">
                  <ul style={{ color: listItemColor }}>
                    {listItems.map((postObj, index) => (
                      <li
                        key={index}
                        className="md_pofo_image_banner_v2__list_item show-items-hover-wrap"
                      >
                        <div className="item-action-wrap show-items-hover pos-abs small-icons">
                          <div className="move-item">
                            {0 < index && (
                              <Tooltip text={__("Move Left", "md-prime")}>
                                <span
                                  className="dashicons dashicons-arrow-left-alt move-left"
                                  onClick={() => moveItem(index, index - 1)}
                                  onKeyDown={(event) => {
                                    if (
                                      event.key === "Enter" ||
                                      event.key === " "
                                    ) {
                                      moveItem(index, index - 1);
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
                                      (item, itemIndex) => itemIndex !== index
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
                                        (item, itemIndex) => itemIndex !== index
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
                        <RichText
                          tagName="span"
                          value={postObj.title}
                          onChange={(value) =>
                            updateStaticPostObj(index, "title", value)
                          }
                          placeholder={__("Enter List Item", "md-pofo")}
                        />
                      </li>
                    ))}
                  </ul>
                  <div
                    className="add-item-wrap"
                    onClick={addStaticPostObj}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault(); // Prevent default action for space key
                        addStaticPostObj(); // Trigger the click handler
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
              )}
              <div className="md_pofo_image_banner_v2__btn_wrapper">
                {showButton && (
                  <div className="md_pofo_image_banner_v2__btn md_btn md_btn-black md_btn-medium xs-margin-two-all border-radius-4 first-btn">
                    <i className="fa fa-play-circle" aria-hidden="true" style={{ color: listItemIconColor }}></i>
                    <RichText
                      className=""
                      tagName="span"
                      value={buttonLink}
                      onChange={(value) => setAttributes({ buttonLink: value })}
                      placeholder={__("Enter Button Text", "md-pofo")}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="md_pofo_image_banner_v2__media">
              <div className="md-prime-block-control image-preview image-controle-visible-hover">
                <div className={`image-controls small-icons icon-center-fixed`}>
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
                                <Tooltip text={__("Upload Image", "md-prime")}>
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
                <img src={mediaImage || siteURL + placeholder} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
