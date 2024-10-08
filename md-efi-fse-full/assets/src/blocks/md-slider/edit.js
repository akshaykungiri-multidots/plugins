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
        link: "",
        backgroundImage: "",
        boxColor: null,
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
                {__("Slide")} {index + 1}
              </Button>
            ))}
            <Button isPrimary onClick={addStaticPostObj}>
              {__("Add New Slide")}
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
        {currentSlide > -1 && (
          <PanelBody title={__("Current Slide Settings")}>
            <label>{__("Background Image")}</label>
            <MediaUpload
              title={__("Background Image")}
              onSelect={(media) =>
                updateStaticPostObj(currentSlide, "backgroundImage", media.url)
              }
              multiple={false}
              render={({ open }) => (
                <>
                  <Button className="md_bg_image_upload" onClick={open}>
                    {slideItems[currentSlide].backgroundImage == "" ? (
                      <i className="dashicons dashicons-format-image"> </i>
                    ) : (
                      <img src={slideItems[currentSlide].backgroundImage} />
                    )}
                  </Button>
                </>
              )}
            />
            <label>{__("Box Background Color")}</label>
            <GradientPicker
              value={
                slideItems[currentSlide].boxColor !== undefined
                  ? slideItems[currentSlide].boxColor
                  : null
              }
              label={__("Box Color")}
              onChange={(color) =>
                updateStaticPostObj(currentSlide, "boxColor", color)
              }
              gradients={[
                {
                  name: "gradient1",
                  gradient:
                    "linear-gradient(298.12deg, #11152c 14.52%, #145980 105.31%)",
                  slug: "gradient1",
                },
                {
                  name: "Moonlit Asteroid",
                  gradient:
                    "linear-gradient(135deg,#0F2027 0%, #203A43 0%, #2c5364 100%)",
                  slug: "moonlit-asteroid",
                },
                {
                  name: "Rastafarie",
                  gradient:
                    "linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)",
                  slug: "rastafari",
                },
              ]}
            />
            <Button
              isDestructive
              onClick={() => removeStaticPostObj(currentSlide)}
            >
              {__("Delete Slide")}
            </Button>
          </PanelBody>
        )}
      </InspectorControls>
      <div className="md_hero_banner_slider">
        <div
          className="md_slider"
          data-autoplay={autoplay}
          data-arrows={arrows}
          data-dots={dots}
          data-infinite={slideInfinite}
          data-slidesToShow={slideSlidesToShow}
          data-slidesToScroll={slideSlidesToScroll}
        >
          {(currentSlide > -1) && (
            <div className="md_slider__item">
              {slideItems[currentSlide].backgroundImage && (
                <img
                  className="md_slider__item__bg"
                  src={slideItems[currentSlide].backgroundImage}
                  alt="slide"
                />
              )}
              <div className="md_slider__item__content" style={{background: slideItems[currentSlide].boxColor}}>
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
                  <div className="md_slider__item__content__btn md_btn_arrow">
                    <RichText
                      tagName="p"
                      value={slideItems[currentSlide].link}
                      onChange={(value) =>
                        updateStaticPostObj(currentSlide, "link", value)
                      }
                      placeholder={__("Enter Button Text", "md-prime")}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
