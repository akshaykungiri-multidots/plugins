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
    headingLogo,
    heading,
    mediaurl,
    youtubeurl,
    videotype,
    enablePosterVideo,
    posterMediaUrl,
    posterYoutubeUrl,
    posterVideoType,
    aboutContent,
    aboutSmallText,
    showHeading,
    showVideo,
    showAboutContent,
    showAboutSmallText,
    headingColor,
    aboutContentColor,
    aboutSmallTextColor,
    backgroundColor,
  } = attributes;
  return (
    <div {...useBlockProps.save({ className: "md_about_header_section" })}>
      <div className="md_about_header__inner" style={{ backgroundColor }}>
        <div className="container"> 
          <div className="md_about_header__wrap">
            <div className="md_about_header__about-hero">
              <div className="md_about_header__about-hero__inner">
                <div className="md_about_header__about-hero_wrap">
                  {headingLogo && (
                  <div className="md-prime-block-control image-preview image-controle-visible-hover md_about_header__about_header_image">
                    <img
                      src={headingLogo}
                      alt={"slider"}
                    />
                  </div>
                  )}
                  {showHeading && (
                    <RichText.Content
                      tagName="h2"
                      className="md_about_header__about_header_intro__heading"
                      value={heading}
                      placeholder={__("Heading", "md-ageofunion")}
                      style={{ color: headingColor }}
                    />
                  )}
                  <div className="md_about_header__about-hero_line -horizontal-1"></div>
                  <div className="md_about_header__about-hero_line -horizontal-2"></div>
                  <div className="md_about_header__about-hero_line -vertical-1"></div>
                  <div className="md_about_header__about-hero_line -vertical-2"></div>
                </div>
              </div>
            </div>
            {showVideo && (
              <div className="md_about_header__video_item">
                <figure className="md_about_header__video_item__figure">
                  <a
                    className="md_about_header__video_item__figure__box__video"
                    href={videotype === "youtube" ? youtubeurl : mediaurl}
                    data-fancybox="video"
                  >
                    <span className="md_about_header__video_item__figure__box__video__rendered_text">
                      {__("Play Video", "md-ageofunion")}
                    </span>
                    <span className="md_about_header__video_item__figure__box__video__button">
                      <span className="md_about_header__video_item__figure__box__video__button__circle"></span>
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
          </div>
          <div className="md_about_content">
            <div className="md_about_content_line -vertical-1"></div>
            <div className="md_about_content_line -vertical-2"></div>
            <div className="md_about_content__inner">
              {showAboutSmallText && (
                <RichText.Content
                  tagName="div"
                  className="md_about_content__small_text"
                  value={aboutSmallText}
                  placeholder={__("CTA Project Small Text", "md-ageofunion")}
                  style={{ color: aboutSmallTextColor }}
                />
              )}
              {showAboutContent && (
                <div className="md_about_content__content">
                  <RichText.Content
                    tagName="div"
                    className="md_about_content__content__text"
                    value={aboutContent}
                    placeholder={__("CTA Project Content", "md-ageofunion")}
                    style={{ color: aboutContentColor }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
