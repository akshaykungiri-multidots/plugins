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
  useBlockProps,
  InspectorControls,
  PanelColorSettings,
  MediaUpload,
  URLInputButton,
} from "@wordpress/block-editor";

/**
 * React hook that is used to mark the components element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/
 */
import {
  PanelBody,
  TextControl,
  Button,
  FontSizePicker,
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
    our_story_title,
    our_story_video_image,
    our_story_video_link,
    our_story_title_font_size,
    our_story_title_font_color,
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
  return (
    <div {...useBlockProps()}>
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-storyful-fse-full")}>
          <TextControl
            label={__("Our Story Title", "md-storyful-fse-full")}
            value={our_story_title}
            onChange={(our_story_title) => setAttributes({ our_story_title })}
          />
          <div>
            <label>{__("Background Image")}</label>
            <MediaUpload
              title={__("Background Image")}
              onSelect={(media) =>
                setAttributes({
                  our_story_video_image: media.url,
                })
              }
              multiple={false}
              render={({ open }) => (
                <>
                  <Button className="md_bg_image_upload" onClick={open}>
                    {our_story_video_image == "" ? (
                      <i className="dashicons dashicons-format-image"> </i>
                    ) : (
                      <img src={our_story_video_image} alt="background" />
                    )}
                  </Button>
                </>
              )}
            />
          </div>
          <div>
            <label>{__("Video Link")}</label>
            <URLInputButton
              url={our_story_video_link}
              onChange={(our_story_video_link) =>
                setAttributes({ our_story_video_link })
              }
            />
          </div>
        </PanelBody>
        <PanelBody title={__("Typography", "md-storyful-fse-full")}>
          <label> {__("Our Story Title Font Size")} </label>
          <FontSizePicker
            __nextHasNoMarginBottom
            fontSizes={fontSizes}
            value={our_story_title_font_size}
            fallbackFontSize={our_story_title_font_size}
            onChange={(newFontSize) =>
              setAttributes({ our_story_title_font_size: newFontSize })
            }
          />
        </PanelBody>
        <PanelColorSettings
          title={__("Typography Colors", "md-storyful-fse-full")}
          initialOpen={false}
          colorSettings={[
            {
              value: our_story_title_font_color,
              onChange: (newColor) =>
                setAttributes({ our_story_title_font_color: newColor }),
              label: __("Our Story Title Font Color"),
            },
          ]}
        />
      </InspectorControls>
      <ServerSideRender
        block={metadata.name}
        className={className}
        attributes={{
          our_story_title,
          our_story_video_image,
          our_story_video_link,
		  our_story_title_font_size,
		  our_story_title_font_color,
        }}
      />
    </div>
  );
}
