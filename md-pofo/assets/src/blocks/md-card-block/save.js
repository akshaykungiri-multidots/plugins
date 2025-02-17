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
    description,
    showSubHeading,
    showHeading,
    showDescription,
    subHeadingColor,
    headingColor,
    descriptionColor,
    logos,
    enableBorder,
    logosTitleColor,
    logosDescriptionColor,
    logoCardColor,
    logosSubTitleColor,
    showLogos,
    showLogosTitle,
    showLogosDescription,
    showCardImage,
    showLogosSubTitle,
    numberOfLogosPerRow,
    logosAlignment,
    buttonText,
    showButton,
    buttonColor,
    buttonBackgroundColor,
    logoStyle,
  } = attributes;

  return (
    <div {...useBlockProps.save()}>
      <div className={"md_card_block " + logosAlignment}>
        <div className="md_card_block__heading">
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
          {showDescription && (
            <RichText.Content
              tagName="p"
              className="description"
              value={description}
              placeholder={__("Description", "md-prime")}
              style={{ color: descriptionColor }}
            />
          )}
        </div>
        {showLogos && (
          <div className={`md_card_block__slider_wrap ` + logoStyle}>
            <div className="md_card_block__slider">
              {logos &&
                logos.map((postObj) => (
                  <div
                    key={postObj.id}
                    className="logo-slide show-items-hover-wrap"
                    style={{
                      width: `${100 / numberOfLogosPerRow}%`,
                    }}
                  >
                    <div
                      className={
                        "md-pofomd_card_block__item-card " + logosAlignment
                      }
                      style={{ border: enableBorder ? "1px solid" : "none" }}
                    >
                      <div className="md-pofomd_card_block__item-card__wrapper feature-box-15">
                        <div className="md-pofomd_card_block__item-card__wrapper-card__flip feature-box-content">
                          {showCardImage && postObj.mediaImage && (
                            <div className="md-pofomd_card_block__item-card__wrapper-card__image feature-box-image">
                              <div className="md-prime-block-control image-preview image-controle-visible-hover">
                                <img src={postObj.mediaImage} alt="" />
                              </div>
                            </div>
                          )}
                          {showLogosDescription && (
                            <div
                              className="md-pofomd_card_block__item-card__wrapper-card__back hover-content"
                              style={{ backgroundColor: logoCardColor }}
                            >
                              <RichText.Content
                                tagName="p"
                                className="image-text"
                                value={postObj.cardText}
                                placeholder={__("Image Text", "md-prime")}
                                style={{ color: logosDescriptionColor }}
                              />
                            </div>
                          )}
                        </div>
                        <div className="md-pofomd_card_block__item-card__wrapper-text">
                          {showLogosTitle && (
                            <RichText.Content
                              tagName="h4"
                              className="image-title"
                              value={postObj.cardTitle}
                              placeholder={__("Image Title", "md-prime")}
                              style={{ color: logosTitleColor }}
                            />
                          )}
                          {showLogosSubTitle && (
                            <RichText.Content
                              tagName="p"
                              className="read-more"
                              value={postObj.descriptionText}
                              placeholder={__("Sub Title", "md-prime")}
                              style={{ color: logosSubTitleColor }}
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
          <div className="md_card_block__button">
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
