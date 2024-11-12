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
import { useBlockProps } from "@wordpress/block-editor";

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
        <div className="md_logo_slider__slider__controls">
          <button className="button secondary stop md_logo_slider__stop">
            <i className="dashicons dashicons-controls-pause"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
