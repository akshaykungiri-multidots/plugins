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
  RichText,
  MediaUpload,
  PanelColorSettings,
} from "@wordpress/block-editor";

import { useState } from "@wordpress/element";

import {
  PanelBody,
  RangeControl,
  ToggleControl,
  Button,
  GradientPicker,
  Tooltip,
} from "@wordpress/components";

import Slider from "react-slick";
import React, { useRef } from "react";

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
    autoplay,
    arrows,
    dots,
    slideInfinite,
    slideSlidesToShow,
    slideSlidesToScroll,
    slideItems,
    sliderSubTitleFontColor,
    sliderTitleFontColor,
    sliderDescriptionFontColor,
    buttonColor,
    buttonBackgroundColor,
    buttonHoverColor,
    buttonHoverBackgroundColor,
    showButton,
    showSubTitle,
    showTitle,
    showDescription,
  } = attributes;

  const siteURL = window.location.origin;

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots,
    slidesToShow: slideSlidesToShow,
    slidesToScroll: slideSlidesToScroll,
    infinite: slideInfinite,
    autoplay,
    arrows,
    speed: 1000,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    afterChange: (index) => setCurrentSlide(index),
  };

  const sliderRef = useRef(null);

  const goToSlide = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  const addStaticPostObj = () => {
    const staticPostObj = [
      ...slideItems,
      {
        id: slideItems.length + 1,
        subTitle: "",
        title: "",
        description: "",
        buttonText: "",
        mediaurl: "",
        enableOverlay: true,
        overlayColor: "#3b4c68",
        overlayOpacity: 0.75,
      },
    ];
    setAttributes({ slideItems: staticPostObj });
  };
  const updateStaticPostObj = (index, key, value) => {
    const updatedStaticPostObj = [...slideItems];
    updatedStaticPostObj[index][key] = value;
    setAttributes({ slideItems: updatedStaticPostObj });
  };
  const removeStaticPostObj = (index) => {
    const updatedStaticPostObj = [...slideItems];
    updatedStaticPostObj.splice(index, 1);
    if (currentSlide >= updatedStaticPostObj.length) {
      goToSlide(updatedStaticPostObj.length - 1);
    }
    setAttributes({ slideItems: updatedStaticPostObj });
  };
  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...slideItems];
    arrayCopy[oldIndex] = slideItems[newIndex];
    arrayCopy[newIndex] = slideItems[oldIndex];

    setAttributes({
      slideItems: arrayCopy,
    });
  };

  return (
    <div
      {...useBlockProps({
        className: "md_slider_section",
      })}
    >
      <InspectorControls>
        <PanelBody title={__("Slider Settings")}>
          <ToggleControl
            label={__("Autoplay", "md-prime")}
            checked={autoplay}
            onChange={(value) => setAttributes({ autoplay: value })}
          />
          <ToggleControl
            label={__("Show Arrows", "md-prime")}
            checked={arrows}
            onChange={(value) => setAttributes({ arrows: value })}
          />
          <ToggleControl
            label={__("Show Dots", "md-prime")}
            checked={dots}
            onChange={(value) => setAttributes({ dots: value })}
          />
          <ToggleControl
            label={__("Infinite Loop", "md-prime")}
            checked={slideInfinite}
            onChange={(value) => setAttributes({ slideInfinite: value })}
          />
          <RangeControl
            label={__("Slides To Show")}
            value={slideSlidesToShow}
            min={1}
            max={10}
            step={1}
            onChange={(value) => setAttributes({ slideSlidesToShow: value })}
          />
          <RangeControl
            label={__("Slides To Scroll")}
            value={slideSlidesToScroll}
            min={1}
            max={10}
            step={1}
            onChange={(value) => setAttributes({ slideSlidesToScroll: value })}
          />
        </PanelBody>
        <PanelBody title={__("Toggle Settings")} initialOpen={false}>
          <ToggleControl
            label={__("Show Sub Title", "md-prime")}
            checked={showSubTitle}
            onChange={(value) => setAttributes({ showSubTitle: value })}
          />
          <ToggleControl
            label={__("Show Title", "md-prime")}
            checked={showTitle}
            onChange={(value) => setAttributes({ showTitle: value })}
          />
          <ToggleControl
            label={__("Show Description", "md-prime")}
            checked={showDescription}
            onChange={(value) => setAttributes({ showDescription: value })}
          />
        </PanelBody>
        {currentSlide >= 0 && currentSlide in slideItems && (
          <PanelBody title={__("Current Slide Settings")} initialOpen={false}>
            <div className="setting-row">
              <label htmlFor="background-image">
                {__("Background Image", "md-prime")}
              </label>
              <div>
                {!slideItems[currentSlide].mediaurl ? (
                  <MediaUpload
                    onSelect={(selectedImage) => {
                      updateStaticPostObj(
                        currentSlide,
                        "mediaurl",
                        selectedImage.url
                      );
                    }}
                    allowedTypes={["image"]}
                    value={slideItems[currentSlide].mediaurl}
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
                        src={slideItems[currentSlide].mediaurl}
                        alt="Background-image-preview"
                      />
                    </div>
                    <Button
                      onClick={() => {
                        updateStaticPostObj(currentSlide, "mediaurl", "");
                      }}
                      className="is-link is-destructive"
                    >
                      {__("Remove Image", "md-prime")}
                    </Button>
                  </>
                )}
              </div>
            </div>
            <div className="md_slider__background_settings">
              <ToggleControl
                label={__("Enable Overlay", "md-prime")}
                checked={slideItems[currentSlide].enableOverlay}
                onChange={(value) =>
                  updateStaticPostObj(currentSlide, "enableOverlay", value)
                }
              />
              {slideItems[currentSlide].enableOverlay && (
                <>
                  <PanelColorSettings
                    title={__("Overlay Color Settings", "md-storyful-fse-full")}
                    initialOpen={false}
                    colorSettings={[
                      {
                        value: slideItems[currentSlide].overlayColor,
                        onChange: (newColor) =>
                          updateStaticPostObj(
                            currentSlide,
                            "overlayColor",
                            newColor
                          ),
                        label: __("Overlay Color"),
                      },
                    ]}
                  />
                  <RangeControl
                    label={__("Overlay Opacity")}
                    value={slideItems[currentSlide].overlayOpacity}
                    min={0}
                    max={1}
                    step={0.05}
                    onChange={(value) =>
                      updateStaticPostObj(currentSlide, "overlayOpacity", value)
                    }
                  />
                </>
              )}
            </div>
          </PanelBody>
        )}
        <PanelBody title={__("Button Settings")} initialOpen={false}>
          <ToggleControl
            label={__("Show Button", "md-prime")}
            checked={showButton}
            onChange={(value) => setAttributes({ showButton: value })}
          />
          {showButton && (
            <div className="button-settings">
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
        <PanelBody title={__("Color Settings")} initialOpen={false}>
          <PanelColorSettings
            title={__("Color Settings", "md-storyful-fse-full")}
            initialOpen={false}
            colorSettings={[
              {
                value: sliderSubTitleFontColor,
                onChange: (newColor) =>
                  setAttributes({ sliderSubTitleFontColor: newColor }),
                label: __("Slider Sub Title Font Color"),
              },
              {
                value: sliderTitleFontColor,
                onChange: (newColor) =>
                  setAttributes({ sliderTitleFontColor: newColor }),
                label: __("Slider Title Font Color"),
              },
              {
                value: sliderDescriptionFontColor,
                onChange: (newColor) =>
                  setAttributes({ sliderDescriptionFontColor: newColor }),
                label: __("Slider Description Font Color"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <style>
        {`
          .md_slider__item__content__button-wrap {
            color: ${buttonColor};
            background: ${buttonBackgroundColor} !important;
          }
          .md_slider__item__content__button-wrap:hover {
            color: ${buttonHoverColor};
            background: ${buttonHoverBackgroundColor} !important;
          }
        `}
      </style>

      <div className="md_hero_banner_slider md_slider_grid">
        <Slider {...settings} className="md_slider" ref={sliderRef}>
          {slideItems.map((item, index) => (
            <div className={`md_slider_grid_item active"`} key={index}>
              <div className="md_slider__item_shape"></div>
              <div
                className={`md_slider__item`}
                style={{ backgroundImage: `url(${item.mediaurl})` }}
              >
                {item.enableOverlay && (
                  <div
                    className="md_slider__item__overlay"
                    style={{
                      backgroundColor: item.overlayColor,
                      opacity: item.overlayOpacity,
                    }}
                  ></div>
                )}
                <div className="md_slider__item__content">
                  <div className="md_slider__item__content__shape">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="icon_31739763305127"
                      viewBox="2.39 2.39 95.22 95.22"
                      data-filename="icon-shape-1.svg"
                      width="90"
                      height="90"
                    >
                      <path d="m96.11 40.5h-23.18l16.39-16.39c.58-.56.58-1.56 0-2.12 0 0-11.31-11.31-11.31-11.31-.56-.56-1.56-.56-2.12 0l-16.39 16.39v-23.18c0-.83-.67-1.5-1.5-1.5h-16c-.83 0-1.5.67-1.5 1.5v23.18l-16.39-16.39c-.56-.56-1.56-.56-2.12 0l-11.31 11.31c-.58.56-.58 1.56 0 2.12 0 0 16.39 16.39 16.39 16.39h-23.18c-.83 0-1.5.67-1.5 1.5v16c0 .83.67 1.5 1.5 1.5h23.18l-16.39 16.39c-.58.56-.58 1.56 0 2.12 0 0 11.31 11.31 11.31 11.31.56.56 1.56.56 2.12 0l16.39-16.39v23.18c0 .83.67 1.5 1.5 1.5h16c.83 0 1.5-.67 1.5-1.5v-23.18l16.39 16.39c.56.56 1.56.56 2.12 0l11.31-11.31c.58-.56.58-1.56 0-2.12 0 0-16.39-16.39-16.39-16.39h23.18c.83 0 1.5-.67 1.5-1.5v-16c0-.83-.67-1.5-1.5-1.5zm-1.5 16h-25.3c-.61 0-1.15.37-1.39.93-.23.56-.1 1.21.33 1.63l17.89 17.89-9.19 9.19-17.89-17.89c-.43-.43-1.07-.56-1.63-.33s-.93.78-.93 1.39v25.3h-13v-25.3c0-.61-.37-1.15-.93-1.39-.56-.23-1.21-.1-1.63.33l-17.89 17.89-9.19-9.19 17.89-17.89c.43-.43.56-1.07.33-1.63s-.78-.93-1.39-.93h-25.3v-13h25.3c.61 0 1.15-.37 1.39-.93.23-.56.1-1.21-.33-1.63l-17.89-17.89 9.19-9.19 17.89 17.89c.43.43 1.07.56 1.63.33s.93-.78.93-1.39v-25.3h13v25.3c0 .61.37 1.15.93 1.39.56.23 1.21.1 1.63-.33l17.89-17.89 9.19 9.19-17.89 17.89c-.43.43-.56 1.07-.33 1.63s.78.93 1.39.93h25.3z"></path>
                    </svg>
                  </div>
                  {showSubTitle && (
                    <div className="md_slider__item__content__subtitle_wrap">
                      <i className="fa fa-usd"></i>
                      <RichText
                        tagName="h4"
                        className="md_slider__item__content__subtitle"
                        value={item.subtitle}
                        onChange={(value) =>
                          updateStaticPostObj(index, "subtitle", value)
                        }
                        placeholder={__("Enter Subtitle", "md-prime")}
                        style={{
                          color: sliderSubTitleFontColor,
                        }}
                      />
                    </div>
                  )}
                  {showTitle && (
                    <RichText
                      tagName="h1"
                      className="md_slider__item__content__title"
                      value={item.title}
                      onChange={(value) =>
                        updateStaticPostObj(index, "title", value)
                      }
                      placeholder={__("Enter Title", "md-prime")}
                      style={{
                        color: sliderTitleFontColor,
                      }}
                    />
                  )}
                  {showDescription && (
                    <RichText
                      tagName="p"
                      className="md_slider__item__content__description"
                      value={item.description}
                      onChange={(value) =>
                        updateStaticPostObj(index, "description", value)
                      }
                      placeholder={__("Enter Description", "md-prime")}
                      style={{
                        color: sliderDescriptionFontColor,
                      }}
                    />
                  )}
                  {showButton && (
                    <div className="md_btn__wrapper">
                      <RichText
                        tagName="span"
                        className="md_btn md_btn__arrow"
                        value={item.buttonText}
                        onChange={(value) =>
                          updateStaticPostObj(index, "buttonText", value)
                        }
                        placeholder={__("Enter Button Text", "md-prime")}
                      />
                      <i className="bi bi-arrow-right-short"></i>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="md_slider_section__items">
        {slideItems.map((item, index) => (
          <div
            className={
              "md_slider_section__item show-items-hover-wrap" +
              ` ${currentSlide === index ? "active" : ""}`
            }
            key={index}
            role="button"
            tabIndex={0}
            data-index={index}
            aria-label={__("Edit this item", "md-prime")}
          >
            <div className={`item-action-wrap show-items-hover pos-abs`}>
              <div className="move-item">
                {0 < index && (
                  <Tooltip text={__("Move Left", "md-porto")}>
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
                {index + 1 < slideItems.length && (
                  <Tooltip text={__("Move Right", "md-porto")}>
                    <span
                      className="dashicons dashicons-arrow-right-alt move-right"
                      role="button"
                      tabIndex={0}
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
              {1 < slideItems.length && (
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
                        removeStaticPostObj(index);
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
                          removeStaticPostObj(index);
                        }
                      }
                    }}
                    aria-label={__("Remove this item", "md-prime")}
                  ></i>
                </Tooltip>
              )}
            </div>
            <div
              className="item-title"
              role="button"
              tabIndex={0}
              onClick={() => goToSlide(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  goToSlide(index);
                }
              }}
            >
              {__("Slide")} {index + 1}
            </div>
          </div>
        ))}
      </div>
      <div
        className="add-item-wrap"
        onClick={addStaticPostObj}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            addStaticPostObj();
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
  );
}
