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
    title,
    typedText,
    backgroundImage,
    backgroundColor,
    titleColor,
    showTitle,
    mediaurl,
    youtubeurl,
    videotype,
    videoText,
    showVideoText,
    videoTextColor,
  } = attributes;

  return (
    <div
      {...useBlockProps.save({ className: "md_litho_video_header_section" })}
    >
      <div
        className="md_litho_text_video_wrap"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div
          className="md_litho_text_video"
          style={{
            background: `${backgroundColor}`,
          }}
        >
          <div className="md_litho_text_video__inner">
            <div className="md_litho_text_video__heading">
              <h3
                className="md_litho_text_video__typing_title"
                style={{ color: titleColor }}
              >
                {showTitle && (
                  <RichText.Content
                    tagName="span"
                    value={title}
                    placeholder={__("Enter Title", "md-litho")}
                  />
                )}
                <span
                  className="md_litho_text_video__typing"
                  data-typing-speed="100"
                  data-typing-delay="1000"
                  data-typing-words={typedText
                    .map((item) => item.text)
                    .join(",")}
                ></span>
              </h3>
            </div>
            <div className="md_litho_text_video__youtube">
              <div className="md_litho_text_video__youtube_icon">
                <button className="play-button" aria-label="Play video">
                  <i className="dashicons dashicons-controls-play"></i>
                </button>
                <div className="md_litho_text_video__text">
                  {showVideoText && (
                    <RichText.Content
                      tagName="p"
                      value={videoText}
                      style={{ color: videoTextColor }}
                    />
                  )}
                </div>
              </div>
              <div className={`litho_video_popup__wrap`}>
                <div className="litho_video_popup__inner">
                  <div className="litho_video_popup__inner-header">
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
                  <div className="litho_video_popup__inner-content">
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
      </div>
    </div>
  );
}
