/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {null} No element to render.
 */

import { __ } from "@wordpress/i18n";

import { RichText, useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
  const {
    autoplay,
    arrows,
    dots,
    slideInfinite,
    slideSlidesToShow,
    slideSlidesToScroll,
    products,
    subHeading,
    heading,
    bgcolor,
    headingcolor,
    authornamecolor,
    authortitlecolor,
    displayAuthorname,
    displayAuthortitle,
    displayTeam,
    subheadingcolor,
    testimonialcolor,
  } = attributes;

  const itemList = products.map((product, index) => {
    return (
      <div
        className=" team__author__box-item show-items-hover-wrap"
        key={index}
      >
        <div className="team__author__box-item-inner">
          <div className="team__author__box-item-inner-img_content">
            <div className="team__author__box-item-inner-img">
              {product.teamHeadshot && (
                <img
                  src={product.teamHeadshot}
                  alt="team"
                  className="author-img"
                />
              )}
            </div>
            <div
              className="team__author__box-item-inner-testimonial_text"
              style={{
                color: testimonialcolor,
              }}
            >
              {displayTeam && (
                <RichText.Content
                  tagName="p"
                  placeholder={__("Testimonial")}
                  value={product.testimonial}
                  keepPlaceholderOnFocus="true"
                  className="testimonial"
                />
              )}
              <div className="team__author__box-item-inner__line"></div>
              <div className="team__author__box-item-inner-social">
                {product.facbookUrl && (
                  <a href={product.facbookUrl} target="_blank" rel="noreferrer">
                    <i className="fa fa-facebook"></i>
                  </a>
                )}
                {product.twitterUrl && (
                  <a href={product.twitterUrl} target="_blank" rel="noreferrer">
                    <i className="fa fa-twitter"></i>
                  </a>
                )}
                {product.instagramUrl && (
                  <a
                    href={product.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="team__author__box-item-inner-content">
            {displayAuthorname && (
              <RichText.Content
                tagName="h3"
                placeholder={__("Name")}
                value={product.teamName}
                keepPlaceholderOnFocus="true"
                className="teamName"
                style={
                  authornamecolor
                    ? {
                        color: authornamecolor,
                      }
                    : {}
                }
              />
            )}
            {displayAuthortitle && (
              <RichText.Content
                tagName="p"
                placeholder={__("Position")}
                value={product.teamTitle}
                className="teamTitle"
                keepPlaceholderOnFocus="true"
                style={
                  authortitlecolor
                    ? {
                        color: authortitlecolor,
                      }
                    : {}
                }
              />
            )}
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div {...useBlockProps.save()}>
        <div className={`team`}>
          <div
            className="team__header"
            style={bgcolor ? { background: bgcolor } : {}}
          >
            <RichText.Content
              tagName="h3"
              value={subHeading}
              className="team__header-subheading"
              placeholder="Our team"
              style={
                subheadingcolor
                  ? {
                      color: subheadingcolor,
                    }
                  : {}
              }
            />
            <RichText.Content
              tagName="h2"
              value={heading}
              className="team__header-heading"
              placeholder="team"
              style={
                headingcolor
                  ? {
                      color: headingcolor,
                    }
                  : {}
              }
            />
          </div>
          <div className="container">
            <div className="box-main team__author__box md_hero_banner_slider">
              <div
                className="md_slider"
                data-autoplay={autoplay}
                data-arrows={arrows}
                data-dots={dots}
                data-infinite={slideInfinite}
                data-slidesToShow={slideSlidesToShow}
                data-slidesToScroll={slideSlidesToScroll}
              >
                {itemList}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
