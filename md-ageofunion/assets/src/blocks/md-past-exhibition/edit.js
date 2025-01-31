/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/
 */
import {
  useBlockProps,
  RichText,
  InspectorControls,
  PanelColorSettings,
} from "@wordpress/block-editor";

/**
 * React hook that is used to mark the components element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/
 */
import { PanelBody, ToggleControl, RangeControl } from "@wordpress/components";

/**
 * React hook that is used to mark the packages element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-element/
 */
import { WPElement, useState, useEffect } from "@wordpress/element";

import "./editor.scss";

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
export default function Edit({ attributes, setAttributes }) {
  const {
    exhibitionHeading,
    numberOfExhibitions,
    showExhibitionHeading,
    exhibitionHeadingColor,
    showExhibitionFeatureImage,
    showExhibitionCategory,
    showViewMoreButton,
    viewMoreButtonText,
    exhibitionTitleColor,
    exhibitionCategoryColor,
    viewMoreButtonColor,
    viewMoreButtonBackgroundColor,
    viewMoreButtonHoverColor,
    viewMoreButtonHoverBackgroundColor,
  } = attributes;

  const [exhibitions, setExhibitions] = useState([]);

  useEffect(() => {
    fetch(`/wp-json/wp/v2/exhibitions?per_page=${numberOfExhibitions}`)
      .then((response) => response.json())
      .then((data) => {
        setExhibitions(data);
      });
  }, [numberOfExhibitions]);

  return (
    <div {...useBlockProps()}>
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-ageofunion")}>
          <ToggleControl
            label={__("Show Exhibition Heading", "md-ageofunion")}
            checked={showExhibitionHeading}
            onChange={(value) =>
              setAttributes({ showExhibitionHeading: value })
            }
          />
          <ToggleControl
            label={__("Show Exhibition Feature Image", "md-ageofunion")}
            checked={showExhibitionFeatureImage}
            onChange={(value) =>
              setAttributes({ showExhibitionFeatureImage: value })
            }
          />
          <ToggleControl
            label={__("Show Exhibition Category", "md-ageofunion")}
            checked={showExhibitionCategory}
            onChange={(value) =>
              setAttributes({ showExhibitionCategory: value })
            }
          />
          <ToggleControl
            label={__("Show View More Button", "md-ageofunion")}
            checked={showViewMoreButton}
            onChange={(value) => setAttributes({ showViewMoreButton: value })}
          />
          <RangeControl
            label={__("Number of Exhibitions", "md-ageofunion")}
            value={numberOfExhibitions}
            onChange={(value) => setAttributes({ numberOfExhibitions: value })}
            min={1}
            max={100}
          />
        </PanelBody>
        <PanelBody
          title={__("Color Settings", "md-ageofunion")}
          initialOpen={false}
        >
          <PanelColorSettings
            title={__("Color Settings", "md-ageofunion")}
            colorSettings={[
              {
                value: exhibitionHeadingColor,
                onChange: (value) =>
                  setAttributes({ exhibitionHeadingColor: value }),
                label: __("Exhibition Heading Color", "md-ageofunion"),
              },
              {
                value: exhibitionTitleColor,
                onChange: (value) =>
                  setAttributes({ exhibitionTitleColor: value }),
                label: __("Exhibition Title Color", "md-ageofunion"),
              },
              {
                value: exhibitionCategoryColor,
                onChange: (value) =>
                  setAttributes({ exhibitionCategoryColor: value }),
                label: __("Exhibition Category Color", "md-ageofunion"),
              },
              {
                value: viewMoreButtonColor,
                onChange: (value) =>
                  setAttributes({ viewMoreButtonColor: value }),
                label: __("View More Button Color", "md-ageofunion"),
              },
              {
                value: viewMoreButtonBackgroundColor,
                onChange: (value) =>
                  setAttributes({ viewMoreButtonBackgroundColor: value }),
                label: __("View More Button Background Color", "md-ageofunion"),
              },
              {
                value: viewMoreButtonHoverColor,
                onChange: (value) =>
                  setAttributes({ viewMoreButtonHoverColor: value }),
                label: __("View More Button Hover Color", "md-ageofunion"),
              },
              {
                value: viewMoreButtonHoverBackgroundColor,
                onChange: (value) =>
                  setAttributes({ viewMoreButtonHoverBackgroundColor: value }),
                label: __(
                  "View More Button Hover Background Color",
                  "md-ageofunion"
                ),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <style>
        {`
        .md_past_exhibition__listing__button span {
          color: ${viewMoreButtonColor};
          background-color: ${viewMoreButtonBackgroundColor};
        }
        .md_past_exhibition__listing__button span:hover {
          color: ${viewMoreButtonHoverColor} !important;
          background-color: ${viewMoreButtonHoverBackgroundColor} !important;
        }
      `}
      </style>
      <div className="md_past_exhibition">
        <section>
          <div className="md_past_exhibition__listing container">
            {showExhibitionHeading && (
              <RichText
                tagName="h2"
                placeholder={__("Add Exhibition Heading", "md-ageofunion")}
                className="md_past_exhibition__exhibition_heading"
                value={exhibitionHeading}
                onChange={(value) =>
                  setAttributes({ exhibitionHeading: value })
                }
                style={{ color: exhibitionHeadingColor }}
              />
            )}
            <div className="md_past_exhibition__listing__grid">
              {exhibitions.map((exhibition) => (
                <div
                  className="md_past_exhibition__listing__grid__item"
                  key={exhibition.id}
                >
                  <div className="md_past_exhibition__listing__grid__item__tile">
                    {showExhibitionCategory && exhibition.categories && (
                      <div className="md_past_exhibition__listing__grid__item__tile__category">
                        {exhibition.categories.join(", ")}
                      </div>
                    )}
                    {showExhibitionFeatureImage &&
                      exhibition.featured_image_url && (
                        <figure className="md_past_exhibition__listing__grid__item__tile__image">
                          <div className="md_past_exhibition__listing__grid__item__tile__image__lazy">
                            <img
                              src={exhibition.featured_image_url}
                              alt={exhibition.title.rendered}
                            />
                          </div>
                        </figure>
                      )}
                    <h2
                      className="md_past_exhibition__listing__grid__item__tile__title"
                      style={{ color: exhibitionTitleColor }}
                    >
                      {exhibition.title.rendered}
                    </h2>
                    {exhibition.exhibition_publish_date && (
                      <div className="md_past_exhibition__listing__grid__item__tile__date">
                        {exhibition.exhibition_publish_date}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {showViewMoreButton && (
              <div className="md_past_exhibition__listing__button">
                <RichText
                  tagName="span"
                  placeholder={__("View More", "md-ageofunion")}
                  className="md_past_exhibition__listing__button__text"
                  value={viewMoreButtonText}
                  onChange={(value) =>
                    setAttributes({ viewMoreButtonText: value })
                  }
                  style={{
                    color: viewMoreButtonColor,
                    backgroundColor: viewMoreButtonBackgroundColor,
                  }}
                />
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
