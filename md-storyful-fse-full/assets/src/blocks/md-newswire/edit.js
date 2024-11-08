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
	RichText,
	MediaUpload,
	PanelColorSettings,
} from '@wordpress/block-editor';

import { InspectorControls } from '@wordpress/block-editor';

import {
	PanelBody,
	Button,
	SelectControl,
	GradientPicker,
	ToggleControl,
} from '@wordpress/components';

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
		newswireLeftTitle,
		newswireLeftDescription,
		newswireRightImage,
		newswireTitle,
		newswireDescription,
		newswireSubTitle,
		newswireButtonLink,
		newswireThemeStyle,
		backgroundColor,
		newswireTitleFontColor,
		newswireDescriptionFontColor,
		newswireButtonFontColor,
		newswireLeftTitleFontColor,
		newswireLeftDescriptionFontColor,
		newswireSubTitleFontColor,
		showNewswireButton,
		showNewswireBottom,
		showNewswireLeftDescription,
	} = attributes;

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody title={__('Block Settings', 'md-storyful-fse-full')}>
					<SelectControl
						label={__('Block Style', 'md-storyful-fse-full')}
						value={newswireThemeStyle}
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
							setAttributes({ newswireThemeStyle: value })
						}
						__nextHasNoMarginBottom
					/>
				</PanelBody>
				<PanelBody
					title={__('Toggle Settings', 'md-storyful-fse-full')}
					initialOpen={false}
				>
					<ToggleControl
						label={__(
							'Show Newswire Bottom',
							'md-storyful-fse-full'
						)}
						checked={showNewswireBottom}
						onChange={(value) =>
							setAttributes({ showNewswireBottom: value })
						}
					/>
					{showNewswireBottom && (
						<div className="md-newswire-bottom">
							<ToggleControl
								label={__(
									'Show Newswire Button',
									'md-storyful-fse-full'
								)}
								checked={showNewswireButton}
								onChange={(value) =>
									setAttributes({ showNewswireButton: value })
								}
							/>
							<ToggleControl
								label={__(
									'Show Newswire Left Description',
									'md-storyful-fse-full'
								)}
								checked={showNewswireLeftDescription}
								onChange={(value) =>
									setAttributes({
										showNewswireLeftDescription: value,
									})
								}
							/>
						</div>
					)}
				</PanelBody>
				<PanelBody
					title={__('Background Settings', 'md-storyful-fse-full')}
					initialOpen={false}
				>
					<label htmlFor="background-color-picker">
						{__('Background Color', 'md-storyful-fse-full')}
					</label>
					<GradientPicker
						id="background-color-picker"
						value={null}
						onChange={(value) =>
							setAttributes({ backgroundColor: value })
						}
						gradients={[
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
						]}
					/>
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
								value: newswireTitleFontColor,
								onChange: (newColor) =>
									setAttributes({
										newswireTitleFontColor: newColor,
									}),
								label: __('Newswire Title Font Color'),
							},
							{
								value: newswireDescriptionFontColor,
								onChange: (newColor) =>
									setAttributes({
										newswireDescriptionFontColor:
											newColor,
									}),
								label: __('Newswire Description Font Color'),
							},
							{
								value: newswireButtonFontColor,
								onChange: (newColor) =>
									setAttributes({
										newswireButtonFontColor: newColor,
									}),
								label: __('Newswire Button Font Color'),
							},
							{
								value: newswireLeftTitleFontColor,
								onChange: (newColor) =>
									setAttributes({
										newswireLeftTitleFontColor:
											newColor,
									}),
								label: __('Newswire Left Title Font Color'),
							},
							{
								value: newswireLeftDescriptionFontColor,
								onChange: (newColor) =>
									setAttributes({
										newswireLeftDescriptionFontColor:
											newColor,
									}),
								label: __(
									'Newswire Left Description Font Color'
								),
							},
							{
								value: newswireSubTitleFontColor,
								onChange: (newColor) =>
									setAttributes({
										newswireSubTitleFontColor: newColor,
									}),
								label: __('Newswire Sub Title Font Color'),
							},
						]}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps({ className: 'md_newswire' })}>
				<div
					className={`newswire-by-storyful ${newswireThemeStyle}`}
					style={{ background: backgroundColor }}
				>
					<div className="container">
						<div className="newswire-by-storyful-top">
							<div className="newswire-by-storyful-top__left fadeInLeft">
								<RichText
									tagName="div"
									value={newswireLeftTitle}
									className="section-title h1"
									style={{
										color: newswireLeftTitleFontColor,
									}}
									onChange={(value) =>
										setAttributes({
											newswireLeftTitle: value,
										})
									}
									placeholder={__(
										'Enter Title',
										'md-storyful-fse-full'
									)}
								/>
								<RichText
									tagName="h2"
									value={newswireLeftDescription}
									style={{
										color: newswireLeftDescriptionFontColor,
									}}
									onChange={(value) =>
										setAttributes({
											newswireLeftDescription: value,
										})
									}
									placeholder={__(
										'Enter Description',
										'md-storyful-fse-full'
									)}
								/>
								<RichText
									tagName="h3"
									value={newswireSubTitle}
									className="newswire-sub-title"
									onChange={(value) =>
										setAttributes({
											newswireSubTitle: value,
										})
									}
									placeholder={__(
										'Enter Sub Title',
										'md-storyful-fse-full'
									)}
									style={{
										color: newswireSubTitleFontColor,
									}}
								/>
							</div>
							<div className="newswire-by-storyful-top__right wow fadeInRight">
								<div className="side-graphics">
									<MediaUpload
										title={__('Feature Image')}
										onSelect={(media) =>
											setAttributes({
												newswireRightImage: media.url,
											})
										}
										multiple={false}
										render={({ open }) => (
											<>
												{newswireRightImage == '' ? (
													<Button
														onClick={open}
														variant="primary"
													>
														{__('Upload')}
													</Button>
												) : (
													<div className="md-prime-image image-preview image-controle-visible-hover">
														<div className="item-action-wrap image-controls small-icons icon-center-fixed">
															<i
																onClick={open}
																className="dashicons dashicons-edit edit-image"
															></i>
															<i
																onClick={() =>
																	setAttributes(
																		{
																			newswireRightImage:
																				'',
																		}
																	)
																}
																className="dashicons dashicons-no-alt remove-image"
															></i>
														</div>
														<img
															src={
																newswireRightImage
															}
														/>
													</div>
												)}
											</>
										)}
									/>
								</div>
							</div>
						</div>
						{showNewswireBottom && (
							<div className="newswire-by-storyful-buttom">
								<div className="newswire-by-storyful-buttom__grid">
									<div className="newswire-by-storyful-items single-col">
										<div className="newswire-by-storyful-items__item wow fadeInUp">
											<RichText
												tagName="h3"
												value={newswireTitle}
												className="newswire-sub-title"
												onChange={(value) =>
													setAttributes({
														newswireTitle: value,
													})
												}
												placeholder={__(
													'Enter Left Title',
													'md-storyful-fse-full'
												)}
												style={{
													color: newswireTitleFontColor,
												}}
											/>
											{showNewswireLeftDescription && (
												<RichText
													tagName="p"
													value={newswireDescription}
													className="newswire-description"
													onChange={(value) =>
														setAttributes({
															newswireDescription:
																value,
														})
													}
													placeholder={__(
														'Enter Left Description',
														'md-storyful-fse-full'
													)}
													style={{
														color: newswireDescriptionFontColor,
													}}
												/>
											)}
										</div>
									</div>
								</div>
								{showNewswireButton && (
									<div className="newswire-by-storyful-buttom__contact wow bounceIn">
										<div className="circle-button">
											<div className="circle-text">
												<RichText
													tagName="a"
													value={newswireButtonLink}
													className="btn btn-primary"
													onChange={(value) =>
														setAttributes({
															newswireButtonLink:
																value,
														})
													}
													placeholder={__(
														'Enter Button Text',
														'md-storyful-fse-full'
													)}
													style={{
														color: newswireButtonFontColor,
													}}
												/>
											</div>
										</div>
									</div>
								)}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
