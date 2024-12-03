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
  RichText,
  PanelColorSettings,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";

import {
  PanelBody,
  ToggleControl,
  Button,
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
    heading,
    description,
    mediaContent,
    mediaURL,
    featureTitle,
    featureList,
    showHeading,
    showDescription,
    showMediaContent,
    showMedia,
    showFeatureList,
    mediaPosition,
    headingColor,
    descriptionColor,
    mediaContentColor,
    featureTitleColor,
    featureListColor,
  } = attributes;
  const siteURL = window.location.origin;
  const addStaticPostObj = () => {
    const staticPostObj = [
      ...featureList,
      {
        id: featureList.length + 1,
        featureTitle: "",
      },
    ];
    setAttributes({ featureList: staticPostObj });
  };
  const updateStaticPostObj = (index, key, value) => {
    const updatedStaticPostObj = [...featureList];
    updatedStaticPostObj[index][key] = value;
    setAttributes({ featureList: updatedStaticPostObj });
  };
  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...featureList];
    arrayCopy[oldIndex] = featureList[newIndex];
    arrayCopy[newIndex] = featureList[oldIndex];

    setAttributes({
      featureList: arrayCopy,
    });
  };
  return (
    <div {...useBlockProps({ className: "md_media_text_block" })}>
      <InspectorControls>
        <PanelBody title={__("Block Settings")} initialOpen={true}>
          <ToggleControl
            label={__("Show Heading")}
            checked={showHeading}
            onChange={(value) => setAttributes({ showHeading: value })}
          />
          <ToggleControl
            label={__("Show Description")}
            checked={showDescription}
            onChange={(value) => setAttributes({ showDescription: value })}
          />
          <ToggleControl
            label={__("Show Media")}
            checked={showMedia}
            onChange={(value) => setAttributes({ showMedia: value })}
          />
          <ToggleControl
            label={__("Show Media Content")}
            checked={showMediaContent}
            onChange={(value) => setAttributes({ showMediaContent: value })}
          />
          <ToggleControl
            label={__("Show Feature List")}
            checked={showFeatureList}
            onChange={(value) => setAttributes({ showFeatureList: value })}
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
        <PanelBody title={__("Color Settings")} initialOpen={false}>
          <PanelColorSettings
            title={__("Color Settings")}
            colorSettings={[
              {
                value: headingColor,
                onChange: (value) => setAttributes({ headingColor: value }),
                label: __("Heading Color"),
              },
              {
                value: descriptionColor,
                onChange: (value) => setAttributes({ descriptionColor: value }),
                label: __("Description Color"),
              },
              {
                value: featureTitleColor,
                onChange: (value) =>
                  setAttributes({ featureTitleColor: value }),
                label: __("Feature Title Color"),
              },
              {
                value: featureListColor,
                onChange: (value) => setAttributes({ featureListColor: value }),
                label: __("Feature List Color"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className="md_media_text_block__inner">
        {showHeading && (
          <RichText
            tagName="h2"
            className="md_media_text_block__heading"
            value={heading}
            onChange={(value) => setAttributes({ heading: value })}
            style={{ color: headingColor }}
            placeholder={__("Enter Heading")}
          />
        )}
        {showDescription && (
          <RichText
            className="md_media_text_block__description"
            tagName="p"
            value={description}
            onChange={(value) => setAttributes({ description: value })}
            style={{ color: descriptionColor }}
            placeholder={__("Enter Description")}
          />
        )}
        {(showMediaContent || showMedia) && (
          <div
            className={`md_media_text_block__content__wrapper ${mediaPosition}`}
          >
            <div className="md_media_text_block__content">
              {showMediaContent && (
                <RichText
                  className="md_media_text_block__media_content"
                  tagName="p"
                  value={mediaContent}
                  onChange={(value) => setAttributes({ mediaContent: value })}
                  style={{ color: mediaContentColor }}
                  placeholder={__("Enter Media Content")}
                />
              )}
            </div>
            <div className="md_media_text_block__media">
              {showMedia && (
                <div className="md-prime-block-control image-preview image-controle-visible-hover">
                  <div
                    className={`image-controls small-icons icon-center-fixed`}
                  >
                    <MediaUploadCheck>
                      <MediaUpload
                        onSelect={(media) =>
                          setAttributes({ mediaURL: media.url })
                        }
                        allowedTypes={["image"]}
                        value={mediaURL}
                        render={({ open }) => (
                          <>
                            {mediaURL ? (
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
                                      setAttributes({ mediaURL: "" })
                                    }
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                      if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault();
                                        setAttributes({ mediaURL: "" });
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
                    src={mediaURL ? mediaURL : siteURL + placeholder}
                    alt={"slider"}
                  />
                </div>
              )}
            </div>
          </div>
        )}
        {showFeatureList && (
          <div className="md_media_text_block__feature_list">
            <RichText
              tagName="h3"
              className="md_media_text_block__feature_title"
              value={featureTitle}
              onChange={(value) => setAttributes({ featureTitle: value })}
              style={{ color: featureTitleColor }}
              placeholder={__("Enter Feature Title")}
            />
            <ul className="md_media_text_block__feature_list__list">
              {featureList.map((item, index) => (
                <li key={item.id} className="show-items-hover-wrap">
                  <div className="item-action-wrap show-items-hover small-icons">
                    <div className="move-item">
                      {0 < index && (
                        <Tooltip text={__("Move Left", "md-prime")}>
                          <span
                            className="dashicons dashicons-arrow-left-alt move-up"
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
                      {index + 1 < featureList.length && (
                        <Tooltip text={__("Move Right", "md-prime")}>
                          <span
                            className="dashicons dashicons-arrow-right-alt move-down"
                            onClick={() => moveItem(index, index + 1)}
                            role="button"
                            tabIndex={0}
                            aria-label="Move item down"
                            onKeyDown={(event) => {
                              if (event.key === "Enter" || event.key === " ") {
                                event.preventDefault();
                                // Simulate the click event on Enter or Space key
                                event.target.click();
                              }
                            }}
                          ></span>
                        </Tooltip>
                      )}
                    </div>
                    {1 < featureList.length && (
                      <Tooltip text={__("Remove Item", "md-prime")}>
                        <i
                          className="remove-item dashicons dashicons-no-alt"
                          onClick={() => {
                            const toDelete =
                              // eslint-disable-next-line no-alert
                              confirm(
                                __(
                                  "Are you sure you want to remove this item?",
                                  "md-prime"
                                )
                              );
                            if (toDelete === true) {
                              const updatedProducts = featureList.filter(
                                (itemObj, itemIndex) => itemIndex !== index
                              );

                              setAttributes({
                                featureList: updatedProducts,
                              });
                            }
                          }}
                          role="button"
                          tabIndex={0}
                          aria-label="Remove item"
                          onKeyDown={(event) => {
                            if (event.key === "Enter" || event.key === " ") {
                              event.preventDefault();
                              // Simulate the click event on Enter or Space key
                              event.target.click();
                            }
                          }}
                        ></i>
                      </Tooltip>
                    )}
                  </div>
                  <RichText
                    tagName="span"
                    key={item.id}
                    value={item.featureTitle}
                    onChange={(value) =>
                      updateStaticPostObj(index, "featureTitle", value)
                    }
                    style={{ color: featureListColor }}
                    placeholder={__("Enter Feature")}
                  />
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
          </div>
        )}
      </div>
    </div>
  );
}
