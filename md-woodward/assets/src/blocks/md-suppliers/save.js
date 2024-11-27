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
    contentTabs,
    backgroundImage,
    enableOverlay,
    backgroundOverlay,
    headingColor,
    contentTabTitleColor,
    contentTabContentColor,
    contentTabButtonColor,
    contentTabButtonHoverColor,
    contentTabButtonBackgroundColor,
    contentTabButtonBackgroundHoverColor,
    showContentTabButton,
    showHeading,
  } = attributes;
  return (
    <div {...useBlockProps.save({ className: "md_suppliers_block" })}>
      <style>
        {`
			  .md_suppliers_block__tab-content__button__input {
				color: ${contentTabButtonColor};
				background: ${contentTabButtonBackgroundColor};
			  }
			  .md_suppliers_block__tab-content__button__input:hover {
				color: ${contentTabButtonHoverColor};
				background: ${contentTabButtonBackgroundHoverColor};
			  }
			`}
      </style>
      <div className="md_suppliers_block__inner">
        {backgroundImage && (
          <img src={backgroundImage} alt="Supplies" className="bg-img" />
        )}
        {enableOverlay && (
        <div
          className="md_suppliers_background_overlay"
          style={{ background: backgroundOverlay }}
        ></div>
        )}
        <div className="container">
          {showHeading && (
            <RichText.Content
              tagName="h2"
              className="md_suppliers_block__heading"
              value={heading}
              style={{ color: headingColor }}
              placeholder={__("Enter Heading", "md-prime")}
            />
          )}
          <div className="md_suppliers_block__tabs">
            <div className="md_suppliers_block__tabs-title">
              {contentTabs &&
                contentTabs.map((postObj, index) => (
                  <div
                    key={postObj.id}
                    className={`md_suppliers_block__tab-title-wrap show-items-hover-wrap ${
                      index === 0 ? "active" : ""
                    }`}
                    data-tab={index}
                  >
                    <div className="md_suppliers_block__tab-icon"></div>
                    <RichText.Content
                      tagName="h3"
                      className="md_suppliers_block__tab-title__input"
                      value={postObj.title}
                      style={{ color: contentTabTitleColor }}
                      placeholder={__("Enter Title", "md-prime")}
                    />
                  </div>
                ))}
            </div>
            <div className="md_suppliers_block__tabs-content">
              {contentTabs &&
                contentTabs.map((postObj, index) => (
                <div className={`md_suppliers_block__tab-content_item ${index === 0 ? "active" : ""}`} key={index} data-tab={index}>
                  <RichText.Content
                    tagName="p"
                    className="md_suppliers_block__tab-content__input"
                    value={postObj.content}
                    style={{ color: contentTabContentColor }}
                    placeholder={__("Enter Content", "md-prime")}
                  />
                  {showContentTabButton && (
                    <div className="md_suppliers_block__tab-content__button">
                      <RichText.Content
                        tagName="button"
                        className="md_suppliers_block__tab-content__button__input md-btn-main has-right-arrow"
                        value={postObj.buttonTitle}
                        style={{ color: contentTabButtonColor }}
                        placeholder={__("Enter Button Title", "md-prime")}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
