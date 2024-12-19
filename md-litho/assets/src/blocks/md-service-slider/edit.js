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

import {
  PanelBody,
  Button,
  ToggleControl,
  Tooltip,
  RangeControl,
} from "@wordpress/components";

import placeholder from "./placeholder-image.png";

import { leftAlign, rightAlign } from "../icons";

import Slider from "react-slick";
import { useState, useRef, Fragment } from "@wordpress/element";

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
    subtitle,
    title,
    description,
    services,
    rightBoxHeading,
    rightBoxServices,
    showSubtitle,
    showTitle,
    showDescription,
    showRightBox,
    showServicesSliderImage,
    showServicesSliderTitle,
    showServicesSliderDescription,
    showServicesSliderButton,
    subtitleColor,
    titleColor,
    descriptionColor,
    rightBoxHeadingColor,
    rightBoxServicesColor,
    servicesSliderTitleColor,
    servicesSliderDescriptionColor,
    servicesSliderButtonColor,
    servicesSliderButtonBackgroundColor,
    servicesSliderButtonHoverColor,
    servicesSliderButtonHoverBackgroundColor,
    servicesSliderImagePosition,
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

  const siteURL = window.location.origin;

  const sliderRef = useRef(null);

  const goToSlide = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  const addStaticPostObj = () => {
    const staticPostObj = [
      ...services,
      {
        id: services.length + 1,
        title: "",
        description: "",
        buttonText: "",
        mediaurl: "",
      },
    ];
    setAttributes({ services: staticPostObj });
  };
  const updateStaticPostObj = (index, key, value) => {
    const updatedStaticPostObj = [...services];
    updatedStaticPostObj[index][key] = value;
    setAttributes({ services: updatedStaticPostObj });
  };
  const removeStaticPostObj = (index) => {
    const updatedStaticPostObj = [...services];
    updatedStaticPostObj.splice(index, 1);
    if (currentSlide >= updatedStaticPostObj.length) {
      goToSlide(updatedStaticPostObj.length - 1);
    }
    setAttributes({ services: updatedStaticPostObj });
  };
  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...services];
    arrayCopy[oldIndex] = services[newIndex];
    arrayCopy[newIndex] = services[oldIndex];

    setAttributes({
      services: arrayCopy,
    });
  };

  const addRightBoxItem = () => {
    const rightBoxItem = [
      ...rightBoxServices,
      {
        id: rightBoxServices.length + 1,
        title: "",
      },
    ];
    setAttributes({ rightBoxServices: rightBoxItem });
  };

  const updateRightBoxItem = (index, key, value) => {
    const updatedRightBoxItem = [...rightBoxServices];
    updatedRightBoxItem[index][key] = value;
    setAttributes({ rightBoxServices: updatedRightBoxItem });
  };

  const removeRightBoxItem = (index) => {
    const updatedRightBoxItem = [...rightBoxServices];
    updatedRightBoxItem.splice(index, 1);
    setAttributes({ rightBoxServices: updatedRightBoxItem });
  };

  const moveRightBoxItem = (oldIndex, newIndex) => {
    const arrayCopy = [...rightBoxServices];
    arrayCopy[oldIndex] = rightBoxServices[newIndex];
    arrayCopy[newIndex] = rightBoxServices[oldIndex];

    setAttributes({
      rightBoxServices: arrayCopy,
    });
  };

  return (
    <div {...useBlockProps()}>
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
            label={__("Show Subtitle", "md-prime")}
            checked={showSubtitle}
            onChange={(value) => setAttributes({ showSubtitle: value })}
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
          <ToggleControl
            label={__("Show Right Box", "md-prime")}
            checked={showRightBox}
            onChange={(value) => setAttributes({ showRightBox: value })}
          />
          <ToggleControl
            label={__("Show Services Slider Title", "md-prime")}
            checked={showServicesSliderTitle}
            onChange={(value) =>
              setAttributes({ showServicesSliderTitle: value })
            }
          />
          <ToggleControl
            label={__("Show Services Slider Description", "md-prime")}
            checked={showServicesSliderDescription}
            onChange={(value) =>
              setAttributes({ showServicesSliderDescription: value })
            }
          />
          <ToggleControl
            label={__("Show Services Slider Button", "md-prime")}
            checked={showServicesSliderButton}
            onChange={(value) =>
              setAttributes({ showServicesSliderButton: value })
            }
          />
          <ToggleControl
            label={__("Show Services Slider Image", "md-prime")}
            checked={showServicesSliderImage}
            onChange={(value) =>
              setAttributes({ showServicesSliderImage: value })
            }
          />
          {showServicesSliderImage && (
            <div className="setting-row inspector-field inspector-field-alignment">
              <label htmlFor="alignment" className="inspector-mb-0">
                {__("Media Position")}
              </label>
              <div className="inspector-field-button-list inspector-field-button-list-fluid">
                <button
                  className={
                    "left" === servicesSliderImagePosition
                      ? "active inspector-button"
                      : " inspector-button"
                  }
                  onClick={() =>
                    setAttributes({ servicesSliderImagePosition: "left" })
                  }
                >
                  {leftAlign}
                </button>
                <button
                  className={
                    "right" === servicesSliderImagePosition
                      ? "active inspector-button"
                      : " inspector-button"
                  }
                  onClick={() =>
                    setAttributes({ servicesSliderImagePosition: "right" })
                  }
                >
                  {rightAlign}
                </button>
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
                value: subtitleColor,
                onChange: (value) => setAttributes({ subtitleColor: value }),
                label: __("Subtitle Color", "md-storyful-fse-full"),
              },
              {
                value: titleColor,
                onChange: (value) => setAttributes({ titleColor: value }),
                label: __("Title Color", "md-storyful-fse-full"),
              },
              {
                value: descriptionColor,
                onChange: (value) => setAttributes({ descriptionColor: value }),
                label: __("Description Color", "md-storyful-fse-full"),
              },
              {
                value: rightBoxHeadingColor,
                onChange: (value) =>
                  setAttributes({ rightBoxHeadingColor: value }),
                label: __("Right Box Heading Color", "md-storyful-fse-full"),
              },
              {
                value: rightBoxServicesColor,
                onChange: (value) =>
                  setAttributes({ rightBoxServicesColor: value }),
                label: __("Right Box Services Color", "md-storyful-fse-full"),
              },
              {
                value: servicesSliderTitleColor,
                onChange: (value) =>
                  setAttributes({ servicesSliderTitleColor: value }),
                label: __(
                  "Services Slider Title Color",
                  "md-storyful-fse-full"
                ),
              },
              {
                value: servicesSliderDescriptionColor,
                onChange: (value) =>
                  setAttributes({ servicesSliderDescriptionColor: value }),
                label: __(
                  "Services Slider Description Color",
                  "md-storyful-fse-full"
                ),
              },
              {
                value: servicesSliderButtonColor,
                onChange: (value) =>
                  setAttributes({ servicesSliderButtonColor: value }),
                label: __(
                  "Services Slider Button Color",
                  "md-storyful-fse-full"
                ),
              },
              {
                value: servicesSliderButtonBackgroundColor,
                onChange: (value) =>
                  setAttributes({ servicesSliderButtonBackgroundColor: value }),
                label: __(
                  "Services Slider Button Background Color",
                  "md-storyful-fse-full"
                ),
              },
              {
                value: servicesSliderButtonHoverColor,
                onChange: (value) =>
                  setAttributes({ servicesSliderButtonHoverColor: value }),
                label: __(
                  "Services Slider Button Hover Color",
                  "md-storyful-fse-full"
                ),
              },
              {
                value: servicesSliderButtonHoverBackgroundColor,
                onChange: (value) =>
                  setAttributes({
                    servicesSliderButtonHoverBackgroundColor: value,
                  }),
                label: __(
                  "Services Slider Button Hover Background Color",
                  "md-storyful-fse-full"
                ),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <style>
        {`
          .md_service_slider__slider .md_service_slider__item__content__button-wrap .md-btn-main {
            color: ${servicesSliderButtonColor};
            background-color: ${servicesSliderButtonBackgroundColor};
          }
          .md_service_slider__slider .md_service_slider__item__content__button-wrap .md-btn-main:hover {
            color: ${servicesSliderButtonHoverColor} !important;
            background-color: ${servicesSliderButtonHoverBackgroundColor} !important;
          }
        `}
      </style>
      <div className="md_service_slider__wrapper" style={{ flexDirection: `${servicesSliderImagePosition === "right" ? "row-reverse" : "row"}` }}>
        <div className="md_service_slider__slider__content">
          <div className="md_service_slider__heading">
            {showSubtitle && (
              <RichText
                tagName="h4"
                className="md_service_slider__subtitle"
                value={subtitle}
                onChange={(value) => setAttributes({ subtitle: value })}
                style={{ color: subtitleColor }}
                placeholder={__("Enter Subtitle", "md-prime")}
              />
            )}
            {showTitle && (
              <RichText
                tagName="h2"
                className="md_service_slider__title"
                value={title}
                onChange={(value) => setAttributes({ title: value })}
                style={{ color: titleColor }}
                placeholder={__("Enter Title", "md-prime")}
              />
            )}
            {showDescription && (
              <RichText
                tagName="p"
                className="md_service_slider__description"
                value={description}
                onChange={(value) => setAttributes({ description: value })}
                style={{ color: descriptionColor }}
                placeholder={__("Enter Description", "md-prime")}
              />
            )}
          </div>
          <div className="md_service_slider__slider">
            <div className="md_service_banner_slider md_slider_grid">
              <Slider {...settings} className="md_slider" ref={sliderRef}>
                {services.map((item, index) => (
                  <div
                    className={`md_service_slider_grid_item active"`}
                    key={index}
                  >
                    <div className={`md_service_slider__item`}>
                      {showServicesSliderImage && (
                        <div className="md_litho_image_banner_v2__media">
                          <div className="md-prime-block-control image-preview image-controle-visible-hover md_litho_image_banner_v2__media1">
                            <div
                              className={`image-controls small-icons icon-center-fixed`}
                            >
                              <MediaUploadCheck>
                                <MediaUpload
                                  onSelect={(media) =>
                                    updateStaticPostObj(
                                      index,
                                      "mediaurl",
                                      media.url
                                    )
                                  }
                                  allowedTypes={["image"]}
                                  value={item.mediaurl}
                                  render={({ open }) => (
                                    <>
                                      {item.mediaurl ? (
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
                                            text={__(
                                              "Remove Image",
                                              "md-prime"
                                            )}
                                          >
                                            <i
                                              className="dashicons dashicons-no-alt remove-image"
                                              onClick={() =>
                                                updateStaticPostObj(
                                                  index,
                                                  "mediaurl",
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
                                                    "mediaurl",
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
                                item.mediaurl
                                  ? item.mediaurl
                                  : siteURL + placeholder
                              }
                              alt={"slider"}
                            />
                          </div>
                        </div>
                      )}
                      <div className="md_service_slider__item__content">
                        {showServicesSliderTitle && (
                          <RichText
                            tagName="h1"
                            className="md_service_slider__item__content__title"
                            value={item.title}
                            onChange={(value) =>
                              updateStaticPostObj(index, "title", value)
                            }
                            placeholder={__("Enter Title", "md-prime")}
                            style={{
                              color: servicesSliderTitleColor,
                            }}
                          />
                        )}
                        {showServicesSliderDescription && (
                          <RichText
                            tagName="p"
                            className="md_service_slider__item__content__description"
                            value={item.description}
                            onChange={(value) =>
                              updateStaticPostObj(index, "description", value)
                            }
                            placeholder={__("Enter Description", "md-prime")}
                            style={{
                              color: servicesSliderDescriptionColor,
                            }}
                          />
                        )}
                        {showServicesSliderButton && (
                          <div className="md_service_slider__item__content__button-wrap">
                            <RichText
                              tagName="span"
                              className="md_service_slider__item__content__button md-btn-main"
                              value={item.buttonText}
                              onChange={(value) =>
                                updateStaticPostObj(index, "buttonText", value)
                              }
                              placeholder={__("Enter Button Text", "md-prime")}
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
              {services.map((item, index) => (
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
                        <Tooltip text={__("Move Left", "md-litho")}>
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
                      {index + 1 < services.length && (
                        <Tooltip text={__("Move Right", "md-litho")}>
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
                    {1 < services.length && (
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
        {showRightBox && (
          <div className="md_service_slider__right_box">
            <div className="md_service_slider__right_box__inner">
              <div className="md_service_slider__right_box__heading">
                <RichText
                  tagName="h2"
                  className="md_service_slider__right_box__heading__title"
                  value={rightBoxHeading}
                  onChange={(value) => setAttributes({ rightBoxHeading: value })}
                  style={{ color: rightBoxHeadingColor }}
                  placeholder={__("Enter Right Box Heading", "md-prime")}
                />
              </div>
              <div className="md_service_slider__right_box__services">
                {rightBoxServices.map((item, index) => (
                  <div
                    className="md_service_slider__right_box__services__item show-items-hover-wrap"
                    key={index}
                  >
                    <div className="item-action-wrap show-items-hover pos-abs">
                      <div className="move-item">
                        {0 < index && (
                          <Tooltip text={__("Move Left", "md-litho")}>
                            <span
                              className="dashicons dashicons-arrow-left-alt move-left"
                              onClick={() => moveRightBoxItem(index, index - 1)}
                              onKeyDown={(event) => {
                                if (event.key === "Enter" || event.key === " ") {
                                  moveRightBoxItem(index, index - 1);
                                }
                              }}
                              role="button"
                              tabIndex={0}
                              aria-label="Move item left"
                            ></span>
                          </Tooltip>
                        )}
                        {index + 1 < rightBoxServices.length && (
                          <Tooltip text={__("Move Right", "md-litho")}>
                            <span
                              className="dashicons dashicons-arrow-right-alt move-right"
                              role="button"
                              tabIndex={0}
                              onClick={() => moveRightBoxItem(index, index + 1)}
                              onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                  moveRightBoxItem(index, index + 1);
                                }
                              }}
                              aria-label="Move item right"
                            ></span>
                          </Tooltip>
                        )}
                      </div>
                      {1 < rightBoxServices.length && (
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
                                removeRightBoxItem(index);
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
                                  removeRightBoxItem(index);
                                }
                              }
                            }}
                            aria-label={__("Remove this item", "md-prime")}
                          ></i>
                        </Tooltip>
                      )}
                    </div>
                    <RichText
                      tagName="p"
                      className="md_service_slider__right_box__services__item__title"
                      value={item.title}
                      onChange={(value) =>
                        updateRightBoxItem(index, "title", value)
                      }
                      style={{ color: rightBoxServicesColor }}
                      placeholder={__(
                        "Enter Right Box Service Title",
                        "md-prime"
                      )}
                    />
                  </div>
                ))}
              </div>
              <div
                className="add-item-wrap"
                onClick={addRightBoxItem}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    addRightBoxItem();
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
        )}
      </div>
    </div>
  );
}
