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
import { useBlockProps } from "@wordpress/block-editor";

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
    mediaurl,
    youtubeurl,
    videotype,
    showPlayButton,
    playButtonImage,
    showPlayIconTitle,
    playIconTitle,
  } = attributes;
  return (
    <div
      {...useBlockProps.save({
        className: "md_anitian_image_boxes_section",
      })}
    >
      <div className="area-video-block-box">
				<div className="container">
					<div className="area-video-box">
						<a data-fancybox rel="noopener noreferrer" href={ videotype === "youtube" ? youtubeurl : mediaurl }>
              {showPlayButton && (
                <img src={playButtonImage} className="md-video-play-button" alt="Play Button" />
              )}
              {showPlayIconTitle && (
                <p>{playIconTitle}</p>
              )}
							<div className="circle" style={{ animationDelay: "-3s" }}></div>
              <div className="circle" style={{ animationDelay: "-2s" }}></div>
              <div className="circle" style={{ animationDelay: "-3s" }}></div>
              <div className="circle" style={{ animationDelay: "0s" }}></div>
						</a>
						<div className="area2071-video-play-button-box">
							<div className="area2071-video-play-button-box-inner"></div>
						</div>
					</div>
				</div>
			</div>
    </div>
  );
}
