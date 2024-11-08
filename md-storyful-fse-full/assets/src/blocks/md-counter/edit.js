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
	RichText,
	PanelColorSettings,
} from '@wordpress/block-editor';

import {
	PanelBody,
	Button,
	RangeControl,
	Tooltip,
} from '@wordpress/components';

import { leftAlign, centerAlign, rightAlign } from '../icons';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

export default function Edit({ attributes, setAttributes }) {
	const {
		columnList,
		columnTitleFontColor,
		columnDescriptionFontColor,
		borderColor,
		backgroundColor,
		columns,
		textAlign,
	} = attributes;

	const addStaticPostObj = () => {
		const staticPostObj = [
			...columnList,
			{
				id: columnList.length + 1,
				title: '',
				description: '',
			},
		];
		setAttributes({ columnList: staticPostObj });
	};
	const updateStaticPostObj = (index, key, value) => {
		const updatedStaticPostObj = [...columnList];
		updatedStaticPostObj[index][key] = value;
		setAttributes({ columnList: updatedStaticPostObj });
	};

	const moveItem = (oldIndex, newIndex) => {
		const arrayCopy = [...columnList];
		arrayCopy[oldIndex] = columnList[newIndex];
		arrayCopy[newIndex] = columnList[oldIndex];

		setAttributes({
			columnList: arrayCopy,
		});
	};

	return (
		<div
			{...useBlockProps({
				className: 'md-counter_block',
			})}
		>
			<InspectorControls>
				<PanelBody
					title={__('Settings', 'md-prime')}
					initialOpen={true}
				>
					<RangeControl
						label={__('Columns', 'md-prime')}
						value={columns}
						onChange={(value) => setAttributes({ columns: value })}
						min={2}
						max={4}
					/>
					<div className="setting-row inspector-field inspector-field-alignment">
						<label htmlFor="alignment" className="inspector-mb-0">
							Alignment
						</label>
						<div className="inspector-field-button-list inspector-field-button-list-fluid">
							<button
								className={
									'left' === textAlign
										? 'active inspector-button'
										: ' inspector-button'
								}
								onClick={() =>
									setAttributes({ textAlign: 'left' })
								}
							>
								{leftAlign}
							</button>
							<button
								className={
									'center' === textAlign
										? 'active inspector-button'
										: ' inspector-button'
								}
								onClick={() =>
									setAttributes({ textAlign: 'center' })
								}
							>
								{centerAlign}
							</button>
							<button
								className={
									'right' === textAlign
										? 'active inspector-button'
										: ' inspector-button'
								}
								onClick={() =>
									setAttributes({ textAlign: 'right' })
								}
							>
								{rightAlign}
							</button>
						</div>
					</div>
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
								value: backgroundColor,
								onChange: (newColor) =>
									setAttributes({
										backgroundColor: newColor,
									}),
								label: __('Background Color'),
							},
							{
								value: borderColor,
								onChange: (newColor) =>
									setAttributes({ borderColor: newColor }),
								label: __('Border Color'),
							},
							{
								value: columnTitleFontColor,
								onChange: (newColor) =>
									setAttributes({
										columnTitleFontColor: newColor,
									}),
								label: __('Column Title Font Color'),
							},
							{
								value: columnDescriptionFontColor,
								onChange: (newColor) =>
									setAttributes({
										columnDescriptionFontColor: newColor,
									}),
								label: __('Column Description Font Color'),
							},
						]}
					/>
				</PanelBody>
			</InspectorControls>
			<div className="storyful-stat-number">
				<div className="container">
					<div
						className="stats-block-bottom"
						style={{
							borderColor,
							backgroundColor,
							gridTemplateColumns: `repeat(${columns}, 1fr)`,
						}}
					>
						{columnList &&
							columnList.map((postObj, index) => (
								<div
									className="stats-block-bottom__item fadeInUp show-items-hover-wrap"
									key={index}
								>
									<div className="item-action-wrap show-items-hover pos-abs">
										<div className="move-item">
											{0 < index && (
												<Tooltip
													text={__(
														'Move Left',
														'md-prime'
													)}
												>
													<span
														className="dashicons dashicons-arrow-left-alt move-left"
														onClick={() =>
															moveItem(
																index,
																index - 1
															)
														}
														onKeyDown={(event) => {
															if (
																event.key ===
																	'Enter' ||
																event.key ===
																	' '
															) {
																moveItem(
																	index,
																	index - 1
																);
															}
														}}
														role="button"
														tabIndex={0}
														aria-label="Move item left"
													></span>
												</Tooltip>
											)}
											{index + 1 < columnList.length && (
												<Tooltip
													text={__(
														'Move Right',
														'md-prime'
													)}
												>
													<span
														className="dashicons dashicons-arrow-right-alt move-right"
														onClick={() =>
															moveItem(
																index,
																index + 1
															)
														}
														tabIndex={0}
														onKeyDown={(e) => {
															if (
																e.key ===
																	'Enter' ||
																e.key === ' '
															) {
																moveItem(
																	index,
																	index + 1
																);
															}
														}}
														role="button"
														aria-label="Move item right"
													></span>
												</Tooltip>
											)}
										</div>
										{1 < columnList.length && (
											<Tooltip
												text={__(
													'Remove Item',
													'md-prime'
												)}
											>
												<i
													className="remove-item dashicons dashicons-no-alt"
													onClick={() => {
														const toDelete =
															// eslint-disable-next-line no-alert
															confirm(
																__(
																	'Are you sure you want to delete this item?',
																	'md-prime'
																)
															);
														if (toDelete) {
															const updatedArray =
																columnList.filter(
																	(
																		item,
																		itemIndex
																	) =>
																		itemIndex !==
																		index
																);
															setAttributes({
																columnList:
																	updatedArray,
															});
														}
													}}
													tabIndex={0}
													onKeyDown={(e) => {
														if (
															e.key === 'Enter' ||
															e.key === ' '
														) {
															const toDelete =
																// eslint-disable-next-line no-alert
																confirm(
																	__(
																		'Are you sure you want to delete this item?',
																		'md-prime'
																	)
																);
															if (toDelete) {
																const updatedArray =
																	columnList.filter(
																		(
																			item,
																			itemIndex
																		) =>
																			itemIndex !==
																			index
																	);
																setAttributes({
																	columnList:
																		updatedArray,
																});
															}
														}
													}}
													role="button"
													aria-label="Remove item"
												></i>
											</Tooltip>
										)}
									</div>
									<RichText
										tagName="h3"
										value={postObj.title}
										style={{
											color: columnTitleFontColor,
											textAlign,
										}}
										onChange={(value) =>
											updateStaticPostObj(
												index,
												'title',
												value
											)
										}
										placeholder={__('0+')}
									/>
									<RichText
										tagName="p"
										style={{
											color: columnDescriptionFontColor,
											textAlign,
										}}
										className="column-item-desc"
										value={postObj.description}
										onChange={(value) =>
											updateStaticPostObj(
												index,
												'description',
												value
											)
										}
										placeholder={__('Enter Description')}
									/>
								</div>
							))}
						<div className="add-item-wrap">
							<Button
								variant="primary"
								onClick={addStaticPostObj}
							>
								{__('Add New Column')}
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
