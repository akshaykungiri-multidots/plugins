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
import { useBlockProps, RichText, MediaUpload } from '@wordpress/block-editor';

import { InspectorControls } from '@wordpress/block-editor';

import { PanelBody, Button, SelectControl, GradientPicker } from '@wordpress/components';

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
		newswire_left_title,
		newswire_left_description,
		newswire_right_image,
		newswire_title,
		newswire_description,
		newswire_sub_title,
		newswire_button_link,
		newswire_theme_style,
		background_color
	} = attributes;


	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Block Settings', 'md-storyful-fse-full')}>
					<SelectControl
						label={__('Theme Style', 'md-storyful-fse-full')}
						value={newswire_theme_style}
						options={[
							{ label: __('Style 1', 'md-storyful-fse-full'), value: 'style1' },
							{ label: __('Style 2', 'md-storyful-fse-full'), value: 'style2' },
						]}
						onChange={(value) => setAttributes({ newswire_theme_style: value })}
						__nextHasNoMarginBottom
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
				</PanelBody>
			</InspectorControls>
			<div { ...useBlockProps({className: "md_newswire"}) }>
				<div class={`newswire-by-storyful ${newswire_theme_style}`} style={{ background: background_color }}>
					<div class="container">
						<div class="newswire-by-storyful-top">
							<div class="newswire-by-storyful-top__left fadeInLeft">
								<RichText
									tagName="div"
									value={newswire_left_title}
									className="section-title h1"
									onChange={(value) => setAttributes({ newswire_left_title: value })}
									placeholder={__('Enter Title', 'md-storyful-fse-full')}
								/>
								<RichText
									tagName="h2"
									value={newswire_left_description}
									onChange={(value) => setAttributes({ newswire_left_description: value })}
									placeholder={__('Enter Description', 'md-storyful-fse-full')}
								/>
								<RichText
									tagName="h3"
									value={newswire_sub_title}
									className="newswire-sub-title"
									onChange={(value) => setAttributes({ newswire_sub_title: value })}
									placeholder={__('Enter Sub Title', 'md-storyful-fse-full')}
								/>
							</div>
							<div class="newswire-by-storyful-top__right wow fadeInRight">
								<div class="side-graphics">
								<MediaUpload
									title={__("Feature Image")}
									onSelect={(media) =>
										setAttributes({ newswire_right_image: media.url })
									}
									multiple={false}
									render={({ open }) => (
										<>
										{ newswire_right_image == "" ? (
											<Button onClick={open} variant="primary">
												{__("Upload")}
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
														setAttributes({ newswire_right_image: "" })
													}
													className="dashicons dashicons-no-alt remove-image"
												></i>
												</div>
												<img src={newswire_right_image} />
											</div>
										)}
										</>
									)}
								/>
								</div>
							</div>
						</div>
						{ newswire_theme_style == 'style1' && (
						<div class="newswire-by-storyful-buttom">
							<div class="newswire-by-storyful-buttom__grid">
								<div class="newswire-by-storyful-items single-col">
									<div class="newswire-by-storyful-items__item wow fadeInUp">
										<RichText
											tagName="h3"
											value={newswire_title}
											className="newswire-sub-title"
											onChange={(value) => setAttributes({ newswire_title: value })}
											placeholder={__('Enter Title', 'md-storyful-fse-full')}
										/>
										<RichText 
											tagName="p"
											value={newswire_description}
											className="newswire-description"
											onChange={(value) => setAttributes({ newswire_description: value })}
											placeholder={__('Enter Description', 'md-storyful-fse-full')}
										/>
									</div>
								</div>
							</div>
							<div class="newswire-by-storyful-buttom__contact wow bounceIn">
								<div class="circle-button">
									<div class="circle-text">
										<RichText
											tagName="a"
											value={newswire_button_link}
											className="btn btn-primary"
											onChange={(value) => setAttributes({ newswire_button_link: value })}
											placeholder={__('Enter Button Text', 'md-storyful-fse-full')}
										/>
									</div>
								</div>
							</div>
						</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
