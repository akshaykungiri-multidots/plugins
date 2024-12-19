/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/
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
  GradientPicker,
} from "@wordpress/components";

import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param root0
 * @param root0.attributes
 * @param root0.attributes.heading
 * @param root0.setAttributes
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
  const {
    backgroundImage,
    enableOverlay,
    overlayColor,
    mediaurl,
    youtubeurl,
    videotype,
    videoText,
    showVideoText,
    videoTextColor,
    showForm,
    formTitle,
    formShortcode,
    formSubtitle,
    formBgColor,
    showFormTitle,
    showFormSubtitle,
    formTitleColor,
    formSubtitleColor,
  } = attributes;

  const [displayPopup, setDisplayPopup] = useState(false);

  return (
    <div {...useBlockProps({ className: "md_litho_video_contact_us_section" })}>
      <InspectorControls>
        <PanelBody title={__("Video Settings", "md-litho")} initialOpen={true}>
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
        <PanelBody
          title={__("Background Settings", "md-litho")}
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
            label={__("Enable Overlay", "md-litho")}
            checked={enableOverlay}
            onChange={(value) => setAttributes({ enableOverlay: value })}
          />
          {enableOverlay && (
            <div className="settings-row">
              <label htmlFor="overlay-color">
                {__("Overlay Color", "md-litho")}
              </label>
              <GradientPicker
                id="overlay-color"
                label={__("Button Background Color")}
                value={overlayColor ? overlayColor : null}
                onChange={(value) => setAttributes({ overlayColor: value })}
                gradients={[
                  {
                    name: "Gradient 1",
                    gradient: "linear-gradient(45deg, #0039E3 0%, #741BD9 65%)",
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
          )}
        </PanelBody>
        <PanelBody
          title={__("Toggle Settings", "md-litho")}
          initialOpen={false}
        >
          <ToggleControl
            label={__("Show Video Text", "md-litho")}
            checked={showVideoText}
            onChange={(value) => setAttributes({ showVideoText: value })}
          />
          <ToggleControl
            label={__("Show Form", "md-litho")}
            checked={showForm}
            onChange={(value) => setAttributes({ showForm: value })}
          />
          <ToggleControl
            label={__("Show Form Title", "md-litho")}
            checked={showFormTitle}
            onChange={(value) => setAttributes({ showFormTitle: value })}
          />
          <ToggleControl
            label={__("Show Form Subtitle", "md-litho")}
            checked={showFormSubtitle}
            onChange={(value) => setAttributes({ showFormSubtitle: value })}
          />
        </PanelBody>
        <PanelBody title={__("Color Settings", "md-litho")} initialOpen={false}>
          <PanelColorSettings
            title={__("Typography Colors", "md-litho")}
            initialOpen={false}
            colorSettings={[
              {
                value: videoTextColor,
                onChange: (colorValue) =>
                  setAttributes({ videoTextColor: colorValue }),
                label: __("Video Text Color", "md-litho"),
              },
              {
                value: formTitleColor,
                onChange: (colorValue) =>
                  setAttributes({ formTitleColor: colorValue }),
                label: __("Form Title Color", "md-litho"),
              },
              {
                value: formSubtitleColor,
                onChange: (colorValue) =>
                  setAttributes({ formSubtitleColor: colorValue }),
                label: __("Form Subtitle Color", "md-litho"),
              },
              {
                value: formBgColor,
                onChange: (colorValue) =>
                  setAttributes({ formBgColor: colorValue }),
                label: __("Form Background Color", "md-litho"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div
        className="md_litho_video_contact_us_wrap"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {enableOverlay && (
          <div
            className="md_litho_video_contact_us_overlay"
            style={{
              background: overlayColor,
              opacity: 0.8,
            }}
          ></div>
        )}
        <div className="md_litho_video_contact_us">
          <div className="md_litho_video_contact_us__inner">
            <div className="md_litho_video_contact_us__youtube">
              <div className="md_litho_video_contact_us__youtube_icon">
                <button
                  className="play-button"
                  onClick={() => setDisplayPopup(true)}
                  aria-label="Play video"
                >
                  <div className="play-button__icon">
                    <i className="dashicons dashicons-controls-play"></i>
                  </div>
                  <span className="video-icon-sonar">
                    <span className="video-icon-sonar-bfr"></span>
                  </span>
                </button>
                <div className="md_litho_video_contact_us__text">
                  {showVideoText && (
                    <RichText
                      tagName="p"
                      value={videoText}
                      onChange={(value) => setAttributes({ videoText: value })}
                      placeholder={__("Enter Text", "md-litho")}
                      style={{ color: videoTextColor }}
                    />
                  )}
                </div>
              </div>
              <div
                className={`litho_video_popup__wrap ${
                  displayPopup ? "show-popup" : ""
                }`}
              >
                <div className="litho_video_popup__inner">
                  <div className="litho_video_popup__inner-header">
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
                  <div className="litho_video_popup__inner-content">
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
        </div>
      </div>
      {showForm && (
        <div className="container">
          <div
            className="md_litho_contact_form"
            style={{ backgroundColor: formBgColor }}
          >
            <div className="md_litho_contact_form__inner">
              {showFormSubtitle && (
                <RichText
                  tagName="p"
                  className="md_litho_contact_form__subtitle"
                  value={formSubtitle}
                  onChange={(value) => setAttributes({ formSubtitle: value })}
                  placeholder={__("Enter Subtitle", "md-litho")}
                  style={{ color: formSubtitleColor }}
                />
              )}
              {showFormTitle && (
                <RichText
                  tagName="h2"
                  className="md_litho_contact_form__title"
                  value={formTitle}
                  onChange={(value) => setAttributes({ formTitle: value })}
                  placeholder={__("Enter Title", "md-litho")}
                  style={{ color: formTitleColor }}
                />
              )}
              <div className="md_litho_contact_form__shortcode">
                <div className="md_litho_contact_form__form_shortcode">
                  <TextControl
                    label={__("Form Shortcode", "md-litho")}
                    value={formShortcode}
                    onChange={(value) =>
                      setAttributes({ formShortcode: value })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
