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
  MediaUploadCheck,
  MediaUpload,
  PanelColorSettings,
} from "@wordpress/block-editor";

import {
  PanelBody,
  Button,
  ToggleControl,
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
    authorImage,
    testimonialContent,
    authorName,
    authorDesignation,
    backgroundImage,
    enableOverlay,
    backgroundImageOverlay,
    headingColor,
    contentColor,
    authorNameColor,
    authorDesignationColor,
    showHeading,
    showAuthorImage,
    showAuthorName,
    showAuthorDesignation,
  } = attributes;

  const siteURL = window.location.origin;

  return (
    <div {...useBlockProps({ className: "md_anitian_single_testimonial" })}>
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-storyful-fse-full")}>
          <ToggleControl
            label={__("Show Heading", "md-storyful-fse-full")}
            checked={showHeading}
            onChange={(value) => setAttributes({ showHeading: value })}
          />
          <ToggleControl
            label={__("Show Author Image", "md-storyful-fse-full")}
            checked={showAuthorImage}
            onChange={(value) => setAttributes({ showAuthorImage: value })}
          />
          <ToggleControl
            label={__("Show Author Name", "md-storyful-fse-full")}
            checked={showAuthorName}
            onChange={(value) => setAttributes({ showAuthorName: value })}
          />
          <ToggleControl
            label={__("Show Author Designation", "md-storyful-fse-full")}
            checked={showAuthorDesignation}
            onChange={(value) =>
              setAttributes({ showAuthorDesignation: value })
            }
          />
        </PanelBody>
        <PanelBody
          title={__("Background Settings", "md-prime")}
          initialOpen={false}
        >
          <div className="setting-row">
            <label htmlFor="background-image">
              {__("Background Image", "md-prime")}
            </label>
            <div>
              {!backgroundImage ? (
                <MediaUpload
                  onSelect={(selectedImage) => {
                    setAttributes({
                      backgroundImage: selectedImage.url,
                    });
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
                      setAttributes({
                        backgroundImage: "",
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
          <div className="setting-row">
            <ToggleControl
              label={__("Enable Overlay", "md-anitian-fse-v2")}
              checked={enableOverlay}
              onChange={(value) => setAttributes({ enableOverlay: value })}
            />
            {enableOverlay && (
              <PanelColorSettings
                title={__("Overlay Color Settings", "md-storyful-fse-full")}
                initialOpen={false}
                colorSettings={[
                  {
                    value: backgroundImageOverlay,
                    onChange: (value) =>
                      setAttributes({ backgroundImageOverlay: value }),
                    label: __("Overlay Color", "md-storyful-fse-full"),
                  },
                ]}
              />
            )}
          </div>
        </PanelBody>
        <PanelBody
          title={__("Color Settings", "md-storyful-fse-full")}
          initialOpen={false}
        >
          <PanelColorSettings
            title={__("Typography Colors", "md-storyful-fse-full")}
            initialOpen={false}
            colorSettings={[
              {
                value: headingColor,
                onChange: (value) => setAttributes({ headingColor: value }),
                label: __("Heading Color", "md-storyful-fse-full"),
              },
              {
                value: contentColor,
                onChange: (value) => setAttributes({ contentColor: value }),
                label: __("Content Color", "md-storyful-fse-full"),
              },
              {
                value: authorNameColor,
                onChange: (value) => setAttributes({ authorNameColor: value }),
                label: __("Author Name Color", "md-storyful-fse-full"),
              },
              {
                value: authorDesignationColor,
                onChange: (value) =>
                  setAttributes({ authorDesignationColor: value }),
                label: __("Author Designation Color", "md-storyful-fse-full"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div
        className="md_anitian_single_tesimonial__wrapper"
        style={{ backgroundColor: enableOverlay ? backgroundImageOverlay : "" }}
      >
        <div
          className="md_anitian_single_tesimonial__inner"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="container">
            <div className="md_anitian_single_tesimonial__inner">
              <div className="md_anitian_single_tesimonial__heading">
                {showHeading && (
                  <RichText
                    tagName="h1"
                    className="header-page-title__heading"
                    value={heading}
                    onChange={(value) => setAttributes({ heading: value })}
                    placeholder={__("Enter Title", "md-anitian-fse-v2")}
                    style={{ color: headingColor }}
                  />
                )}
              </div>
              {showAuthorImage && (
                <div className="md_anitian_single_tesimonial__image">
                  <div className="cover_cta__image">
                    <div className="md-prime-block-control image-preview image-controle-visible-hover">
                      <div
                        className={`image-controls small-icons icon-center-fixed`}
                      >
                        <MediaUploadCheck>
                          <MediaUpload
                            onSelect={(media) =>
                              setAttributes({
                                authorImage: media.url,
                              })
                            }
                            allowedTypes={["image"]}
                            value={authorImage}
                            render={({ open }) => (
                              <>
                                {authorImage ? (
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
                                            setAttributes({
                                              authorImage: "",
                                            });
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
                                            setAttributes({ authorImage: "" });
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
                      {authorImage ? (
                        <img src={authorImage} alt={"Author Name"} />
                      ) : (
                        <img src={siteURL + placeholder} alt={"Author Name"} />
                      )}
                    </div>
                  </div>
                </div>
              )}
              <div className="md_anitian_single_tesimonial__content">
                <div className="md_anitian_single_tesimonial__content__inner">
                  <RichText
                    tagName="p"
                    className="testimonials__content"
                    value={testimonialContent}
                    onChange={(value) =>
                      setAttributes({ testimonialContent: value })
                    }
                    placeholder={__("Enter Testimonial Content", "md-anitian-fse-v2")}
                    style={{ color: contentColor }}
                  />
                  {showAuthorName && (
                    <RichText
                      tagName="h4"
                      className="testimonials__author"
                      value={authorName}
                      onChange={(value) => setAttributes({ authorName: value })}
                      placeholder={__("Enter Author Name", "md-anitian-fse-v2")}
                      style={{ color: authorNameColor }}
                    />
                  )}
                  {showAuthorDesignation && (
                    <RichText
                      tagName="h5"
                      className="testimonials__author__designation"
                      value={authorDesignation}
                      onChange={(value) =>
                        setAttributes({ authorDesignation: value })
                      }
                      placeholder={__("Enter Author Designation", "md-anitian-fse-v2")}
                      style={{ color: authorDesignationColor }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
