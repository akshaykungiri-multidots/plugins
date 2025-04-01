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
    showHeading,
    headingColor,
    slideItems,
    autoplay,
    arrows,
    dots,
    slideInfinite,
    slideSlidesToShow,
    slideSlidesToScroll,
    showCompanyImage,
    showTestimonialText,
    showAuthorImage,
    showAuthorName,
    testimonialTextColor,
    authorNameColor,
    companyList,
    showCompanyList,
    companyListTextColor,
    companyListSubTextColor,
    companyLogos,
    showCompanyLogos,
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
        companyImage: "",
        testimonialText: "",
        authorImage: "",
        authorName: "",
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

  const addStaticCompanyList = () => {
    const staticCompanyList = [
      ...companyList,
      {
        id: companyList.length + 1,
        companyImage: "",
        text: "",
        subText: "",
      },
    ];
    setAttributes({ companyList: staticCompanyList });
  };
  const updateStaticCompanyList = (index, key, value) => {
    const updatedStaticCompanyList = [...companyList];
    updatedStaticCompanyList[index][key] = value;
    setAttributes({ companyList: updatedStaticCompanyList });
  };
  const removeStaticCompanyList = (index) => {
    const updatedStaticCompanyList = [...companyList];
    updatedStaticCompanyList.splice(index, 1);
    setAttributes({ companyList: updatedStaticCompanyList });
  };
  const moveCompanyList = (oldIndex, newIndex) => {
    const arrayCopy = [...companyList];
    arrayCopy[oldIndex] = companyList[newIndex];
    arrayCopy[newIndex] = companyList[oldIndex];

    setAttributes({
      companyList: arrayCopy,
    });
  };

  const addCompanyLogo = () => {
    const companyLogo = [
      ...companyLogos,
      {
        id: companyLogos.length + 1,
        companyLogo: "",
      },
    ];
    setAttributes({ companyLogos: companyLogo });
  }
  const updateCompanyLogo = (index, key, value) => {
    const updatedCompanyLogo = [...companyLogos];
    updatedCompanyLogo[index][key] = value;
    setAttributes({ companyLogos: updatedCompanyLogo });
  };
  const removeCompanyLogo = (index) => {
    const updatedCompanyLogo = [...companyLogos];
    updatedCompanyLogo.splice(index, 1);
    setAttributes({ companyLogos: updatedCompanyLogo });
  };
  const moveCompanyLogo = (oldIndex, newIndex) => {
    const arrayCopy = [...companyLogos];
    arrayCopy[oldIndex] = companyLogos[newIndex];
    arrayCopy[newIndex] = companyLogos[oldIndex];

    setAttributes({
      companyLogos: arrayCopy,
    });
  };

  return (
    <div
      {...useBlockProps({
        className: "md_company_slider_section",
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
            label={__("Show Company Image", "md-prime")}
            checked={showCompanyImage}
            onChange={(value) => setAttributes({ showCompanyImage: value })}
          />
          <ToggleControl
            label={__("Show Testimonial Text", "md-prime")}
            checked={showTestimonialText}
            onChange={(value) => setAttributes({ showTestimonialText: value })}
          />
          <ToggleControl
            label={__("Show Author Image", "md-prime")}
            checked={showAuthorImage}
            onChange={(value) => setAttributes({ showAuthorImage: value })}
          />
          <ToggleControl
            label={__("Show Author Name", "md-prime")}
            checked={showAuthorName}
            onChange={(value) => setAttributes({ showAuthorName: value })}
          />
          <ToggleControl
            label={__("Show Company List", "md-prime")}
            checked={showCompanyList}
            onChange={(value) => setAttributes({ showCompanyList: value })}
          />
          <ToggleControl
            label={__("Show Company Logos", "md-prime")}
            checked={showCompanyLogos}
            onChange={(value) => setAttributes({ showCompanyLogos: value })}
          />
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
                value: testimonialTextColor,
                onChange: (value) =>
                  setAttributes({ testimonialTextColor: value }),
                label: __("Testimonial Text Color", "md-storyful-fse-full"),
              },
              {
                value: authorNameColor,
                onChange: (value) => setAttributes({ authorNameColor: value }),
                label: __("Author Name Color", "md-storyful-fse-full"),
              },
              {
                value: companyListTextColor,
                onChange: (value) =>
                  setAttributes({ companyListTextColor: value }),
                label: __("Company List Text Color", "md-storyful-fse-full"),
              },
              {
                value: companyListSubTextColor,
                onChange: (value) =>
                  setAttributes({ companyListSubTextColor: value }),
                label: __(
                  "Company List Sub Text Color",
                  "md-storyful-fse-full"
                ),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className="md_company_slider_section__heading">
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
      <div className="md_company_slider_section__sliderItems">
        <div className="md_hero_banner_slider md_company_slider_grid">
          <Slider {...settings} className="md_slider" ref={sliderRef}>
            {slideItems.map((item, index) => (
              <div
                className={`md_company_slider_grid_item active"`}
                key={index}
              >
                <div className="md_company_slider_grid_item__inner">
                  {showAuthorImage && (
                    <div className="md-prime-block-control image-preview image-controle-visible-hover md_company_slider_grid_item__authoImage">
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
                        src={
                          item.authorImage
                            ? item.authorImage
                            : siteURL + placeholder
                        }
                        alt={"slider"}
                      />
                    </div>
                  )}
                  <div className="md_company_slider_grid_item__content">
                    {showCompanyImage && (
                      <div className="md-prime-block-control image-preview image-controle-visible-hover md_company_slider_grid_item__companyImage">
                        <div
                          className={`image-controls small-icons icon-center-fixed`}
                        >
                          <MediaUploadCheck>
                            <MediaUpload
                              onSelect={(media) =>
                                updateStaticPostObj(
                                  index,
                                  "companyImage",
                                  media.url
                                )
                              }
                              allowedTypes={["image"]}
                              value={item.companyImage}
                              render={({ open }) => (
                                <>
                                  {item.companyImage ? (
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
                                              "companyImage",
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
                                                "companyImage",
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
                        <img
                          src={
                            item.companyImage
                              ? item.companyImage
                              : siteURL + placeholder
                          }
                          alt={"slider"}
                        />
                      </div>
                    )}
                    {showTestimonialText && (
                      <RichText
                        tagName="p"
                        className="md_company_slider_grid_item__testimonialText"
                        value={item.testimonialText}
                        onChange={(value) =>
                          updateStaticPostObj(index, "testimonialText", value)
                        }
                        placeholder={__("Testimonial Text", "md-prime")}
                        style={{ color: testimonialTextColor }}
                      />
                    )}
                    {showAuthorName && (
                      <RichText
                        tagName="h3"
                        className="md_company_slider_grid_item__authorName"
                        value={item.authorName}
                        onChange={(value) =>
                          updateStaticPostObj(index, "authorName", value)
                        }
                        placeholder={__("Author Name", "md-prime")}
                        style={{ color: authorNameColor }}
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
      <div className="md_company_slider_section__companyList">
        <div className="md_company_slider_section__companyList__container">
          {showCompanyList &&
            companyList.map((item, index) => (
              <div
                className={`md_company_slider_grid_item show-items-hover-wrap`}
                key={index}
              >
                <div className={`item-action-wrap show-items-hover pos-abs`}>
                  <div className="move-item">
                    {0 < index && (
                      <Tooltip text={__("Move Left", "md-putco")}>
                        <span
                          className="dashicons dashicons-arrow-left-alt move-left"
                          onClick={() => moveCompanyList(index, index - 1)}
                          onKeyDown={(event) => {
                            if (event.key === "Enter" || event.key === " ") {
                              moveCompanyList(index, index - 1);
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
                          onClick={() => moveCompanyList(index, index + 1)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              moveCompanyList(index, index + 1);
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
                            removeStaticCompanyList(index);
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
                              removeStaticCompanyList(index);
                            }
                          }
                        }}
                        aria-label={__("Remove this item", "md-prime")}
                      ></i>
                    </Tooltip>
                  )}
                </div>
                <div className="md_company_slider_grid_item__inner">
                  <div className="md-prime-block-control image-preview image-controle-visible-hover md_company_slider_companyList__companyImage">
                    <div
                      className={`image-controls small-icons icon-center-fixed`}
                    >
                      <MediaUploadCheck>
                        <MediaUpload
                          onSelect={(media) =>
                            updateStaticCompanyList(
                              index,
                              "companyImage",
                              media.url
                            )
                          }
                          allowedTypes={["image"]}
                          value={item.companyImage}
                          render={({ open }) => (
                            <>
                              {item.companyImage ? (
                                <>
                                  <Tooltip text={__("Edit Image", "md-prime")}>
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
                                      aria-label={__("Edit image", "md-prime")}
                                    ></i>
                                  </Tooltip>
                                  <Tooltip
                                    text={__("Remove Image", "md-prime")}
                                  >
                                    <i
                                      className="dashicons dashicons-no-alt remove-image"
                                      onClick={() =>
                                        updateStaticCompanyList(
                                          index,
                                          "companyImage",
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
                                          updateStaticCompanyList(
                                            index,
                                            "companyImage",
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
                    <img
                      src={
                        item.companyImage
                          ? item.companyImage
                          : siteURL + placeholder
                      }
                      alt={"slider"}
                    />
                  </div>
                  <div className="md_company_slider_grid_item__content">
                    <RichText
                      tagName="p"
                      className="md_company_slider_grid_item__text"
                      value={item.text}
                      onChange={(value) =>
                        updateStaticCompanyList(index, "text", value)
                      }
                      placeholder={__("Text", "md-prime")}
                      style={{ color: companyListTextColor }}
                    />
                    <RichText
                      tagName="p"
                      className="md_company_slider_grid_item__subText"
                      value={item.subText}
                      onChange={(value) =>
                        updateStaticCompanyList(index, "subText", value)
                      }
                      placeholder={__("Sub Text", "md-prime")}
                      style={{ color: companyListSubTextColor }}
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div
          className="add-item-wrap"
          onClick={addStaticCompanyList}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              addStaticCompanyList();
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
      <div className="md_company_slider_section__companyLogos">
        <div className="md_company_slider_section__companyLogos__container">
          {showCompanyLogos &&
            companyLogos.map((item, index) => (
              <div
                className={`md_company_slider_grid_item show-items-hover-wrap`}
                key={index}
              >
                <div className={`item-action-wrap show-items-hover pos-abs`}>
                  <div className="move-item">
                    {0 < index && (
                      <Tooltip text={__("Move Left", "md-putco")}>
                        <span
                          className="dashicons dashicons-arrow-left-alt move-left"
                          onClick={() => moveCompanyLogo(index, index - 1)}
                          onKeyDown={(event) => {
                            if (event.key === "Enter" || event.key === " ") {
                              moveCompanyLogo(index, index - 1);
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
                          onClick={() => moveCompanyLogo(index, index + 1)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              moveCompanyLogo(index, index + 1);
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
                              __("Are you sure you want to delete this item?", "md-prime")
                            );
                          if (toDelete === true) {
                            removeCompanyLogo(index);
                          }
                        }
                        }
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            // Simulate click behavior for keyboard users
                            e.preventDefault(); // Prevent default action for space key
                            const toDelete =
                              // eslint-disable-next-line no-alert
                              confirm(
                                __("Are you sure you want to delete this item?", "md-prime")
                              );
                            if (toDelete === true) {
                              removeCompanyLogo(index);
                            }
                          }
                        }}
                        aria-label={__("Remove this item", "md-prime")}
                      ></i>
                    </Tooltip>
                  )}
                </div>
                <div className="md_company_slider_grid_item__inner">
                  <div className="md-prime-block-control image-preview image-controle-visible-hover md_company_slider_companyLogos__companyLogo">
                    <div
                      className={`image-controls small-icons icon-center-fixed`}
                    >
                      <MediaUploadCheck>
                        <MediaUpload
                          onSelect={(media) =>
                            updateCompanyLogo(
                              index,
                              "companyLogo",
                              media.url
                            )
                          }
                          allowedTypes={["image"]}
                          value={item.companyLogo}
                          render={({ open }) => (
                            <>
                              {item.companyLogo ? (
                                <>
                                  <Tooltip text={__("Edit Image", "md-prime")}>
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
                                      aria-label={__("Edit image", "md-prime")}
                                    ></i>
                                  </Tooltip>
                                  <Tooltip
                                    text={__("Remove Image", "md-prime")}
                                  >
                                    <i
                                      className="dashicons dashicons-no-alt remove-image"
                                      onClick={() =>
                                        updateCompanyLogo(
                                          index,
                                          "companyLogo",
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
                                          updateCompanyLogo(
                                            index,
                                            "companyLogo",
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
                    <img src={item.companyLogo ? item.companyLogo : siteURL + placeholder} alt={"slider"} />
                  </div>
                </div>
              </div>
            ))}
        </div>
          <div
            className="add-item-wrap"
            onClick={addCompanyLogo}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                addCompanyLogo();
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
