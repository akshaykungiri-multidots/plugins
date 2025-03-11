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

import { Fragment, useState } from "@wordpress/element";

import {
  PanelBody,
  Button,
  ToggleControl,
  Tooltip,
  GradientPicker,
  SelectControl,
  TextControl,
} from "@wordpress/components";

import placeholder from "./placeholder-image.png";

import { leftAlign, rightAlign } from "../icons";

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
    mediaPosition,
    backgroundColor,
    subTitleColor,
    titleColor,
    headingContentColor,
    showSubTitle,
    showTitle,
    showHeadingContent,
    showButton,
    mediaImage,
    backgroundImage,
    buttonColor,
    buttonBackgroundColor,
    buttonHoverColor,
    buttonHoverBackgroundColor,
    showProcess,
    processItems,
    processItemTitleColor,
    processItemContentColor,
    mediaurl,
    youtubeurl,
    videotype,
    videoTitle,
    showVideo,
    videoTitleColor,
  } = attributes;

  const siteURL = window.location.origin;

  const [displayPopup, setDisplayPopup] = useState(false);

  const addStaticPostObj = () => {
    const staticPostObj = [
      ...processItems,
      {
        id: processItems.length + 1,
        title: "",
        content: "",
      },
    ];
    setAttributes({ processItems: staticPostObj });
  };
  const updateStaticPostObj = (index, key, value) => {
    const updatedStaticPostObj = [...processItems];
    updatedStaticPostObj[index][key] = value;
    setAttributes({ processItems: updatedStaticPostObj });
  };
  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...processItems];
    arrayCopy[oldIndex] = processItems[newIndex];
    arrayCopy[newIndex] = processItems[oldIndex];

    setAttributes({
      processItems: arrayCopy,
    });
  };

  return (
    <div
      {...useBlockProps({ className: "md_crafto_beauty_video_header_section" })}
    >
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-crafto-beauty")}>
          <ToggleControl
            label={__("Show Sub Title", "md-crafto-beauty")}
            checked={showSubTitle}
            onChange={(value) => setAttributes({ showSubTitle: value })}
          />
          <ToggleControl
            label={__("Show Title", "md-crafto-beauty")}
            checked={showTitle}
            onChange={(value) => setAttributes({ showTitle: value })}
          />
          <ToggleControl
            label={__("Show Heading Content", "md-crafto-beauty")}
            checked={showHeadingContent}
            onChange={(value) => setAttributes({ showHeadingContent: value })}
          />
          <ToggleControl
            label={__("Show Process", "md-crafto-beauty")}
            checked={showProcess}
            onChange={(value) => setAttributes({ showProcess: value })}
          />
          <div className="setting-row inspector-field inspector-field-alignment">
            <label htmlFor="alignment" className="inspector-mb-0">
              {__("Media Position")}
            </label>
            <div className="inspector-field-button-list inspector-field-button-list-fluid">
              <button
                className={
                  "left" === mediaPosition
                    ? "active inspector-button"
                    : " inspector-button"
                }
                onClick={() => setAttributes({ mediaPosition: "left" })}
              >
                {leftAlign}
              </button>
              <button
                className={
                  "right" === mediaPosition
                    ? "active inspector-button"
                    : " inspector-button"
                }
                onClick={() => setAttributes({ mediaPosition: "right" })}
              >
                {rightAlign}
              </button>
            </div>
          </div>
        </PanelBody>
        <PanelBody
          title={__("Video Settings", "md-crafto")}
          initialOpen={false}
        >
          <ToggleControl
            label={__("Show Video", "md-crafto")}
            checked={showVideo}
            onChange={(value) => setAttributes({ showVideo: value })}
          />
          {showVideo && (
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
                          muted=""
                          loop=""
                          className="self-media"
                          id="video"
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
          )}
        </PanelBody>
        <PanelBody title={__("Background Settings")} initialOpen={false}>
          <div className="setting-row">
            <label htmlFor="background-image">
              {__("Background Image", "md-prime")}
            </label>
            <div>
              {!backgroundImage ? (
                <MediaUpload
                  onSelect={(selectedImage) => {
                    setAttributes({ backgroundImage: selectedImage.url });
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
                      setAttributes({ backgroundImage: "" });
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
        <PanelBody title={__("Button Settings")} initialOpen={false}>
          <ToggleControl
            label={__("Show Button", "md-crafto-beauty")}
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
          title={__("Color Settings", "md-crafto-beauty")}
          initialOpen={false}
        >
          <PanelColorSettings
            title={__("Typography Colors", "md-crafto-beauty")}
            initialOpen={false}
            colorSettings={[
              {
                value: subTitleColor,
                onChange: (colorValue) =>
                  setAttributes({ subTitleColor: colorValue }),
                label: __("Sub Title Color", "md-crafto-beauty"),
              },
              {
                value: titleColor,
                onChange: (colorValue) =>
                  setAttributes({ titleColor: colorValue }),
                label: __("Title Color", "md-crafto-beauty"),
              },
              {
                value: headingContentColor,
                onChange: (colorValue) =>
                  setAttributes({ headingContentColor: colorValue }),
                label: __("Heading Content Color", "md-crafto-beauty"),
              },
              {
                value: backgroundColor,
                onChange: (colorValue) =>
                  setAttributes({ backgroundColor: colorValue }),
                label: __("Background Color", "md-crafto-beauty"),
              },
              {
                value: processItemTitleColor,
                onChange: (colorValue) =>
                  setAttributes({ processItemTitleColor: colorValue }),
                label: __("Process Title Color", "md-crafto-beauty"),
              },
              {
                value: processItemContentColor,
                onChange: (colorValue) =>
                  setAttributes({ processItemContentColor: colorValue }),
                label: __("Process Content Color", "md-crafto-beauty"),
              },
              {
                value: videoTitleColor,
                onChange: (colorValue) =>
                  setAttributes({ videoTitleColor: colorValue }),
                label: __("Video Title Color", "md-crafto-beauty"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div
        className={`md_crafto_beauty_image_banner_processs_wrap`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        <style>
          {`
            .md_crafto_beauty_image_banner_processs__btn {
              color: ${buttonColor} !important;
              background: ${buttonBackgroundColor} !important;
            }
            .md_crafto_beauty_image_banner_processs__btn:hover {
              color: ${buttonHoverColor} !important;
              background: ${buttonHoverBackgroundColor} !important;
            }
          `}
        </style>
        <div
          className="md_crafto_beauty_image_banner_processs"
          style={{ backgroundColor }}
        >
          <div className="container">
            <div
              className="md_crafto_beauty_image_banner_processs__inner"
              style={{
                flexDirection: mediaPosition === "left" ? "row-reverse" : "row",
              }}
            >
              <div className="md_crafto_beauty_image_banner_processs__heading">
                {showSubTitle && (
                  <RichText
                    tagName="h4"
                    value={subTitle}
                    onChange={(value) => setAttributes({ subTitle: value })}
                    placeholder={__("Enter Sub Title", "md-crafto-beauty")}
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
                    placeholder={__("Enter Title", "md-crafto-beauty")}
                    style={{ color: titleColor }}
                  />
                )}
                {showHeadingContent && (
                  <RichText
                    tagName="p"
                    className="md_crafto_beauty_image_banner__content"
                    value={headingContent}
                    onChange={(value) =>
                      setAttributes({ headingContent: value })
                    }
                    placeholder={__("Enter Content", "md-crafto-beauty")}
                    style={{
                      color: headingContentColor,
                    }}
                  />
                )}
                <div className="md_crafto_beauty_image_banner_processs__btn_wrapper">
                  {showButton && (
                    <div className="btn-anitian md_crafto_beauty_image_banner_processs__btn md-btn-main btn-large has-right-arrow">
                      <RichText
                        tagName="span"
                        value={buttonLink}
                        onChange={(value) =>
                          setAttributes({ buttonLink: value })
                        }
                        placeholder={__(
                          "Enter Button Text",
                          "md-crafto-beauty"
                        )}
                      />
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  )}
                  <div className="md_crafto_text_video__youtube">
                    <div className="md_crafto_text_video__youtube_icon">
                      <button
                        className="play-button"
                        aria-label="Play video"
                        style={{ color: videoTitleColor }}
                      >
                        <i
                          className="bi bi-play-circle"
                          role="button"
                          tabIndex={0}
                          onClick={() => setDisplayPopup(true)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              setDisplayPopup(true);
                            }
                          }}
                          aria-label="Play video"
                        ></i>
                        <RichText
                          tagName="span"
                          value={videoTitle}
                          onChange={(value) =>
                            setAttributes({ videoTitle: value })
                          }
                          placeholder={__(
                            "Enter Video Title",
                            "md-crafto-beauty"
                          )}
                          style={{ color: videoTitleColor }}
                        />
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
                            <div
                              className="video_section_wrapper"
                              id="MdYTplayer"
                            >
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
                                        <source
                                          src={mediaurl}
                                          type="video/mp4"
                                        />
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
              <div className="md-prime-block-control image-preview image-controle-visible-hover md_crafto_beauty_image_banner_processs__media">
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
            </div>
          </div>
          {showProcess && (
            <div className="container">
              <div className="md_crafto_beauty_processs__wrapper">
                <div className="md_process_section__process_items">
                  {processItems &&
                    processItems.map((postObj, index) => (
                      <div
                        className={
                          "md_process_section__process_item show-items-hover-wrap"
                        }
                        key={index}
                      >
                        <div className="item-action-wrap show-items-hover small-icons">
                          <div className="move-item">
                            {0 < index && (
                              <Tooltip text={__("Move Left", "md-prime")}>
                                <span
                                  className="dashicons dashicons-arrow-left-alt move-left"
                                  onClick={() => moveItem(index, index - 1)}
                                  onKeyDown={(event) => {
                                    if (
                                      event.key === "Enter" ||
                                      event.key === " "
                                    ) {
                                      moveItem(index, index - 1);
                                    }
                                  }}
                                  role="button"
                                  tabIndex={0}
                                  aria-label="Move item left"
                                ></span>
                              </Tooltip>
                            )}
                            {index + 1 < processItems.length && (
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
                          {1 < processItems.length && (
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
                                    const updatedArray = processItems.filter(
                                      (item, itemIndex) => itemIndex !== index
                                    );
                                    setAttributes({
                                      processItems: updatedArray,
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
                                      const updatedArray = processItems.filter(
                                        (item, itemIndex) => itemIndex !== index
                                      );
                                      setAttributes({
                                        processItems: updatedArray,
                                      });
                                    }
                                  }
                                }}
                                aria-label="Delete item"
                              ></i>
                            </Tooltip>
                          )}
                        </div>
                        <div className="ma_process_block--inner-item-inner">
                          <div className="ma_process_block--inner-item-process_step">
                            <span className="process-step">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <span className="process-step-separator"></span>
                          </div>
                          <div className="ma_process_block--inner-item-content">
                            <RichText
                              tagName="span"
                              name="accordian-title"
                              placeholder={__("Title…")}
                              value={postObj.title}
                              onChange={(value) =>
                                updateStaticPostObj(index, "title", value)
                              }
                              style={{ color: processItemTitleColor }}
                            />
                            <RichText
                              tagName="p"
                              className="process-content"
                              name="accordian-content"
                              placeholder={__("Content…")}
                              value={postObj.content}
                              onChange={(value) =>
                                updateStaticPostObj(index, "content", value)
                              }
                              style={{ color: processItemContentColor }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                <div
                  className="add-item-wrap"
                  onClick={addStaticPostObj}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault(); // Prevent default action for space key
                      addStaticPostObj(); // Trigger the click handler
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={__("Add new item", "md-prime")}
                >
                  <Tooltip text={__("Add New Item", "md-prime")}>
                    <i className="add-new-item dashicons dashicons-plus"></i>
                  </Tooltip>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
