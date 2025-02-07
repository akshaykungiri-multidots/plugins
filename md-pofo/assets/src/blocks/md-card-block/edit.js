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
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";

import {
  PanelBody,
  ToggleControl,
  Tooltip,
  SelectControl,
  RangeControl,
  Button,
} from "@wordpress/components";

import placeholder from "./placeholder-image.png";

import { leftAlign, centerAlign, rightAlign } from "../icons";

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
    description,
    showSubHeading,
    showHeading,
    showDescription,
    subHeadingColor,
    headingColor,
    descriptionColor,
    logos,
    enableBorder,
    logosTitleColor,
    logosDescriptionColor,
    logoCardColor,
    logoCardBackgroundColor,
    logosSubTitleColor,
    showLogos,
    showLogosTitle,
    showLogosDescription,
    showCardImage,
    showLogosSubTitle,
    numberOfLogosPerRow,
    logosAlignment,
    buttonText,
    showButton,
    buttonColor,
    buttonBackgroundColor,
    logoStyle,
  } = attributes;

  const siteURL = window.location.origin;

  const addStaticPostObj = () => {
    const staticPostObj = [
      ...logos,
      {
        id: logos.length + 1,
        mediaImage: "",
        cardTitle: "",
        cardText: "",
        descriptionText: "",
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
          <RangeControl
            label={__("Number of Logos Per Row", "md-logo-slider")}
            value={numberOfLogosPerRow}
            onChange={(value) => setAttributes({ numberOfLogosPerRow: value })}
            min={1}
            max={6}
          />
          <div className="setting-row inspector-field inspector-field-alignment">
            <label htmlFor="alignment" className="inspector-mb-0">
              Alignment
            </label>
            <div className="inspector-field-button-list inspector-field-button-list-fluid">
              <button
                className={
                  "left" === logosAlignment
                    ? "active inspector-button"
                    : " inspector-button"
                }
                onClick={() => setAttributes({ logosAlignment: "left" })}
              >
                {leftAlign}
              </button>
              <button
                className={
                  "center" === logosAlignment
                    ? "active inspector-button"
                    : " inspector-button"
                }
                onClick={() => setAttributes({ logosAlignment: "center" })}
              >
                {centerAlign}
              </button>
              <button
                className={
                  "right" === logosAlignment
                    ? "active inspector-button"
                    : " inspector-button"
                }
                onClick={() => setAttributes({ logosAlignment: "right" })}
              >
                {rightAlign}
              </button>
            </div>
          </div>
          <div className="setting-row inspector-field inspector-field-alignment">
            <label htmlFor="alignment" className="inspector-mb-0">
              {__("Logo Style", "md-logo-slider")}
            </label>
            <SelectControl
              id="logo-style"
              value={logoStyle}
              options={[
                { value: "style1", label: __("Style 1", "md-logo-slider") },
                { value: "style2", label: __("Style 2", "md-logo-slider") },
              ]}
              onChange={(value) => setAttributes({ logoStyle: value })}
            />
          </div>
        </PanelBody>
        <PanelBody
          title={__("Toggle Settings", "md-logo-slider")}
          initialOpen={false}
        >
          <ToggleControl
            label={__("Show Sub Heading", "md-logo-slider")}
            checked={showSubHeading}
            onChange={(value) => setAttributes({ showSubHeading: value })}
          />
          <ToggleControl
            label={__("Show Heading", "md-logo-slider")}
            checked={showHeading}
            onChange={(value) => setAttributes({ showHeading: value })}
          />
          <ToggleControl
            label={__("Show Description", "md-logo-slider")}
            checked={showDescription}
            onChange={(value) => setAttributes({ showDescription: value })}
          />
          <ToggleControl
            label={__("Show Logos", "md-logo-slider")}
            checked={showLogos}
            onChange={(value) => setAttributes({ showLogos: value })}
          />
          <ToggleControl
            label={__("Enable Border", "md-logo-slider")}
            checked={enableBorder}
            onChange={(value) => setAttributes({ enableBorder: value })}
          />
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
            label={__("Show Card Image", "md-logo-slider")}
            checked={showCardImage}
            onChange={(value) => setAttributes({ showCardImage: value })}
          />
          <ToggleControl
            label={__("Show Logos Sub Title", "md-logo-slider")}
            checked={showLogosSubTitle}
            onChange={(value) => setAttributes({ showLogosSubTitle: value })}
          />
          <ToggleControl
            label={__("Show Button", "md-logo-slider")}
            checked={showButton}
            onChange={(value) => setAttributes({ showButton: value })}
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
                onChange: (newColor) =>
                  setAttributes({ logosTitleColor: newColor }),
                label: __("Logos Title Color", "md-logo-slider"),
              },
              {
                value: logosDescriptionColor,
                onChange: (newColor) =>
                  setAttributes({ logosDescriptionColor: newColor }),
                label: __("Logos Description Color", "md-logo-slider"),
              },
              {
                value: logoCardColor,
                onChange: (newColor) =>
                  setAttributes({ logoCardColor: newColor }),
                label: __("Logo Card Color", "md-logo-slider"),
              },
              {
                value: logosSubTitleColor,
                onChange: (newColor) =>
                  setAttributes({ logosSubTitleColor: newColor }),
                label: __("Logos Sub Title Color", "md-logo-slider"),
              },
              {
                value: subHeadingColor,
                onChange: (newColor) =>
                  setAttributes({ subHeadingColor: newColor }),
                label: __("Sub Heading Color", "md-logo-slider"),
              },
              {
                value: headingColor,
                onChange: (newColor) =>
                  setAttributes({ headingColor: newColor }),
                label: __("Heading Color", "md-logo-slider"),
              },
              {
                value: descriptionColor,
                onChange: (newColor) =>
                  setAttributes({ descriptionColor: newColor }),
                label: __("Description Color", "md-logo-slider"),
              },
              {
                value: buttonColor,
                onChange: (newColor) =>
                  setAttributes({ buttonColor: newColor }),
                label: __("Button Color", "md-logo-slider"),
              },
              {
                value: buttonBackgroundColor,
                onChange: (newColor) =>
                  setAttributes({ buttonBackgroundColor: newColor }),
                label: __("Button Background Color", "md-logo-slider"),
              },
              {
                value: logoCardBackgroundColor,
                onChange: (newColor) =>
                  setAttributes({ logoCardBackgroundColor: newColor }),
                label: __("Logo Card Background Color", "md-logo-slider"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className={"md_card_block " + logosAlignment}>
        <div className="md_card_block__heading">
          {showSubHeading && (
            <RichText
              tagName="h4"
              className="sub-heading"
              value={subHeading}
              onChange={(value) => setAttributes({ subHeading: value })}
              placeholder={__("Sub Heading", "md-prime")}
              style={{ color: subHeadingColor }}
            />
          )}
          {showHeading && (
            <RichText
              tagName="h2"
              className="heading"
              value={heading}
              onChange={(value) => setAttributes({ heading: value })}
              placeholder={__("Heading", "md-prime")}
              style={{ color: headingColor }}
            />
          )}
          {showDescription && (
            <RichText
              tagName="p"
              className="description"
              value={description}
              onChange={(value) => setAttributes({ description: value })}
              placeholder={__("Description", "md-prime")}
              style={{ color: descriptionColor }}
            />
          )}
        </div>
        {showLogos && (
          <div className={`md_card_block__slider_wrap ` + logoStyle}>
            <div className="md_card_block__slider">
              {logos &&
                logos.map((postObj, index) => (
                  <div
                    key={postObj.id}
                    className="logo-slide show-items-hover-wrap"
                    style={{
                      width: `${100 / numberOfLogosPerRow}%`,
                    }}
                  >
                    <div className="item-action-wrap show-items-hover small-cards">
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
                    <div
                      className={
                        "md-pofomd_card_block__item-card " + logosAlignment
                      }
                      style={{
                        border: enableBorder ? "1px solid" : "none",
                        backgroundColor: logoCardBackgroundColor,
                      }}
                    >
                      <div className="md-pofomd_card_block__item-card__wrapper feature-box-15">
                        <div className="md-pofomd_card_block__item-card__wrapper-card__flip feature-box-content">
                          {showCardImage && (
                            <div className="md-pofomd_card_block__item-card__wrapper-card__image feature-box-image">
                              <div className="md-prime-block-control image-preview">
                                <img
                                  src={
                                    postObj.mediaImage || siteURL + placeholder
                                  }
                                  alt=""
                                />
                              </div>
                            </div>
                          )}
                          {showLogosDescription && (
                            <div
                              className="md-pofomd_card_block__item-card__wrapper-card__back hover-content"
                              style={{ backgroundColor: logoCardColor }}
                            >
                              <RichText
                                tagName="p"
                                className="image-text"
                                value={postObj.cardText}
                                onChange={(value) =>
                                  updateStaticPostObj(index, "cardText", value)
                                }
                                placeholder={__("Image Text", "md-prime")}
                                style={{ color: logosDescriptionColor }}
                              />
                            </div>
                          )}
                          <div className="md-pofomd_card_block__item-card__wrapper-card__image_controls md-prime-block-control image-preview">
                            <div
                              className={`image-controls small-icons icon-center-fixed`}
                            >
                              <MediaUploadCheck>
                                <MediaUpload
                                  onSelect={(media) =>
                                    updateStaticPostObj(
                                      index,
                                      "mediaImage",
                                      media.url
                                    )
                                  }
                                  allowedTypes={["image"]}
                                  value={postObj.mediaImage}
                                  render={({ open }) => (
                                    <>
                                      {postObj.mediaImage ? (
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
                                                  "mediaImage",
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
                                                    "mediaImage",
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
                          </div>
                        </div>
                        <div className="md-pofomd_card_block__item-card__wrapper-text">
                          {showLogosTitle && (
                            <RichText
                              tagName="h4"
                              className="image-title"
                              value={postObj.cardTitle}
                              onChange={(value) =>
                                updateStaticPostObj(index, "cardTitle", value)
                              }
                              placeholder={__("Image Title", "md-prime")}
                              style={{ color: logosTitleColor }}
                            />
                          )}
                          {showLogosSubTitle && (
                            <RichText
                              tagName="p"
                              className="read-more"
                              value={postObj.descriptionText}
                              onChange={(value) =>
                                updateStaticPostObj(
                                  index,
                                  "descriptionText",
                                  value
                                )
                              }
                              placeholder={__("Sub Title", "md-prime")}
                              style={{ color: logosSubTitleColor }}
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
        )}
        {showButton && (
          <div className="md_card_block__button">
            <RichText
              tagName="p"
              className="button"
              value={buttonText}
              onChange={(value) => setAttributes({ buttonText: value })}
              placeholder={__("Button Text", "md-prime")}
              style={{
                backgroundColor: buttonBackgroundColor,
                color: buttonColor,
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
