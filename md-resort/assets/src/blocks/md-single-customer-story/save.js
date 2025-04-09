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
    companyLogo,
    title,
    headingContent,
    socialIcon,
    authorName,
    authorPosition,
    authorImage,
    mediaPosition,
    authorRating,
    authorRatingStars,
    authorRatingDescription,
    titleColor,
    headingContentColor,
    authorNameColor,
    authorPositionColor,
    authorRatingColor,
    authorRatingDescriptionColor,
    showCompanyLogo,
    showTitle,
    showHeadingContent,
    showSocialIcon,
    showAuthorName,
    showAuthorPosition,
    showAuthorImage,
    showAuthorRating,
    showAuthorRatingStars,
    showAuthorRatingDescription,
  } = attributes;

  return (
    <div
      {...useBlockProps.save({
        className: "md_resort_single_customer_story_section",
      })}
    >
      <div className={`md_resort_single_customer_story_wrap`}>
        <div className="md_resort_single_customer_story">
          <div className="container">
            <div
              className="md_resort_single_customer_story__inner"
              style={{
                flexDirection: mediaPosition === "left" ? "row-reverse" : "row",
              }}
            >
              <div className="md_resort_single_customer_story__heading">
                {showCompanyLogo && (
                  <div className="md-prime-block-control image-preview image-controle-visible-hover md_resort_single_customer_story__company_logo">
                    <img
                      src={companyLogo}
                      alt={"slider"}
                    />
                  </div>
                )}
                {showTitle && (
                  <RichText.Content
                    tagName="h2"
                    value={title}
                    placeholder={__("Enter Title", "md-resort")}
                    style={{ color: titleColor }}
                  />
                )}
                {showHeadingContent && (
                  <RichText.Content
                    tagName="p"
                    className="md_resort_single_customer_story__content"
                    value={headingContent}
                    placeholder={__("Enter Content", "md-resort")}
                    style={{
                      color: headingContentColor,
                    }}
                  />
                )}
                <div className="md_resort_single_customer_story__author_info">
                  {showSocialIcon && (
                    <div className="md_resort_single_customer_story__social_icon">
                      <i className={"fa " + socialIcon}></i>
                    </div>
                  )}
                  <div className="md_resort_single_customer_story__author_name">
                    {showAuthorName && (
                      <RichText.Content
                        tagName="h3"
                        value={authorName}
                        placeholder={__("Enter Author Name", "md-resort")}
                        style={{
                          color: authorNameColor,
                        }}
                      />
                    )}
                    {showAuthorPosition && (
                      <RichText.Content
                        tagName="p"
                        value={authorPosition}
                        placeholder={__("Enter Author Position", "md-resort")}
                        style={{
                          color: authorPositionColor,
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="md_resort_single_customer_story__media">
                {showAuthorImage && (
                  <div className="md-prime-block-control image-preview image-controle-visible-hover md_resort_single_customer_story__author_image">
                    <img
                      src={authorImage}
                      alt={"slider"}
                    />
                  </div>
                )}
                <div className="md_resort_single_customer_story__rating">
                  {showAuthorRating && (
                    <RichText.Content
                      tagName="p"
                      className="md_resort_single_customer_story__rating_value"
                      value={authorRating}
                      placeholder={__("Enter Rating", "md-resort")}
                      style={{
                        color: authorRatingColor,
                      }}
                    />
                  )}
                  <div className="md_resort_single_customer_story__rating_stars_wrap">
                    {showAuthorRatingStars && (
                      <div className="md_resort_single_customer_story__rating_stars">
                        {Array.from({ length: authorRatingStars }, (_, i) => (
                          <i className="fa fa-star" key={i}></i>
                        ))}
                      </div>
                    )}
                    {showAuthorRatingDescription && (
                      <RichText.Content
                        tagName="p"
                        value={authorRatingDescription}
                        placeholder={__("Enter Rating Description", "md-resort")}
                        style={{
                          color: authorRatingDescriptionColor,
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
