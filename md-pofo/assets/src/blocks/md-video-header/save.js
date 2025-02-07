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
    blockId,
    heading,
    description,
    buttonText,
    backgroundImage,
    enableOverlay,
    overlayColor,
    overlayOpacity,
    backgroundColor,
    headingColor,
    showHeading,
    showDescription,
    showButton,
    buttonColor,
    buttonBackgroundColor,
    buttonHoverColor,
    buttonHoverBackgroundColor,
    descriptionColor,
    mediaurl,
    youtubeurl,
    videotype,
    videoFooterText,
    showVideoFooterText,
    videoFooterTextColor,
  } = attributes;

  return (
    <div {...useBlockProps.save({ className: "md_pofo_video_header_section" })} id={ `block-${blockId}` } >
      <style>
        {`
            #block-${blockId} .md_pofo_text_video__button .md_btn {
              color: ${buttonColor} !important;
              background: ${buttonBackgroundColor} !important;
              border-color: ${buttonColor} !important;
            }
            #block-${blockId} .md_pofo_text_video__button .md_btn:hover {
              color: ${buttonHoverColor} !important;
              background: ${buttonHoverBackgroundColor} !important;
              border-color: ${buttonHoverColor} !important;
            }
          `}
      </style>
      <div
        className="md_pofo_text_video_wrap"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {enableOverlay && (
          <div
            className="md_pofo_text_video_overlay"
            style={{
              backgroundColor: overlayColor,
              opacity: overlayOpacity,
            }}
          ></div>
        )}
        <div
          className="md_pofo_text_video"
          style={{
            background: `${backgroundColor}`,
          }}
        >
          <div className="md_pofo_text_video__inner">
            <div className="md_pofo_text_video__heading">
              {showHeading && (
                <RichText.Content
                  tagName="h1"
                  value={heading}
                  placeholder={__("Enter Heading", "md-pofo")}
                  style={{ color: headingColor }}
                />
              )}
              {showDescription && (
                <RichText.Content
                  tagName="p"
                  className="md_pofo_text_video__description"
                  value={description}
                  placeholder={__("Enter Description", "md-pofo")}
                  style={{ color: descriptionColor }}
                />
              )}
              {showButton && (
                <div className="md_pofo_text_video__button">
                  <div
                    className="md_btn md_btn-black md_btn-medium xs-margin-two-all border-radius-4 first-btn"
                    style={{ color: buttonColor }}
                  >
                    <i className="fa fa-play-circle" aria-hidden="true"></i>
                    <RichText.Content
                      tagName="span"
                      value={buttonText}
                      placeholder={__("Enter Button Text", "md-pofo")}
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="md_pofo_text_video__youtube">
              <div className="md_pofo_text_video__youtube_icon">
                <button className="play-button" aria-label="Play video">
                  <img src={playicon} alt="playicon" />
                </button>
              </div>
              <div className={`pofo_video_popup__wrap`}>
                <div className="pofo_video_popup__inner">
                  <div className="pofo_video_popup__inner-header">
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
                  <div className="pofo_video_popup__inner-content">
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
          <div className="md_pofo_text_video__footer">
            {showVideoFooterText && (
              <RichText.Content
                tagName="p"
                value={videoFooterText}
                placeholder={__("Enter Footer Text", "md-pofo")}
                style={{ color: videoFooterTextColor }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
