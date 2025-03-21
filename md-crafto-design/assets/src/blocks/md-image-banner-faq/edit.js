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
  MediaUpload,
  MediaUploadCheck,
  PanelColorSettings,
} from "@wordpress/block-editor";

import { Fragment, useState } from "@wordpress/element";

import {
  PanelBody,
  Button,
  ToggleControl,
  Tooltip,
  GradientPicker,
} from "@wordpress/components";

import placeholder from "./placeholder-image.png";

import { leftAlign, rightAlign } from "../icons";

import Slider from "react-slick";

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
    headingContent,
    buttonLink,
    beautyTipsText,
    mediaPosition,
    backgroundColor,
    subTitleColor,
    titleColor,
    headingContentColor,
    showSubTitle,
    showTitle,
    showHeadingContent,
    showButton,
    showBeautyTips,
    mediaImage,
    backgroundImage,
    buttonColor,
    buttonBackgroundColor,
    buttonHoverColor,
    buttonHoverBackgroundColor,
    beautyTipsTextColor,
    showFaq,
    faqItems,
    faqItemTitleColor,
    faqItemContentColor,
    beautyTipsItems,
    beautyTipsItemColor,
  } = attributes;

  const siteURL = window.location.origin;

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

  const addBeautyTipsItem = () => {
    const beautyTipsItem = [
      ...beautyTipsItems,
      {
        id: beautyTipsItems.length + 1,
        title: "",
        content: "",
      },
    ];
    setAttributes({ beautyTipsItems: beautyTipsItem });
  };

  const updateBeautyTipsItem = (index, key, value) => {
    const updatedBeautyTipsItem = [...beautyTipsItems];
    updatedBeautyTipsItem[index][key] = value;
    setAttributes({ beautyTipsItems: updatedBeautyTipsItem });
  };

  const removeBeautyTipsItem = (index) => {
    const updatedStaticPostObj = [...beautyTipsItems];
    updatedStaticPostObj.splice(index, 1);
    setAttributes({ beautyTipsItems: updatedStaticPostObj });
  };

  const moveBeautyTipsItem = (oldIndex, newIndex) => {
    const arrayCopy = [...beautyTipsItems];
    arrayCopy[oldIndex] = beautyTipsItems[newIndex];
    arrayCopy[newIndex] = beautyTipsItems[oldIndex];

    setAttributes({
      beautyTipsItems: arrayCopy,
    });
  };

  const settings = {
    dots: false,
    infinite: false,
    arrows: true,
    speed: 1000,
  };

  const [activeFaqItem, setActiveFaqItem] = useState(0);

  return (
    <div
      {...useBlockProps({ className: "md_crafto_design_video_header_section" })}
    >
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-crafto-design")}>
          <ToggleControl
            label={__("Show Sub Title", "md-crafto-design")}
            checked={showSubTitle}
            onChange={(value) => setAttributes({ showSubTitle: value })}
          />
          <ToggleControl
            label={__("Show Title", "md-crafto-design")}
            checked={showTitle}
            onChange={(value) => setAttributes({ showTitle: value })}
          />
          <ToggleControl
            label={__("Show Heading Content", "md-crafto-design")}
            checked={showHeadingContent}
            onChange={(value) => setAttributes({ showHeadingContent: value })}
          />
          <ToggleControl
            label={__("Show Beauty Tips", "md-crafto-design")}
            checked={showBeautyTips}
            onChange={(value) => setAttributes({ showBeautyTips: value })}
          />
          <ToggleControl
            label={__("Show FAQ", "md-crafto-design")}
            checked={showFaq}
            onChange={(value) => setAttributes({ showFaq: value })}
          />
          <div className="setting-row inspector-field inspector-field-alignment">
            <label htmlFor="alignment" className="inspector-mb-0">
              {__("Media Position")}
            </label>
            <div className="inspector-field-button-list inspector-field-button-list-fluid">
              <button
                className={
                  "left" === mediaPosition
                    ? "active inspector-button"
                    : " inspector-button"
                }
                onClick={() => setAttributes({ mediaPosition: "left" })}
              >
                {leftAlign}
              </button>
              <button
                className={
                  "right" === mediaPosition
                    ? "active inspector-button"
                    : " inspector-button"
                }
                onClick={() => setAttributes({ mediaPosition: "right" })}
              >
                {rightAlign}
              </button>
            </div>
          </div>
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
        <PanelBody title={__("Button Settings")} initialOpen={false}>
          <ToggleControl
            label={__("Show Button", "md-crafto-design")}
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
        <PanelBody
          title={__("Color Settings", "md-crafto-design")}
          initialOpen={false}
        >
          <PanelColorSettings
            title={__("Typography Colors", "md-crafto-design")}
            initialOpen={false}
            colorSettings={[
              {
                value: subTitleColor,
                onChange: (colorValue) =>
                  setAttributes({ subTitleColor: colorValue }),
                label: __("Sub Title Color", "md-crafto-design"),
              },
              {
                value: titleColor,
                onChange: (colorValue) =>
                  setAttributes({ titleColor: colorValue }),
                label: __("Title Color", "md-crafto-design"),
              },
              {
                value: headingContentColor,
                onChange: (colorValue) =>
                  setAttributes({ headingContentColor: colorValue }),
                label: __("Heading Content Color", "md-crafto-design"),
              },
              {
                value: backgroundColor,
                onChange: (colorValue) =>
                  setAttributes({ backgroundColor: colorValue }),
                label: __("Background Color", "md-crafto-design"),
              },
              {
                value: faqItemTitleColor,
                onChange: (colorValue) =>
                  setAttributes({ faqItemTitleColor: colorValue }),
                label: __("FAQ Title Color", "md-crafto-design"),
              },
              {
                value: faqItemContentColor,
                onChange: (colorValue) =>
                  setAttributes({ faqItemContentColor: colorValue }),
                label: __("FAQ Content Color", "md-crafto-design"),
              },
              {
                value: beautyTipsTextColor,
                onChange: (colorValue) =>
                  setAttributes({ beautyTipsTextColor: colorValue }),
                label: __("Beauty Tips Text Color", "md-crafto-design"),
              },
              {
                value: beautyTipsItemColor,
                onChange: (colorValue) =>
                  setAttributes({ beautyTipsItemColor: colorValue }),
                label: __("Beauty Tips Item Color", "md-crafto-design"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div
        className={`md_crafto_design_image_banner_faqs_wrap`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        <style>
          {`
            .md_crafto_design_image_banner_faqs__btn {
              color: ${buttonColor};
              background: ${buttonBackgroundColor};
            }
            .md_crafto_design_image_banner_faqs__btn:hover {
              color: ${buttonHoverColor} !important;
              background: ${buttonHoverBackgroundColor};
            }
          `}
        </style>
        <div
          className="md_crafto_design_image_banner_faqs"
          style={{ backgroundColor }}
        >
          <div className="container">
            <div
              className="md_crafto_design_image_banner_faqs__inner"
              style={{
                flexDirection: mediaPosition === "left" ? "row-reverse" : "row",
              }}
            >
              <div className="md_crafto_design_image_banner_faqs__heading">
                {showSubTitle && (
                  <RichText
                    tagName="h4"
                    value={subTitle}
                    onChange={(value) => setAttributes({ subTitle: value })}
                    placeholder={__("Enter Sub Title", "md-crafto-design")}
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
                    placeholder={__("Enter Title", "md-crafto-design")}
                    style={{ color: titleColor }}
                  />
                )}
                {showHeadingContent && (
                  <RichText
                    tagName="p"
                    className="md_crafto_design_image_banner__content"
                    value={headingContent}
                    onChange={(value) =>
                      setAttributes({ headingContent: value })
                    }
                    placeholder={__("Enter Content", "md-crafto-design")}
                    style={{
                      color: headingContentColor,
                    }}
                  />
                )}
                <div className="md_crafto_design_faqs__wrapper">
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
                                          (item, itemIndex) =>
                                            itemIndex !== index
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
                                activeFaqItem === index
                                  ? "fa fa-minus"
                                  : "fa fa-plus"
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
                              className="faq-content"
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
                <div className="md_crafto_design_image_banner_faqs__btn_wrapper">
                  {showButton && (
                    <div className="btn-anitian md_crafto_design_image_banner_faqs__btn md-btn-main btn-extra-large has-right-arrow">
                      <RichText
                        tagName="span"
                        value={buttonLink}
                        onChange={(value) =>
                          setAttributes({ buttonLink: value })
                        }
                        placeholder={__(
                          "Enter Button Text",
                          "md-crafto-design"
                        )}
                      />
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  )}
                </div>
              </div>
              <div className="md-prime-block-control image-preview image-controle-visible-hover md_crafto_design_image_banner_faqs__media">
                <div className={`image-controls small-icons icon-center-fixed`}>
                  <MediaUploadCheck>
                    <MediaUpload
                      onSelect={(media) =>
                        setAttributes({ mediaImage: media.url })
                      }
                      allowedTypes={["image"]}
                      value={mediaImage}
                      render={({ open }) => (
                        <>
                          {mediaImage ? (
                            <>
                              <Tooltip text={__("Edit Image", "md-prime")}>
                                <i
                                  className="dashicons dashicons-edit edit-image"
                                  onClick={open}
                                  role="button"
                                  tabIndex={0}
                                  onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                      e.preventDefault(); // Prevent default action for space key
                                      open(); // Trigger the click handler
                                    }
                                  }}
                                  aria-label={__("Edit image", "md-prime")}
                                ></i>
                              </Tooltip>
                              <Tooltip text={__("Remove Image", "md-prime")}>
                                <i
                                  className="dashicons dashicons-no-alt remove-image"
                                  onClick={() =>
                                    setAttributes({ mediaImage: "" })
                                  }
                                  role="button"
                                  tabIndex={0}
                                  onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                      e.preventDefault();
                                      setAttributes({ mediaImage: "" });
                                    }
                                  }}
                                  aria-label={__("Remove image", "md-prime")}
                                ></i>
                              </Tooltip>
                            </>
                          ) : (
                            <div className="upload-wrap">
                              <Button
                                onClick={open}
                                className="button media_and_text__upload_btn"
                              >
                                <Tooltip text={__("Upload Image", "md-prime")}>
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
                  src={mediaImage ? mediaImage : siteURL + placeholder}
                  alt={"slider"}
                />
              </div>
            </div>
          </div>
        </div>
        {showBeautyTips && (
          <div className="md_crafto_design_image_banner__beauty_tips_wrap">
            <div className="container">
              <div className="md_crafto_design_image_banner__beauty_tips">
                <div className="md_crafto_design_image_banner__awesome_text">
                  <RichText
                    tagName="h5"
                    value={beautyTipsText}
                    onChange={(value) => setAttributes({ beautyTipsText: value })}
                    placeholder={__("Enter Beauty Tips", "md-crafto-design")}
                    style={{ color: beautyTipsTextColor }}
                  />
                </div>
                <div className="md_beauty_tips_slider md_slider_grid">
                  <Slider {...settings} className="md_slider">
                    {beautyTipsItems.map((item, index) => (
                      <div className={`md_slider_grid_item active"`} key={index}>
                        <div className="md_slider_section__item show-items-hover-wrap">
                          <div
                            className={`item-action-wrap show-items-hover pos-abs`}
                          >
                            <div className="move-item">
                              {0 < index && (
                                <Tooltip text={__("Move Left", "md-crafto")}>
                                  <span
                                    className="dashicons dashicons-arrow-left-alt move-left"
                                    onClick={() => moveBeautyTipsItem(index, index - 1)}
                                    onKeyDown={(event) => {
                                      if (
                                        event.key === "Enter" ||
                                        event.key === " "
                                      ) {
                                        moveBeautyTipsItem(index, index - 1);
                                      }
                                    }}
                                    role="button"
                                    tabIndex={0}
                                    aria-label="Move item left"
                                  ></span>
                                </Tooltip>
                              )}
                              {index + 1 < beautyTipsItems.length && (
                                <Tooltip text={__("Move Right", "md-crafto")}>
                                  <span
                                    className="dashicons dashicons-arrow-right-alt move-right"
                                    role="button"
                                    tabIndex={0}
                                    onClick={() => moveBeautyTipsItem(index, index + 1)}
                                    onKeyDown={(e) => {
                                      if (e.key === "Enter" || e.key === " ") {
                                        moveBeautyTipsItem(index, index + 1);
                                      }
                                    }}
                                    aria-label="Move item right"
                                  ></span>
                                </Tooltip>
                              )}
                            </div>
                            {1 < beautyTipsItems.length && (
                              <Tooltip text={__("Remove Item", "md-prime")}>
                                <i
                                  className="remove-item dashicons dashicons-no-alt"
                                  role="button"
                                  tabIndex={0}
                                  onClick={() => {
                                    const toDelete =
                                      // eslint-disable-next-line no-alert
                                      confirm(
                                        __(
                                          "Are you sure you want to delete this item?",
                                          "md-prime"
                                        )
                                      );
                                    if (toDelete === true) {
                                      removeBeautyTipsItem(index);
                                    }
                                  }}
                                  onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                      // Simulate click behavior for keyboard users
                                      e.preventDefault(); // Prevent default action for space key
                                      const toDelete =
                                        // eslint-disable-next-line no-alert
                                        confirm(
                                          __(
                                            "Are you sure you want to delete this item?",
                                            "md-prime"
                                          )
                                        );
                                      if (toDelete === true) {
                                        removeBeautyTipsItem(index);
                                      }
                                    }
                                  }}
                                  aria-label={__("Remove this item", "md-prime")}
                                ></i>
                              </Tooltip>
                            )}
                          </div>
                        </div>
                        <div className="md_slider_grid_item_inner">
                          <div className="md_slider_grid_item_inner_content">
                            <RichText
                              tagName="span"
                              className="md_slider_grid_item_inner_title"
                              value={item.title}
                              onChange={(value) =>
                                updateBeautyTipsItem(index, "title", value)
                              }
                              placeholder={__("Enter Title", "md-crafto-design")}
                              style={{ color: beautyTipsItemColor }}
                            />
                            <RichText
                              tagName="span"
                              value={item.content}
                              onChange={(value) =>
                                updateBeautyTipsItem(index, "content", value)
                              }
                              placeholder={__("Enter Content", "md-crafto-design")}
                              style={{ color: beautyTipsItemColor }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                  <div
                    className="add-item-wrap"
                    onClick={addBeautyTipsItem}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        addBeautyTipsItem();
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
        )}
      </div>
    </div>
  );
}
