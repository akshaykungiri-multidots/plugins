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
    sub_title,
    title,
    heading_content,
    button_link,
    cover_video,
    background_image,
    background_color,
    sub_title_font_size,
    title_font_size,
    heading_content_font_size,
    button_font_size,
    sub_title_color,
    title_color,
    heading_content_color,
    button_color,
  } = attributes;
  
  return (
    <div
      {...useBlockProps.save({
        className: "md_anitian_video_header_section",
      })}
    >
      <div className="md_anitian_text_video_wrap">
          <div className="md_anitian_text_video" style={{background: `${background_color} url(${background_image}) no-repeat center center / cover`}}>
              <div className="container">
                  <div className="md_anitian_text_video__inner">
                      <div className="md_anitian_text_video__heading">
                          <RichText.Content
                            tagName="h4"
                            value={sub_title}
                            style={{fontSize: sub_title_font_size, color: sub_title_color}}
                          />
                          <RichText.Content
                            tagName="h2"
                            value={title}
                            style={{fontSize: title_font_size, color: title_color}}
                          />
                          <RichText.Content
                            tagName="p"
                            value={heading_content}
                            style={{fontSize: heading_content_font_size, color: heading_content_color}}
                          />
                          <div className="md_anitian_text_video__btn">
                            <RichText.Content
                              className="btn-anitian md_anitian_text_video__btn"
                              tagName="p"
                              value={button_link}
                              style={{fontSize: button_font_size, color: button_color}}
                            />
                          </div>
                      </div>
                      {cover_video && (
                          <div className="md_anitian_text_video__youtube">
                              <div className="text_video__youtube">
                                  <div className="video_section_wrapper" id="MdYTplayer">
                                      <iframe src={cover_video} frameborder="0" allowfullscreen></iframe>
                                  </div>
                              </div>
                          </div>
                      )}
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}
