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
import { PanelBody, TextControl, SelectControl, GradientPicker } from '@wordpress/components';

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
	const { section_title, number_of_case_studies, case_studies_ids, background_color, case_studies_style } = attributes;
	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Block Settings', 'md-storyful-fse-full')}>
					<TextControl
						label={__( 'Heading', 'md-storyful-fse-full' )}
						placeholder={__('Enter Heading', 'md-storyful-fse-full')}
						value={section_title}
						onChange={(value) => setAttributes({ section_title: value })}
					/>
					<SelectControl
						label={__('Number of Case Studies', 'md-storyful-fse-full')}
						value={number_of_case_studies}
						options={[
							{ label: __('1', 'md-storyful-fse-full'), value: '1' },
							{ label: __('2', 'md-storyful-fse-full'), value: '2' },
							{ label: __('3', 'md-storyful-fse-full'), value: '3' },
							{ label: __('4', 'md-storyful-fse-full'), value: '4' },
						]}
						onChange={(value) => setAttributes({ number_of_case_studies: value })}
						__nextHasNoMarginBottom
					/>
					<TextControl
						label={__( 'Case Studies IDs', 'md-storyful-fse-full' )}
						placeholder={__('Enter Case Studies IDs', 'md-storyful-fse-full')}
						value={case_studies_ids}
						onChange={(value) => setAttributes({ case_studies_ids: value })}
					/>
					<GradientPicker
						value={null}
						onChange={(value) => setAttributes({ background_color: value })}
						gradients={ [
							{
								name: 'gradient1',
								gradient:
									'linear-gradient(298.12deg, #11152c 14.52%, #145980 105.31%)',
								slug: 'gradient1',
							},
							{
								name: 'Moonlit Asteroid',
								gradient:
									'linear-gradient(135deg,#0F2027 0%, #203A43 0%, #2c5364 100%)',
								slug: 'moonlit-asteroid',
							},
							{
								name: 'Rastafarie',
								gradient:
									'linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)',
								slug: 'rastafari',
							},
						] }
					/>
					<SelectControl
						label={__('Case Studies Style', 'md-storyful-fse-full')}
						value={case_studies_style}
						options={[
							{ label: __('Style 1', 'md-storyful-fse-full'), value: 'style_1' },
							{ label: __('Style 2', 'md-storyful-fse-full'), value: 'style_2' },
						]}
						onChange={(value) => setAttributes({ case_studies_style: value })}
						__nextHasNoMarginBottom
					/>
				</PanelBody>
			</InspectorControls>
			<ServerSideRender
				block={metadata.name}
				className={className}
				attributes={{
					section_title,
					number_of_case_studies,
					case_studies_ids,
					background_color
				}}
			/>
		</>
	);
}
