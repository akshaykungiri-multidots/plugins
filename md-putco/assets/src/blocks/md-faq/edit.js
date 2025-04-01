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
  SelectControl,
} from "@wordpress/components";

import fontIcons from "./fontIcons";

import { useState } from "@wordpress/element";

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
    faqItems,
    featuresList,
    backgroundImage,
    backgroundColor,
    showSubHeading,
    showHeading,
    showFeaturesList,
    subHeadingColor,
    headingColor,
    subHeadingBackgroundColor,
    faqItemTitleColor,
    faqItemContentColor,
    featuresListColor,
  } = attributes;

  const addStaticPostObj = () => {
    const staticPostObj = [
      ...faqItems,
      {
        id: faqItems.length + 1,
        title: "",
        content: "",
      },
    ];
    setAttributes({ faqItems: staticPostObj });
  };
  const updateStaticPostObj = (index, key, value) => {
    const updatedStaticPostObj = [...faqItems];
    updatedStaticPostObj[index][key] = value;
    setAttributes({ faqItems: updatedStaticPostObj });
  };
  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...faqItems];
    arrayCopy[oldIndex] = faqItems[newIndex];
    arrayCopy[newIndex] = faqItems[oldIndex];

    setAttributes({
      faqItems: arrayCopy,
    });
  };

  const addFeaturesList = () => {
    const featuresListCopy = [
      ...featuresList,
      {
        id: featuresList.length + 1,
        feature: "",
        icon: "fa-address-book",
      },
    ];
    setAttributes({ featuresList: featuresListCopy });
  };
  const updateFeaturesList = (index, key, value) => {
    const updatedFeaturesList = [...featuresList];
    updatedFeaturesList[index][key] = value;
    setAttributes({ featuresList: updatedFeaturesList });
  };
  const moveFeaturesListItem = (oldIndex, newIndex) => {
    const arrayCopy = [...featuresList];
    arrayCopy[oldIndex] = featuresList[newIndex];
    arrayCopy[newIndex] = featuresList[oldIndex];

    setAttributes({
      featuresList: arrayCopy,
    });
  };

  const [activeFaqItem, setActiveFaqItem] = useState(0);

  return (
    <div
      {...useBlockProps({ className: "md_faq_section" })}
      style={{ backgroundColor }}
    >
      <InspectorControls>
        <PanelBody title={__("FAQ Settings")}>
          <ToggleControl
            label={__("Show Sub Heading")}
            checked={showSubHeading}
            onChange={(value) => setAttributes({ showSubHeading: value })}
          />
          <ToggleControl
            label={__("Show Heading")}
            checked={showHeading}
            onChange={(value) => setAttributes({ showHeading: value })}
          />
          <ToggleControl
            label={__("Show Features List")}
            checked={showFeaturesList}
            onChange={(value) => setAttributes({ showFeaturesList: value })}
          />
        </PanelBody>
        <PanelBody title={__("Background Settings")} initialOpen={false}>
          <div className="setting-row">
            <label htmlFor="background-image">
              {__("Background Image", "md-prime")}
            </label>
            <div>
              {!backgroundImage ? (
                <MediaUpload
                  onSelect={(selectedImage) => {
                    setAttributes({ backgroundImage: selectedImage.url });
                  }}
                  allowedTypes={["image"]}
                  value={backgroundImage}
                  render={({ open }) => (
                    <Button onClick={open} className="button button-large">
                      {__("Upload Image", "md-prime")}
                    </Button>
                  )}
                />
              ) : (
                <>
                  <div className="image-preview">
                    <img src={backgroundImage} alt="Background-image-preview" />
                  </div>
                  <Button
                    onClick={() => {
                      setAttributes({ backgroundImage: "" });
                    }}
                    className="is-link is-destructive"
                  >
                    {__("Remove Image", "md-prime")}
                  </Button>
                </>
              )}
            </div>
          </div>
        </PanelBody>
        <PanelBody title={__("Color Settings")} initialOpen={false}>
          <PanelColorSettings
            title={__("Color Settings")}
            colorSettings={[
              {
                value: subHeadingColor,
                onChange: (value) => setAttributes({ subHeadingColor: value }),
                label: __("Sub Heading Color"),
              },
              {
                value: headingColor,
                onChange: (value) => setAttributes({ headingColor: value }),
                label: __("Heading Color"),
              },
              {
                value: subHeadingBackgroundColor,
                onChange: (value) =>
                  setAttributes({ subHeadingBackgroundColor: value }),
                label: __("Sub Heading Background Color"),
              },
              {
                value: faqItemTitleColor,
                onChange: (value) =>
                  setAttributes({ faqItemTitleColor: value }),
                label: __("FAQ Item Title Color"),
              },
              {
                value: faqItemContentColor,
                onChange: (value) =>
                  setAttributes({ faqItemContentColor: value }),
                label: __("FAQ Item Content Color"),
              },
              {
                value: backgroundColor,
                onChange: (value) => setAttributes({ backgroundColor: value }),
                label: __("Background Color"),
              },
              {
                value: featuresListColor,
                onChange: (value) =>
                  setAttributes({ featuresListColor: value }),
                label: __("Features List Color"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className="md_faq_section__inner">
        <div className="md_faq_image_banner">
          <img src={backgroundImage} alt="background" />
        </div>
        {showSubHeading && (
        <RichText
          tagName="h4"
          className="md_faq_section__sub_heading"
          value={subHeading}
          placeholder={__("Enter Sub Heading", "md-faq")}
          style={{
            color: subHeadingColor,
            backgroundColor: subHeadingBackgroundColor,
          }}
          onChange={(value) => setAttributes({ subHeading: value })}
        />
        )}
        {showHeading && (
        <RichText
          tagName="h2"
          className="md_faq_section__heading"
          value={heading}
          placeholder={__("Enter Heading", "md-faq")}
          style={{ color: headingColor }}
          onChange={(value) => setAttributes({ heading: value })}
        />
        )}
        <div className="md_faq_section__faq_items">
          {faqItems &&
            faqItems.map((postObj, index) => (
              <div
                className={
                  index === activeFaqItem
                    ? "ma_faq_block--inner-item active show-items-hover-wrap"
                    : "ma_faq_block--inner-item show-items-hover-wrap"
                }
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
                    {index + 1 < faqItems.length && (
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
                  {1 < faqItems.length && (
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
                            const updatedArray = faqItems.filter(
                              (item, itemIndex) => itemIndex !== index
                            );
                            setAttributes({
                              faqItems: updatedArray,
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
                              const updatedArray = faqItems.filter(
                                (item, itemIndex) => itemIndex !== index
                              );
                              setAttributes({
                                faqItems: updatedArray,
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
                  className="ma_faq_block--inner-item-heading"
                  onClick={() => setActiveFaqItem(index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault(); // Prevent default action for space key
                      setActiveFaqItem(index); // Trigger the click handler
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={__("Toggle item", "md-prime")}
                >
                  <RichText
                    tagName="div"
                    name="accordian-title"
                    placeholder={__("Title…")}
                    value={postObj.title}
                    onChange={(value) =>
                      updateStaticPostObj(index, "title", value)
                    }
                    style={{ color: faqItemTitleColor }}
                  />
                  <i
                    className={
                      activeFaqItem === index ? "fa fa-minus" : "fa fa-plus"
                    }
                    role="button"
                    tabIndex={0}
                    aria-label={
                      activeFaqItem === index
                        ? __("Collapse item", "md-prime")
                        : __("Expand item", "md-prime")
                    }
                  ></i>
                </div>
                <div className="ma_faq_block--inner-item-content">
                  <RichText
                    tagName="div"
                    name="accordian-content"
                    placeholder={__("Content…")}
                    value={postObj.content}
                    onChange={(value) =>
                      updateStaticPostObj(index, "content", value)
                    }
                    style={{ color: faqItemContentColor }}
                  />
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
      <div className="md_putco_features_list_wrap">
        {showFeaturesList && (
          <div className="md_putco_features_list">
            {featuresList &&
              featuresList.map((feature, index) => (
                <div
                  key={feature.id}
                  className="md_putco_features_list_item show-items-hover-wrap"
                >
                  <div className="item-action-wrap show-items-hover small-icons">
                    <div className="move-item">
                      {0 < index && (
                        <Tooltip text={__("Move Left", "md-prime")}>
                          <span
                            className="dashicons dashicons-arrow-left-alt move-left"
                            onClick={() =>
                              moveFeaturesListItem(index, index - 1)
                            }
                            onKeyDown={(event) => {
                              if (event.key === "Enter" || event.key === " ") {
                                moveFeaturesListItem(index, index - 1);
                              }
                            }}
                            role="button"
                            tabIndex={0}
                            aria-label="Move item left"
                          ></span>
                        </Tooltip>
                      )}
                      {index + 1 < featuresList.length && (
                        <Tooltip text={__("Move Right", "md-prime")}>
                          <span
                            className="dashicons dashicons-arrow-right-alt move-right"
                            role="button"
                            tabIndex="0"
                            onClick={() =>
                              moveFeaturesListItem(index, index + 1)
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter" || e.key === " ") {
                                moveFeaturesListItem(index, index + 1);
                              }
                            }}
                            aria-label="Move item right"
                          ></span>
                        </Tooltip>
                      )}
                    </div>
                    {1 < featuresList.length && (
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
                              const updatedArray = featuresList.filter(
                                (item, itemIndex) => itemIndex !== index
                              );
                              setAttributes({
                                featuresList: updatedArray,
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
                                const updatedArray = featuresList.filter(
                                  (item, itemIndex) => itemIndex !== index
                                );
                                setAttributes({
                                  featuresList: updatedArray,
                                });
                              }
                            }
                          }}
                          aria-label="Delete item"
                        ></i>
                      </Tooltip>
                    )}
                  </div>
                  <div className="md_putco_features_list_item_icon">
                    <label htmlFor={`select-icon-${index}`}>
                      {__("Select Icon")}
                    </label>
                    <SelectControl
                      id={`select-icon-${index}`}
                      closeMenuOnSelect={false}
                      value={feature.icon}
                      options={fontIcons}
                      onChange={(value) =>
                        updateFeaturesList(index, "icon", value)
                      }
                    />
                  </div>
                  <div className="md_putco_features_list_item_inner">
                    <i className={"fa " + feature.icon}></i>
                    <RichText
                      tagName="p"
                      value={feature.feature}
                      onChange={(value) =>
                        updateFeaturesList(index, "feature", value)
                      }
                      placeholder={__("Enter Feature", "md-prime")}
                      style={{ color: featuresListColor }}
                    />
                  </div>
                </div>
              ))}
          </div>
        )}
        <div
          className="add-item-wrap"
          onClick={addFeaturesList}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault(); // Prevent default action for space key
              addFeaturesList(); // Trigger the click handler
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
  );
}
