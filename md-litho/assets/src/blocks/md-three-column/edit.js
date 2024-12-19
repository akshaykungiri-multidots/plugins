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
  MediaUploadCheck,
  MediaUpload,
} from "@wordpress/block-editor";

import {
  PanelBody,
  ToggleControl,
  Tooltip,
  Button,
  GradientPicker,
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
    testimonialText,
    testimonialAuthor,
    mediaImage,
    heading,
    features,
    showTestimonial,
    testimonialBackgroundColor,
    testimonialTextColor,
    testimonialAuthorColor,
    showMedia,
    showFeatures,
    showHeading,
    headingColor,
    featureTitleColor,
    featureTextColor,
  } = attributes;
  const siteURL = window.location.origin;
  const addStaticPostObj = () => {
    const staticPostObj = [
      ...features,
      {
        id: features.length + 1,
        icon: "fa-500px",
        iconTitle: "",
        iconText: "",
      },
    ];
    setAttributes({ features: staticPostObj });
  };
  const updateStaticPostObj = (index, key, value) => {
    const updatedStaticPostObj = [...features];
    updatedStaticPostObj[index][key] = value;
    setAttributes({ features: updatedStaticPostObj });
  };
  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...features];
    arrayCopy[oldIndex] = features[newIndex];
    arrayCopy[newIndex] = features[oldIndex];

    setAttributes({
      features: arrayCopy,
    });
  };
  return (
    <div {...useBlockProps({ className: "md_three_column_block" })}>
      <InspectorControls>
        <PanelBody title={__("Toggle Settings")} initialOpen={true}>
          <ToggleControl
            label={__("Show Heading")}
            checked={showHeading}
            onChange={() => setAttributes({ showHeading: !showHeading })}
          />
          <ToggleControl
            label={__("Show Media")}
            checked={showMedia}
            onChange={() => setAttributes({ showMedia: !showMedia })}
          />
          <ToggleControl
            label={__("Show Features")}
            checked={showFeatures}
            onChange={() => setAttributes({ showFeatures: !showFeatures })}
          />
          <ToggleControl
            label={__("Show Testimonial")}
            checked={showTestimonial}
            onChange={() =>
              setAttributes({ showTestimonial: !showTestimonial })
            }
          />
        </PanelBody>
        <PanelBody title={__("Color Settings")} initialOpen={false}>
          <PanelColorSettings
            title={__("Color Settings")}
            colorSettings={[
              {
                value: testimonialTextColor,
                onChange: (colorValue) =>
                  setAttributes({ testimonialTextColor: colorValue }),
                label: __("Testimonial Text Color"),
              },
              {
                value: testimonialAuthorColor,
                onChange: (colorValue) =>
                  setAttributes({ testimonialAuthorColor: colorValue }),
                label: __("Testimonial Author Color"),
              },
              {
                value: headingColor,
                onChange: (colorValue) =>
                  setAttributes({ headingColor: colorValue }),
                label: __("Heading Color"),
              },
              {
                value: featureTitleColor,
                onChange: (colorValue) =>
                  setAttributes({ featureTitleColor: colorValue }),
                label: __("Feature Title Color"),
              },
              {
                value: featureTextColor,
                onChange: (colorValue) =>
                  setAttributes({ featureTextColor: colorValue }),
                label: __("Feature Text Color"),
              },
            ]}
          />
          <div className="settings-row">
            <label htmlFor="buttonBackgroundColor">
              {__("Testimonial Background Color")}
            </label>
            <GradientPicker
              id="buttonBackgroundColor"
              label={__("Button Background Color")}
              value={
                testimonialBackgroundColor ? testimonialBackgroundColor : null
              }
              onChange={(value) =>
                setAttributes({ testimonialBackgroundColor: value })
              }
              gradients={[
                {
                  name: "Gradient 1",
                  gradient:
                    "linear-gradient(50deg, #0039E3 9%, #8600D4 100%)",
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
        </PanelBody>
      </InspectorControls>
      <div className="md_three_column_block__inner">
        {showTestimonial && (
        <div className="md_three_column_block__testimonials_block">
          <div
            className="md_three_column_block__testimonials_block__inner"
            style={{ background: testimonialBackgroundColor }}
          >
            <div className="md_three_column_block__testimonials_block__inner__content"
            style={{ color: testimonialTextColor }}
            >
              <i className="fa fa-quote-left"></i>
              <RichText
                tagName="p"
                value={testimonialText}
                onChange={(value) => setAttributes({ testimonialText: value })}
                placeholder={__("Testimonial", "md-prime")}
              />
            </div>
            <div className="md_three_column_block__testimonials_block__inner__author">
              <RichText
                tagName="p"
                value={testimonialAuthor}
                onChange={(value) =>
                  setAttributes({ testimonialAuthor: value })
                }
                style={{ color: testimonialAuthorColor }}
                placeholder={__("Author", "md-prime")}
              />
            </div>
          </div>
        </div>
        )}
        {showMedia && (
          <div className="md_three_column_block_media">
            <div className="md-prime-block-control image-preview image-controle-visible-hover md_three_column_block_media1" style={{backgroundImage: `url(${mediaImage})`}}>
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
              {!mediaImage && (
              <img
                src={siteURL + placeholder}
                alt={"slider"}
              />
              )}
            </div>
          </div>
        )}
        <div className="md_three_column_block__features">
          {showHeading && (
            <RichText
              tagName="h3"
              className="md_three_column_block__features__heading"
              value={heading}
              onChange={(value) => setAttributes({ heading: value })}
              style={{ color: headingColor }}
              placeholder={__("Heading", "md-prime")}
            />
          )}
          {showFeatures && (
            <div className="md_three_column_block__features__list">
              <div className="md_three_column_block__features__list__inner">
                {features &&
                  features.map((postObj, index) => (
                    <div
                      key={postObj.id}
                      className="md_three_column_block__features__list_item_wrap show-items-hover-wrap"
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
                          {index + 1 < features.length && (
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
                        {1 < features.length && (
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
                                  const updatedArray = features.filter(
                                    (item, itemIndex) => itemIndex !== index
                                  );
                                  setAttributes({
                                    features: updatedArray,
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
                                    const updatedArray = features.filter(
                                      (item, itemIndex) => itemIndex !== index
                                    );
                                    setAttributes({
                                      features: updatedArray,
                                    });
                                  }
                                }
                              }}
                              aria-label="Delete item"
                            ></i>
                          </Tooltip>
                        )}
                      </div>
                      <div className="md_three_column_block__features__list_item">
                        <div className="md_three_column_block__features__list_item__wrapper">
                          <div className="md_three_column_block__features__list_item__wrapper-text">
                            <RichText
                              tagName="h4"
                              className="feature-title"
                              value={postObj.iconTitle}
                              onChange={(value) =>
                                updateStaticPostObj(index, "iconTitle", value)
                              }
                              placeholder={__("Title", "md-prime")}
                              style={{ color: featureTitleColor }}
                            />
                            <RichText
                              tagName="p"
                              className="image-text"
                              value={postObj.iconText}
                              onChange={(value) =>
                                updateStaticPostObj(index, "iconText", value)
                              }
                              placeholder={__("Feature Text", "md-prime")}
                              style={{ color: featureTextColor }}
                            />
                          </div>
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
      </div>
    </div>
  );
}
