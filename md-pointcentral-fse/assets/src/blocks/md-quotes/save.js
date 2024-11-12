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
    quoteItems,
    quoteIcon,
    quoteBackgroundColor,
    quoteTextColor,
    quoteTitleColor,
    showQuoteTitle,
    showQuoteIcon,
    showQuoteAuthor,
  } = attributes;
  return (
    <div {...useBlockProps.save({ className: "md_quote_slider" })}>
      <div
        className="md-quote-slider__inner"
        style={{ backgroundColor: quoteBackgroundColor }}
      >
        <div className="md-quote-slider__items">
          {quoteItems &&
            quoteItems.map((postObj, index) => (
              <blockquote
                className={`md-quote-slider__item show-items-hover-wrap ${
                  index === 0 ? "active" : "no-trans"
                }`}
                key={index}
              >
                {showQuoteIcon && (
                  <div
                    className="image-icon has-bg"
                    style={{ backgroundImage: `url(${quoteIcon})` }}
                  ></div>
                )}
                <div className="quote-text">
                  {showQuoteTitle && (
                    <RichText.Content
                      tagName="p"
                      className="quote-text"
                      placeholder={__("Quote Text", "md-prime")}
                      value={postObj.quoteText}
                      style={{ color: quoteTextColor }}
                    />
                  )}
                  {showQuoteAuthor && (
                    <RichText.Content
                      tagName="span"
                      className="testimonial-name"
                      placeholder={__("Quote Author", "md-prime")}
                      value={postObj.quoteAuthor}
                      style={{ color: quoteTitleColor }}
                    />
                  )}
                </div>
              </blockquote>
            ))}
        </div>
        <div className="testimonial-next-prev">
          <button
            className="prev dashicons dashicons-arrow-left-alt2"
            aria-label="testimonial previous button"
          ></button>
          <button
            className="next dashicons dashicons-arrow-right-alt2"
            aria-label="testimonial next button"
          ></button>
        </div>
      </div>
    </div>
  );
}
