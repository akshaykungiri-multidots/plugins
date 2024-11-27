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
  MediaUploadCheck,
  RichText,
  PanelColorSettings,
} from "@wordpress/block-editor";

import {
  PanelBody,
  RangeControl,
  ToggleControl,
  Button,
  GradientPicker,
  Tooltip,
} from "@wordpress/components";

import Slider from "react-slick";
import React, { useRef, useState } from "react";
import placeholder from "./placeholder-image.png";

import { leftAlign, rightAlign } from "../icons";

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
    layout,
    autoplay,
    autoplaySpeed,
    arrows,
    dots,
    slideInfinite,
    slideSlidesToShow,
    slideSlidesToScroll,
    heading,
    content,
    buttonText,
    mediaGallery,
    staicImage,
    showContent,
    showStaticImage,
    showButton,
    headingColor,
    contentColor,
    contentBackgroundColor,
    buttonColor,
    buttonBackgroundColor,
    buttonHoverColor,
    buttonHoverBackgroundColor,
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
      ...mediaGallery,
      {
        id: mediaGallery.length + 1,
        mediaImage: "",
      },
    ];
    setAttributes({ mediaGallery: staticPostObj });
  };
  const updateStaticPostObj = (index, key, value) => {
    const updatedStaticPostObj = [...mediaGallery];
    updatedStaticPostObj[index][key] = value;
    setAttributes({ mediaGallery: updatedStaticPostObj });
  };
  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...mediaGallery];
    arrayCopy[oldIndex] = mediaGallery[newIndex];
    arrayCopy[newIndex] = mediaGallery[oldIndex];

    setAttributes({
      mediaGallery: arrayCopy,
    });
  };
  const removeStaticPostObj = (index) => {
    const updatedStaticPostObj = [...mediaGallery];
    updatedStaticPostObj.splice(index, 1);
    if (currentSlide >= updatedStaticPostObj.length) {
      goToSlide(updatedStaticPostObj.length - 1);
    }
    setAttributes({ mediaGallery: updatedStaticPostObj });
  };
  return (
    <div {...useBlockProps({ className: "md_media_text_slideshow" })}>
      <InspectorControls>
        <PanelBody title={__("Block Settings")} initialOpen={true}>
          <div className="setting-row inspector-field inspector-field-alignment">
            <label htmlFor="alignment" className="inspector-mb-0">
              Alignment
            </label>
            <div className="inspector-field-button-list inspector-field-button-list-fluid">
              <button
                className={
                  "left" === layout
                    ? "active inspector-button"
                    : " inspector-button"
                }
                onClick={() => setAttributes({ layout: "left" })}
              >
                {leftAlign}
              </button>
              <button
                className={
                  "right" === layout
                    ? "active inspector-button"
                    : " inspector-button"
                }
                onClick={() => setAttributes({ layout: "right" })}
              >
                {rightAlign}
              </button>
            </div>
          </div>
          <div className="setting-row inspector-field">
            <label htmlFor="contentBackgroundColor">
              {__("Content Background Color")}
            </label>
            <GradientPicker
              id="contentBackgroundColor"
              label={__("Content Background Color")}
              value={contentBackgroundColor ? contentBackgroundColor : null}
              onChange={(value) =>
                setAttributes({ contentBackgroundColor: value })
              }
              gradients={[
                {
                  name: "Gradient 1",
                  gradient: "linear-gradient(to right, #252a5b 0%, #005494 34%, #428ac4 100%)",
                },
                {
                  name: "Gradient 2",
                  gradient: "linear-gradient(to right, #c73727 0%, #e76a24 100%)",
                },
                {
                  name: "Gradient 3",
                  gradient: "linear-gradient(45deg, #f3ec78, #af4261)",
                },
              ]}
            />
          </div>
        </PanelBody>
        <PanelBody title={__("Slider Settings")} initialOpen={false}>
          <ToggleControl
            label={__("Autoplay", "md-prime")}
            checked={autoplay}
            onChange={(value) => setAttributes({ autoplay: value })}
          />
          <RangeControl
            label={__("Autoplay Speed")}
            value={autoplaySpeed}
            min={1000}
            max={10000}
            step={1000}
            onChange={(value) => setAttributes({ autoplaySpeed: value })}
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
            label={__("Show Content")}
            checked={showContent}
            onChange={() => setAttributes({ showContent: !showContent })}
          />
          <ToggleControl
            label={__("Show Static Image")}
            checked={showStaticImage}
            onChange={() =>
              setAttributes({ showStaticImage: !showStaticImage })
            }
          />
        </PanelBody>
        <PanelBody title={__("Button Settings")} initialOpen={false}>
          <ToggleControl
            label={__("Show Button", "md-woodward")}
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
        <PanelBody title={__("Color Settings")} initialOpen={false}>
          <PanelColorSettings
            title={__("Color Settings")}
            initialOpen={false}
            colorSettings={[
              {
                value: headingColor,
                onChange: (newColor) =>
                  setAttributes({ headingColor: newColor }),
                label: __("Heading Color"),
              },
              {
                value: contentColor,
                onChange: (newColor) =>
                  setAttributes({ contentColor: newColor }),
                label: __("Content Color"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <style>
        {`
          .md-media-text-slideshow-button {
            color: ${buttonColor};
            background: ${buttonBackgroundColor};
          }
          .md-media-text-slideshow-button:hover {
            color: ${buttonHoverColor};
            background: ${buttonHoverBackgroundColor};
          }
        `}
      </style>
      <div className={`md_media_text_slideshow_wrapper ${layout}`}>
        <div className="md_media_text_slideshow_content" style={{ background: contentBackgroundColor }}>
          <div className="md_media_text_slideshow_content_inner">
            <RichText
              tagName="h2"
              value={heading}
              onChange={(value) => setAttributes({ heading: value })}
              style={{ color: headingColor }}
              placeholder={__("Enter Heading")}
              className="md-media-text-slideshow-heading"
            />
            {showContent && (
              <RichText
                tagName="p"
                value={content}
                onChange={(value) => setAttributes({ content: value })}
                style={{ color: contentColor }}
                placeholder={__("Enter Content")}
                className="md-media-text-slideshow-content"
              />
            )}
            {showButton && (
              <div className="md-media-text-slideshow-button_wrapper">
                <RichText
                  tagName="p"
                  value={buttonText}
                  onChange={(value) => setAttributes({ buttonText: value })}
                  placeholder={__("Enter Button Text")}
                  className="md-media-text-slideshow-button md-btn-main has-right-arrow"
                />
              </div>
            )}
          </div>
        </div>
        <div className="md_media_text_slideshow_media">
          <div className="md_media_text_slideshow_media__wrapper">
            <Slider {...settings} className="md_slider" ref={sliderRef}>
              {mediaGallery.map((postObj, index) => (
                <div className={`md_slider_grid_item active"`} key={index}>
                  <div className={`md_slider__item`}>
                    <div
                      className={`item-action-wrap show-items-hover pos-abs`}
                    >
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
                        {index + 1 < mediaGallery.length && (
                          <Tooltip text={__("Move Right", "md-prime")}>
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
                      {1 < mediaGallery.length && (
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
                                const updatedArray = mediaGallery.filter(
                                  (item, itemIndex) => itemIndex !== index
                                );
                                setAttributes({
                                  mediaGallery: updatedArray,
                                });
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
                                  const updatedArray = mediaGallery.filter(
                                    (item, itemIndex) => itemIndex !== index
                                  );
                                  setAttributes({
                                    mediaGallery: updatedArray,
                                  });
                                }
                              }
                            }}
                            aria-label={__("Remove this item", "md-prime")}
                          ></i>
                        </Tooltip>
                      )}
                    </div>
                    <div className="md-prime-block-control image-preview image-controle-visible-hover">
                      <div
                        className={`image-controls small-icons icon-center-fixed`}
                      >
                        <MediaUploadCheck>
                          <MediaUpload
                            onSelect={(media) =>
                              updateStaticPostObj(
                                index,
                                "mediaImage",
                                media.url
                              )
                            }
                            allowedTypes={["image"]}
                            value={postObj.mediaImage}
                            render={({ open }) => (
                              <>
                                {postObj.mediaImage ? (
                                  <>
                                    <Tooltip
                                      text={__("Edit Image", "md-prime")}
                                    >
                                      <i
                                        className="dashicons dashicons-edit edit-image"
                                        onClick={open}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => {
                                          if (
                                            e.key === "Enter" ||
                                            e.key === " "
                                          ) {
                                            e.preventDefault(); // Prevent default action for space key
                                            open(); // Trigger the click handler
                                          }
                                        }}
                                        aria-label={__(
                                          "Edit image",
                                          "md-prime"
                                        )}
                                      ></i>
                                    </Tooltip>
                                    <Tooltip
                                      text={__("Remove Image", "md-prime")}
                                    >
                                      <i
                                        className="dashicons dashicons-no-alt remove-image"
                                        onClick={() => {
                                          const toDelete =
                                            // eslint-disable-next-line no-alert
                                            confirm(
                                              __(
                                                "Are you sure you want to delete this image?",
                                                "md-prime"
                                              )
                                            );
                                          if (toDelete) {
                                            updateStaticPostObj(
                                              index,
                                              "mediaImage",
                                              ""
                                            );
                                          }
                                        }}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => {
                                          if (
                                            e.key === "Enter" ||
                                            e.key === " "
                                          ) {
                                            e.preventDefault();
                                            updateStaticPostObj(
                                              index,
                                              "mediaImage",
                                              ""
                                            );
                                          }
                                        }}
                                        aria-label={__(
                                          "Remove image",
                                          "md-prime"
                                        )}
                                      ></i>
                                    </Tooltip>
                                  </>
                                ) : (
                                  <div className="upload-wrap">
                                    <Button
                                      onClick={open}
                                      className="button media_and_text__upload_btn"
                                    >
                                      <Tooltip
                                        text={__("Upload Image", "md-prime")}
                                      >
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
                      {postObj.mediaImage ? (
                        <img src={postObj.mediaImage} alt={"slider"} />
                      ) : (
                        <img src={siteURL + placeholder} alt={"slider"} />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
            <div className="md_slider_section__items">
              {mediaGallery.map((item, index) => (
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
                      {index + 1 < mediaGallery.length && (
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
                    {1 < mediaGallery.length && (
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
          <div className="md_media_text_slideshow_media__static">
            {showStaticImage && (
              <div className="md_media_text_slideshow_media__static__wrapper">
                <div className="md-prime-block-control image-preview image-controle-visible-hover">
                  <div
                    className={`image-controls small-icons icon-center-fixed`}
                  >
                    <MediaUploadCheck>
                      <MediaUpload
                        onSelect={(media) =>
                          setAttributes({ staicImage: media.url })
                        }
                        allowedTypes={["image"]}
                        value={staicImage}
                        render={({ open }) => (
                          <>
                            {staicImage ? (
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
                                      setAttributes({ staicImage: "" })
                                    }
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                      if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault();
                                        setAttributes({ staicImage: "" });
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
                                  <Tooltip
                                    text={__("Upload Image", "md-prime")}
                                  >
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
                    src={staicImage ? staicImage : siteURL + placeholder}
                    alt={"slider"}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
