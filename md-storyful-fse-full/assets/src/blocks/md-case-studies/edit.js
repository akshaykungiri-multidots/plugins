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
  TextControl
} from "@wordpress/components";

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
    show_section_title,
    section_title,
    orderBy,
		order,
    number_of_case_studies,
    case_studies_ids,
    background_color,
    case_studies_style,
    section_title_font_color,
    case_studies_title_font_color,
    case_studies_description_font_color,
    main_case_study_title_font_color,
    main_case_study_description_font_color,
    main_case_study_author_date_font_color,
    show_button,
    button_style,
    show_excerpt,
    show_featured_image,
    show_author_date
  } = attributes;

  const orderByList = [
		{ label: 'Date', value: 'date' },
		{ label: 'Title', value: 'title' },
		{ label: 'Random', value: 'rand' },
	];
	const orderList = [
		{ label: 'Descending', value: 'desc' },
		{ label: 'Ascending', value: 'asc' },
	];

  return (
    <div
      {...useBlockProps({ className: "md_case_studies" })}
      style={{ backgroundColor: background_color }}
    >
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-storyful-fse-full")}>
          <RangeControl
            label={ __( 'Show Number of Blog', 'md-prime' ) }
            value={ number_of_case_studies }
            onChange={ ( value ) =>
              setAttributes( {
                number_of_case_studies: parseInt( value ),
              } )
            }
            min={ 2 }
            max={ 99 }
            step={ 1 }
          />
          <SelectControl
            label={ __( 'Order By', 'md-prime' ) }
            value={ orderBy }
            options={ orderByList }
            onChange={ ( value ) =>
              setAttributes( { orderBy: value } )
            }
          />
          <SelectControl
            label={ __( 'Order', 'md-prime' ) }
            value={ order }
            options={ orderList }
            onChange={ ( value ) =>
              setAttributes( { order: value } )
            }
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
        <PanelBody title={__("Toggle Settings", "md-storyful-fse-full")} initialOpen={false} >
          <ToggleControl
            label={__("Show Section Title", "md-storyful-fse-full")}
            checked={show_section_title}
            onChange={(value) => setAttributes({ show_section_title: value })}
          />
          {show_section_title && (
            <TextControl
              label={__("Section Title", "md-storyful-fse-full")}
              value={section_title}
              onChange={(value) => setAttributes({ section_title: value })}
            />
          )}
          <ToggleControl
            label={__("Show Excerpt", "md-storyful-fse-full")}
            checked={show_excerpt}
            onChange={(value) => setAttributes({ show_excerpt: value })}
          />
          <ToggleControl
            label={__("Show Featured Image", "md-storyful-fse-full")}
            checked={show_featured_image}
            onChange={(value) => setAttributes({ show_featured_image: value })}
          />
          <ToggleControl
            label={__("Show Author Date", "md-storyful-fse-full")}
            checked={show_author_date}
            onChange={(value) => setAttributes({ show_author_date: value })}
          />
        </PanelBody>
        <PanelBody title={__("Background Settings", "md-storyful-fse-full")} initialOpen={false} >
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
        </PanelBody>
        <PanelBody title={__("Button Settings", "md-storyful-fse-full")} initialOpen={false} >
          <ToggleControl
            label={__("Show Button", "md-storyful-fse-full")}
            checked={show_button}
            onChange={(value) => setAttributes({ show_button: value })}
          />
          {show_button && (
            <SelectControl
              label={__("Button Style", "md-storyful-fse-full")}
              value={button_style}
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
                }
              ]}
              onChange={(value) => setAttributes({ button_style: value })}
              __nextHasNoMarginBottom
            />
          )}
        </PanelBody>
        <PanelBody title={__("Color Settings", "md-storyful-fse-full")} initialOpen={false}>
          <PanelColorSettings
            title={__("Colors Settings", "md-storyful-fse-full")}
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
              }
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <ServerSideRender
        block={metadata.name}
        className={className}
        attributes={{
          show_section_title,
          section_title,
          number_of_case_studies,
          case_studies_ids,
          background_color,
          case_studies_style,
          section_title_font_color,
          case_studies_title_font_color,
          case_studies_description_font_color,
          main_case_study_title_font_color,
          main_case_study_description_font_color,
          main_case_study_author_date_font_color,
          show_button,
          button_style,
          orderBy,
          order,
          show_excerpt,
          show_featured_image,
          show_author_date
        }}
      />
    </div>
  );
}
