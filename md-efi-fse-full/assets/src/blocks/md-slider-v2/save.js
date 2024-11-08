/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */

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
		sliderTitleFontColor,
		sliderDescriptionFontColor
  } = attributes;
  return (
    <div {...useBlockProps.save({ className: "md_slider_section" })}>
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
          {slideItems &&
            slideItems.map((postObj, currentSlide) => (
            <div className="md_slider__item" key={currentSlide}>
              <div className="md_slider__item__image">
                {slideItems[currentSlide].sliderImage && (
                  <div className="md-prime-image__inner">
                    {arrows && (
                      <buttton className="slick-prev slick-arrow" tabIndex="0">Previous</buttton>
                    )}
                    <img src={slideItems[currentSlide].sliderImage} alt={"SliderImage"} />
                    {arrows && (
                      <buttton className="slick-next slick-arrow" tabIndex="0">Next</buttton>
                    )}
                  </div>
                )}
              </div>
              <div className="md_slider__item__content">
                <span className="product-offers-carousel__pagination">
                  <span>{currentSlide + 1}</span> / <span>{slideItems.length}</span>
                </span>
                <div className="md_slider__item__content__inner">
                  <RichText.Content
                    tagName="h2"
                    className="md_slider__item__content__title"
                    value={slideItems[currentSlide].title}
                    style={{
                      color: sliderTitleFontColor,
                    }}
                    
                  />
                  <RichText.Content
                    tagName="p"
                    className="md_slider__item__content__description"
                    value={slideItems[currentSlide].description}
                    style={{
                      color: sliderDescriptionFontColor,
                    }}
                    
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
