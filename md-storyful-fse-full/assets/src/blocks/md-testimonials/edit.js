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
import {
	InspectorControls,
	useBlockProps,
	PanelColorSettings,
} from '@wordpress/block-editor';

/**
 * React hook that is used to mark the components element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/
 */
import {
	PanelBody,
	TextControl,
	SelectControl,
	ToggleControl,
} from '@wordpress/components';

import metadata from './block.json';
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param  root0
 * @param  root0.attributes
 * @param  root0.attributes.heading
 * @param  root0.setAttributes
 * @param  root0.className
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes, className }) {
	const {
		heading,
		themeStyle,
		headingFontColor,
		testimonialTitleFontColor,
		testimonialDescriptionFontColor,
		showHeading,
		showTestimonialTitle,
		showTestimonialDescription,
		showTestimonialImage,
	} = attributes;
	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody title={__('Block Settings', 'md-storyful-fse-full')}>
					<SelectControl
						label={__('Case Studies Style', 'md-storyful-fse-full')}
						value={themeStyle}
						options={[
							{
								label: __('Style 1', 'md-storyful-fse-full'),
								value: 'style1',
							},
							{
								label: __('Style 2', 'md-storyful-fse-full'),
								value: 'style2',
							},
						]}
						onChange={(value) =>
							setAttributes({ themeStyle: value })
						}
						__nextHasNoMarginBottom
					/>
				</PanelBody>
				<PanelBody
					title={__('Toggle Settings', 'md-storyful-fse-full')}
					initialOpen={false}
				>
					<ToggleControl
						label={__('Show Heading', 'md-storyful-fse-full')}
						checked={showHeading}
						onChange={(value) =>
							setAttributes({ showHeading: value })
						}
					/>
					{showHeading && (
						<TextControl
							label={__('Heading', 'md-storyful-fse-full')}
							value={heading}
							onChange={(value) =>
								setAttributes({ heading: value })
							}
						/>
					)}
					<ToggleControl
						label={__(
							'Show Testimonial Title',
							'md-storyful-fse-full'
						)}
						checked={showTestimonialTitle}
						onChange={(value) =>
							setAttributes({ showTestimonialTitle: value })
						}
					/>
					<ToggleControl
						label={__(
							'Show Testimonial Description',
							'md-storyful-fse-full'
						)}
						checked={showTestimonialDescription}
						onChange={(value) =>
							setAttributes({ showTestimonialDescription: value })
						}
					/>
					<ToggleControl
						label={__(
							'Show Testimonial Image',
							'md-storyful-fse-full'
						)}
						checked={showTestimonialImage}
						onChange={(value) =>
							setAttributes({ showTestimonialImage: value })
						}
					/>
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
								value: headingFontColor,
								onChange: (value) =>
									setAttributes({ headingFontColor: value }),
								label: __('Heading Font Color'),
							},
							{
								value: testimonialTitleFontColor,
								onChange: (value) =>
									setAttributes({
										testimonialTitleFontColor: value,
									}),
								label: __('Testimonial Title Font Color'),
							},
							{
								value: testimonialDescriptionFontColor,
								onChange: (value) =>
									setAttributes({
										testimonialDescriptionFontColor: value,
									}),
								label: __('Testimonial Description Font Color'),
							},
						]}
					/>
				</PanelBody>
			</InspectorControls>
			<ServerSideRender
				block={metadata.name}
				className={className}
				attributes={{
					heading,
					themeStyle,
					headingFontColor,
					testimonialTitleFontColor,
					testimonialDescriptionFontColor,
					showHeading,
					showTestimonialTitle,
					showTestimonialDescription,
					showTestimonialImage,
				}}
			/>
		</div>
	);
}
