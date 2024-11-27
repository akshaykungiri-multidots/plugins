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
    tabs,
    tabItemColor,
    tabItemActiveColor,
    tabItemBackgroundColor,
    tabItemActiveBackgroundColor,
    tabBackgroundColor,
  } = attributes;
  return (
    <div {...useBlockProps.save({ className: "md_tab_navigations" })}>
      <style>
        {`
			.md_tab_navigation_inner ul {
				background-color: ${tabBackgroundColor};
			}
			.md_tab_navigation_list .md_tab_navigation_item .tabTitle {
				color: ${tabItemColor} !important;
			}
			.md_tab_navigation_list .md_tab_navigation_item.active .tabTitle {
				color: ${tabItemActiveColor} !important;
			}
			.md_tab_navigation_list .md_tab_navigation_item .tabTitle {
				background-color: ${tabItemBackgroundColor} !important;
			}
			.md_tab_navigation_list .md_tab_navigation_item.active .tabTitle {
				background-color: ${tabItemActiveBackgroundColor} !important;
			}
		`}
      </style>
      <div className="md_tab_navigation_inner">
        <ul className="md_tab_navigation_list">
          {tabs.map((tab, index) => {
            // check if tab title is not empty
            if (tab.tabTitle !== "") {
              return (
                <li
                  className={`md_tab_navigation_item show-items-hover-wrap ${
                    index === 0 ? "active" : ""
                  }`}
                  key={tab.tabId}
                >
                  <RichText.Content
                    tagName="span"
                    className="tabTitle"
                    value={tab.tabTitle}
                    placeholder="Tab Title"
                    style={{
                      color: tabItemColor,
                    }}
                  />
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>
    </div>
  );
}
