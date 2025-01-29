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
    slideItems,
    autoplay,
    arrows,
    dots,
    slideInfinite,
    slideSlidesToShow,
    slideSlidesToScroll,
    testimonialsDescriptionFontColor,
    testimonialsAuthorNameFontColor,
    testimonialsAuthorDesignationFontColor,
    headingFontColor,
    showHeading,
    showTestimonialsDescription,
    showTestimonialsAuthorName,
    showTestimonialsAuthorDesignation,
  } = attributes;
  return (
    <div
      {...useBlockProps.save({
        className: "md_testimonials_section",
      })}
    >
      <div className="wrapper-inner">
        {showHeading && (
          <div className="md_testimonials_section__heading">
            <RichText.Content
              tagName="h2"
              value={heading}
              placeholder={__("Testimonials Heading", "md-prime")}
              style={{ color: headingFontColor }}
            />
          </div>
        )}
        <div className="md_hero_banner_testimonials md_hero_banner_slider md_testimonials_grid">
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
              <div className={`md_testimonials_grid_item active"`} key={index}>
                <div className={`md_testimonials__item`}>
                  <div className="md_testimonials__item__inner">
                    {showTestimonialsDescription && (
                      <div
                        className="md_testimonials__item__description"
                        style={{ color: testimonialsDescriptionFontColor }}
                      >
                        <RichText.Content
                          tagName="blockquote"
                          value={item.description}
                          placeholder={__(
                            "Testimonials Description",
                            "md-prime"
                          )}
                        />
                      </div>
                    )}
                    <div className="md_testimonials__item__author">
                      {showTestimonialsAuthorName && (
                        <div
                          className="md_testimonials__item__author__name"
                          style={{ color: testimonialsAuthorNameFontColor }}
                        >
                          <RichText.Content
                            tagName="h4"
                            value={item.authorName}
                            placeholder={__("Author Name", "md-prime")}
                          />
                        </div>
                      )}
                      {showTestimonialsAuthorDesignation && (
                        <div
                          className="md_testimonials__item__author__designation"
                          style={{
                            color: testimonialsAuthorDesignationFontColor,
                          }}
                        >
                          <RichText.Content
                            tagName="p"
                            value={item.authorDesignation}
                            placeholder={__("Author Designation", "md-prime")}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
