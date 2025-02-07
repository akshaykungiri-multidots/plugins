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

import { Fragment, useState } from "@wordpress/element";

import {
  PanelBody,
  Button,
  ToggleControl,
  SelectControl,
  TextControl,
  Tooltip,
  RangeControl,
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
export default function Edit({ attributes, setAttributes, clientId }) {
  const {
    blockId,
    heading,
    description,
    buttonText,
    backgroundImage,
    enableOverlay,
    overlayColor,
    overlayOpacity,
    backgroundColor,
    headingColor,
    showHeading,
    showDescription,
    showButton,
    buttonColor,
    buttonBackgroundColor,
    buttonHoverColor,
    buttonHoverBackgroundColor,
    descriptionColor,
    mediaurl,
    youtubeurl,
    videotype,
    videoFooterText,
    showVideoFooterText,
    videoFooterTextColor,
  } = attributes;

  const [displayPopup, setDisplayPopup] = useState(false);

  if (blockId !== clientId) {
    setAttributes({ blockId: clientId });
  }

  return (
    <div {...useBlockProps({ className: "md_pofo_video_header_section" })}>
      <InspectorControls>
        <PanelBody title={__("Video Settings", "md-pofo")} initialOpen={true}>
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
                      <video muted="" loop="" className="self-media" id="video">
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
                  {
                    value: buttonBackgroundColor,
                    onChange: (newColor) =>
                      setAttributes({ buttonBackgroundColor: newColor }),
                    label: __("Button Background Color"),
                  },
                  {
                    value: buttonHoverBackgroundColor,
                    onChange: (newColor) =>
                      setAttributes({ buttonHoverBackgroundColor: newColor }),
                    label: __("Button Hover Background Color"),
                  },
                ]}
              />
            </div>
          )}
        </PanelBody>
        <PanelBody
          title={__("Background Settings", "md-pofo")}
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
                <Fragment>
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
                </Fragment>
              )}
            </div>
          </div>
          <ToggleControl
            label={__("Enable Overlay", "md-pofo")}
            checked={enableOverlay}
            onChange={(value) => setAttributes({ enableOverlay: value })}
          />
          {enableOverlay && (
            <Fragment>
              <PanelColorSettings
                title={__("Overlay Color", "md-pofo")}
                initialOpen={false}
                colorSettings={[
                  {
                    value: overlayColor,
                    onChange: (colorValue) =>
                      setAttributes({ overlayColor: colorValue }),
                    label: __("Overlay Color", "md-pofo"),
                  },
                ]}
              />
              <RangeControl
                label={__("Overlay Opacity", "md-pofo")}
                value={overlayOpacity}
                onChange={(value) => setAttributes({ overlayOpacity: value })}
                min={0}
                max={1}
                step={0.01}
              />
            </Fragment>
          )}
        </PanelBody>
        <PanelBody title={__("Toggle Settings", "md-pofo")} initialOpen={false}>
          <ToggleControl
            label={__("Show Heading", "md-pofo")}
            checked={showHeading}
            onChange={(value) => setAttributes({ showHeading: value })}
          />
          <ToggleControl
            label={__("Show Video Footer Text", "md-pofo")}
            checked={showVideoFooterText}
            onChange={(value) => setAttributes({ showVideoFooterText: value })}
          />
        </PanelBody>
        <PanelBody title={__("Color Settings", "md-pofo")} initialOpen={false}>
          <PanelColorSettings
            title={__("Typography Colors", "md-pofo")}
            initialOpen={false}
            colorSettings={[
              {
                value: headingColor,
                onChange: (colorValue) =>
                  setAttributes({ headingColor: colorValue }),
                label: __("Heading Color", "md-pofo"),
              },
              {
                value: descriptionColor,
                onChange: (colorValue) =>
                  setAttributes({ descriptionColor: colorValue }),
                label: __("Description Color", "md-pofo"),
              },
              {
                value: backgroundColor,
                onChange: (colorValue) =>
                  setAttributes({ backgroundColor: colorValue }),
                label: __("Background Color", "md-pofo"),
              },
              {
                value: videoFooterTextColor,
                onChange: (colorValue) =>
                  setAttributes({ videoFooterTextColor: colorValue }),
                label: __("Video Footer Text Color", "md-pofo"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <style>
          {`
            #block-${blockId} .md_pofo_text_video__button .md_btn {
              color: ${buttonColor} !important;
              background: ${buttonBackgroundColor} !important;
              border-color: ${buttonColor} !important;
            }
            #block-${blockId} .md_pofo_text_video__button .md_btn:hover {
              color: ${buttonHoverColor} !important;
              background: ${buttonHoverBackgroundColor} !important;
              border-color: ${buttonHoverColor} !important;
            }
          `}
        </style>
      <div
        className="md_pofo_text_video_wrap"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {enableOverlay && (
          <div
            className="md_pofo_text_video_overlay"
            style={{
              backgroundColor: overlayColor,
              opacity: overlayOpacity,
            }}
          ></div>
        )}
        <div
          className="md_pofo_text_video"
          style={{
            background: `${backgroundColor}`,
          }}
        >
          <div className="md_pofo_text_video__inner">
            <div className="md_pofo_text_video__heading">
              {showHeading && (
                <RichText
                  tagName="h1"
                  value={heading}
                  onChange={(value) => setAttributes({ heading: value })}
                  placeholder={__("Enter Heading", "md-pofo")}
                  style={{ color: headingColor }}
                />
              )}
              {showDescription && (
                <RichText
                  tagName="p"
                  className="md_pofo_text_video__description"
                  value={description}
                  onChange={(value) => setAttributes({ description: value })}
                  placeholder={__("Enter Description", "md-pofo")}
                  style={{ color: descriptionColor }}
                />
              )}
              {showButton && (
                <div className="md_pofo_text_video__button">
                  <div
                    className="md_btn md_btn-black md_btn-medium xs-margin-two-all border-radius-4 first-btn"
                    style={{ color: buttonColor }}
                  >
                    <i className="fa fa-play-circle" aria-hidden="true"></i>
                    <RichText
                      tagName="span"
                      value={buttonText}
                      onChange={(value) => setAttributes({ buttonText: value })}
                      placeholder={__("Enter Button Text", "md-pofo")}
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="md_pofo_text_video__youtube">
              <div className="md_pofo_text_video__youtube_icon">
                <button
                  className="play-button"
                  onClick={() => setDisplayPopup(true)}
                  aria-label="Play video"
                >
                  <img src={playicon} alt="playicon" />
                </button>
              </div>
              <div
                className={`pofo_video_popup__wrap ${
                  displayPopup ? "show-popup" : ""
                }`}
              >
                <div className="pofo_video_popup__inner">
                  <div className="pofo_video_popup__inner-header">
                    <i
                      className="dashicons dashicons-no-alt close-popup"
                      onClick={() => {
                        setDisplayPopup(false);
                      }}
                      role="button"
                      tabIndex={0}
                      aria-label="Close popup"
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          // Trigger the click event when Enter or Space key is pressed
                          event.target.click();
                        }
                      }}
                    ></i>
                  </div>
                  <div className="pofo_video_popup__inner-content">
                    <div className="text_video__youtube">
                      <div className="video_section_wrapper" id="MdYTplayer">
                        <div className="wrapper__box-inner">
                          <div
                            className="video-details-wrapper"
                            style={{ textAlign: "center" }}
                          >
                            <div className="video-data-edit">
                              {videotype === "youtube" && (
                                <>
                                  {youtubeurl && (
                                    <iframe
                                      src={
                                        youtubeurl.replace(
                                          "watch?v=",
                                          "embed/"
                                        ) + "?controls=0"
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
                                <video
                                  muted=""
                                  loop=""
                                  className="self-media"
                                  id="video"
                                  controls
                                >
                                  <source src={mediaurl} type="video/mp4" />
                                </video>
                              </div>
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
          <div className="md_pofo_text_video__footer">
            {showVideoFooterText && (
              <RichText
                tagName="p"
                value={videoFooterText}
                onChange={(value) => setAttributes({ videoFooterText: value })}
                placeholder={__("Enter Footer Text", "md-pofo")}
                style={{ color: videoFooterTextColor }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
