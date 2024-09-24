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
import { PanelBody, SelectControl, ToggleControl } from '@wordpress/components';

import { useState, useEffect } from 'react';

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
		enableSearch,
		enableFilter,
		numberOfPostsPerRow,
		numberOfRows,
		postType,
		enableNewsLetter,
		displayNewsLetterAfterRow,
		enableMostPopular,
		displayMostPopularAboveOrBelow
	} = attributes;

	const builtInPostType = [
		"page",
		"attachment",
		"nav_menu_item",
		"wp_block",
		"wp_template",
		"wp_template_part",
		"wp_navigation",
		"wp_font_family",
		"wp_font_face",
		"wp_global_styles"
	];

	const [postTypes, setPostTypes] = useState([]);

	useEffect(() => {
		// Fetch the posttypes not post list and set it as options
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
	});

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Block Settings', 'md-storyful-fse-full')}>
					{/* Display in selectcontrol */}
					<SelectControl
						label={__('Post Type', 'md-storyful-fse-full')}
						value={postType}
						options={postTypes}
						onChange={(postType) => setAttributes({ postType })}
					/>
					{/* Display in selectcontrol */}
					<SelectControl
						label={__('Number of Posts Per Row', 'md-storyful-fse-full')}
						value={numberOfPostsPerRow}
						options={[
							{ label: '1', value: 1 },
							{ label: '2', value: 2 },
							{ label: '3', value: 3 },
							{ label: '4', value: 4 },
						]}
						onChange={(numberOfPostsPerRow) => setAttributes({ numberOfPostsPerRow })}
					/>
					{/* Display in selectcontrol */}
					<SelectControl
						label={__('Number of Rows', 'md-storyful-fse-full')}
						value={numberOfRows}
						options={[
							{ label: '1', value: 1 },
							{ label: '2', value: 2 },
							{ label: '3', value: 3 },
							{ label: '4', value: 4 },
						]}
						onChange={(numberOfRows) => setAttributes({ numberOfRows })}
					/>
					{/* Display in togglecontrol */}
					<ToggleControl
						label={__('Enable Search', 'md-storyful-fse-full')}
						checked={enableSearch}
						onChange={(enableSearch) => setAttributes({ enableSearch })}
					/>
					{/* Display in togglecontrol */}
					<ToggleControl
						label={__('Enable Filter', 'md-storyful-fse-full')}
						checked={enableFilter}
						onChange={(enableFilter) => setAttributes({ enableFilter })}
					/>
					{/* Display in togglecontrol */}
					<ToggleControl
						label={__('Enable News Letter', 'md-storyful-fse-full')}
						checked={enableNewsLetter}
						onChange={(enableNewsLetter) => setAttributes({ enableNewsLetter })}
					/>
					{/* Display in selectcontrol */}
					{ enableNewsLetter && (
						<SelectControl
							label={__('Display News Letter After Row', 'md-storyful-fse-full')}
							value={displayNewsLetterAfterRow}
							options={[
								{ label: '1', value: 1 },
								{ label: '2', value: 2 },
								{ label: '3', value: 3 },
								{ label: '4', value: 4 },
							]}
							onChange={(displayNewsLetterAfterRow) => setAttributes({ displayNewsLetterAfterRow })}
						/>
					)}
					{/* Display in togglecontrol */}
					<ToggleControl
						label={__('Enable Most Popular', 'md-storyful-fse-full')}
						checked={enableMostPopular}
						onChange={(enableMostPopular) => setAttributes({ enableMostPopular })}
					/>
					{/* Display in selectcontrol */}
					{ enableMostPopular && (
						<SelectControl
							label={__('Display Most Popular Above Or Below', 'md-storyful-fse-full')}
							value={displayMostPopularAboveOrBelow}
							options={[
								{ label: 'Above', value: 'above' },
								{ label: 'Below', value: 'below' },
							]}
							onChange={(displayMostPopularAboveOrBelow) => setAttributes({ displayMostPopularAboveOrBelow })}
						/>
					)}
				</PanelBody>
			</InspectorControls>
			<ServerSideRender
				block={metadata.name}
				className={className}
				attributes={{
					enableSearch,
					enableFilter,
					numberOfPostsPerRow,
					numberOfRows,
					postType,
					enableNewsLetter,
					displayNewsLetterAfterRow,
					enableMostPopular,
					displayMostPopularAboveOrBelow
				}}
			/>
		</>
	);
}
