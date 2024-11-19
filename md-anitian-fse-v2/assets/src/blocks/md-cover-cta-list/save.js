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
    coverImage,
    backgroundImage,
    enableOverlay,
    backgroundImageOverlay,
    backgroundColor,
    coverCtaStyle,
    titleFontColor,
    headingContentFontColor,
    enablrArc,
    showTitle,
    showHeadingContent,
    showButton,
    showSubTitle,
    subTitleColor,
    ctaListingHeading,
    ctaListing,
    ctaListingIcon,
    showCtaListing,
    ctaListingHeadingColor,
    ctaListingFontColor,
  } = attributes;
  
  return (
    <div
      {...useBlockProps.save({
        className: "md_anitian_cover_cta_list_section",
      })}
    >
      <div
        className={`md_anitian_cover_cta_list_wrap ${coverCtaStyle}`}
        style={{
          backgroundColor: `${enableOverlay ? backgroundImageOverlay : ""}`,
        }}
      >
        {enablrArc && <div className="md_anitian_cover_cta_list_arc"></div>}
        <div
          className="md_anitian_cover_cta_list"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          {backgroundColor && (
            <div
              className="background_overlay"
              style={{
                background: `linear-gradient(180deg, ${backgroundColor} 0%, ${backgroundColor} 100%)`,
              }}
            ></div>
          )}
          <div className="container">
            <div className="md_anitian_cover_cta_list__inner">
              <div className="md_anitian_cover_cta_list__heading">
                {showSubTitle && (
                  <RichText.Content
                    tagName="h4"
                    className="header-page-title__sub-heading"
                    value={subTitle}
                    placeholder={__("Enter Sub Title", "md-anitian-fse-v2")}
                    style={{ color: subTitleColor }}
                  />
                )}
                {showTitle && (
                  <RichText.Content
                    tagName="h1"
                    className="header-page-title__heading"
                    value={title}
                    placeholder={__("Enter Title", "md-anitian-fse-v2")}
                    style={{ color: titleFontColor }}
                  />
                )}
                {showHeadingContent && (
                  <RichText.Content
                    tagName="p"
                    value={headingContent}
                    placeholder={__("Enter Content", "md-anitian-fse-v2")}
                    style={{
                      color: headingContentFontColor,
                    }}
                  />
                )}
                {showButton && (
                  <div className="md_anitian_btn_wrap">
                    <RichText.Content
                      tagName="div"
                      className="md_anitian_cover_cta_list__btn btn-anitian"
                      value={buttonLink}
                      placeholder={__("Enter Button Link", "md-anitian-fse-v2")}
                    />
                  </div>
                )}
                {showCtaListing && (
                  <div className="md_anitian_cover_cta_list__cta_listing">
                    <div className="md_anitian_cover_cta_list__cta_listing__heading">
                      <RichText.Content
                        tagName="h2"
                        className="md_anitian_cover_cta_list__cta_listing__heading__title"
                        value={ctaListingHeading}
                        placeholder={__(
                          "Enter CTA Listing Heading",
                          "md-anitian-fse-v2"
                        )}
                        style={{ color: ctaListingHeadingColor }}
                      />
                    </div>
                    <div className="md_anitian_cover_cta_list__cta_listing__list">
                      {ctaListing &&
                        ctaListing.map((item, index) => (
                          <div
                            className="md_anitian_cover_cta_list__cta_listing__list__item show-items-hover-wrap"
                            key={index}
                          >
                            {ctaListingIcon ? (
                              <div className="md_anitian_cover_cta_list__cta_listing__list__item__image">
                                <img src={ctaListingIcon} alt="icon" />
                              </div>
                            ) : (
                              <div className="md_anitian_cover_cta_list__cta_listing__list__item__icon">
                                <i className="fa fa-check-circle"></i>
                              </div>
                            )}
                            <RichText.Content
                              tagName="p"
                              className="md_anitian_cover_cta_list__cta_listing__list__item__title"
                              value={item.ctaListingTitle}
                              placeholder={__(
                                "Enter CTA Listing Title",
                                "md-anitian-fse-v2"
                              )}
                              style={{ color: ctaListingFontColor }}
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="md_anitian_cover_cta_list__image">
                <div className="cover_cta__image">
                  <div className="md-prime-block-control image-preview image-controle-visible-hover">
                    {coverImage && (
                      <img src={coverImage} alt={title} />
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
