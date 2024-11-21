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
  } = attributes;
  
  return (
    <div
      {...useBlockProps.save({
        className: "md_anitian_cover_cta_section",
      })}
    >
      <div className={`md_anitian_cover_cta_wrap ${coverCtaStyle}`} style={{ backgroundColor: `${enableOverlay ? backgroundImageOverlay : ''}` }}>
        {enablrArc && (
          <div className="md_anitian_cover_cta_arc"></div>
        )}
          <div className="md_anitian_cover_cta" style={{backgroundImage: `url(${backgroundImage})`}}>
            {backgroundColor && (
              <div className="background_overlay" style={{background: `linear-gradient(180deg, ${backgroundColor} 0%, ${backgroundColor} 100%)`}}>
              </div>
            )}
              <div className="container">
                  <div className="md_anitian_cover_cta__inner">
                      <div className="md_anitian_cover_cta__heading">
                        {showTitle && (
                        <RichText.Content
                          tagName="h1"
                          className="header-page-title__heading"
                          value={title}
                          style={{color: titleFontColor}}
                        />
                        )}
                        {showHeadingContent && (
                        <RichText.Content
                          tagName="p"
                          value={headingContent}
                          style={{color: headingContentFontColor}}
                        />
                        )}
                        {showButton && (
                          <div className="md_anitian_btn_wrap">
                          <RichText.Content
                            tagName="div"
                            className="md_anitian_cover_cta__btn btn-anitian"
                            value={buttonLink}
                          />
                          </div>
                        )}
                      </div>
                      {coverImage && (
                        <div className="md_anitian_cover_cta__image">
                            <div className="cover_cta__image">
                              <img src={coverImage} alt="cover" />
                            </div>
                        </div>
                      )}
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}
