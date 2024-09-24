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
  } from "@wordpress/block-editor";

import { PanelBody, TextControl, Button, SelectControl } from "@wordpress/components";

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
		section_left_title,
		section_left_description,
		section_left_button_link,
		section_left_image,
		section_right_title,
		section_right_description,
		section_right_button_link,
		section_right_image
	} = attributes;

	return (
		<div {...useBlockProps({className: "md_two_column_banner",})}>
			<div className="cta-section">
				<div className="container-fluid">
					<div className="cta-section__right">
						<div className="intelligence-section">
							<div className="intelligence-section__details wow fadeInLeft">
								<RichText
									tagName="h2"
									className="section-title h1 with-darkbg"
									value={section_left_title}
									onChange={(value) => setAttributes({ section_left_title: value })}
									placeholder={__('Enter title...', 'md-blocks')}
								/>
								<RichText
									tagName="p"
									className="cta-section-desc"
									value={section_left_description}
									onChange={(value) => setAttributes({ section_left_description: value })}
									placeholder={__('Enter description...', 'md-blocks')}
								/>
								<div className="sbtn sbtn-arrow-primary-v2">
									<span className="btn-text">
										<RichText
											tagName="a"
											value={section_left_button_link}
											onChange={(value) => setAttributes({ section_left_button_link: value })}
											placeholder={__('Enter button text...', 'md-blocks')}
										/>
									</span>
								</div>
							</div>
							<div class="intelligence-section__media wow bounceIn">
								<div class="media-image-wrapper">
									<figure id="img-two">
										<MediaUpload
											title={__("Feature Image")}
											onSelect={(media) =>
												setAttributes({ section_left_image: media.url })
											}
											multiple={false}
											render={({ open }) => (
												<>
												{section_left_image == "" ? (
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
																setAttributes({ section_left_image: "" })
															}
															className="dashicons dashicons-no-alt remove-image"
														></i>
														</div>
														<img src={section_left_image} />
													</div>
												)}
												</>
											)}
										/>
									</figure>
								</div>
							</div>
						</div>
					</div>
					<div className="cta-section__left">
						<div className="cta-news-section">
							<div className="cta-news-section__details wow fadeInLeft">
								<RichText
									tagName="h2"
									className="section-title h1"
									value={section_right_title}
									onChange={(value) => setAttributes({ section_right_title: value })}
									placeholder={__('Enter title...', 'md-blocks')}
								/>
								<RichText
									tagName="p"
									className="cta-section-desc"
									value={section_right_description}
									onChange={(value) => setAttributes({ section_right_description: value })}
									placeholder={__('Enter description...', 'md-blocks')}
								/>
								<div className="sbtn sbtn-arrow-primary-v2">
									<span className="btn-text">
										<RichText
											tagName="a"
											value={section_right_button_link}
											onChange={(value) => setAttributes({ section_right_button_link: value })}
											placeholder={__('Enter button text...', 'md-blocks')}
										/>
									</span>
								</div>
							</div>
							<div class="cta-news-section__media wow bounceIn">
								<div class="media-image-wrapper">
									<figure id="img-one">
										<MediaUpload
											title={__("Feature Image")}
											onSelect={(media) =>
												setAttributes({ section_right_image: media.url })
											}
											multiple={false}
											render={({ open }) => (
												<>
												{section_right_image == "" ? (
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
																setAttributes({ section_right_image: "" })
															}
															className="dashicons dashicons-no-alt remove-image"
														></i>
														</div>
														<img src={section_right_image} />
													</div>
												)}
												</>
											)}
										/>
									</figure>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
