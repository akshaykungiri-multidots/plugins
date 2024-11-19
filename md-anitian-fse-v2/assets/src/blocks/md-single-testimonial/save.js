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
    authorImage,
    testimonialContent,
    authorName,
    authorDesignation,
    backgroundImage,
    enableOverlay,
    backgroundImageOverlay,
    headingColor,
    contentColor,
    authorNameColor,
    authorDesignationColor,
    showHeading,
    showAuthorImage,
    showAuthorName,
    showAuthorDesignation,
  } = attributes;

  return (
    <div
      {...useBlockProps.save({
        className: "md_anitian_single_testimonial",
      })}
    >
      <div
        className="md_anitian_single_tesimonial__wrapper"
        style={{ backgroundColor: enableOverlay ? backgroundImageOverlay : "" }}
      >
        <div
          className="md_anitian_single_tesimonial__inner"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="container">
            <div className="md_anitian_single_tesimonial__inner">
              <div className="md_anitian_single_tesimonial__heading">
                {showHeading && (
                  <RichText.Content
                    tagName="h1"
                    className="header-page-title__heading"
                    value={heading}
                    style={{ color: headingColor }}
                  />
                )}
              </div>
              {showAuthorImage && (
                <div className="md_anitian_single_tesimonial__image">
                  <div className="cover_cta__image">
                    <div className="md-prime-block-control image-preview image-controle-visible-hover">
                      {authorImage && (
                        <img src={authorImage} alt={"Author Name"} />
                      )}
                    </div>
                  </div>
                </div>
              )}
              <div className="md_anitian_single_tesimonial__content">
                <div className="md_anitian_single_tesimonial__content__inner">
                  <RichText.Content
                    tagName="p"
                    className="testimonials__content"
                    value={testimonialContent}
                    style={{ color: contentColor }}
                  />
                  {showAuthorName && (
                    <RichText.Content
                      tagName="h4"
                      className="testimonials__author"
                      value={authorName}
                      style={{ color: authorNameColor }}
                    />
                  )}
                  {showAuthorDesignation && (
                    <RichText.Content
                      tagName="h5"
                      className="testimonials__author__designation"
                      value={authorDesignation}
                      style={{ color: authorDesignationColor }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
