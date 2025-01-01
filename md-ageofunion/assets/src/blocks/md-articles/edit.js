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
  MediaUpload,
  MediaUploadCheck,
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
  RangeControl,
  Tooltip,
  Button,
} from "@wordpress/components";

/**
 * React hook that is used to mark the packages element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-element/
 */
import { WPElement, useState, useEffect } from "@wordpress/element";

import "./editor.scss";

import Select from "react-select";

import placeholder from "./placeholder-image.png";

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
    headingLogo,
    featuredArticle,
    numberOfArticles,
    showHeading,
    showFeaturedArticle,
    showSidebarArticles,
    showFeaturedArticleImage,
    showFeaturedArticleTitle,
    showFeaturedArticleExcerpt,
    showFeaturedArticleTags,
    showFeaturedArticleDate,
    showSidebarArticleImage,
    showSidebarArticleTitle,
    showSidebarArticleExcerpt,
    showSidebarArticleTags,
    showSidebarArticleDate,
    viewMoreText,
    showViewMore,
    featuredArticleTitleColor,
    featuredArticleTitleHoverColor,
    featuredArticleExcerptColor,
    featuredArticleTagsColor,
    featuredArticleDateColor,
    sidebarArticleHeadingColor,
    sidebarArticleTitleColor,
    sidebarArticleTitleHoverColor,
    sidebarArticleExcerptColor,
    sidebarArticleTagsColor,
    sidebarArticleDateColor,
    sidebarArticleBackgroundColor,
    sidebarArticleBackgroundHoverColor,
    viewMoreTextColor,
  } = attributes;

  const siteURL = window.location.origin;

  const [featuredArticleData, setFeaturedArticleData] = useState([]);

  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    if (showFeaturedArticle) {
      fetch(`/wp-json/wp/v2/posts?_embed&per_page=100`)
        .then((response) => response.json())
        .then((data) => {
          setFeaturedArticleData(data);
        });
    }
    if (showSidebarArticles) {
      fetch(
        `/wp-json/wp/v2/posts?per_page=${numberOfArticles}&exclude=${featuredArticle.value}`
      )
        .then((response) => response.json())
        .then((data) => {
          setArticleList(data);
        });
    }
  }, [showFeaturedArticle, showSidebarArticles, numberOfArticles, featuredArticle.value]);
  return (
    <div {...useBlockProps({ className: "md_ageofunion_articles" })}>
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-ageofunion")}>
          <ToggleControl
            label={__("Show Heading", "md-ageofunion")}
            checked={showHeading}
            onChange={(value) => setAttributes({ showHeading: value })}
          />
          <ToggleControl
            label={__("Show Sidebar Articles", "md-ageofunion")}
            checked={showSidebarArticles}
            onChange={(value) => setAttributes({ showSidebarArticles: value })}
          />
          {showSidebarArticles && (
            <div className="md-ageofunion__sidebar-article-settings">
              <ToggleControl
                label={__("Show Sidebar Article Image", "md-ageofunion")}
                checked={showSidebarArticleImage}
                onChange={(value) =>
                  setAttributes({ showSidebarArticleImage: value })
                }
              />
              <ToggleControl
                label={__("Show Sidebar Article Title", "md-ageofunion")}
                checked={showSidebarArticleTitle}
                onChange={(value) =>
                  setAttributes({ showSidebarArticleTitle: value })
                }
              />
              <ToggleControl
                label={__("Show Sidebar Article Excerpt", "md-ageofunion")}
                checked={showSidebarArticleExcerpt}
                onChange={(value) =>
                  setAttributes({ showSidebarArticleExcerpt: value })
                }
              />
              <ToggleControl
                label={__("Show Sidebar Article Tags", "md-ageofunion")}
                checked={showSidebarArticleTags}
                onChange={(value) =>
                  setAttributes({ showSidebarArticleTags: value })
                }
              />
              <ToggleControl
                label={__("Show Sidebar Article Date", "md-ageofunion")}
                checked={showSidebarArticleDate}
                onChange={(value) =>
                  setAttributes({ showSidebarArticleDate: value })
                }
              />
              <RangeControl
                label={__("Number of Articles", "md-ageofunion")}
                value={numberOfArticles}
                onChange={(value) => setAttributes({ numberOfArticles: value })}
                min={1}
                max={10}
              />
            </div>
          )}
          <ToggleControl
            label={__("Show View More", "md-ageofunion")}
            checked={showViewMore}
            onChange={(value) => setAttributes({ showViewMore: value })}
          />
        </PanelBody>
        <PanelBody
          title={__("Featured Article", "md-ageofunion")}
          initialOpen={false}
        >
          <ToggleControl
            label={__("Show Featured Article", "md-ageofunion")}
            checked={showFeaturedArticle}
            onChange={(value) => setAttributes({ showFeaturedArticle: value })}
          />
          {showFeaturedArticle && (
            <div className="md-ageofunion__featured-article-settings">
              <ToggleControl
                label={__("Show Featured Article Image", "md-ageofunion")}
                checked={showFeaturedArticleImage}
                onChange={(value) =>
                  setAttributes({ showFeaturedArticleImage: value })
                }
              />
              <ToggleControl
                label={__("Show Featured Article Title", "md-ageofunion")}
                checked={showFeaturedArticleTitle}
                onChange={(value) =>
                  setAttributes({ showFeaturedArticleTitle: value })
                }
              />
              <ToggleControl
                label={__("Show Featured Article Excerpt", "md-ageofunion")}
                checked={showFeaturedArticleExcerpt}
                onChange={(value) =>
                  setAttributes({ showFeaturedArticleExcerpt: value })
                }
              />
              <ToggleControl
                label={__("Show Featured Article Tags", "md-ageofunion")}
                checked={showFeaturedArticleTags}
                onChange={(value) =>
                  setAttributes({ showFeaturedArticleTags: value })
                }
              />
              <ToggleControl
                label={__("Show Featured Article Date", "md-ageofunion")}
                checked={showFeaturedArticleDate}
                onChange={(value) =>
                  setAttributes({ showFeaturedArticleDate: value })
                }
              />
              <Select
                options={featuredArticleData.map((article) => ({
                  value: article.id,
                  label: article.title.rendered,
                }))}
                value={featuredArticle}
                onChange={(selected) =>
                  setAttributes({ featuredArticle: selected })
                }
              />
            </div>
          )}
        </PanelBody>
        <PanelBody
          title={__("Color Settings", "md-ageofunion")}
          initialOpen={false}
        >
          <PanelColorSettings
            title={__("Color Settings", "md-ageofunion")}
            colorSettings={[
              {
                value: featuredArticleTitleColor,
                onChange: (value) =>
                  setAttributes({ featuredArticleTitleColor: value }),
                label: __("Featured Article Title Color", "md-ageofunion"),
              },
              {
                value: featuredArticleTitleHoverColor,
                onChange: (value) =>
                  setAttributes({ featuredArticleTitleHoverColor: value }),
                label: __(
                  "Featured Article Title Hover Color",
                  "md-ageofunion"
                ),
              },
              {
                value: featuredArticleExcerptColor,
                onChange: (value) =>
                  setAttributes({ featuredArticleExcerptColor: value }),
                label: __("Featured Article Excerpt Color", "md-ageofunion"),
              },
              {
                value: featuredArticleTagsColor,
                onChange: (value) =>
                  setAttributes({ featuredArticleTagsColor: value }),
                label: __("Featured Article Tags Color", "md-ageofunion"),
              },
              {
                value: featuredArticleDateColor,
                onChange: (value) =>
                  setAttributes({ featuredArticleDateColor: value }),
                label: __("Featured Article Date Color", "md-ageofunion"),
              },
              {
                value: sidebarArticleHeadingColor,
                onChange: (value) =>
                  setAttributes({ sidebarArticleHeadingColor: value }),
                label: __("Sidebar Article Heading Color", "md-ageofunion"),
              },
              {
                value: sidebarArticleTitleColor,
                onChange: (value) =>
                  setAttributes({ sidebarArticleTitleColor: value }),
                label: __("Sidebar Article Title Color", "md-ageofunion"),
              },
              {
                value: sidebarArticleTitleHoverColor,
                onChange: (value) =>
                  setAttributes({ sidebarArticleTitleHoverColor: value }),
                label: __("Sidebar Article Title Hover Color", "md-ageofunion"),
              },
              {
                value: sidebarArticleExcerptColor,
                onChange: (value) =>
                  setAttributes({ sidebarArticleExcerptColor: value }),
                label: __("Sidebar Article Excerpt Color", "md-ageofunion"),
              },
              {
                value: sidebarArticleTagsColor,
                onChange: (value) =>
                  setAttributes({ sidebarArticleTagsColor: value }),
                label: __("Sidebar Article Tags Color", "md-ageofunion"),
              },
              {
                value: sidebarArticleDateColor,
                onChange: (value) =>
                  setAttributes({ sidebarArticleDateColor: value }),
                label: __("Sidebar Article Date Color", "md-ageofunion"),
              },
              {
                value: sidebarArticleBackgroundColor,
                onChange: (value) =>
                  setAttributes({ sidebarArticleBackgroundColor: value }),
                label: __("Sidebar Article Background Color", "md-ageofunion"),
              },
              {
                value: sidebarArticleBackgroundHoverColor,
                onChange: (value) =>
                  setAttributes({ sidebarArticleBackgroundHoverColor: value }),
                label: __(
                  "Sidebar Article Background Hover Color",
                  "md-ageofunion"
                ),
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
        {`
          .md_ageofunion_articles__inner .md_ageofunion_articles__featured-article .md_ageofunion_articles__featured-article__title {
            color: ${featuredArticleTitleColor};
          }
          .md_ageofunion_articles__inner .md_ageofunion_articles__featured-article .md_ageofunion_articles__featured-article__title:hover {
            color: ${featuredArticleTitleHoverColor} !important;
          }
            .md_ageofunion_articles__sidebar__articles .md_ageofunion_articles__article {
            background-color: ${sidebarArticleBackgroundColor};
          }
          .md_ageofunion_articles__sidebar__articles .md_ageofunion_articles__article:hover {
            background-color: ${sidebarArticleBackgroundHoverColor} !important;
          }
            .md_ageofunion_articles__sidebar__articles .md_ageofunion_articles__article .md_ageofunion_articles__article__title {
            color: ${sidebarArticleTitleColor};
          }
          .md_ageofunion_articles__sidebar__articles .md_ageofunion_articles__article:hover .md_ageofunion_articles__article__title {
            color: ${sidebarArticleTitleHoverColor} !important;
          }
        `}
      </style>
      <div className="md_ageofunion_articles__inner">
        <div className="md_ageofunion_articles__content">
          <div className="md_ageofunion_articles__heading">
            {showHeading && (
              <div className="md_litho_image_banner__media">
                <div className="md-prime-block-control image-preview image-controle-visible-hover md_litho_image_banner__media1">
                  <div
                    className={`image-controls small-icons icon-center-fixed`}
                  >
                    <MediaUploadCheck>
                      <MediaUpload
                        onSelect={(media) =>
                          setAttributes({ headingLogo: media.url })
                        }
                        allowedTypes={["image"]}
                        value={headingLogo}
                        render={({ open }) => (
                          <>
                            {headingLogo ? (
                              <>
                                <Tooltip text={__("Edit Image", "md-prime")}>
                                  <i
                                    className="dashicons dashicons-edit edit-image"
                                    onClick={open}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                      if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault(); // Prevent default action for space key
                                        open(); // Trigger the click handler
                                      }
                                    }}
                                    aria-label={__("Edit image", "md-prime")}
                                  ></i>
                                </Tooltip>
                                <Tooltip text={__("Remove Image", "md-prime")}>
                                  <i
                                    className="dashicons dashicons-no-alt remove-image"
                                    onClick={() =>
                                      setAttributes({ headingLogo: "" })
                                    }
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                      if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault();
                                        setAttributes({ headingLogo: "" });
                                      }
                                    }}
                                    aria-label={__("Remove image", "md-prime")}
                                  ></i>
                                </Tooltip>
                              </>
                            ) : (
                              <div className="upload-wrap">
                                <Button
                                  onClick={open}
                                  className="button media_and_text__upload_btn"
                                >
                                  <Tooltip
                                    text={__("Upload Image", "md-prime")}
                                  >
                                    <i className="dashicons dashicons-upload"></i>
                                  </Tooltip>
                                </Button>
                              </div>
                            )}
                          </>
                        )}
                      />
                    </MediaUploadCheck>
                  </div>
                  <img
                    src={headingLogo ? headingLogo : siteURL + placeholder}
                    alt={"slider"}
                  />
                  <span className="image-overlay"></span>
                </div>
              </div>
            )}
          </div>
          {showFeaturedArticle && featuredArticleData.length > 0 && (
            <div className="md_ageofunion_articles__featured-article">
              {showFeaturedArticleImage &&
                featuredArticleData.find(
                  (article) => article.id === featuredArticle.value
                ).featured_image_url && (
                  <img
                    src={
                      featuredArticleData.find(
                        (article) => article.id === featuredArticle.value
                      ).featured_image_url
                    }
                    alt={
                      featuredArticleData.find(
                        (article) => article.id === featuredArticle.value
                      ).title.rendered
                    }
                  />
                )}
              <div className="md_ageofunion_articles__featured-article__content">
                {showFeaturedArticleTitle && (
                  <h2
                    style={{ color: featuredArticleTitleColor }}
                    className="md_ageofunion_articles__featured-article__title"
                  >
                    {
                      featuredArticleData.find(
                        (article) => article.id === featuredArticle.value
                      ).title.rendered
                    }
                  </h2>
                )}
                {showFeaturedArticleExcerpt && (
                  <div
                    className="md_ageofunion_articles__featured-article__excerpt"
                    style={{ color: featuredArticleExcerptColor }}
                    dangerouslySetInnerHTML={{
                      __html: featuredArticleData.find(
                        (article) => article.id === featuredArticle.value
                      ).excerpt.rendered,
                    }}
                  ></div>
                )}
                <div className="md_ageofunion_articles__featured-article__footer">
                  {showFeaturedArticleTags && (
                    <ul
                      className="md_ageofunion_articles__featured-article__tags"
                      style={{ color: featuredArticleTagsColor }}
                    >
                      {featuredArticleData.find(
                        (article) => article.id === featuredArticle.value
                      ).post_tags &&
                        featuredArticleData
                          .find(
                            (article) => article.id === featuredArticle.value
                          )
                          .post_tags.map((tag) => (
                            <li key={tag.id}>{tag.name}</li>
                          ))}
                    </ul>
                  )}
                  {showFeaturedArticleDate && (
                    <p
                      className="md_ageofunion_articles__featured-article__date"
                      style={{ color: featuredArticleDateColor }}
                    >
                      {
                        featuredArticleData.find(
                          (article) => article.id === featuredArticle.value
                        ).post_date
                      }
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="md_ageofunion_articles__sidebar">
          <h2
            className="md_ageofunion_articles__sidebar__heading"
            style={{ color: sidebarArticleHeadingColor }}
          >
            {__("Articles", "md-ageofunion") + " " + numberOfArticles}
          </h2>
          <div className="md_ageofunion_articles__sidebar__articles">
            {showSidebarArticles &&
              articleList.length > 0 &&
              articleList.map((article) => (
                <div
                  key={article.id}
                  className="md_ageofunion_articles__article"
                  style={{ backgroundColor: sidebarArticleBackgroundColor }}
                >
                  {showSidebarArticleImage && article.featured_image_url && (
                    <div className="md_ageofunion_articles__article__image">
                      <img
                        src={article.featured_image_url}
                        alt={article.title.rendered}
                      />
                    </div>
                  )}
                  <div className="md_ageofunion_articles__article__content">
                    {showSidebarArticleTitle && (
                      <h3
                        style={{ color: sidebarArticleTitleColor }}
                        className="md_ageofunion_articles__article__title"
                      >
                        {article.title.rendered}
                      </h3>
                    )}
                    {showSidebarArticleExcerpt && (
                      <div
                        className="md_ageofunion_articles__article__excerpt"
                        style={{ color: sidebarArticleExcerptColor }}
                        dangerouslySetInnerHTML={{
                          __html: article.excerpt.rendered,
                        }}
                      ></div>
                    )}
                    {showSidebarArticleTags && (
                      <ul
                        className="md_ageofunion_articles__article__tags"
                        style={{ color: sidebarArticleTagsColor }}
                      >
                        {article.post_tags &&
                          article.post_tags.map((tag) => (
                            <li key={tag.id}>{tag.name}</li>
                          ))}
                      </ul>
                    )}
                    {showSidebarArticleDate && (
                      <p
                        className="md_ageofunion_articles__article__date"
                        style={{ color: sidebarArticleDateColor }}
                      >
                        {article.post_date}
                      </p>
                    )}
                  </div>
                </div>
              ))}
          </div>
          <div className="md_ageofunion_articles__view-more">
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
    </div>
  );
}
