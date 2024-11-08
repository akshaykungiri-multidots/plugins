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
	useBlockProps,
	InspectorControls,
	PanelColorSettings,
} from '@wordpress/block-editor';

/**
 * React hook that is used to mark the components element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/
 */
import {
	PanelBody,
	SelectControl,
	ToggleControl,
	RangeControl,
} from '@wordpress/components';

import { useState, useEffect } from 'react';

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
		enableSearch,
		enableFilter,
		numberOfPostsPerRow,
		numberOfRows,
		postType,
		enableNewsLetter,
		displayNewsLetterAfterRow,
		enableMostPopular,
		displayMostPopularAboveOrBelow,
		postTitleColor,
		postDateColor,
		mostPopularTitleColor,
		mostPopularDescriptionColor,
	} = attributes;

	const builtInPostType = [
		'page',
		'attachment',
		'nav_menu_item',
		'wp_block',
		'wp_template',
		'wp_template_part',
		'wp_navigation',
		'wp_font_family',
		'wp_font_face',
		'wp_global_styles',
	];

	const [postTypes, setPostTypes] = useState([]);

	useEffect(() => {
		// Fetch the posttypes not post list and set it as options
		wp.apiFetch({ path: '/wp/v2/types' }).then((response) => {
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
	}, []);

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody title={__('Block Settings', 'md-storyful-fse-full')}>
					{/* Display in selectcontrol */}
					<SelectControl
						label={__('Post Type', 'md-storyful-fse-full')}
						value={postType}
						options={postTypes}
						onChange={(value) => setAttributes({ postType: value })}
					/>
					<RangeControl
						label={__(
							'Number of Posts Per Row',
							'md-storyful-fse-full'
						)}
						value={numberOfPostsPerRow}
						onChange={(value) =>
							setAttributes({ numberOfPostsPerRow: value })
						}
						min={1}
						max={4}
					/>
					<RangeControl
						label={__('Number of Rows', 'md-storyful-fse-full')}
						value={numberOfRows}
						onChange={(value) =>
							setAttributes({ numberOfRows: value })
						}
						min={1}
						max={4}
					/>
				</PanelBody>
				<PanelBody
					title={__('Toggle Settings', 'md-storyful-fse-full')}
					initialOpen={false}
				>
					<ToggleControl
						label={__('Enable Search', 'md-storyful-fse-full')}
						checked={enableSearch}
						onChange={(value) =>
							setAttributes({ enableSearch: value })
						}
					/>
					{/* Display in togglecontrol */}
					<ToggleControl
						label={__('Enable Filter', 'md-storyful-fse-full')}
						checked={enableFilter}
						onChange={(value) =>
							setAttributes({ enableFilter: value })
						}
					/>
					{/* Display in togglecontrol */}
					<ToggleControl
						label={__('Enable News Letter', 'md-storyful-fse-full')}
						checked={enableNewsLetter}
						onChange={(value) =>
							setAttributes({ enableNewsLetter: value })
						}
					/>
					{/* Display in selectcontrol */}
					{enableNewsLetter && (
						<RangeControl
							label={__(
								'Display News Letter After Row',
								'md-storyful-fse-full'
							)}
							value={displayNewsLetterAfterRow}
							onChange={(value) =>
								setAttributes({ displayNewsLetterAfterRow: value })
							}
							min={1}
							max={4}
						/>
					)}
					{/* Display in togglecontrol */}
					<ToggleControl
						label={__(
							'Enable Most Popular',
							'md-storyful-fse-full'
						)}
						checked={enableMostPopular}
						onChange={(value) =>
							setAttributes({ enableMostPopular: value })
						}
					/>
					{/* Display in selectcontrol */}
					{enableMostPopular && (
						<RangeControl
							label={__(
								'Display Most Popular Above Or Below',
								'md-storyful-fse-full'
							)}
							value={displayMostPopularAboveOrBelow}
							onChange={(value) =>
								setAttributes({
									displayMostPopularAboveOrBelow: value,
								})
							}
							min={1}
							max={4}
						/>
					)}
				</PanelBody>
				<PanelBody
					title={__('Color Settings', 'md-storyful-fse-full')}
					initialOpen={false}
				>
					<PanelColorSettings
						title={__('Color Settings', 'md-storyful-fse-full')}
						initialOpen={false}
						colorSettings={[
							{
								value: postTitleColor,
								onChange: (value) =>
									setAttributes({ postTitleColor: value }),
								label: __('Post Title Color'),
							},
							{
								value: postDateColor,
								onChange: (value) =>
									setAttributes({ postDateColor: value }),
								label: __('Post Date Color'),
							},
							{
								value: mostPopularTitleColor,
								onChange: (value) =>
									setAttributes({
										mostPopularTitleColor: value,
									}),
								label: __('Most Popular Title Color'),
							},
							{
								value: mostPopularDescriptionColor,
								onChange: (value) =>
									setAttributes({
										mostPopularDescriptionColor: value,
									}),
								label: __('Most Popular Description Color'),
							},
						]}
					/>
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
					displayMostPopularAboveOrBelow,
					postTitleColor,
					postDateColor,
					mostPopularTitleColor,
					mostPopularDescriptionColor,
				}}
			/>
		</div>
	);
}
