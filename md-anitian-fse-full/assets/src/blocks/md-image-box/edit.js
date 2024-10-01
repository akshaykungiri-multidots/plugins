/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {
  useBlockProps,
  RichText,
  InspectorControls,
  MediaUpload,
  
} from "@wordpress/block-editor";

import { PanelBody, Button, ToggleControl } from "@wordpress/components";

import { useState } from "@wordpress/element";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
  const { sub_heading, heading, image_boxes, enable_slider } = attributes;

  const [currentSlide, setCurrentSlide] = useState(0);

  const addStaticPostObj = () => {
    const staticPostObj = [
      ...image_boxes,
      {
        id: image_boxes.length + 1,
        slider_content: "",
        slider_button: "",
        slider_image: "",
      },
    ];
    setAttributes({ image_boxes: staticPostObj });
  };
  const updateStaticPostObj = (index, key, value) => {
    const updatedStaticPostObj = [...image_boxes];
    updatedStaticPostObj[index][key] = value;
    setAttributes({ image_boxes: updatedStaticPostObj });
  };
  const removeStaticPostObj = (index) => {
    const updatedStaticPostObj = [...image_boxes];
    updatedStaticPostObj.splice(index, 1);
    setAttributes({ image_boxes: updatedStaticPostObj });
    setCurrentSlide(-1);
  };

  return (
    <div {...useBlockProps({ className: "md_anitian_image_boxes_section" })}>
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-anitian-fse-full")}>
          <ToggleControl
            label={__("Enable Slider", "md-anitian-fse-full")}
            checked={enable_slider}
            onChange={(value) => setAttributes({ enable_slider: value })}
          />
        </PanelBody>
      </InspectorControls>
      <div className="bakery_antian__slider-image-box">
        <div className="bakery_antian__slider-image-box__inner">
          <div className="text-video-slider__video-and-text">
            <div className="container">
              <div className="bakery_antian__heading">
                <RichText
                  tagName="h6"
                  value={sub_heading}
                  onChange={(value) => setAttributes({ sub_heading: value })}
                  placeholder={__("Enter Sub Heading", "md-anitian-fse-full")}
                />
                <RichText
                  tagName="h2"
                  value={heading}
                  onChange={(value) => setAttributes({ heading: value })}
                  placeholder={__("Enter Heading", "md-anitian-fse-full")}
                />
              </div>
            </div>
          </div>
          <div className="text-video-slider__slider">
            <div className="container">
              <div className="bakery_antian__slider md-slick-slider">
                {image_boxes &&
                  image_boxes.map((postObj, index) => (
                    <div className="bakery_antian__slider-item show-items-hover-wrap">
                      <div className="item-action-wrap show-items-hover small-icons">
                        <div className="move-item">
                          <span
                            onClick={() => setCurrentSlide(index)}
                            className="move-down dashicons dashicons-admin-generic"
                          ></span>
                        </div>
                        <i
                          onClick={() => removeStaticPostObj(index)}
                          className="remove-item dashicons dashicons-no-alt"
                        ></i>
                      </div>
                      <div className="bakery_antian__slider-image">
                        <MediaUpload
                          title={__("Image")}
                          onSelect={(media) =>
                            updateStaticPostObj(index, "slider_image", media.url)
                          }
                          multiple={false}
                          render={({ open }) => (
                            <>
                              {postObj.slider_image == "" ? (
                                <Button variant="primary" onClick={open}>
                                  {__("Upload")}
                                </Button>
                              ) : (
                                <img onClick={open} src={postObj.slider_image} />
                              )}
                            </>
                          )}
                        />
                      </div>
                      <div className="bakery_antiab__slider-content">
                        <RichText
                          tagName="p"
                          value={postObj.slider_content}
                          onChange={(value) =>
                            updateStaticPostObj(index, "slider_content", value)
                          }
                          placeholder={__("Enter Content")}
                        />
                        <div class="bakery_antian__slider-button btn-anitian">
                        <RichText
                          tagName="a"
                          className="btn"
                          value={postObj.slider_button}
                          onChange={(value) =>
                            updateStaticPostObj(index, "slider_button", value)
                          }
                          placeholder={__("Enter Button Text")}
                        />
                        </div>
                      </div>
                    </div>
                  ))}
                <div className="add-item-wrap">
                  <Button variant="primary" onClick={addStaticPostObj}>
                    {__("Add New Slide")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
