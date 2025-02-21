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
 * React hook that is used to mark the packages element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-element/
 */
import { WPElement } from "@wordpress/element";

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
    subTitle,
    title,
    headingContent,
    buttonLink,
    backgroundColor,
    subTitleColor,
    titleColor,
    headingContentColor,
    showSubTitle,
    showTitle,
    showHeadingContent,
    showButton,
    buttonColor,
    buttonBackgroundColor,
    buttonHoverColor,
    buttonHoverBackgroundColor,
    joinUsText,
    joinUsTextColor,
    showJoinUs,
    showTestimonials,
    testimonials,
    showSlideAuthorImage,
    showSlideAuthorName,
    showSlideAuthorDesignation,
    showSlideTestimonialText,
    showSlideRating,
    showSlideDateOfTestimonial,
    slideAuthorNameColor,
    slideAuthorDesignationColor,
    slideTestimonialTextColor,
    slideRatingTextColor,
    slideDateOfTestimonialColor,
  } = attributes;

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
      {...useBlockProps.save({ className: "md_porto_testimonials_section" })}
    >
      <div className={`md_porto_testimonials_wrap`}>
        <style>
          {`
				.md_porto_testimonials__btn .md_btn {
				  color: ${buttonColor};
				  background: ${buttonBackgroundColor};
				  &:before {
					background: ${buttonBackgroundColor};
				  }
				}
				.md_porto_testimonials__btn .md_btn:hover {
				  color: ${buttonHoverColor} !important;
				  background: ${buttonHoverBackgroundColor};
				  &:before {
					background: ${buttonHoverBackgroundColor};
				  }
				}
			  `}
        </style>
        <div className="md_porto_testimonials" style={{ backgroundColor }}>
          <div className="container">
            <div className="md_porto_testimonials__inner">
              <div className="md_porto_testimonials__heading">
                {showSubTitle && (
                  <RichText.Content
                    tagName="h4"
                    value={subTitle}
                    placeholder={__("Enter Sub Title", "md-porto")}
                    style={{
                      color: subTitleColor,
                    }}
                  />
                )}
                {showTitle && (
                  <RichText.Content
                    tagName="h2"
                    value={title}
                    placeholder={__("Enter Title", "md-porto")}
                    style={{ color: titleColor }}
                  />
                )}
                {showHeadingContent && (
                  <RichText.Content
                    tagName="p"
                    className="md_porto_testimonials__content"
                    value={headingContent}
                    placeholder={__("Enter Content", "md-porto")}
                    style={{
                      color: headingContentColor,
                    }}
                  />
                )}
                {showJoinUs && (
                  <div className="md_porto_testimonials__join_us">
                    <i className="fa fa-users"></i>
                    <RichText.Content
                      tagName="p"
                      className=""
                      value={joinUsText}
                      placeholder={__("Enter Join Us Text", "md-porto")}
                      style={{
                        color: joinUsTextColor,
                      }}
                    />
                  </div>
                )}
                <div className="md_btn__wrapper md_porto_testimonials__btn">
                  {showButton && (
                    <RichText.Content
                      className="md_btn md_btn__arrow"
                      tagName="p"
                      value={buttonLink}
                      placeholder={__("Enter Button Text", "md-porto")}
                    />
                  )}
                </div>
              </div>
              {showTestimonials && (
                <div className="md_porto_testimonials__slider">
                  {testimonials.map((item, index) => (
                    <div
                      className={`md_customer_stories_grid_item show-items-hover-wrap"`}
                      key={index}
                    >
                      <div className="md_customer_stories_grid_item__inner">
                        <div className="md_customer_stories_grid_item__authorHeading">
                          {showSlideAuthorImage && item.authorImage && (
                            <div className="md-prime-block-control image-preview image-controle-visible-hover md_customer_stories_grid_item__authoImage">
                              <img src={item.authorImage} alt={"slider"} />
                            </div>
                          )}
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
                                placeholder={__(
                                  "Author Designation",
                                  "md-prime"
                                )}
                                style={{ color: slideAuthorDesignationColor }}
                              />
                            )}
                          </div>
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
                              <RichText.Content
                                tagName="p"
                                value={item.rating}
                                placeholder={__("Rating", "md-prime")}
                                style={{ color: slideRatingTextColor }}
                              />
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
                                placeholder={__(
                                  "Date Of Testimonial",
                                  "md-prime"
                                )}
                                style={{ color: slideDateOfTestimonialColor }}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
