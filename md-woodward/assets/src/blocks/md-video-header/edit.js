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

import {
  PanelBody,
  Button,
  ToggleControl,
  SelectControl,
  TextControl,
  Tooltip,
  GradientPicker,
} from "@wordpress/components";

import playicon from "./ic-play.svg";

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
    videoPosterImage,
    backgroundColor,
    subTitleColor,
    titleColor,
    headingContentColor,
    showSubTitle,
    showTitle,
    showHeadingContent,
    showButton,
    mediaurl,
    youtubeurl,
    videotype,
    buttonColor,
    buttonBackgroundColor,
    buttonHoverColor,
    buttonHoverBackgroundColor,
  } = attributes;

  return (
    <div {...useBlockProps({ className: "md_woodward_video_header_section" })}>
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-woodward")}>
          <div className="setting-row">
            <label htmlFor="background-image">
              {__("Video Poster Image", "md-prime")}
            </label>
            <div>
              {!videoPosterImage ? (
                <MediaUpload
                  onSelect={(selectedImage) => {
                    setAttributes({
                      videoPosterImage: selectedImage.url,
                    });
                  }}
                  allowedTypes={["image"]}
                  value={videoPosterImage}
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
                      src={videoPosterImage}
                      alt="Background-image-preview"
                    />
                  </div>
                  <Button
                    onClick={() => {
                      setAttributes({
                        videoPosterImage: "",
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
          title={__("Toggle Settings", "md-woodward")}
          initialOpen={false}
        >
          <ToggleControl
            label={__("Show Sub Title", "md-woodward")}
            checked={showSubTitle}
            onChange={(value) => setAttributes({ showSubTitle: value })}
          />
          <ToggleControl
            label={__("Show Title", "md-woodward")}
            checked={showTitle}
            onChange={(value) => setAttributes({ showTitle: value })}
          />
          <ToggleControl
            label={__("Show Heading Content", "md-woodward")}
            checked={showHeadingContent}
            onChange={(value) => setAttributes({ showHeadingContent: value })}
          />
        </PanelBody>
        <PanelBody title={__("Button Settings")} initialOpen={false}>
          <ToggleControl
            label={__("Show Button", "md-woodward")}
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
          title={__("Color Settings", "md-woodward")}
          initialOpen={false}
        >
          <PanelColorSettings
            title={__("Typography Colors", "md-woodward")}
            initialOpen={false}
            colorSettings={[
              {
                value: subTitleColor,
                onChange: (colorValue) =>
                  setAttributes({ subTitleColor: colorValue }),
                label: __("Sub Title Color", "md-woodward"),
              },
              {
                value: titleColor,
                onChange: (colorValue) =>
                  setAttributes({ titleColor: colorValue }),
                label: __("Title Color", "md-woodward"),
              },
              {
                value: headingContentColor,
                onChange: (colorValue) =>
                  setAttributes({ headingContentColor: colorValue }),
                label: __("Heading Content Color", "md-woodward"),
              },
              {
                value: backgroundColor,
                onChange: (colorValue) =>
                  setAttributes({ backgroundColor: colorValue }),
                label: __("Background Color", "md-woodward"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className="md_woodward_text_video_wrap">
        <style>
          {`
            .md_woodward_text_video__btn {
              color: ${buttonColor};
              background: ${buttonBackgroundColor};
            }
            .md_woodward_text_video__btn:hover {
              color: ${buttonHoverColor} !important;
              background: ${buttonHoverBackgroundColor};
            }
          `}
        </style>
        <div
          className="md_woodward_text_video"
          style={{
            background: `${backgroundColor}`,
          }}
        >
          <div className="container">
            <div className="md_woodward_text_video__inner">
              <div className="md_woodward_text_video__heading">
                {showSubTitle && (
                  <RichText
                    tagName="h4"
                    value={subTitle}
                    onChange={(value) => setAttributes({ subTitle: value })}
                    placeholder={__("Enter Sub Title", "md-woodward")}
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
                    placeholder={__("Enter Title", "md-woodward")}
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
                    placeholder={__("Enter Content", "md-woodward")}
                    style={{
                      color: headingContentColor,
                    }}
                  />
                )}
                {showButton && (
                  <div className="md_woodward_text_video__btn_wrapper">
                    <RichText
                      className="btn-anitian md_woodward_text_video__btn md-btn-main has-right-arrow"
                      tagName="p"
                      value={buttonLink}
                      onChange={(value) => setAttributes({ buttonLink: value })}
                      placeholder={__("Enter Button Text", "md-woodward")}
                    />
                  </div>
                )}
              </div>
              <div className="md_woodward_text_video__youtube">
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
                                    youtubeurl +
                                    "?enablejsapi=1&controls=0&rel=0"
                                  }
                                  title="video"
                                ></iframe>
                              )}
                            </>
                          )}
                        </div>

                        {videotype === "media-upload" && mediaurl && (
                          <div className="image-preview image-controle-visible-hover">
                            {videoPosterImage ? (
                              <video
                                muted=""
                                loop=""
                                className="self-media"
                                poster={videoPosterImage}
                                id="video"
                              >
                                <source src={mediaurl} type="video/mp4" />
                              </video>
                            ) : (
                              <video
                                muted=""
                                loop=""
                                className="self-media"
                                id="video"
                              >
                                <source src={mediaurl} type="video/mp4" />
                              </video>
                            )}
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
                            <img
                              src={playicon}
                              alt="Play video"
                              id="circle-play-b"
                              className="media-and-text__video-play-btn"
                            />
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
