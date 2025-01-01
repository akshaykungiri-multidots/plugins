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
  ToggleControl,
  TextControl,
} from "@wordpress/components";

/**
 * React hook that is used to mark the packages element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-element/
 */
import { WPElement, useState, useEffect } from "@wordpress/element";

import metadata from "./block.json";
import "./editor.scss";

import Select from "react-select";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param {Object}   root0                    - The root object.
 * @param {Object}   root0.attributes         - The attributes of the root object.
 * @param {string}   root0.attributes.heading - The heading attribute of the block.
 * @param {Function} root0.setAttributes      - Function to set the attributes.
 * @param {string}   root0.className          - The class name.
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes, className }) {
  const { 
    heading,
    showFeaturedImage,
    showTitle,
    showExcerpt,
    showTags,
    showDate,
    titleColor,
    excerptColor,
    tagsColor,
    dateColor,
    titleHoverColor,
    selectedArticles
  } = attributes;

  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    fetch(`/wp-json/wp/v2/posts?_embed&per_page=100`)
      .then((response) => response.json())
      .then((data) => {
        setArticleList(data);
    });
  }, []);

  return (
    <div {...useBlockProps()}>
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-ageofunion")}>
          <TextControl
            label={__("Heading", "md-ageofunion")}
            placeholder={__("Enter Heading", "md-ageofunion")}
            value={heading}
            onChange={(value) => setAttributes({ heading: value })}
          />
          <ToggleControl
            label={__("Show Featured Image", "md-ageofunion")}
            checked={showFeaturedImage}
            onChange={(value) => setAttributes({ showFeaturedImage: value })}
          />
          <ToggleControl
            label={__("Show Title", "md-ageofunion")}
            checked={showTitle}
            onChange={(value) => setAttributes({ showTitle: value })}
          />
          <ToggleControl
            label={__("Show Excerpt", "md-ageofunion")}
            checked={showExcerpt}
            onChange={(value) => setAttributes({ showExcerpt: value })}
          />
          <ToggleControl
            label={__("Show Tags", "md-ageofunion")}
            checked={showTags}
            onChange={(value) => setAttributes({ showTags: value })}
          />
          <ToggleControl
            label={__("Show Date", "md-ageofunion")}
            checked={showDate}
            onChange={(value) => setAttributes({ showDate: value })}
          />
          <Select
            options={articleList.map((article) => ({
              value: article.id,
              label: article.title.rendered,
            }))}
            onChange={(selectedOption) => {
              setAttributes({ selectedArticles: selectedOption });
            }}
            value={selectedArticles}
            isMulti
            placeholder={__("Select Articles", "md-ageofunion")}
          />
        </PanelBody>
        <PanelBody title={__("Color Settings", "md-ageofunion")} initialOpen={false}>
          <PanelColorSettings
            title={__("Color Settings", "md-ageofunion")}
            initialOpen={false}
            colorSettings={[
              {
                value: titleColor,
                onChange: (value) => setAttributes({ titleColor: value }),
                label: __("Title Color", "md-ageofunion"),
              },
              {
                value: excerptColor,
                onChange: (value) => setAttributes({ excerptColor: value }),
                label: __("Excerpt Color", "md-ageofunion"),
              },
              {
                value: tagsColor,
                onChange: (value) => setAttributes({ tagsColor: value }),
                label: __("Tags Color", "md-ageofunion"),
              },
              {
                value: dateColor,
                onChange: (value) => setAttributes({ dateColor: value }),
                label: __("Date Color", "md-ageofunion"),
              },
              {
                value: titleHoverColor,
                onChange: (value) => setAttributes({ titleHoverColor: value }),
                label: __("Title Hover Color", "md-ageofunion"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <ServerSideRender
        block={metadata.name}
        className={className}
        attributes={{
          heading,
          showFeaturedImage,
          showTitle,
          showExcerpt,
          showTags,
          showDate,
          titleColor,
          excerptColor,
          tagsColor,
          dateColor,
          titleHoverColor,
          selectedArticles
        }}
      />
    </div>
  );
}
