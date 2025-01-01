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
    decadeHeadingCoverImage,
    decadeHeading,
    decadeHeadingLabel,
    decadeIntroHeading,
    decadeIntroHeadingLabel,
    decadeFigureImage,
    decadeFigureText,
    decadeContent,
    showDecadeHeading,
    showDecadeHeadingLabel,
    showDecadeIntroHeading,
    showDecadeIntroHeadingLabel,
    showDecadeFigureImage,
    showDecadeFigureText,
    showDecadeContent,
    decadeHeadingColor,
    decadeHeadingLabelColor,
    decadeIntroHeadingColor,
    decadeIntroHeadingLabelColor,
    decadeFigureTextColor,
    decadeContentColor,
    backgroundColor,
  } = attributes;
  return (
    <div {...useBlockProps.save({ className: "md_about_decade_section" })}>
      <div className="md_about_decade__inner" style={{ backgroundColor }}>
        <div className="md_about_decade__heading">
          {decadeHeadingCoverImage && (
            <img src={decadeHeadingCoverImage} alt="Decade Cover" />
          )}
          <div className="md_about_decade__poster_content">
            <div className="container">
              <div className="md_about_decade__poster_content__inner">
                {showDecadeHeadingLabel && (
                  <RichText.Content
                    tagName="aside"
                    className="md_about_decade__poster_content__heading_label"
                    value={decadeHeadingLabel}
                    placeholder={__("Decade Heading Label", "md-ageofunion")}
                    style={{ color: decadeHeadingLabelColor }}
                  />
                )}
                {showDecadeHeading && (
                  <RichText.Content
                    tagName="div"
                    className="md_about_decade__poster_content__heading"
                    value={decadeHeading}
                    placeholder={__("Decade Heading", "md-ageofunion")}
                    style={{ color: decadeHeadingColor }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="md_about_decade__intro">
            <div className="md_about_decade__intro__inner">
              {showDecadeIntroHeadingLabel && (
                <RichText.Content
                  tagName="aside"
                  className="md_about_decade__intro__heading_label"
                  value={decadeIntroHeadingLabel}
                  placeholder={__(
                    "Decade Intro Heading Label",
                    "md-ageofunion"
                  )}
                  style={{ color: decadeIntroHeadingLabelColor }}
                />
              )}
              {showDecadeIntroHeading && (
                <RichText.Content
                  tagName="h2"
                  className="md_about_decade__intro__heading"
                  value={decadeIntroHeading}
                  placeholder={__("Decade Intro Heading", "md-ageofunion")}
                  style={{ color: decadeIntroHeadingColor }}
                />
              )}
            </div>
          </div>
          <div className="md_about_decade__grid">
            <figure className="md_about_decade__grid__figure">
              {showDecadeFigureImage && decadeFigureImage && (
                <div className="md-prime-block-control image-preview image-controle-visible-hover md_about_decade__about_decade_image">
                  <img src={decadeFigureImage} alt={"slider"} />
                </div>
              )}
              {showDecadeFigureText && (
                <figcaption className="md_about_decade__grid__figure__caption">
                  <RichText.Content
                    tagName="p"
                    className="md_about_decade__grid__figure__caption__text"
                    value={decadeFigureText}
                    placeholder={__("Decade Figure Text", "md-ageofunion")}
                    style={{ color: decadeFigureTextColor }}
                  />
                </figcaption>
              )}
            </figure>
            {showDecadeContent && (
              <div className="md_about_decade__content">
                <RichText.Content
                  tagName="div"
                  className="md_about_decade__content__text"
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
