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
  InspectorControls,
  MediaUpload,
} from "@wordpress/block-editor";

import { Fragment } from "@wordpress/element";

import {
  PanelBody,
  Button,
  ToggleControl,
  SelectControl,
  TextControl,
  Tooltip,
} from "@wordpress/components";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
  const {
    mediaurl,
    youtubeurl,
    videotype,
    showPlayButton,
    playButtonImage,
    showPlayIconTitle,
    playIconTitle,
  } = attributes;

  return (
    <div {...useBlockProps({ className: "md-video-block" })}>
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-anitian-fse-v2")}>
          <ToggleControl
            label={__("Show Play Button", "md-anitian-fse-v2")}
            checked={showPlayButton}
            onChange={(value) => setAttributes({ showPlayButton: value })}
          />
          {showPlayButton && (
            <div className="setting-row">
              <label htmlFor="play-button-image">
                {__("Play Button Image", "md-prime")}
              </label>
              <div>
                {!playButtonImage ? (
                  <MediaUpload
                    onSelect={(selectedImage) => {
                      setAttributes({
                        playButtonImage: selectedImage.url,
                      });
                    }}
                    allowedTypes={["image"]}
                    value={playButtonImage}
                    render={({ open }) => (
                      <Button onClick={open} className="button button-large">
                        {__("Upload Image", "md-prime")}
                      </Button>
                    )}
                  />
                ) : (
                  <Fragment>
                    <div className="image-preview">
                      <img src={playButtonImage} alt="Play-button-image-preview" />
                    </div>
                    <Button
                      onClick={() => {
                        setAttributes({
                          playButtonImage: "",
                        });
                      }}
                      className="is-link is-destructive"
                    >
                      {__("Remove Image", "md-prime")}
                    </Button>
                  </Fragment>
                )}
              </div>
            </div>
          )}
          <ToggleControl
            label={__("Show Play Icon Title", "md-anitian-fse-v2")}
            checked={showPlayIconTitle}
            onChange={(value) => setAttributes({ showPlayIconTitle: value })}
          />
          {showPlayIconTitle && (
            <TextControl
              label={__("Play Icon Title", "md-anitian-fse-v2")}
              value={playIconTitle}
              onChange={(value) => setAttributes({ playIconTitle: value })}
              placeholder={__("Play Icon Title", "md-anitian-fse-v2")}
            />
          )}
        </PanelBody>
      </InspectorControls>
      <div className="md_anitian_text_video__youtube">
        <div className="text_video__youtube">
          <div className="video_section_wrapper" id="MdYTplayer">
            <div className="wrapper__box-inner">
              <div
                className="video-details-wrapper"
                style={{ textAlign: "center" }}
              >
                <div className="video-data-edit">
                  <SelectControl
                    label={__("Select Video Type", "storyful")}
                    value={videotype}
                    options={[
                      {
                        label: "Media Upload Video",
                        value: "media-upload",
                      },
                      {
                        label: "Youtube Video",
                        value: "youtube",
                      },
                    ]}
                    onChange={(value) => {
                      setAttributes({ videotype: value });
                    }}
                  />
                  {videotype === "youtube" && (
                    <>
                      <TextControl
                        placeholder="Enter youtube video URL"
                        value={youtubeurl}
                        className="video-item-url"
                        onChange={(value) => {
                          setAttributes({ youtubeurl: value });
                        }}
                      />
                      {youtubeurl && (
                        <iframe
                          src={
                            youtubeurl.replace("watch?v=", "embed/") +
                            "?controls=0"
                          }
                          data-src={
                            youtubeurl + "?enablejsapi=1&controls=0&rel=0"
                          }
                          title="video"
                        ></iframe>
                      )}
                    </>
                  )}
                </div>

                {videotype === "media-upload" && mediaurl && (
                  <div className="image-preview image-controle-visible-hover">
                    <video autoPlay="" muted="" loop="" className="self-media">
                      <source src={mediaurl} type="video/mp4" />
                    </video>

                    <div className="item-action-wrap image-controls small-icons icon-center-fixed">
                      <Tooltip text={__("Remove Video")}>
                        <i
                          className="dashicons dashicons-no-alt remove-image"
                          role="button"
                          tabIndex={0}
                          onClick={() => {
                            setAttributes({ mediaurl: "" });
                          }}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              setAttributes({ mediaurl: "" });
                            }
                          }}
                          aria-label="Remove image"
                        ></i>
                      </Tooltip>
                    </div>
                  </div>
                )}
                {videotype === "media-upload" && !mediaurl && (
                  <>
                    <MediaUpload
                      onSelect={(newmedia) => {
                        setAttributes({ mediaurl: newmedia.url });
                      }}
                      allowedTypes={["video"]}
                      value={mediaurl}
                      render={({ open }) => (
                        <Button
                          onClick={open}
                          className="components-button button button-large"
                        >
                          <i className="upload"></i> Upload video
                        </Button>
                      )}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
