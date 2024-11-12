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
  MediaUploadCheck,
  MediaUpload,
  RichText,
  PanelColorSettings,
} from "@wordpress/block-editor";

import {
  PanelBody,
  Button,
  SelectControl,
  RangeControl,
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
    title,
    themeStyle,
    numberOfColumns,
    imageItems,
    buttonLink,
    titleColor,
    imageItemTitleColor,
    buttonColor,
    buttonTextColor,
    showHeading,
    showImageTitle,
    showButton
  } = attributes;

  const siteURL = window.location.origin;

  const addStaticPostObj = () => {
    const staticPostObj = [
      ...imageItems,
      {
        id: imageItems.length + 1,
        image: "",
        title: "",
      },
    ];
    setAttributes({ imageItems: staticPostObj });
  };
  const updateStaticPostObj = (index, key, value) => {
    const updatedStaticPostObj = [...imageItems];
    updatedStaticPostObj[index][key] = value;
    setAttributes({ imageItems: updatedStaticPostObj });
  };
  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...imageItems];
    arrayCopy[oldIndex] = imageItems[newIndex];
    arrayCopy[newIndex] = imageItems[oldIndex];

    setAttributes({
      imageItems: arrayCopy,
    });
  };

  return (
    <div {...useBlockProps({ className: "MD_Pointcentral_Image_Box" })}>
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-storyful-fse-full")}>
          <SelectControl
            label={__("Theme Style")}
            value={themeStyle}
            options={[
              { label: "Style 1", value: "style_1" },
              { label: "Style 2", value: "style_2" },
            ]}
            onChange={(value) => setAttributes({ themeStyle: value })}
          />
          <RangeControl
            label={__("Number of Columns")}
            value={numberOfColumns}
            onChange={(value) => setAttributes({ numberOfColumns: value })}
            min={1}
            max={4}
          />
        </PanelBody>
        <PanelBody
          title={__("Toggle Settings", "md-storyful-fse-full")}
          initialOpen={false}
        >
          <ToggleControl
            label={__("Show Heading")}
            checked={showHeading}
            onChange={(value) => setAttributes({ showHeading: value })}
          />
          <ToggleControl
            label={__("Show Image Title")}
            checked={showImageTitle}
            onChange={(value) => setAttributes({ showImageTitle: value })}
          />
          <ToggleControl
            label={__("Show Button")}
            checked={showButton}
            onChange={(value) => setAttributes({ showButton: value })}
          />
        </PanelBody>
        <PanelBody
          title={__("Color Settings", "md-storyful-fse-full")}
          initialOpen={false}
        >
          <PanelColorSettings
            title={__("Color Settings", "md-storyful-fse-full")}
            initialOpen={false}
            colorSettings={[
              {
                value: titleColor,
                onChange: (value) => setAttributes({ titleColor: value }),
                label: __("Title Color"),
              },
              {
                value: imageItemTitleColor,
                onChange: (value) =>
                  setAttributes({ imageItemTitleColor: value }),
                label: __("Image Title Color"),
              },
              {
                value: buttonColor,
                onChange: (value) => setAttributes({ buttonColor: value }),
                label: __("Button Color"),
              },
              {
                value: buttonTextColor,
                onChange: (value) => setAttributes({ buttonTextColor: value }),
                label: __("Button Text Color"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className={`pointcentral-press-listing ${themeStyle}`}>
        <div className="md_container">
        {showHeading && (
          <div className="pointcentral-press-listing__header">
            <RichText
              tagName="h2"
              className="pointcentral-press-listing__title"
              value={title}
              style={{ color: titleColor }}
              onChange={(value) => setAttributes({ title: value })}
              placeholder={__("Title", "md-pointcentral-fse")}
            />
          </div>
        )}
          <div className="pointcentral-press-listing__items">
            {imageItems &&
              imageItems.map((postObj, index) => (
                <div
                  className="pointcentral-press-listing__item show-items-hover-wrap"
                  style={{ width: `calc(100% / ${numberOfColumns} - 30px)` }}
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
                      {index + 1 < imageItems.length && (
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
                    {1 < imageItems.length && (
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
                              const updatedArray = imageItems.filter(
                                (item, itemIndex) => itemIndex !== index
                              );
                              setAttributes({
                                imageItems: updatedArray,
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
                                const updatedArray = imageItems.filter(
                                  (item, itemIndex) => itemIndex !== index
                                );
                                setAttributes({
                                  imageItems: updatedArray,
                                });
                              }
                            }
                          }}
                          aria-label="Delete item"
                        ></i>
                      </Tooltip>
                    )}
                  </div>
                  <div className="pointcentral-press-listing__item-image">
                    <div className="md-prime-block-control image-preview image-controle-visible-hover">
                      <div
                        className={`image-controls small-icons icon-center-fixed`}
                      >
                        <MediaUploadCheck>
                          <MediaUpload
                            onSelect={(media) =>
                              updateStaticPostObj(index, "image", media.url)
                            }
                            allowedTypes={["image"]}
                            value={postObj.image}
                            render={({ open }) => (
                              <>
                                {postObj.image ? (
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
                                              "image",
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
                                              "image",
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
                      {postObj.image ? (
                        <img src={postObj.image} alt={"slider"} />
                      ) : (
                        <img src={siteURL + placeholder} alt={"slider"} />
                      )}
                    </div>
                  </div>
                  {showImageTitle && (
                  <div className="pointcentral-press-listing__item-title">
                    <RichText
                      tagName="div"
                      className="pointcentral-press-listing__item-link"
                      style={{ color: imageItemTitleColor }}
                      value={postObj.title}
                      onChange={(value) =>
                        updateStaticPostObj(index, "title", value)
                      }
                      placeholder={__("Title")}
                    />
                  </div>
                  )}
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
          {showButton && (
          <div className="pointcentral-press-listing__button">
            <RichText
              tagName="span"
              className="pointcentral-press-listing__button"
              value={buttonLink}
              style={{ backgroundColor: buttonColor, color: buttonTextColor }}
              onChange={(value) => setAttributes({ buttonLink: value })}
              placeholder={__("Enter Button Text")}
            />
          </div>
          )}
        </div>
      </div>
    </div>
  );
}
