/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the server side render element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-server-side-render/
 */
import ServerSideRender from "@wordpress/server-side-render";

/**
 * React hook that is used to mark the block wrapper element.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/
 */
import {
  useBlockProps,
  InspectorControls,
  PanelColorSettings,
} from "@wordpress/block-editor";

/**
 * React hook that is used to mark the components element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/
 */
import {
  PanelBody,
  SelectControl,
  RangeControl,
  ToggleControl,
} from "@wordpress/components";

import { useState, useEffect } from "@wordpress/element";

import metadata from "./block.json";
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param root0
 * @param root0.attributes
 * @param root0.attributes.heading
 * @param root0.setAttributes
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes, className }) {
  const {
    postType,
    postsToShow,
    enableFilter,
    showFeaturedImage,
    showPostTitle,
    showExcerpt,
    showPostDate,
    showPostAuthor,
    showPostCategory,
    postTitleColor,
    postExcerptColor,
    postDateColor,
    postAuthorColor,
    postCategoryColor,
    enablePagination,
    enableViewAll,
  } = attributes;

  const [postTypes, setPostTypes] = useState([]);

  useEffect(() => {
    const builtInPostType = [
      "page",
      "attachment",
      "nav_menu_item",
      "wp_block",
      "wp_template",
      "wp_template_part",
      "wp_navigation",
      "wp_font_family",
      "wp_font_face",
      "wp_global_styles",
    ];

    // Fetch the posttypes not post list and set it as options
    wp.apiFetch({ path: "/wp/v2/types" }).then((response) => {
      const fetchedPostTypes = Object.keys(response)
        .filter(function (key) {
          return !builtInPostType.includes(response[key].slug);
        })
        .map((key) => ({
          value: key,
          label: response[key].name,
          rest_base: response[key].rest_base,
        }));
      setPostTypes(fetchedPostTypes);
    });
  }, []);

  return (
    <div {...useBlockProps({ className: "md_post_block" })}>
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-putco")}>
          <SelectControl
            label="Post Type"
            value={postType}
            options={postTypes}
            onChange={(value) => setAttributes({ postType: value })}
          />
          <RangeControl
            label="Posts to show"
            value={postsToShow}
            onChange={(value) => setAttributes({ postsToShow: value })}
            min={1}
            max={100}
          />
          <ToggleControl
            label="Enable Filter"
            checked={enableFilter}
            onChange={(value) => setAttributes({ enableFilter: value })}
          />
          <ToggleControl
            label="Show Featured Image"
            checked={showFeaturedImage}
            onChange={(value) => setAttributes({ showFeaturedImage: value })}
          />
          <ToggleControl
            label="Show Post Title"
            checked={showPostTitle}
            onChange={(value) => setAttributes({ showPostTitle: value })}
          />
          <ToggleControl
            label="Show Excerpt"
            checked={showExcerpt}
            onChange={(value) => setAttributes({ showExcerpt: value })}
          />
          <ToggleControl
            label="Show Post Date"
            checked={showPostDate}
            onChange={(value) => setAttributes({ showPostDate: value })}
          />
          <ToggleControl
            label="Show Post Author"
            checked={showPostAuthor}
            onChange={(value) => setAttributes({ showPostAuthor: value })}
          />
          <ToggleControl
            label="Show Post Category"
            checked={showPostCategory}
            onChange={(value) => setAttributes({ showPostCategory: value })}
          />
          <ToggleControl
            label="Enable Pagination"
            checked={enablePagination}
            onChange={(value) => setAttributes({ enablePagination: value })}
          />
          <ToggleControl
            label="Enable View All"
            checked={enableViewAll}
            onChange={(value) => setAttributes({ enableViewAll: value })}
          />
        </PanelBody>
        <PanelBody
          title={__("Color Settings", "md-putco")}
          initialOpen={false}
        >
          <PanelColorSettings
            title={__("Color Settings", "md-putco")}
            colorSettings={[
              {
                value: postTitleColor,
                onChange: (value) => setAttributes({ postTitleColor: value }),
                label: __("Post Title Color", "md-putco"),
              },
              {
                value: postExcerptColor,
                onChange: (value) => setAttributes({ postExcerptColor: value }),
                label: __("Post Excerpt Color", "md-putco"),
              },
              {
                value: postDateColor,
                onChange: (value) => setAttributes({ postDateColor: value }),
                label: __("Post Date Color", "md-putco"),
              },
              {
                value: postAuthorColor,
                onChange: (value) => setAttributes({ postAuthorColor: value }),
                label: __("Post Author Color", "md-putco"),
              },
              {
                value: postCategoryColor,
                onChange: (value) =>
                  setAttributes({ postCategoryColor: value }),
                label: __("Post Category Color", "md-putco"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <ServerSideRender
        block={metadata.name}
        className={className}
        attributes={{
          postType,
          postsToShow,
          enableFilter,
          showFeaturedImage,
          showPostTitle,
          showExcerpt,
          showPostDate,
          showPostAuthor,
          showPostCategory,
          postTitleColor,
          postExcerptColor,
          postDateColor,
          postAuthorColor,
          postCategoryColor,
          enablePagination,
          enableViewAll,
        }}
      />
    </div>
  );
}
