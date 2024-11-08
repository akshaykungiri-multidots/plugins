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
    subHeading,
    heading,
    imageBoxes,
    enableSlider,
    subHeadingColor,
    headingColor,
    imageBoxContentColor,
    imageBoxButtonColor,
    showSubHeading,
    showHeading,
    showImage,
    showImageBoxContent,
    showImageBoxButton,
  } = attributes;

  const siteURL = window.location.origin;

  const addStaticPostObj = () => {
    const staticPostObj = [
      ...imageBoxes,
      {
        id: imageBoxes.length + 1,
        slider_content: "",
        slider_button: "",
        slider_image: "",
      },
    ];
    setAttributes({ imageBoxes: staticPostObj });
  };
  const updateStaticPostObj = (index, key, value) => {
    const updatedStaticPostObj = [...imageBoxes];
    updatedStaticPostObj[index][key] = value;
    setAttributes({ imageBoxes: updatedStaticPostObj });
  };
  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...imageBoxes];
    arrayCopy[oldIndex] = imageBoxes[newIndex];
    arrayCopy[newIndex] = imageBoxes[oldIndex];

    setAttributes({
      imageBoxes: arrayCopy,
    });
  };

  return (
    <div {...useBlockProps({ className: "md_anitian_image_boxes_section" })}>
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-anitian-fse-full")}>
          <ToggleControl
            label={__("Enable Slider", "md-anitian-fse-full")}
            checked={enableSlider}
            onChange={(value) => setAttributes({ enableSlider: value })}
          />
          <ToggleControl
            label={__("Show Sub Heading", "md-anitian-fse-full")}
            checked={showSubHeading}
            onChange={(value) => setAttributes({ showSubHeading: value })}
          />
          <ToggleControl
            label={__("Show Heading", "md-anitian-fse-full")}
            checked={showHeading}
            onChange={(value) => setAttributes({ showHeading: value })}
          />
          <ToggleControl
            label={__("Show Image", "md-anitian-fse-full")}
            checked={showImage}
            onChange={(value) => setAttributes({ showImage: value })}
          />
          <ToggleControl
            label={__("Show Image Box Content", "md-anitian-fse-full")}
            checked={showImageBoxContent}
            onChange={(value) => setAttributes({ showImageBoxContent: value })}
          />
          <ToggleControl
            label={__("Show Image Box Button", "md-anitian-fse-full")}
            checked={showImageBoxButton}
            onChange={(value) => setAttributes({ showImageBoxButton: value })}
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
                value: subHeadingColor,
                onChange: (value) =>
                  setAttributes({ subHeadingColor: value }),
                label: __("Sub Heading Color", "md-storyful-fse-full"),
              },
              {
                value: headingColor,
                onChange: (value) => setAttributes({ headingColor: value }),
                label: __("Heading Color", "md-storyful-fse-full"),
              },
              {
                value: imageBoxContentColor,
                onChange: (value) =>
                  setAttributes({ imageBoxContentColor: value }),
                label: __("Image Box Content Color", "md-storyful-fse-full"),
              },
              {
                value: imageBoxButtonColor,
                onChange: (value) =>
                  setAttributes({ imageBoxButtonColor: value }),
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
                {showSubHeading && (
                <RichText
                  tagName="h6"
                  value={subHeading}
                  onChange={(value) => setAttributes({ subHeading: value })}
                  placeholder={__("Enter Sub Heading", "md-anitian-fse-full")}
                  style={{
                    color: subHeadingColor,
                  }}
                />
                )}
                {showHeading && (
                <RichText
                  tagName="h2"
                  value={heading}
                  onChange={(value) => setAttributes({ heading: value })}
                  placeholder={__("Enter Heading", "md-anitian-fse-full")}
                  style={{ color: headingColor }}
                />
                )}
              </div>
            </div>
          </div>
          <div className="text-video-slider__slider">
            <div className="container">
              <div className="bakery_antian__slider md-slick-slider">
                {imageBoxes &&
                  imageBoxes.map((postObj, index) => (
                    <div className="bakery_antian__slider-item show-items-hover-wrap" key={index}>
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
                          {index + 1 < imageBoxes.length && (
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
                        {1 < imageBoxes.length && (
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
                                  const updatedArray = imageBoxes.filter(
                                    (item, itemIndex) => itemIndex !== index
                                  );
                                  setAttributes({
                                    imageBoxes: updatedArray,
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
                                    const updatedArray = imageBoxes.filter(
                                      (item, itemIndex) => itemIndex !== index
                                    );
                                    setAttributes({
                                      imageBoxes: updatedArray,
                                    });
                                  }
                                }
                              }}
                              aria-label="Delete item"
                            ></i>
                          </Tooltip>
                        )}
                      </div>
                      {showImage && (
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
                            <img src={postObj.slider_image} alt={"slider"} />
                          ) : (
                            <img src={siteURL + placeholder} alt={"slider"} />
                          )}
                        </div>
                      </div>
                      )}
                      <div className="bakery_antiab__slider-content">
                        {showImageBoxContent && (
                        <RichText
                          tagName="p"
                          value={postObj.slider_content}
                          onChange={(value) =>
                            updateStaticPostObj(index, "slider_content", value)
                          }
                          placeholder={__("Enter Content")}
                          style={{
                            color: imageBoxContentColor,
                          }}
                        />
                        )}
                        {showImageBoxButton && (
                        <div className="bakery_antian__slider-button btn-anitian">
                          <RichText
                            tagName="a"
                            className="btn"
                            value={postObj.slider_button}
                            onChange={(value) =>
                              updateStaticPostObj(index, "slider_button", value)
                            }
                            placeholder={__("Enter Button Text")}
                            style={{
                              color: imageBoxButtonColor,
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
          </div>
        </div>
      </div>
    </div>
  );
}
