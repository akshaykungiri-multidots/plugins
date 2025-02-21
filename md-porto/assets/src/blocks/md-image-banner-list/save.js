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
    title,
    headingContent,
    mediaPosition,
    backgroundColor,
    titleColor,
    headingContentColor,
    showTitle,
    showHeadingContent,
    mediaImage,
    showListItems,
    listItems,
    listItemColor,
    listItemIconColor,
    listItemIconBackgroundColor,
    showNumberBlock,
    numberBlockTitle,
    numberBlockSign,
    numberBlockSubTitle,
    numberBlockDescription,
    numberBlockTitleColor,
    numberBlockSignColor,
    numberBlockSubTitleColor,
    numberBlockDescriptionColor,
  } = attributes;

  return (
    <div
      {...useBlockProps.save({ className: "md_porto_video_header_section" })}
    >
      <div className={`md_porto_image_banner_lisr_wrap`}>
        <div className="md_porto_image_banner_lisr" style={{ backgroundColor }}>
          <div className="container">
            <div
              className="md_porto_image_banner_lisr__inner"
              style={{
                flexDirection: mediaPosition === "left" ? "row-reverse" : "row",
              }}
            >
              <div className="md_porto_image_banner_lisr__heading">
                {showTitle && (
                  <RichText.Content
                    tagName="h2"
                    value={title}
                    placeholder={__("Enter Title", "md-porto")}
                    style={{ color: titleColor }}
                  />
                )}
                {showHeadingContent && (
                  <RichText.Content
                    tagName="p"
                    className="md_porto_image_banner_lisr__content"
                    value={headingContent}
                    placeholder={__("Enter Content", "md-porto")}
                    style={{
                      color: headingContentColor,
                    }}
                  />
                )}
                <div className="md_porto_features_list_wrap">
                  {showListItems && (
                    <div className="md_porto_features_list">
                      {listItems &&
                        listItems.map((feature) => (
                          <div
                            key={feature.id}
                            className="md_porto_features_list_item show-items-hover-wrap"
                          >
                            <div className="md_porto_features_list_item_inner">
                              <div
                                className="item-icon-wrap"
                                style={{
                                  color: listItemIconColor,
                                  backgroundColor: listItemIconBackgroundColor,
                                }}
                              >
                                <i className={"fa fa-check"}></i>
                              </div>
                              <RichText.Content
                                tagName="p"
                                value={feature.feature}
                                placeholder={__("Enter Feature", "md-prime")}
                                style={{ color: listItemColor }}
                              />
                            </div>
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="md_porto_image_banner_lisr__media">
                <div className="md-prime-block-control image-preview image-controle-visible-hover md_porto_image_banner_lisr__media1">
                  <img src={mediaImage} alt={"slider"} />
                </div>
                {showNumberBlock && (
                  <div className="md_porto_image_banner_list__number_block">
                    <div className="md-portomd_number_block__item-icon__wrapper">
                      <div className="md-portomd_number_block__item-icon__wrapper-heading">
                        <div
                          className="number-list"
                          style={{
                            color: numberBlockTitleColor,
                          }}
                        >
                          <RichText.Content
                            tagName="span"
                            className="number"
                            value={numberBlockTitle}
                            placeholder={__("Number", "md-prime")}
                          />
                          <RichText.Content
                            tagName="span"
                            className="sign"
                            value={numberBlockSign}
                            placeholder={__("Sign", "md-prime")}
                            style={{ color: numberBlockSignColor }}
                          />
                          <div className="md-portomd_number_block__item-icon__wrapper-line">
                            <img src={lineSvg} alt="line" />
                          </div>
                        </div>
                      </div>
                      <div className="md-portomd_number_block__item-icon__wrapper-text">
                        <RichText.Content
                          tagName="h4"
                          className="image-title"
                          value={numberBlockSubTitle}
                          placeholder={__("Image Title", "md-prime")}
                          style={{ color: numberBlockSubTitleColor }}
                        />
                        <RichText.Content
                          tagName="p"
                          className="image-text"
                          value={numberBlockDescription}
                          placeholder={__("Image Text", "md-prime")}
                          style={{ color: numberBlockDescriptionColor }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
