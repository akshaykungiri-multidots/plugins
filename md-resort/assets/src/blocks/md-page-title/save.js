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
    backgroundImage,
    enableOverlay,
    overlayColor,
    overlayOpacity,
    backgroundPosition,
    backgroundSize,
    backgroundRepeat,
    backgroundAttachment,
    headingColor,
  } = attributes;
  return (
    <dv {...useBlockProps.save({ className: "md_page_title" })}>
      <div
        className="md_page_title__inner"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition,
          backgroundSize,
          backgroundRepeat,
          backgroundAttachment,
        }}
      >
        {enableOverlay && (
          <div
            className="md_page_title__overlay"
            style={{
              backgroundColor: overlayColor,
              opacity: overlayOpacity,
            }}
          ></div>
        )}
        <div className="container">
          <RichText.Content
            tagName="h1"
            value={heading}
            placeholder={__("Enter Heading", "md-prime")}
            style={{ color: headingColor }}
          />
        </div>
        <div className="md_page_title__go_down">
          <i className="fa fa-angle-down"></i>
        </div>
      </div>
    </dv>
  );
}
