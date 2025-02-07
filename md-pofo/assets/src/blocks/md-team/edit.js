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
  RangeControl,
  ToggleControl,
  SelectControl,
  TextControl,
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

import Slider from "react-slick";
import React, { useRef } from "react";

export default function Edit({ attributes, setAttributes }) {
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

  const siteURL = window.location.origin;

  const settings = {
    dots,
    slidesToShow: slideSlidesToShow,
    slidesToScroll: slideSlidesToScroll,
    infinite: slideInfinite,
    autoplay,
    arrows,
    speed: 1000,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  const sliderRef = useRef(null);

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
          teamName: "",
          teamTitle: "",
          teamHeadshot: "",
          testimonial: "",
          facbookUrl: "",
          twitterUrl: "",
          instagramUrl: "",
        },
      ],
    });
  };

  const addNewItem = () => {
    const attr = {
      teamName: "",
      teamTitle: "",
      teamHeadshot: "",
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
        className=" team__author__box-item show-items-hover-wrap"
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
        <div className="team__author__box-item-inner">
          <div className="team__author__box-item-inner-img_content">
            <div className="team__author__box-item-inner-img">
              <MediaUpload
                onSelect={(teamHeadshot) => {
                  const copyData = [...products];
                  copyData[index].teamHeadshot = teamHeadshot.sizes.full.url;
                  setAttributes({
                    products: copyData,
                  });
                }}
                allowedTypes={["image"]}
                value={product.teamHeadshot}
                render={({ open }) =>
                  !product.teamHeadshot ? (
                    <Button
                      className={
                        product.teamHeadshot ? "image-button " : " button-large"
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
                        product.teamHeadshot ? "image-button " : " button-large"
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
              {product.teamHeadshot ? (
                <img
                  src={product.teamHeadshot}
                  alt="team"
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
            <div className="team__author__box-item-inner-testimonial_text"
              style={ {
                color: testimonialcolor,
              }}
            >
              {displayTeam && (
                <RichText
                  tagName="p"
                  placeholder={__("Testimonial")}
                  value={product.testimonial}
                  keepPlaceholderOnFocus="true"
                  className="testimonial"
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
              <RichText
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
                onChange={(teamName) => {
                  const newObject = Object.assign({}, product, {
                    teamName,
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
                onChange={(teamTitle) => {
                  const newObject = Object.assign({}, product, {
                    teamTitle,
                  });
                  const blockDetails = [...products];
                  blockDetails[index] = newObject;
                  setAttributes({
                    products: blockDetails,
                  });
                }}
              />
            )}
            <div className="team__author__box-item-inner-social">
              <TextControl
                label={__("Facebook URL", "md-prime")}
                value={product.facbookUrl}
                onChange={(facbookUrl) => {
                  const newObject = Object.assign({}, product, {
                    facbookUrl,
                  });
                  const blockDetails = [...products];
                  blockDetails[index] = newObject;
                  setAttributes({
                    products: blockDetails,
                  });
                }}
              />
              <TextControl
                label={__("Twitter URL", "md-prime")}
                value={product.twitterUrl}
                onChange={(twitterUrl) => {
                  const newObject = Object.assign({}, product, {
                    twitterUrl,
                  });
                  const blockDetails = [...products];
                  blockDetails[index] = newObject;
                  setAttributes({
                    products: blockDetails,
                  });
                }}
              />
              <TextControl
                label={__("Instagram URL", "md-prime")}
                value={product.instagramUrl}
                onChange={(instagramUrl) => {
                  const newObject = Object.assign({}, product, {
                    instagramUrl,
                  });
                  const blockDetails = [...products];
                  blockDetails[index] = newObject;
                  setAttributes({
                    products: blockDetails,
                  });
                }}
              />
            </div>
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
        <PanelBody title={__("Slider Settings")} initialOpen={false}>
          <ToggleControl
            label={__("Autoplay", "md-prime")}
            checked={autoplay}
            onChange={(value) => setAttributes({ autoplay: value })}
          />
          <ToggleControl
            label={__("Show Arrows", "md-prime")}
            checked={arrows}
            onChange={(value) => setAttributes({ arrows: value })}
          />
          <ToggleControl
            label={__("Show Dots", "md-prime")}
            checked={dots}
            onChange={(value) => setAttributes({ dots: value })}
          />
          <ToggleControl
            label={__("Infinite Loop", "md-prime")}
            checked={slideInfinite}
            onChange={(value) => setAttributes({ slideInfinite: value })}
          />
          <RangeControl
            label={__("Slides To Show")}
            value={slideSlidesToShow}
            min={1}
            max={10}
            step={1}
            onChange={(value) => setAttributes({ slideSlidesToShow: value })}
          />
          <RangeControl
            label={__("Slides To Scroll")}
            value={slideSlidesToScroll}
            min={1}
            max={10}
            step={1}
            onChange={(value) => setAttributes({ slideSlidesToScroll: value })}
          />
        </PanelBody>
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
              checked={displayTeam}
              onChange={() =>
                setAttributes({
                  displayTeam: !displayTeam,
                })
              }
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <div {...useBlockProps()}>
        <div className={`team`}>
          <div
            className="team__header"
            style={bgcolor ? { background: bgcolor } : {}}
          >
            <RichText
              tagName="h3"
              value={subHeading}
              className="team__header-subheading"
              onChange={(value) => setAttributes({ subHeading: value })}
              placeholder="Our team"
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
              className="team__header-heading"
              onChange={(value) => setAttributes({ heading: value })}
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
              <Slider {...settings} className="md_slider" ref={sliderRef}>
                {itemList}
              </Slider>
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
                            teamName: "",
                            teamTitle: "",
                            teamHeadshot: "",
                            teamBio: "",
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
                              teamName: "",
                              teamTitle: "",
                              teamHeadshot: "",
                              teamBio: "",
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
