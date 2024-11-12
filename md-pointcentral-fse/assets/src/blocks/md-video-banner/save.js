/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */

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
    heading,
    subheading,
    contentText,
    overlayColor,
    buttonText,
    mediaurl,
    youtubeurl,
    videotype,
    headingColor,
    subheadingColor,
    contentColor,
    buttonColor,
    showSubheading,
    showHeading,
    showContent,
    showButton,
  } = attributes;
  return (
    <div {...useBlockProps.save({ className: "md_video_banner" })}>
      <div className="pointcentral-video-banner">
        <div className="pointcentral-video-banner__video">
          <div className="pointcentral-video-banner__video__inner">
            {videotype === "youtube" && youtubeurl && (
              <iframe
                src={youtubeurl.replace("watch?v=", "embed/") + "?controls=0"}
                data-src={youtubeurl + "?enablejsapi=1&controls=0&rel=0"}
                title="video"
              ></iframe>
            )}
            {videotype === "media-upload" && mediaurl && (
              <video autoPlay="" muted="" loop="" className="self-media">
                <source src={mediaurl} type="video/mp4" />
              </video>
            )}
          </div>
        </div>
        <div
          className="pointcentral-video-banner__overlay"
          style={{ backgroundColor: overlayColor }}
        ></div>
        <div className="container">
          <div className="pointcentral-video-banner__content">
            {showSubheading && (
              <RichText.Content
                tagName="h3"
                style={{ color: subheadingColor }}
                className="pointcentral-video-banner__sub-title"
                value={subheading}
              />
            )}
            {showHeading && (
              <RichText.Content
                tagName="h2"
                style={{ color: headingColor }}
                className="pointcentral-video-banner__title"
                value={heading}
              />
            )}
            {showContent && (
              <RichText.Content
                tagName="p"
                style={{ color: contentColor }}
                className="pointcentral-video-banner__description"
                value={contentText}
              />
            )}
            {showButton && (
              <div className="pointcentral-video-banner__button">
                <RichText.Content
                  tagName="p"
                  style={{ color: buttonColor }}
                  className="pointcentral-video-banner__button"
                  value={buttonText}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
