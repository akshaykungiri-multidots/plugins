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
  TextControl,
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
    heading,
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
        <PanelBody title={__("General Settings")}>
          <TextControl
            label={__("Heading")}
            value={heading}
            onChange={(heading) => setAttributes({ heading })}
            placeholder={__("Enter Heading", "md-prime")}
          />
        </PanelBody>
        <PanelBody title={__("Slider Items")}>
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
                <h3>{heading}</h3>
                <div className="md_slider__item__company_info">
                  <RichText
                    tagName="h2"
                    className="md_slider__item__company_name h4"
                    value={slideItems[currentSlide].companyName}
                    onChange={(value) =>
                      updateStaticPostObj(currentSlide, "companyName", value)
                    }
                    placeholder={__("Enter Company Name", "md-prime")}
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
    </div>
  );
}
