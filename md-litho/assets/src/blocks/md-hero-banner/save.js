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
import { useBlockProps, RichText, InnerBlocks } from "@wordpress/block-editor";

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
    title,
    description,
    backgroundImage,
    iconList,
    showTitle,
    showDescription,
    showSocialLinks,
    showIconList,
    showBackgroundImage,
    titleColor,
    descriptionColor,
    iconColor,
    iconTitleColor,
    iconDescriptionColor,
    iconListBackgroundColor,
  } = attributes;
  return (
    <div {...useBlockProps.save({ className: "md_hero_banner" })}>

      <div
        className="md_hero_banner__inner"
        style={{
          backgroundImage: showBackgroundImage
            ? `url(${backgroundImage})`
            : "none",
        }}
      >
        <div className="container">
          <div className="md_hero_banner__content">
            <div className="md_hero_banner__content__wrap">
              {showTitle && (
                <RichText.Content
                  tagName="h2"
                  className="md_hero_banner__title"
                  value={title}
                  
                  style={{ color: titleColor }}
                  placeholder={__("Title", "md-prime")}
                />
              )}
              {showDescription && (
                <RichText.Content
                  tagName="p"
                  className="md_hero_banner__description"
                  value={description}
                  
                  style={{ color: descriptionColor }}
                  placeholder={__("Description", "md-prime")}
                  allowedFormats={[
                    "core/bold",
                    "core/italic",
                    "core/underline",
                  ]}
                />
              )}
              {showSocialLinks && (
                <InnerBlocks.Content />
              )}
            </div>
          </div>
        </div>
      </div>
      {showIconList && (
        <div className={`md_icon_block__slider_wrap container`}>
          <div className="md_icon_block__slider">
            {iconList &&
              iconList.map((postObj) => (
                <div
                  key={postObj.id}
                  className="logo-slide show-items-hover-wrap"
                  style={{ backgroundColor: iconListBackgroundColor }}
                >
                  <div className="md-lithomd_icon_block__item-icon">
                    <div className="md-lithomd_icon_block__item-icon__wrapper">
                      {postObj.icon && (
                        <div className="md-lithomd_icon_block__item-icon__wrapper-icon">
                          <i
                            className={"fa " + postObj.icon}
                            style={{ color: iconColor }}
                          ></i>
                        </div>
                      )}
                      <div className="md-lithomd_icon_block__item-icon__wrapper-text">
                        <RichText.Content
                          tagName="h4"
                          className="image-title"
                          value={postObj.iconTitle}
                          placeholder={__("Image Title", "md-prime")}
                          style={{ color: iconTitleColor }}
                        />
                        <RichText.Content
                          tagName="p"
                          className="image-text"
                          value={postObj.iconText}
                          placeholder={__("Image Text", "md-prime")}
                          style={{ color: iconDescriptionColor }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
