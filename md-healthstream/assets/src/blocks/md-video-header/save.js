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
    mediaurl,
    iconBlocks,
    showIconBlocks,
    numberOfColumns,
    showIconText,
    iconTextColor,
    backgroundColor,
  } = attributes;

  return (
    <div
      {...useBlockProps.save({
        className: "md_healthstream_video_header_section",
      })}
    >
      <div className="md_healthstream_text_video_wrap">
        <div className="md_healthstream_text_video" style={{ backgroundColor }}>
          <div className="md_healthstream_text_video__inner">
            <div className="md_healthstream_text_video__youtube">
              {mediaurl && (
                <iframe
                  src={mediaurl}
                  frameBorder="0"
                  allowFullScreen
                  title="Video Player"
                ></iframe>
              )}
            </div>
          </div>
          {showIconBlocks && (
            <div className="md_healthstream_text_video__icon">
              <div
                className="md_healthstream_image_block__content"
                style={{
                  gridTemplateColumns: `repeat(${numberOfColumns}, 1fr)`,
                }}
              >
                {iconBlocks &&
                  iconBlocks.map((postObj, index) => (
                    <div
                      className="md_healthstream_image_block__item show-items-hover-wrap"
                      key={index}
                    >
                      <div className="md_healthstream_image_block__item__image">
                        <div className={`image-box-v1__box_image`}>
                          <div className="md-prime-block-control image-preview image-controle-visible-hover">
                            {postObj.icon_image && (
                              <img
                                src={postObj.icon_image}
                                alt={postObj.icon_title}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="md_healthstream_image_block__item__content">
                        {showIconText && (
                          <h3
                            className="column-item-title"
                            style={{ color: iconTextColor }}
                          >
                            <RichText.Content
                              tagName="span"
                              value={postObj.icon_title}
                              placeholder={__("Enter Title")}
                            />
                          </h3>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
