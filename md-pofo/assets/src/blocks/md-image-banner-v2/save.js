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
    blockId,
    subTitle,
    title,
    headingContent,
    buttonLink,
    mediaPosition,
    backgroundColor,
    subTitleColor,
    titleColor,
    headingContentColor,
    showSubTitle,
    showTitle,
    showHeadingContent,
    showButton,
    mediaImage,
    buttonColor,
    buttonBackgroundColor,
    buttonHoverColor,
    buttonHoverBackgroundColor,
    contentBackgroundColor,
    listItems,
    showList,
    listItemColor,
    listItemIconColor,
  } = attributes;

  return (
    <div {...useBlockProps.save({ className: "md_pofo_video_header_section" })} id={`block-${blockId}`}>
      <div className={`md_pofo_image_banner_v2_wrap`}>
        <style>
          {`
            #block-${blockId} .md_pofo_image_banner_v2__btn_wrapper .md_pofo_image_banner_v2__btn {
              color: ${buttonColor} !important;
              background: ${buttonBackgroundColor} !important;
              border-color: ${buttonColor} !important;
            }
            #block-${blockId} .md_pofo_image_banner_v2__btn_wrapper .md_pofo_image_banner_v2__btn:hover {
              color: ${buttonHoverColor} !important;
              background: ${buttonHoverBackgroundColor} !important;
              border-color: ${buttonHoverColor} !important;
            }
          `}
        </style>
        <div className="md_pofo_image_banner_v2" style={{ backgroundColor }}>
          <div
            className="md_pofo_image_banner_v2__inner"
            style={{
              flexDirection: mediaPosition === "left" ? "row-reverse" : "row",
            }}
          >
            <div
              className="md_pofo_image_banner_v2__heading"
              style={{ backgroundColor: contentBackgroundColor }}
            >
              {showSubTitle && (
                <RichText.Content
                  tagName="h4"
                  value={subTitle}
                  placeholder={__("Enter Sub Title", "md-pofo")}
                  style={{
                    color: subTitleColor,
                  }}
                />
              )}
              {showTitle && (
                <RichText.Content
                  tagName="h2"
                  value={title}
                  placeholder={__("Enter Title", "md-pofo")}
                  style={{ color: titleColor }}
                />
              )}
              {showHeadingContent && (
                <RichText.Content
                  tagName="p"
                  className="md_pofo_image_banner_v2__content"
                  value={headingContent}
                  placeholder={__("Enter Content", "md-pofo")}
                  style={{
                    color: headingContentColor,
                  }}
                />
              )}
              {showList && (
                <div className="md_pofo_image_banner_v2__list">
                  <ul style={{ color: listItemColor }}>
                    {listItems.map((postObj, index) => (
                      <li
                        key={index}
                        className="md_pofo_image_banner_v2__list_item show-items-hover-wrap"
                      >
                        <RichText.Content
                          tagName="span"
                          value={postObj.title}
                          placeholder={__("Enter List Item", "md-pofo")}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="md_pofo_image_banner_v2__btn_wrapper">
                {showButton && (
                  <div className="md_pofo_image_banner_v2__btn md_btn md_btn-black md_btn-medium xs-margin-two-all border-radius-4 first-btn">
                    <i className="fa fa-play-circle" aria-hidden="true"></i>
                    <RichText.Content
                      className=""
                      tagName="span"
                      value={buttonLink}
                      placeholder={__("Enter Button Text", "md-pofo")}
                    />
                  </div>
                )}
              </div>
            </div>
            {mediaImage && (
              <div className="md_pofo_image_banner_v2__media">
                <div className="md-prime-block-control image-preview image-controle-visible-hover">
                  <img src={mediaImage} alt="" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
