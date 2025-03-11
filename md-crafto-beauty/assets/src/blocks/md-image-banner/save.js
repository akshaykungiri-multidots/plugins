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
    subTitle,
    title,
    headingContent,
    buttonLink,
    awesomeText,
    mediaPosition,
    backgroundColor,
    subTitleColor,
    titleColor,
    headingContentColor,
    showSubTitle,
    showTitle,
    showHeadingContent,
    showButton,
    showAwesomeText,
    mediaImage,
    backgroundImage,
    buttonColor,
    buttonBackgroundColor,
    buttonHoverColor,
    buttonHoverBackgroundColor,
    awesomeTextColor,
    featureBoxIcon,
    featureBoxTitle,
    featureBoxContent,
    showFeatureBox,
    featureBoxTitleColor,
    featureBoxContentColor,
    featureLink,
    featureBoxLinkColor,
    showFeatureLink,
  } = attributes;

  return (
    <div
      {...useBlockProps.save({
        className: "md_crafto_beauty_video_header_section",
      })}
    >
      <div
        className={`md_crafto_beauty_image_banner_wrap`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        <style>
          {`
            .md_crafto_beauty_image_banner__btn {
              color: ${buttonColor};
              background: ${buttonBackgroundColor};
            }
            .md_crafto_beauty_image_banner__btn:hover {
              color: ${buttonHoverColor} !important;
              background: ${buttonHoverBackgroundColor};
            }
          `}
        </style>
        <div
          className="md_crafto_beauty_image_banner"
          style={{ backgroundColor }}
        >
          <div className="container">
            <div
              className="md_crafto_beauty_image_banner__inner"
              style={{
                flexDirection: mediaPosition === "left" ? "row-reverse" : "row",
              }}
            >
              <div className="md_crafto_beauty_image_banner__heading">
                {showSubTitle && (
                  <RichText.Content
                    tagName="h4"
                    value={subTitle}
                    placeholder={__("Enter Sub Title", "md-crafto-beauty")}
                    style={{
                      color: subTitleColor,
                    }}
                  />
                )}
                {showTitle && (
                  <RichText.Content
                    tagName="h2"
                    value={title}
                    placeholder={__("Enter Title", "md-crafto-beauty")}
                    style={{ color: titleColor }}
                  />
                )}
                {showHeadingContent && (
                  <RichText.Content
                    tagName="p"
                    className="md_crafto_beauty_image_banner__content"
                    value={headingContent}
                    placeholder={__("Enter Content", "md-crafto-beauty")}
                    style={{
                      color: headingContentColor,
                    }}
                  />
                )}
                <div className="md_crafto_beauty_image_banner__btn_wrapper">
                  {showButton && (
                    <div className="btn-anitian md_crafto_beauty_image_banner__btn md-btn-main btn-extra-large has-right-arrow">
                      <RichText.Content
                        tagName="span"
                        value={buttonLink}
                        placeholder={__(
                          "Enter Button Text",
                          "md-crafto-beauty"
                        )}
                      />
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  )}
                </div>
              </div>
              {mediaImage && (
                <div className="md-prime-block-control image-preview image-controle-visible-hover md_crafto_beauty_image_banner__media">
                  <img src={mediaImage} alt={"slider"} />
                </div>
              )}
            </div>
          </div>
        </div>
        {showAwesomeText && (
          <div className="md_crafto_beauty_image_banner__awesome_text">
            <RichText.Content
              tagName="p"
              value={awesomeText}
              placeholder={__("Enter Awesome Text", "md-crafto-beauty")}
              style={{ color: awesomeTextColor }}
            />
          </div>
        )}
      </div>
      <div className="md_crafto_beauty_image_banner__feature_box">
        {showFeatureBox && (
          <div className="md_crafto_beauty_image_banner__feature_box_inner">
            {featureBoxIcon && (
              <div className="md_crafto_beauty_image_banner__feature_box_icon">
                <div className="md-prime-block-control image-preview image-controle-visible-hover">
                  <img src={featureBoxIcon} alt={"slider"} />
                </div>
              </div>
            )}
            <div className="md_crafto_beauty_image_banner__feature_box_content">
              <RichText.Content
                tagName="h4"
                value={featureBoxTitle}
                placeholder={__("Enter Feature Box Title", "md-crafto-beauty")}
                style={{ color: featureBoxTitleColor }}
              />
              <RichText.Content
                tagName="p"
                value={featureBoxContent}
                placeholder={__(
                  "Enter Feature Box Content",
                  "md-crafto-beauty"
                )}
                style={{ color: featureBoxContentColor }}
              />
            </div>
          </div>
        )}
        {showFeatureLink && (
          <div className="md_crafto_beauty_image_banner__feature_link">
            <RichText.Content
              tagName="p"
              value={featureLink}
              placeholder={__("Enter Feature Box Link", "md-crafto-beauty")}
              style={{ color: featureBoxLinkColor }}
            />
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        )}
      </div>
    </div>
  );
}
