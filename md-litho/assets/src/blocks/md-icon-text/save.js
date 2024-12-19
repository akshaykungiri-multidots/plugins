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
    logos,
    logosTitleColor,
    logosDescriptionColor,
    logoIconColor,
    showLogos,
    showLogosTitle,
    showLogosDescription,
    showLogosIcon,
    showLeftCounter,
    showRightCounter,
    leftCounterNumber,
    leftCounterTitle,
    leftCounterDescription,
    leftCounterNumberColor,
    leftCounterTitleColor,
    leftCounterDescriptionColor,
    rightCounterNumber,
    rightCounterTitle,
    rightCounterDescription,
    rightCounterNumberColor,
    rightCounterTitleColor,
    rightCounterDescriptionColor,
    yearOfExperience,
    yearOfExperienceText,
    yearOfExperienceColor,
    yearOfExperienceTextColor,
    yearOfExperienceBackgroundImage,
    showYearOfExperience,
    showYearOfExperienceBackgroundImage,
  } = attributes;

  return (
    <div {...useBlockProps.save()}>
      <div className="md_icon_text">
        {showLogos && (
        <div className="md_icon_text__slider_wrap">
          <div className="md_icon_text__slider">
            {logos &&
              logos.map((postObj) => (
                <div
                  key={postObj.id}
                  className="logo-slide show-items-hover-wrap"
                >
                  <div className="md-lithomd_icon_text__item-icon">
                    <div className="md-lithomd_icon_text__item-icon__wrapper">
                      {showLogosIcon && (
                      <div className="md-lithomd_icon_text__item-icon__wrapper-icon">
                        <i
                          className={"fa " + postObj.icon}
                          style={{ color: logoIconColor }}
                        ></i>
                      </div>
                      )}
                      <div className="md-lithomd_icon_text__item-icon__wrapper-text">
                        {showLogosTitle && (
                        <RichText.Content
                          tagName="h4"
                          className="image-title"
                          value={postObj.iconTitle}
                          placeholder={__("Image Title", "md-prime")}
                          style={{ color: logosTitleColor }}
                        />
                        )}
                        {showLogosDescription && (
                        <RichText.Content
                          tagName="p"
                          className="image-text"
                          value={postObj.iconText}
                          placeholder={__("Image Text", "md-prime")}
                          style={{ color: logosDescriptionColor }}
                        />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        )}
        <div className="md_icon_text__counter_wrap">
          <div className="md_icon_text__counter">
            {showLeftCounter && (
              <div className="counter-item md_left_counter">
                <div className="counter-number">
                  <RichText.Content
                    tagName="h4"
                    className="counter-number"
                    value={leftCounterNumber}
                    placeholder={__("0+", "md-prime")}
                    style={{ color: leftCounterNumberColor }}
                  />
                </div>
                <div className="counter-title">
                  <RichText.Content
                    tagName="h4"
                    className="counter-title"
                    value={leftCounterTitle}
                    placeholder={__("Counter Title", "md-prime")}
                    style={{ color: leftCounterTitleColor }}
                  />
                </div>
                <div className="counter-description">
                  <RichText.Content
                    tagName="p"
                    className="counter-description"
                    value={leftCounterDescription}
                    placeholder={__("Counter Description", "md-prime")}
                    style={{ color: leftCounterDescriptionColor }}
                  />
                </div>
              </div>
            )}
            {showYearOfExperience && (
              <div className="counter-item md_year_of_experience">
                <div className="counter-number">
                  <RichText.Content
                    tagName="span"
                    className="counter-number"
                    value={yearOfExperience}
                    placeholder={__("20+", "md-prime")}
                    style={{ color: yearOfExperienceColor, backgroundImage: showYearOfExperienceBackgroundImage ? `url(${yearOfExperienceBackgroundImage})` : "none" }}
                  />
                </div>
                <div className="counter-title">
                  <RichText.Content
                    tagName="h4"
                    className="counter-title"
                    value={yearOfExperienceText}
                    placeholder={__("Year of Experience Text", "md-prime")}
                    style={{ color: yearOfExperienceTextColor }}
                  />
                </div>
              </div>
            )}
            {showRightCounter && (
              <div className="counter-item md_right_counter">
                <div className="counter-number">
                  <RichText.Content
                    tagName="h4"
                    className="counter-number"
                    value={rightCounterNumber}
                    placeholder={__("0+", "md-prime")}
                    style={{ color: rightCounterNumberColor }}
                  />
                </div>
                <div className="counter-title">
                  <RichText.Content
                    tagName="h4"
                    className="counter-title"
                    value={rightCounterTitle}
                    placeholder={__("Counter Title", "md-prime")}
                    style={{ color: rightCounterTitleColor }}
                  />
                </div>
                <div className="counter-description">
                  <RichText.Content
                    tagName="p"
                    className="counter-description"
                    value={rightCounterDescription}
                    placeholder={__("Counter Description", "md-prime")}
                    style={{ color: rightCounterDescriptionColor }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
