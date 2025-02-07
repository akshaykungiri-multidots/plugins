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
 * React hook that is used to mark the packages element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-element/
 */
import { WPElement } from "@wordpress/element";

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
    subHeading,
    mediaImage,
    mediaImage1,
    mediaContent,
    ourApproachHeading,
    ourApproachContent,
    ourMissionHeading,
    ourMissionContent,
    showHeading,
    showSubHeading,
    showMediaContent,
    showOurApproach,
    showOurMission,
    showMediaImage,
    showMediaImage1,
    headingColor,
    subHeadingColor,
    mediaContentColor,
    ourApproachHeadingColor,
    ourApproachContentColor,
    ourMissionHeadingColor,
    ourMissionContentColor,
  } = attributes;
  return (
    <div {...useBlockProps.save({ className: "md_mission_block" })}>
      <div className="md_mission_block__heading">
        {showSubHeading && (
          <RichText.Content
            tagName="p"
            value={subHeading}
            placeholder={__("Sub Heading", "md-pofo")}
            style={{ color: subHeadingColor }}
          />
        )}
        {showHeading && (
          <RichText.Content
            tagName="h2"
            value={heading}
            placeholder={__("Heading", "md-pofo")}
            style={{ color: headingColor }}
          />
        )}
      </div>
      <div className="md_mission_block__media">
        {showMediaImage && mediaImage && (
          <div className="md-prime-block-control md_media_image image-preview image-controle-visible-hover">
            <img src={mediaImage} alt={__("Media Image", "md-pofo")} />
          </div>
        )}
        {showMediaImage1 && mediaImage1 && (
          <div className="md-prime-block-control md_media_image1 image-preview image-controle-visible-hover">
            <img src={mediaImage1} alt={__("Media Image", "md-pofo")} />
          </div>
        )}
      </div>
      <div className="md_mission_block__content">
        {showMediaContent && (
          <div className="md_mission_block__media_content">
            <RichText.Content
              tagName="div"
              value={mediaContent}
              placeholder={__("Media Content", "md-pofo")}
              style={{ color: mediaContentColor }}
            />
          </div>
        )}
        {showOurApproach && (
          <div className="md_mission_block__our_approach">
            <RichText.Content
              tagName="h3"
              value={ourApproachHeading}
              placeholder={__("Our Approach Heading", "md-pofo")}
              style={{ color: ourApproachHeadingColor }}
            />
            <RichText.Content
              tagName="div"
              value={ourApproachContent}
              placeholder={__("Our Approach Content", "md-pofo")}
              style={{ color: ourApproachContentColor }}
            />
          </div>
        )}
        {showOurMission && (
          <div className="md_mission_block__our_mission">
            <RichText.Content
              tagName="h3"
              value={ourMissionHeading}
              placeholder={__("Our Mission Heading", "md-pofo")}
              style={{ color: ourMissionHeadingColor }}
            />
            <RichText.Content
              tagName="div"
              value={ourMissionContent}
              placeholder={__("Our Mission Content", "md-pofo")}
              style={{ color: ourMissionContentColor }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
