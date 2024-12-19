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
  MediaUpload,
  PanelColorSettings,
  RichText,
} from "@wordpress/block-editor";

import {
  PanelBody,
  Button,
  ToggleControl,
  Tooltip,
  SelectControl
} from "@wordpress/components";

import fontIcons from "./fontIcons";

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
    logos,
    logosTitleColor,
    logosDescriptionColor,
    logoIconColor,
    showLogos,
    showLogosTitle,
    showLogosDescription,
    showLogosIcon,
    showLeftCounter,
    showRightCounter,
    leftCounterNumber,
    leftCounterTitle,
    leftCounterDescription,
    leftCounterNumberColor,
    leftCounterTitleColor,
    leftCounterDescriptionColor,
    rightCounterNumber,
    rightCounterTitle,
    rightCounterDescription,
    rightCounterNumberColor,
    rightCounterTitleColor,
    rightCounterDescriptionColor,
    yearOfExperience,
    yearOfExperienceText,
    yearOfExperienceColor,
    yearOfExperienceTextColor,
    yearOfExperienceBackgroundImage,
    showYearOfExperience,
    showYearOfExperienceBackgroundImage
  } = attributes;

  const addStaticPostObj = () => {
    const staticPostObj = [
      ...logos,
      {
        id: logos.length + 1,
        icon: "fa-500px",
        iconTitle: "",
        iconText: "",
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
          title={__("Toggle Settings", "md-logo-slider")}
          initialOpen={true}
        >
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
            label={__("Show Left Counter", "md-logo-slider")}
            checked={showLeftCounter}
            onChange={(value) => setAttributes({ showLeftCounter: value })}
          />
          <ToggleControl
            label={__("Show Right Counter", "md-logo-slider")}
            checked={showRightCounter}
            onChange={(value) => setAttributes({ showRightCounter: value })}
          />
        </PanelBody>
        <PanelBody
          title={__("Year of Experience", "md-logo-slider")}
          initialOpen={false}
        >
          <ToggleControl
            label={__("Show Year of Experience", "md-logo-slider")}
            checked={showYearOfExperience}
            onChange={(value) => setAttributes({ showYearOfExperience: value })}
          />
          <ToggleControl
            label={__(
              "Show Year of Experience Background Image",
              "md-logo-slider"
            )}
            checked={showYearOfExperienceBackgroundImage}
            onChange={(value) =>
              setAttributes({ showYearOfExperienceBackgroundImage: value })
            }
          />
          {showYearOfExperienceBackgroundImage && (
            <>
              <div className="setting-row">
                <label htmlFor="background-image">
                  {__("Background Image", "md-prime")}
                </label>
                <div>
                  {!yearOfExperienceBackgroundImage ? (
                    <MediaUpload
                      onSelect={(selectedImage) => {
                        setAttributes({
                          yearOfExperienceBackgroundImage: selectedImage.url,
                        });
                      }}
                      allowedTypes={["image"]}
                      value={yearOfExperienceBackgroundImage}
                      render={({ open }) => (
                        <Button onClick={open} className="button button-large">
                          {__("Upload Image", "md-prime")}
                        </Button>
                      )}
                    />
                  ) : (
                    <>
                      <div className="image-preview">
                        <img
                          src={yearOfExperienceBackgroundImage}
                          alt="Background-image-preview"
                        />
                      </div>
                      <Button
                        onClick={() => {
                          setAttributes({
                            yearOfExperienceBackgroundImage: "",
                          });
                        }}
                        className="is-link is-destructive"
                      >
                        {__("Remove Image", "md-prime")}
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </>
          )}
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
                value: logoIconColor,
                onChange: (newColor) =>
                  setAttributes({ logoIconColor: newColor }),
                label: __("Logo Icon Color", "md-logo-slider"),
              },
              {
                value: leftCounterNumberColor,
                onChange: (newColor) =>
                  setAttributes({ leftCounterNumberColor: newColor }),
                label: __("Left Counter Number Color", "md-logo-slider"),
              },
              {
                value: leftCounterTitleColor,
                onChange: (newColor) =>
                  setAttributes({ leftCounterTitleColor: newColor }),
                label: __("Left Counter Title Color", "md-logo-slider"),
              },
              {
                value: leftCounterDescriptionColor,
                onChange: (newColor) =>
                  setAttributes({ leftCounterDescriptionColor: newColor }),
                label: __("Left Counter Description Color", "md-logo-slider"),
              },
              {
                value: rightCounterNumberColor,
                onChange: (newColor) =>
                  setAttributes({ rightCounterNumberColor: newColor }),
                label: __("Right Counter Number Color", "md-logo-slider"),
              },
              {
                value: rightCounterTitleColor,
                onChange: (newColor) =>
                  setAttributes({ rightCounterTitleColor: newColor }),
                label: __("Right Counter Title Color", "md-logo-slider"),
              },
              {
                value: rightCounterDescriptionColor,
                onChange: (newColor) =>
                  setAttributes({ rightCounterDescriptionColor: newColor }),
                label: __("Right Counter Description Color", "md-logo-slider"),
              },
              {
                value: yearOfExperienceColor,
                onChange: (newColor) =>
                  setAttributes({ yearOfExperienceColor: newColor }),
                label: __("Year of Experience Number Color", "md-logo-slider"),
              },
              {
                value: yearOfExperienceTextColor,
                onChange: (newColor) =>
                  setAttributes({ yearOfExperienceTextColor: newColor }),
                label: __("Year of Experience Text Color", "md-logo-slider"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className="md_icon_text">
        {showLogos && (
        <div className="md_icon_text__slider_wrap">
          <div className="md_icon_text__slider">
            {logos &&
              logos.map((postObj, index) => (
                <div
                  key={postObj.id}
                  className="logo-slide show-items-hover-wrap"
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
                  <div className="md-lithomd_icon_text__item-icon">
                    {showLogosIcon && (
                    <div className="md-lithomd_icon_text__item-icon-inner">
                      <SelectControl
                        id={`select-icon-${index}`}
                        closeMenuOnSelect={false}
                        value={postObj.icon}
                        options={fontIcons}
                        onChange={(value) =>
                          updateStaticPostObj(index, "icon", value)
                        }
                      />
                    </div>
                    )}
                    <div className="md-lithomd_icon_text__item-icon__wrapper">
                      {showLogosIcon && (
                      <div className="md-lithomd_icon_text__item-icon__wrapper-icon">
                        <i
                          className={"fa " + postObj.icon}
                          style={{ color: logoIconColor }}
                        ></i>
                      </div>
                      )}
                      <div className="md-lithomd_icon_text__item-icon__wrapper-text">
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
        <div className="md_icon_text__counter_wrap">
          <div className="md_icon_text__counter">
            {showLeftCounter && (
              <div className="counter-item md_left_counter">
                <div className="counter-number">
                  <RichText
                    tagName="h4"
                    className="counter-number"
                    value={leftCounterNumber}
                    onChange={(value) =>
                      setAttributes({ leftCounterNumber: value })
                    }
                    placeholder={__("0+", "md-prime")}
                    style={{ color: leftCounterNumberColor }}
                  />
                </div>
                <div className="counter-title">
                  <RichText
                    tagName="h4"
                    className="counter-title"
                    value={leftCounterTitle}
                    onChange={(value) =>
                      setAttributes({ leftCounterTitle: value })
                    }
                    placeholder={__("Counter Title", "md-prime")}
                    style={{ color: leftCounterTitleColor }}
                  />
                </div>
                <div className="counter-description">
                  <RichText
                    tagName="p"
                    className="counter-description"
                    value={leftCounterDescription}
                    onChange={(value) =>
                      setAttributes({ leftCounterDescription: value })
                    }
                    placeholder={__("Counter Description", "md-prime")}
                    style={{ color: leftCounterDescriptionColor }}
                  />
                </div>
              </div>
            )}
            {showYearOfExperience && (
              <div className="counter-item md_year_of_experience">
                <div className="counter-number">
                  <RichText
                    tagName="span"
                    className="counter-number"
                    value={yearOfExperience}
                    onChange={(value) =>
                      setAttributes({ yearOfExperience: value })
                    }
                    placeholder={__("20+", "md-prime")}
                    style={{ 
                      color: yearOfExperienceColor, 
                      backgroundImage: showYearOfExperienceBackgroundImage ? `url(${yearOfExperienceBackgroundImage})` : "none",
                      WebkitTextFillColor: showYearOfExperienceBackgroundImage ? "transparent" : "initial",
                      WebkitBackgroundClip: showYearOfExperienceBackgroundImage ? "text" : "initial"
                    }}
                  />
                </div>
                <div className="counter-title">
                  <RichText
                    tagName="h4"
                    className="counter-title"
                    value={yearOfExperienceText}
                    onChange={(value) =>
                      setAttributes({ yearOfExperienceText: value })
                    }
                    placeholder={__("Year of Experience Text", "md-prime")}
                    style={{ color: yearOfExperienceTextColor }}
                  />
                </div>
              </div>
            )}
            {showRightCounter && (
              <div className="counter-item md_right_counter">
                <div className="counter-number">
                  <RichText
                    tagName="h4"
                    className="counter-number"
                    value={rightCounterNumber}
                    onChange={(value) =>
                      setAttributes({ rightCounterNumber: value })
                    }
                    placeholder={__("0+", "md-prime")}
                    style={{ color: rightCounterNumberColor }}
                  />
                </div>
                <div className="counter-title">
                  <RichText
                    tagName="h4"
                    className="counter-title"
                    value={rightCounterTitle}
                    onChange={(value) =>
                      setAttributes({ rightCounterTitle: value })
                    }
                    placeholder={__("Counter Title", "md-prime")}
                    style={{ color: rightCounterTitleColor }}
                  />
                </div>
                <div className="counter-description">
                  <RichText
                    tagName="p"
                    className="counter-description"
                    value={rightCounterDescription}
                    onChange={(value) =>
                      setAttributes({ rightCounterDescription: value })
                    }
                    placeholder={__("Counter Description", "md-prime")}
                    style={{ color: rightCounterDescriptionColor }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
