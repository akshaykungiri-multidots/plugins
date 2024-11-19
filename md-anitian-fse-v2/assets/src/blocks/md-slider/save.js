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
    sliderDescriptionFontColor,
    sliderLinkFontColor,
  } = attributes;
  return (
    <div {...useBlockProps.save({ className: "md_slider_section" })}>
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
            <div className={`md_slider_grid_item active"`} key={index}>
              <div className={`md_slider__item`} style={{background: `${item.backgroundType === 'media' ? `url(${item.backgroundImage})` : item.backgroundColor}`}}>
                <div className="md_slider__item__content">
                  <RichText.Content
                    tagName="h4"
                    className="md_slider__item__content__subtitle"
                    value={item.subTitle}
                    style={{
                      color: sliderLinkFontColor,
                    }}
                  />
                  <RichText.Content
                    tagName="h3"
                    className="md_slider__item__content__title"
                    value={item.title}
                    style={{
                      color: sliderTitleFontColor,
                    }}
                  />
                  <RichText.Content
                    tagName="p"
                    className="md_slider__item__content__description"
                    value={item.description}
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
