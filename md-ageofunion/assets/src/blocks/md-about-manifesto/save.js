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
    manifestoHeadingCoverImage,
    manifestoIntroHeading,
    manifestoFigureImage,
    manifestoContent,
    showManifestoIntroHeading,
    showManifestoFigureImage,
    showManifestoContent,
    manifestoIntroHeadingColor,
    manifestoContentColor,
    backgroundColor,
  } = attributes;
  return (
    <div {...useBlockProps.save({ className: "md_about_manifesto_section" })}>
      <div className="md_about_manifesto__inner" style={{ backgroundColor }}>
        <div className="md_about_manifesto__heading">
          {manifestoHeadingCoverImage && (
            <img src={manifestoHeadingCoverImage} alt="Manifesto Cover" />
          )}
        </div>
        <div className="container">
          <div className="md_about_manifesto__intro">
            <div className="md_about_manifesto__intro__inner">
              {showManifestoIntroHeading && (
                <RichText.Content
                  tagName="h2"
                  className="md_about_manifesto__intro__heading"
                  value={manifestoIntroHeading}
                  placeholder={__("Manifesto Intro Heading", "md-ageofunion")}
                  style={{ color: manifestoIntroHeadingColor }}  
                />
              )}
              <figure className="md_about_manifesto__grid__figure">
                {showManifestoFigureImage && manifestoFigureImage && (
                  <div className="md-prime-block-control image-preview image-controle-visible-hover md_about_manifesto__about_manifesto_image">
                    
                    <img
                      src={
                        manifestoFigureImage
                      }
                      alt={"slider"}
                    />
                  </div>
                )}
              </figure>
              {showManifestoContent && (
                <div className="md_about_manifesto__content">
                  <RichText.Content
                    tagName="div"
                    className="md_about_manifesto__content__text"
                    value={manifestoContent}
                    placeholder={__("Manifesto Content", "md-ageofunion")}
                    style={{ color: manifestoContentColor }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
