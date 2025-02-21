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
  InspectorControls,
  PanelColorSettings,
} from "@wordpress/block-editor";

import { useState } from "@wordpress/element";

import {
  PanelBody,
  ToggleControl,
  Tooltip,
  GradientPicker,
} from "@wordpress/components";

/**
 * React hook that is used to mark the packages element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-element/
 */

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
    subTitle,
    title,
    titleContent,
    buttonText,
    faqs,
    showSubTitle,
    showTitle,
    showTitleContent,
    showButton,
    showFaqs,
    subTitleColor,
    titleColor,
    titleContentColor,
    buttonColor,
    buttonBackgroundColor,
    buttonHoverColor,
    buttonHoverBackgroundColor,
    faqsTextColor,
    faqsListBackgroundColor,
  } = attributes;

  const addStaticPostObj = () => {
    const staticPostObj = [
      ...faqs,
      {
        id: faqs.length + 1,
        title: "",
        content: "",
      },
    ];
    setAttributes({ faqs: staticPostObj });
  };
  const updateStaticPostObj = (index, key, value) => {
    const updatedStaticPostObj = [...faqs];
    updatedStaticPostObj[index][key] = value;
    setAttributes({ faqs: updatedStaticPostObj });
  };
  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...faqs];
    arrayCopy[oldIndex] = faqs[newIndex];
    arrayCopy[newIndex] = faqs[oldIndex];

    setAttributes({
      faqs: arrayCopy,
    });
  };

  const [activeFaqItem, setActiveFaqItem] = useState(0);

  return (
    <div {...useBlockProps({ className: "md_porto_banner_faqs__section" })}>
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-porto")}>
          <ToggleControl
            label={__("Show Sub Title", "md-porto")}
            checked={showSubTitle}
            onChange={(value) => setAttributes({ showSubTitle: value })}
          />
          <ToggleControl
            label={__("Show Title", "md-porto")}
            checked={showTitle}
            onChange={(value) => setAttributes({ showTitle: value })}
          />
          <ToggleControl
            label={__("Show Title Content", "md-porto")}
            checked={showTitleContent}
            onChange={(value) => setAttributes({ showTitleContent: value })}
          />
        </PanelBody>
        <PanelBody title={__("Button Settings")} initialOpen={false}>
          <ToggleControl
            label={__("Show Button", "md-porto")}
            checked={showButton}
            onChange={(value) => setAttributes({ showButton: value })}
          />
          {showButton && (
            <div className="settings-row">
              <PanelColorSettings
                title={__("Button Color Settings", "md-storyful-fse-full")}
                initialOpen={false}
                colorSettings={[
                  {
                    value: buttonColor,
                    onChange: (newColor) =>
                      setAttributes({ buttonColor: newColor }),
                    label: __("Button Font Color"),
                  },
                  {
                    value: buttonHoverColor,
                    onChange: (newColor) =>
                      setAttributes({ buttonHoverColor: newColor }),
                    label: __("Button Hover Font Color"),
                  },
                ]}
              />
              <div className="settings-row">
                <label htmlFor="buttonBackgroundColor">
                  {__("Button Background Color")}
                </label>
                <GradientPicker
                  id="buttonBackgroundColor"
                  label={__("Button Background Color")}
                  value={buttonBackgroundColor ? buttonBackgroundColor : null}
                  onChange={(value) =>
                    setAttributes({ buttonBackgroundColor: value })
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
                <label htmlFor="buttonHoverBackgroundColor">
                  {__("Button Hover Background Color")}
                </label>
                <GradientPicker
                  id="buttonHoverBackgroundColor"
                  label={__("Button Hover Background Color")}
                  value={
                    buttonHoverBackgroundColor
                      ? buttonHoverBackgroundColor
                      : null
                  }
                  onChange={(value) =>
                    setAttributes({ buttonHoverBackgroundColor: value })
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
        <PanelBody title={__("Color Settings", "md-porto")} initialOpen={false}>
          <PanelColorSettings
            title={__("Typography Colors", "md-porto")}
            initialOpen={false}
            colorSettings={[
              {
                value: subTitleColor,
                onChange: (colorValue) =>
                  setAttributes({ subTitleColor: colorValue }),
                label: __("Sub Title Color", "md-porto"),
              },
              {
                value: titleColor,
                onChange: (colorValue) =>
                  setAttributes({ titleColor: colorValue }),
                label: __("Title Color", "md-porto"),
              },
              {
                value: titleContentColor,
                onChange: (colorValue) =>
                  setAttributes({ titleContentColor: colorValue }),
                label: __("Title Content Color", "md-porto"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className={`md_porto_banner_faqs_wrap`}>
      <style>
          {`
            .md_porto_banner_faqs__btn .md_btn {
              color: ${buttonColor};
              background: ${buttonBackgroundColor};
            }
              .md_porto_banner_faqs__btn .md_btn:before {
                background: ${buttonBackgroundColor} !important;
                color: ${buttonColor} !important;
              }
            .md_porto_banner_faqs__btn .md_btn:hover {
              color: ${buttonHoverColor} !important;
              background: ${buttonHoverBackgroundColor};
            }
            .md_porto_banner_faqs__btn .md_btn:hover:before {
              background: ${buttonHoverBackgroundColor} !important;
              color: ${buttonHoverColor} !important;
            }
          `}
        </style>
        <div className="md_porto_banner_faqs">
          <div className="container">
            <div className="md_porto_banner_faqs__inner">
              <div className="md_porto_banner_faqs__heading">
                {showSubTitle && (
                  <RichText
                    tagName="h4"
                    value={subTitle}
                    onChange={(value) => setAttributes({ subTitle: value })}
                    placeholder={__("Enter Sub Title", "md-porto")}
                    style={{
                      color: subTitleColor,
                    }}
                  />
                )}
                {showTitle && (
                  <RichText
                    tagName="h2"
                    value={title}
                    onChange={(value) => setAttributes({ title: value })}
                    placeholder={__("Enter Title", "md-porto")}
                    style={{ color: titleColor }}
                  />
                )}
                {showTitleContent && (
                  <RichText
                    tagName="p"
                    className="md_porto_banner_faqs__content"
                    value={titleContent}
                    onChange={(value) => setAttributes({ titleContent: value })}
                    placeholder={__("Enter Content", "md-porto")}
                    style={{
                      color: titleContentColor,
                    }}
                  />
                )}
                <div className="md_btn__wrapper md_porto_banner_faqs__btn">
                  {showButton && (
                    <RichText
                      className="md_btn md_btn__arrow"
                      tagName="p"
                      value={buttonText}
                      onChange={(value) => setAttributes({ buttonText: value })}
                      placeholder={__("Enter Button Text", "md-porto")}
                    />
                  )}
                </div>
              </div>
              {showFaqs && (
                <>
                  <div className="md_faq_section__faq_items">
                    {faqs &&
                      faqs.map((postObj, index) => (
                        <div
                          className={
                            index === activeFaqItem
                              ? "ma_faq_block--inner-item active show-items-hover-wrap"
                              : "ma_faq_block--inner-item show-items-hover-wrap"
                          }
                          key={index}
                          style={{ backgroundColor: faqsListBackgroundColor }}
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
                              {index + 1 < faqs.length && (
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
                            {1 < faqs.length && (
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
                                      const updatedArray = faqs.filter(
                                        (item, itemIndex) => itemIndex !== index
                                      );
                                      setAttributes({
                                        faqs: updatedArray,
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
                                        const updatedArray = faqs.filter(
                                          (item, itemIndex) =>
                                            itemIndex !== index
                                        );
                                        setAttributes({
                                          faqs: updatedArray,
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
                              tagName="span"
                              name="accordian-title"
                              placeholder={__("Title…")}
                              value={postObj.title}
                              onChange={(value) =>
                                updateStaticPostObj(index, "title", value)
                              }
                              style={{ color: faqsTextColor }}
                            />
                            <i
                              className={
                                activeFaqItem === index
                                  ? "fa fa-angle-up"
                                  : "fa fa-angle-down"
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
                              style={{ color: faqsTextColor }}
                            />
                          </div>
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
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
