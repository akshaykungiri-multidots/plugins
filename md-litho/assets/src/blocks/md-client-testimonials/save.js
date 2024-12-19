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
    products,
    subHeading,
    heading,
    bgcolor,
    headingcolor,
    authornamecolor,
    authortitlecolor,
    displayAuthorname,
    displayAuthortitle,
    displayTestimonials,
    subheadingcolor,
    testimonialcolor,
  } = attributes;

  const itemList = products.map((product, index) => {
    return (
      <div
        className=" testimonials__author__box-item show-items-hover-wrap"
        key={index}
      >
        <div className="testimonials__author__box-item-inner">
          <div className="testimonials__author__box-item-inner-img">
            {product.testimonialsHeadshot && (
              <img
                src={product.testimonialsHeadshot}
                alt="testimonials"
                className="author-img"
              />
            )}
          </div>
          <div className="testimonials__author__box-item-inner-content">
            <div className="testimonials-rounded-icon">
              <i className="testimonials-quotes fa fa-solid fa-quote-left"></i>
            </div>
            {displayTestimonials && (
              <RichText.Content
                tagName="p"
                placeholder={__("Testimonial")}
                value={product.testimonial}
                keepPlaceholderOnFocus="true"
                className="testimonial"
                style={
                  testimonialcolor
                    ? {
                        color: testimonialcolor,
                      }
                    : {}
                }
              />
            )}
            {displayAuthorname && (
              <RichText.Content
                tagName="h3"
                placeholder={__("Name")}
                value={product.testimonialsName}
                keepPlaceholderOnFocus="true"
                className="testimonialsName"
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
                value={product.testimonialsTitle}
                className="testimonialsTitle"
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
        <div className="testimonials">
          <div
            className="testimonials__header"
            style={bgcolor ? { background: bgcolor } : {}}
          >
            <RichText.Content
              tagName="h3"
              value={subHeading}
              className="testimonials__header-subheading"
              placeholder="Our testimonials"
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
              className="testimonials__header-heading"
              placeholder="testimonials"
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
            <div className="box-main testimonials__author__box">{itemList}</div>
          </div>
        </div>
      </div>
    </>
  );
}
