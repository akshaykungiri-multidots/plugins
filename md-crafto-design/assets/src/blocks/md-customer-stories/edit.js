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
  MediaUploadCheck,
  PanelColorSettings,
} from "@wordpress/block-editor";

import { useState } from "@wordpress/element";

import {
  PanelBody,
  RangeControl,
  ToggleControl,
  Button,
  Tooltip,
  TextControl
} from "@wordpress/components";

import Slider from "react-slick";
import React, { useRef } from "react";

import placeholder from "./placeholder-image.png";

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
    subheading,
    ratingStars,
    ratingTitle,
    headingColor,
    subHeadingColor,
    ratingTitleColor,
    slideItems,
    autoplay,
    arrows,
    dots,
    slideInfinite,
    slideSlidesToShow,
    slideSlidesToScroll,
    showHeading,
    showSubheading,
    showRatingTitle,
    showRating,
    showSlideAuthorImage,
    showSlideAuthorName,
    showSlideAuthorDesignation,
    showSlideTestimonialText,
    showSlideRating,
    showSlideDateOfTestimonial,
    slideAuthorNameColor,
    slideAuthorDesignationColor,
    slideTestimonialTextColor,
    slideDateOfTestimonialColor,
  } = attributes;

  const [currentSlide, setCurrentSlide] = useState(0);

  const siteURL = window.location.origin;

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
        authorImage: "",
        authorName: "",
        authorDesignation: "",
        testimonialText: "",
        rating: "",
        dateOfTestimonial: "",
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

  const displayReviewStars = () => {
    const stars = [];
    for (let i = 0; i < ratingStars; i++) {
      stars.push(<i key={i} className="bi bi-star-fill"></i>);
    }
    return stars;
  };

  const displaySlideReviewStars = (rating) => {
    const stars = [];
    if (isNaN(rating)) {
      rating = 0;
    }
    for (let i = 0; i < rating; i++) {
      stars.push(<i key={i} className="fa fa-star"></i>);
    }
    return stars;
  };

  return (
    <div
      {...useBlockProps({
        className: "md_customer_stories_section",
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
            label={__("Show Heading", "md-prime")}
            checked={showHeading}
            onChange={(value) => setAttributes({ showHeading: value })}
          />
          <ToggleControl
            label={__("Show Subheading", "md-prime")}
            checked={showSubheading}
            onChange={(value) => setAttributes({ showSubheading: value })}
          />
          <ToggleControl
            label={__("Show Slide Author Image", "md-prime")}
            checked={showSlideAuthorImage}
            onChange={(value) => setAttributes({ showSlideAuthorImage: value })}
          />
          <ToggleControl
            label={__("Show Slide Author Name", "md-prime")}
            checked={showSlideAuthorName}
            onChange={(value) => setAttributes({ showSlideAuthorName: value })}
          />
          <ToggleControl
            label={__("Show Slide Author Designation", "md-prime")}
            checked={showSlideAuthorDesignation}
            onChange={(value) =>
              setAttributes({ showSlideAuthorDesignation: value })
            }
          />
          <ToggleControl
            label={__("Show Slide Testimonial Text", "md-prime")}
            checked={showSlideTestimonialText}
            onChange={(value) =>
              setAttributes({ showSlideTestimonialText: value })
            }
          />
          <ToggleControl
            label={__("Show Slide Rating", "md-prime")}
            checked={showSlideRating}
            onChange={(value) => setAttributes({ showSlideRating: value })}
          />
          <ToggleControl
            label={__("Show Slide Date Of Testimonial", "md-prime")}
            checked={showSlideDateOfTestimonial}
            onChange={(value) =>
              setAttributes({ showSlideDateOfTestimonial: value })
            }
          />
        </PanelBody>
        <PanelBody title={__("Rating Settings")} initialOpen={false}>
          <ToggleControl
            label={__("Show Rating Title", "md-prime")}
            checked={showRatingTitle}
            onChange={(value) => setAttributes({ showRatingTitle: value })}
          />
          <ToggleControl
            label={__("Show Rating Stars", "md-prime")}
            checked={showRating}
            onChange={(value) => setAttributes({ showRating: value })}
          />
          {showRating && (
            <RangeControl
              label={__("Rating Stars")}
              value={ratingStars}
              min={1}
              max={5}
              step={1}
              onChange={(value) => setAttributes({ ratingStars: value })}
            />
          )}
        </PanelBody>
        <PanelBody title={__("Color Settings")} initialOpen={false}>
          <PanelColorSettings
            title={__("Color Settings", "md-storyful-fse-full")}
            initialOpen={false}
            colorSettings={[
              {
                value: headingColor,
                onChange: (value) => setAttributes({ headingColor: value }),
                label: __("Heading Color", "md-storyful-fse-full"),
              },
              {
                value: slideAuthorNameColor,
                onChange: (value) =>
                  setAttributes({ slideAuthorNameColor: value }),
                label: __("Slide Author Name Color", "md-storyful-fse-full"),
              },
              {
                value: slideAuthorDesignationColor,
                onChange: (value) =>
                  setAttributes({ slideAuthorDesignationColor: value }),
                label: __(
                  "Slide Author Designation Color",
                  "md-storyful-fse-full"
                ),
              },
              {
                value: slideTestimonialTextColor,
                onChange: (value) =>
                  setAttributes({ slideTestimonialTextColor: value }),
                label: __(
                  "Slide Testimonial Text Color",
                  "md-storyful-fse-full"
                ),
              },
              {
                value: slideDateOfTestimonialColor,
                onChange: (value) =>
                  setAttributes({ slideDateOfTestimonialColor: value }),
                label: __(
                  "Slide Date Of Testimonial Color",
                  "md-storyful-fse-full"
                ),
              },
              {
                value: subHeadingColor,
                onChange: (value) => setAttributes({ subHeadingColor: value }),
                label: __("Subheading Color", "md-storyful-fse-full"),
              },
              {
                value: ratingTitleColor,
                onChange: (value) => setAttributes({ ratingTitleColor: value }),
                label: __("Rating Title Color", "md-storyful-fse-full"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className="md_customer_stories_section__title">
        {showRating && (
          <div className="md_customer_stories_section__ratingStars">
            {displayReviewStars()}
          </div>
        )}
        {showRatingTitle && (
          <RichText
            tagName="h2"
            value={ratingTitle}
            onChange={(value) => setAttributes({ ratingTitle: value })}
            placeholder={__("Rating Title", "md-prime")}
            style={{ color: ratingTitleColor }}
          />
        )}
      </div>
      <div className="md_customer_stories_section__wrapper">
        <div className="md_customer_stories_section__heading">
          {showSubheading && (
            <RichText
              tagName="p"
              value={subheading}
              onChange={(value) => setAttributes({ subheading: value })}
              placeholder={__("Subheading", "md-prime")}
              style={{ color: subHeadingColor }}
            />
          )}
          {showHeading && (
            <RichText
              tagName="h2"
              value={heading}
              onChange={(value) => setAttributes({ heading: value })}
              placeholder={__("Heading", "md-prime")}
              style={{ color: headingColor }}
            />
          )}
        </div>
        <div className="md_customer_stories_section__sliderItems">
          <div className="md_hero_banner_slider md_customer_stories_grid">
            <Slider {...settings} className="md_slider" ref={sliderRef}>
              {slideItems.map((item, index) => (
                <div
                  className={`md_customer_stories_grid_item active"`}
                  key={index}
                >
                  <div className="md_customer_stories_grid_item__authorDetails">
                    {showSlideAuthorName && (
                      <RichText
                        tagName="h3"
                        className="md_customer_stories_grid_item__authorName"
                        value={item.authorName}
                        onChange={(value) =>
                          updateStaticPostObj(index, "authorName", value)
                        }
                        placeholder={__("Author Name", "md-prime")}
                        style={{ color: slideAuthorNameColor }}
                      />
                    )}
                    {showSlideAuthorDesignation && (
                      <RichText
                        tagName="p"
                        className="md_customer_stories_grid_item__authorDesignation"
                        value={item.authorDesignation}
                        onChange={(value) =>
                          updateStaticPostObj(index, "authorDesignation", value)
                        }
                        placeholder={__("Author Designation", "md-prime")}
                        style={{ color: slideAuthorDesignationColor }}
                      />
                    )}
                  </div>
                  <div className="md_customer_stories_grid_item__inner">
                    <div className="md_customer_stories_grid_item__authorHeading">
                      {showSlideAuthorImage && (
                        <div className="md-prime-block-control image-preview image-controle-visible-hover md_customer_stories_grid_item__authoImage">
                          <div
                            className={`image-controls small-icons icon-center-fixed`}
                          >
                            <MediaUploadCheck>
                              <MediaUpload
                                onSelect={(media) =>
                                  updateStaticPostObj(
                                    index,
                                    "authorImage",
                                    media.url
                                  )
                                }
                                allowedTypes={["image"]}
                                value={item.authorImage}
                                render={({ open }) => (
                                  <>
                                    {item.authorImage ? (
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
                                            onClick={() =>
                                              updateStaticPostObj(
                                                index,
                                                "authorImage",
                                                ""
                                              )
                                            }
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
                                                  "authorImage",
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
                                            text={__(
                                              "Upload Image",
                                              "md-prime"
                                            )}
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
                            src={
                              item.authorImage
                                ? item.authorImage
                                : siteURL + placeholder
                            }
                            alt={"slider"}
                          />
                        </div>
                      )}
                    </div>
                    <div className="md_customer_stories_grid_item__content">
                      {showSlideTestimonialText && (
                        <RichText
                          tagName="p"
                          className="md_customer_stories_grid_item__testimonialText"
                          value={item.testimonialText}
                          onChange={(value) =>
                            updateStaticPostObj(index, "testimonialText", value)
                          }
                          placeholder={__("Testimonial Text", "md-prime")}
                          style={{ color: slideTestimonialTextColor }}
                        />
                      )}
                    </div>
                    <div className="md_customer_stories_grid_item__rating">
                      {showSlideRating && (
                        <div className="md_customer_stories_grid_item__ratingStars">
                          <TextControl
                            label={__("Rating", "md-prime")}
                            value={item.rating}
                            onChange={(value) =>
                              updateStaticPostObj(index, "rating", value)
                            }
                            type="number"
                            min="0"
                            max="5"
                          />
                          <div className="md_customer_stories_grid_item__ratingStars__stars">
                            {displaySlideReviewStars(item.rating)}
                          </div>
                        </div>
                      )}
                      {showSlideDateOfTestimonial && (
                        <div className="md_customer_stories_grid_item__dateOfTestimonial">
                          <RichText
                            tagName="p"
                            value={item.dateOfTestimonial}
                            onChange={(value) =>
                              updateStaticPostObj(
                                index,
                                "dateOfTestimonial",
                                value
                              )
                            }
                            placeholder={__("Date", "md-prime")}
                            style={{ color: slideDateOfTestimonialColor }}
                          />
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
                      <Tooltip text={__("Move Left", "md-crafto-design")}>
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
                      <Tooltip text={__("Move Right", "md-crafto-design")}>
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
      </div>
    </div>
  );
}
