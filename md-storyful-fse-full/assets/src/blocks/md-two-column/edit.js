/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */

import { useBlockProps, InspectorControls, MediaUpload, RichText } from '@wordpress/block-editor';

import { PanelBody, TextControl, Button } from '@wordpress/components';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { title, description, background_image } = attributes;
	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Block Settings', 'md-storyful-fse-full')}>
					<label>{__("Background Image")}</label>
					<MediaUpload
						title={__("Background Image")}
						onSelect={(media) =>
							setAttributes({
								background_image: media.url,
							})
						}
						multiple={false}
						render={({ open }) => (
							<>
							<Button className="md_bg_image_upload" onClick={open}>
								{ background_image == "" ? (
								<i className="dashicons dashicons-format-image">
									{" "}
								</i>
								) : (
								<img src={ background_image } alt="background" />
								)}
							</Button>
							</>
						)}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps({className: "md_two_column"})}>
				<div className="storyful-two-column" style={{backgroundImage: `url(${background_image})`}}>
					<div class="container">
						<div class="two-columns__title">
							<RichText
								tagName="h2"
								value={title}
								onChange={(title) => setAttributes({ title })}
								placeholder={__("Enter Title", "md-storyful-fse-full")}
							/>
						</div>
						<div class="two-columns__description wow fadeInRight">
							<RichText
								tagName="p"
								value={description}
								onChange={(description) => setAttributes({ description })}
								placeholder={__("Enter Description", "md-storyful-fse-full")}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
