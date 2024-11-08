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
  InspectorControls,
  useBlockProps,
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
  GradientPicker,
  RangeControl,
  ToggleControl,
  TextControl,
} from "@wordpress/components";

import metadata from "./block.json";
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param  root0
 * @param  root0.attributes
 * @param  root0.attributes.heading
 * @param  root0.setAttributes
 * @param  root0.className
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes, className }) {
  const {
    showSectionTitle,
    sectionTitle,
    orderBy,
    order,
    numberOfCaseStudies,
    backgroundColor,
    caseStudiesStyle,
    sectionTitleFontColor,
    caseStudiesTitleFontColor,
    caseStudiesDescriptionFontColor,
    mainCaseStudyTitleFontColor,
    mainCaseStudyDescriptionFontColor,
    mainCaseStudyAuthorDateFontColor,
    showButton,
    buttonStyle,
    showExcerpt,
    showFeaturedImage,
    showAuthorDate,
  } = attributes;

  const orderByList = [
    { label: "Date", value: "date" },
    { label: "Title", value: "title" },
    { label: "Random", value: "rand" },
  ];
  const orderList = [
    { label: "Descending", value: "desc" },
    { label: "Ascending", value: "asc" },
  ];

  return (
    <div
      {...useBlockProps({ className: "md_case_studies" })}
      style={{ backgroundColor }}
    >
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-storyful-fse-full")}>
          <RangeControl
            label={__("Show Number of Blog", "md-prime")}
            value={numberOfCaseStudies}
            onChange={(value) =>
              setAttributes({
                numberOfCaseStudies: parseInt(value),
              })
            }
            min={2}
            max={99}
            step={1}
          />
          <SelectControl
            label={__("Order By", "md-prime")}
            value={orderBy}
            options={orderByList}
            onChange={(value) => setAttributes({ orderBy: value })}
          />
          <SelectControl
            label={__("Order", "md-prime")}
            value={order}
            options={orderList}
            onChange={(value) => setAttributes({ order: value })}
          />
          <SelectControl
            label={__("Case Studies Style", "md-storyful-fse-full")}
            value={caseStudiesStyle}
            options={[
              {
                label: __("Style 1", "md-storyful-fse-full"),
                value: "style_1",
              },
              {
                label: __("Style 2", "md-storyful-fse-full"),
                value: "style_2",
              },
            ]}
            onChange={(value) => setAttributes({ caseStudiesStyle: value })}
            __nextHasNoMarginBottom
          />
        </PanelBody>
        <PanelBody
          title={__("Toggle Settings", "md-storyful-fse-full")}
          initialOpen={false}
        >
          <ToggleControl
            label={__("Show Section Title", "md-storyful-fse-full")}
            checked={showSectionTitle}
            onChange={(value) => setAttributes({ showSectionTitle: value })}
          />
          {showSectionTitle && (
            <TextControl
              label={__("Section Title", "md-storyful-fse-full")}
              value={sectionTitle}
              onChange={(value) => setAttributes({ sectionTitle: value })}
            />
          )}
          <ToggleControl
            label={__("Show Excerpt", "md-storyful-fse-full")}
            checked={showExcerpt}
            onChange={(value) => setAttributes({ showExcerpt: value })}
          />
          <ToggleControl
            label={__("Show Featured Image", "md-storyful-fse-full")}
            checked={showFeaturedImage}
            onChange={(value) => setAttributes({ showFeaturedImage: value })}
          />
          <ToggleControl
            label={__("Show Author Date", "md-storyful-fse-full")}
            checked={showAuthorDate}
            onChange={(value) => setAttributes({ showAuthorDate: value })}
          />
        </PanelBody>
        <PanelBody
          title={__("Background Settings", "md-storyful-fse-full")}
          initialOpen={false}
        >
          <label htmlFor="background-color-picker">
            {__("Background Color", "md-storyful-fse-full")}
          </label>
          <GradientPicker
            id="background-color-picker"
            value={null}
            onChange={(value) => setAttributes({ backgroundColor: value })}
            gradients={[
              {
                name: "gradient1",
                gradient:
                  "linear-gradient(298.12deg, #11152c 14.52%, #145980 105.31%)",
                slug: "gradient1",
              },
              {
                name: "Moonlit Asteroid",
                gradient:
                  "linear-gradient(135deg,#0F2027 0%, #203A43 0%, #2c5364 100%)",
                slug: "moonlit-asteroid",
              },
              {
                name: "Rastafarie",
                gradient:
                  "linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)",
                slug: "rastafari",
              },
            ]}
          />
        </PanelBody>
        <PanelBody
          title={__("Button Settings", "md-storyful-fse-full")}
          initialOpen={false}
        >
          <ToggleControl
            label={__("Show Button", "md-storyful-fse-full")}
            checked={showButton}
            onChange={(value) => setAttributes({ showButton: value })}
          />
          {showButton && (
            <SelectControl
              label={__("Button Style", "md-storyful-fse-full")}
              value={buttonStyle}
              options={[
                {
                  label: __("Primary", "md-storyful-fse-full"),
                  value: "primary",
                },
                {
                  label: __("Secondary", "md-storyful-fse-full"),
                  value: "secondary",
                },
                {
                  label: __("Tertiary", "md-storyful-fse-full"),
                  value: "primary-v2",
                },
              ]}
              onChange={(value) => setAttributes({ buttonStyle: value })}
              __nextHasNoMarginBottom
            />
          )}
        </PanelBody>
        <PanelBody
          title={__("Color Settings", "md-storyful-fse-full")}
          initialOpen={false}
        >
          <PanelColorSettings
            title={__("Colors Settings", "md-storyful-fse-full")}
            initialOpen={false}
            colorSettings={[
              {
                value: sectionTitleFontColor,
                onChange: (newColor) =>
                  setAttributes({
                    sectionTitleFontColor: newColor,
                  }),
                label: __("Section Title Color", "md-storyful-fse-full"),
              },
              {
                value: caseStudiesTitleFontColor,
                onChange: (newColor) =>
                  setAttributes({
                    caseStudiesTitleFontColor: newColor,
                  }),
                label: __("Case Studies Title Color", "md-storyful-fse-full"),
              },
              {
                value: caseStudiesDescriptionFontColor,
                onChange: (newColor) =>
                  setAttributes({
                    caseStudiesDescriptionFontColor: newColor,
                  }),
                label: __(
                  "Case Studies Description Color",
                  "md-storyful-fse-full"
                ),
              },
              {
                value: mainCaseStudyTitleFontColor,
                onChange: (newColor) =>
                  setAttributes({
                    mainCaseStudyTitleFontColor: newColor,
                  }),
                label: __(
                  "Main Case Study Title Color",
                  "md-storyful-fse-full"
                ),
              },
              {
                value: mainCaseStudyDescriptionFontColor,
                onChange: (newColor) =>
                  setAttributes({
                    mainCaseStudyDescriptionFontColor: newColor,
                  }),
                label: __(
                  "Main Case Study Description Color",
                  "md-storyful-fse-full"
                ),
              },
              {
                value: mainCaseStudyAuthorDateFontColor,
                onChange: (newColor) =>
                  setAttributes({
                    mainCaseStudyAuthorDateFontColor: newColor,
                  }),
                label: __(
                  "Main Case Study Author Date Color",
                  "md-storyful-fse-full"
                ),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <ServerSideRender
        block={metadata.name}
        className={className}
        attributes={{
          showSectionTitle,
          sectionTitle,
          orderBy,
          order,
          numberOfCaseStudies,
          backgroundColor,
          caseStudiesStyle,
          sectionTitleFontColor,
          caseStudiesTitleFontColor,
          caseStudiesDescriptionFontColor,
          mainCaseStudyTitleFontColor,
          mainCaseStudyDescriptionFontColor,
          mainCaseStudyAuthorDateFontColor,
          showButton,
          buttonStyle,
          showExcerpt,
          showFeaturedImage,
          showAuthorDate,
        }}
      />
    </div>
  );
}
