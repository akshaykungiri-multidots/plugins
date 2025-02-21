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
  MediaUpload,
  MediaUploadCheck,
  InspectorControls,
  PanelColorSettings,
} from "@wordpress/block-editor";

import {
  Button,
  PanelBody,
  Tooltip,
  ToggleControl,
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
    stepsBlockList,
    stepsTitleFontColor,
    stepsContentFontColor,
    stepsSubTitleColor,
    showImage,
    showTitle,
    showContent,
    showSubTitle,
  } = attributes;

  const addStaticPostObj = () => {
    const staticPostObj = [
      ...stepsBlockList,
      {
        id: stepsBlockList.length + 1,
        steps_image: "",
        steps_title: "",
        steps_description: "",
        learn_more_link: "",
      },
    ];
    setAttributes({ stepsBlockList: staticPostObj });
  };
  const updateStaticPostObj = (index, key, value) => {
    const updatedStaticPostObj = [...stepsBlockList];
    updatedStaticPostObj[index][key] = value;
    setAttributes({ stepsBlockList: updatedStaticPostObj });
  };
  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...stepsBlockList];
    arrayCopy[oldIndex] = stepsBlockList[newIndex];
    arrayCopy[newIndex] = stepsBlockList[oldIndex];

    setAttributes({
      stepsBlockList: arrayCopy,
    });
  };

  const siteURL = window.location.origin;

  return (
    <div {...useBlockProps({ className: "md_porto_steps" })}>
      <InspectorControls>
        <PanelBody title={__("Toggle Settings", "md-porto")} initialOpen={true}>
          <ToggleControl
            label={__("Show Image", "md-porto")}
            checked={showImage}
            onChange={(value) => setAttributes({ showImage: value })}
          />
          <ToggleControl
            label={__("Show Title", "md-porto")}
            checked={showTitle}
            onChange={(value) => setAttributes({ showTitle: value })}
          />
          <ToggleControl
            label={__("Show Content", "md-porto")}
            checked={showContent}
            onChange={(value) => setAttributes({ showContent: value })}
          />
          <ToggleControl
            label={__("Show SubTitle", "md-porto")}
            checked={showSubTitle}
            onChange={(value) => setAttributes({ showSubTitle: value })}
          />
        </PanelBody>
        <PanelBody title={__("Color Settings", "md-porto")} initialOpen={false}>
          <PanelColorSettings
            title={__("Color Settings", "md-porto")}
            initialOpen={false}
            colorSettings={[
              {
                value: stepsTitleFontColor,
                onChange: (newColor) =>
                  setAttributes({ stepsTitleFontColor: newColor }),
                label: __("Steps Title Font Color"),
              },
              {
                value: stepsContentFontColor,
                onChange: (newColor) =>
                  setAttributes({ stepsContentFontColor: newColor }),
                label: __("Steps Description Font Color"),
              },
              {
                value: stepsSubTitleColor,
                onChange: (newColor) =>
                  setAttributes({ stepsSubTitleColor: newColor }),
                label: __("Steps Sub Title Font Color"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className={`md_porto_steps`}>
        <div className="wrapper-inner">
          <div className="md_porto_steps__content">
            {stepsBlockList &&
              stepsBlockList.map((postObj, index) => (
                <div
                  className="md_porto_steps__item show-items-hover-wrap"
                  key={index}
                >
                  <div className={`item-action-wrap show-items-hover pos-abs`}>
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
                      {index + 1 < stepsBlockList.length && (
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
                    {1 < stepsBlockList.length && (
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
                              const updatedArray = stepsBlockList.filter(
                                (item, itemIndex) => itemIndex !== index
                              );
                              setAttributes({
                                stepsBlockList: updatedArray,
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
                                const updatedArray = stepsBlockList.filter(
                                  (item, itemIndex) => itemIndex !== index
                                );
                                setAttributes({
                                  stepsBlockList: updatedArray,
                                });
                              }
                            }
                          }}
                          aria-label={__("Remove this item", "md-prime")}
                        ></i>
                      </Tooltip>
                    )}
                  </div>
                  <div className="md_porto_steps__item__step_number">
                    <span>{index + 1}</span>
                  </div>
                  <div className="md_porto_steps__item__wrap">
                    {showImage && (
                      <div className="md_porto_steps__item__image">
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
                                      "steps_image",
                                      media.url
                                    )
                                  }
                                  allowedTypes={["image"]}
                                  value={postObj.steps_image}
                                  render={({ open }) => (
                                    <>
                                      {postObj.steps_image ? (
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
                                            text={__(
                                              "Remove Image",
                                              "md-prime"
                                            )}
                                          >
                                            <i
                                              className="dashicons dashicons-no-alt remove-image"
                                              onClick={() =>
                                                updateStaticPostObj(
                                                  index,
                                                  "steps_image",
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
                                                    index,
                                                    "steps_image",
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
                            <img
                              src={
                                postObj.steps_image
                                  ? postObj.steps_image
                                  : siteURL + placeholder
                              }
                              alt={"slider"}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="md_porto_steps__item__content">
                      {showSubTitle && (
                        <RichText
                          tagName="p"
                          className="learn-more-link"
                          value={postObj.learn_more_link}
                          onChange={(value) =>
                            updateStaticPostObj(index, "learn_more_link", value)
                          }
                          placeholder={__("Enter Sub Title")}
                          style={{
                            color: stepsSubTitleColor,
                          }}
                        />
                      )}
                      {showTitle && (
                        <h3
                          className="column-item-title"
                          style={{ color: stepsTitleFontColor }}
                        >
                          <RichText
                            tagName="span"
                            value={postObj.steps_title}
                            onChange={(value) =>
                              updateStaticPostObj(index, "steps_title", value)
                            }
                            placeholder={__("Enter Title")}
                          />
                        </h3>
                      )}
                      <div className="md_porto_steps__item__content__link">
                        {showContent && (
                          <RichText
                            tagName="p"
                            className="column-item-desc"
                            value={postObj.steps_description}
                            onChange={(value) =>
                              updateStaticPostObj(
                                index,
                                "steps_description",
                                value
                              )
                            }
                            placeholder={__("Enter Description")}
                            style={{
                              color: stepsContentFontColor,
                            }}
                          />
                        )}
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
      </div>
    </div>
  );
}
