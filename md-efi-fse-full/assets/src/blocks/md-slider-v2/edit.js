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
  PanelColorSettings
} from "@wordpress/block-editor";

import { useState } from "@wordpress/element";

import {
  PanelBody,
  RangeControl,
  ToggleControl,
  Button,
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
    autoplay,
    arrows,
    dots,
    slideInfinite,
    slideSlidesToShow,
    slideSlidesToScroll,
    slideItems,
		sliderTitleFontColor,
		sliderDescriptionFontColor
  } = attributes;

  const [currentSlide, setCurrentSlide] = useState(0);
  const addStaticPostObj = () => {
    const staticPostObj = [
      ...slideItems,
      {
        id: slideItems.length + 1,
        title: "",
        description: "",
        sliderImage: ""
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
            onChange={(autoplay) => setAttributes({ autoplay })}
          />
          <ToggleControl
            label={__("Hide/Show Arrows", "md-prime")}
            checked={arrows}
            onChange={(arrows) => setAttributes({ arrows })}
          />
          <ToggleControl
            label={__("Hide/Show Dots", "md-prime")}
            checked={dots}
            onChange={(dots) => setAttributes({ dots })}
          />
          <ToggleControl
            label={__("Infinite Loop", "md-prime")}
            checked={slideInfinite}
            onChange={(slideInfinite) => setAttributes({ slideInfinite })}
          />
          <RangeControl
            label={__("Slides To Show")}
            value={slideSlidesToShow}
            min={1}
            max={10}
            step={1}
            onChange={(slideSlidesToShow) =>
              setAttributes({ slideSlidesToShow })
            }
          />
          <RangeControl
            label={__("Slides To Scroll")}
            value={slideSlidesToScroll}
            min={1}
            max={10}
            step={1}
            onChange={(slideSlidesToScroll) =>
              setAttributes({ slideSlidesToScroll })
            }
          />
        </PanelBody>
        <PanelBody title={__("Color Settings")} initialOpen={false}>
          <PanelColorSettings
            title={__("Typography Colors", "md-storyful-fse-full")}
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
      <div className="md_hero_banner_slider_v2">
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
          {(currentSlide > -1) && (
            <div className="md_slider__item">
              <div className="md_slider__item__image">
                <MediaUpload
                  onSelect={(media) =>
                    updateStaticPostObj(currentSlide, "sliderImage", media.url)
                  }
                  multiple={false}
                  render={({ open }) => (
                    <>
                      <div>
                        { slideItems[currentSlide].sliderImage === ""
                          ? 
                          <Button onClick={open} variant="primary">{ __("Upload") }</Button>
                          : 
                          ( 
                            <div className="md-prime-image image-preview image-controle-visible-hover">
                              <div className="item-action-wrap image-controls small-icons icon-center-fixed">
                                <i onClick={open} className="dashicons dashicons-edit edit-image"></i>
                                <i onClick={() => updateStaticPostObj(currentSlide, "sliderImage", null)} className="dashicons dashicons-no-alt remove-image"></i>
                              </div>
                              <div className="md-prime-image__inner">
                                {arrows && (
                                  <Button className="slick-prev slick-arrow" tabindex="0">Previous</Button>
                                )}
                                <img src={slideItems[currentSlide].sliderImage} />
                                {arrows && (
                                  <Button className="slick-next slick-arrow" tabindex="0">Next</Button>
                                )}
                              </div>
                            </div> 
                          )
                        }
                      </div>
                    </>
                  )}
                />
              </div>
              <div className="md_slider__item__content">
                <span className="product-offers-carousel__pagination">
                  <span>{currentSlide + 1}</span> / <span>{slideItems.length}</span>
                </span>
                <div className="md_slider__item__content__inner">
                  <RichText
                    tagName="h2"
                    className="md_slider__item__content__title"
                    value={slideItems[currentSlide].title}
                    onChange={(value) =>
                      updateStaticPostObj(currentSlide, "title", value)
                    }
                    placeholder={__("Enter Title", "md-prime")}
                    style={{
                      color: sliderTitleFontColor,
                    }}
                  />
                  <RichText
                    tagName="p"
                    className="md_slider__item__content__description"
                    value={slideItems[currentSlide].description}
                    onChange={(value) =>
                      updateStaticPostObj(currentSlide, "description", value)
                    }
                    placeholder={__("Enter Description", "md-prime")}
                    style={{
                      color: sliderDescriptionFontColor,
                    }}
                  />
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
            <div className="item-title" onClick={() => setCurrentSlide(index)}>
              {__("Slide")} {index + 1}
            </div>
          </div>
        ))}
      </div>
      <div
        className="add-item-wrap"
        onClick={addStaticPostObj}
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
