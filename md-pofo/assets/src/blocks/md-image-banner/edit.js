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
export default function Edit({ attributes, setAttributes }) {
  const {
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
    contentBackgroundColor
  } = attributes;

  const siteURL = window.location.origin;

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
        <PanelBody
          title={__("Color Settings", "md-pofo")}
          initialOpen={false}
        >
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
              }
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className={`md_pofo_image_banner_wrap`}>
        <style>
          {`
            .md_pofo_image_banner__btn {
              color: ${buttonColor};
              background: ${buttonBackgroundColor};
            }
            .md_pofo_image_banner__btn:hover {
              color: ${buttonHoverColor} !important;
              background: ${buttonHoverBackgroundColor};
            }
          `}
        </style>
        <div className="md_pofo_image_banner" style={{ backgroundColor }}>
          <div
            className="md_pofo_image_banner__inner"
            style={{
              flexDirection: mediaPosition === "left" ? "row-reverse" : "row",
            }}
          >
            <div className="md_pofo_image_banner__heading" style={{ backgroundColor: contentBackgroundColor }}>
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
                  className="md_pofo_image_banner__content"
                  value={headingContent}
                  onChange={(value) =>
                    setAttributes({ headingContent: value })
                  }
                  placeholder={__("Enter Content", "md-pofo")}
                  style={{
                    color: headingContentColor,
                  }}
                />
              )}
              <div className="md_pofo_image_banner__btn_wrapper">
                {showButton && (
                  <RichText
                    className="md_pofo_image_banner__btn md_btn md_btn-transparent-white md_btn-medium xs-margin-two-all border-radius-4 first-btn"
                    tagName="span"
                    value={buttonLink}
                    onChange={(value) => setAttributes({ buttonLink: value })}
                    placeholder={__("Enter Button Text", "md-pofo")}
                  />
                )}
              </div>
            </div>
            <div className="md_pofo_image_banner__media" style={{ backgroundImage: `url(${mediaImage || siteURL + placeholder})` }}>
              <div className="md-prime-block-control image-preview image-controle-visible-hover">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
