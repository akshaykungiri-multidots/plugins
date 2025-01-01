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
  InspectorControls,
  RichText,
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
} from "@wordpress/components";

/**
 * React hook that is used to mark the packages element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-element/
 */
import { WPElement, useState, useEffect } from "@wordpress/element";

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
export default function Edit({ attributes, setAttributes }) {
  const {
    featuredFilm,
    viewMoreText,
    showViewMore,
    showTotalFilms,
    showFilmTitle,
    showFilmImage,
    showFilmExcerpt,
    filmTitleColor,
    filmTitleHoverColor,
    filmPosterTextColor,
    filmPosterBackgroundColor,
    viewMoreTextColor,
  } = attributes;

  const [filmsData, setFilmsData] = useState([]);

  useEffect(() => {
    fetch(`/wp-json/wp/v2/films?_embed&per_page=100`)
      .then((response) => response.json())
      .then((data) => {
        setFilmsData(data);
      });
  }, []);
  return (
    <div {...useBlockProps({ className: "md_ageofunion_films" })}>
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-ageofunion")}>
          <ToggleControl
            label={__("Show View More", "md-ageofunion")}
            checked={showViewMore}
            onChange={(value) => setAttributes({ showViewMore: value })}
          />
          <ToggleControl
            label={__("Show Total Films", "md-ageofunion")}
            checked={showTotalFilms}
            onChange={(value) => setAttributes({ showTotalFilms: value })}
          />
          <ToggleControl
            label={__("Show Film Title", "md-ageofunion")}
            checked={showFilmTitle}
            onChange={(value) => setAttributes({ showFilmTitle: value })}
          />
          <ToggleControl
            label={__("Show Film Image", "md-ageofunion")}
            checked={showFilmImage}
            onChange={(value) => setAttributes({ showFilmImage: value })}
          />
          <ToggleControl
            label={__("Show Film Excerpt", "md-ageofunion")}
            checked={showFilmExcerpt}
            onChange={(value) => setAttributes({ showFilmExcerpt: value })}
          />
          <Select
            value={featuredFilm}
            onChange={(value) => setAttributes({ featuredFilm: value })}
            options={filmsData.map((article) => ({
              value: article.id,
              label: article.title.rendered,
            }))}
            placeholder={__("Select a Film", "md-ageofunion")}
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
                value: filmTitleColor,
                onChange: (value) => setAttributes({ filmTitleColor: value }),
                label: __("Film Title Color", "md-ageofunion"),
              },
              {
                value: filmTitleHoverColor,
                onChange: (value) =>
                  setAttributes({ filmTitleHoverColor: value }),
                label: __("Film Title Hover Color", "md-ageofunion"),
              },
              {
                value: filmPosterTextColor,
                onChange: (value) =>
                  setAttributes({ filmPosterTextColor: value }),
                label: __("Film Poster Text Color", "md-ageofunion"),
              },
              {
                value: filmPosterBackgroundColor,
                onChange: (value) =>
                  setAttributes({ filmPosterBackgroundColor: value }),
                label: __("Film Poster Background Color", "md-ageofunion"),
              },
              {
                value: viewMoreTextColor,
                onChange: (value) =>
                  setAttributes({ viewMoreTextColor: value }),
                label: __("View More Text Color", "md-ageofunion"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <style>
        {`.md_ageofunion_films .md_ageofunion_films__featured-film__title h3:hover {
          color: ${filmTitleHoverColor};
        }`}
      </style>
      <div className="md_ageofunion_films__inner">
        <div className="md_ageofunion_films__content">
          {filmsData.length > 0 && (
            <div className="md_ageofunion_films__featured-film">
              <div className="md_ageofunion_films__featured-film__heading">
                {showTotalFilms && (
                  <h2 className="md_ageofunion_films__featured-film__total-films">
                    {__("Total Films ( ", "md-ageofunion")}
                    {
                      filmsData.find(
                        (article) => article.id === featuredFilm.value
                      ).total_posts
                    }
                    {" )"}
                  </h2>
                )}
                {showFilmTitle && (
                  <div className="md_ageofunion_films__featured-film__title">
                    <h3 style={{ color: filmTitleColor }}>
                      {
                        filmsData.find(
                          (article) => article.id === featuredFilm.value
                        ).title.rendered
                      }
                    </h3>
                  </div>
                )}
              </div>
              <div
                className="md_ageofunion_films__featured-film__box"
                style={{ backgroundColor: filmPosterBackgroundColor }}
              >
                <div className="md_ageofunion_films__featured-film__box__inner">
                  <figure className="md_ageofunion_films__featured-film__box__image">
                    {showFilmImage &&
                      filmsData.find(
                        (article) => article.id === featuredFilm.value
                      ).featured_image_url && (
                        <img
                          src={
                            filmsData.find(
                              (article) => article.id === featuredFilm.value
                            ).featured_image_url
                          }
                          alt={
                            filmsData.find(
                              (article) => article.id === featuredFilm.value
                            ).title.rendered
                          }
                        />
                      )}
                    <button className="md_ageofunion_films__featured-film__box__video">
                      <span className="md_ageofunion_films__featured-film__box__video__rendered_text">
                        {__("Play Video", "md-ageofunion")}
                      </span>
                      <span className="md_ageofunion_films__featured-film__box__video__button">
                        <span className="md_ageofunion_films__featured-film__box__video__button__circle"></span>
                      </span>
                    </button>
                  </figure>
                </div>
              </div>
              {showFilmExcerpt && (
                <div
                  className="md_ageofunion_films__featured-film__excerpt"
                  style={{ color: filmPosterTextColor }}
                  dangerouslySetInnerHTML={{
                    __html: filmsData.find(
                      (article) => article.id === featuredFilm.value
                    ).excerpt.rendered,
                  }}
                ></div>
              )}
            </div>
          )}
        </div>
        <div className="md_ageofunion_films__view-more">
          {showViewMore && (
            <RichText
              tagName="p"
              value={viewMoreText}
              onChange={(value) => setAttributes({ viewMoreText: value })}
              placeholder={__("View More", "md-ageofunion")}
              style={{ color: viewMoreTextColor }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
