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

import { Fragment } from "@wordpress/element";

import {
  PanelBody,
  Button,
  ToggleControl,
  Tooltip,
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
    processSteps,
    mediaPosition,
    backgroundColor,
    subTitleColor,
    titleColor,
    showSubTitle,
    showTitle,
    showProcessSteps,
    mediaImage,
    showMediaImage
  } = attributes;

  const siteURL = window.location.origin;

  const addStaticPostObj = () => {
    const staticPostObj = [
      ...processSteps,
      {
        id: processSteps.length + 1,
        title: "",
        description: "",
      },
    ];
    setAttributes({ processSteps: staticPostObj });
  };
  const updateStaticPostObj = (index, key, value) => {
    const updatedStaticPostObj = [...processSteps];
    updatedStaticPostObj[index][key] = value;
    setAttributes({ processSteps: updatedStaticPostObj });
  };
  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...processSteps];
    arrayCopy[oldIndex] = processSteps[newIndex];
    arrayCopy[newIndex] = processSteps[oldIndex];

    setAttributes({
      processSteps: arrayCopy,
    });
  };

  return (
    <div {...useBlockProps({ className: "md_litho_video_header_section" })}>
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-litho")}>
          <ToggleControl
            label={__("Show Sub Title", "md-litho")}
            checked={showSubTitle}
            onChange={(value) => setAttributes({ showSubTitle: value })}
          />
          <ToggleControl
            label={__("Show Title", "md-litho")}
            checked={showTitle}
            onChange={(value) => setAttributes({ showTitle: value })}
          />
          <ToggleControl
            label={__("Show Process Steps", "md-litho")}
            checked={showProcessSteps}
            onChange={(value) => setAttributes({ showProcessSteps: value })}
          />
          <ToggleControl
            label={__("Show Media Image", "md-litho")}
            checked={showMediaImage}
            onChange={(value) => setAttributes({ showMediaImage: value })}
          />
          {showMediaImage && (
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
          )}
        </PanelBody>
        <PanelBody
          title={__("Color Settings", "md-litho")}
          initialOpen={false}
        >
          <PanelColorSettings
            title={__("Typography Colors", "md-litho")}
            initialOpen={false}
            colorSettings={[
              {
                value: subTitleColor,
                onChange: (colorValue) =>
                  setAttributes({ subTitleColor: colorValue }),
                label: __("Sub Title Color", "md-litho"),
              },
              {
                value: titleColor,
                onChange: (colorValue) =>
                  setAttributes({ titleColor: colorValue }),
                label: __("Title Color", "md-litho"),
              },
              {
                value: backgroundColor,
                onChange: (colorValue) =>
                  setAttributes({ backgroundColor: colorValue }),
                label: __("Background Color", "md-litho"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className={`md_litho_image_banner_v2_wrap`}>
        <div className="md_litho_image_banner_v2" style={{ backgroundColor }}>
          <div className="container">
            <div
              className="md_litho_image_banner_v2__inner"
              style={{
                flexDirection: mediaPosition === "left" ? "row-reverse" : "row",
              }}
            >
              <div className="md_litho_image_banner_v2__heading">
                {showSubTitle && (
                  <RichText
                    tagName="h4"
                    value={subTitle}
                    onChange={(value) => setAttributes({ subTitle: value })}
                    placeholder={__("Enter Sub Title", "md-litho")}
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
                    placeholder={__("Enter Title", "md-litho")}
                    style={{ color: titleColor }}
                  />
                )}
                {showProcessSteps && (
                  <div className="md_litho_image_banner_v2__process_steps__wrap">
                    <div className="md_litho_image_banner_v2__process_steps">
                      {processSteps &&
                        processSteps.map((postObj, index) => (
                          <div
                            key={postObj.id}
                            className="md_litho_process_step show-items-hover-wrap"
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
                                {index + 1 < processSteps.length && (
                                  <Tooltip text={__("Move Right", "md-prime")}>
                                    <span
                                      className="dashicons dashicons-arrow-right-alt move-right"
                                      role="button"
                                      tabIndex="0"
                                      onClick={() => moveItem(index, index + 1)}
                                      onKeyDown={(e) => {
                                        if (
                                          e.key === "Enter" ||
                                          e.key === " "
                                        ) {
                                          moveItem(index, index + 1);
                                        }
                                      }}
                                      aria-label="Move item right"
                                    ></span>
                                  </Tooltip>
                                )}
                              </div>
                              {1 < processSteps.length && (
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
                                        const updatedArray =
                                          processSteps.filter(
                                            (item, itemIndex) =>
                                              itemIndex !== index
                                          );
                                        setAttributes({
                                          processSteps: updatedArray,
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
                                          const updatedArray =
                                            processSteps.filter(
                                              (item, itemIndex) =>
                                                itemIndex !== index
                                            );
                                          setAttributes({
                                            processSteps: updatedArray,
                                          });
                                        }
                                      }
                                    }}
                                    aria-label="Delete item"
                                  ></i>
                                </Tooltip>
                              )}
                            </div>
                            <div className="md_litho_process_steps__item">
                              <div className="md_litho_process_steps__item_icon_wrap">
                                <div className="md_litho_process_steps__item_icon">
                                  <span className="md_litho_process_steps__item_icon--number">
                                    {index + 1}
                                  </span>
                                  <div className="md_litho_process_steps__item_icon--box-overlay"></div>
                                </div>
                                <span className="md_litho_process_steps__item--separator"></span>
                              </div>
                              <div className="md_litho_process_steps__item_content">
                                <RichText
                                  tagName="span"
                                  className="md_litho_process_steps__item_content--title"
                                  value={postObj.title}
                                  onChange={(value) =>
                                    updateStaticPostObj(index, "title", value)
                                  }
                                  placeholder={__("Enter Text", "md-litho")}
                                />
                                <RichText
                                  tagName="p"
                                  className="md_litho_process_steps__item_content--description"
                                  value={postObj.description}
                                  onChange={(value) =>
                                    updateStaticPostObj(
                                      index,
                                      "description",
                                      value
                                    )
                                  }
                                  placeholder={__("Enter Text", "md-litho")}
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
                )}
              </div>
              {showMediaImage && (
              <div className="md_litho_image_banner_v2__media">
                <div className="md-prime-block-control image-preview image-controle-visible-hover md_litho_image_banner_v2__media1">
                  <div
                    className={`image-controls small-icons icon-center-fixed`}
                  >
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
                    src={mediaImage ? mediaImage : siteURL + placeholder}
                    alt={"slider"}
                  />
                </div>
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}