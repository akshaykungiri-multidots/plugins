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
 * React hook that is used to mark the packages element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-element/
 */
import { WPElement } from "@wordpress/element";

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
    titleContent,
    buttonText,
    faqs,
    showSubTitle,
    showTitle,
    showTitleContent,
    showButton,
    showFaqs,
    subTitleColor,
    titleColor,
    titleContentColor,
    buttonColor,
    buttonBackgroundColor,
    buttonHoverColor,
    buttonHoverBackgroundColor,
    faqsTextColor,
    faqsListBackgroundColor,
  } = attributes;
  return (
    <div
      {...useBlockProps.save({ className: "md_porto_banner_faqs__section" })}
    >
      <div className={`md_porto_banner_faqs_wrap`}>
        <style>
          {`
            .md_porto_banner_faqs__btn .md_btn {
              color: ${buttonColor};
              background: ${buttonBackgroundColor};
            }
              .md_porto_banner_faqs__btn .md_btn:before {
                background: ${buttonBackgroundColor} !important;
                color: ${buttonColor} !important;
              }
            .md_porto_banner_faqs__btn .md_btn:hover {
              color: ${buttonHoverColor} !important;
              background: ${buttonHoverBackgroundColor};
            }
            .md_porto_banner_faqs__btn .md_btn:hover:before {
              background: ${buttonHoverBackgroundColor} !important;
              color: ${buttonHoverColor} !important;
            }
          `}
        </style>
        <div className="md_porto_banner_faqs">
          <div className="container">
            <div className="md_porto_banner_faqs__inner">
              <div className="md_porto_banner_faqs__heading">
                {showSubTitle && (
                  <RichText.Content
                    tagName="h4"
                    value={subTitle}
                    placeholder={__("Enter Sub Title", "md-porto")}
                    style={{
                      color: subTitleColor,
                    }}
                  />
                )}
                {showTitle && (
                  <RichText.Content
                    tagName="h2"
                    value={title}
                    placeholder={__("Enter Title", "md-porto")}
                    style={{ color: titleColor }}
                  />
                )}
                {showTitleContent && (
                  <RichText.Content
                    tagName="p"
                    className="md_porto_banner_faqs__content"
                    value={titleContent}
                    placeholder={__("Enter Content", "md-porto")}
                    style={{
                      color: titleContentColor,
                    }}
                  />
                )}
                <div className="md_btn__wrapper md_porto_banner_faqs__btn">
                  {showButton && (
                    <RichText.Content
                      className="md_btn md_btn__arrow"
                      tagName="p"
                      value={buttonText}
                      placeholder={__("Enter Button Text", "md-porto")}
                    />
                  )}
                </div>
              </div>
              {showFaqs && (
                <>
                  <div className="md_faq_section__faq_items">
                    {faqs &&
                      faqs.map((postObj, index) => (
                        <div
                          className={
                            index === 0
                              ? "ma_faq_block--inner-item active show-items-hover-wrap"
                              : "ma_faq_block--inner-item show-items-hover-wrap"
                          }
                          key={index}
                          style={{ backgroundColor: faqsListBackgroundColor }}
                        >
                          <div
                            className="ma_faq_block--inner-item-heading"
                            role="button"
                            tabIndex={0}
                            aria-label={__("Toggle item", "md-prime")}
                          >
                            <RichText.Content
                              tagName="span"
                              name="accordian-title"
                              placeholder={__("Title…")}
                              value={postObj.title}
                              style={{ color: faqsTextColor }}
                            />
                            <i
                              className={
                                0 === index
                                  ? "fa fa-angle-up"
                                  : "fa fa-angle-down"
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
                              style={{ color: faqsTextColor }}
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
