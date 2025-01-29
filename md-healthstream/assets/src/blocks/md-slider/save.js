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
    slideItems,
    sliderSubTitleFontColor,
    sliderTitleFontColor,
    sliderDescriptionFontColor,
    buttonColor,
    buttonBackgroundColor,
    buttonHoverColor,
    buttonHoverBackgroundColor,
    showButton,
    showSubTitle,
    showTitle,
    showDescription,
    showMedia,
  } = attributes;
  return (
    <div
      {...useBlockProps.save({
        className: "md_slider_section",
      })}
    >
      <style>
        {`
          .md_slider__item__content__button-wrap .md_slider__item__content__button {
            color: ${buttonColor};
            background: ${buttonBackgroundColor} !important;
          }
          .md_slider__item__content__button-wrap .md_slider__item__content__button:hover {
            color: ${buttonHoverColor};
            background: ${buttonHoverBackgroundColor} !important;
          }
        `}
      </style>

      <div className="md_hero_banner_slider md_slider_grid">
        <div
          className="md_slider"
          data-autoplay={autoplay}
          data-arrows={arrows}
          data-dots={dots}
          data-infinite={slideInfinite}
          data-slides-to-show={slideSlidesToShow}
          data-slides-to-scroll={slideSlidesToScroll}
        >
          {slideItems.map((item, index) => (
            <div className={`md_slider_grid_item active"`} key={index}>
              <div
                className={`md_slider__item`}
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              >
                {item.enableOverlay && (
                  <div
                    className="md_slider__item__overlay"
                    style={{
                      backgroundColor: item.overlayColor,
                      opacity: item.overlayOpacity,
                    }}
                  ></div>
                )}
                <div className="md_slider__item__inner container">
                  {showSubTitle && (
                    <div className="md_slider__item__content__subtitle_wrap">
                      <RichText.Content
                        tagName="h4"
                        className="md_slider__item__content__subtitle"
                        value={item.subtitle}
                        placeholder={__("Enter Subtitle", "md-prime")}
                        style={{
                          color: sliderSubTitleFontColor,
                        }}
                      />
                    </div>
                  )}
                  <div className="md_slider__item__content">
                    {showTitle && (
                      <RichText.Content
                        tagName="h1"
                        className="md_slider__item__content__title"
                        value={item.title}
                        placeholder={__("Enter Title", "md-prime")}
                        style={{
                          color: sliderTitleFontColor,
                        }}
                      />
                    )}
                    {showDescription && (
                      <RichText.Content
                        tagName="p"
                        className="md_slider__item__content__description"
                        value={item.description}
                        placeholder={__("Enter Description", "md-prime")}
                        style={{
                          color: sliderDescriptionFontColor,
                        }}
                      />
                    )}
                    {showButton && item.buttonText && (
                      <div className="md_slider__item__content__button-wrap">
                        <RichText.Content
                          tagName="span"
                          className="md_slider__item__content__button btn btn-secondary-themed"
                          value={item.buttonText}
                          placeholder={__("Enter Button Text", "md-prime")}
                        />
                        <i className="bi bi-arrow-right-short"></i>
                      </div>
                    )}
                  </div>
                  {showMedia && item.mediaurl && (
                    <div className="md-prime-block-control image-preview image-controle-visible-hover md_slider__item__image">
                      <img src={item.mediaurl} alt={"slider"} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
