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
    stepsBlockList,
    stepsTitleFontColor,
    stepsContentFontColor,
    stepsSubTitleColor,
    showImage,
    showTitle,
    showContent,
    showSubTitle,
  } = attributes;
  return (
    <div {...useBlockProps.save({ className: "md_porto_steps" })}>
      
      <div className={`md_porto_steps`}>
        <div className="wrapper-inner">
          <div className="md_porto_steps__content">
            {stepsBlockList &&
              stepsBlockList.map((postObj, index) => (
                <div
                  className="md_porto_steps__item show-items-hover-wrap"
                  key={index}
                >
                  
                  <div className="md_porto_steps__item__step_number">
                    <span>{index + 1}</span>
                  </div>
                  <div className="md_porto_steps__item__wrap">
                    {showImage && postObj.steps_image && (
                      <div className="md_porto_steps__item__image">
                        <div className={`image-box-v1__box_image`}>
                          <div className="md-prime-block-control image-preview image-controle-visible-hover">
                            
                            <img
                              src={
                                postObj.steps_image
                              }
                              alt={"slider"}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="md_porto_steps__item__content">
                      {showSubTitle && (
                        <RichText.Content
                          tagName="p"
                          className="learn-more-link"
                          value={postObj.learn_more_link}
                          style={{
                            color: stepsSubTitleColor,
                          }}
                        />
                      )}
                      {showTitle && (
                        <h3
                          className="column-item-title"
                          style={{ color: stepsTitleFontColor }}
                        >
                          <RichText.Content
                            tagName="span"
                            value={postObj.steps_title}
                          />
                        </h3>
                      )}
                      <div className="md_porto_steps__item__content__link">
                        {showContent && (
                          <RichText.Content
                            tagName="p"
                            className="column-item-desc"
                            value={postObj.steps_description}
                            style={{
                              color: stepsContentFontColor,
                            }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
