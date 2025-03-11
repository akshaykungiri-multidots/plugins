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

import placeholder from "./placeholder-image.png";

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
    logosTitleColor,
    logosDescriptionColor,
    logosPriceColor,
    logosBadgeTextColor,
    logosBadgeBackgroundColor,
    logos,
    showLogosTitle,
    showLogosDescription,
    showLogosPrice,
    showLogosImage,
    showLogosBadge,
    logoStyle,
    numberOfLogosPerRow,
  } = attributes;
  const siteURL = window.location.origin;
  return (
    <div {...useBlockProps.save()}>
      <div
        className={
          "md_icon_text" + (logoStyle === "style1" ? " style1" : " style2")
        }
      >
        <div className="md_icon_text__wrapper">
          <div className="md_icon_text__slider_wrap">
            <div
              className="md_icon_text__slider"
              style={{
                gridTemplateColumns: `repeat(${numberOfLogosPerRow}, 1fr)`,
              }}
            >
              {logos &&
                logos.map((postObj, index) => (
                  <div
                    key={postObj.id}
                    className="md_icon_text__item logo-slide show-items-hover-wrap"
                  >
                    <div className="md_icon_text__item-image">
                      {showLogosImage && (
                        <div className="md-prime-block-control md_icon_text__item-image__img image-preview image-controle-visible-hover">
                          {postObj.image ? (
                            <img src={postObj.image} alt={"slider"} />
                          ) : (
                            <img src={siteURL + placeholder} alt={"slider"} />
                          )}
                        </div>
                      )}
                      <div className="md_icon_text__item-image-content">
                        {showLogosTitle && (
                          <RichText.Content
                            tagName="h4"
                            className="image-title"
                            value={postObj.imageTitle}
                            placeholder={__("Image Title", "md-prime")}
                            style={{ color: logosTitleColor }}
                          />
                        )}
                        {showLogosDescription && (
                          <RichText.Content
                            tagName="p"
                            className="image-text"
                            value={postObj.imageText}
                            placeholder={__("Description", "md-prime")}
                            style={{ color: logosDescriptionColor }}
                          />
                        )}
                      </div>
                      {showLogosPrice && (
                        <div className="md_icon_text__item-image-price">
                          <RichText.Content
                            tagName="p"
                            className="image-price"
                            value={postObj.imagePrice}
                            placeholder={__("$ Price", "md-prime")}
                            style={{ color: logosPriceColor }}
                          />
                        </div>
                      )}
                      {showLogosBadge && (
                        <div className="md_icon_text__item-image-badge">
                          <div
                            className="badge"
                            style={{
                              color: logosBadgeTextColor,
                              backgroundColor: logosBadgeBackgroundColor,
                            }}
                          >
                            <RichText.Content
                              tagName="span"
                              value={postObj.imageBadgeText}
                              placeholder={__("Badge Text", "md-prime")}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
