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
import { useBlockProps, RichText } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
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
  return (
    <div {...useBlockProps.save()}>
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
              <RichText.Content
                tagName="h4"
                className="md_service_slider__subtitle"
                value={subtitle}
                style={{ color: subtitleColor }}
                placeholder={__("Enter Subtitle", "md-prime")}
              />
            )}
            {showTitle && (
              <RichText.Content
                tagName="h2"
                className="md_service_slider__title"
                value={title}
                style={{ color: titleColor }}
                placeholder={__("Enter Title", "md-prime")}
              />
            )}
            {showDescription && (
              <RichText.Content
                tagName="p"
                className="md_service_slider__description"
                value={description}
                style={{ color: descriptionColor }}
                placeholder={__("Enter Description", "md-prime")}
              />
            )}
          </div>
          <div className="md_service_slider__slider">
            <div className="md_service_banner_slider md_slider_grid">
              <div className="md_slider"
                data-autoplay={autoplay}
                data-arrows={arrows}
                data-dots={dots}
                data-infinite={slideInfinite}
                data-slides-to-show={slideSlidesToShow}
                data-slides-to-scroll={slideSlidesToScroll}
              >
                {services.map((item, index) => (
                  <div
                    className={`md_service_slider_grid_item active"`}
                    key={index}
                  >
                    <div className={`md_service_slider__item`}>
                      {showServicesSliderImage && item.mediaurl && (
                        <div className="md_litho_image_banner_v2__media">
                          <div className="md-prime-block-control image-preview image-controle-visible-hover md_litho_image_banner_v2__media1">
                            <img
                              src={item.mediaurl}
                              alt={"slider"}
                            />
                          </div>
                        </div>
                      )}
                      <div className="md_service_slider__item__content">
                        {showServicesSliderTitle && (
                          <RichText.Content
                            tagName="h1"
                            className="md_service_slider__item__content__title"
                            value={item.title}
                            placeholder={__("Enter Title", "md-prime")}
                            style={{
                              color: servicesSliderTitleColor,
                            }}
                          />
                        )}
                        {showServicesSliderDescription && (
                          <RichText.Content
                            tagName="p"
                            className="md_service_slider__item__content__description"
                            value={item.description}
                            placeholder={__("Enter Description", "md-prime")}
                            style={{
                              color: servicesSliderDescriptionColor,
                            }}
                          />
                        )}
                        {showServicesSliderButton && item.buttonText && (
                          <div className="md_service_slider__item__content__button-wrap">
                            <RichText.Content
                              tagName="span"
                              className="md_service_slider__item__content__button md-btn-main"
                              value={item.buttonText}
                              placeholder={__("Enter Button Text", "md-prime")}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {showRightBox && (
          <div className="md_service_slider__right_box">
            <div className="md_service_slider__right_box__inner">
              <div className="md_service_slider__right_box__heading">
                <RichText.Content
                  tagName="h2"
                  className="md_service_slider__right_box__heading__title"
                  value={rightBoxHeading}
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
                    <RichText.Content
                      tagName="p"
                      className="md_service_slider__right_box__services__item__title"
                      value={item.title}
                      style={{ color: rightBoxServicesColor }}
                      placeholder={__(
                        "Enter Right Box Service Title",
                        "md-prime"
                      )}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
