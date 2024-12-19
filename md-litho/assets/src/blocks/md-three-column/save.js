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
    testimonialText,
    testimonialAuthor,
    mediaImage,
    heading,
    features,
    showTestimonial,
    testimonialBackgroundColor,
    testimonialTextColor,
    testimonialAuthorColor,
    showMedia,
    showFeatures,
    showHeading,
    headingColor,
    featureTitleColor,
    featureTextColor,
  } = attributes;
  return (
    <div {...useBlockProps.save({ className: "md_three_column_block" })}>
      <div className="md_three_column_block__inner">
        {showTestimonial && (
          <div className="md_three_column_block__testimonials_block">
            <div
              className="md_three_column_block__testimonials_block__inner"
              style={{ background: testimonialBackgroundColor }}
            >
              <div
                className="md_three_column_block__testimonials_block__inner__content"
                style={{ color: testimonialTextColor }}
              >
                <i className="fa fa-quote-left"></i>
                <RichText.Content
                  tagName="p"
                  value={testimonialText}
                  placeholder={__("Testimonial", "md-prime")}
                />
              </div>
              <div className="md_three_column_block__testimonials_block__inner__author">
                <RichText.Content
                  tagName="p"
                  value={testimonialAuthor}
                  style={{ color: testimonialAuthorColor }}
                  placeholder={__("Author", "md-prime")}
                />
              </div>
            </div>
          </div>
        )}
        {showMedia && (
          <div className="md_three_column_block_media">
            <div
              className="md-prime-block-control image-preview image-controle-visible-hover md_three_column_block_media1"
              style={{ backgroundImage: `url(${mediaImage})` }}
            ></div>
          </div>
        )}
        <div className="md_three_column_block__features">
          {showHeading && (
            <RichText.Content
              tagName="h3"
              className="md_three_column_block__features__heading"
              value={heading}
              style={{ color: headingColor }}
              placeholder={__("Heading", "md-prime")}
            />
          )}
          {showFeatures && (
            <div className="md_three_column_block__features__list">
              <div className="md_three_column_block__features__list__inner">
                {features &&
                  features.map((postObj) => (
                    <div
                      key={postObj.id}
                      className="md_three_column_block__features__list_item_wrap show-items-hover-wrap"
                    >
                      <div className="md_three_column_block__features__list_item">
                        <div className="md_three_column_block__features__list_item__wrapper">
                          <div className="md_three_column_block__features__list_item__wrapper-text">
                            <RichText.Content
                              tagName="h4"
                              className="feature-title"
                              value={postObj.iconTitle}
                              placeholder={__("Title", "md-prime")}
                              style={{ color: featureTitleColor }}
                            />
                            <RichText.Content
                              tagName="p"
                              className="image-text"
                              value={postObj.iconText}
                              placeholder={__("Feature Text", "md-prime")}
                              style={{ color: featureTextColor }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
