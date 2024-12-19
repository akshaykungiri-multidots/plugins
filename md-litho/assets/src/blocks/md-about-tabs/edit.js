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
  InspectorControls,
  PanelColorSettings,
  RichText,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";

import {
  PanelBody,
  ToggleControl,
  Tooltip,
  SelectControl,
  Button,
  TextControl,
} from "@wordpress/components";

import fontIcons from "./fontIcons";

import { useState } from "@wordpress/element";

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
    aboutTabs,
    showTabIcon,
    tabItemColor,
    tabActiveItemColor,
    showTabContentImage,
    showTabContentHeading,
    showTabContentVideo,
    showTabContentTitle,
    showTabContentDescription,
    tabContentHeadingColor,
    tabContentTitleColor,
    tabContentDescriptionColor,
  } = attributes;
  const addStaticPostObj = () => {
    const staticPostObj = [
      ...aboutTabs,
      {
        id: aboutTabs.length + 1,
        icon: "",
        iconTitle: "",
        mediaImage: "",
        videoHeading: "",
        videotype: "youtube",
        videoURL: "",
        editVideo: true,
        displayPopup: false,
        videoTitle: "",
        title: "",
        description: "",
      },
    ];
    setAttributes({ aboutTabs: staticPostObj });
  };
  const updateStaticPostObj = (index, key, value) => {
    const updatedStaticPostObj = [...aboutTabs];
    updatedStaticPostObj[index][key] = value;
    setAttributes({ aboutTabs: updatedStaticPostObj });
  };
  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...aboutTabs];
    arrayCopy[oldIndex] = aboutTabs[newIndex];
    arrayCopy[newIndex] = aboutTabs[oldIndex];

    setAttributes({
      aboutTabs: arrayCopy,
    });
  };

  const [currentTab, setCurrentTab] = useState(0);

  const siteURL = window.location.origin;

  const displayPopupVideo = (index) => {
    const updatedArray = [...aboutTabs];
    updatedArray[index].displayPopup = true;
    setAttributes({
      aboutTabs: updatedArray,
    });
  };

  return (
    <div {...useBlockProps({ className: "md_about_tabs" })}>
      <InspectorControls>
        <PanelBody title={__("Toggle Settings")}>
          <ToggleControl
            label={__("Show Tab Icon")}
            checked={showTabIcon}
            onChange={(value) => setAttributes({ showTabIcon: value })}
          />
          <ToggleControl
            label={__("Show Tab Content Image")}
            checked={showTabContentImage}
            onChange={(value) => setAttributes({ showTabContentImage: value })}
          />
          <ToggleControl
            label={__("Show Tab Content Heading")}
            checked={showTabContentHeading}
            onChange={(value) =>
              setAttributes({ showTabContentHeading: value })
            }
          />
          <ToggleControl
            label={__("Show Tab Content Video")}
            checked={showTabContentVideo}
            onChange={(value) => setAttributes({ showTabContentVideo: value })}
          />
          <ToggleControl
            label={__("Show Tab Content Title")}
            checked={showTabContentTitle}
            onChange={(value) => setAttributes({ showTabContentTitle: value })}
          />
          <ToggleControl
            label={__("Show Tab Content Description")}
            checked={showTabContentDescription}
            onChange={(value) =>
              setAttributes({ showTabContentDescription: value })
            }
          />
        </PanelBody>
        <PanelBody title={__("Color Settings")} initialOpen={false}>
          <PanelColorSettings
            title={__("Color Settings")}
            colorSettings={[
              {
                value: tabItemColor,
                onChange: (value) => setAttributes({ tabItemColor: value }),
                label: __("Tab Item Color"),
              },
              {
                value: tabActiveItemColor,
                onChange: (value) =>
                  setAttributes({ tabActiveItemColor: value }),
                label: __("Tab Active Item Color"),
              },
              {
                value: tabContentHeadingColor,
                onChange: (value) =>
                  setAttributes({ tabContentHeadingColor: value }),
                label: __("Tab Content Heading Color"),
              },
              {
                value: tabContentTitleColor,
                onChange: (value) =>
                  setAttributes({ tabContentTitleColor: value }),
                label: __("Tab Content Title Color"),
              },
              {
                value: tabContentDescriptionColor,
                onChange: (value) =>
                  setAttributes({ tabContentDescriptionColor: value }),
                label: __("Tab Content Description Color"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className="md_about_tabs__wrap">
        <ul className="md_about_tabs__inner">
          {aboutTabs &&
            aboutTabs.map((postObj, index) => (
              <li
                key={postObj.id}
                className="md_about_tabs_item show-items-hover-wrap"
                style={{
                  color:
                    currentTab === index ? tabActiveItemColor : tabItemColor,
                }}
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
                    {index + 1 < aboutTabs.length && (
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
                  {1 < aboutTabs.length && (
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
                            const updatedArray = aboutTabs.filter(
                              (item, itemIndex) => itemIndex !== index
                            );
                            setAttributes({
                              aboutTabs: updatedArray,
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
                              const updatedArray = aboutTabs.filter(
                                (item, itemIndex) => itemIndex !== index
                              );
                              setAttributes({
                                aboutTabs: updatedArray,
                              });
                            }
                          }
                        }}
                        aria-label="Delete item"
                      ></i>
                    </Tooltip>
                  )}
                </div>
                <div className="md_about_tabs__item-icon">
                  {showTabIcon && (
                  <div className="md_about_tabs__item-icon-inner">
                    <SelectControl
                      id={`select-icon-${index}`}
                      closeMenuOnSelect={false}
                      value={postObj.icon}
                      options={fontIcons}
                      onChange={(value) =>
                        updateStaticPostObj(index, "icon", value)
                      }
                    />
                  </div>
                  )}
                  <div className="md_about_tabs__item-icon__wrapper">
                    {postObj.icon && showTabIcon && (
                      <div className="md_about_tabs__item-icon__wrapper-icon">
                        <i className={"fa " + postObj.icon}></i>
                      </div>
                    )}
                    <div className="md_about_tabs__item-icon__wrapper-text">
                      <RichText
                        tagName="h4"
                        className="image-title"
                        value={postObj.iconTitle}
                        onClick={() => setCurrentTab(index)}
                        onChange={(value) =>
                          updateStaticPostObj(index, "iconTitle", value)
                        }
                        placeholder={__("Title", "md-prime")}
                        style={{ color: tabItemColor }}
                      />
                    </div>
                  </div>
                </div>
              </li>
            ))}
        </ul>
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
        <div className="md_about_tabs__content">
          {currentTab in aboutTabs && (
            <div className="md_about_tabs__content-inner active">
              {showTabContentImage && (
                <div className="md_litho_about_tabs__media">
                  <div className="md-prime-block-control image-preview image-controle-visible-hover md_litho_about_tabs__media1">
                    <div
                      className={`image-controls small-icons icon-center-fixed`}
                    >
                      <MediaUploadCheck>
                        <MediaUpload
                          onSelect={(media) =>
                            updateStaticPostObj(
                              currentTab,
                              "mediaImage",
                              media.url
                            )
                          }
                          allowedTypes={["image"]}
                          value={aboutTabs[currentTab].mediaImage}
                          render={({ open }) => (
                            <>
                              {aboutTabs[currentTab].mediaImage ? (
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
                                        updateStaticPostObj(
                                          currentTab,
                                          "mediaImage",
                                          ""
                                        )
                                      }
                                      role="button"
                                      tabIndex={0}
                                      onKeyDown={(e) => {
                                        if (
                                          e.key === "Enter" ||
                                          e.key === " "
                                        ) {
                                          e.preventDefault();
                                          updateStaticPostObj(
                                            currentTab,
                                            "mediaImage",
                                            ""
                                          );
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
                        aboutTabs[currentTab].mediaImage ||
                        siteURL + placeholder
                      }
                      alt={"slider"}
                    />
                    <span className="image-overlay"></span>
                  </div>
                </div>
              )}
              <div className="md_about_tabs__content-video_block">
                {showTabContentHeading && (
                  <RichText
                    tagName="h3"
                    className="video-heading"
                    value={aboutTabs[currentTab].videoHeading}
                    onChange={(value) =>
                      updateStaticPostObj(currentTab, "videoHeading", value)
                    }
                    placeholder={__("Video Heading", "md-prime")}
                    style={{ color: tabContentHeadingColor }}
                  />
                )}
                {showTabContentVideo && (
                <div className="md_about_tabs__content-video">
                  {aboutTabs[currentTab].editVideo ? (
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
                                value={aboutTabs[currentTab].videotype}
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
                                  updateStaticPostObj(
                                    currentTab,
                                    "videotype",
                                    value
                                  );
                                }}
                              />
                              {aboutTabs[currentTab].videotype ===
                                "youtube" && (
                                <>
                                  <TextControl
                                    placeholder="Enter youtube video URL"
                                    value={aboutTabs[currentTab].videoURL}
                                    className="video-item-url"
                                    onChange={(value) => {
                                      updateStaticPostObj(
                                        currentTab,
                                        "videoURL",
                                        value
                                      );
                                    }}
                                  />
                                  {aboutTabs[currentTab].videoURL && (
                                    <iframe
                                      src={
                                        aboutTabs[currentTab].videoURL.replace(
                                          "watch?v=",
                                          "embed/"
                                        ) + "?controls=0"
                                      }
                                      data-src={
                                        aboutTabs[currentTab].videoURL +
                                        "?enablejsapi=1&controls=0&rel=0"
                                      }
                                      title="video"
                                    ></iframe>
                                  )}
                                </>
                              )}
                            </div>

                            {aboutTabs[currentTab].videotype ===
                              "media-upload" &&
                              aboutTabs[currentTab].videoURL && (
                                <div className="image-preview image-controle-visible-hover">
                                  <video
                                    muted=""
                                    loop=""
                                    className="self-media"
                                    id="video"
                                  >
                                    <source
                                      src={aboutTabs[currentTab].videoURL}
                                      type="video/mp4"
                                    />
                                  </video>
                                  <div className="item-action-wrap image-controls small-icons icon-center-fixed">
                                    <Tooltip text={__("Remove Video")}>
                                      <i
                                        className="dashicons dashicons-no-alt remove-image"
                                        role="button"
                                        tabIndex={0}
                                        onClick={() => {
                                          updateStaticPostObj(
                                            currentTab,
                                            "videoURL",
                                            ""
                                          );
                                        }}
                                        onKeyDown={(e) => {
                                          if (
                                            e.key === "Enter" ||
                                            e.key === " "
                                          ) {
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
                            {aboutTabs[currentTab].videotype ===
                              "media-upload" &&
                              !aboutTabs[currentTab].videoURL && (
                                <>
                                  <MediaUpload
                                    onSelect={(newmedia) => {
                                      updateStaticPostObj(
                                        currentTab,
                                        "videoURL",
                                        newmedia.url
                                      );
                                    }}
                                    allowedTypes={["video"]}
                                    value={aboutTabs[currentTab].videoURL}
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
                  ) : (
                    <div className="md_about_tabs__content-video__display">
                      <div className="md_about_tabs__content-video__button">
                        <button
                          className="play-button"
                          onClick={() => {
                            displayPopupVideo(currentTab);
                          }}
                          aria-label="Play video"
                        >
                          <i className="dashicons dashicons-controls-play"></i>
                        </button>
                        <RichText
                          tagName="span"
                          className="video-title"
                          value={aboutTabs[currentTab].videoTitle}
                          onChange={(value) =>
                            updateStaticPostObj(currentTab, "videoTitle", value)
                          }
													onClick={(e) => {
														e.preventDefault();
														displayPopupVideo(currentTab);
													}}
                          placeholder={__("Video Title", "md-prime")}
                        />
                      </div>
                      <div
                        className={`litho_video_popup__wrap ${
                          aboutTabs[currentTab].displayPopup ? "show-popup" : ""
                        }`}
                      >
                        <div className="litho_video_popup__inner">
                          <div className="litho_video_popup__inner-header">
                            <i
                              className="dashicons dashicons-no-alt close-popup"
                              onClick={() => {
                                updateStaticPostObj(
                                  currentTab,
                                  "displayPopup",
                                  false
                                );
                              }}
                              role="button"
                              tabIndex={0}
                              aria-label="Close popup"
                              onKeyDown={(event) => {
                                if (
                                  event.key === "Enter" ||
                                  event.key === " "
                                ) {
                                  event.preventDefault();
                                  // Trigger the click event when Enter or Space key is pressed
                                  event.target.click();
                                }
                              }}
                            ></i>
                          </div>
                          <div className="litho_video_popup__inner-content">
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
                                      {aboutTabs[currentTab].videotype ===
                                        "youtube" && (
                                        <>
                                          {aboutTabs[currentTab].videoURL && (
                                            <iframe
                                              src={
                                                aboutTabs[
                                                  currentTab
                                                ].videoURL.replace(
                                                  "watch?v=",
                                                  "embed/"
                                                ) + "?controls=0"
                                              }
                                              data-src={
                                                aboutTabs[currentTab].videoURL +
                                                "?enablejsapi=1&controls=0&rel=0"
                                              }
                                              title="video"
                                            ></iframe>
                                          )}
                                        </>
                                      )}
                                    </div>

                                    {aboutTabs[currentTab].videotype ===
                                      "media-upload" &&
                                      aboutTabs[currentTab].videoURL && (
                                        <div className="image-preview image-controle-visible-hover">
                                          <video
                                            muted=""
                                            loop=""
                                            className="self-media"
                                            id="video"
                                            controls
                                          >
                                            <source
                                              src={
                                                aboutTabs[currentTab].videoURL
                                              }
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
                  )}
                  <Button
                    className="button"
                    onClick={() => {
                      updateStaticPostObj(
                        currentTab,
                        "editVideo",
                        !aboutTabs[currentTab].editVideo
                      );
                    }}
                  >
                    {aboutTabs[currentTab].editVideo ? "Save" : "Edit"}
                  </Button>
                </div>
                )}
              </div>
              <div className="md_about_tabs__content-text">
                {showTabContentTitle && (
                  <RichText
                    tagName="h3"
                    className="video-heading"
                    value={aboutTabs[currentTab].title}
                    onChange={(value) =>
                      updateStaticPostObj(currentTab, "title", value)
                    }
                    placeholder={__("Title", "md-prime")}
                    style={{ color: tabContentTitleColor }}
                  />
                )}
                {showTabContentDescription && (
                  <RichText
                    tagName="p"
                    className="video-heading"
                    value={aboutTabs[currentTab].description}
                    onChange={(value) =>
                      updateStaticPostObj(currentTab, "description", value)
                    }
                    placeholder={__("Description", "md-prime")}
                    style={{ color: tabContentDescriptionColor }}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
