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
  ToggleControl,
  RangeControl,
} from "@wordpress/components";

import { useState, useEffect } from "react";

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
    postInRow,
    postTitleColor,
    postContentColor,
    showFilter,
    showLoadMore,
    showFeaturedImage,
    showPostTitle,
    showExcerpt,
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
    <div {...useBlockProps()}>
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-healthstream")}>
          <SelectControl
            label="Post Type"
            value={postType}
            options={postTypes}
            onChange={(value) => setAttributes({ postType: value })}
          />
          <RangeControl
            label="Posts to Show"
            value={postsToShow}
            onChange={(value) => setAttributes({ postsToShow: value })}
            min={1}
            max={20}
          />
          <RangeControl
            label="Posts in Row"
            value={postInRow}
            onChange={(value) => setAttributes({ postInRow: value })}
            min={1}
            max={4}
          />
        </PanelBody>
        <PanelBody title={__("Toggle Settings", "md-healthstream")} initialOpen={false}>
          <ToggleControl
            label="Show Filter"
            checked={showFilter}
            onChange={(value) => setAttributes({ showFilter: value })}
          />
          <ToggleControl
            label="Show Load More"
            checked={showLoadMore}
            onChange={(value) => setAttributes({ showLoadMore: value })}
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
        </PanelBody>
        <PanelBody
          title={__("Color Settings", "md-healthstream")}
          initialOpen={false}
        >
          <PanelColorSettings
            title={__("Typography Colors", "md-healthstream")}
            initialOpen={false}
            colorSettings={[
              {
                value: postTitleColor,
                onChange: (newColor) =>
                  setAttributes({ postTitleColor: newColor }),
                label: __("Column Title Font Color"),
              },
              {
                value: postContentColor,
                onChange: (newColor) =>
                  setAttributes({ postContentColor: newColor }),
                label: __("Column Description Font Color"),
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
          postInRow,
          postTitleColor,
          postContentColor,
          showFilter,
          showLoadMore,
          showFeaturedImage,
          showPostTitle,
          showExcerpt,
        }}
      />
    </div>
  );
}
