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
    processSteps,
    mediaPosition,
    backgroundColor,
    subTitleColor,
    titleColor,
    showSubTitle,
    showTitle,
    showProcessSteps,
    mediaImage,
    mediaImage2,
    mediaImage3,
    mediaImage4,
    mediaImage5,
    backgroundImage,
  } = attributes;

  return (
    <div {...useBlockProps.save({ className: "md_resort_video_header_section" })}>
      <div className={`md_resort_image_banner_v2_wrap`}>
        <div className="md_resort_image_banner_v2" style={{ backgroundColor }}>
          <div className="container">
            <div
              className="md_resort_image_banner_v2__inner"
              style={{
                flexDirection: mediaPosition === "left" ? "row-reverse" : "row",
              }}
            >
              <div className="md_resort_image_banner_v2__heading">
                {showSubTitle && (
                  <RichText.Content
                    tagName="h4"
                    value={subTitle}
                    placeholder={__("Enter Sub Title", "md-resort")}
                    style={{
                      color: subTitleColor,
                    }}
                  />
                )}
                {showTitle && (
                  <RichText.Content
                    tagName="h2"
                    value={title}
                    placeholder={__("Enter Title", "md-resort")}
                    style={{ color: titleColor }}
                  />
                )}
                {showProcessSteps && (
                  <div className="md_resort_image_banner_v2__process_steps">
                    {processSteps &&
                      processSteps.map((postObj, index) => (
                        <div
                          key={postObj.id}
                          className="md_resort_process_step show-items-hover-wrap"
                        >
                          <div className="md_resort_process_steps__item">
                            <div className="md_resort_process_steps__item_icon_wrap">
                              <div className="md_resort_process_steps__item_icon">
                                <span className="md_resort_process_steps__item_icon--number">
                                  {index + 1}
                                </span>
                                <div className="md_resort_process_steps__item_icon--box-overlay"></div>
                              </div>
                              <span className="md_resort_process_steps__item--separator"></span>
                            </div>
                            <div className="md_resort_process_steps__item_content">
                              <RichText.Content
                                tagName="span"
                                className="md_resort_process_steps__item_content--title"
                                value={postObj.title}
                                placeholder={__("Enter Text", "md-resort")}
                              />
                              <RichText.Content
                                tagName="p"
                                className="md_resort_process_steps__item_content--description"
                                value={postObj.description}
                                placeholder={__("Enter Text", "md-resort")}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </div>
              <div className="md_resort_image_banner_v2__media">
                {backgroundImage && (
                  <img
                    src={backgroundImage}
                    alt={"slider"}
                    className="md_resort_image_banner_v2__background"
                  />
                )}
                <div className="md-prime-block-control image-preview image-controle-visible-hover md_resort_image_banner_v2__media1">
                  <img
                    src={mediaImage}
                    alt={"slider"}
                  />
                </div>
                <div className="md-prime-block-control image-preview image-controle-visible-hover md_resort_image_banner_v2__media2">
                  <img
                    src={mediaImage2}
                    alt={"slider"}
                  />
                </div>
                <div className="md-prime-block-control image-preview image-controle-visible-hover md_resort_image_banner_v2__media3">
                  <img
                    src={mediaImage3}
                    alt={"slider"}
                  />
                </div>
                <div className="md-prime-block-control image-preview image-controle-visible-hover md_resort_image_banner_v2__media4">
                  <img
                    src={mediaImage4}
                    alt={"slider"}
                  />
                </div>
                <div className="md-prime-block-control image-preview image-controle-visible-hover md_resort_image_banner_v2__media5">
                  <img
                    src={mediaImage5}
                    alt={"slider"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
