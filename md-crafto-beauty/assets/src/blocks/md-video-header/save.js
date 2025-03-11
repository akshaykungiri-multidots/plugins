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

import playicon from "./ic-play.svg";

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
    subTitle,
    backgroundImage,
    enableOverlay,
    overlayColor,
    overlayOpacity,
    backgroundColor,
    titleColor,
    subTitleColor,
    showTitle,
    showSubTitle,
    mediaurl,
    youtubeurl,
    videotype,
  } = attributes;

  return (
    <div
      {...useBlockProps.save({
        className: "md_crafto_beauty_video_header_section",
      })}
    >
      <div
        className="md_crafto_beauty_text_video_wrap"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {enableOverlay && (
          <div
            className="md_page_title__overlay"
            style={{
              backgroundColor: overlayColor,
              opacity: overlayOpacity,
            }}
          ></div>
        )}
        <div
          className="md_crafto_beauty_text_video"
          style={{
            background: `${backgroundColor}`,
          }}
        >
          <div className="md_crafto_beauty_text_video__inner">
            <div className="md_crafto_beauty_text_video__youtube">
              <div className="md_crafto_beauty_text_video__youtube_icon">
                <button className="play-button" aria-label="Play video">
                  <img src={playicon} alt="playicon" />
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
            <div className="md_crafto_beauty_text_video__heading">
              <div className="md_crafto_beauty_text_video__typing_title">
                {showTitle && (
                  <RichText.Content
                    tagName="h2"
                    value={title}
                    placeholder={__("Enter Title", "md-crafto-beauty")}
                    style={{ color: titleColor }}
                  />
                )}
                {showSubTitle && (
                  <RichText.Content
                    tagName="p"
                    value={subTitle}
                    placeholder={__("Enter Sub Title", "md-crafto-beauty")}
                    style={{ color: subTitleColor }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
