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
    backgroundImage,
    headingContent,
    buttonLink,
    headingContentColor,
    showButton,
    buttonColor,
    buttonBackgroundColor,
    buttonHoverColor,
    buttonHoverBackgroundColor,
  } = attributes;

  return (
    <div {...useBlockProps.save({ className: "md_woodward_cta" })}>
      <div className={`md_woodward_cta_text_wrap`} style={{ backgroundImage: `url(${backgroundImage})` }}>
        <style>
          {`
            .md_woodward_cta_text__btn {
              color: ${buttonColor} !important;
              background: ${buttonBackgroundColor} !important;
            }
            .md_woodward_cta_text__btn:hover {
              color: ${buttonHoverColor} !important;
              background: ${buttonHoverBackgroundColor} !important;
            }
          `}
        </style>
        <div className="md_woodward_cta_text">
          <div className="container">
            <div className="md_woodward_cta_text__inner">
              <div className="md_woodward_cta_text__heading">
                <RichText.Content
                  tagName="p"
                  className="md_woodward_cta_text__content"
                  value={headingContent}
                  placeholder={__("Enter Content", "md-woodward")}
                  style={{
                    color: headingContentColor,
                  }}
                />
                {showButton && (
                  <div className="md_woodward_cta_text__btn_wrapper">
                    <RichText.Content
                      className="btn-anitian md_woodward_cta_text__btn"
                      tagName="p"
                      value={buttonLink}
                      placeholder={__("Enter Button Text", "md-woodward")}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
