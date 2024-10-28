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
    card_block_style,
    card_block_list,
    sub_title_font_size,
    sub_title_font_color,
    title_font_size,
    title_font_color,
    heading_content_font_size,
    heading_content_font_color,
    card_title_font_size,
    card_title_font_color,
    card_content_font_size,
    card_content_font_color,
    card_learn_more_font_size,
    card_learn_more_font_color,
  } = attributes;
  return (
    <div {...useBlockProps.save({ className: "md_anitian_card_block" })}>
      <div className={`md_anitian_card_block ${card_block_style}`}>
        <div className="md_anitian_card_block__head">
          <div className="container">
            <div className="md_anitian_card_block__heading">
              <RichText.Content
                tagName="h3"
                value={sub_title}
                style={{
                  fontSize: sub_title_font_size,
                  color: sub_title_font_color,
                }}
              />
              <RichText.Content
                tagName="h2"
                value={title}
                style={{ fontSize: title_font_size, color: title_font_color }}
              />
              <RichText.Content
                tagName="p"
                value={heading_content}
                style={{
                  fontSize: heading_content_font_size,
                  color: heading_content_font_color,
                }}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="md_anitian_card_block__content">
            {card_block_list &&
              card_block_list.map((postObj, index) => (
                <div className="md_anitian_card_block__item  show-items-hover-wrap">
                  <div className="md_anitian_card_block__item__image">
                    {postObj.card_image && (
                      <img src={postObj.card_image} alt={postObj.card_title} />
                    )}
                  </div>
                  <div className="md_anitian_card_block__item__content">
                    <RichText.Content
                      tagName="h3"
                      className="column-item-title"
                      value={postObj.card_title}
                      style={{
                        fontSize: card_title_font_size,
                        color: card_title_font_color,
                      }}
                    />
                    <div className="md_anitian_card_block__item__content__link">
                      <RichText.Content
                        tagName="p"
                        className="column-item-desc"
                        value={postObj.card_description}
                        style={{
                          fontSize: card_content_font_size,
                          color: card_content_font_color,
                        }}
                      />
                      <RichText.Content
                        tagName="a"
                        className="md_anitian_card_block__item__link"
                        value={postObj.learn_more_link}
                        style={{
                          fontSize: card_learn_more_font_size,
                          color: card_learn_more_font_color,
                        }}
                      />
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
