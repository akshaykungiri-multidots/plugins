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
import { useBlockProps, InspectorControls, MediaUpload, RichText } from '@wordpress/block-editor';

import {
	PanelBody,
	Button,
  } from "@wordpress/components";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

import { useState } from "@wordpress/element";

export default function Edit({ attributes, setAttributes }) {
	const {
		columnList
	} = attributes;

	const [currentSlide, setCurrentSlide] = useState(0);

	const addStaticPostObj = () => {
		const staticPostObj = [
		  ...columnList,
		  {
			id: columnList.length + 1,
			title: "",
          	description: ""
		  },
		];
		setAttributes({ columnList: staticPostObj });
	  };
	  const updateStaticPostObj = (index, key, value) => {
		const updatedStaticPostObj = [...columnList];
		updatedStaticPostObj[index][key] = value;
		setAttributes({ columnList: updatedStaticPostObj });
	  };
	  const removeStaticPostObj = (index) => {
		const updatedStaticPostObj = [...columnList];
		updatedStaticPostObj.splice(index, 1);
		setAttributes({ columnList: updatedStaticPostObj });
		setCurrentSlide(-1);
	  };

	  return (
		<div
		  {...useBlockProps({
			className: "md-counter_block",
		  })}
		>
			<div class="storyful-stat-number">
				<div class="container">
					<div class="stats-block-bottom">
						{columnList &&
						columnList.map((postObj, index) => (
							<div class="stats-block-bottom__item fadeInUp" key={index}>
								<div className="item-action-wrap show-items-hover small-icons">
									<div className="move-item">
									{/* <span className="dashicons dashicons-arrow-right-alt move-down"></span> */}
									<span onClick={() => setCurrentSlide(index)} className="move-down dashicons dashicons-admin-generic"></span>
									</div>
									<i onClick={() => removeStaticPostObj(index)} className="remove-item dashicons dashicons-no-alt"></i>
								</div>
								<RichText
									tagName="h3"
									value={postObj.title}
									onChange={(value) =>
									updateStaticPostObj(index, "title", value)
									}
									placeholder={__("Enter Title")}
								/>
								<RichText
									tagName="p"
									className='column-item-desc'
									value={postObj.description}
									onChange={(value) =>
									updateStaticPostObj(index, "description", value)
									}
									placeholder={__("Enter Description")}
								/>
							</div>
						))}
						<div className="add-item-wrap">
							<Button variant="primary" onClick={addStaticPostObj}>
							{__("Add New Slide")}
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	  );
}
