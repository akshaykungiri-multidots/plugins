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
  PanelColorSettings,
} from "@wordpress/block-editor";

import { useState } from "@wordpress/element";

import {
  PanelBody,
  RangeControl,
  ToggleControl,
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
    heading,
    slideItems,
    autoplay,
    arrows,
    dots,
    slideInfinite,
    slideSlidesToShow,
    slideSlidesToScroll,
    testimonialsDescriptionFontColor,
    testimonialsAuthorNameFontColor,
    testimonialsAuthorDesignationFontColor,
    headingFontColor,
    showHeading,
    showTestimonialsDescription,
    showTestimonialsAuthorName,
    showTestimonialsAuthorDesignation,
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

  const testimonialsRef = useRef(null);

  const goToSlide = (index) => {
    if (testimonialsRef.current) {
      testimonialsRef.current.slickGoTo(index);
    }
  };

  const addStaticPostObj = () => {
    const staticPostObj = [
      ...slideItems,
      {
        id: slideItems.length + 1,
        description: "",
        authorName: "",
        authorDesignation: "",
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
        className: "md_testimonials_section",
      })}
    >
      <InspectorControls>
        <PanelBody title={__("Testimonials Settings")}>
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
            label={__("Show Testimonials Description", "md-prime")}
            checked={showTestimonialsDescription}
            onChange={(value) =>
              setAttributes({ showTestimonialsDescription: value })
            }
          />
          <ToggleControl
            label={__("Show Testimonials Author Name", "md-prime")}
            checked={showTestimonialsAuthorName}
            onChange={(value) =>
              setAttributes({ showTestimonialsAuthorName: value })
            }
          />
          <ToggleControl
            label={__("Show Testimonials Author Designation", "md-prime")}
            checked={showTestimonialsAuthorDesignation}
            onChange={(value) =>
              setAttributes({ showTestimonialsAuthorDesignation: value })
            }
          />
        </PanelBody>
        <PanelBody title={__("Color Settings")} initialOpen={false}>
          <PanelColorSettings
            title={__("Color Settings", "md-storyful-fse-full")}
            initialOpen={false}
            colorSettings={[
              {
                value: headingFontColor,
                onChange: (value) => setAttributes({ headingFontColor: value }),
                label: __("Heading Color", "md-storyful-fse-full"),
              },
              {
                value: testimonialsDescriptionFontColor,
                onChange: (value) =>
                  setAttributes({ testimonialsDescriptionFontColor: value }),
                label: __("Description Color", "md-storyful-fse-full"),
              },
              {
                value: testimonialsAuthorNameFontColor,
                onChange: (value) =>
                  setAttributes({ testimonialsAuthorNameFontColor: value }),
                label: __("Author Name Color", "md-storyful-fse-full"),
              },
              {
                value: testimonialsAuthorDesignationFontColor,
                onChange: (value) =>
                  setAttributes({
                    testimonialsAuthorDesignationFontColor: value,
                  }),
                label: __("Author Designation Color", "md-storyful-fse-full"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className="wrapper-inner">
        {showHeading && (
          <div className="md_testimonials_section__heading">
            <RichText
              tagName="h2"
              value={heading}
              onChange={(value) => setAttributes({ heading: value })}
              placeholder={__("Testimonials Heading", "md-prime")}
              style={{ color: headingFontColor }}
            />
          </div>
        )}
        <div className="md_hero_banner_testimonials md_hero_banner_slider md_testimonials_grid">
          <Slider
            {...settings}
            className="md_slider"
            ref={testimonialsRef}
          >
            {slideItems.map((item, index) => (
              <div className={`md_testimonials_grid_item active"`} key={index}>
                <div className={`md_testimonials__item`}>
                  <div className="md_testimonials__item__inner">
                    {showTestimonialsDescription && (
                      <div
                        className="md_testimonials__item__description"
                        style={{ color: testimonialsDescriptionFontColor }}
                      >
                        <RichText
                          tagName="blockquote"
                          value={item.description}
                          onChange={(value) =>
                            updateStaticPostObj(index, "description", value)
                          }
                          placeholder={__(
                            "Testimonials Description",
                            "md-prime"
                          )}
                        />
                      </div>
                    )}
                    <div className="md_testimonials__item__author">
                      {showTestimonialsAuthorName && (
                        <div
                          className="md_testimonials__item__author__name"
                          style={{ color: testimonialsAuthorNameFontColor }}
                        >
                          <RichText
                            tagName="h4"
                            value={item.authorName}
                            onChange={(value) =>
                              updateStaticPostObj(index, "authorName", value)
                            }
                            placeholder={__("Author Name", "md-prime")}
                          />
                        </div>
                      )}
                      {showTestimonialsAuthorDesignation && (
                        <div
                          className="md_testimonials__item__author__designation"
                          style={{
                            color: testimonialsAuthorDesignationFontColor,
                          }}
                        >
                          <RichText
                            tagName="p"
                            value={item.authorDesignation}
                            onChange={(value) =>
                              updateStaticPostObj(
                                index,
                                "authorDesignation",
                                value
                              )
                            }
                            placeholder={__("Author Designation", "md-prime")}
                          />
                        </div>
                      )}
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
                    <Tooltip text={__("Move Left", "md-healthstream")}>
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
                    <Tooltip text={__("Move Right", "md-healthstream")}>
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
  );
}
