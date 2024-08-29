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
import { PanelBody, SelectControl } from '@wordpress/components';

import { useState } from '@wordpress/element';

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
	const { postType, postsToShow } = attributes;

	const builtInPostType = [
		"page",
		"attachment",
		"nav_menu_item",
		"wp_block",
		"wp_template",
		"wp_template_part",
		"wp_navigation",
		"wp_font_family",
		"wp_font_face"
	];

	const [postTypes, setPostTypes] = useState([]);

	const fetchPostTypes = () => {
		wp.apiFetch({ path: "/wp/v2/types" }).then((response) => {
		  const fetchedPostTypes = Object.keys(response)
			.filter(function (key) {
			  if (!builtInPostType.includes(response[key].slug)) {
				return key;
			  }
			})
			.map((key) => ({
			  value: key,
			  label: response[key].name,
			  rest_base: response[key].rest_base,
			}));
		  setPostTypes(fetchedPostTypes);
		});
	};

	fetchPostTypes();

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Block Settings', 'md-sutherlandglobal')}>
					<SelectControl
						label="Post Type"
						value={postType}
						options={postTypes}
						onChange={(value) => setAttributes({ postType: value })}
					/>
					<SelectControl
						label="Posts to Show"
						value={postsToShow}
						options={[
							{ label: '5', value: "5" },
							{ label: '10', value : "10" },
							{ label: '15', value : "15" },
							{ label: '20', value : "20" },
							{ label: '50', value : "50" }
						]}
						onChange={(value) => setAttributes({ postsToShow: value })}
					/>
				</PanelBody>
			</InspectorControls>
			<ServerSideRender
				block={metadata.name}
				className={className}
				attributes={{
					postType,
					postsToShow
				}}
			/>
		</>
	);
}
