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
  PanelColorSettings,
} from "@wordpress/block-editor";

import { Fragment } from "@wordpress/element";

import { PanelBody, Button, ToggleControl, SelectControl, TextControl, Tooltip } from "@wordpress/components";

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
    backgroundImage,
    backgroundColor,
    subTitleColor,
    titleColor,
    headingContentColor,
    buttonColor,
    showSubTitle,
    showTitle,
    showHeadingContent,
    showButton,
    mediaurl,
    youtubeurl,
    videotype,
  } = attributes;

  return (
    <div {...useBlockProps({ className: "md_anitian_video_header_section" })}>
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-anitian-fse-full")}>
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
                <Fragment>
                  <div className="image-preview">
                    <img
                      src={backgroundImage}
                      alt="Background-image-preview"
                    />
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
                </Fragment>
              )}
            </div>
          </div>
        </PanelBody>
        <PanelBody
          title={__("Show/Hide", "md-anitian-fse-full")}
          initialOpen={false}
        >
          <ToggleControl
            label={__("Show Sub Title", "md-anitian-fse-full")}
            checked={showSubTitle}
            onChange={(value) => setAttributes({ showSubTitle: value })}
          />
          <ToggleControl
            label={__("Show Title", "md-anitian-fse-full")}
            checked={showTitle}
            onChange={(value) => setAttributes({ showTitle: value })}
          />
          <ToggleControl
            label={__("Show Heading Content", "md-anitian-fse-full")}
            checked={showHeadingContent}
            onChange={(value) => setAttributes({ showHeadingContent: value })}
          />
          <ToggleControl
            label={__("Show Button", "md-anitian-fse-full")}
            checked={showButton}
            onChange={(value) => setAttributes({ showButton: value })}
          />
        </PanelBody>
        <PanelBody
          title={__("Color Settings", "md-anitian-fse-full")}
          initialOpen={false}
        >
          <PanelColorSettings
            title={__("Typography Colors", "md-anitian-fse-full")}
            initialOpen={false}
            colorSettings={[
              {
                value: subTitleColor,
                onChange: (colorValue) =>
                  setAttributes({ subTitleColor: colorValue }),
                label: __("Sub Title Color", "md-anitian-fse-full"),
              },
              {
                value: titleColor,
                onChange: (colorValue) =>
                  setAttributes({ titleColor: colorValue }),
                label: __("Title Color", "md-anitian-fse-full"),
              },
              {
                value: headingContentColor,
                onChange: (colorValue) =>
                  setAttributes({ headingContentColor: colorValue }),
                label: __("Heading Content Color", "md-anitian-fse-full"),
              },
              {
                value: buttonColor,
                onChange: (colorValue) =>
                  setAttributes({ buttonColor: colorValue }),
                label: __("Button Color", "md-anitian-fse-full"),
              },
              {
                value: backgroundColor,
                onChange: (colorValue) =>
                  setAttributes({ backgroundColor: colorValue }),
                label: __("Background Color", "md-anitian-fse-full"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className="md_anitian_text_video_wrap">
        <div
          className="md_anitian_text_video"
          style={{
            background: `${backgroundColor} url(${backgroundImage}) no-repeat center center / cover`,
          }}
        >
          <div className="container">
            <div className="md_anitian_text_video__inner">
              <div className="md_anitian_text_video__heading">
                {showSubTitle && (
                  <RichText
                    tagName="h4"
                    value={subTitle}
                    onChange={(value) => setAttributes({ subTitle: value })}
                    placeholder={__("Enter Sub Title", "md-anitian-fse-full")}
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
                    placeholder={__("Enter Title", "md-anitian-fse-full")}
                    style={{ color: titleColor }}
                  />
                )}
                {showHeadingContent && (
                  <RichText
                    tagName="p"
                    value={headingContent}
                    onChange={(value) =>
                      setAttributes({ headingContent: value })
                    }
                    placeholder={__("Enter Content", "md-anitian-fse-full")}
                    style={{
                      color: headingContentColor,
                    }}
                  />
                )}
                {showButton && (
                  <div className="md_anitian_text_video__btn">
                    <RichText
                      className="btn-anitian md_anitian_text_video__btn"
                      tagName="p"
                      value={buttonLink}
                      onChange={(value) =>
                        setAttributes({ buttonLink: value })
                      }
                      placeholder={__(
                        "Enter Button Text",
                        "md-anitian-fse-full"
                      )}
                      style={{ color: buttonColor }}
                    />
                  </div>
                )}
              </div>
              <div className="md_anitian_text_video__youtube">
                <div className="text_video__youtube">
                  <div className="video_section_wrapper" id="MdYTplayer">
                    <div className="wrapper__box-inner">
                      <div
                        className="video-details-wrapper"
                        style={{ textAlign: "center" }}
                      >
                        <div className="video-data-edit">
                          <SelectControl
                            label={__("Select Video Type", "storyful")}
                            value={videotype}
                            options={[
                              {
                                label: "Media Upload Video",
                                value: "media-upload",
                              },
                              {
                                label: "Youtube Video",
                                value: "youtube",
                              },
                            ]}
                            onChange={(value) => {
                              setAttributes({ videotype: value });
                            }}
                          />
                          {videotype === "youtube" && (
                            <>
                              <TextControl
                                placeholder="Enter youtube video URL"
                                value={youtubeurl}
                                className="video-item-url"
                                onChange={(value) => {
                                  setAttributes({ youtubeurl: value });
                                }}
                              />
                              {youtubeurl && (
                                <iframe
                                  src={
                                    youtubeurl.replace("watch?v=", "embed/") +
                                    "?controls=0"
                                  }
                                  data-src={
                                    youtubeurl + "?enablejsapi=1&controls=0&rel=0"
                                  }
                                  title="video"
                                ></iframe>
                              )}
                            </>
                          )}
                        </div>

                        {videotype === "media-upload" && mediaurl && (
                          <div className="image-preview image-controle-visible-hover">
                            <video
                              autoPlay=""
                              muted=""
                              loop=""
                              className="self-media"
                            >
                              <source src={mediaurl} type="video/mp4" />
                            </video>

                            <div className="item-action-wrap image-controls small-icons icon-center-fixed">
                              <Tooltip text={__("Remove Video")}>
                                <i
                                  className="dashicons dashicons-no-alt remove-image"
                                  role="button"
                                  tabIndex={0}
                                  onClick={() => {
                                    setAttributes({ mediaurl: "" });
                                  }}
                                  onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                      e.preventDefault();
                                      setAttributes({ mediaurl: "" });
                                    }
                                  }}
                                  aria-label="Remove image"
                                ></i>
                              </Tooltip>
                            </div>
                          </div>
                        )}
                        {videotype === "media-upload" && !mediaurl && (
                          <>
                            <MediaUpload
                              onSelect={(newmedia) => {
                                setAttributes({ mediaurl: newmedia.url });
                              }}
                              allowedTypes={["video"]}
                              value={mediaurl}
                              render={({ open }) => (
                                <Button
                                  onClick={open}
                                  className="components-button button button-large"
                                >
                                  <i className="upload"></i> Upload video
                                </Button>
                              )}
                            />
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
