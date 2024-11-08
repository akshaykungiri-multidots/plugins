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

import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
	RichText,
	PanelColorSettings,
} from '@wordpress/block-editor';

import { PanelBody, Button } from '@wordpress/components';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param  root0
 * @param  root0.attributes
 * @param  root0.setAttributes
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const {
		title,
		description,
		backgroundImage,
		titleFontColor,
		descriptionFontColor,
	} = attributes;
	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Background Settings', 'md-prime')}>
					<div className="setting-row">
						<label htmlFor="background-image">
							{__('Background Image', 'md-prime')}
						</label>
						<div>
							{!backgroundImage ? (
								<MediaUpload
									onSelect={(selectedImage) => {
										setAttributes({
											backgroundImage: selectedImage.url,
										});
									}}
									allowedTypes={['image']}
									value={backgroundImage}
									render={({ open }) => (
										<Button
											onClick={open}
											className="button button-large"
										>
											{__('Upload Image', 'md-prime')}
										</Button>
									)}
								/>
							) : (
								<>
									<div className="image-preview">
										<img
											src={backgroundImage}
											alt="Background-image-preview"
										/>
									</div>
									<Button
										onClick={() => {
											setAttributes({
												backgroundImage: '',
											});
										}}
										className="is-link is-destructive"
									>
										{__('Remove Image', 'md-prime')}
									</Button>
								</>
							)}
						</div>
					</div>
				</PanelBody>
				<PanelBody
					title={__('Color Settings', 'md-storyful-fse-full')}
					initialOpen={false}
				>
					<PanelColorSettings
						title={__('Typography Colors', 'md-storyful-fse-full')}
						initialOpen={false}
						colorSettings={[
							{
								value: titleFontColor,
								onChange: (newColor) =>
									setAttributes({ titleFontColor: newColor }),
								label: __('Title Font Color'),
							},
							{
								value: descriptionFontColor,
								onChange: (newColor) =>
									setAttributes({
										descriptionFontColor: newColor,
									}),
								label: __('Description Font Color'),
							},
						]}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps({ className: 'md_two_column' })}>
				<div
					className="storyful-two-column"
					style={{ backgroundImage: `url(${backgroundImage})` }}
				>
					<div className="container">
						<div className="two-columns__title">
							<RichText
								tagName="h2"
								value={title}
								onChange={(value) => setAttributes({ title: value })}
								placeholder={__(
									'Enter Title',
									'md-storyful-fse-full'
								)}
								style={{ color: titleFontColor }}
							/>
						</div>
						<div className="two-columns__description wow fadeInRight">
							<RichText
								tagName="p"
								value={description}
								onChange={(value) =>
									setAttributes({ description: value })
								}
								placeholder={__(
									'Enter Description',
									'md-storyful-fse-full'
								)}
								style={{
									color: descriptionFontColor,
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
