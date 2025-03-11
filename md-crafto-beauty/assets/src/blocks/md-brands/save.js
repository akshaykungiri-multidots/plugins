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
    subheading,
    heading,
    showSubheading,
    showHeading,
    subheadingColor,
    headingColor,
    numberOfBrandsItemsPerRow,
    brandsItems,
  } = attributes;
  return (
    <div {...useBlockProps.save({ className: "md_brands_section" })}>
      <style>
        {`
          .md_brands_item__inner {
            .md_brands_item:nth-child(${numberOfBrandsItemsPerRow}n) {
            border-right: none;
          }
          .md_brands_item:nth-child(-n + ${numberOfBrandsItemsPerRow}) {
            border-bottom: none;
          }
        `}
      </style>
      <div className={"md_brands_section_inner "}>
        <div className="md_brands_heading__wrapper">
          <div className="md_brands_heading">
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
        </div>
        <div className="md_brands_items">
          <div
            className="md_brands_item__inner"
            style={{
              gridTemplateColumns: `repeat(${numberOfBrandsItemsPerRow}, 1fr)`,
            }}
          >
            {brandsItems.map((item, index) => (
              <div
                key={index}
                className={"md_brands_item show-items-hover-wrap"}
              >
                <div className="md_brands_item_inner">
                  <div className="md-prime-block-control image-preview image-controle-visible-hover md_brands_item_inner__media">
                    <img src={item.brandsImage} alt={"slider"} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
