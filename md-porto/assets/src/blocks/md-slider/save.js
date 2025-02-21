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
        className: "md_slider_section",
      })}
    >
      <style>
        {`
          .md_slider__item__content__button-wrap {
            color: ${buttonColor};
            background: ${buttonBackgroundColor} !important;
          }
          .md_slider__item__content__button-wrap:hover {
            color: ${buttonHoverColor};
            background: ${buttonHoverBackgroundColor} !important;
          }
        `}
      </style>

      <div className="md_hero_banner_slider md_slider_grid">
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
            <div className={`md_slider_grid_item active"`} key={index}>
              <div className="md_slider__item_shape"></div>
              <div
                className={`md_slider__item`}
                style={{ backgroundImage: `url(${item.mediaurl})` }}
              >
                {item.enableOverlay && (
                  <div
                    className="md_slider__item__overlay"
                    style={{
                      backgroundColor: item.overlayColor,
                      opacity: item.overlayOpacity,
                    }}
                  ></div>
                )}
                <div className="md_slider__item__content">
                  <div className="md_slider__item__content__shape">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="icon_31739763305127"
                      viewBox="2.39 2.39 95.22 95.22"
                      data-filename="icon-shape-1.svg"
                      width="90"
                      height="90"
                    >
                      <path d="m96.11 40.5h-23.18l16.39-16.39c.58-.56.58-1.56 0-2.12 0 0-11.31-11.31-11.31-11.31-.56-.56-1.56-.56-2.12 0l-16.39 16.39v-23.18c0-.83-.67-1.5-1.5-1.5h-16c-.83 0-1.5.67-1.5 1.5v23.18l-16.39-16.39c-.56-.56-1.56-.56-2.12 0l-11.31 11.31c-.58.56-.58 1.56 0 2.12 0 0 16.39 16.39 16.39 16.39h-23.18c-.83 0-1.5.67-1.5 1.5v16c0 .83.67 1.5 1.5 1.5h23.18l-16.39 16.39c-.58.56-.58 1.56 0 2.12 0 0 11.31 11.31 11.31 11.31.56.56 1.56.56 2.12 0l16.39-16.39v23.18c0 .83.67 1.5 1.5 1.5h16c.83 0 1.5-.67 1.5-1.5v-23.18l16.39 16.39c.56.56 1.56.56 2.12 0l11.31-11.31c.58-.56.58-1.56 0-2.12 0 0-16.39-16.39-16.39-16.39h23.18c.83 0 1.5-.67 1.5-1.5v-16c0-.83-.67-1.5-1.5-1.5zm-1.5 16h-25.3c-.61 0-1.15.37-1.39.93-.23.56-.1 1.21.33 1.63l17.89 17.89-9.19 9.19-17.89-17.89c-.43-.43-1.07-.56-1.63-.33s-.93.78-.93 1.39v25.3h-13v-25.3c0-.61-.37-1.15-.93-1.39-.56-.23-1.21-.1-1.63.33l-17.89 17.89-9.19-9.19 17.89-17.89c.43-.43.56-1.07.33-1.63s-.78-.93-1.39-.93h-25.3v-13h25.3c.61 0 1.15-.37 1.39-.93.23-.56.1-1.21-.33-1.63l-17.89-17.89 9.19-9.19 17.89 17.89c.43.43 1.07.56 1.63.33s.93-.78.93-1.39v-25.3h13v25.3c0 .61.37 1.15.93 1.39.56.23 1.21.1 1.63-.33l17.89-17.89 9.19 9.19-17.89 17.89c-.43.43-.56 1.07-.33 1.63s.78.93 1.39.93h25.3z"></path>
                    </svg>
                  </div>
                  {showSubTitle && (
                    <div className="md_slider__item__content__subtitle_wrap">
                      <i className="fa fa-usd"></i>
                      <RichText.Content
                        tagName="h4"
                        className="md_slider__item__content__subtitle"
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
                      className="md_slider__item__content__title"
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
                      className="md_slider__item__content__description"
                      value={item.description}
                      placeholder={__("Enter Description", "md-prime")}
                      style={{
                        color: sliderDescriptionFontColor,
                      }}
                    />
                  )}
                  {showButton && (
                    <div className="md_btn__wrapper">
                      <RichText.Content
                        tagName="span"
                        className="md_btn md_btn__arrow"
                        value={item.buttonText}
                        placeholder={__("Enter Button Text", "md-prime")}
                      />
                      <i className="bi bi-arrow-right-short"></i>
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
