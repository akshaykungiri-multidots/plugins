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
    subHeading,
    heading,
    showSubHeading,
    showHeading,
    subHeadingColor,
    headingColor,
    logos,
    logosTitleColor,
    logosDescriptionColor,
    logosReadMoreColor,
    showLogos,
    showLogosTitle,
    showLogosDescription,
    showLogosIcon,
    showLogosReadMore,
    numberOfLogosPerRow,
    logosAlignment,
    buttonText,
    showButton,
    buttonColor,
    buttonBackgroundColor,
  } = attributes;

  return (
    <div {...useBlockProps.save()}>
      <div className="md_research_block">
        <div className="md_research_block__heading">
          {showSubHeading && (
            <RichText.Content
              tagName="h4"
              className="sub-heading"
              value={subHeading}
              placeholder={__("Sub Heading", "md-prime")}
              style={{ color: subHeadingColor }}
            />
          )}
          {showHeading && (
            <RichText.Content
              tagName="h2"
              className="heading"
              value={heading}
              placeholder={__("Heading", "md-prime")}
              style={{ color: headingColor }}
            />
          )}
        </div>
        {showLogos && (
          <div className={`md_research_block__slider_wrap`}>
            <div className="md_research_block__slider">
              {logos &&
                logos.map((postObj, index) => (
                  <div
                    key={postObj.id}
                    className="logo-slide show-items-hover-wrap"
                    style={{
                      width: `${100 / numberOfLogosPerRow}%`,
                      textAlign: logosAlignment,
                    }}
                  >
                    <div className="md-lithomd_research_block__item-icon">
                      <div className="md-lithomd_research_block__item-icon__wrapper">
                        {showLogosIcon && postObj.mediaImage && (
                          <div className="md-lithomd_research_block__item-icon__wrapper-icon">
                            <div className="md-prime-block-control image-preview image-controle-visible-hover md_litho_image_banner__media1">
                              <img
                                src={
                                  postObj.mediaImage
                                }
                                alt={"slider"}
                              />
                              <span className="image-overlay"></span>
                            </div>
                          </div>
                        )}
                        <div className="md-lithomd_research_block__item-icon__wrapper-text">
                          <div className="md-lithomd_research_block__item-icon__wrapper-text__number">
                            {index + 1}
                          </div>
                          {showLogosTitle && (
                            <RichText.Content
                              tagName="h4"
                              className="image-title"
                              value={postObj.iconTitle}
                              placeholder={__("Image Title", "md-prime")}
                              style={{ color: logosTitleColor }}
                            />
                          )}
                          {showLogosDescription && (
                            <RichText.Content
                              tagName="p"
                              className="image-text"
                              value={postObj.iconText}
                              placeholder={__("Image Text", "md-prime")}
                              style={{ color: logosDescriptionColor }}
                            />
                          )}
                          {showLogosReadMore && (
                            <RichText.Content
                              tagName="p"
                              className="read-more"
                              value={postObj.readMoreText}
                              placeholder={__("Read More", "md-prime")}
                              style={{ color: logosReadMoreColor }}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
        {showButton && (
          <div className="md_research_block__button">
            <RichText.Content
              tagName="p"
              className="button"
              value={buttonText}
              placeholder={__("Button Text", "md-prime")}
              style={{
                backgroundColor: buttonBackgroundColor,
                color: buttonColor,
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
