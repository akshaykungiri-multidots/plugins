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
    subHeading,
    heading,
    imageBoxes,
    enableSlider,
    subHeadingColor,
    headingColor,
    imageBoxContentColor,
    imageBoxButtonColor,
    showSubHeading,
    showHeading,
    showImage,
    showImageBoxContent,
    showImageBoxButton,
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
                {showSubHeading && (
                <RichText.Content
                  tagName="h6"
                  value={subHeading}
                  style={{
                    color: subHeadingColor,
                  }}
                />
                )}
                {showHeading && (
                <RichText.Content
                  tagName="h2"
                  value={heading}
                  style={{
                    color: headingColor,
                  }}
                />
                )}
              </div>
            </div>
          </div>
          <div className="text-video-slider__slider">
            <div className="container">
              <div className={ enableSlider ? "bakery_antian__slider md-slick-slider enableSlider" : "bakery_antian__slider md-slick-slider"}>
                {imageBoxes &&
                  imageBoxes.map((postObj, index) => (
                    <div className="bakery_antian__slider-item show-items-hover-wrap" key={index}>
                      <div className="bakery_antian__slider-image">
                        {showImage && (
                          <img src={postObj.slider_image} alt={"Slider"} />
                        )}
                      </div>
                      <div className="bakery_antiab__slider-content">
                        {showImageBoxContent && (
                        <RichText.Content
                          tagName="p"
                          value={postObj.slider_content}
                          style={{
                            color: imageBoxContentColor,
                          }}
                        />
                        )}
                        {showImageBoxButton && (
                        <div className="bakery_antian__slider-button btn-anitian">
                        <RichText.Content
                          tagName="a"
                          className="btn"
                          value={postObj.slider_button}
                          style={{
                            color: imageBoxButtonColor,
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
