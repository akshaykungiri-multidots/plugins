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
  TextControl,
  Tooltip
} from "@wordpress/components";

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
    enableHeading,
    heading,
    autoplay,
    arrows,
    dots,
    slideInfinite,
    slideSlidesToShow,
    slideSlidesToScroll,
    slideItems,
    headingFontColor,
    sliderCompanyNameFontColor,
    sliderTestimonialFontColor,
    sliderAuthorNameFontColor,
    sliderDesignationFontColor,
    sliderVideoLinkFontColor,
    sliderReadMoreLinkFontColor,
  } = attributes;

  const [currentSlide, setCurrentSlide] = useState(0);
  const addStaticPostObj = () => {
    const staticPostObj = [
      ...slideItems,
      {
        id: slideItems.length + 1,
        companyName: "",
        testimonial: "",
        authorName: "",
        designation: "",
        videoLink: "",
        readMoreLink: "",
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
      setCurrentSlide(updatedStaticPostObj.length - 1); // Set to last slide if current is out of bounds
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
        <PanelBody title={__("General Settings")}>
          <ToggleControl
            label={__("Enable Heading", "md-prime")}
            checked={enableHeading}
            onChange={(value) => setAttributes({ enableHeadin: value })}
          />
          {enableHeading && (
            <TextControl
              label={__("Heading")}
              value={heading}
              onChange={(value) => setAttributes({ heading: value })}
              placeholder={__("Enter Heading", "md-prime")}
            />
          )}
        </PanelBody>
        <PanelBody title={__("Slider Settings")} initialOpen={false}>
          <ToggleControl
            label={__("Autoplay", "md-prime")}
            checked={autoplay}
            onChange={(value) => setAttributes({ autoplay: value })}
          />
          <ToggleControl
            label={__("Hide/Show Arrows", "md-prime")}
            checked={arrows}
            onChange={(value) => setAttributes({ arrows: value })}
          />
          <ToggleControl
            label={__("Hide/Show Dots", "md-prime")}
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
            onChange={(value) =>
              setAttributes({ slideSlidesToShow: value })
            }
          />
          <RangeControl
            label={__("Slides To Scroll")}
            value={slideSlidesToScroll}
            min={1}
            max={10}
            step={1}
            onChange={(value) =>
              setAttributes({ slideSlidesToScroll: value })
            }
          />
        </PanelBody>
        <PanelBody
          title={__("Color Settings", "md-storyful-fse-full")}
          initialOpen={false}
        >
          <PanelColorSettings
            title={__("Color Settings", "md-storyful-fse-full")}
            initialOpen={false}
            colorSettings={[
              {
                value: headingFontColor,
                onChange: (value) =>
                  setAttributes({ headingFontColor: value }),
                label: __("Heading Font Color"),
              },
              {
                value: sliderCompanyNameFontColor,
                onChange: (value) =>
                  setAttributes({ sliderCompanyNameFontColor: value }),
                label: __("Slider Company Name Font Color"),
              },
              {
                value: sliderTestimonialFontColor,
                onChange: (value) =>
                  setAttributes({ sliderTestimonialFontColor: value }),
                label: __("Slider Testimonial Font Color"),
              },
              {
                value: sliderAuthorNameFontColor,
                onChange: (value) =>
                  setAttributes({ sliderAuthorNameFontColor: value }),
                label: __("Slider Author Name Font Color"),
              },
              {
                value: sliderDesignationFontColor,
                onChange: (value) =>
                  setAttributes({ sliderDesignationFontColor: value }),
                label: __("Slider Designation Font Color"),
              },
              {
                value: sliderVideoLinkFontColor,
                onChange: (value) =>
                  setAttributes({ sliderVideoLinkFontColor: value }),
                label: __("Slider Video Link Font Color"),
              },
              {
                value: sliderReadMoreLinkFontColor,
                onChange: (value) =>
                  setAttributes({ sliderReadMoreLinkFontColor: value }),
                label: __("Slider Read More Link Font Color"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className="md_hero_banner_slider_v3">
        <div
          className="md_slider"
          data-autoplay={autoplay}
          data-arrows={arrows}
          data-dots={dots}
          data-infinite={slideInfinite}
          data-slidesToShow={slideSlidesToShow}
          data-slidesToScroll={slideSlidesToScroll}
          data-centerMode="true"
        >
          {currentSlide > -1 && (
            <div className="md_slider__item">
              <div className="md_slider__item__gradient_theme"></div>
              <div className="md_slider__item--inner">
                <h3
                  style={{ color: headingFontColor }}
                >
                  {heading}
                </h3>
                <div className="md_slider__item__company_info">
                  <RichText
                    tagName="h2"
                    className="md_slider__item__company_name h4"
                    value={slideItems[currentSlide].companyName}
                    onChange={(value) =>
                      updateStaticPostObj(currentSlide, "companyName", value)
                    }
                    placeholder={__("Enter Company Name", "md-prime")}
                    style={{
                      color: sliderCompanyNameFontColor,
                    }}
                  />
                </div>
                <div className="md_slider__item__testimonial">
                  <RichText
                    tagName="blockquote"
                    className="md_slider__item__testimonial__content"
                    value={slideItems[currentSlide].testimonial}
                    onChange={(value) =>
                      updateStaticPostObj(currentSlide, "testimonial", value)
                    }
                    placeholder={__("Enter Testimonial", "md-prime")}
                    style={{
                      color: sliderTestimonialFontColor,
                    }}
                  />
                  <div className="md_slider__item__testimonial__info">
                    <div className="md_slider__item__testimonial__author">
                      <RichText
                        tagName="h4"
                        className="md_slider__item__testimonial__author__name"
                        value={slideItems[currentSlide].authorName}
                        onChange={(value) =>
                          updateStaticPostObj(currentSlide, "authorName", value)
                        }
                        placeholder={__("Enter Author Name", "md-prime")}
                        style={{
                          color: sliderAuthorNameFontColor,
                        }}
                      />
                      <RichText
                        tagName="p"
                        className="md_slider__item__testimonial__author__designation"
                        value={slideItems[currentSlide].designation}
                        onChange={(value) =>
                          updateStaticPostObj(
                            currentSlide,
                            "designation",
                            value
                          )
                        }
                        placeholder={__("Enter Designation", "md-prime")}
                        style={{
                          color: sliderDesignationFontColor,
                        }}
                      />
                    </div>
                    <RichText
                      tagName="div"
                      className="md_slider__item__testimonial__video"
                      value={slideItems[currentSlide].videoLink}
                      onChange={(value) =>
                        updateStaticPostObj(currentSlide, "videoLink", value)
                      }
                      placeholder={__("Enter Video Link", "md-prime")}
                      style={{
                        color: sliderVideoLinkFontColor,
                      }}
                    />
                    <div className="md_slider__item__testimonial__read_more btn-has-right-arrow btn-main-border">
                      <RichText
                        tagName="p"
                        className="btn-main"
                        value={slideItems[currentSlide].readMoreLink}
                        onChange={(value) =>
                          updateStaticPostObj(
                            currentSlide,
                            "readMoreLink",
                            value
                          )
                        }
                        placeholder={__("Enter Read More Link", "md-prime")}
                        style={{
                          color: sliderReadMoreLinkFontColor,
                        }}
                      />
                    </div>
                  </div>
                  <div className="md_slider__item__count">
                    <span>{currentSlide + 1}</span> /{" "}
                    <span>{slideItems.length}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
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
                  <Tooltip text={__("Move Left", "md-efi-fse-full")}>
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
                  <Tooltip text={__("Move Right", "md-efi-fse-full")}>
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
              onClick={() => setCurrentSlide(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setCurrentSlide(index);
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
