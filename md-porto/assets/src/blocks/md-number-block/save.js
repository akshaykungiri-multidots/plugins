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

import lineSvg from "./line.svg";

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
    description,
    showSubHeading,
    showHeading,
    showDescription,
    subHeadingColor,
    headingColor,
    descriptionColor,
    logos,
    enableBorder,
    backgroundColor,
    logosTitleColor,
    logosDescriptionColor,
    logoIconColor,
    logoIconBackgroundColor,
    logosReadMoreColor,
    showNumbers,
    showNumbersTitle,
    showNumbersDescription,
    showNumbersReadMore,
    numberOfNumbersPerRow,
    logosAlignment,
    mediaImage,
    showMediaImage,
  } = attributes;

  return (
    <div {...useBlockProps.save()}>
      <div className={"md_number_block__wrapper"} style={{ backgroundColor }}>
        <div className="container">
          <div className={"md_number_block__section "}>
            <div className={"md_number_block " + logosAlignment}>
              <div className="md_number_block__heading">
                {showSubHeading && (
                  <RichText.Content
                    tagName="h4"
                    className="sub-heading"
                    value={subHeading}
                    placeholder={__("Sub Heading", "md-prime")}
                    style={{ color: subHeadingColor }}
                  />
                )}
                {showHeading && (
                  <RichText.Content
                    tagName="h2"
                    className="heading"
                    value={heading}
                    placeholder={__("Heading", "md-prime")}
                    style={{ color: headingColor }}
                  />
                )}
                {showDescription && (
                  <RichText.Content
                    tagName="p"
                    className="description"
                    value={description}
                    placeholder={__("Description", "md-prime")}
                    style={{ color: descriptionColor }}
                  />
                )}
              </div>
              {showNumbers && (
                <div className={`md_number_block__slider_wrap `}>
                  <div className="md_number_block__slider">
                    {logos &&
                      logos.map((postObj) => (
                        <div
                          key={postObj.id}
                          className="logo-slide show-items-hover-wrap"
                          style={{
                            width: `${100 / numberOfNumbersPerRow}%`,
                          }}
                        >
                          <div
                            className={
                              "md-portomd_number_block__item-icon " +
                              logosAlignment
                            }
                            style={{
                              border: enableBorder ? "1px solid" : "none",
                            }}
                          >
                            <div className="md-portomd_number_block__item-icon__wrapper">
                              <div className="md-portomd_number_block__item-icon__wrapper-heading">
                                <div
                                  className="number-list"
                                  style={{
                                    color: logoIconColor,
                                    backgroundColor: logoIconBackgroundColor,
                                  }}
                                >
                                  <RichText.Content
                                    tagName="span"
                                    className="number"
                                    value={postObj.counterNumber}
                                    placeholder={__("Number", "md-prime")}
                                  />
                                  <RichText.Content
                                    tagName="span"
                                    className="sign"
                                    value={postObj.counterSign}
                                    placeholder={__("Sign", "md-prime")}
                                  />
                                  <div className="md-portomd_number_block__item-icon__wrapper-line">
                                    <img src={lineSvg} alt="line" />
                                  </div>
                                </div>
                              </div>
                              <div className="md-portomd_number_block__item-icon__wrapper-text">
                                {showNumbersTitle && (
                                  <RichText.Content
                                    tagName="h4"
                                    className="image-title"
                                    value={postObj.iconTitle}
                                    placeholder={__("Image Title", "md-prime")}
                                    style={{ color: logosTitleColor }}
                                  />
                                )}
                                {showNumbersDescription && (
                                  <RichText.Content
                                    tagName="p"
                                    className="image-text"
                                    value={postObj.iconText}
                                    placeholder={__("Image Text", "md-prime")}
                                    style={{ color: logosDescriptionColor }}
                                  />
                                )}
                                {showNumbersReadMore && (
                                  <RichText.Content
                                    tagName="p"
                                    className="read-more"
                                    value={postObj.readMoreText}
                                    placeholder={__("Read More", "md-prime")}
                                    style={{ color: logosReadMoreColor }}
                                  />
                                )}
                                <div className="md-portomd_number_block__item-icon__wrapper--horizontal-line"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
            {showMediaImage && mediaImage && (
              <div className="md_porto_image_banner__media">
                <div className="md-prime-block-control image-preview image-controle-visible-hover md_porto_image_banner__media1">
                  <img src={mediaImage} alt={"slider"} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
