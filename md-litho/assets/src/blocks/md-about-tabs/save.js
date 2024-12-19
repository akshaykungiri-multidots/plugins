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
    aboutTabs,
    showTabIcon,
    tabItemColor,
    tabActiveItemColor,
    showTabContentImage,
    showTabContentHeading,
    showTabContentVideo,
    showTabContentTitle,
    showTabContentDescription,
    tabContentHeadingColor,
    tabContentTitleColor,
    tabContentDescriptionColor,
  } = attributes;
  return (
    <div {...useBlockProps.save({ className: "md_about_tabs" })}>
      <style>
        {`
          .md_about_tabs__inner .md_about_tabs_item.active {
            color: ${tabActiveItemColor};
          }
          .md_about_tabs__inner .md_about_tabs_item {
            color: ${tabItemColor};
          }
        }`}
      </style>
      <div className="md_about_tabs__wrap">
        <ul className="md_about_tabs__inner">
          {aboutTabs &&
            aboutTabs.map((postObj, index) => (
              <li
                key={index}
                className={
                  "md_about_tabs_item show-items-hover-wrap" +
                  (index === 0 ? " active" : "")
                }
                data-tab={index}
              >
                <div className="md_about_tabs__item-icon">
                  <div className="md_about_tabs__item-icon__wrapper">
                    {postObj.icon && showTabIcon && (
                      <div className="md_about_tabs__item-icon__wrapper-icon">
                        <i className={"fa " + postObj.icon}></i>
                      </div>
                    )}
                    <div className="md_about_tabs__item-icon__wrapper-text">
                      <RichText.Content
                        tagName="h4"
                        className="image-title"
                        value={postObj.iconTitle}
                        placeholder={__("Title", "md-prime")}
                      />
                    </div>
                  </div>
                </div>
              </li>
            ))}
        </ul>
        <div className="md_about_tabs__content">
          {aboutTabs &&
            aboutTabs.map((postObj, index) => (
              <div
                className={
                  "md_about_tabs__content-inner" +
                  (index === 0 ? " active" : "")
                }
                key={index}
                data-tab={index}
              >
                {showTabContentImage && postObj.mediaImage && (
                  <div className="md_litho_about_tabs__media">
                    <div className="md-prime-block-control image-preview image-controle-visible-hover md_litho_about_tabs__media1">
                      <img src={postObj.mediaImage} alt={"slider"} />
                      <span className="image-overlay"></span>
                    </div>
                  </div>
                )}
                <div className="md_about_tabs__content-video_block">
                  {showTabContentHeading && (
                    <RichText.Content
                      tagName="h3"
                      className="video-heading"
                      value={postObj.videoHeading}
                      placeholder={__("Video Heading", "md-prime")}
                      style={{ color: tabContentHeadingColor }}
                    />
                  )}
                  {showTabContentVideo && (
                  <div className="md_about_tabs__content-video">
                    <div className="md_about_tabs__content-video__display">
                      <div className="md_about_tabs__content-video__button">
                        <a
                          className="play-button"
                          aria-label="Play video"
                          href={postObj.videoURL}
                          data-fancybox="video"
                        >
                          <i className="dashicons dashicons-controls-play"></i>
                          <RichText.Content
                            tagName="span"
                            className="video-title"
                            value={postObj.videoTitle}
                            placeholder={__("Video Title", "md-prime")}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  )}
                </div>
                <div className="md_about_tabs__content-text">
                  {showTabContentTitle && (
                    <RichText.Content
                      tagName="h3"
                      className="video-heading"
                      value={postObj.title}
                      placeholder={__("Title", "md-prime")}
                      style={{ color: tabContentTitleColor }}
                    />
                  )}
                  {showTabContentDescription && (
                    <RichText.Content
                      tagName="p"
                      className="video-heading"
                      value={postObj.description}
                      placeholder={__("Description", "md-prime")}
                      style={{ color: tabContentDescriptionColor }}
                    />
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
