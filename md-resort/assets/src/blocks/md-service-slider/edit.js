/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/
 */
import {
  useBlockProps,
  InspectorControls,
  PanelColorSettings,
  RichText,
} from "@wordpress/block-editor";

/**
 * React hook that is used to mark the components element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/
 */
import {
  PanelBody,
  RangeControl,
  ToggleControl,
} from "@wordpress/components";

import { useEffect, useState, useRef } from "react";
import "./editor.scss";

import Slider from "react-slick";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param root0
 * @param root0.attributes
 * @param root0.attributes.heading
 * @param root0.setAttributes
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes, className }) {
  const {
    subHeading,
    heading,
    headingContent,
    autoplay,
    arrows,
    dots,
    slideInfinite,
    slideSlidesToShow,
    slideSlidesToScroll,
    showHeading,
    showSubHeading,
    showContent,
    subHeadingColor,
    headingColor,
    contentColor,
    serviceTitleColor,
    serviceSubTitleColor,
    serviceCategoryColor,
    serviceCategoryBgColor,
    footerText,
    footerTextColor,
    showFooter,
  } = attributes;

  const settings = {
    dots,
    arrows: false,
    slidesToShow: slideSlidesToShow,
    slidesToScroll: slideSlidesToScroll,
    infinite: slideInfinite,
    autoplay,
    speed: 1000,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  const sliderRef = useRef(null);

  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    wp.apiFetch({ path: "md-resort/v1/service-posts" }).then((data) => {
      setServiceData(data);
    });
  }, []);

  return (
    <div {...useBlockProps()}>
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-resort")}>
          <ToggleControl
            label={__("Show Heading", "md-resort")}
            checked={showHeading}
            onChange={(value) => setAttributes({ showHeading: value })}
          />
          <ToggleControl
            label={__("Show Sub Heading", "md-resort")}
            checked={showSubHeading}
            onChange={(value) => setAttributes({ showSubHeading: value })}
          />
          <ToggleControl
            label={__("Show Content", "md-resort")}
            checked={showContent}
            onChange={(value) => setAttributes({ showContent: value })}
          />
          <ToggleControl
            label={__("Show Footer", "md-resort")}
            checked={showFooter}
            onChange={(value) => setAttributes({ showFooter: value })}
          />
        </PanelBody>
        <PanelBody title={__("Slider Settings")} initialOpen={false}>
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
        <PanelBody title={__("Color Settings")} initialOpen={false}>
          <PanelColorSettings
            title={__("Color Settings", "md-resort")}
            colorSettings={[
              {
                value: subHeadingColor,
                onChange: (colorValue) =>
                  setAttributes({ subHeadingColor: colorValue }),
                label: __("Sub Heading Color", "md-resort"),
              },
              {
                value: headingColor,
                onChange: (colorValue) =>
                  setAttributes({ headingColor: colorValue }),
                label: __("Heading Color", "md-resort"),
              },
              {
                value: contentColor,
                onChange: (colorValue) =>
                  setAttributes({ contentColor: colorValue }),
                label: __("Content Color", "md-resort"),
              },
              {
                value: serviceTitleColor,
                onChange: (colorValue) =>
                  setAttributes({ serviceTitleColor: colorValue }),
                label: __("Service Title Color", "md-resort"),
              },
              {
                value: serviceSubTitleColor,
                onChange: (colorValue) =>
                  setAttributes({ serviceSubTitleColor: colorValue }),
                label: __("Service Sub Title Color", "md-resort"),
              },
              {
                value: serviceCategoryColor,
                onChange: (colorValue) =>
                  setAttributes({ serviceCategoryColor: colorValue }),
                label: __("Service Category Color", "md-resort"),
              },
              {
                value: serviceCategoryBgColor,
                onChange: (colorValue) =>
                  setAttributes({ serviceCategoryBgColor: colorValue }),
                label: __("Service Category BG Color", "md-resort"),
              },
              {
                value: footerTextColor,
                onChange: (colorValue) =>
                  setAttributes({ footerTextColor: colorValue }),
                label: __("Footer Text Color", "md-resort"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className="service-slider">
        <div className="service-slider__inner">
          <div className="service-slider__content">
            <div className="service-slider__heading_wrapper">
              {showSubHeading && (
                <RichText
                  tagName="h4"
                  value={subHeading}
                  onChange={(value) => setAttributes({ subHeading: value })}
                  placeholder={__("Sub Heading", "md-resort")}
                  style={{ color: subHeadingColor }}
                  className="service-slider__sub-heading"
                />
              )}
              {showHeading && (
                <RichText
                  tagName="h2"
                  value={heading}
                  onChange={(value) => setAttributes({ heading: value })}
                  placeholder={__("Heading", "md-resort")}
                  style={{ color: headingColor }}
                  className="service-slider__heading"
                />
              )}
            </div>
            {showContent && (
              <RichText
                tagName="div"
                value={headingContent}
                onChange={(value) => setAttributes({ headingContent: value })}
                placeholder={__("Content", "md-resort")}
                style={{ color: contentColor }}
                className="service-slider__heading-content"
              />
            )}
            {arrows && (
              <div className="service-slider__slick_arrows">
                <button
                  type="button"
                  className="slick-prev"
                  onClick={() => sliderRef.current.slickPrev()}
                >
                  <i className="fa fa-angle-left"></i>
                </button>
                <button
                  type="button"
                  className="slick-next"
                  onClick={() => sliderRef.current.slickNext()}
                >
                  <i className="fa fa-angle-right"></i>
                </button>
              </div>
            )}
          </div>
          <div className="service-slider__slider">
            <Slider
              {...settings}
              className="service-slider__slider-inner md_slider"
              ref={sliderRef}
            >
              {serviceData.map((service, index) => (
                <div className="service-slider__slide" key={index}>
                  {service.thumbnail && (
                    <img src={service.thumbnail} alt={service.title} />
                  )}
                  <div className="opacity-very-light bg-slate-blue"></div>
                  <div className="service-slider__slide-content">
                    {service.icon && (
                      <div className="service-slider__slide-icon">
                        <i className={`fa ${service.icon}`}></i>
                      </div>
                    )}
                    <div className="service-slider__slide-text">
                      <h3
                        className="service-slider__slide-title"
                        style={{ color: serviceTitleColor }}
                      >
                        {service.title}
                      </h3>
                      <div className="service-slider__slide-readmore__wrapper">
                        {service.subtitle && (
                          <p
                            className="service-slider__slide-subtitle"
                            style={{ color: serviceSubTitleColor }}
                          >
                            {service.subtitle}
                          </p>
                        )}
                        <div className="service-slider__slide-readmore">
                          <a
                            href={service.permalink}
                            className="btn btn-primary"
                          >
                            <i className="fa fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        {showFooter && (
          <div className="service-slider__footer">
            <i className="fa fa-envelope"></i>
            <RichText
              tagName="div"
              value={footerText}
              onChange={(value) => setAttributes({ footerText: value })}
              placeholder={__("Footer Text", "md-resort")}
              style={{ color: footerTextColor }}
              className="service-slider__footer-text"
            />
          </div>
        )}
      </div>
    </div>
  );
}
