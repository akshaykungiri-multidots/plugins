/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the server side render element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-server-side-render/
 */
import ServerSideRender from '@wordpress/server-side-render';

/**
 * React hook that is used to mark the block wrapper element.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/
 */
import { InspectorControls } from '@wordpress/block-editor';

/**
 * React hook that is used to mark the components element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/
 */
import { PanelBody, TextControl, Button } from '@wordpress/components';

import { MediaUpload, URLInputButton } from '@wordpress/block-editor';

import metadata from './block.json';
import './editor.scss';

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
		our_story_video_link
	} = attributes;
	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Block Settings', 'md-storyful-fse-full')}>
					<TextControl
						label={__('Our Story Title', 'md-storyful-fse-full')}
						value={our_story_title}
						onChange={(our_story_title) => setAttributes({ our_story_title })}
					/>
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
								{ our_story_video_image == "" ? (
								<i className="dashicons dashicons-format-image">
									{" "}
								</i>
								) : (
								<img src={ our_story_video_image } alt="background" />
								)}
							</Button>
							</>
						)}
					/>
					<label>{__("Video Link")}</label>
					<URLInputButton
						url={our_story_video_link}
						onChange={(our_story_video_link) => setAttributes({ our_story_video_link })}
					/>
				</PanelBody>
				
			</InspectorControls>
			<ServerSideRender
				block={metadata.name}
				className={className}
				attributes={{
					our_story_title,
					our_story_video_image,
					our_story_video_link
				}}
			/>
		</>
	);
}
