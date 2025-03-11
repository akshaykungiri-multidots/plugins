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
    awesomeText,
    mediaPosition,
    backgroundColor,
    subTitleColor,
    titleColor,
    headingContentColor,
    showSubTitle,
    showTitle,
    showHeadingContent,
    showButton,
    showAwesomeText,
    mediaImage,
    backgroundImage,
    buttonColor,
    buttonBackgroundColor,
    buttonHoverColor,
    buttonHoverBackgroundColor,
    awesomeTextColor,
    featureBoxIcon,
    featureBoxTitle,
    featureBoxContent,
    showFeatureBox,
    featureBoxTitleColor,
    featureBoxContentColor,
    featureLink,
    featureBoxLinkColor,
    showFeatureLink,
  } = attributes;

  const siteURL = window.location.origin;

  return (
    <div
      {...useBlockProps({ className: "md_crafto_beauty_video_header_section" })}
    >
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-crafto-beauty")}>
          <ToggleControl
            label={__("Show Sub Title", "md-crafto-beauty")}
            checked={showSubTitle}
            onChange={(value) => setAttributes({ showSubTitle: value })}
          />
          <ToggleControl
            label={__("Show Title", "md-crafto-beauty")}
            checked={showTitle}
            onChange={(value) => setAttributes({ showTitle: value })}
          />
          <ToggleControl
            label={__("Show Heading Content", "md-crafto-beauty")}
            checked={showHeadingContent}
            onChange={(value) => setAttributes({ showHeadingContent: value })}
          />
          <ToggleControl
            label={__("Show Awesome Text", "md-crafto-beauty")}
            checked={showAwesomeText}
            onChange={(value) => setAttributes({ showAwesomeText: value })}
          />
          <ToggleControl
            label={__("Show Feature Box", "md-crafto-beauty")}
            checked={showFeatureBox}
            onChange={(value) => setAttributes({ showFeatureBox: value })}
          />
          <ToggleControl
            label={__("Show Feature Link", "md-crafto-beauty")}
            checked={showFeatureLink}
            onChange={(value) => setAttributes({ showFeatureLink: value })}
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
        <PanelBody title={__("Background Settings")} initialOpen={false}>
          <div className="setting-row">
            <label htmlFor="background-image">
              {__("Background Image", "md-prime")}
            </label>
            <div>
              {!backgroundImage ? (
                <MediaUpload
                  onSelect={(selectedImage) => {
                    setAttributes({ backgroundImage: selectedImage.url });
                  }}
                  allowedTypes={["image"]}
                  value={backgroundImage}
                  render={({ open }) => (
                    <Button onClick={open} className="button button-large">
                      {__("Upload Image", "md-prime")}
                    </Button>
                  )}
                />
              ) : (
                <>
                  <div className="image-preview">
                    <img src={backgroundImage} alt="Background-image-preview" />
                  </div>
                  <Button
                    onClick={() => {
                      setAttributes({ backgroundImage: "" });
                    }}
                    className="is-link is-destructive"
                  >
                    {__("Remove Image", "md-prime")}
                  </Button>
                </>
              )}
            </div>
          </div>
        </PanelBody>
        <PanelBody title={__("Button Settings")} initialOpen={false}>
          <ToggleControl
            label={__("Show Button", "md-crafto-beauty")}
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
          title={__("Color Settings", "md-crafto-beauty")}
          initialOpen={false}
        >
          <PanelColorSettings
            title={__("Typography Colors", "md-crafto-beauty")}
            initialOpen={false}
            colorSettings={[
              {
                value: subTitleColor,
                onChange: (colorValue) =>
                  setAttributes({ subTitleColor: colorValue }),
                label: __("Sub Title Color", "md-crafto-beauty"),
              },
              {
                value: titleColor,
                onChange: (colorValue) =>
                  setAttributes({ titleColor: colorValue }),
                label: __("Title Color", "md-crafto-beauty"),
              },
              {
                value: headingContentColor,
                onChange: (colorValue) =>
                  setAttributes({ headingContentColor: colorValue }),
                label: __("Heading Content Color", "md-crafto-beauty"),
              },
              {
                value: backgroundColor,
                onChange: (colorValue) =>
                  setAttributes({ backgroundColor: colorValue }),
                label: __("Background Color", "md-crafto-beauty"),
              },
              {
                value: awesomeTextColor,
                onChange: (colorValue) =>
                  setAttributes({ awesomeTextColor: colorValue }),
                label: __("Link Text Color", "md-crafto-beauty"),
              },
              {
                value: featureBoxTitleColor,
                onChange: (colorValue) =>
                  setAttributes({ featureBoxTitleColor: colorValue }),
                label: __("Feature Box Title Color", "md-crafto-beauty"),
              },
              {
                value: featureBoxContentColor,
                onChange: (colorValue) =>
                  setAttributes({ featureBoxContentColor: colorValue }),
                label: __("Feature Box Content Color", "md-crafto-beauty"),
              },
              {
                value: featureBoxLinkColor,
                onChange: (colorValue) =>
                  setAttributes({ featureBoxLinkColor: colorValue }),
                label: __("Feature Box Link Color", "md-crafto-beauty"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div
        className={`md_crafto_beauty_image_banner_wrap`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        <style>
          {`
            .md_crafto_beauty_image_banner__btn {
              color: ${buttonColor};
              background: ${buttonBackgroundColor};
            }
            .md_crafto_beauty_image_banner__btn:hover {
              color: ${buttonHoverColor} !important;
              background: ${buttonHoverBackgroundColor};
            }
          `}
        </style>
        <div
          className="md_crafto_beauty_image_banner"
          style={{ backgroundColor }}
        >
          <div className="container">
            <div
              className="md_crafto_beauty_image_banner__inner"
              style={{
                flexDirection: mediaPosition === "left" ? "row-reverse" : "row",
              }}
            >
              <div className="md_crafto_beauty_image_banner__heading">
                {showSubTitle && (
                  <RichText
                    tagName="h4"
                    value={subTitle}
                    onChange={(value) => setAttributes({ subTitle: value })}
                    placeholder={__("Enter Sub Title", "md-crafto-beauty")}
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
                    placeholder={__("Enter Title", "md-crafto-beauty")}
                    style={{ color: titleColor }}
                  />
                )}
                {showHeadingContent && (
                  <RichText
                    tagName="p"
                    className="md_crafto_beauty_image_banner__content"
                    value={headingContent}
                    onChange={(value) =>
                      setAttributes({ headingContent: value })
                    }
                    placeholder={__("Enter Content", "md-crafto-beauty")}
                    style={{
                      color: headingContentColor,
                    }}
                  />
                )}
                <div className="md_crafto_beauty_image_banner__btn_wrapper">
                  {showButton && (
                    <div className="btn-anitian md_crafto_beauty_image_banner__btn md-btn-main btn-extra-large has-right-arrow">
                      <RichText
                        tagName="span"
                        value={buttonLink}
                        onChange={(value) =>
                          setAttributes({ buttonLink: value })
                        }
                        placeholder={__(
                          "Enter Button Text",
                          "md-crafto-beauty"
                        )}
                      />
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  )}
                </div>
              </div>
              <div className="md-prime-block-control image-preview image-controle-visible-hover md_crafto_beauty_image_banner__media">
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
                <img
                  src={mediaImage ? mediaImage : siteURL + placeholder}
                  alt={"slider"}
                />
              </div>
            </div>
          </div>
        </div>
        {showAwesomeText && (
          <div className="md_crafto_beauty_image_banner__awesome_text">
            <RichText
              tagName="p"
              value={awesomeText}
              onChange={(value) => setAttributes({ awesomeText: value })}
              placeholder={__("Enter Awesome Text", "md-crafto-beauty")}
              style={{ color: awesomeTextColor }}
            />
          </div>
        )}
      </div>
      <div className="md_crafto_beauty_image_banner__feature_box">
        {showFeatureBox && (
          <div className="md_crafto_beauty_image_banner__feature_box_inner">
            <div className="md_crafto_beauty_image_banner__feature_box_icon">
              <div className="md-prime-block-control image-preview image-controle-visible-hover">
                <div
                  className={`image-controls small-icons icon-center-fixed`}
                >
                  <MediaUploadCheck>
                    <MediaUpload
                      onSelect={(media) =>
                        setAttributes({ featureBoxIcon: media.url })
                      }
                      allowedTypes={["image"]}
                      value={featureBoxIcon}
                      render={({ open }) => (
                        <>
                          {featureBoxIcon ? (
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
                                    setAttributes({ featureBoxIcon: "" })
                                  }
                                  role="button"
                                  tabIndex={0}
                                  onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                      e.preventDefault();
                                      setAttributes({ featureBoxIcon: "" });
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
                  src={featureBoxIcon ? featureBoxIcon : siteURL + placeholder}
                  alt={"slider"}
                />
              </div>
            </div>
            <div className="md_crafto_beauty_image_banner__feature_box_content">
              <RichText
                tagName="h4"
                value={featureBoxTitle}
                onChange={(value) => setAttributes({ featureBoxTitle: value })}
                placeholder={__("Enter Feature Box Title", "md-crafto-beauty")}
                style={{ color: featureBoxTitleColor }}
              />
              <RichText
                tagName="p"
                value={featureBoxContent}
                onChange={(value) =>
                  setAttributes({ featureBoxContent: value })
                }
                placeholder={__("Enter Feature Box Content", "md-crafto-beauty")}
                style={{ color: featureBoxContentColor }}
              />
            </div>
          </div>
        )}
        {showFeatureLink && (
          <div className="md_crafto_beauty_image_banner__feature_link">
            <RichText
              tagName="p"
              value={featureLink}
              onChange={(value) => setAttributes({ featureLink: value })}
              placeholder={__("Enter Feature Box Link", "md-crafto-beauty")}
              style={{ color: featureBoxLinkColor }}
            />
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        )}
      </div>
    </div>
  );
}
