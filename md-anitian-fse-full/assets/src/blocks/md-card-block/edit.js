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
  InspectorControls,
  PanelColorSettings
} from "@wordpress/block-editor";

import { Button, SelectControl, PanelBody, FontSizePicker, Tooltip } from "@wordpress/components";

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
    sub_title,
    title,
    heading_content,
    card_block_style,
    card_block_list,
    sub_title_font_size,
    sub_title_font_color,
    title_font_size,
    title_font_color,
    heading_content_font_size,
    heading_content_font_color,
    card_title_font_size,
    card_title_font_color,
    card_content_font_size,
    card_content_font_color,
    card_learn_more_font_size,
    card_learn_more_font_color,
  } = attributes;

  const [currentSlide, setCurrentSlide] = useState(0);

  const addStaticPostObj = () => {
    const staticPostObj = [
      ...card_block_list,
      {
        id: card_block_list.length + 1,
        card_image: "",
        card_title: "",
        card_description: "",
        learn_more_link: "",
      },
    ];
    setAttributes({ card_block_list: staticPostObj });
  };
  const updateStaticPostObj = (index, key, value) => {
    const updatedStaticPostObj = [...card_block_list];
    updatedStaticPostObj[index][key] = value;
    setAttributes({ card_block_list: updatedStaticPostObj });
  };
  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...card_block_list];
    arrayCopy[oldIndex] = card_block_list[newIndex];
    arrayCopy[newIndex] = card_block_list[oldIndex];

    setAttributes({
      card_block_list: arrayCopy,
    });
  };

  const fontSizes = [
    {
      name: __("S"),
      slug: "small",
      size: "12px",
    },
    {
      name: __("M"),
      slug: "medium",
      size: "18px",
    },
    {
      name: __("L"),
      slug: "large",
      size: "26px",
    },
    {
      name: __("XL"),
      slug: "xtra-large",
      size: "48px",
    },
  ];

  return (
    <div {...useBlockProps({ className: "md_anitian_card_block" })}>
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-storyful-fse-full")}>
          <SelectControl
            label={__("Card Block Style", "md-anitian-fse-full")}
            value={card_block_style}
            options={[
              { label: "Style 1", value: "style1" },
              { label: "Style 2", value: "style2" },
              { label: "Style 3", value: "style3" },
            ]}
            onChange={(value) => setAttributes({ card_block_style: value })}
          />
        </PanelBody>
        <PanelBody title={__("Typography", "md-storyful-fse-full")}>
          <label> {__("Sub Title Font Size")} </label>
          <FontSizePicker
            __nextHasNoMarginBottom
            fontSizes={fontSizes}
            value={sub_title_font_size}
            fallbackFontSize={sub_title_font_size}
            onChange={(newFontSize) =>
              setAttributes({ sub_title_font_size: newFontSize })
            }
          />
          <label> {__("Title Font Size")} </label>
          <FontSizePicker
            __nextHasNoMarginBottom
            fontSizes={fontSizes}
            value={title_font_size}
            fallbackFontSize={title_font_size}
            onChange={(newFontSize) =>
              setAttributes({ title_font_size: newFontSize })
            }
          />
          <label> {__("Heading Content Font Size")} </label>
          <FontSizePicker
            __nextHasNoMarginBottom
            fontSizes={fontSizes}
            value={heading_content_font_size}
            fallbackFontSize={heading_content_font_size}
            onChange={(newFontSize) =>
              setAttributes({ heading_content_font_size: newFontSize })
            }
          />
          <label> {__("Card Title Font Size")} </label>
          <FontSizePicker
            __nextHasNoMarginBottom
            fontSizes={fontSizes}
            value={card_title_font_size}
            fallbackFontSize={card_title_font_size}
            onChange={(newFontSize) =>
              setAttributes({ card_title_font_size: newFontSize })
            }
          />
          <label> {__("Card Description Font Size")} </label>
          <FontSizePicker
            __nextHasNoMarginBottom
            fontSizes={fontSizes}
            value={card_content_font_size}
            fallbackFontSize={card_content_font_size}
            onChange={(newFontSize) =>
              setAttributes({ card_content_font_size: newFontSize })
            }
          />
          <label> {__("Card Learn More Font Size")} </label>
          <FontSizePicker
            __nextHasNoMarginBottom
            fontSizes={fontSizes}
            value={card_learn_more_font_size}
            fallbackFontSize={card_learn_more_font_size}
            onChange={(newFontSize) =>
              setAttributes({ card_learn_more_font_size: newFontSize })
            }
          />
        </PanelBody>
        <PanelColorSettings
          title={__("Typography Colors", "md-storyful-fse-full")}
          initialOpen={false}
          colorSettings={[
            {
              value: sub_title_font_color,
              onChange: (newColor) =>
                setAttributes({ sub_title_font_color: newColor }),
              label: __("Sub Title Font Color"),
            },
            {
              value: title_font_color,
              onChange: (newColor) =>
                setAttributes({ title_font_color: newColor }),
              label: __("Title Font Color"),
            },
            {
              value: heading_content_font_color,
              onChange: (newColor) =>
                setAttributes({ heading_content_font_color: newColor }),
              label: __("Heading Content Font Color"),
            },
            {
              value: card_title_font_color,
              onChange: (newColor) =>
                setAttributes({ card_title_font_color: newColor }),
              label: __("Card Title Font Color"),
            },
            {
              value: card_content_font_color,
              onChange: (newColor) =>
                setAttributes({ card_content_font_color: newColor }),
              label: __("Card Description Font Color"),
            },
            {
              value: card_learn_more_font_color,
              onChange: (newColor) =>
                setAttributes({ card_learn_more_font_color: newColor }),
              label: __("Card Learn More Font Color"),
            },
          ]}
        />
      </InspectorControls>
      <div className={`md_anitian_card_block ${card_block_style}`}>
        <div className="md_anitian_card_block__head">
          <div className="container">
            <div className="md_anitian_card_block__heading">
              <RichText
                tagName="h3"
                value={sub_title}
                onChange={(value) => setAttributes({ sub_title: value })}
                placeholder={__("Enter Sub Title", "md-anitian-fse-full")}
                style={{
                  fontSize: sub_title_font_size,
                  color: sub_title_font_color,
                }}
              />
              <RichText
                tagName="h2"
                value={title}
                onChange={(value) => setAttributes({ title: value })}
                placeholder={__("Enter Title", "md-anitian-fse-full")}
                style={{
                  fontSize: title_font_size,
                  color: title_font_color,
                }}
              />
              <RichText
                tagName="p"
                value={heading_content}
                onChange={(value) => setAttributes({ heading_content: value })}
                placeholder={__("Enter Heading Content", "md-anitian-fse-full")}
                style={{
                  fontSize: heading_content_font_size,
                  color: heading_content_font_color,
                }}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="md_anitian_card_block__content">
            {card_block_list &&
              card_block_list.map((postObj, index) => (
                <div className="md_anitian_card_block__item show-items-hover-wrap">
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
                      {index + 1 < card_block_list.length && (
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
                    {1 < card_block_list.length && (
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
                              const updatedArray = card_block_list.filter(
                                (item, itemIndex) => itemIndex !== index
                              );
                              setAttributes({
                                card_block_list: updatedArray,
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
                                const updatedArray = card_block_list.filter(
                                  (item, itemIndex) => itemIndex !== index
                                );
                                setAttributes({
                                  card_block_list: updatedArray,
                                });
                              }
                            }
                          }}
                          aria-label="Delete item"
                        ></i>
                      </Tooltip>
                    )}
                  </div>
                  <div className="md_anitian_card_block__item__image">
                    <MediaUpload
                      title={__("Image")}
                      onSelect={(media) =>
                        updateStaticPostObj(index, "card_image", media.url)
                      }
                      multiple={false}
                      render={({ open }) => (
                        <>
                          {postObj.card_image == "" ? (
                            <Button variant="primary" onClick={open}>
                              {__("Upload")}
                            </Button>
                          ) : (
                            <img onClick={open} src={postObj.card_image} />
                          )}
                        </>
                      )}
                    />
                  </div>
                  <div className="md_anitian_card_block__item__content">
                    <RichText
                      tagName="h3"
                      className="column-item-title"
                      value={postObj.card_title}
                      onChange={(value) =>
                        updateStaticPostObj(index, "card_title", value)
                      }
                      placeholder={__("Enter Title")}
                      style={{
                        fontSize: card_title_font_size,
                        color: card_title_font_color,
                      }}
                    />
                    <div className="md_anitian_card_block__item__content__link">
                      <RichText
                        tagName="p"
                        className="column-item-desc"
                        value={postObj.card_description}
                        onChange={(value) =>
                          updateStaticPostObj(index, "card_description", value)
                        }
                        placeholder={__("Enter Description")}
                        style={{
                          fontSize: card_content_font_size,
                          color: card_content_font_color,
                        }}
                      />
                      <RichText
                        tagName="a"
                        className="md_anitian_card_block__item__link"
                        value={postObj.learn_more_link}
                        onChange={(value) =>
                          updateStaticPostObj(index, "learn_more_link", value)
                        }
                        placeholder={__("Enter Title")}
                        style={{
                          fontSize: card_learn_more_font_size,
                          color: card_learn_more_font_color,
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            <div className="add-item-wrap">
              <Button variant="primary" onClick={addStaticPostObj}>
                {__("Add New Slide")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
