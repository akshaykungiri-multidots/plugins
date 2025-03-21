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
    subheading,
    ratingStars,
    ratingTitle,
    headingColor,
    subHeadingColor,
    ratingTitleColor,
    slideItems,
    autoplay,
    arrows,
    dots,
    slideInfinite,
    slideSlidesToShow,
    slideSlidesToScroll,
    showHeading,
    showSubheading,
    showRatingTitle,
    showRating,
    showSlideAuthorImage,
    showSlideAuthorName,
    showSlideAuthorDesignation,
    showSlideTestimonialText,
    showSlideRating,
    showSlideDateOfTestimonial,
    slideAuthorNameColor,
    slideAuthorDesignationColor,
    slideTestimonialTextColor,
    slideDateOfTestimonialColor,
  } = attributes;

  const displayReviewStars = () => {
    const stars = [];
    for (let i = 0; i < ratingStars; i++) {
      stars.push(<i key={i} className="bi bi-star-fill"></i>);
    }
    return stars;
  };

  const displaySlideReviewStars = (rating) => {
    const stars = [];
    if (isNaN(rating)) {
      rating = 0;
    }
    for (let i = 0; i < rating; i++) {
      stars.push(<i key={i} className="fa fa-star"></i>);
    }
    return stars;
  };
  return (
    <div
      {...useBlockProps.save({
        className: "md_customer_stories_section",
      })}
    >
      <div className="md_customer_stories_section__title">
        {showRating && (
          <div className="md_customer_stories_section__ratingStars">
            {displayReviewStars()}
          </div>
        )}
        {showRatingTitle && (
          <RichText.Content
            tagName="h2"
            value={ratingTitle}
            placeholder={__("Rating Title", "md-prime")}
            style={{ color: ratingTitleColor }}
          />
        )}
      </div>
      <div className="md_customer_stories_section__wrapper">
        <div className="md_customer_stories_section__heading">
          {showSubheading && (
            <RichText.Content
              tagName="p"
              value={subheading}
              placeholder={__("Subheading", "md-prime")}
              style={{ color: subHeadingColor }}
            />
          )}
          {showHeading && (
            <RichText.Content
              tagName="h2"
              value={heading}
              placeholder={__("Heading", "md-prime")}
              style={{ color: headingColor }}
            />
          )}
        </div>
        <div className="md_customer_stories_section__sliderItems">
          <div className="md_hero_banner_slider md_customer_stories_grid">
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
                <div
                  className={`md_customer_stories_grid_item active"`}
                  key={index}
                >
                  <div className="md_customer_stories_grid_item__authorDetails">
                    {showSlideAuthorName && (
                      <RichText.Content
                        tagName="h3"
                        className="md_customer_stories_grid_item__authorName"
                        value={item.authorName}
                        placeholder={__("Author Name", "md-prime")}
                        style={{ color: slideAuthorNameColor }}
                      />
                    )}
                    {showSlideAuthorDesignation && (
                      <RichText.Content
                        tagName="p"
                        className="md_customer_stories_grid_item__authorDesignation"
                        value={item.authorDesignation}
                        placeholder={__("Author Designation", "md-prime")}
                        style={{ color: slideAuthorDesignationColor }}
                      />
                    )}
                  </div>
                  <div className="md_customer_stories_grid_item__inner">
                    <div className="md_customer_stories_grid_item__authorHeading">
                      {showSlideAuthorImage && (
                        <div className="md-prime-block-control image-preview image-controle-visible-hover md_customer_stories_grid_item__authoImage">
                          <img src={item.authorImage} alt={"slider"} />
                        </div>
                      )}
                    </div>
                    <div className="md_customer_stories_grid_item__content">
                      {showSlideTestimonialText && (
                        <RichText.Content
                          tagName="p"
                          className="md_customer_stories_grid_item__testimonialText"
                          value={item.testimonialText}
                          placeholder={__("Testimonial Text", "md-prime")}
                          style={{ color: slideTestimonialTextColor }}
                        />
                      )}
                    </div>
                    <div className="md_customer_stories_grid_item__rating">
                      {showSlideRating && (
                        <div className="md_customer_stories_grid_item__ratingStars">
                          <div className="md_customer_stories_grid_item__ratingStars__stars">
                            {displaySlideReviewStars(item.rating)}
                          </div>
                        </div>
                      )}
                      {showSlideDateOfTestimonial && (
                        <div className="md_customer_stories_grid_item__dateOfTestimonial">
                          <RichText.Content
                            tagName="p"
                            value={item.dateOfTestimonial}
                            placeholder={__("Date", "md-prime")}
                            style={{ color: slideDateOfTestimonialColor }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
