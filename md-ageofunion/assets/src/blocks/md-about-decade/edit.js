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
    decadeHeadingCoverImage,
    decadeHeading,
    decadeHeadingLabel,
    decadeIntroHeading,
    decadeIntroHeadingLabel,
    decadeFigureImage,
    decadeFigureText,
    decadeContent,
    showDecadeHeading,
    showDecadeHeadingLabel,
    showDecadeIntroHeading,
    showDecadeIntroHeadingLabel,
    showDecadeFigureImage,
    showDecadeFigureText,
    showDecadeContent,
    decadeHeadingColor,
    decadeHeadingLabelColor,
    decadeIntroHeadingColor,
    decadeIntroHeadingLabelColor,
    decadeFigureTextColor,
    decadeContentColor,
    backgroundColor,
  } = attributes;

  const siteURL = window.location.origin;

  return (
    <div {...useBlockProps({ className: "md_about_decade_section" })}>
      <InspectorControls>
        <PanelBody title={__("Manifesto Settings")} initialOpen={true}>
          <ToggleControl
            label={__("Show decade heading")}
            checked={showDecadeHeading}
            onChange={(value) => setAttributes({ showDecadeHeading: value })}
          />
          <ToggleControl
            label={__("Show decade heading label")}
            checked={showDecadeHeadingLabel}
            onChange={(value) =>
              setAttributes({ showDecadeHeadingLabel: value })
            }
          />
          <ToggleControl
            label={__("Show decade intro heading")}
            checked={showDecadeIntroHeading}
            onChange={(value) =>
              setAttributes({ showDecadeIntroHeading: value })
            }
          />
          <ToggleControl
            label={__("Show decade intro heading label")}
            checked={showDecadeIntroHeadingLabel}
            onChange={(value) =>
              setAttributes({ showDecadeIntroHeadingLabel: value })
            }
          />
          <ToggleControl
            label={__("Show decade figure image")}
            checked={showDecadeFigureImage}
            onChange={(value) =>
              setAttributes({ showDecadeFigureImage: value })
            }
          />
          <ToggleControl
            label={__("Show decade figure text")}
            checked={showDecadeFigureText}
            onChange={(value) => setAttributes({ showDecadeFigureText: value })}
          />
          <ToggleControl
            label={__("Show decade content")}
            checked={showDecadeContent}
            onChange={(value) => setAttributes({ showDecadeContent: value })}
          />
        </PanelBody>
        <PanelBody title={__("Background Settings")} initialOpen={false}>
          <div className="setting-row">
            <label htmlFor="background-image">
              {__("Background Image", "md-prime")}
            </label>
            <div>
              {!decadeHeadingCoverImage ? (
                <MediaUpload
                  onSelect={(selectedImage) => {
                    setAttributes({
                      decadeHeadingCoverImage: selectedImage.url,
                    });
                  }}
                  allowedTypes={["image"]}
                  value={decadeHeadingCoverImage}
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
                      src={decadeHeadingCoverImage}
                      alt="Background-image-preview"
                    />
                  </div>
                  <Button
                    onClick={() => {
                      setAttributes({
                        decadeHeadingCoverImage: "",
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
                value: decadeHeadingColor,
                onChange: (value) =>
                  setAttributes({ decadeHeadingColor: value }),
                label: __("Decade Heading Color"),
              },
              {
                value: decadeHeadingLabelColor,
                onChange: (value) =>
                  setAttributes({ decadeHeadingLabelColor: value }),
                label: __("Decade Heading Label Color"),
              },
              {
                value: decadeIntroHeadingColor,
                onChange: (value) =>
                  setAttributes({ decadeIntroHeadingColor: value }),
                label: __("Decade Intro Heading Color"),
              },
              {
                value: decadeIntroHeadingLabelColor,
                onChange: (value) =>
                  setAttributes({ decadeIntroHeadingLabelColor: value }),
                label: __("Decade Intro Heading Label Color"),
              },
              {
                value: decadeFigureTextColor,
                onChange: (value) =>
                  setAttributes({ decadeFigureTextColor: value }),
                label: __("Decade Figure Text Color"),
              },
              {
                value: decadeContentColor,
                onChange: (value) =>
                  setAttributes({ decadeContentColor: value }),
                label: __("Decade Content Color"),
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
      <div className="md_about_decade__inner" style={{ backgroundColor }}>
        <div className="md_about_decade__heading">
          {decadeHeadingCoverImage && (
            <img src={decadeHeadingCoverImage} alt="Decade Cover" />
          )}
          <div className="md_about_decade__poster_content">
            <div className="container">
              <div className="md_about_decade__poster_content__inner">
                {showDecadeHeadingLabel && (
                  <RichText
                    tagName="aside"
                    className="md_about_decade__poster_content__heading_label"
                    value={decadeHeadingLabel}
                    placeholder={__("Decade Heading Label", "md-ageofunion")}
                    onChange={(value) => setAttributes({ decadeHeadingLabel: value })}
                    style={{ color: decadeHeadingLabelColor }}
                  />
                )}
                {showDecadeHeading && (
                  <RichText
                    tagName="div"
                    className="md_about_decade__poster_content__heading"
                    value={decadeHeading}
                    placeholder={__("Decade Heading", "md-ageofunion")}
                    onChange={(value) => setAttributes({ decadeHeading: value })}
                    style={{ color: decadeHeadingColor }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="md_about_decade__intro">
            <div className="md_about_decade__intro__inner">
              {showDecadeIntroHeadingLabel && (
                <RichText
                  tagName="aside"
                  className="md_about_decade__intro__heading_label"
                  value={decadeIntroHeadingLabel}
                  placeholder={__("Decade Intro Heading Label", "md-ageofunion")}
                  onChange={(value) => setAttributes({ decadeIntroHeadingLabel: value })}
                  style={{ color: decadeIntroHeadingLabelColor }}
                />
              )}
              {showDecadeIntroHeading && (
                <RichText
                  tagName="h2"
                  className="md_about_decade__intro__heading"
                  value={decadeIntroHeading}
                  placeholder={__("Decade Intro Heading", "md-ageofunion")}
                  onChange={(value) => setAttributes({ decadeIntroHeading: value })}
                  style={{ color: decadeIntroHeadingColor }}  
                />
              )}
            </div>
          </div>
          <div className="md_about_decade__grid">
            <figure className="md_about_decade__grid__figure">
              {showDecadeFigureImage && (
                <div className="md-prime-block-control image-preview image-controle-visible-hover md_about_decade__about_decade_image">
                  <div
                    className={`image-controls small-icons icon-center-fixed`}
                  >
                    <MediaUploadCheck>
                      <MediaUpload
                        onSelect={(media) =>
                          setAttributes({
                            decadeFigureImage: media.url,
                          })
                        }
                        allowedTypes={["image"]}
                        value={decadeFigureImage}
                        render={({ open }) => (
                          <>
                            {decadeFigureImage ? (
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
                                        decadeFigureImage: "",
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
                                          decadeFigureImage: "",
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
                      decadeFigureImage
                        ? decadeFigureImage
                        : siteURL + placeholder
                    }
                    alt={"slider"}
                  />
                </div>
              )}
              {showDecadeFigureText && (
                <figcaption className="md_about_decade__grid__figure__caption">
                  <RichText
                    tagName="p"
                    className="md_about_decade__grid__figure__caption__text"
                    value={decadeFigureText}
                    placeholder={__("Decade Figure Text", "md-ageofunion")}
                    onChange={(value) => setAttributes({ decadeFigureText: value })}
                    style={{ color: decadeFigureTextColor }}
                  />
                </figcaption>
              )}
            </figure>
            {showDecadeContent && (
              <div className="md_about_decade__content">
                <RichText
                  tagName="div"
                  className="md_about_decade__content__text"
                  value={decadeContent}
                  placeholder={__("Decade Content", "md-ageofunion")}
                  onChange={(value) => setAttributes({ decadeContent: value })}
                  style={{ color: decadeContentColor }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
