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
  InnerBlocks,
} from "@wordpress/block-editor";

import {
  PanelBody,
  ToggleControl,
  Tooltip,
  SelectControl,
  Button
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
    title,
    description,
    backgroundImage,
    iconList,
    showTitle,
    showDescription,
    showSocialLinks,
    showIconList,
    showBackgroundImage,
    titleColor,
    descriptionColor,
    iconColor,
    iconTitleColor,
    iconDescriptionColor,
    iconListBackgroundColor,
  } = attributes;
  const ALLOWED_BLOCKS = ["core/social-links"];

  const addStaticPostObj = () => {
    const staticPostObj = [
      ...iconList,
      {
        id: iconList.length + 1,
        icon: "fa-500px",
        iconTitle: "",
        iconText: "",
      },
    ];
    setAttributes({ iconList: staticPostObj });
  };
  const updateStaticPostObj = (index, key, value) => {
    const updatedStaticPostObj = [...iconList];
    updatedStaticPostObj[index][key] = value;
    setAttributes({ iconList: updatedStaticPostObj });
  };
  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...iconList];
    arrayCopy[oldIndex] = iconList[newIndex];
    arrayCopy[newIndex] = iconList[oldIndex];

    setAttributes({
      iconList: arrayCopy,
    });
  };
  return (
    <div {...useBlockProps({ className: "md_hero_banner" })}>
      <InspectorControls>
        <PanelBody title={__("Toggle Settings")}>
          <ToggleControl
            label={__("Show Title")}
            checked={showTitle}
            onChange={(value) => setAttributes({ showTitle: value })}
          />
          <ToggleControl
            label={__("Show Description")}
            checked={showDescription}
            onChange={(value) => setAttributes({ showDescription: value })}
          />
          <ToggleControl
            label={__("Show Social Links")}
            checked={showSocialLinks}
            onChange={(value) => setAttributes({ showSocialLinks: value })}
          />
          <ToggleControl
            label={__("Show Icon List")}
            checked={showIconList}
            onChange={(value) => setAttributes({ showIconList: value })}
          />
        </PanelBody>
        <PanelBody title={__("Background Image")} initialOpen={false}>
          <ToggleControl
            label={__("Show Background Image")}
            checked={showBackgroundImage}
            onChange={(value) => setAttributes({ showBackgroundImage: value })}
          />
          {showBackgroundImage && (
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
                      <img
                        src={backgroundImage}
                        alt="Background-image-preview"
                      />
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
          )}
        </PanelBody>
        <PanelBody title={__("Color Settings")} initialOpen={false}>
          <PanelColorSettings
            title={__("Color Settings")}
            colorSettings={[
              {
                value: titleColor,
                onChange: (value) => setAttributes({ titleColor: value }),
                label: __("Title Color"),
              },
              {
                value: descriptionColor,
                onChange: (value) => setAttributes({ descriptionColor: value }),
                label: __("Description Color"),
              },
              {
                value: iconColor,
                onChange: (value) => setAttributes({ iconColor: value }),
                label: __("Icon Color"),
              },
              {
                value: iconTitleColor,
                onChange: (value) => setAttributes({ iconTitleColor: value }),
                label: __("Icon Title Color"),
              },
              {
                value: iconDescriptionColor,
                onChange: (value) =>
                  setAttributes({ iconDescriptionColor: value }),
                label: __("Icon Description Color"),
              },
              {
                value: iconListBackgroundColor,
                onChange: (value) =>
                  setAttributes({ iconListBackgroundColor: value }),
                label: __("Icon List Background Color"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>

      <div
        className="md_hero_banner__inner"
        style={{
          backgroundImage: showBackgroundImage
            ? `url(${backgroundImage})`
            : "none",
        }}
      >
        <div className="container">
          <div className="md_hero_banner__content">
            <div className="md_hero_banner__content__wrap">
              {showTitle && (
                <RichText
                  tagName="h2"
                  className="md_hero_banner__title"
                  value={title}
                  onChange={(value) => setAttributes({ title: value })}
                  style={{ color: titleColor }}
                  placeholder={__("Title", "md-prime")}
                />
              )}
              {showDescription && (
                <RichText
                  tagName="p"
                  className="md_hero_banner__description"
                  value={description}
                  onChange={(value) => setAttributes({ description: value })}
                  style={{ color: descriptionColor }}
                  placeholder={__("Description", "md-prime")}
                  allowedFormats={[
                    "core/bold",
                    "core/italic",
                    "core/underline",
                  ]}
                />
              )}
              {showSocialLinks && (
                <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
              )}
            </div>
          </div>
        </div>
      </div>
      {showIconList && (
        <div className={`md_icon_block__slider_wrap container`}>
          <div className="md_icon_block__slider">
            {iconList &&
              iconList.map((postObj, index) => (
                <div
                  key={postObj.id}
                  className="logo-slide show-items-hover-wrap"
                  style={{ backgroundColor: iconListBackgroundColor }}
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
                      {index + 1 < iconList.length && (
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
                    {1 < iconList.length && (
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
                              const updatedArray = iconList.filter(
                                (item, itemIndex) => itemIndex !== index
                              );
                              setAttributes({
                                iconList: updatedArray,
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
                                const updatedArray = iconList.filter(
                                  (item, itemIndex) => itemIndex !== index
                                );
                                setAttributes({
                                  iconList: updatedArray,
                                });
                              }
                            }
                          }}
                          aria-label="Delete item"
                        ></i>
                      </Tooltip>
                    )}
                  </div>
                  <div className="md-lithomd_icon_block__item-icon">
                    <div className="md-lithomd_icon_block__item-icon-inner">
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
                    <div className="md-lithomd_icon_block__item-icon__wrapper">
                      {postObj.icon && (
                        <div className="md-lithomd_icon_block__item-icon__wrapper-icon">
                          <i
                            className={"fa " + postObj.icon}
                            style={{ color: iconColor }}
                          ></i>
                        </div>
                      )}
                      <div className="md-lithomd_icon_block__item-icon__wrapper-text">
                        <RichText
                          tagName="h4"
                          className="image-title"
                          value={postObj.iconTitle}
                          onChange={(value) =>
                            updateStaticPostObj(index, "iconTitle", value)
                          }
                          placeholder={__("Image Title", "md-prime")}
                          style={{ color: iconTitleColor }}
                        />
                        <RichText
                          tagName="p"
                          className="image-text"
                          value={postObj.iconText}
                          onChange={(value) =>
                            updateStaticPostObj(index, "iconText", value)
                          }
                          placeholder={__("Image Text", "md-prime")}
                          style={{ color: iconDescriptionColor }}
                        />
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
    </div>
  );
}
