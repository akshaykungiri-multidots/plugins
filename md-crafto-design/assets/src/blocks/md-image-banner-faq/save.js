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
    headingContent,
    buttonLink,
    beautyTipsText,
    mediaPosition,
    backgroundColor,
    subTitleColor,
    titleColor,
    headingContentColor,
    showSubTitle,
    showTitle,
    showHeadingContent,
    showButton,
    showBeautyTips,
    mediaImage,
    backgroundImage,
    buttonColor,
    buttonBackgroundColor,
    buttonHoverColor,
    buttonHoverBackgroundColor,
    beautyTipsTextColor,
    showFaq,
    faqItems,
    faqItemTitleColor,
    faqItemContentColor,
    beautyTipsItems,
    beautyTipsItemColor,
  } = attributes;

  return (
    <div
      {...useBlockProps.save({ className: "md_crafto_design_video_header_section" })}
    >
      
      <div
        className={`md_crafto_design_image_banner_faqs_wrap`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        <style>
          {`
            .md_crafto_design_image_banner_faqs__btn {
              color: ${buttonColor} !important;
              background: ${buttonBackgroundColor} !important;
            }
            .md_crafto_design_image_banner_faqs__btn:hover {
              color: ${buttonHoverColor} !important;
              background: ${buttonHoverBackgroundColor} !important;
            }
          `}
        </style>
        <div
          className="md_crafto_design_image_banner_faqs"
          style={{ backgroundColor }}
        >
          <div className="container">
            <div
              className="md_crafto_design_image_banner_faqs__inner"
              style={{
                flexDirection: mediaPosition === "left" ? "row-reverse" : "row",
              }}
            >
              <div className="md_crafto_design_image_banner_faqs__heading">
                {showSubTitle && (
                  <RichText.Content
                    tagName="h4"
                    value={subTitle}
                    
                    placeholder={__("Enter Sub Title", "md-crafto-design")}
                    style={{
                      color: subTitleColor,
                    }}
                  />
                )}
                {showTitle && (
                  <RichText.Content
                    tagName="h2"
                    value={title}
                    
                    placeholder={__("Enter Title", "md-crafto-design")}
                    style={{ color: titleColor }}
                  />
                )}
                {showHeadingContent && (
                  <RichText.Content
                    tagName="p"
                    className="md_crafto_design_image_banner__content"
                    value={headingContent}
                    
                    placeholder={__("Enter Content", "md-crafto-design")}
                    style={{
                      color: headingContentColor,
                    }}
                  />
                )}
                <div className="md_crafto_design_faqs__wrapper">
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
                                0 === index
                                  ? "fa fa-minus"
                                  : "fa fa-plus"
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
                          </div>
                        </div>
                      ))}
                  </div>
                  
                </div>
                <div className="md_crafto_design_image_banner_faqs__btn_wrapper">
                  {showButton && (
                    <div className="btn-anitian md_crafto_design_image_banner_faqs__btn md-btn-main btn-extra-large has-right-arrow">
                      <RichText.Content
                        tagName="span"
                        value={buttonLink}
                        
                        placeholder={__(
                          "Enter Button Text",
                          "md-crafto-design"
                        )}
                      />
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  )}
                </div>
              </div>
              {mediaImage && (
              <div className="md-prime-block-control image-preview image-controle-visible-hover md_crafto_design_image_banner_faqs__media">
                
                <img
                  src={mediaImage}
                  alt={"slider"}
                />
              </div>
            )}
            </div>
          </div>
        </div>
        {showBeautyTips && (
          <div className="md_crafto_design_image_banner__beauty_tips_wrap">
            <div className="container">
              <div className="md_crafto_design_image_banner__beauty_tips">
                <div className="md_crafto_design_image_banner__awesome_text">
                  <RichText.Content
                    tagName="h5"
                    value={beautyTipsText}
                    
                    placeholder={__("Enter Beauty Tips", "md-crafto-design")}
                    style={{ color: beautyTipsTextColor }}
                  />
                </div>
                <div className="md_beauty_tips_slider md_slider_grid">
                  <div className="md_slider">
                    {beautyTipsItems.map((item, index) => (
                      <div className={`md_slider_grid_item active"`} key={index}>
                        <div className="md_slider_grid_item_inner">
                          <div className="md_slider_grid_item_inner_content">
                            <RichText.Content
                              tagName="span"
                              className="md_slider_grid_item_inner_title"
                              value={item.title}
                              
                              placeholder={__("Enter Title", "md-crafto-design")}
                              style={{ color: beautyTipsItemColor }}
                            />
                            <RichText.Content
                              tagName="span"
                              value={item.content}
                              
                              placeholder={__("Enter Content", "md-crafto-design")}
                              style={{ color: beautyTipsItemColor }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
