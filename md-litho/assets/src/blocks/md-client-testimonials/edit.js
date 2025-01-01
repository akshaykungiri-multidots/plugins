/* eslint-disable react-hooks/exhaustive-deps */
import { __ } from "@wordpress/i18n";

import { useEffect } from "@wordpress/element";

/**
 * React hook that is used to mark the components element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/
 */
import {
  Button,
  PanelBody,
  PanelRow,
  FormToggle,
  Tooltip,
} from "@wordpress/components";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {
  RichText,
  MediaUpload,
  InspectorControls,
  PanelColorSettings,
  useBlockProps,
} from "@wordpress/block-editor";

import defaultImage from "./placeholder-image.jpeg";
import { mdprimeColors } from "../common";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
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
    testimonialcolor
  } = attributes;

  const siteURL = window.location.origin;

  useEffect(() => {
    if (0 === products.length) {
      initList();
    }
  }, []);

  const initList = () => {
    setAttributes({
      products: [
        ...products,
        {
          testimonialsName: "",
          testimonialsTitle: "",
          testimonialsHeadshot: "",
          testimonial: "",
        },
      ],
    });
  };

  const addNewItem = () => {
    const attr = {
      testimonialsName: "",
      testimonialsTitle: "",
      testimonialsHeadshot: "",
      testimonial: "",
    };
    setAttributes({
      products: [...products, attr],
      uniqueId: Math.random(),
    });
  };

  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...products];
    arrayCopy[oldIndex] = products[newIndex];
    arrayCopy[newIndex] = products[oldIndex];

    setAttributes({
      products: arrayCopy,
    });
  };

  const itemList = products.map((product, index) => {
    return (
      <div
        className=" testimonials__author__box-item show-items-hover-wrap"
        key={index}
      >
        <div className="item-action-wrap show-items-hover small-icons">
          <div className="move-item">
            {0 < index && (
              <Tooltip text={__("Move Left", "md-prime")}>
                <span
                  className="dashicons dashicons-arrow-left-alt move-up"
                  onClick={() => moveItem(index, index - 1)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      moveItem(index, index - 1);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label="Move item left"
                ></span>
              </Tooltip>
            )}
            {index + 1 < products.length && (
              <Tooltip text={__("Move Right", "md-prime")}>
                <span
                  className="dashicons dashicons-arrow-right-alt move-down"
                  onClick={() => moveItem(index, index + 1)}
                  role="button"
                  tabIndex={0}
                  aria-label="Move item down"
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      // Simulate the click event on Enter or Space key
                      event.target.click();
                    }
                  }}
                ></span>
              </Tooltip>
            )}
          </div>
          {1 < products.length && (
            <Tooltip text={__("Remove Item", "md-prime")}>
              <i
                className="remove-item dashicons dashicons-no-alt"
                onClick={() => {
                  const toDelete =
                    // eslint-disable-next-line no-alert
                    confirm(
                      __(
                        "Are you sure you want to remove this item?",
                        "md-prime"
                      )
                    );
                  if (toDelete === true) {
                    const updatedProducts = products.filter(
                      (item, itemIndex) => itemIndex !== index
                    );

                    setAttributes({
                      products: updatedProducts,
                    });
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label="Remove item"
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    // Simulate the click event on Enter or Space key
                    event.target.click();
                  }
                }}
              ></i>
            </Tooltip>
          )}
        </div>
        <div className="testimonials__author__box-item-inner">
          <div className="testimonials__author__box-item-inner-img">
            <MediaUpload
              onSelect={(testimonialsHeadshot) => {
                const copyData = [...products];
                copyData[index].testimonialsHeadshot =
                  testimonialsHeadshot.sizes.full.url;
                setAttributes({
                  products: copyData,
                });
              }}
              allowedTypes={["image"]}
              value={product.testimonialsHeadshot}
              render={({ open }) =>
                !product.testimonialsHeadshot ? (
                  <Button
                    className={
                      product.testimonialsHeadshot
                        ? "image-button "
                        : " button-large"
                    }
                    onClick={open}
                  >
                    <p className="components-button button button-large">
                      <i className="fa fa-upload"></i>
                      {__("Update Image", "md-prime")}
                    </p>
                  </Button>
                ) : (
                  <Button
                    className={
                      product.testimonialsHeadshot
                        ? "image-button "
                        : " button-large"
                    }
                    onClick={open}
                  >
                    <p className="components-button button button-large">
                      <i className="fa fa-pencil"></i>
                      {__("Update Image", "md-prime")}
                    </p>
                  </Button>
                )
              }
            />
            {product.testimonialsHeadshot ? (
              <img
                src={product.testimonialsHeadshot}
                alt="testimonials"
                className="author-img"
              />
            ) : (
              <img
                src={siteURL + defaultImage}
                alt="placeholder img"
                className="author-img"
              />
            )}
          </div>
          <div className="testimonials__author__box-item-inner-content">
            <div className="testimonials-rounded-icon">
              <i className="testimonials-quotes fa fa-solid fa-quote-left"></i>
            </div>
            {displayTestimonials && (
              <RichText
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
                onChange={(testimonial) => {
                  const newObject = Object.assign({}, product, {
                    testimonial,
                  });
                  const blockDetails = [...products];
                  blockDetails[index] = newObject;
                  setAttributes({
                    products: blockDetails,
                  });
                }}
              />
            )}
            {displayAuthorname && (
              <RichText
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
                onChange={(testimonialsName) => {
                  const newObject = Object.assign({}, product, {
                    testimonialsName,
                  });
                  const blockDetails = [...products];
                  blockDetails[index] = newObject;
                  setAttributes({
                    products: blockDetails,
                  });
                }}
              />
            )}
            {displayAuthortitle && (
              <RichText
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
                onChange={(testimonialsTitle) => {
                  const newObject = Object.assign({}, product, {
                    testimonialsTitle,
                  });
                  const blockDetails = [...products];
                  blockDetails[index] = newObject;
                  setAttributes({
                    products: blockDetails,
                  });
                }}
              />
            )}
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <InspectorControls>
        <PanelColorSettings
          title={__("Color Settings")}
          colorSettings={[
            {
              value: headingcolor,
              onChange: (newColor) => {
                setAttributes({ headingcolor: newColor });
              },
              label: __("Heading Color"),
              mdprimeColors,
            },
            {
              value: subheadingcolor,
              onChange: (newColor) => {
                setAttributes({ subheadingcolor: newColor });
              },
              label: __("Subheading Color"),
            },
            {
              value: testimonialcolor,
              onChange: (newColor) => {
                setAttributes({ testimonialcolor: newColor });
              },
              label: __("Testimonial Color"),
            },
            {
              value: authornamecolor,
              onChange: (newColor) => {
                setAttributes({
                  authornamecolor: newColor,
                });
              },
              label: __("Team member name color"),
              mdprimeColors,
            },
            {
              value: authortitlecolor,
              onChange: (newColor) => {
                setAttributes({
                  authortitlecolor: newColor,
                });
              },
              label: __("Team member Position color"),
              mdprimeColors,
            },
            {
              value: bgcolor,
              onChange: (newColor) => {
                setAttributes({ bgcolor: newColor });
              },
              label: __("Heading background color"),
              mdprimeColors,
            },
          ]}
        />

        <PanelBody title="Visibility Settings" initialOpen={false}>
          <PanelRow>
            <label htmlFor="display settings">
              {__("Name Visibility", "md-prime")}
            </label>
            <FormToggle
              checked={displayAuthorname}
              onChange={() =>
                setAttributes({
                  displayAuthorname: !displayAuthorname,
                })
              }
            />
          </PanelRow>
          <PanelRow>
            <label htmlFor="display settings">
              {__("Position Visibility", "md-prime")}
            </label>
            <FormToggle
              checked={displayAuthortitle}
              onChange={() =>
                setAttributes({
                  displayAuthortitle: !displayAuthortitle,
                })
              }
            />
          </PanelRow>
          <PanelRow>
            <label htmlFor="display settings">
              {__("Testimonial Visibility", "md-prime")}
            </label>
            <FormToggle
              checked={displayTestimonials}
              onChange={() =>
                setAttributes({
                  displayTestimonials: !displayTestimonials,
                })
              }
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <div {...useBlockProps()}>
        <div className="testimonials">
          <div
            className="testimonials__header"
            style={bgcolor ? { background: bgcolor } : {}}
          >
            <RichText
              tagName="h3"
              value={subHeading}
              className="testimonials__header-subheading"
              onChange={(value) => setAttributes({ subHeading: value })}
              placeholder="Our testimonials"
              style={
                subheadingcolor
                  ? {
                      color: subheadingcolor,
                    }
                  : {}
              }
            />
            <RichText
              tagName="h2"
              value={heading}
              className="testimonials__header-heading"
              onChange={(value) => setAttributes({ heading: value })}
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
            <div className="box-main testimonials__author__box">
              {itemList}
              <div
                className="add-item-wrap"
                onClick={() => {
                  addNewItem();
                }}
                role="button"
                tabIndex={0}
                aria-label="Add new item"
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    addNewItem();
                  }
                }}
              >
                <Tooltip text={__("Add New Item", "md-prime")}>
                  <i
                    onClick={() => {
                      setAttributes({
                        products: [
                          ...products,
                          {
                            testimonialsName: "",
                            testimonialsTitle: "",
                            testimonialsHeadshot: "",
                            testimonialsBio: "",
                            leaderlink: "",
                            popup: false,
                          },
                        ],
                      });
                    }}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        setAttributes({
                          products: [
                            ...products,
                            {
                              testimonialsName: "",
                              testimonialsTitle: "",
                              testimonialsHeadshot: "",
                              testimonialsBio: "",
                              leaderlink: "",
                              popup: false,
                            },
                          ],
                        });
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label="Add new product"
                    className="add-new-item dashicons dashicons-plus"
                  ></i>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}