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
    heading,
    storyList,
    awardList,
    showHeading,
    showStory,
    showAward,
    headingColor,
    storyListTitleColor,
    storyListContentColor,
    awardListYearColor,
    awardListTitleColor,
    awardListContentColor,
  } = attributes;
  return (
    <div {...useBlockProps.save({ className: "md_about_story" })}>
      <div className="md_about_story__inner">
        <div className="md_about_story__award">
          <div className="md_about_story__award__inner">
            {awardList &&
              awardList.map((postObj, index) => (
                <div
                  key={postObj.id}
                  className="md_about_story__award_item show-items-hover-wrap"
                >
                  <div className="md_about_story__award_item_wrap">
                    <RichText.Content
                      tagName="span"
                      className="award-year"
                      placeholder={__("Year", "md-prime")}
                      value={postObj.year}
                      style={{ color: awardListYearColor }}
                    />
                    <div className="md_about_story__award_item_content">
                      <RichText.Content
                        tagName="h4"
                        placeholder={__("Title", "md-prime")}
                        value={postObj.title}
                        style={{ color: awardListTitleColor }}
                      />
                      <RichText.Content
                        tagName="p"
                        placeholder={__("Content", "md-prime")}
                        value={postObj.content}
                        style={{ color: awardListContentColor }}
                      />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="md_about_story__storylist">
          <div className="md_about_story__storylist__heading">
            <RichText.Content
              tagName="h2"
              placeholder={__("Heading", "md-prime")}
              value={heading}
              style={{ color: headingColor }}
            />
          </div>
          <div className="md_about_story__storylist__inner">
            {storyList &&
              storyList.map((postObj, index) => (
                <div
                  key={postObj.id}
                  className="md_about_story__story_item show-items-hover-wrap"
                >
                  <div className="md_about_story__story_item_content">
                    <RichText.Content
                      tagName="h4"
                      placeholder={__("Title", "md-prime")}
                      value={postObj.title}
                      style={{ color: storyListTitleColor }}
                    />
                    <RichText.Content
                      tagName="p"
                      placeholder={__("Content", "md-prime")}
                      value={postObj.content}
                      style={{ color: storyListContentColor }}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
