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

import { Fragment, useEffect, useRef, useState } from "@wordpress/element";

import {
  PanelBody,
  Button,
  ToggleControl,
  SelectControl,
  TextControl,
  Tooltip,
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
    typedText,
    backgroundImage,
    backgroundColor,
    titleColor,
    showTitle,
    mediaurl,
    youtubeurl,
    videotype,
    videoFooterText,
    showVideoFooterText,
    videoFooterTextColor,
  } = attributes;

  const typingRef = useRef(null);

  const [displayPopup, setDisplayPopup] = useState(false);

  useEffect(() => {
    if (typingRef.current) {
      // Initialize typing effect when the element is available
      const words = typedText.map((item) => item.text); // Get words from attributes
      const typingSpeed = 100;
      const typingDelay = 1000;

      let wordIndex = 0;
      let charIndex = 0;

      const type = () => {
        if (wordIndex < words.length) {
          const word = words[wordIndex];
          typingRef.current.textContent = word.substring(0, charIndex);

          if (charIndex < word.length) {
            charIndex++;
            setTimeout(type, typingSpeed);
          } else {
            charIndex = 0;
            wordIndex++;
            setTimeout(type, typingDelay);
          }
        } else {
          // Restart typing effect (optional)
          wordIndex = 0;
          setTimeout(type, typingDelay);
        }
      };

      type(); // Start typing effect
    }
  }, [typedText]);

  const addStaticPostObj = () => {
    const staticPostObj = [
      ...typedText,
      {
        id: typedText.length + 1,
        text: "",
      },
    ];
    setAttributes({ typedText: staticPostObj });
  };
  const updateStaticPostObj = (index, key, value) => {
    const updatedStaticPostObj = [...typedText];
    updatedStaticPostObj[index][key] = value;
    setAttributes({ typedText: updatedStaticPostObj });
  };
  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...typedText];
    arrayCopy[oldIndex] = typedText[newIndex];
    arrayCopy[newIndex] = typedText[oldIndex];

    setAttributes({
      typedText: arrayCopy,
    });
  };

  return (
    <div {...useBlockProps({ className: "md_resort_video_header_section" })}>
      <InspectorControls>
        <PanelBody title={__("Video Settings", "md-resort")} initialOpen={true}>
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
                      <video muted="" loop="" className="self-media" id="video" >
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
        <PanelBody title={__("Text Settings", "md-resort")} initialOpen={false}>
          <div className="md_icon_text__slider">
            {typedText &&
              typedText.map((postObj, index) => (
                <div
                  key={postObj.id}
                  className="logo-slide show-items-hover-wrap"
                >
                  <div className="item-action-wrap show-items-hover small-icons">
                    <div className="move-item">
                      {0 < index && (
                        <Tooltip text={__("Move Left", "md-prime")}>
                          <span
                            className="dashicons dashicons-arrow-left-alt move-left"
                            onClick={() => moveItem(index, index - 1)}
                            onKeyDown={(event) => {
                              if (event.key === "Enter" || event.key === " ") {
                                moveItem(index, index - 1);
                              }
                            }}
                            role="button"
                            tabIndex={0}
                            aria-label="Move item left"
                          ></span>
                        </Tooltip>
                      )}
                      {index + 1 < typedText.length && (
                        <Tooltip text={__("Move Right", "md-prime")}>
                          <span
                            className="dashicons dashicons-arrow-right-alt move-right"
                            role="button"
                            tabIndex="0"
                            onClick={() => moveItem(index, index + 1)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" || e.key === " ") {
                                moveItem(index, index + 1);
                              }
                            }}
                            aria-label="Move item right"
                          ></span>
                        </Tooltip>
                      )}
                    </div>
                    {1 < typedText.length && (
                      <Tooltip text={__("Remove Item", "md-prime")}>
                        <i
                          className="remove-item dashicons dashicons-no-alt"
                          role="button"
                          tabIndex="0"
                          onClick={() => {
                            const toDelete =
                              // eslint-disable-next-line no-alert
                              confirm(
                                __(
                                  "Are you sure you want to delete this item?",
                                  "md-prime"
                                )
                              );
                            if (toDelete) {
                              const updatedArray = typedText.filter(
                                (item, itemIndex) => itemIndex !== index
                              );
                              setAttributes({
                                typedText: updatedArray,
                              });
                            }
                          }}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              const toDelete =
                                // eslint-disable-next-line no-alert
                                confirm(
                                  __(
                                    "Are you sure you want to delete this item?",
                                    "md-prime"
                                  )
                                );
                              if (toDelete) {
                                const updatedArray = typedText.filter(
                                  (item, itemIndex) => itemIndex !== index
                                );
                                setAttributes({
                                  typedText: updatedArray,
                                });
                              }
                            }
                          }}
                          aria-label="Delete item"
                        ></i>
                      </Tooltip>
                    )}
                  </div>
                  <div className="md_icon_text__item-image">
                    <TextControl
                      placeholder="Enter Text"
                      value={postObj.text}
                      onChange={(value) =>
                        updateStaticPostObj(index, "text", value)
                      }
                    />
                  </div>
                </div>
              ))}
          </div>
          <Button
            onClick={addStaticPostObj}
            className="components-button button button-large"
          >
            {__("Add Text", "md-resort")}
          </Button>
        </PanelBody>
        <PanelBody
          title={__("Background Settings", "md-resort")}
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
        </PanelBody>
        <PanelBody
          title={__("Toggle Settings", "md-resort")}
          initialOpen={false}
        >
          <ToggleControl
            label={__("Show Title", "md-resort")}
            checked={showTitle}
            onChange={(value) => setAttributes({ showTitle: value })}
          />
          <ToggleControl
            label={__("Show Video Footer Text", "md-resort")}
            checked={showVideoFooterText}
            onChange={(value) => setAttributes({ showVideoFooterText: value })}
          />
        </PanelBody>
        <PanelBody
          title={__("Color Settings", "md-resort")}
          initialOpen={false}
        >
          <PanelColorSettings
            title={__("Typography Colors", "md-resort")}
            initialOpen={false}
            colorSettings={[
              {
                value: titleColor,
                onChange: (colorValue) =>
                  setAttributes({ titleColor: colorValue }),
                label: __("Title Color", "md-resort"),
              },
              {
                value: backgroundColor,
                onChange: (colorValue) =>
                  setAttributes({ backgroundColor: colorValue }),
                label: __("Background Color", "md-resort"),
              },
              {
                value: videoFooterTextColor,
                onChange: (colorValue) =>
                  setAttributes({ videoFooterTextColor: colorValue }),
                label: __("Video Footer Text Color", "md-resort"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className="md_resort_text_video_wrap" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div
          className="md_resort_text_video"
          style={{
            background: `${backgroundColor}`,
          }}
        >
          <div
            className="md_resort_text_video__inner"
          >
            <div className="md_resort_text_video__heading">
              <h3
                className="md_resort_text_video__typing_title"
                style={{ color: titleColor }}
              >
                {showTitle && (
                  <RichText
                    tagName="span"
                    value={title}
                    onChange={(value) => setAttributes({ title: value })}
                    placeholder={__("Enter Title", "md-resort")}
                  />
                )}
                <span
                  className="md_resort_text_video__typing"
                  data-typing-speed="100"
                  data-typing-delay="1000"
                  data-typing-words={typedText
                    .map((item) => item.text)
                    .join(",")}
                  ref={typingRef}
                ></span>
              </h3>
            </div>
            <div className="md_resort_text_video__youtube">
              <div className="md_resort_text_video__youtube_icon">
                <button
                  className="play-button"
                  onClick={() => setDisplayPopup(true)}
                  aria-label="Play video"
                >
                  <img src={playicon} alt="playicon" />
                </button>
              </div>
              <div
                className={`resort_video_popup__wrap ${
                  displayPopup ? "show-popup" : ""
                }`}
              >
                <div className="resort_video_popup__inner">
                  <div className="resort_video_popup__inner-header">
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
                  <div className="resort_video_popup__inner-content">
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
          <div className="md_resort_text_video__footer">
            {showVideoFooterText && (
              <RichText
                tagName="p"
                value={videoFooterText}
                onChange={(value) =>
                  setAttributes({ videoFooterText: value })
                }
                placeholder={__("Enter Footer Text", "md-resort")}
                style={{ color: videoFooterTextColor }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
