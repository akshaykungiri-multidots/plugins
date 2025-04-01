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

import placeholder from "./placeholder-image.png";

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
    subHeading,
    heading,
    showHeading,
    showSubHeading,
    subHeadingColor,
    headingColor,
    logos,
    slidesToShow,
    slidesToScroll,
    autoplay,
    infinite,
    showDots,
    showArrows,
  } = attributes;
  return (
    <div {...useBlockProps.save()}>
      <div className="md_logo_slider">
        <div className="md_logo_slider__heading_wrapper">
          {showSubHeading && (
            <RichText.Content
              className="md_logo_slider__sub_heading"
              tagName="p"
              value={subHeading}
              placeholder={__("Sub Heading", "md-logo-slider")}
              style={{ color: subHeadingColor }}
            />
          )}
          {showHeading && (
            <RichText.Content
              tagName="h2"
              className="md_logo_slider__heading"
              value={heading}
              placeholder={__("Heading", "md-logo-slider")}
              style={{ color: headingColor }}
            />
          )}
        </div>
        <div
          className="md_logo_slider__slider"
          data-slides-to-show={slidesToShow}
          data-slides-to-scroll={slidesToScroll}
          data-autoplay={autoplay}
          data-infinite={infinite}
          data-show-dots={showDots}
          data-show-arrows={showArrows}
        >
          {logos &&
            logos.map((postObj) => (
              <div key={postObj.id} className="logo-slide">
                <div className="pointcentral-press-listing__item-image">
                  <div className="md-prime-block-control image-preview image-controle-visible-hover">
                    {postObj.image ? (
                      <img src={postObj.image} alt={"slider"} />
                    ) : (
                      <img src={placeholder} alt={"slider"} />
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
