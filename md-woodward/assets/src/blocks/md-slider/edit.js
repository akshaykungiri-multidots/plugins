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
  SelectControl,
  TextControl,
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
    sliderTitleFontColor,
    sliderDescriptionFontColor,
    buttonColor,
		buttonBackgroundColor,
		buttonHoverColor,
		buttonHoverBackgroundColor,
  } = attributes;

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
        title: "",
        description: "",
        buttonText: "",
        mediaurl: "",
        youtubeurl: "",
        videotype: "media-upload",
        enableOverlay: true,
        overlayColor: "#3b4c68",
        overlayOpacity: 0.75
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
        {currentSlide >= 0 && currentSlide in slideItems && (
          <PanelBody title={__("Current Slide Settings")} initialOpen={false}>
            <div className="text_video__youtube">
              <div className="video_section_wrapper" id="MdYTplayer">
                <div className="wrapper__box-inner">
                  <div
                    className="video-details-wrapper"
                    style={{ textAlign: "center" }}
                  >
                    <div className="video-data-edit">
                      <SelectControl
                        label={__("Select Video Type", "storyful")}
                        value={slideItems[currentSlide].videotype}
                        options={[
                          {
                            label: "Media Upload Video",
                            value: "media-upload",
                          },
                          {
                            label: "Youtube Video",
                            value: "youtube",
                          },
                        ]}
                        onChange={(value) => {
                          updateStaticPostObj(currentSlide, "videotype", value);
                        }}
                      />
                      {slideItems[currentSlide].videotype === "youtube" && (
                        <>
                          <TextControl
                            placeholder="Enter youtube video URL"
                            value={slideItems[currentSlide].youtubeurl}
                            className="video-item-url"
                            onChange={(value) => {
                              updateStaticPostObj(
                                currentSlide,
                                "youtubeurl",
                                value
                              );
                            }}
                          />
                          {slideItems[currentSlide].youtubeurl && (
                            <iframe
                              src={
                                slideItems[currentSlide].youtubeurl.replace(
                                  "watch?v=",
                                  "embed/"
                                ) + "?controls=0"
                              }
                              data-src={
                                slideItems[currentSlide].youtubeurl +
                                "?enablejsapi=1&controls=0&rel=0"
                              }
                              title="video"
                            ></iframe>
                          )}
                        </>
                      )}
                    </div>

                    {slideItems[currentSlide].videotype === "media-upload" &&
                      slideItems[currentSlide].mediaurl && (
                        <div className="image-preview image-controle-visible-hover">
                          <video
                            autoPlay=""
                            muted=""
                            loop=""
                            className="self-media"
                          >
                            <source
                              src={slideItems[currentSlide].mediaurl}
                              type="video/mp4"
                            />
                          </video>

                          <div className="item-action-wrap image-controls small-icons icon-center-fixed">
                            <Tooltip text={__("Remove Video")}>
                              <i
                                className="dashicons dashicons-no-alt remove-image"
                                role="button"
                                tabIndex={0}
                                onClick={() => {
                                  updateStaticPostObj(
                                    currentSlide,
                                    "mediaurl",
                                    ""
                                  );
                                }}
                                onKeyDown={(e) => {
                                  if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    updateStaticPostObj(
                                      currentSlide,
                                      "mediaurl",
                                      ""
                                    );
                                  }
                                }}
                                aria-label="Remove image"
                              ></i>
                            </Tooltip>
                          </div>
                        </div>
                      )}
                    {slideItems[currentSlide].videotype === "media-upload" &&
                      !slideItems[currentSlide].mediaurl && (
                        <>
                          <MediaUpload
                            onSelect={(newmedia) => {
                              updateStaticPostObj(
                                currentSlide,
                                "mediaurl",
                                newmedia.url
                              );
                            }}
                            allowedTypes={["video"]}
                            value={slideItems[currentSlide].mediaurl}
                            render={({ open }) => (
                              <Button
                                onClick={open}
                                className="components-button button button-large"
                              >
                                <i className="upload"></i> Upload video
                              </Button>
                            )}
                          />
                        </>
                      )}
                  </div>
                </div>
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
          <PanelColorSettings
            title={__("Button Color Settings", "md-storyful-fse-full")}
            initialOpen={false}
            colorSettings={[
              {
                value: buttonColor,
                onChange: (newColor) => setAttributes({ buttonColor: newColor }),
                label: __("Button Font Color"),
              },
              {
                value: buttonHoverColor,
                onChange: (newColor) =>
                  setAttributes({ buttonHoverColor: newColor }),
                label: __("Button Hover Font Color"),
              }
            ]}
          />
          <div className="settings-row">
            <label htmlFor="buttonBackgroundColor">{__("Button Background Color")}</label>
            <GradientPicker
              id="buttonBackgroundColor"
              label={__("Button Background Color")}
              value={buttonBackgroundColor ? buttonBackgroundColor : null}
              onChange={(value) => setAttributes({ buttonBackgroundColor: value })}
              gradients={[
                {
                  name: "Gradient 1",
                  gradient: "linear-gradient(90deg, #C73727 0%, #E76A24 100.28%)",
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
            <label htmlFor="buttonHoverBackgroundColor">{__("Button Hover Background Color")}</label>
            <GradientPicker
              id="buttonHoverBackgroundColor"
              label={__("Button Hover Background Color")}
              value={buttonHoverBackgroundColor ? buttonHoverBackgroundColor : null}
              onChange={(value) => setAttributes({ buttonHoverBackgroundColor: value })}
              gradients={[
                {
                  name: "Gradient 1",
                  gradient: "linear-gradient(90deg, #C73727 0%, #E76A24 100.28%)",
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
        </PanelBody>
        <PanelBody title={__("Color Settings")} initialOpen={false}>
          <PanelColorSettings
            title={__("Color Settings", "md-storyful-fse-full")}
            initialOpen={false}
            colorSettings={[
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
              }
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <style>
        {`
          .md_slider__item__content__button {
            color: ${buttonColor};
            background: ${buttonBackgroundColor};
          }
          .md_slider__item__content__button:hover {
            color: ${buttonHoverColor};
            background: ${buttonHoverBackgroundColor};
          }
        `}
      </style>

      <div className="md_hero_banner_slider md_slider_grid">
        <Slider {...settings} className="md_slider" ref={sliderRef}>
          {slideItems.map((item, index) => (
            <div className={`md_slider_grid_item active"`} key={index}>
              <div className={`md_slider__item`}>
                <div className="text_video__youtube">
                  <div className="video_section_wrapper" id="MdYTplayer">
                    <div className="wrapper__box-inner">
                      <div
                        className="video-details-wrapper"
                        style={{ textAlign: "center" }}
                      >
                        <div className="video-data-edit">
                          {item.videotype === "youtube" && (
                            <>
                              {item.youtubeurl && (
                                <iframe
                                  src={
                                    item.youtubeurl.replace(
                                      "watch?v=",
                                      "embed/"
                                    ) + "?controls=0"
                                  }
                                  data-src={
                                    item.youtubeurl +
                                    "?enablejsapi=1&controls=0&rel=0"
                                  }
                                  title="video"
                                ></iframe>
                              )}
                            </>
                          )}
                        </div>

                        {item.videotype ===
                          "media-upload" &&
                          item.mediaurl && (
                            <div className="image-preview image-controle-visible-hover">
                              <video
                                autoPlay=""
                                muted=""
                                loop=""
                                className="self-media"
                              >
                                <source
                                  src={item.mediaurl}
                                  type="video/mp4"
                                />
                              </video>
                            </div>
                          )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md_slider__item__overlay" style={{backgroundColor: item.overlayColor, opacity: item.overlayOpacity}}></div>
                <div className="md_slider__item__content">
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
                  <div className="md_slider__item__content__button-wrap">
                    <RichText
                      tagName="p"
                      className="md_slider__item__content__button md-btn-main has-right-arrow"
                      value={item.buttonText}
                      onChange={(value) =>
                        updateStaticPostObj(index, "buttonText", value)
                      }
                      placeholder={__("Enter Button Text", "md-prime")}
                    />
                  </div>
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
                  <Tooltip text={__("Move Left", "md-woodward")}>
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
                  <Tooltip text={__("Move Right", "md-woodward")}>
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
