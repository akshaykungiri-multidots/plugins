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
  InspectorControls,
  MediaUploadCheck,
  MediaUpload,
  RichText,
  PanelColorSettings,
} from "@wordpress/block-editor";

import { PanelBody, Button, Tooltip, ToggleControl } from "@wordpress/components";

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
    title,
    description,
    buttonText,
    bannerImage,
    backgroundColor,
    titleColor,
    descriptionColor,
    buttonTextColor,
    buttonBackgroundColor,
    showTitle,
    showDescription,
    showButton,
    showImage,
  } = attributes;

  const siteURL = window.location.origin;

  return (
    <div {...useBlockProps({ className: "md_hero_banner" })}>
      <InspectorControls>
        <PanelBody title={__("Block Settings")} initialOpen={true}>
          <ToggleControl
            label={__("Show Title", "md-prime")}
            checked={showTitle}
            onChange={(value) => setAttributes({ showTitle: value })}
          />
          <ToggleControl
            label={__("Show Description", "md-prime")}
            checked={showDescription}
            onChange={(value) => setAttributes({ showDescription: value })}
          />
          <ToggleControl
            label={__("Show Button", "md-prime")}
            checked={showButton}
            onChange={(value) => setAttributes({ showButton: value })}
          />
          <ToggleControl
            label={__("Show Image", "md-prime")}
            checked={showImage}
            onChange={(value) => setAttributes({ showImage: value })}
          />
        </PanelBody>
        <PanelBody title={__("Color Settings", "md-prime")} initialOpen={false}>
          <PanelColorSettings
            title={__("Color Settings", "md-prime")}
            initialOpen={true}
            colorSettings={[
              {
                value: backgroundColor,
                onChange: (value) => setAttributes({ backgroundColor: value }),
                label: __("Background Color"),
              },
              {
                value: titleColor,
                onChange: (value) => setAttributes({ titleColor: value }),
                label: __("Title Color"),
              },
              {
                value: descriptionColor,
                onChange: (value) => setAttributes({ descriptionColor: value }),
                label: __("Description Color"),
              },
              {
                value: buttonTextColor,
                onChange: (value) => setAttributes({ buttonTextColor: value }),
                label: __("Button Text Color"),
              },
              {
                value: buttonBackgroundColor,
                onChange: (value) =>
                  setAttributes({ buttonBackgroundColor: value }),
                label: __("Button Background Color"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className="pointcentral-hero-banner" style={{ backgroundColor }}>
        <div className="container">
          <div className="pointcentral-hero-banner-inner">
            <div className="pointcentral-hero-banner-left">
              <div className="pointcentral-hero-banner-content">
                {showTitle && (
                <RichText
                  tagName="h1"
                  className="pointcentral-hero-banner-title"
                  value={title}
                  onChange={(value) => setAttributes({ title: value })}
                  placeholder={__("Hero Banner Title")}
                  style={{ color: titleColor }}
                />
                )}
                {showDescription && (
                <RichText
                  tagName="p"
                  className="pointcentral-hero-banner-description"
                  value={description}
                  onChange={(value) => setAttributes({ description: value })}
                  placeholder={__("Hero Banner Description")}
                  style={{ color: descriptionColor }}
                />
                )}
                {showButton && (
                <div className="pointcentral-hero-banner-button">
                  <RichText
                    tagName="span"
                    className="pointcentral-hero-banner-button-text"
                    value={buttonText}
                    onChange={(value) => setAttributes({ buttonText: value })}
                    placeholder={__("Button Text")}
                    style={{ color: buttonTextColor, backgroundColor: buttonBackgroundColor }}
                  />
                </div>
                )}
              </div>
            </div>
            <div className="pointcentral-hero-banner-right">
              <div className="solution-image">
                {showImage && (
                  <div className="tab-content-right">
                    <div className="md-prime-block-control image-preview image-controle-visible-hover">
                      <div
                        className={`image-controls small-icons icon-center-fixed`}
                      >
                        <MediaUploadCheck>
                          <MediaUpload
                            onSelect={(media) =>
                              setAttributes({ bannerImage: media.url })
                            }
                            allowedTypes={["image"]}
                            value={bannerImage}
                            render={({ open }) => (
                              <>
                                {bannerImage ? (
                                  <>
                                    <Tooltip
                                      text={__("Edit Image", "md-prime")}
                                    >
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
                                        aria-label={__(
                                          "Edit image",
                                          "md-prime"
                                        )}
                                      ></i>
                                    </Tooltip>
                                    <Tooltip
                                      text={__("Remove Image", "md-prime")}
                                    >
                                      <i
                                        className="dashicons dashicons-no-alt remove-image"
                                        onClick={() => {
                                          const toDelete =
                                            // eslint-disable-next-line no-alert
                                            confirm(
                                              __(
                                                "Are you sure you want to delete this image?",
                                                "md-prime"
                                              )
                                            );
                                          if (toDelete) {
                                            setAttributes({ bannerImage: "" });
                                          }
                                        }}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => {
                                          if (
                                            e.key === "Enter" ||
                                            e.key === " "
                                          ) {
                                            e.preventDefault();
                                            setAttributes({ bannerImage: "" });
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
                      {bannerImage ? (
                        <img
                          src={bannerImage}
                          alt={"slider"}
                        />
                      ) : (
                        <img src={siteURL + placeholder} alt={"slider"} />
                      )}
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
