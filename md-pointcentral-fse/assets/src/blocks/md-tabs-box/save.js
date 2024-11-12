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
export default function save({attributes}) {
  const {
    tabItems,
    tabBackgroundColor,
    tabTextColor,
    tabActiveBackgroundColor,
    tabActiveTextColor,
    tabContentTitleColor,
    tabContentTextColor,
    tabContentButtonColor,
    showTabContentTitle,
    showTabContentText,
    showTabContentButton,
    showTabContentImage,
  } = attributes;
  const activeTabStyle = {
    backgroundColor: tabActiveBackgroundColor,
    color: tabActiveTextColor,
  };
  const inactiveTabStyle = {
    backgroundColor: tabBackgroundColor,
    color: tabTextColor,
  };
  return (
    <div {...useBlockProps.save({className: 'MD_Pointcentral_TabsBox'})}>
      <div className="pointcentral-tab-banner">
        <div className="md_container">
          <div className="tab-list" style={{ backgroundColor: "#0f5aa8" }}>
            <div className="tab-list-inner">
              {tabItems &&
                tabItems.map((postObj, index) => (
                  <div
                    className={`tab-list-item show-items-hover-wrap ${
                      index === 0 ? "active" : ""
                    }`}
                    data-tab={index}
                    key={index}
                    role="button"
                    tabIndex={0}
                    aria-label={`Tab ${index + 1}`}
                  >
                    <div
                      className="md-tab-icon md-prime-block-control image-preview image-controle-visible-hover"
                      style={
                        index === 0
                          ? activeTabStyle
                          : inactiveTabStyle
                      }
                      role="tab"
                      tabIndex={0}
                    >
                      <div
                        className={`image-controls small-icons icon-center-fixed`}
                      >
                      </div>
                      {postObj.icon && (
                        <img src={postObj.icon} alt={"slider"} />
                      )}
                    </div>
                    <RichText.Content
                      tagName="span"
                      className="tab-title"
                      value={postObj.title}
                    />
                  </div>
                ))}
            </div>
          </div>
          <div className="tab-content" style={{ backgroundColor: "#f5f5f5" }}>
          {tabItems &&
              tabItems.map((postObj, index) => (
              <div className={`tab-content-item ${index === 0 ? "active" : ""}`} key={index} data-tab={index}>
                <div className="tab-content-inner">
                  <div className="tab-content-left">
                    <div className="tab-content-left-inner">
                      {showTabContentTitle && (
                        <RichText.Content
                          tagName="h2"
                          value={postObj.tabInnerTitle}
                          style={{ color: tabContentTitleColor }}
                        />
                      )}
                      {showTabContentText && (
                        <RichText.Content
                          tagName="p"
                          value={postObj.tabInnerContent}
                          style={{ color: tabContentTextColor }}
                        />
                      )}
                      {showTabContentButton && (
                        <RichText.Content
                          tagName="span"
                          className="tab-content-button"
                          value={postObj.tabInnerButton}
                          style={{ backgroundColor: tabContentButtonColor }}
                        />
                      )}
                    </div>
                  </div>
                  {showTabContentImage && (
                    <div className="tab-content-right">
                      <div className="md-prime-block-control image-preview image-controle-visible-hover">
                        {postObj.tabInnerImage && (
                          <img
                            src={postObj.tabInnerImage}
                            alt={"slider"}
                          />
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
