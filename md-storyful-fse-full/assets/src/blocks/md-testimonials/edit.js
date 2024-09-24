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
import { PanelBody, TextControl, SelectControl } from '@wordpress/components';

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
export default function Edit({ attributes: { heading, themeStyle }, setAttributes, className }) {
	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Block Settings', 'md-storyful-fse-full')}>
					<TextControl
						label={__( 'Heading', 'md-storyful-fse-full' )}
						placeholder={__('Enter Heading', 'md-storyful-fse-full')}
						value={heading}
						onChange={(value) => setAttributes({ heading: value })}
					/>
					<SelectControl
						label={__('Case Studies Style', 'md-storyful-fse-full')}
						value={themeStyle}
						options={[
							{ label: __('Style 1', 'md-storyful-fse-full'), value: 'style1' },
							{ label: __('Style 2', 'md-storyful-fse-full'), value: 'style2' },
						]}
						onChange={(value) => setAttributes({ themeStyle: value })}
						__nextHasNoMarginBottom
					/>
				</PanelBody>
			</InspectorControls>
			<ServerSideRender
				block={metadata.name}
				className={className}
				attributes={{
					heading,
					themeStyle
				}}
			/>
		</>
	);
}
