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
    subheading,
    heading,
    showSubheading,
    showHeading,
    subheadingColor,
    headingColor,
    numberOfCardsItemsPerRow,
    cardsItems,
    showLinkIcon,
    cardsTitleColor,
    backgroundHoverColor,
    enableFooter,
    footerText,
    footerButton,
    footerTextColor,
    showFooterButton,
    footerButtonColor,
    footerButtonBackgroundColor,
    footerButtonHoverColor,
    footerButtonHoverBackgroundColor,
    showCardTitle,
    showCardDescription,
    showCardBadge,
    cardDescriptionColor,
    cardBadgeColor,
    cardBadgeBackgroundColor,
  } = attributes;
  return (
    <div {...useBlockProps.save({ className: "md_cards_section" })}>
      <style>
        {`
          .md_cards_footer__button__wrapper .md_cards_footer__button {
            background-color: ${footerButtonBackgroundColor};
            color: ${footerButtonColor};
          }
          .md_cards_footer__button__wrapper .md_cards_footer__button:hover {
            background-color: ${footerButtonHoverBackgroundColor} !important;
            color: ${footerButtonHoverColor} !important;
            border: 1px solid ${footerButtonHoverColor} !important;
          }
        `}
      </style>
      <div className={"md_cards_section_inner "}>
        <div className="md_cards_heading__wrapper">
          <div className="md_cards_heading">
            {showSubheading && (
              <RichText.Content
                tagName="p"
                value={subheading}
                placeholder={__("Subheading")}
                style={{ color: subheadingColor }}
              />
            )}
            {showHeading && (
              <RichText.Content
                tagName="h2"
                value={heading}
                placeholder={__("Heading")}
                style={{ color: headingColor }}
              />
            )}
          </div>
        </div>
        <div className="md_cards_items">
          <div className="md_cards_item__inner">
            {cardsItems.map((item, index) => (
              <div
                key={index}
                className={"md_cards_item show-items-hover-wrap"}
                style={{
                  width: `${100 / numberOfCardsItemsPerRow}%`,
                }}
              >
                <div className="md_cards_item_inner">
                  <div className="md-prime-block-control image-preview image-controle-visible-hover md_cards_item_inner__media">
                    {item.cardsImage && (
                      <img src={item.cardsImage} alt={"slider"} />
                    )}
                    <div
                      className="md_cards_item_inner__hover"
                      style={{ background: backgroundHoverColor }}
                    ></div>
                    <div className="md_cards_item_inner__content">
                      {showCardBadge && (
                        <div
                          className="md_cards_item_inner__badge"
                          style={{
                            color: cardBadgeColor,
                            backgroundColor: cardBadgeBackgroundColor,
                          }}
                        >
                          <RichText.Content
                            tagName="span"
                            value={item.badge}
                            placeholder={__("Badge")}
                          />
                        </div>
                      )}
                      <div className="md_cards_item_inner__content__text">
                        <div className="md_cards_item_inner__content__text--inner">
                          {showCardTitle && (
                            <RichText.Content
                              tagName="h3"
                              value={item.title}
                              placeholder={__("Title")}
                              style={{ color: cardsTitleColor }}
                            />
                          )}
                          {showCardDescription && (
                            <RichText.Content
                              tagName="p"
                              value={item.cardsSubTitle}
                              placeholder={__("Sub Title")}
                              style={{ color: cardDescriptionColor }}
                            />
                          )}
                        </div>
                        <div className="md_cards_item_inner__hover__icons">
                          {showLinkIcon && (
                            <a
                              href={item.cardsLink}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="bi bi-arrow-right-short"></i>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {enableFooter && (
          <div className="md_cards_footer">
            <div className="container">
              <div className="md_cards_footer__inner">
                <div className="md_cards_footer__text">
                  <div className="md_cards_footer__text--line"></div>
                  <RichText.Content
                    tagName="p"
                    value={footerText}
                    placeholder={__("Footer Text")}
                    style={{ color: footerTextColor }}
                  />
                </div>
                {showFooterButton && (
                  <div className="md_cards_footer__button__wrapper">
                    <RichText.Content
                      tagName="p"
                      className="md_cards_footer__button"
                      value={footerButton}
                      placeholder={__("Button Text")}
                      style={{ color: footerButtonColor }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
