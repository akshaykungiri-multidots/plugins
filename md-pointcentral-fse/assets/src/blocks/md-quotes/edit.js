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
    quoteItems,
    quoteIcon,
    quoteBackgroundColor,
    quoteTextColor,
    quoteTitleColor,
    showQuoteTitle,
    showQuoteIcon,
    showQuoteAuthor,
  } = attributes;
  const addStaticPostObj = () => {
    const staticPostObj = [
      ...quoteItems,
      {
        id: quoteItems.length + 1,
        quoteText: "",
        quoteAuthor: "",
      },
    ];
    setAttributes({ quoteItems: staticPostObj });
  };
  const updateStaticPostObj = (index, key, value) => {
    const updatedStaticPostObj = [...quoteItems];
    updatedStaticPostObj[index][key] = value;
    setAttributes({ quoteItems: updatedStaticPostObj });
  };
  const removeStaticPostObj = (index) => {
    const updatedStaticPostObj = [...quoteItems];
    updatedStaticPostObj.splice(index, 1);
    if (currentItem >= updatedStaticPostObj.length) {
      setCurrentItem(updatedStaticPostObj.length - 1); // Set to last slide if current is out of bounds
    }
    setAttributes({ quoteItems: updatedStaticPostObj });
  };
  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...quoteItems];
    arrayCopy[oldIndex] = quoteItems[newIndex];
    arrayCopy[newIndex] = quoteItems[oldIndex];

    setAttributes({
      quoteItems: arrayCopy,
    });
    setCurrentItem(newIndex);
  };

  const [currentItem, setCurrentItem] = useState(0);

  return (
    <div {...useBlockProps({ className: "md_quote_slider" })}>
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-prime")}>
          <ToggleControl
            label={__("Show Quote Icon", "md-storyful-fse-full")}
            checked={showQuoteIcon}
            onChange={(value) => setAttributes({ showQuoteIcon: value })}
          />
          {showQuoteIcon && (
            <div className="setting-row">
              <label htmlFor="background-image">
                {__("Quote Image", "md-prime")}
              </label>
              <div>
                {!quoteIcon ? (
                  <MediaUpload
                    onSelect={(selectedImage) => {
                      setAttributes({
                        quoteIcon: selectedImage.url,
                      });
                    }}
                    allowedTypes={["image"]}
                    value={quoteIcon}
                    render={({ open }) => (
                      <Button onClick={open} className="button button-large">
                        {__("Upload Image", "md-prime")}
                      </Button>
                    )}
                  />
                ) : (
                  <>
                    <div className="image-preview">
                      <img src={quoteIcon} alt="Background-image-preview" />
                    </div>
                    <Button
                      onClick={() => {
                        setAttributes({
                          quoteIcon: "",
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
        <PanelBody title={__("Toggle Settings", "md-storyful-fse-full")} initialOpen={false}>
          <ToggleControl
            label={__("Show Quote Text", "md-storyful-fse-full")}
            checked={showQuoteTitle}
            onChange={(value) => setAttributes({ showQuoteTitle: value })}
          />
          <ToggleControl
            label={__("Show Quote Author", "md-storyful-fse-full")}
            checked={showQuoteAuthor}
            onChange={(value) => setAttributes({ showQuoteAuthor: value })}
          />
        </PanelBody>
        <PanelBody
          title={__("Color Settings", "md-storyful-fse-full")}
          initialOpen={false}
        >
          <PanelColorSettings
            title={__("Typography Colors", "md-storyful-fse-full")}
            initialOpen={false}
            colorSettings={[
              {
                value: quoteBackgroundColor,
                onChange: (newColor) =>
                  setAttributes({
                    quoteBackgroundColor: newColor,
                  }),
                label: __("Quote Background Color"),
              },
              {
                value: quoteTextColor,
                onChange: (newColor) =>
                  setAttributes({
                    quoteTextColor: newColor,
                  }),
                label: __("Quote Text Font Color"),
              },
              {
                value: quoteTitleColor,
                onChange: (newColor) =>
                  setAttributes({
                    quoteTitleColor: newColor,
                  }),
                label: __("Quote Author Font Color"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div
        className="md-quote-slider__inner"
        style={{ backgroundColor: quoteBackgroundColor }}
      >
        <div className="md-quote-slider__items">
          {quoteItems &&
            quoteItems.map((postObj, index) => (
              <blockquote
                className={`md-quote-slider__item show-items-hover-wrap ${
                  index === currentItem ? "active" : "no-trans"
                }`}
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
                    {index + 1 < quoteItems.length && (
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
                  {1 < quoteItems.length && (
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
                            removeStaticPostObj(index);
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
                              removeStaticPostObj(index);
                            }
                          }
                        }}
                        aria-label="Delete item"
                      ></i>
                    </Tooltip>
                  )}
                </div>
                {showQuoteIcon && (
                  <div
                    className="image-icon has-bg"
                    style={{ backgroundImage: `url(${quoteIcon})` }}
                  ></div>
                )}
                <div className="quote-text">
                  {showQuoteTitle && (
                    <RichText
                      tagName="p"
                      className="quote-text"
                      placeholder={__("Quote Text", "md-prime")}
                      value={postObj.quoteText}
                      onChange={(value) =>
                        updateStaticPostObj(index, "quoteText", value)
                      }
                      style={{ color: quoteTextColor }}
                    />
                  )}
                  {showQuoteAuthor && (
                    <RichText
                      tagName="span"
                      className="testimonial-name"
                      placeholder={__("Quote Author", "md-prime")}
                      value={postObj.quoteAuthor}
                      style={{ color: quoteTitleColor }}
                      onChange={(value) =>
                        updateStaticPostObj(index, "quoteAuthor", value)
                      }
                    />
                  )}
                </div>
              </blockquote>
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
        <div className="testimonial-next-prev">
          <Button
            onClick={() => {
              if (currentItem === 0) {
                setCurrentItem(quoteItems.length - 1);
              } else {
                setCurrentItem(currentItem - 1);
              }
            }}
            className="prev dashicons dashicons-arrow-left-alt2"
            aria-label="testimonial previous button"
          ></Button>
          <Button
            onClick={() => {
              if (currentItem === quoteItems.length - 1) {
                setCurrentItem(0);
              } else {
                setCurrentItem(currentItem + 1);
              }
            }}
            className="next dashicons dashicons-arrow-right-alt2"
            aria-label="testimonial next button"
          ></Button>
        </div>
      </div>
    </div>
  );
}
