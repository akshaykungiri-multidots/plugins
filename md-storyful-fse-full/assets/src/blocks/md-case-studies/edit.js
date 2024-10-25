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
  TextControl,
  SelectControl,
  GradientPicker,
  FontSizePicker,
  RangeControl,
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
    section_title,
    number_of_case_studies,
    case_studies_ids,
    background_color,
    case_studies_style,
    section_title_font_size,
    section_title_font_color,
    case_studies_title_font_size,
    case_studies_title_font_color,
    case_studies_description_font_size,
    case_studies_description_font_color,
    main_case_study_title_font_size,
    main_case_study_title_font_color,
    main_case_study_description_font_size,
    main_case_study_description_font_color,
    main_case_study_button_font_size,
    main_case_study_author_date_font_size,
    main_case_study_author_date_font_color,
  } = attributes;

  const fontSizes = [
    {
      name: __("S"),
      slug: "small",
      size: "12px",
    },
    {
      name: __("M"),
      slug: "medium",
      size: "18px",
    },
    {
      name: __("L"),
      slug: "large",
      size: "26px",
    },
    {
      name: __("XL"),
      slug: "xtra-large",
      size: "48px",
    },
  ];

  const [caseStudiesIds, setCaseStudiesIds] = useState([]);

  const fetchCaseStudies = async () => {
    // fetch resources post where resource-type is case-studies
	const response = await fetch(
	  "/wp-json/md-storyful-fse-full/v1/case-studies"
	);
	const data = await response.json();
	setCaseStudiesIds(data);
  };

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  return (
    <div
      {...useBlockProps({ className: "md_case_studies" })}
      style={{ backgroundColor: background_color }}
    >
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-storyful-fse-full")}>
          <TextControl
            label={__("Heading", "md-storyful-fse-full")}
            placeholder={__("Enter Heading", "md-storyful-fse-full")}
            value={section_title}
            onChange={(value) => setAttributes({ section_title: value })}
          />
          <RangeControl
            label={__("Number of Case Studies", "md-storyful-fse-full")}
            value={number_of_case_studies}
            onChange={(value) =>
              setAttributes({ number_of_case_studies: value })
            }
            min={1}
            max={10}
          />
          <SelectControl
            label={__("Case Studies", "md-storyful-fse-full")}
            value={case_studies_ids}
            multiple
            onChange={(value) => setAttributes({ case_studies_ids: value })}
            options={caseStudiesIds.map((caseStudy) => ({
              label: caseStudy.title,
              value: caseStudy.id,
            }))}
            __nextHasNoMarginBottom
          />
          <label>{__("Background Color", "md-storyful-fse-full")}</label>
          <GradientPicker
            value={null}
            onChange={(value) => setAttributes({ background_color: value })}
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
          <SelectControl
            label={__("Case Studies Style", "md-storyful-fse-full")}
            value={case_studies_style}
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
            onChange={(value) => setAttributes({ case_studies_style: value })}
            __nextHasNoMarginBottom
          />
        </PanelBody>
        <PanelBody title={__("Typography", "md-storyful-fse-full")}>
          <label> {__("Section Title Font Size")} </label>
          <FontSizePicker
            __nextHasNoMarginBottom
            fontSizes={fontSizes}
            value={section_title_font_size}
            fallbackFontSize={section_title_font_size}
            onChange={(newFontSize) =>
              setAttributes({ section_title_font_size: newFontSize })
            }
          />
          <label> {__("Case Studies Title Font Size")} </label>
          <FontSizePicker
            __nextHasNoMarginBottom
            fontSizes={fontSizes}
            value={case_studies_title_font_size}
            fallbackFontSize={case_studies_title_font_size}
            onChange={(newFontSize) =>
              setAttributes({ case_studies_title_font_size: newFontSize })
            }
          />
          <label> {__("Case Studies Description Font Size")} </label>
          <FontSizePicker
            __nextHasNoMarginBottom
            fontSizes={fontSizes}
            value={case_studies_description_font_size}
            fallbackFontSize={case_studies_description_font_size}
            onChange={(newFontSize) =>
              setAttributes({ case_studies_description_font_size: newFontSize })
            }
          />
          <label> {__("Main Case Study Title Font Size")} </label>
          <FontSizePicker
            __nextHasNoMarginBottom
            fontSizes={fontSizes}
            value={main_case_study_title_font_size}
            fallbackFontSize={main_case_study_title_font_size}
            onChange={(newFontSize) =>
              setAttributes({ main_case_study_title_font_size: newFontSize })
            }
          />
          <label> {__("Main Case Study Description Font Size")} </label>
          <FontSizePicker
            __nextHasNoMarginBottom
            fontSizes={fontSizes}
            value={main_case_study_description_font_size}
            fallbackFontSize={main_case_study_description_font_size}
            onChange={(newFontSize) =>
              setAttributes({
                main_case_study_description_font_size: newFontSize,
              })
            }
          />
          <label> {__("Main Case Study Button Font Size")} </label>
          <FontSizePicker
            __nextHasNoMarginBottom
            fontSizes={fontSizes}
            value={main_case_study_button_font_size}
            fallbackFontSize={main_case_study_button_font_size}
            onChange={(newFontSize) =>
              setAttributes({ main_case_study_button_font_size: newFontSize })
            }
          />
          <label> {__("Main Case Study Author Date Font Size")} </label>
          <FontSizePicker
            __nextHasNoMarginBottom
            fontSizes={fontSizes}
            value={main_case_study_author_date_font_size}
            fallbackFontSize={main_case_study_author_date_font_size}
            onChange={(newFontSize) =>
              setAttributes({
                main_case_study_author_date_font_size: newFontSize,
              })
            }
          />
        </PanelBody>
        <PanelColorSettings
          title={__("Typography Colors", "md-storyful-fse-full")}
          initialOpen={false}
          colorSettings={[
            {
              value: section_title_font_color,
              onChange: (newColor) =>
                setAttributes({ section_title_font_color: newColor }),
              label: __("Section Title Color", "md-storyful-fse-full"),
            },
            {
              value: case_studies_title_font_color,
              onChange: (newColor) =>
                setAttributes({ case_studies_title_font_color: newColor }),
              label: __("Case Studies Title Color", "md-storyful-fse-full"),
            },
            {
              value: case_studies_description_font_color,
              onChange: (newColor) =>
                setAttributes({
                  case_studies_description_font_color: newColor,
                }),
              label: __(
                "Case Studies Description Color",
                "md-storyful-fse-full"
              ),
            },
            {
              value: main_case_study_title_font_color,
              onChange: (newColor) =>
                setAttributes({ main_case_study_title_font_color: newColor }),
              label: __("Main Case Study Title Color", "md-storyful-fse-full"),
            },
            {
              value: main_case_study_description_font_color,
              onChange: (newColor) =>
                setAttributes({
                  main_case_study_description_font_color: newColor,
                }),
              label: __(
                "Main Case Study Description Color",
                "md-storyful-fse-full"
              ),
            },
            {
              value: main_case_study_author_date_font_color,
              onChange: (newColor) =>
                setAttributes({
                  main_case_study_author_date_font_color: newColor,
                }),
              label: __(
                "Main Case Study Author Date Color",
                "md-storyful-fse-full"
              ),
            },
          ]}
        />
      </InspectorControls>
      <ServerSideRender
        block={metadata.name}
        className={className}
        attributes={{
          section_title,
          number_of_case_studies,
          case_studies_ids,
          background_color,
          case_studies_style,
          section_title_font_size,
          section_title_font_color,
          case_studies_title_font_size,
          case_studies_title_font_color,
          case_studies_description_font_size,
          case_studies_description_font_color,
          main_case_study_title_font_size,
          main_case_study_title_font_color,
          main_case_study_description_font_size,
          main_case_study_description_font_color,
          main_case_study_button_font_size,
          main_case_study_author_date_font_size,
          main_case_study_author_date_font_color,
        }}
      />
    </div>
  );
}
