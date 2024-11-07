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
    sub_title_font_color,
    title_font_color,
    heading_content_font_color,
    card_title_font_color,
    card_content_font_color,
    card_learn_more_font_color,
    number_of_columns,
    show_image,
    show_title,
    show_content,
    show_link,
    show_sub_heading,
    show_heading_content,
    show_heading,
  } = attributes;
  return (
    <div {...useBlockProps.save({ className: "md_anitian_card_block" })}>
      <div className={`md_anitian_card_block ${card_block_style}`}>
        <div className="md_anitian_card_block__head">
          <div className="container">
            <div className="md_anitian_card_block__heading">
              {show_sub_heading && (
              <RichText.Content
                tagName="h3"
                value={sub_title}
                style={{
                  color: sub_title_font_color,
                }}
              />
              )}
              {show_heading && (
              <RichText.Content
                tagName="h2"
                value={title}
                style={{ color: title_font_color }}
              />
              )}
              {show_heading_content && (
              <RichText.Content
                tagName="p"
                value={heading_content}
                style={{
                  color: heading_content_font_color,
                }}
              />
              )}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="md_anitian_card_block__content" style={{ gridTemplateColumns: `repeat(${number_of_columns}, 1fr)` }}>
            {card_block_list &&
              card_block_list.map((postObj, index) => (
                <div className="md_anitian_card_block__item  show-items-hover-wrap">
                  <div className="md_anitian_card_block__item__image">
                    {postObj.card_image && (
                      <img src={postObj.card_image} alt={postObj.card_title} />
                    )}
                  </div>
                  <div className="md_anitian_card_block__item__content">
                    {show_title && (
                    <RichText.Content
                      tagName="h3"
                      className="column-item-title"
                      value={postObj.card_title}
                      style={{
                        color: card_title_font_color,
                      }}
                    />
                    )}
                    <div className="md_anitian_card_block__item__content__link">
                      {show_content && (
                      <RichText.Content
                        tagName="p"
                        className="column-item-desc"
                        value={postObj.card_description}
                        style={{
                          color: card_content_font_color,
                        }}
                      />
                      )}
                      {show_link && (
                      <RichText.Content
                        tagName="p"
                        className="md_anitian_card_block__item__link"
                        value={postObj.learn_more_link}
                        style={{
                          color: card_learn_more_font_color,
                        }}
                      />
                      )}
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
