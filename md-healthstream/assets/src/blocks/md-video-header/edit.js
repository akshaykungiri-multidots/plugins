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
  TextControl,
  Tooltip,
  RangeControl,
} from "@wordpress/components";

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
    mediaurl,
    iconBlocks,
    showIconBlocks,
    numberOfColumns,
    showIconText,
    iconTextColor,
    backgroundColor,
  } = attributes;

  const addStaticPostObj = () => {
    const staticPostObj = [
      ...iconBlocks,
      {
        id: iconBlocks.length + 1,
        icon_image: "",
        icon_title: "",
      },
    ];
    setAttributes({ iconBlocks: staticPostObj });
  };
  const updateStaticPostObj = (index, key, value) => {
    const updatedStaticPostObj = [...iconBlocks];
    updatedStaticPostObj[index][key] = value;
    setAttributes({ iconBlocks: updatedStaticPostObj });
  };
  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...iconBlocks];
    arrayCopy[oldIndex] = iconBlocks[newIndex];
    arrayCopy[newIndex] = iconBlocks[oldIndex];

    setAttributes({
      iconBlocks: arrayCopy,
    });
  };

  return (
    <div
      {...useBlockProps({ className: "md_healthstream_video_header_section" })}
    >
      <InspectorControls>
        <PanelBody
          title={__("Video Settings", "md-healthstream")}
          initialOpen={true}
        >
          <div className="text_video__youtube">
            <div className="video_section_wrapper" id="MdYTplayer">
              <div className="wrapper__box-inner">
                <div className="video-details-wrapper">
                  <div className="video-data-edit">
                    <TextControl
                      placeholder="Enter iframe video URL"
                      value={mediaurl}
                      className="video-item-url"
                      onChange={(value) => {
                        setAttributes({ mediaurl: value });
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PanelBody>
        <PanelBody
          title={__("Icon Settings", "md-healthstream")}
          initialOpen={false}
        >
          <ToggleControl
            label={__("Show Icon Blocks", "md-healthstream")}
            checked={showIconBlocks}
            onChange={(value) => setAttributes({ showIconBlocks: value })}
          />
          {showIconBlocks && (
            <Fragment>
              <RangeControl
                label={__("Number of Columns", "md-healthstream")}
                value={numberOfColumns}
                onChange={(value) => setAttributes({ numberOfColumns: value })}
                min={1}
                max={4}
              />
              <ToggleControl
                label={__("Show Icon Text", "md-healthstream")}
                checked={showIconText}
                onChange={(value) => setAttributes({ showIconText: value })}
              />
            </Fragment>
          )}
        </PanelBody>
        <PanelBody
          title={__("Color Settings", "md-healthstream")}
          initialOpen={false}
        >
          <PanelColorSettings
            title={__("Typography Colors", "md-healthstream")}
            initialOpen={false}
            colorSettings={[
              {
                value: iconTextColor,
                onChange: (value) => setAttributes({ iconTextColor: value }),
                label: __("Icon Text Color", "md-healthstream"),
              },
              {
                value: backgroundColor,
                onChange: (value) => setAttributes({ backgroundColor: value }),
                label: __("Background Color", "md-healthstream"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className="md_healthstream_text_video_wrap">
        <div className="md_healthstream_text_video" style={{ backgroundColor }}>
          <div className="md_healthstream_text_video__inner">
            <div className="md_healthstream_text_video__youtube">
              {mediaurl && (
                <iframe
                  src={mediaurl}
                  frameBorder="0"
                  allowFullScreen
                  title="Video Player"
                ></iframe>
              )}
            </div>
          </div>
          {showIconBlocks && (
            <div className="md_healthstream_text_video__icon">
              <div
                className="md_healthstream_image_block__content"
                style={{
                  gridTemplateColumns: `repeat(${numberOfColumns}, 1fr)`,
                }}
              >
                {iconBlocks &&
                  iconBlocks.map((postObj, index) => (
                    <div
                      className="md_healthstream_image_block__item show-items-hover-wrap"
                      key={index}
                    >
                      <div
                        className={`item-action-wrap show-items-hover pos-abs`}
                      >
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
                          {index + 1 < iconBlocks.length && (
                            <Tooltip text={__("Move Right", "md-prime")}>
                              <span
                                className="dashicons dashicons-arrow-right-alt move-right"
                                role="button"
                                tabIndex={0}
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
                        {1 < iconBlocks.length && (
                          <Tooltip text={__("Remove Item", "md-prime")}>
                            <i
                              className="remove-item dashicons dashicons-no-alt"
                              role="button"
                              tabIndex={0}
                              onClick={() => {
                                const toDelete =
                                  // eslint-disable-next-line no-alert
                                  confirm(
                                    __(
                                      "Are you sure you want to delete this item?",
                                      "md-prime"
                                    )
                                  );
                                if (toDelete === true) {
                                  const updatedArray = iconBlocks.filter(
                                    (item, itemIndex) => itemIndex !== index
                                  );
                                  setAttributes({
                                    iconBlocks: updatedArray,
                                  });
                                }
                              }}
                              onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                  // Simulate click behavior for keyboard users
                                  e.preventDefault(); // Prevent default action for space key
                                  const toDelete =
                                    // eslint-disable-next-line no-alert
                                    confirm(
                                      __(
                                        "Are you sure you want to delete this item?",
                                        "md-prime"
                                      )
                                    );
                                  if (toDelete === true) {
                                    const updatedArray = iconBlocks.filter(
                                      (item, itemIndex) => itemIndex !== index
                                    );
                                    setAttributes({
                                      iconBlocks: updatedArray,
                                    });
                                  }
                                }
                              }}
                              aria-label={__("Remove this item", "md-prime")}
                            ></i>
                          </Tooltip>
                        )}
                      </div>
                      <div className="md_healthstream_image_block__item__image">
                        <div className={`image-box-v1__box_image`}>
                          <div className="md-prime-block-control image-preview image-controle-visible-hover">
                            <div
                              className={`image-controls small-icons icon-center-fixed`}
                            >
                              <MediaUploadCheck>
                                <MediaUpload
                                  onSelect={(media) =>
                                    updateStaticPostObj(
                                      index,
                                      "icon_image",
                                      media.url
                                    )
                                  }
                                  allowedTypes={["image"]}
                                  value={postObj.icon_image}
                                  render={({ open }) => {
                                    return (
                                      <Tooltip
                                        text={__("Edit Image", "md-prime")}
                                      >
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
                                          aria-label={__(
                                            "Edit image",
                                            "md-prime"
                                          )}
                                        ></i>
                                      </Tooltip>
                                    );
                                  }}
                                />
                              </MediaUploadCheck>
                              <Tooltip text={__("Remove Image", "md-prime")}>
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
                                      updateStaticPostObj(
                                        index,
                                        "icon_image",
                                        ""
                                      );
                                    }
                                  }}
                                  role="button"
                                  tabIndex={0}
                                  onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                      e.preventDefault();
                                      updateStaticPostObj(
                                        index,
                                        "icon_image",
                                        ""
                                      );
                                    }
                                  }}
                                  aria-label={__("Remove image", "md-prime")}
                                ></i>
                              </Tooltip>
                            </div>
                            {postObj.icon_image && (
                              <img
                                src={postObj.icon_image}
                                alt={postObj.icon_title}
                              />
                            )}
                          </div>
                          {!postObj.icon_image && (
                            <MediaUpload
                              onSelect={(item) => {
                                updateStaticPostObj(
                                  index,
                                  "icon_image",
                                  item.url
                                );
                              }}
                              allowedTypes={["image"]}
                              value={postObj.icon_image}
                              render={({ open }) => (
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
                            />
                          )}
                        </div>
                      </div>
                      <div className="md_healthstream_image_block__item__content">
                        {showIconText && (
                          <h3
                            className="column-item-title"
                            style={{ color: iconTextColor }}
                          >
                            <RichText
                              tagName="span"
                              value={postObj.icon_title}
                              onChange={(value) =>
                                updateStaticPostObj(index, "icon_title", value)
                              }
                              placeholder={__("Enter Title")}
                            />
                          </h3>
                        )}
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
      </div>
    </div>
  );
}
