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
    ctaLabel,
    mediaurl,
    youtubeurl,
    videotype,
    enablePosterVideo,
    posterMediaUrl,
    posterYoutubeUrl,
    posterVideoType,
    ctaProjectImage,
    ctaProjectContent,
    ctaProjectSmallText,
    ctaProjectButtonText,
    showHeading,
    showCtaLabel,
    showVideo,
    showCtaProjectImage,
    showCtaProjectContent,
    showCtaProjectSmallText,
    showCtaProjectButtonText,
    headingColor,
    ctaLabelColor,
    ctaProjectContentColor,
    ctaProjectSmallTextColor,
    ctaProjectButtonTextColor,
    ctaProjectButtonBackgroundColor,
    ctaProjectButtonHoverTextColor,
    ctaProjectButtonHoverBackgroundColor,
  } = attributes;
  return (
    <div {...useBlockProps.save({ className: "md_manifesto_section" })}>
      <style>
        {`
			.md_manifesto__cta_project_text__button span {
			  color: ${ctaProjectButtonTextColor};
			  background-color: ${ctaProjectButtonBackgroundColor};
			}
			.md_manifesto__cta_project_text__button span:hover {
			  color: ${ctaProjectButtonHoverTextColor} !important;
			  background-color: ${ctaProjectButtonHoverBackgroundColor} !important;
			}
		  `}
      </style>
      <div className="md_manifesto__inner">
        {showVideo && (
          <div className="md_manifesto__video_item">
            <figure className="md_manifesto__video_item__figure">
              <a
                className="md_manifesto__video_item__figure__box__video"
                href={videotype === "youtube" ? youtubeurl : mediaurl}
                data-fancybox="video"
              >
                <span className="md_manifesto__video_item__figure__box__video__rendered_text">
                  {__("Play Video", "md-ageofunion")}
                </span>
                <span className="md_manifesto__video_item__figure__box__video__button">
                  <span className="md_manifesto__video_item__figure__box__video__button__circle"></span>
                </span>
              </a>
              {enablePosterVideo && (
                <div className="text_video__youtube">
                  <div className="video_section_wrapper" id="MdYTplayer">
                    <div className="wrapper__box-inner">
                      <div
                        className="video-details-wrapper"
                        style={{ textAlign: "center" }}
                      >
                        <div className="video-data-edit">
                          {posterVideoType === "youtube" && (
                            <>
                              {posterYoutubeUrl && (
                                <iframe
                                  src={
                                    posterYoutubeUrl.replace(
                                      "watch?v=",
                                      "embed/"
                                    ) + "?controls=0"
                                  }
                                  data-src={
                                    posterYoutubeUrl +
                                    "?enablejsapi=1&controls=0&rel=0"
                                  }
                                  title="video"
                                ></iframe>
                              )}
                            </>
                          )}
                        </div>
                        {posterVideoType === "media-upload" &&
                          posterMediaUrl && (
                            <div className="image-preview image-controle-visible-hover">
                              <video
                                muted=""
                                loop=""
                                className="self-media"
                                id="video"
                                controls
                                autoPlay
                              >
                                <source src={posterMediaUrl} type="video/mp4" />
                              </video>
                            </div>
                          )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </figure>
          </div>
        )}
        <div className="md_manifesto__cta_project_intro">
          <div className="md_manifesto__cta_project_intro__inner">
            <RichText.Content
              tagName="div"
              className="md_manifesto__cta_project_intro__cta_label"
              value={ctaLabel}
              placeholder={__("CTA Label", "md-ageofunion")}
              style={{ color: ctaLabelColor }}
            />
            <RichText.Content
              tagName="h2"
              className="md_manifesto__cta_project_intro__heading"
              value={heading}
              placeholder={__("Heading", "md-ageofunion")}
              style={{ color: headingColor }}
            />
          </div>
        </div>
        <div className="md_manifesto__cta_project_grid">
          {showCtaProjectImage && ctaProjectImage && (
            <div className="md-prime-block-control image-preview image-controle-visible-hover md_manifesto__cta_project_image">
              <img
                src={ctaProjectImage}
                alt={"slider"}
              />
            </div>
          )}
          {showCtaProjectContent && (
            <div className="md_manifesto__cta_project_content">
              <RichText.Content
                tagName="div"
                className="md_manifesto__cta_project_content__text"
                value={ctaProjectContent}
                placeholder={__("CTA Project Content", "md-ageofunion")}
                style={{ color: ctaProjectContentColor }}
              />
            </div>
          )}
          <div className="md_manifesto__cta_project_text">
            {showCtaProjectSmallText && (
              <RichText.Content
                tagName="div"
                className="md_manifesto__cta_project_text__small_text"
                value={ctaProjectSmallText}
                placeholder={__("CTA Project Small Text", "md-ageofunion")}
                style={{ color: ctaProjectSmallTextColor }}
              />
            )}
            {showCtaProjectButtonText && (
              <div className="md_manifesto__cta_project_text__button">
                <RichText.Content
                  tagName="span"
                  value={ctaProjectButtonText}
                  placeholder={__("CTA Project Button Text", "md-ageofunion")}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
