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
    headingCircleImage,
    heading,
    featureBox1Title,
    featureBox1Description,
    featureBox2Title,
    featureBox2Description,
    showHeadingCircleImage,
    showHeading,
    showFeatureBox1,
    showFeatureBox2,
    headingColor,
    featureBox1TitleColor,
    featureBox1DescriptionColor,
    featureBox2TitleColor,
    featureBox2DescriptionColor,
    autoplay,
    arrows,
    dots,
    slideInfinite,
    slideSlidesToShow,
    slideSlidesToScroll,
    slideItems,
    sliderSubTitleFontColor,
    sliderTitleFontColor,
    sliderDescriptionFontColor,
    buttonColor,
    buttonBackgroundColor,
    buttonHoverColor,
    buttonHoverBackgroundColor,
    showButton,
    showSubTitle,
    showTitle,
    showDescription,
  } = attributes;
  return (
    <div
      {...useBlockProps.save({
        className: "md_slider_v2_section",
      })}
    >
      <style>
        {`
          .md_slider_v2__item__content__button-wrap {
            color: ${buttonColor};
            background: ${buttonBackgroundColor} !important;
          }
          .md_slider_v2__item__content__button-wrap:hover {
            color: ${buttonHoverColor};
            background: ${buttonHoverBackgroundColor} !important;
          }
        `}
      </style>
      {showHeadingCircleImage && (
        <div className="md_slider_v2__media">
          <div className="md-prime-block-control image-preview image-controle-visible-hover md_litho_image_banner_v2__media1">
            <img src={headingCircleImage} alt={"slider"} />
          </div>
        </div>
      )}
      <div className="md_slider_v2__heading">
        {showHeading && (
          <RichText.Content
            tagName="h2"
            className="md_slider_v2__heading__title"
            value={heading}
            placeholder={__("Enter Title", "md-prime")}
            style={{ color: headingColor }}
          />
        )}
        <div className="md_slider_v2__heading__feature-boxes">
          {showFeatureBox1 && (
            <div className="md_slider_v2__heading__feature-box">
              <RichText.Content
                tagName="h4"
                className="md_slider_v2__heading__feature-box__title"
                value={featureBox1Title}
                placeholder={__("Enter Title", "md-prime")}
                style={{ color: featureBox1TitleColor }}
              />
              <RichText.Content
                tagName="p"
                className="md_slider_v2__heading__feature-box__description"
                value={featureBox1Description}
                placeholder={__("Enter Description", "md-prime")}
                style={{ color: featureBox1DescriptionColor }}
              />
            </div>
          )}
          {showFeatureBox2 && (
            <div className="md_slider_v2__heading__feature-box">
              <RichText.Content
                tagName="h4"
                className="md_slider_v2__heading__feature-box__title"
                value={featureBox2Title}
                placeholder={__("Enter Title", "md-prime")}
                style={{ color: featureBox2TitleColor }}
              />
              <RichText.Content
                tagName="p"
                className="md_slider_v2__heading__feature-box__description"
                value={featureBox2Description}
                placeholder={__("Enter Description", "md-prime")}
                style={{ color: featureBox2DescriptionColor }}
              />
            </div>
          )}
        </div>
      </div>
      <div className="md_hero_banner_slider md_slider_v2_grid">
        <div
          className="md_slider_v2"
          data-autoplay={autoplay}
          data-arrows={arrows}
          data-dots={dots}
          data-infinite={slideInfinite}
          data-slidesToShow={slideSlidesToShow}
          data-slidesToScroll={slideSlidesToScroll}
        >
          {slideItems.map((item, index) => (
            <div className={`md_slider_v2_grid_item active"`} key={index}>
              <div
                className={`md_slider_v2__item`}
                style={{ backgroundImage: `url(${item.mediaurl})` }}
              >
                {item.enableOverlay && (
                  <div
                    className="md_slider_v2__item__overlay"
                    style={{
                      backgroundColor: item.overlayColor,
                      opacity: item.overlayOpacity,
                    }}
                  ></div>
                )}
                <div className="md_slider_v2__item__content">
                  {showSubTitle && (
                    <div className="md_slider_v2__item__content__subtitle_wrap">
                      <RichText.Content
                        tagName="h4"
                        className="md_slider_v2__item__content__subtitle"
                        value={item.subtitle}
                        placeholder={__("Enter Subtitle", "md-prime")}
                        style={{
                          color: sliderSubTitleFontColor,
                        }}
                      />
                    </div>
                  )}
                  {showTitle && (
                    <RichText.Content
                      tagName="h1"
                      className="md_slider_v2__item__content__title"
                      value={item.title}
                      placeholder={__("Enter Title", "md-prime")}
                      style={{
                        color: sliderTitleFontColor,
                      }}
                    />
                  )}
                  {showDescription && (
                    <RichText.Content
                      tagName="p"
                      className="md_slider_v2__item__content__description"
                      value={item.description}
                      placeholder={__("Enter Description", "md-prime")}
                      style={{
                        color: sliderDescriptionFontColor,
                      }}
                    />
                  )}
                  {showButton && (
                    <div className="md_slider_v2__item__content__button-wrap">
                      <RichText.Content
                        tagName="span"
                        className="md_slider_v2__item__content__button md-btn-main has-right-arrow"
                        value={item.buttonText}
                        placeholder={__("Enter Button Text", "md-prime")}
                      />
                      <i className="fa fa-caret-right"></i>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
