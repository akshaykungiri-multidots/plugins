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
} from "@wordpress/block-editor";

import { useState } from "@wordpress/element";

import {
  PanelBody,
  RangeControl,
  ToggleControl,
  Button,
  GradientPicker,
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
    setAttributes({ slideItems: updatedStaticPostObj });
    setCurrentSlide(-1);
  };
  return (
    <div
      {...useBlockProps({
        className: "md_slider_section",
      })}
    >
      <InspectorControls>
        <PanelBody title={__("Slider Items")}>
          <div className="md_slider_section__items">
            {slideItems.map((item, index) => (
              <Button
                key={index}
                isPrimary
                onClick={() => setCurrentSlide(index)}
              >
                {item.title || __("Slide")} {index + 1}
              </Button>
            ))}
            <Button isPrimary onClick={addStaticPostObj}>
              {__("Add Slide")}
            </Button>
          </div>
        </PanelBody>
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
                  />
                  <RichText
                    tagName="p"
                    className="md_slider__item__content__description"
                    value={slideItems[currentSlide].description}
                    onChange={(value) =>
                      updateStaticPostObj(currentSlide, "description", value)
                    }
                    placeholder={__("Enter Description", "md-prime")}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
