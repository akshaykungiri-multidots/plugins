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
    emailPlaceholder,
    buttonText,
    subscribeUrl,
    successMessage,
    errorMessage,
    showHeading,
    showSubheading,
    headingColor,
    subheadingColor,
    formStyle
  } = attributes;
  return (
    <div {...useBlockProps.save({ className: "md-subscribe" })}>
      <div className={ "md-subscribe__inner " + formStyle }>
        <div className="md-subscribe__heading">
          {showSubheading && (
            <RichText.Content
              tagName="p"
              value={subheading}
              placeholder={__("Subheading")}
              style={{ color: subheadingColor }}
            />
          )}
          {showHeading && (
            <RichText.Content
              tagName="h2"
              value={heading}
              placeholder={__("Heading")}
              style={{ color: headingColor }}
            />
          )}
        </div>
        <div className="md-subscribe__form">
          <div className="md-subscribe__message">
            <p className="md-subscribe__success-message">{successMessage}</p>
            <p className="md-subscribe__error-message">{errorMessage}</p>
          </div>
          <form action={subscribeUrl} method="post">
            <input type="email" name="email" placeholder={emailPlaceholder} />
            <button type="submit">{buttonText}</button>
          </form>
        </div>
      </div>
    </div>
  );
}
