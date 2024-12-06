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
    showHeading,
    headingColor,
    slideItems,
    autoplay,
    arrows,
    dots,
    slideInfinite,
    slideSlidesToShow,
    slideSlidesToScroll,
    showCompanyImage,
    showTestimonialText,
    showAuthorImage,
    showAuthorName,
    testimonialTextColor,
    authorNameColor,
    companyList,
    showCompanyList,
    companyListTextColor,
    companyListSubTextColor,
    companyListBgColor,
    companyLogos,
    showCompanyLogos,
  } = attributes;
  return (
    <div
      {...useBlockProps.save({
        className: "md_company_slider_section",
      })}
    >
      <div className="md_company_slider_section__heading">
        {showHeading && (
          <RichText.Content
            tagName="h2"
            value={heading}
            placeholder={__("Heading", "md-prime")}
            style={{ color: headingColor }}
          />
        )}
      </div>
      <div className="md_company_slider_section__sliderItems">
        <div className="md_hero_banner_slider md_company_slider_grid">
          <div 
          className="md_slider"
          data-autoplay={autoplay}
          data-arrows={arrows}
          data-dots={dots}
          data-infinite={slideInfinite}
          data-slidesToShow={slideSlidesToShow}
          data-slidesToScroll={slideSlidesToScroll}
          >
            {slideItems.map((item, index) => (
              <div
                className={`md_company_slider_grid_item active"`}
                key={index}
              >
                <div className="md_company_slider_grid_item__inner">
                  {showAuthorImage && (
                    <div className="md-prime-block-control image-preview image-controle-visible-hover md_company_slider_grid_item__authoImage">
                      <img
                        src={
                          item.authorImage
                        }
                        alt={"slider"}
                      />
                    </div>
                  )}
                  <div className="md_company_slider_grid_item__content">
                    {showAuthorImage && (
                      <div className="md-prime-block-control image-preview image-controle-visible-hover md_company_slider_grid_item__companyImage">
                        <img
                          src={
                            item.companyImage
                          }
                          alt={"slider"}
                        />
                      </div>
                    )}
                    {showTestimonialText && (
                      <RichText.Content
                        tagName="p"
                        className="md_company_slider_grid_item__testimonialText"
                        value={item.testimonialText}
                        placeholder={__("Testimonial Text", "md-prime")}
                        style={{ color: testimonialTextColor }}
                      />
                    )}
                    {showAuthorName && (
                      <RichText.Content
                        tagName="h3"
                        className="md_company_slider_grid_item__authorName"
                        value={item.authorName}
                        placeholder={__("Author Name", "md-prime")}
                        style={{ color: authorNameColor }}
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="md_company_slider_section__companyList">
        <div className="md_company_slider_section__companyList__container">
          {showCompanyList &&
            companyList.map((item, index) => (
              <div
                className={`md_company_slider_grid_item show-items-hover-wrap`}
                key={index}
              >
                <div className="md_company_slider_grid_item__inner">
                  <div className="md-prime-block-control image-preview image-controle-visible-hover md_company_slider_companyList__companyImage">
                    <img
                      src={
                        item.companyImage
                      }
                      alt={"slider"}
                    />
                  </div>
                  <div className="md_company_slider_grid_item__content">
                    <RichText.Content
                      tagName="p"
                      className="md_company_slider_grid_item__text"
                      value={item.text}
                      placeholder={__("Text", "md-prime")}
                      style={{ color: companyListTextColor }}
                    />
                    <RichText.Content
                      tagName="p"
                      className="md_company_slider_grid_item__subText"
                      value={item.subText}
                      placeholder={__("Sub Text", "md-prime")}
                      style={{ color: companyListSubTextColor }}
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="md_company_slider_section__companyLogos">
        <div className="md_company_slider_section__companyLogos__container">
          {showCompanyLogos &&
            companyLogos.map((item, index) => (
              <div
                className={`md_company_slider_grid_item show-items-hover-wrap`}
                key={index}
              >
                <div className="md_company_slider_grid_item__inner">
                  <div className="md-prime-block-control image-preview image-controle-visible-hover md_company_slider_companyLogos__companyLogo">
                    <img src={item.companyLogo} alt={"slider"} />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>      
    </div>
  );
}
