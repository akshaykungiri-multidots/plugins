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
  Button,
  RangeControl,
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
    showSubHeading,
    showHeading,
    subHeadingColor,
    headingColor,
    logos,
    logosTitleColor,
    logosDescriptionColor,
    logosReadMoreColor,
    showLogos,
    showLogosTitle,
    showLogosDescription,
    showLogosIcon,
    showLogosReadMore,
    numberOfLogosPerRow,
    logosAlignment,
    buttonText,
    showButton,
    buttonColor,
    buttonBackgroundColor,
  } = attributes;

  const addStaticPostObj = () => {
    const staticPostObj = [
      ...logos,
      {
        id: logos.length + 1,
        mediaImage: "",
        iconTitle: "",
        iconText: "",
        readMoreText: "",
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

  const siteURL = window.location.origin;

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
            label={__("Show Logos", "md-logo-slider")}
            checked={showLogos}
            onChange={(value) => setAttributes({ showLogos: value })}
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
            label={__("Show Logos Icon", "md-logo-slider")}
            checked={showLogosIcon}
            onChange={(value) => setAttributes({ showLogosIcon: value })}
          />
          <ToggleControl
            label={__("Show Logos Read More", "md-logo-slider")}
            checked={showLogosReadMore}
            onChange={(value) => setAttributes({ showLogosReadMore: value })}
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
                value: logosReadMoreColor,
                onChange: (newColor) =>
                  setAttributes({ logosReadMoreColor: newColor }),
                label: __("Logos Read More Color", "md-logo-slider"),
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
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className="md_research_block">
        <div className="md_research_block__heading">
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
        </div>
        {showLogos && (
          <div className={`md_research_block__slider_wrap`}>
            <div className="md_research_block__slider">
              {logos &&
                logos.map((postObj, index) => (
                  <div
                    key={postObj.id}
                    className="logo-slide show-items-hover-wrap"
                    style={{
                      width: `${100 / numberOfLogosPerRow}%`,
                      textAlign: logosAlignment,
                    }}
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
                    <div className="md-lithomd_research_block__item-icon">
                      <div className="md-lithomd_research_block__item-icon__wrapper">
                        {showLogosIcon && (
                          <div className="md-lithomd_research_block__item-icon__wrapper-icon">
                            <div className="md-prime-block-control image-preview image-controle-visible-hover md_litho_image_banner__media1">
                              <div
                                className={`image-controls small-icons icon-center-fixed`}
                              >
                                <MediaUploadCheck>
                                  <MediaUpload
                                    onSelect={(media) =>
                                      updateStaticPostObj(index, "mediaImage", media.url)
                                    }
                                    allowedTypes={["image"]}
                                    value={postObj.mediaImage}
                                    render={({ open }) => (
                                      <>
                                        {postObj.mediaImage ? (
                                          <>
                                            <Tooltip
                                              text={__(
                                                "Edit Image",
                                                "md-prime"
                                              )}
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
                                                  updateStaticPostObj(index, "mediaImage", "")
                                                }
                                                role="button"
                                                tabIndex={0}
                                                onKeyDown={(e) => {
                                                  if (
                                                    e.key === "Enter" ||
                                                    e.key === " "
                                                  ) {
                                                    e.preventDefault();
                                                    updateStaticPostObj(index, "mediaImage", "");
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
                                src={ postObj.mediaImage ? postObj.mediaImage : siteURL + placeholder }
                                alt={"slider"}
                              />
                              <span className="image-overlay"></span>
                            </div>
                          </div>
                        )}
                        <div className="md-lithomd_research_block__item-icon__wrapper-text">
                          <div className="md-lithomd_research_block__item-icon__wrapper-text__number">
                            {index + 1}
                          </div>
                          {showLogosTitle && (
                            <RichText
                              tagName="h4"
                              className="image-title"
                              value={postObj.iconTitle}
                              onChange={(value) =>
                                updateStaticPostObj(index, "iconTitle", value)
                              }
                              placeholder={__("Image Title", "md-prime")}
                              style={{ color: logosTitleColor }}
                            />
                          )}
                          {showLogosDescription && (
                            <RichText
                              tagName="p"
                              className="image-text"
                              value={postObj.iconText}
                              onChange={(value) =>
                                updateStaticPostObj(index, "iconText", value)
                              }
                              placeholder={__("Image Text", "md-prime")}
                              style={{ color: logosDescriptionColor }}
                            />
                          )}
                          {showLogosReadMore && (
                            <RichText
                              tagName="p"
                              className="read-more"
                              value={postObj.readMoreText}
                              onChange={(value) =>
                                updateStaticPostObj(
                                  index,
                                  "readMoreText",
                                  value
                                )
                              }
                              placeholder={__("Read More", "md-prime")}
                              style={{ color: logosReadMoreColor }}
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
          <div className="md_research_block__button">
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
