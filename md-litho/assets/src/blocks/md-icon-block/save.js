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
    enableBorder,
    logosTitleColor,
    logosDescriptionColor,
    logoIconColor,
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
      <div className="md_icon_block">
        <div className="md_icon_block__heading">
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
          <div className={`md_icon_block__slider_wrap`}>
            <div className="md_icon_block__slider">
              {logos &&
                logos.map((postObj) => (
                  <div
                    key={postObj.id}
                    className="logo-slide show-items-hover-wrap"
                    style={{
                      width: `${100 / numberOfLogosPerRow}%`,
                      textAlign: logosAlignment,
                    }}
                  >
                    <div className="md-lithomd_icon_block__item-icon" style={{border: enableBorder ? "1px solid" : "none"}}>
                      <div className="md-lithomd_icon_block__item-icon__wrapper">
                        {showLogosIcon && (
                          <div className="md-lithomd_icon_block__item-icon__wrapper-icon">
                            <i
                              className={"fa " + postObj.icon}
                              style={{ color: logoIconColor }}
                            ></i>
                          </div>
                        )}
                        <div className="md-lithomd_icon_block__item-icon__wrapper-text">
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
          <div className="md_icon_block__button">
            <RichText.Content
              tagName="p"
              className="button"
              value={buttonText}
              placeholder={__("Button Text", "md-prime")}
              style={{ backgroundColor: buttonBackgroundColor, color: buttonColor }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
