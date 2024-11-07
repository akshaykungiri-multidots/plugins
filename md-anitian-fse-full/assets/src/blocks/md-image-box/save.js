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
    sub_heading,
    heading,
    image_boxes,
    enable_slider,
    sub_heading_color,
    heading_color,
    image_box_content_color,
    image_box_button_color,
    show_sub_heading,
    show_heading,
    show_image,
    show_image_box_content,
    show_image_box_button,
  } = attributes;
  return (
    <div
      {...useBlockProps.save({
        className: "md_anitian_image_boxes_section",
      })}
    >
      <div className="bakery_antian__slider-image-box">
        <div className="bakery_antian__slider-image-box__inner">
          <div className="text-video-slider__video-and-text">
            <div className="container">
              <div className="bakery_antian__heading">
                {show_sub_heading && (
                <RichText.Content
                  tagName="h6"
                  value={sub_heading}
                  style={{
                    color: sub_heading_color,
                  }}
                />
                )}
                {show_heading && (
                <RichText.Content
                  tagName="h2"
                  value={heading}
                  style={{
                    color: heading_color,
                  }}
                />
                )}
              </div>
            </div>
          </div>
          <div className="text-video-slider__slider">
            <div className="container">
              <div className={ enable_slider ? "bakery_antian__slider md-slick-slider enable_slider" : "bakery_antian__slider md-slick-slider"}>
                {image_boxes &&
                  image_boxes.map((postObj, index) => (
                    <div className="bakery_antian__slider-item show-items-hover-wrap">
                      <div className="bakery_antian__slider-image">
                        {show_image && (
                          <img onClick={open} src={postObj.slider_image} />
                        )}
                      </div>
                      <div className="bakery_antiab__slider-content">
                        {show_image_box_content && (
                        <RichText.Content
                          tagName="p"
                          value={postObj.slider_content}
                          style={{
                            color: image_box_content_color,
                          }}
                        />
                        )}
                        {show_image_box_button && (
                        <div class="bakery_antian__slider-button btn-anitian">
                        <RichText.Content
                          tagName="a"
                          className="btn"
                          value={postObj.slider_button}
                          style={{
                            color: image_box_button_color,
                          }}
                        />
                        </div>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
