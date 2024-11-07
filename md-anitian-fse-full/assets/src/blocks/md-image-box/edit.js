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
  MediaUploadCheck,
  MediaUpload,
  PanelColorSettings,
} from "@wordpress/block-editor";

import {
  PanelBody,
  Button,
  ToggleControl,
  Tooltip,
} from "@wordpress/components";

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
    sub_heading,
    heading,
    image_boxes,
    enable_slider,
    sub_heading_color,
    heading_color,
    image_box_content_color,
    image_box_button_color,
    show_sub_heading,
    show_heading,
    show_image,
    show_image_box_content,
    show_image_box_button,
  } = attributes;

  const siteURL = window.location.origin;

  const addStaticPostObj = () => {
    const staticPostObj = [
      ...image_boxes,
      {
        id: image_boxes.length + 1,
        slider_content: "",
        slider_button: "",
        slider_image: "",
      },
    ];
    setAttributes({ image_boxes: staticPostObj });
  };
  const updateStaticPostObj = (index, key, value) => {
    const updatedStaticPostObj = [...image_boxes];
    updatedStaticPostObj[index][key] = value;
    setAttributes({ image_boxes: updatedStaticPostObj });
  };
  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...image_boxes];
    arrayCopy[oldIndex] = image_boxes[newIndex];
    arrayCopy[newIndex] = image_boxes[oldIndex];

    setAttributes({
      image_boxes: arrayCopy,
    });
  };

  return (
    <div {...useBlockProps({ className: "md_anitian_image_boxes_section" })}>
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-anitian-fse-full")}>
          <ToggleControl
            label={__("Enable Slider", "md-anitian-fse-full")}
            checked={enable_slider}
            onChange={(value) => setAttributes({ enable_slider: value })}
          />
          <ToggleControl
            label={__("Show Sub Heading", "md-anitian-fse-full")}
            checked={show_sub_heading}
            onChange={(value) => setAttributes({ show_sub_heading: value })}
          />
          <ToggleControl
            label={__("Show Heading", "md-anitian-fse-full")}
            checked={show_heading}
            onChange={(value) => setAttributes({ show_heading: value })}
          />
          <ToggleControl
            label={__("Show Image", "md-anitian-fse-full")}
            checked={show_image}
            onChange={(value) => setAttributes({ show_image: value })}
          />
          <ToggleControl
            label={__("Show Image Box Content", "md-anitian-fse-full")}
            checked={show_image_box_content}
            onChange={(value) => setAttributes({ show_image_box_content: value })}
          />
          <ToggleControl
            label={__("Show Image Box Button", "md-anitian-fse-full")}
            checked={show_image_box_button}
            onChange={(value) => setAttributes({ show_image_box_button: value })}
          />
        </PanelBody>
        <PanelBody
          title={__("Color Settings", "md-storyful-fse-full")}
          initialOpen={false}
        >
          <PanelColorSettings
            title={__("Typography Colors", "md-storyful-fse-full")}
            initialOpen={false}
            colorSettings={[
              {
                value: sub_heading_color,
                onChange: (value) =>
                  setAttributes({ sub_heading_color: value }),
                label: __("Sub Heading Color", "md-storyful-fse-full"),
              },
              {
                value: heading_color,
                onChange: (value) => setAttributes({ heading_color: value }),
                label: __("Heading Color", "md-storyful-fse-full"),
              },
              {
                value: image_box_content_color,
                onChange: (value) =>
                  setAttributes({ image_box_content_color: value }),
                label: __("Image Box Content Color", "md-storyful-fse-full"),
              },
              {
                value: image_box_button_color,
                onChange: (value) =>
                  setAttributes({ image_box_button_color: value }),
                label: __("Image Box Button Color", "md-storyful-fse-full"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className="bakery_antian__slider-image-box">
        <div className="bakery_antian__slider-image-box__inner">
          <div className="text-video-slider__video-and-text">
            <div className="container">
              <div className="bakery_antian__heading">
                {show_sub_heading && (
                <RichText
                  tagName="h6"
                  value={sub_heading}
                  onChange={(value) => setAttributes({ sub_heading: value })}
                  placeholder={__("Enter Sub Heading", "md-anitian-fse-full")}
                  style={{
                    color: sub_heading_color,
                  }}
                />
                )}
                {show_heading && (
                <RichText
                  tagName="h2"
                  value={heading}
                  onChange={(value) => setAttributes({ heading: value })}
                  placeholder={__("Enter Heading", "md-anitian-fse-full")}
                  style={{ color: heading_color }}
                />
                )}
              </div>
            </div>
          </div>
          <div className="text-video-slider__slider">
            <div className="container">
              <div className="bakery_antian__slider md-slick-slider">
                {image_boxes &&
                  image_boxes.map((postObj, index) => (
                    <div className="bakery_antian__slider-item show-items-hover-wrap">
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
                          {index + 1 < image_boxes.length && (
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
                        {1 < image_boxes.length && (
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
                                  const updatedArray = image_boxes.filter(
                                    (item, itemIndex) => itemIndex !== index
                                  );
                                  setAttributes({
                                    image_boxes: updatedArray,
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
                                    const updatedArray = image_boxes.filter(
                                      (item, itemIndex) => itemIndex !== index
                                    );
                                    setAttributes({
                                      image_boxes: updatedArray,
                                    });
                                  }
                                }
                              }}
                              aria-label="Delete item"
                            ></i>
                          </Tooltip>
                        )}
                      </div>
                      {show_image && (
                      <div className="bakery_antian__slider-image">
                        <div className="md-prime-block-control image-preview image-controle-visible-hover">
                          <div
                            className={`image-controls small-icons icon-center-fixed`}
                          >
                            <MediaUploadCheck>
                              <MediaUpload
                                onSelect={(media) =>
                                  updateStaticPostObj(
                                    index,
                                    "slider_image",
                                    media.url
                                  )
                                }
                                allowedTypes={["image"]}
                                value={postObj.slider_image}
                                render={({ open }) => (
                                  <>
                                    {postObj.slider_image ? (
                                      <>
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
                                        <Tooltip
                                          text={__("Remove Image", "md-prime")}
                                        >
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
                                                  "slider_image",
                                                  ""
                                                );
                                              }
                                            }}
                                            role="button"
                                            tabIndex={0}
                                            onKeyDown={(e) => {
                                              if (
                                                e.key === "Enter" ||
                                                e.key === " "
                                              ) {
                                                e.preventDefault();
                                                updateStaticPostObj(
                                                  index,
                                                  "slider_image",
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
                                            text={__(
                                              "Upload Image",
                                              "md-prime"
                                            )}
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
                          {postObj.slider_image ? (
                            <img src={postObj.slider_image} />
                          ) : (
                            <img src={siteURL + placeholder} />
                          )}
                        </div>
                      </div>
                      )}
                      <div className="bakery_antiab__slider-content">
                        {show_image_box_content && (
                        <RichText
                          tagName="p"
                          value={postObj.slider_content}
                          onChange={(value) =>
                            updateStaticPostObj(index, "slider_content", value)
                          }
                          placeholder={__("Enter Content")}
                          style={{
                            color: image_box_content_color,
                          }}
                        />
                        )}
                        {show_image_box_button && (
                        <div class="bakery_antian__slider-button btn-anitian">
                          <RichText
                            tagName="a"
                            className="btn"
                            value={postObj.slider_button}
                            onChange={(value) =>
                              updateStaticPostObj(index, "slider_button", value)
                            }
                            placeholder={__("Enter Button Text")}
                            style={{
                              color: image_box_button_color,
                            }}
                          />
                        </div>
                        )}
                      </div>
                    </div>
                  ))}
                <div
                  className="add-item-wrap"
                  onClick={addStaticPostObj}
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
          </div>
        </div>
      </div>
    </div>
  );
}
