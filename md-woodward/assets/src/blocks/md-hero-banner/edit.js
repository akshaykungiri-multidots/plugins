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
  RichText,
  PanelColorSettings,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";

import {
  PanelBody,
  ToggleControl,
  GradientPicker,
  Button,
  Tooltip,
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
    heading,
    description,
    headingColor,
    descriptionColor,
    backgroundColor,
    mediaImage,
    showDescription,
    showMedia,
  } = attributes;

  const siteURL = window.location.origin;

  return (
    <div {...useBlockProps({ className: "md_hero_banner" })}>
      <InspectorControls>
        <PanelBody title={__("Block Settings")} initialOpen={true}>
          <ToggleControl
            label={__("Show Description")}
            checked={showDescription}
            onChange={(value) => setAttributes({ showDescription: value })}
          />
          <ToggleControl
            label={__("Show Media")}
            checked={showMedia}
            onChange={(value) => setAttributes({ showMedia: value })}
          />
          <label htmlFor="background-color">{__("Background Color")}</label>
          <GradientPicker
            id="background-color"
            label={__("Background Color")}
            value={backgroundColor ? backgroundColor : null}
            onChange={(value) => setAttributes({ backgroundColor: value })}
            gradients={[
              {
                name: "Gradient 1",
                gradient: "linear-gradient(90deg, #428AC4 0%, #005494 30%, #252A5B 50%)",
              },
              {
                name: "Gradient 2",
                gradient: "linear-gradient(to right, #c73727 0%, #e76a24 100%)",
              },
              {
                name: "Gradient 3",
                gradient: "linear-gradient(45deg, #f3ec78, #af4261)",
              },
            ]}
          />
        </PanelBody>
        <PanelBody title={__("Color Settings")} initialOpen={false}>
          <PanelColorSettings
            title={__("Color Settings")}
            colorSettings={[
              {
                value: headingColor,
                onChange: (value) => setAttributes({ headingColor: value }),
                label: __("Heading Color"),
              },
              {
                value: descriptionColor,
                onChange: (value) => setAttributes({ descriptionColor: value }),
                label: __("Description Color"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div
        className="md_hero_banner__inner"
        style={{ background: backgroundColor }}
      >
        <div className="md_hero_banner__content">
          <div className="container">
            <div className="md_hero_banner__content__inner">
              <RichText
                tagName="h1"
                className="md_hero_banner__heading"
                value={heading}
                onChange={(value) => setAttributes({ heading: value })}
                style={{ color: headingColor }}
                placeholder={__("Enter Heading")}
              />
              {showDescription && (
                <RichText
                  className="md_hero_banner__description"
                  tagName="p"
                  value={description}
                  onChange={(value) => setAttributes({ description: value })}
                  style={{ color: descriptionColor }}
                  placeholder={__("Enter Description")}
                />
              )}
            </div>
          </div>
        </div>
        <div className="md_hero_banner__media">
          {showMedia && (
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
              <img
                src={mediaImage ? mediaImage : siteURL + placeholder}
                alt={"slider"}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
