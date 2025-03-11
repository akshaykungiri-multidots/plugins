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
  PanelColorSettings,
  RichText,
} from "@wordpress/block-editor";

import {
  PanelBody,
  Button,
  ToggleControl,
  Tooltip,
  SelectControl,
  RangeControl
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
    logosTitleColor,
    logosDescriptionColor,
    logosPriceColor,
    logosBadgeTextColor,
    logosBadgeBackgroundColor,
    logos,
    showLogosTitle,
    showLogosDescription,
    showLogosPrice,
    showLogosImage,
    showLogosBadge,
    logoStyle,
    numberOfLogosPerRow,
  } = attributes;

  const siteURL = window.location.origin;

  const addStaticPostObj = () => {
    const staticPostObj = [
      ...logos,
      {
        id: logos.length + 1,
        image: "",
        imageTitle: "",
        imageText: "",
        imagePrice: "",
        imageBadgeText: "",
      },
    ];
    setAttributes({ logos: staticPostObj });
  };
  const updateStaticPostObj = (index, key, value) => {
    const updatedStaticPostObj = [...logos];
    updatedStaticPostObj[index][key] = value;
    setAttributes({ logos: updatedStaticPostObj });
  };
  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...logos];
    arrayCopy[oldIndex] = logos[newIndex];
    arrayCopy[newIndex] = logos[oldIndex];

    setAttributes({
      logos: arrayCopy,
    });
  };

  return (
    <div {...useBlockProps()}>
      <InspectorControls>
        <PanelBody
          title={__("Block Settings", "md-logo-slider")}
          initialOpen={true}
        >
          <ToggleControl
            label={__("Show Logos Title", "md-logo-slider")}
            checked={showLogosTitle}
            onChange={(value) => setAttributes({ showLogosTitle: value })}
          />
          <ToggleControl
            label={__("Show Logos Description", "md-logo-slider")}
            checked={showLogosDescription}
            onChange={(value) => setAttributes({ showLogosDescription: value })}
          />
          <ToggleControl
            label={__("Show Logos Price", "md-logo-slider")}
            checked={showLogosPrice}
            onChange={(value) => setAttributes({ showLogosPrice: value })}
          />
          <ToggleControl
            label={__("Show Logos Image", "md-logo-slider")}
            checked={showLogosImage}
            onChange={(value) => setAttributes({ showLogosImage: value })}
          />
          <ToggleControl
            label={__("Show Logos Badge", "md-logo-slider")}
            checked={showLogosBadge}
            onChange={(value) => setAttributes({ showLogosBadge: value })}
          />
          <SelectControl
            label={__("Logo Style", "md-logo-slider")}
            value={logoStyle}
            options={[
              { value: "style1", label: __("Style 1", "md-logo-slider") },
              { value: "style2", label: __("Style 2", "md-logo-slider") }
            ]}
            onChange={(value) => setAttributes({ logoStyle: value })}
          />
          <RangeControl
            label={__("Number of Logos Per Row", "md-logo-slider")}
            value={numberOfLogosPerRow}
            onChange={(value) => setAttributes({ numberOfLogosPerRow: value })}
            min={1}
            max={6}
          />
        </PanelBody>
        <PanelBody
          title={__("Color Settings", "md-logo-slider")}
          initialOpen={false}
        >
          <PanelColorSettings
            title={__("Color Settings", "md-logo-slider")}
            colorSettings={[
              {
                value: logosTitleColor,
                onChange: (value) =>
                  setAttributes({ logosTitleColor: value }),
                label: __("Logos Title Color", "md-logo-slider"),
              },
              {
                value: logosDescriptionColor,
                onChange: (value) =>
                  setAttributes({ logosDescriptionColor: value }),
                label: __("Logos Description Color", "md-logo-slider"),
              },
              {
                value: logosPriceColor,
                onChange: (value) =>
                  setAttributes({ logosPriceColor: value }),
                label: __("Logos Price Color", "md-logo-slider"),
              },
              {
                value: logosBadgeTextColor,
                onChange: (value) =>
                  setAttributes({ logosBadgeTextColor: value }),
                label: __("Logos Badge Text Color", "md-logo-slider"),
              },
              {
                value: logosBadgeBackgroundColor,
                onChange: (value) =>
                  setAttributes({ logosBadgeBackgroundColor: value }),
                label: __("Logos Badge Background Color", "md-logo-slider"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className={ "md_icon_text" + (logoStyle === "style1" ? " style1" : " style2") }>
        <div className="md_icon_text__wrapper">
          <div className="md_icon_text__slider_wrap">
            <div className="md_icon_text__slider" style={{ gridTemplateColumns: `repeat(${numberOfLogosPerRow}, 1fr)` }}>
              {logos &&
                logos.map((postObj, index) => (
                  <div
                    key={postObj.id}
                    className="md_icon_text__item logo-slide show-items-hover-wrap"
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
                        {index + 1 < logos.length && (
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
                      {1 < logos.length && (
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
                                const updatedArray = logos.filter(
                                  (item, itemIndex) => itemIndex !== index
                                );
                                setAttributes({
                                  logos: updatedArray,
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
                                  const updatedArray = logos.filter(
                                    (item, itemIndex) => itemIndex !== index
                                  );
                                  setAttributes({
                                    logos: updatedArray,
                                  });
                                }
                              }
                            }}
                            aria-label="Delete item"
                          ></i>
                        </Tooltip>
                      )}
                    </div>
                    <div className="md_icon_text__item-image">
                      {showLogosImage && (
                      <div className="md-prime-block-control md_icon_text__item-image__img image-preview image-controle-visible-hover">
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
                      )}
                      <div className="md_icon_text__item-image-content">
                        {showLogosTitle && (
                        <RichText
                          tagName="h4"
                          className="image-title"
                          value={postObj.imageTitle}
                          onChange={(value) =>
                            updateStaticPostObj(index, "imageTitle", value)
                          }
                          placeholder={__("Image Title", "md-prime")}
                          style={{ color: logosTitleColor }}
                        />
                        )}
                        {showLogosDescription && (
                        <RichText
                          tagName="p"
                          className="image-text"
                          value={postObj.imageText}
                          onChange={(value) =>
                            updateStaticPostObj(index, "imageText", value)
                          }
                          placeholder={__("Description", "md-prime")}
                          style={{ color: logosDescriptionColor }}
                        />
                        )}
                      </div>
                      {showLogosPrice && (
                        <div className="md_icon_text__item-image-price">
                          <RichText
                            tagName="p"
                            className="image-price"
                            value={postObj.imagePrice}
                            onChange={(value) =>
                              updateStaticPostObj(index, "imagePrice", value)
                            }
                            placeholder={__("$ Price", "md-prime")}
                            style={{ color: logosPriceColor }}
                          />
                        </div>
                      )}
                      {showLogosBadge && (
                        <div className="md_icon_text__item-image-badge">
                          <div
                            className="badge"
                            style={{
                              color: logosBadgeTextColor,
                              backgroundColor: logosBadgeBackgroundColor,
                            }}
                          >
                            <RichText
                              tagName="span"
                              value={postObj.imageBadgeText}
                              onChange={(value) =>
                                updateStaticPostObj(
                                  index,
                                  "imageBadgeText",
                                  value
                                )
                              }
                              placeholder={__("Badge Text", "md-prime")}
                            />
                          </div>
                        </div>
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
        </div>
      </div>
    </div>
  );
}
