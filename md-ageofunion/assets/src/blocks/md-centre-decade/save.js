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
    decadeSlider,
    slidesToShow,
    slidesToScroll,
    autoplay,
    infinite,
    showDots,
    showArrows,
    decadeHeading,
    decadeIntroHeading,
    decadeFigureImage,
    decadeFigureText,
    decadeContent,
    showDecadeHeading,
    showDecadeSlider,
    showDecadeIntroHeading,
    showDecadeFigureImage,
    showDecadeFigureText,
    showDecadeContent,
    decadeHeadingColor,
    decadeIntroHeadingColor,
    decadeFigureTextColor,
    decadeContentColor,
    backgroundColor,
  } = attributes;
  return (
    <div {...useBlockProps.save({ className: "md_centre_decade_section" })}>
      <div className="md_centre_decade__inner" style={{ backgroundColor }}>
        <div className="md_centre_decade__heading">
          {showDecadeHeading && (
            <RichText.Content
              tagName="div"
              className="md_centre_decade__poster_content__heading"
              value={decadeHeading}
              placeholder={__("Decade Heading", "md-ageofunion")}
              style={{ color: decadeHeadingColor }}
            />
          )}
        </div>
        {showDecadeSlider && (
          <div className="md_centre_decade__slider">
            <div className="md_centre_decade__slider__inner">
              <div
                className="md_logo_slider__slider"
                data-slides-to-show={slidesToShow}
                data-slides-to-scroll={slidesToScroll}
                data-autoplay={autoplay}
                data-infinite={infinite}
                data-show-dots={showDots}
                data-show-arrows={showArrows}
              >
                {decadeSlider &&
                  decadeSlider.map((postObj) => (
                    <div
                      key={postObj.id}
                      className="logo-slide show-items-hover-wrap"
                    >
                      <div className="md_centre_decade__slider__item">
                        <div className="md-prime-block-control image-preview image-controle-visible-hover">
                          {postObj.image && (
                            <img src={postObj.image} alt={"slider"} />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
        <div className="container">
          <div className="md_centre_decade__intro">
            <div className="md_centre_decade__intro__inner">
              {showDecadeIntroHeading && (
                <RichText.Content
                  tagName="h2"
                  className="md_centre_decade__intro__heading"
                  value={decadeIntroHeading}
                  placeholder={__("Decade Intro Heading", "md-ageofunion")}
                  style={{ color: decadeIntroHeadingColor }}
                />
              )}
            </div>
          </div>
          <div className="md_centre_decade__grid">
            <figure className="md_centre_decade__grid__figure">
              {showDecadeFigureImage && decadeFigureImage && (
                <div className="md-prime-block-control image-preview image-controle-visible-hover md_centre_decade__centre_decade_image">
                  <img src={decadeFigureImage} alt={"slider"} />
                </div>
              )}
              {showDecadeFigureText && (
                <figcaption className="md_centre_decade__grid__figure__caption">
                  <RichText.Content
                    tagName="p"
                    className="md_centre_decade__grid__figure__caption__text"
                    value={decadeFigureText}
                    placeholder={__("Decade Figure Text", "md-ageofunion")}
                    style={{ color: decadeFigureTextColor }}
                  />
                </figcaption>
              )}
            </figure>
            {showDecadeContent && (
              <div className="md_centre_decade__content">
                <RichText.Content
                  tagName="div"
                  className="md_centre_decade__content__text"
                  value={decadeContent}
                  placeholder={__("Decade Content", "md-ageofunion")}
                  style={{ color: decadeContentColor }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
