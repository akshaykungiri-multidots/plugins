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
    faqItems,
    featuresList,
    backgroundImage,
    backgroundColor,
    showSubHeading,
    showHeading,
    showFeaturesList,
    subHeadingColor,
    headingColor,
    subHeadingBackgroundColor,
    faqItemTitleColor,
    faqItemContentColor,
    featuresListColor,
  } = attributes;
  return (
    <div
      {...useBlockProps.save({ className: "md_faq_section" })}
      style={{ backgroundColor }}
    >
      <div className="md_faq_section__inner">
        <div className="md_faq_image_banner">
          <img src={backgroundImage} alt="background" />
        </div>
        {showSubHeading && (
        <RichText.Content
          tagName="h4"
          className="md_faq_section__sub_heading"
          value={subHeading}
          placeholder={__("Enter Sub Heading", "md-faq")}
          style={{
            color: subHeadingColor,
            backgroundColor: subHeadingBackgroundColor,
          }}
        />
        )}
        {showHeading && (
        <RichText.Content
          tagName="h2"
          className="md_faq_section__heading"
          value={heading}
          placeholder={__("Enter Heading", "md-faq")}
          style={{ color: headingColor }}
        />
        )}
        <div className="md_faq_section__faq_items">
          {faqItems &&
            faqItems.map((postObj, index) => (
              <div
                className={
                  index === 0
                    ? "ma_faq_block--inner-item active show-items-hover-wrap"
                    : "ma_faq_block--inner-item show-items-hover-wrap"
                }
                key={index}
              >
                <div
                  className="ma_faq_block--inner-item-heading"
                  role="button"
                  tabIndex={0}
                  aria-label={__("Toggle item", "md-prime")}
                >
                  <RichText.Content
                    tagName="div"
                    name="accordian-title"
                    placeholder={__("Title…")}
                    value={postObj.title}
                    style={{ color: faqItemTitleColor }}
                  />
                  <i
                    className={
                      0 === index ? "fa fa-minus" : "fa fa-plus"
                    }
                    role="button"
                    tabIndex={0}
                    aria-label={
                      0 === index
                        ? __("Collapse item", "md-prime")
                        : __("Expand item", "md-prime")
                    }
                  ></i>
                </div>
                <div className="ma_faq_block--inner-item-content">
                  <RichText.Content
                    tagName="div"
                    name="accordian-content"
                    placeholder={__("Content…")}
                    value={postObj.content}
                    style={{ color: faqItemContentColor }}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="md_crafto_features_list_wrap">
        {showFeaturesList && (
          <div className="md_crafto_features_list">
            {featuresList &&
              featuresList.map((feature) => (
                <div
                  key={feature.id}
                  className="md_crafto_features_list_item show-items-hover-wrap"
                >
                  <div className="md_crafto_features_list_item_inner">
                    <i className={"fa " + feature.icon}></i>
                    <RichText.Content
                      tagName="p"
                      value={feature.feature}
                      placeholder={__("Enter Feature", "md-prime")}
                      style={{ color: featuresListColor }}
                    />
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
