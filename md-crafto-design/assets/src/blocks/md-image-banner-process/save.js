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
    backgroundImage,
    buttonColor,
    buttonBackgroundColor,
    buttonHoverColor,
    buttonHoverBackgroundColor,
    showProcess,
    processItems,
    processItemTitleColor,
    processItemContentColor,
    mediaurl,
    youtubeurl,
    videotype,
    videoTitle,
    showVideo,
    videoTitleColor,
  } = attributes;

  return (
    <div
      {...useBlockProps.save({
        className: "md_crafto_design_video_header_section",
      })}
    >
      <div
        className={`md_crafto_design_image_banner_processs_wrap`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        <style>
          {`
            .md_crafto_design_image_banner_processs__btn {
              color: ${buttonColor} !important;
              background: ${buttonBackgroundColor} !important;
            }
            .md_crafto_design_image_banner_processs__btn:hover {
              color: ${buttonHoverColor} !important;
              background: ${buttonHoverBackgroundColor} !important;
            }
          `}
        </style>
        <div
          className="md_crafto_design_image_banner_processs"
          style={{ backgroundColor }}
        >
          <div className="container">
            <div
              className="md_crafto_design_image_banner_processs__inner"
              style={{
                flexDirection: mediaPosition === "left" ? "row-reverse" : "row",
              }}
            >
              <div className="md_crafto_design_image_banner_processs__heading">
                {showSubTitle && (
                  <RichText.Content
                    tagName="h4"
                    value={subTitle}
                    placeholder={__("Enter Sub Title", "md-crafto-design")}
                    style={{
                      color: subTitleColor,
                    }}
                  />
                )}
                {showTitle && (
                  <RichText.Content
                    tagName="h2"
                    value={title}
                    placeholder={__("Enter Title", "md-crafto-design")}
                    style={{ color: titleColor }}
                  />
                )}
                {showHeadingContent && (
                  <RichText.Content
                    tagName="p"
                    className="md_crafto_design_image_banner__content"
                    value={headingContent}
                    placeholder={__("Enter Content", "md-crafto-design")}
                    style={{
                      color: headingContentColor,
                    }}
                  />
                )}
                <div className="md_crafto_design_image_banner_processs__btn_wrapper">
                  {showButton && (
                    <div className="btn-anitian md_crafto_design_image_banner_processs__btn md-btn-main btn-large has-right-arrow">
                      <RichText.Content
                        tagName="span"
                        value={buttonLink}
                        placeholder={__(
                          "Enter Button Text",
                          "md-crafto-design"
                        )}
                      />
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  )}
                  <div className="md_crafto_text_video__youtube">
                    <div className="md_crafto_text_video__youtube_icon">
                      <button className="play-button" aria-label="Play video" style={{ color: videoTitleColor }}>
                        <i className="bi bi-play-circle"></i>
                        <RichText.Content
                          tagName="span"
                          value={videoTitle}
                          
                          placeholder={__(
                            "Enter Video Title",
                            "md-crafto-design"
                          )}
                          style={{ color: videoTitleColor }}
                        />
                      </button>
                    </div>
                    <div className={`crafto_video_popup__wrap`}>
                      <div className="crafto_video_popup__inner">
                        <div className="crafto_video_popup__inner-header">
                          <i
                            className="dashicons dashicons-no-alt close-popup"
                            role="button"
                            tabIndex={0}
                            aria-label="Close popup"
                            onKeyDown={(event) => {
                              if (event.key === "Enter" || event.key === " ") {
                                event.preventDefault();
                                // Trigger the click event when Enter or Space key is pressed
                                event.target.click();
                              }
                            }}
                          ></i>
                        </div>
                        <div className="crafto_video_popup__inner-content">
                          <div className="text_video__youtube">
                            <div
                              className="video_section_wrapper"
                              id="MdYTplayer"
                            >
                              <div className="wrapper__box-inner">
                                <div
                                  className="video-details-wrapper"
                                  style={{ textAlign: "center" }}
                                >
                                  <div className="video-data-edit">
                                    {videotype === "youtube" && (
                                      <>
                                        {youtubeurl && (
                                          <iframe
                                            src={
                                              youtubeurl.replace(
                                                "watch?v=",
                                                "embed/"
                                              ) + "?controls=0"
                                            }
                                            data-src={
                                              youtubeurl +
                                              "?enablejsapi=1&controls=0&rel=0"
                                            }
                                            title="video"
                                          ></iframe>
                                        )}
                                      </>
                                    )}
                                  </div>

                                  {videotype === "media-upload" && mediaurl && (
                                    <div className="image-preview image-controle-visible-hover">
                                      <video
                                        muted=""
                                        loop=""
                                        className="self-media"
                                        id="video"
                                        controls
                                      >
                                        <source
                                          src={mediaurl}
                                          type="video/mp4"
                                        />
                                      </video>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md-prime-block-control image-preview image-controle-visible-hover md_crafto_design_image_banner_processs__media">
                <img src={mediaImage} alt={"slider"} />
              </div>
            </div>
          </div>
          {showProcess && (
          <div className="container">
            <div className="md_crafto_design_processs__wrapper">
              <div className="md_process_section__process_items">
                {processItems &&
                  processItems.map((postObj, index) => (
                    <div
                      className={
                        "md_process_section__process_item show-items-hover-wrap"
                      }
                      key={index}
                    >
                      <div className="ma_process_block--inner-item-inner">
                        <div className="ma_process_block--inner-item-process_step">
                          <span className="process-step">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="process-step-separator"></span>
                        </div>
                        <div className="ma_process_block--inner-item-content">
                          <RichText.Content
                            tagName="span"
                            name="accordian-title"
                            placeholder={__("Title…")}
                            value={postObj.title}
                            style={{ color: processItemTitleColor }}
                          />
                          <RichText.Content
                            tagName="p"
                            className="process-content"
                            name="accordian-content"
                            placeholder={__("Content…")}
                            value={postObj.content}
                            style={{ color: processItemContentColor }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
}
