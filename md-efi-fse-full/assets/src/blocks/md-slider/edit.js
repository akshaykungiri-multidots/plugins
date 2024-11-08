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
  PanelColorSettings,
} from "@wordpress/block-editor";

import { useState } from "@wordpress/element";

import {
  PanelBody,
  RangeControl,
  ToggleControl,
  Button,
  GradientPicker,
  Tooltip,
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
    sliderDescriptionFontColor,
    sliderLinkFontColor,
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
        <PanelBody title={__("Slider Settings")}>
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
        {currentSlide > -1 && (
          <PanelBody title={__("Current Slide Settings")} initialOpen={false}>
            <div className="setting-row">
              <label htmlFor="background-image">
                {__("Background Image", "md-prime")}
              </label>
              <div>
                {!slideItems[currentSlide].backgroundImage ? (
                  <MediaUpload
                    onSelect={(media) => {
                      updateStaticPostObj(currentSlide, "backgroundImage", media.url)
                    }}
                    allowedTypes={["image"]}
                    value={slideItems[currentSlide].background_image}
                    render={({ open }) => (
                      <Button onClick={open} className="button button-large">
                        {__("Upload Image", "md-prime")}
                      </Button>
                    )}
                  />
                ) : (
                  <>
                    <div className="image-preview">
                      <img
                        src={slideItems[currentSlide].backgroundImage}
                        alt="Background-image-preview"
                      />
                    </div>
                    <Button
                      onClick={() => {
                        updateStaticPostObj(currentSlide, "backgroundImage", "")
                      }}
                      className="is-link is-destructive"
                    >
                      {__("Remove Image", "md-prime")}
                    </Button>
                  </>
                )}
              </div>
            </div>
            <label htmlFor="box-background-color">{__("Box Background Color")}</label>
            <GradientPicker
              id="box-background-color"
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
        <PanelBody title={__("Color Settings")} initialOpen={false}>
        <PanelColorSettings
          title={__("Color Settings", "md-storyful-fse-full")}
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
            },
            {
              value: sliderLinkFontColor,
              onChange: (newColor) =>
                setAttributes({ sliderLinkFontColor: newColor }),
              label: __("Slider Link Font Color"),
            },
          ]}
        />
        </PanelBody>
      </InspectorControls>
      <div className="md_hero_banner_slider md_slider_grid">
        <div
          className="md_slider"
          data-autoplay={autoplay}
          data-arrows={arrows}
          data-dots={dots}
          data-infinite={slideInfinite}
          data-slidesToShow={slideSlidesToShow}
          data-slidesToScroll={slideSlidesToScroll}
        >
          {slideItems.map((item, index) => (
            <div
              className={`md_slider_grid_item ${
                currentSlide === index ? "active" : ""
              }`}
              key={index}
            >
              <div className={`md_slider__item`}>
                {item.backgroundImage && (
                  <img
                    className="md_slider__item__bg"
                    src={item.backgroundImage}
                    alt="slide"
                  />
                )}
                <div
                  className="md_slider__item__content"
                  style={{ background: item.boxColor }}
                >
                  <div className="md_slider__item__content__inner">
                    <RichText
                      tagName="h2"
                      className="md_slider__item__content__title"
                      value={item.title}
                      onChange={(value) =>
                        updateStaticPostObj(index, "title", value)
                      }
                      placeholder={__("Enter Title", "md-prime")}
                      style={{
                        color: sliderTitleFontColor,
                      }}
                    />
                    <RichText
                      tagName="p"
                      className="md_slider__item__content__description"
                      value={item.description}
                      onChange={(value) =>
                        updateStaticPostObj(index, "description", value)
                      }
                      placeholder={__("Enter Description", "md-prime")}
                      style={{
                        color: sliderDescriptionFontColor,
                      }}
                    />
                    <div className="md_slider__item__content__btn md_btn_arrow">
                      <RichText
                        tagName="p"
                        value={item.link}
                        onChange={(value) =>
                          updateStaticPostObj(index, "link", value)
                        }
                        placeholder={__("Enter Button Text", "md-prime")}
                        style={{
                          color: sliderLinkFontColor,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
