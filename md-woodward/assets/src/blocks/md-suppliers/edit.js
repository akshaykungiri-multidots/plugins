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
  RichText,
  PanelColorSettings,
} from "@wordpress/block-editor";

import {
  PanelBody,
  Button,
  ToggleControl,
  Tooltip,
  GradientPicker,
} from "@wordpress/components";

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
    heading,
    contentTabs,
    backgroundImage,
    enableOverlay,
    backgroundOverlay,
    headingColor,
    contentTabTitleColor,
    contentTabContentColor,
    contentTabButtonColor,
    contentTabButtonHoverColor,
    contentTabButtonBackgroundColor,
    contentTabButtonBackgroundHoverColor,
    showContentTabButton,
    showHeading
  } = attributes;

  const addStaticPostObj = () => {
    const staticPostObj = [
      ...contentTabs,
      {
        id: contentTabs.length + 1,
        title: "New Tab",
        content: "New Content",
        buttonTitle: "Read More",
      },
    ];
    setAttributes({ contentTabs: staticPostObj });
  };
  const updateStaticPostObj = (index, key, value) => {
    const updatedStaticPostObj = [...contentTabs];
    updatedStaticPostObj[index][key] = value;
    setAttributes({ contentTabs: updatedStaticPostObj });
  };
  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...contentTabs];
    arrayCopy[oldIndex] = contentTabs[newIndex];
    arrayCopy[newIndex] = contentTabs[oldIndex];

    setAttributes({
      contentTabs: arrayCopy,
    });
  };

  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div {...useBlockProps({ className: "md_suppliers_block" })}>
      <InspectorControls>
        <PanelBody
          title={__("Background Settings", "md-prime")}
        >
          <div className="setting-row">
            <label htmlFor="background-image">
              {__("Background Image", "md-prime")}
            </label>
            <div>
              {!backgroundImage ? (
                <MediaUpload
                  onSelect={(selectedImage) => {
                    setAttributes({
                      backgroundImage: selectedImage.url,
                    });
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
                      setAttributes({
                        backgroundImage: "",
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
          <div className="setting-row">
            <ToggleControl
              label={__("Enable Overlay", "md-anitian-fse-v2")}
              checked={enableOverlay}
              onChange={(value) => setAttributes({ enableOverlay: value })}
            />
            {enableOverlay && (
              <PanelColorSettings
                title={__("Overlay Color Settings", "md-storyful-fse-full")}
                initialOpen={false}
                colorSettings={[
                  {
                    value: backgroundOverlay,
                    onChange: (value) =>
                      setAttributes({ backgroundOverlay: value }),
                    label: __("Overlay Color", "md-storyful-fse-full"),
                  },
                ]}
              />
            )}
          </div>
        </PanelBody>
        <PanelBody title={__("Toggle Settings")} initialOpen={false}>
          <ToggleControl
            label={__("Show Heading", "md-woodward")}
            checked={showHeading}
            onChange={(value) => setAttributes({ showHeading: value })}
          />
        </PanelBody>
        <PanelBody title={__("Button Settings")} initialOpen={false}>
          <ToggleControl
            label={__("Show Button", "md-woodward")}
            checked={showContentTabButton}
            onChange={(value) => setAttributes({ showContentTabButton: value })}
          />
          {showContentTabButton && (
            <div className="settings-row">
              <PanelColorSettings
                title={__("Button Color Settings", "md-storyful-fse-full")}
                initialOpen={false}
                colorSettings={[
                  {
                    value: contentTabButtonColor,
                    onChange: (newColor) =>
                      setAttributes({ contentTabButtonColor: newColor }),
                    label: __("Button Font Color"),
                  },
                  {
                    value: contentTabButtonHoverColor,
                    onChange: (newColor) =>
                      setAttributes({ contentTabButtonHoverColor: newColor }),
                    label: __("Button Hover Font Color"),
                  },
                ]}
              />
              <div className="settings-row">
                <label htmlFor="contentTabButtonBackgroundColor">
                  {__("Button Background Color")}
                </label>
                <GradientPicker
                  id="contentTabButtonBackgroundColor"
                  label={__("Button Background Color")}
                  value={
                    contentTabButtonBackgroundColor
                      ? contentTabButtonBackgroundColor
                      : null
                  }
                  onChange={(value) =>
                    setAttributes({ contentTabButtonBackgroundColor: value })
                  }
                  gradients={[
                    {
                      name: "Gradient 1",
                      gradient:
                        "linear-gradient(90deg, #C73727 0%, #E76A24 100.28%)",
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
              <div className="settings-row">
                <label htmlFor="contentTabButtonBackgroundHoverColor">
                  {__("Button Hover Background Color")}
                </label>
                <GradientPicker
                  id="contentTabButtonBackgroundHoverColor"
                  label={__("Button Hover Background Color")}
                  value={
                    contentTabButtonBackgroundHoverColor
                      ? contentTabButtonBackgroundHoverColor
                      : null
                  }
                  onChange={(value) =>
                    setAttributes({
                      contentTabButtonBackgroundHoverColor: value,
                    })
                  }
                  gradients={[
                    {
                      name: "Gradient 1",
                      gradient:
                        "linear-gradient(90deg, #C73727 0%, #E76A24 100.28%)",
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
            </div>
          )}
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
                value: contentTabTitleColor,
                onChange: (newColor) =>
                  setAttributes({
                    contentTabTitleColor: newColor,
                  }),
                label: __("Tab Title Font Color"),
              },
              {
                value: contentTabContentColor,
                onChange: (newColor) =>
                  setAttributes({
                    contentTabContentColor: newColor,
                  }),
                label: __("Tab Content Font Color"),
              },
              {
                value: headingColor,
                onChange: (newColor) =>
                  setAttributes({
                    headingColor: newColor,
                  }),
                label: __("Heading Font Color"),
              }
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <style>
        {`
          .md_suppliers_block__tab-content__button__input {
            color: ${contentTabButtonColor};
            background: ${contentTabButtonBackgroundColor};
          }
          .md_suppliers_block__tab-content__button__input:hover {
            color: ${contentTabButtonHoverColor};
            background: ${contentTabButtonBackgroundHoverColor};
          }
        `}
      </style>
      <div className="md_suppliers_block__inner">
        {backgroundImage && (
          <img src={backgroundImage} alt="Supplies" className="bg-img" />
        )}
        {enableOverlay && (
        <div
          className="md_suppliers_background_overlay"
          style={{ background: backgroundOverlay }}
        ></div>
        )}
        <div className="container">
          {showHeading && (
          <RichText
            tagName="h2"
            className="md_suppliers_block__heading"
            value={heading}
            onChange={(value) => setAttributes({ heading: value })}
            style={{ color: headingColor }}
            placeholder={__("Enter Heading", "md-prime")}
          />
          )}
          <div className="md_suppliers_block__tabs">
            <div className="md_suppliers_block__tabs-title">
              {contentTabs &&
                contentTabs.map((postObj, index) => (
                  <div
                    key={postObj.id}
                    className={`md_suppliers_block__tab-title-wrap show-items-hover-wrap ${index === currentTab ? "active" : ""}`}
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
                        {index + 1 < contentTabs.length && (
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
                      {1 < contentTabs.length && (
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
                                const updatedArray = contentTabs.filter(
                                  (item, itemIndex) => itemIndex !== index
                                );
                                setAttributes({
                                  contentTabs: updatedArray,
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
                                  const updatedArray = contentTabs.filter(
                                    (item, itemIndex) => itemIndex !== index
                                  );
                                  setAttributes({
                                    contentTabs: updatedArray,
                                  });
                                }
                              }
                            }}
                            aria-label="Delete item"
                          ></i>
                        </Tooltip>
                      )}
                    </div>
                    <div className="md_suppliers_block__tab-icon"></div>
                    <RichText
                      tagName="h3"
                      className="md_suppliers_block__tab-title__input"
                      value={postObj.title}
                      onChange={(value) =>
                        updateStaticPostObj(index, "title", value)
                      }
                      style={{ color: contentTabTitleColor }}
                      placeholder={__("Enter Title", "md-prime")}
                      onClick={() => setCurrentTab(index)}
                    />
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
            <div className="md_suppliers_block__tabs-content">
              {currentTab >= 0 && (
                <div className="md_suppliers_block__tab-content_item active">
                  <RichText
                    tagName="p"
                    className="md_suppliers_block__tab-content__input"
                    value={contentTabs[currentTab].content}
                    onChange={(value) =>
                      updateStaticPostObj(currentTab, "content", value)
                    }
                    style={{ color: contentTabContentColor }}
                    placeholder={__("Enter Content", "md-prime")}
                  />
                  {showContentTabButton && (
                    <div className="md_suppliers_block__tab-content__button">
                      <RichText
                        tagName="button"
                        className="md_suppliers_block__tab-content__button__input md-btn-main has-right-arrow"
                        value={contentTabs[currentTab].buttonTitle}
                        onChange={(value) =>
                          updateStaticPostObj(currentTab, "buttonTitle", value)
                        }
                        style={{ color: contentTabButtonColor }}
                        placeholder={__("Enter Button Title", "md-prime")}
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
