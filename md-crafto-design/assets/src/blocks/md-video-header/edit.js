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
export default function Edit({ attributes, setAttributes }) {
  const {
    title,
    subTitle,
    backgroundImage,
    enableOverlay,
    overlayColor,
    overlayOpacity,
    backgroundColor,
    titleColor,
    subTitleColor,
    showTitle,
    showSubTitle,
    mediaurl,
    youtubeurl,
    videotype,
  } = attributes;

  const [displayPopup, setDisplayPopup] = useState(false);

  return (
    <div
      {...useBlockProps({ className: "md_crafto_design_video_header_section" })}
    >
      <InspectorControls>
        <PanelBody
          title={__("Video Settings", "md-crafto-design")}
          initialOpen={true}
        >
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
          title={__("Background Settings", "md-crafto-design")}
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
          <div className="md_slider__background_settings">
            <ToggleControl
              label={__("Enable Overlay", "md-prime")}
              checked={enableOverlay}
              onChange={(value) => setAttributes({ enableOverlay: value })}
            />
            {enableOverlay && (
              <>
                <PanelColorSettings
                  title={__("Overlay Color Settings", "md-storyful-fse-full")}
                  initialOpen={false}
                  colorSettings={[
                    {
                      value: overlayColor,
                      onChange: (newColor) =>
                        setAttributes({ overlayColor: newColor }),
                      label: __("Overlay Color"),
                    },
                  ]}
                />
                <RangeControl
                  label={__("Overlay Opacity")}
                  value={overlayOpacity}
                  min={0}
                  max={1}
                  step={0.05}
                  onChange={(value) => setAttributes({ overlayOpacity: value })}
                />
              </>
            )}
          </div>
        </PanelBody>
        <PanelBody
          title={__("Toggle Settings", "md-crafto-design")}
          initialOpen={false}
        >
          <ToggleControl
            label={__("Show Title", "md-crafto-design")}
            checked={showTitle}
            onChange={(value) => setAttributes({ showTitle: value })}
          />
          <ToggleControl
            label={__("Show Sub Title", "md-crafto-design")}
            checked={showSubTitle}
            onChange={(value) => setAttributes({ showSubTitle: value })}
          />
        </PanelBody>
        <PanelBody
          title={__("Color Settings", "md-crafto-design")}
          initialOpen={false}
        >
          <PanelColorSettings
            title={__("Typography Colors", "md-crafto-design")}
            initialOpen={false}
            colorSettings={[
              {
                value: titleColor,
                onChange: (colorValue) =>
                  setAttributes({ titleColor: colorValue }),
                label: __("Title Color", "md-crafto-design"),
              },
              {
                value: backgroundColor,
                onChange: (colorValue) =>
                  setAttributes({ backgroundColor: colorValue }),
                label: __("Background Color", "md-crafto-design"),
              },
              {
                value: subTitleColor,
                onChange: (colorValue) =>
                  setAttributes({ subTitleColor: colorValue }),
                label: __("Sub Title Color", "md-crafto-design"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div
        className="md_crafto_design_text_video_wrap"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {enableOverlay && (
          <div
            className="md_page_title__overlay"
            style={{
              backgroundColor: overlayColor,
              opacity: overlayOpacity,
            }}
          ></div>
        )}
        <div
          className="md_crafto_design_text_video"
          style={{
            background: `${backgroundColor}`,
          }}
        >
          <div className="md_crafto_design_text_video__inner">
            <div className="md_crafto_design_text_video__youtube">
              <div className="md_crafto_design_text_video__youtube_icon">
                <button
                  className="play-button"
                  onClick={() => setDisplayPopup(true)}
                  aria-label="Play video"
                >
                  <img src={playicon} alt="playicon" />
                </button>
              </div>
              <div
                className={`crafto_video_popup__wrap ${
                  displayPopup ? "show-popup" : ""
                }`}
              >
                <div className="crafto_video_popup__inner">
                  <div className="crafto_video_popup__inner-header">
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
                  <div className="crafto_video_popup__inner-content">
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
            <div className="md_crafto_design_text_video__heading">
              <div className="md_crafto_design_text_video__typing_title">
                {showTitle && (
                  <RichText
                    tagName="h2"
                    value={title}
                    onChange={(value) => setAttributes({ title: value })}
                    placeholder={__("Enter Title", "md-crafto-design")}
                    style={{ color: titleColor }}
                  />
                )}
                {showSubTitle && (
                  <RichText
                    tagName="p"
                    value={subTitle}
                    onChange={(value) => setAttributes({ subTitle: value })}
                    placeholder={__("Enter Sub Title", "md-crafto-design")}
                    style={{ color: subTitleColor }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
