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
  SelectControl,
  PanelBody,
  Tooltip,
  ToggleControl,
  RangeControl,
  TextControl,
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
    subTitle,
    title,
    headingContent,
    imageBlockStyle,
    imageBlockList,
    subTitleFontColor,
    titleFontColor,
    headingContentFontColor,
    imageTitleFontColor,
    imageContentFontColor,
    imageLearnMoreFontColor,
    numberOfColumns,
    showImage,
    showTitle,
    showContent,
    showLink,
    showSubHeading,
    showHeadingContent,
    showHeading,
  } = attributes;

  const addStaticPostObj = () => {
    const staticPostObj = [
      ...imageBlockList,
      {
        id: imageBlockList.length + 1,
        image_image: "",
        image_title: "",
        image_description: "",
        learn_more_link: "",
      },
    ];
    setAttributes({ imageBlockList: staticPostObj });
  };
  const updateStaticPostObj = (index, key, value) => {
    const updatedStaticPostObj = [...imageBlockList];
    updatedStaticPostObj[index][key] = value;
    setAttributes({ imageBlockList: updatedStaticPostObj });
  };
  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...imageBlockList];
    arrayCopy[oldIndex] = imageBlockList[newIndex];
    arrayCopy[newIndex] = imageBlockList[oldIndex];

    setAttributes({
      imageBlockList: arrayCopy,
    });
  };

  return (
    <div {...useBlockProps({ className: "md_porto_image_block" })}>
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-porto")}>
          <SelectControl
            label={__("Image Block Style", "md-porto")}
            value={imageBlockStyle}
            options={[
              { label: "Style 1", value: "style1" },
              { label: "Style 2", value: "style2" },
              { label: "Style 3", value: "style3" },
              { label: "Style 4", value: "style4" },
            ]}
            onChange={(value) => setAttributes({ imageBlockStyle: value })}
          />
          <RangeControl
            label={__("Number of Columns", "md-porto")}
            value={numberOfColumns}
            onChange={(value) => setAttributes({ numberOfColumns: value })}
            min={1}
            max={4}
          />
        </PanelBody>
        <PanelBody
          title={__("Toggle Settings", "md-porto")}
          initialOpen={false}
        >
          <ToggleControl
            label={__("Show Sub Heading", "md-porto")}
            checked={showSubHeading}
            onChange={(value) => setAttributes({ showSubHeading: value })}
          />
          <ToggleControl
            label={__("Show Heading", "md-porto")}
            checked={showHeading}
            onChange={(value) => setAttributes({ showHeading: value })}
          />
          <ToggleControl
            label={__("Show Heading Content", "md-porto")}
            checked={showHeadingContent}
            onChange={(value) => setAttributes({ showHeadingContent: value })}
          />
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
            label={__("Show Link", "md-porto")}
            checked={showLink}
            onChange={(value) => setAttributes({ showLink: value })}
          />
        </PanelBody>
        <PanelBody
          title={__("Color Settings", "md-porto")}
          initialOpen={false}
        >
          <PanelColorSettings
            title={__("Color Settings", "md-porto")}
            initialOpen={false}
            colorSettings={[
              {
                value: subTitleFontColor,
                onChange: (newColor) =>
                  setAttributes({ subTitleFontColor: newColor }),
                label: __("Sub Title Font Color"),
              },
              {
                value: titleFontColor,
                onChange: (newColor) =>
                  setAttributes({ titleFontColor: newColor }),
                label: __("Title Font Color"),
              },
              {
                value: headingContentFontColor,
                onChange: (newColor) =>
                  setAttributes({ headingContentFontColor: newColor }),
                label: __("Heading Content Font Color"),
              },
              {
                value: imageTitleFontColor,
                onChange: (newColor) =>
                  setAttributes({ imageTitleFontColor: newColor }),
                label: __("Image Title Font Color"),
              },
              {
                value: imageContentFontColor,
                onChange: (newColor) =>
                  setAttributes({ imageContentFontColor: newColor }),
                label: __("Image Description Font Color"),
              },
              {
                value: imageLearnMoreFontColor,
                onChange: (newColor) =>
                  setAttributes({ imageLearnMoreFontColor: newColor }),
                label: __("Image Learn More Font Color"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className={`md_porto_image_block ${imageBlockStyle}`}>
        <div className="md_porto_image_block__head">
          <div className="wrapper-inner">
            <div className="md_porto_image_block__heading">
              {showSubHeading && (
                <RichText
                  tagName="h3"
                  value={subTitle}
                  onChange={(value) => setAttributes({ subTitle: value })}
                  placeholder={__("Enter Sub Title", "md-porto")}
                  style={{
                    color: subTitleFontColor,
                  }}
                />
              )}
              {showHeading && (
                <RichText
                  tagName="h2"
                  value={title}
                  onChange={(value) => setAttributes({ title: value })}
                  placeholder={__("Enter Title", "md-porto")}
                  style={{
                    color: titleFontColor,
                  }}
                />
              )}
              {showHeadingContent && (
                <RichText
                  tagName="p"
                  value={headingContent}
                  onChange={(value) => setAttributes({ headingContent: value })}
                  placeholder={__("Enter Heading Content", "md-porto")}
                  style={{
                    color: headingContentFontColor,
                  }}
                />
              )}
            </div>
          </div>
        </div>
        <div className="wrapper-inner">
          <div
            className="md_porto_image_block__content"
            style={{ gridTemplateColumns: `repeat(${numberOfColumns}, 1fr)` }}
          >
            {imageBlockList &&
              imageBlockList.map((postObj, index) => (
                <div
                  className="md_porto_image_block__item show-items-hover-wrap"
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
                      {index + 1 < imageBlockList.length && (
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
                    {1 < imageBlockList.length && (
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
                              const updatedArray = imageBlockList.filter(
                                (item, itemIndex) => itemIndex !== index
                              );
                              setAttributes({
                                imageBlockList: updatedArray,
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
                                const updatedArray = imageBlockList.filter(
                                  (item, itemIndex) => itemIndex !== index
                                );
                                setAttributes({
                                  imageBlockList: updatedArray,
                                });
                              }
                            }
                          }}
                          aria-label={__("Remove this item", "md-prime")}
                        ></i>
                      </Tooltip>
                    )}
                  </div>
                  {showImage && (
                    <div className="md_porto_image_block__item__image">
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
                                    "image_image",
                                    media.url
                                  )
                                }
                                allowedTypes={["image"]}
                                value={postObj.image_image}
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
                                      "image_image",
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
                                      "image_image",
                                      ""
                                    );
                                  }
                                }}
                                aria-label={__("Remove image", "md-prime")}
                              ></i>
                            </Tooltip>
                          </div>
                          {postObj.image_image && (
                            <img
                              src={postObj.image_image}
                              alt={postObj.image_title}
                            />
                          )}
                        </div>
                        {!postObj.image_image && (
                          <MediaUpload
                            onSelect={(item) => {
                              updateStaticPostObj(
                                index,
                                "image_image",
                                item.url
                              );
                            }}
                            allowedTypes={["image"]}
                            value={postObj.image_image}
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
                  )}
                  <div className="md_porto_image_block__item__content">
                    {showTitle && (
                      <h3
                        className="column-item-title"
                        style={{ color: imageTitleFontColor }}
                      >
                        {imageBlockStyle === "style4" && (
                          <i className="fa fa-check-circle"></i>
                        )}
                        <RichText
                          tagName="span"
                          value={postObj.image_title}
                          onChange={(value) =>
                            updateStaticPostObj(index, "image_title", value)
                          }
                          placeholder={__("Enter Title")}
                        />
                      </h3>
                    )}
                    <div className="md_porto_image_block__item__content__link">
                      {showContent && (
                        <RichText
                          tagName="p"
                          className="column-item-desc"
                          value={postObj.image_description}
                          onChange={(value) =>
                            updateStaticPostObj(
                              index,
                              "image_description",
                              value
                            )
                          }
                          placeholder={__("Enter Description")}
                          style={{
                            color: imageContentFontColor,
                          }}
                        />
                      )}
                    </div>
                  </div>
                  {showLink && (
                    <RichText
                      tagName="p"
                      className="learn-more-link"
                      value={postObj.learn_more_link}
                      onChange={(value) =>
                        updateStaticPostObj(index, "learn_more_link", value)
                      }
                      placeholder={__("Enter Link")}
                      style={{
                        color: imageLearnMoreFontColor,
                      }}
                    />
                  )}
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
