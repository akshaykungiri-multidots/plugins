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
    heading,
    autoplay,
    arrows,
    dots,
    slideInfinite,
    slideSlidesToShow,
    slideSlidesToScroll,
    slideItems,
  } = attributes;
  return (
    <div {...useBlockProps.save({ className: "md_slider_section" })}>
      <div className="md_hero_banner_slider_v3">
        <div
          className="md_slider"
          data-autoplay={autoplay}
          data-arrows={arrows}
          data-dots={dots}
          data-infinite={slideInfinite}
          data-slidesToShow={slideSlidesToShow}
          data-slidesToScroll={slideSlidesToScroll}
        >
          {slideItems &&
            slideItems.map((postObj, currentSlide) => (
            <div className="md_slider__item">
              <div className="md_slider__item__gradient_theme"></div>
              <div className="md_slider__item--inner">
                <h3>{heading}</h3>
                <div className="md_slider__item__company_info">
                  <RichText.Content
                    tagName="h2"
                    className="md_slider__item__company_name h4"
                    value={slideItems[currentSlide].companyName}
                  />
                </div>
                <div className="md_slider__item__testimonial">
                  <RichText.Content
                    tagName="blockquote"
                    className="md_slider__item__testimonial__content"
                    value={slideItems[currentSlide].testimonial}
                    
                  />
                  <div className="md_slider__item__testimonial__info">
                    <div className="md_slider__item__testimonial__author">
                      <RichText.Content
                        tagName="h4"
                        className="md_slider__item__testimonial__author__name"
                        value={slideItems[currentSlide].authorName}
                        
                      />
                      <RichText.Content
                        tagName="p"
                        className="md_slider__item__testimonial__author__designation"
                        value={slideItems[currentSlide].designation}
                      />
                    </div>
                    {slideItems[currentSlide].videoLink && (
                      <RichText.Content
                        tagName="div"
                        className="md_slider__item__testimonial__video"
                        value={slideItems[currentSlide].videoLink}
                        
                      />
                    )}
                    {slideItems[currentSlide].readMoreLink && (
                      <div className="md_slider__item__testimonial__read_more btn-has-right-arrow btn-main-border">
                        <RichText.Content
                          tagName="p"
                          className="btn-main"
                          value={slideItems[currentSlide].readMoreLink}
                        />
                      </div>
                    )}
                  </div>
                  <div className="md_slider__item__count">
                    <span>{currentSlide + 1}</span> /{" "}
                    <span>{slideItems.length}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
