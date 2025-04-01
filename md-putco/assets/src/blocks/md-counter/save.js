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
    counterNumber,
    counterSign,
    alignText,
    isSignBefore,
    counterText,
    counterNumberColor,
    counterTextColor,
    showCounterSign,
    showCounterText,
  } = attributes;
  const getNumberFromFormattedNumber = (formattedNumber) => {
    return formattedNumber.replace(/[^0-9.]/g, ''); 
  }
  return (
    <div {...useBlockProps.save({ className: "md_counter_block" })}>
      <div className="md_counter_wrapper" style={{ textAlign: alignText }}>
        <div
          className={`md_counter_item ${alignText}`}
          style={{ color: counterNumberColor }}
        >
          <RichText.Content
            tagName="span"
            className="md_counter_number"
            value={counterNumber}
            placeholder={__("Enter Counter Number")}
            data-target = {getNumberFromFormattedNumber(counterNumber)}
          />
          {showCounterSign && (
            <RichText.Content
              tagName="span"
              className="md_counter_sign"
              value={counterSign}
              placeholder={__("Enter Counter Sign")}
              style={{ order: isSignBefore ? -1 : 1 }}
            />
          )}
        </div>
        {showCounterText && (
          <div
            className={`md_counter_text`}
            style={{ color: counterTextColor }}
          >
            <RichText.Content
              tagName="div"
              value={counterText}
              placeholder={__("Enter Counter Text")}
            />
          </div>
        )}
      </div>
    </div>
  );
}
