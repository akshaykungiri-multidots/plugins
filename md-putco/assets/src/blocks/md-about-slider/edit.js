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
  MediaUploadCheck,
  MediaUpload,
  PanelColorSettings,
} from "@wordpress/block-editor";

import { useState } from "@wordpress/element";

import {
  PanelBody,
  RangeControl,
  ToggleControl,
  Button,
  Tooltip,
} from "@wordpress/components";

import placeholder from "./placeholder-image.png";

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
    showSubTitle,
    showTitle,
    showDescription,
    mediaImage,
    mediaImage2,
    mediaImage3,
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
        className: "md_about_slider_section",
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
      <div className="md_about_banner_slider__wrap">
        <div className="md_about_banner_slider__wrap__left">
          <div className="md_about_banner_slider md_about_slider_grid">
            <Slider {...settings} className="md_about_slider" ref={sliderRef}>
              {slideItems.map((item, index) => (
                <div
                  className={`md_about_slider_grid_item active"`}
                  key={index}
                >
                  <div className={`md_about_slider__item`}>
                    <div className="md_about_slider__item__content">
                      {showSubTitle && (
                        <RichText
                          tagName="h4"
                          className="md_about_slider__item__content__subtitle"
                          value={item.subtitle}
                          onChange={(value) =>
                            updateStaticPostObj(index, "subtitle", value)
                          }
                          placeholder={__("Enter Subtitle", "md-prime")}
                          style={{
                            color: sliderSubTitleFontColor,
                          }}
                        />
                      )}
                      {showTitle && (
                        <RichText
                          tagName="h1"
                          className="md_about_slider__item__content__title"
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
                          className="md_about_slider__item__content__description"
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
                      <Tooltip text={__("Move Left", "md-putco")}>
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
                      <Tooltip text={__("Move Right", "md-putco")}>
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
        <div className="md_about_banner_slider__wrap__right">
          <div className="md_putco_image_banner_v2__media">
            <div className="md-prime-block-control image-preview image-controle-visible-hover md_putco_image_banner_v2__media1">
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
            <div className="md-prime-block-control image-preview image-controle-visible-hover md_putco_image_banner_v2__media2">
              <div className={`image-controls small-icons icon-center-fixed`}>
                <MediaUploadCheck>
                  <MediaUpload
                    onSelect={(media) =>
                      setAttributes({ mediaImage2: media.url })
                    }
                    allowedTypes={["image"]}
                    value={mediaImage2}
                    render={({ open }) => (
                      <>
                        {mediaImage2 ? (
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
                                  setAttributes({ mediaImage2: "" })
                                }
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                  if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    setAttributes({ mediaImage2: "" });
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
                src={mediaImage2 ? mediaImage2 : siteURL + placeholder}
                alt={"slider"}
              />
            </div>
            <div className="md-prime-block-control image-preview image-controle-visible-hover md_putco_image_banner_v2__media3">
              <div className={`image-controls small-icons icon-center-fixed`}>
                <MediaUploadCheck>
                  <MediaUpload
                    onSelect={(media) =>
                      setAttributes({ mediaImage3: media.url })
                    }
                    allowedTypes={["image"]}
                    value={mediaImage3}
                    render={({ open }) => (
                      <>
                        {mediaImage3 ? (
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
                                  setAttributes({ mediaImage3: "" })
                                }
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                  if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    setAttributes({ mediaImage3: "" });
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
                src={mediaImage3 ? mediaImage3 : siteURL + placeholder}
                alt={"slider"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
