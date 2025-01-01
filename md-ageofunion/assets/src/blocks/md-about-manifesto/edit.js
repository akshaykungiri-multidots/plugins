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

import { Fragment, WPElement } from "@wordpress/element";

import {
  PanelBody,
  Button,
  ToggleControl,
  Tooltip,
} from "@wordpress/components";

import placeholder from "./placeholder-image.png";

/**
 * React hook that is used to mark the packages element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-element/
 */

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
    manifestoHeadingCoverImage,
    manifestoIntroHeading,
    manifestoFigureImage,
    manifestoContent,
    showManifestoIntroHeading,
    showManifestoFigureImage,
    showManifestoContent,
    manifestoIntroHeadingColor,
    manifestoContentColor,
    backgroundColor,
  } = attributes;

  const siteURL = window.location.origin;

  return (
    <div {...useBlockProps({ className: "md_about_manifesto_section" })}>
      <InspectorControls>
        <PanelBody title={__("Manifesto Settings")} initialOpen={true}>
          <ToggleControl
            label={__("Show manifesto intro heading")}
            checked={showManifestoIntroHeading}
            onChange={(value) =>
              setAttributes({ showManifestoIntroHeading: value })
            }
          />
          <ToggleControl
            label={__("Show manifesto figure image")}
            checked={showManifestoFigureImage}
            onChange={(value) =>
              setAttributes({ showManifestoFigureImage: value })
            }
          />
          <ToggleControl
            label={__("Show manifesto content")}
            checked={showManifestoContent}
            onChange={(value) => setAttributes({ showManifestoContent: value })}
          />
        </PanelBody>
        <PanelBody title={__("Background Settings")} initialOpen={false}>
          <div className="setting-row">
            <label htmlFor="background-image">
              {__("Background Image", "md-prime")}
            </label>
            <div>
              {!manifestoHeadingCoverImage ? (
                <MediaUpload
                  onSelect={(selectedImage) => {
                    setAttributes({
                      manifestoHeadingCoverImage: selectedImage.url,
                    });
                  }}
                  allowedTypes={["image"]}
                  value={manifestoHeadingCoverImage}
                  render={({ open }) => (
                    <Button onClick={open} className="button button-large">
                      {__("Upload Image", "md-prime")}
                    </Button>
                  )}
                />
              ) : (
                <>
                  <div className="image-preview">
                    <img
                      src={manifestoHeadingCoverImage}
                      alt="Background-image-preview"
                    />
                  </div>
                  <Button
                    onClick={() => {
                      setAttributes({
                        manifestoHeadingCoverImage: "",
                      });
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
        <PanelBody title={__("Color Settings")} initialOpen={false}>
          <PanelColorSettings
            title={__("Color Settings")}
            colorSettings={[
              {
                value: manifestoIntroHeadingColor,
                onChange: (value) =>
                  setAttributes({ manifestoIntroHeadingColor: value }),
                label: __("Manifesto Intro Heading Color"),
              },
              {
                value: manifestoContentColor,
                onChange: (value) =>
                  setAttributes({ manifestoContentColor: value }),
                label: __("Manifesto Content Color"),
              },
              {
                value: backgroundColor,
                onChange: (value) =>
                  setAttributes({ backgroundColor: value }),
                label: __("Background Color"),
              }
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className="md_about_manifesto__inner" style={{ backgroundColor }}>
        <div className="md_about_manifesto__heading">
          {manifestoHeadingCoverImage && (
            <img src={manifestoHeadingCoverImage} alt="Manifesto Cover" />
          )}
        </div>
        <div className="container">
          <div className="md_about_manifesto__intro">
            <div className="md_about_manifesto__intro__inner">
              {showManifestoIntroHeading && (
                <RichText
                  tagName="h2"
                  className="md_about_manifesto__intro__heading"
                  value={manifestoIntroHeading}
                  placeholder={__("Manifesto Intro Heading", "md-ageofunion")}
                  onChange={(value) => setAttributes({ manifestoIntroHeading: value })}
                  style={{ color: manifestoIntroHeadingColor }}  
                />
              )}
              <figure className="md_about_manifesto__grid__figure">
                {showManifestoFigureImage && (
                  <div className="md-prime-block-control image-preview image-controle-visible-hover md_about_manifesto__about_manifesto_image">
                    <div
                      className={`image-controls small-icons icon-center-fixed`}
                    >
                      <MediaUploadCheck>
                        <MediaUpload
                          onSelect={(media) =>
                            setAttributes({
                              manifestoFigureImage: media.url,
                            })
                          }
                          allowedTypes={["image"]}
                          value={manifestoFigureImage}
                          render={({ open }) => (
                            <>
                              {manifestoFigureImage ? (
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
                                        setAttributes({
                                          manifestoFigureImage: "",
                                        })
                                      }
                                      role="button"
                                      tabIndex={0}
                                      onKeyDown={(e) => {
                                        if (
                                          e.key === "Enter" ||
                                          e.key === " "
                                        ) {
                                          e.preventDefault();
                                          setAttributes({
                                            manifestoFigureImage: "",
                                          });
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
                        manifestoFigureImage
                          ? manifestoFigureImage
                          : siteURL + placeholder
                      }
                      alt={"slider"}
                    />
                  </div>
                )}
              </figure>
              {showManifestoContent && (
                <div className="md_about_manifesto__content">
                  <RichText
                    tagName="div"
                    className="md_about_manifesto__content__text"
                    value={manifestoContent}
                    placeholder={__("Manifesto Content", "md-ageofunion")}
                    onChange={(value) => setAttributes({ manifestoContent: value })}
                    style={{ color: manifestoContentColor }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
