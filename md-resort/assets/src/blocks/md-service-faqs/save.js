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
    subTitle,
    title,
    faqItems,
    mediaPosition,
    backgroundColor,
    subTitleColor,
    titleColor,
    showSubTitle,
    showTitle,
    mediaImage,
    mediaImage2,
    mediaImage3,
    mediaImage4,
    backgroundImage,
    faqItemContentColor,
    faqItemTitleColor,
  } = attributes;

  return (
    <div
      {...useBlockProps.save({ className: "md_resort_video_header_section" })}
    >
      <div className={`md_resort_service_faqs_wrap`}>
        <div className="md_resort_service_faqs" style={{ backgroundColor }}>
          <div className="container">
            <div
              className="md_resort_service_faqs__inner"
              style={{
                flexDirection: mediaPosition === "left" ? "row-reverse" : "row",
              }}
            >
              <div className="md_resort_service_faqs__heading">
                {showSubTitle && (
                  <RichText.Content
                    tagName="h4"
                    value={subTitle}
                    placeholder={__("Enter Sub Title", "md-resort")}
                    style={{
                      color: subTitleColor,
                    }}
                  />
                )}
                {showTitle && (
                  <RichText.Content
                    tagName="h2"
                    value={title}
                    placeholder={__("Enter Title", "md-resort")}
                    style={{ color: titleColor }}
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
                            className="faq-content"
                            name="accordian-content"
                            placeholder={__("Content…")}
                            value={postObj.content}
                            style={{ color: faqItemContentColor }}
                          />
                          <div className="md-prime-block-control image-preview image-controle-visible-hover md_resort_service_faqs__image">
                            <img src={postObj.mediaImage} alt={"slider"} />
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div className="md_resort_service_faqs__media">
                {backgroundImage && (
                  <img
                    src={backgroundImage}
                    alt={"slider"}
                    className="md_resort_service_faqs__background"
                  />
                )}
                <div className="md-prime-block-control image-preview image-controle-visible-hover md_resort_service_faqs__media1">
                  <img src={mediaImage} alt={"slider"} />
                </div>
                <div className="md-prime-block-control image-preview image-controle-visible-hover md_resort_service_faqs__media2">
                  <img src={mediaImage2} alt={"slider"} />
                </div>
                <div className="md-prime-block-control image-preview image-controle-visible-hover md_resort_service_faqs__media3">
                  <img src={mediaImage3} alt={"slider"} />
                </div>
                <div className="md-prime-block-control image-preview image-controle-visible-hover md_resort_service_faqs__media4">
                  <img src={mediaImage4} alt={"slider"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
