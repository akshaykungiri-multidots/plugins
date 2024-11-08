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
    backgroundImage,
    backgroundColor,
    subTitleColor,
    titleColor,
    headingContentColor,
    buttonColor,
    showSubTitle,
    showTitle,
    showHeadingContent,
    showButton,
    mediaurl,
    youtubeurl,
    videotype,
  } = attributes;

  return (
    <div
      {...useBlockProps.save({
        className: "md_anitian_video_header_section",
      })}
    >
      <div className="md_anitian_text_video_wrap">
        <div
          className="md_anitian_text_video"
          style={{
            background: `${backgroundColor} url(${backgroundImage}) no-repeat center center / cover`,
          }}
        >
          <div className="container">
            <div className="md_anitian_text_video__inner">
              <div className="md_anitian_text_video__heading">
                {showSubTitle && (
                  <RichText.Content
                    tagName="h4"
                    value={subTitle}
                    style={{
                      color: subTitleColor,
                    }}
                  />
                )}
                {showTitle && (
                  <RichText.Content
                    tagName="h2"
                    value={title}
                    style={{ color: titleColor }}
                  />
                )}
                {showHeadingContent && (
                  <RichText.Content
                    tagName="p"
                    value={headingContent}
                    style={{
                      color: headingContentColor,
                    }}
                  />
                )}
                {showButton && (
                  <div className="md_anitian_text_video__btn">
                    <RichText.Content
                      className="btn-anitian md_anitian_text_video__btn"
                      tagName="p"
                      value={buttonLink}
                      style={{ color: buttonColor }}
                    />
                  </div>
                )}
              </div>
              <div className="md_anitian_text_video__youtube">
                <div className="text_video__youtube">
                  <div className="video_section_wrapper" id="MdYTplayer">
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
                                    youtubeurl.replace("watch?v=", "embed/") +
                                    "?controls=0"
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
                              autoPlay=""
                              muted=""
                              loop=""
                              className="self-media"
                            >
                              <source src={mediaurl} type="video/mp4" />
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
  );
}
