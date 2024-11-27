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
    subTitle,
    title,
    headingContent,
    buttonLink,
    videoPosterImage,
    backgroundColor,
    subTitleColor,
    titleColor,
    headingContentColor,
    showSubTitle,
    showTitle,
    showHeadingContent,
    showButton,
    mediaurl,
    youtubeurl,
    videotype,
    buttonColor,
    buttonBackgroundColor,
    buttonHoverColor,
    buttonHoverBackgroundColor,
  } = attributes;

  return (
    <div
      {...useBlockProps.save({
        className: "md_woodward_video_header_section",
      })}
    >
      <div className="md_woodward_text_video_wrap">
        <style>
          {`
            .md_woodward_text_video__btn {
              color: ${buttonColor};
              background: ${buttonBackgroundColor};
            }
            .md_woodward_text_video__btn:hover {
              color: ${buttonHoverColor} !important;
              background: ${buttonHoverBackgroundColor};
            }
          `}
        </style>
        <div
          className="md_woodward_text_video"
          style={{
            background: `${backgroundColor}`,
          }}
        >
          <div className="container">
            <div className="md_woodward_text_video__inner">
              <div className="md_woodward_text_video__heading">
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
                  <div className="md_woodward_text_video__btn_wrapper">
                    <RichText.Content
                      className="btn-anitian md_woodward_text_video__btn md-btn-main has-right-arrow"
                      tagName="p"
                      value={buttonLink}
                    />
                  </div>
                )}
              </div>
              <div className="md_woodward_text_video__youtube">
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
                            {videoPosterImage ? (
                              <video
                                muted=""
                                loop=""
                                className="self-media"
                                poster={videoPosterImage}
                                id="video"
                              >
                                <source src={mediaurl} type="video/mp4" />
                              </video>
                            ) : (
                              <video
                                muted=""
                                loop=""
                                className="self-media"
                                id="video"
                              >
                                <source src={mediaurl} type="video/mp4" />
                              </video>
                            )}
                            <img
                              src={playicon}
                              alt="Play video"
                              id="circle-play-b"
                              className="media-and-text__video-play-btn"
                            />
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
