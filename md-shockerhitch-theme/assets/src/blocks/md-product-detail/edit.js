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
import { PanelBody, PanelRow, ToggleControl } from '@wordpress/components';

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

	const toggleDescription = () => setAttributes({ showDescription: !attributes.showDescription });
	const toggleAdditionalInfo = () => setAttributes({ showAdditionalInfo: !attributes.showAdditionalInfo });
	const toggleReviews = () => setAttributes({ showReviews: !attributes.showReviews });

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Settings', 'woocommerce-accordion-block')}>
					<PanelRow>
						<ToggleControl
							label={__('Show Description', 'woocommerce-accordion-block')}
							checked={attributes.showDescription}
							onChange={toggleDescription}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__('Show Additional Information', 'woocommerce-accordion-block')}
							checked={attributes.showAdditionalInfo}
							onChange={toggleAdditionalInfo}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__('Show Reviews', 'woocommerce-accordion-block')}
							checked={attributes.showReviews}
							onChange={toggleReviews}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<ServerSideRender
				block={metadata.name}
				className={className}
				attributes={{
					showDescription: attributes.showDescription,
					showAdditionalInfo: attributes.showAdditionalInfo,
					showReviews: attributes.showReviews
				}}
			/>
		</>
	);
}
