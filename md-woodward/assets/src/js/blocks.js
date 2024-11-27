wp.domReady(() => {
  wp.blocks.registerBlockStyle("core/heading", {
    name: "md-has-underline",
    label: "Has Underline",
    isDefault: false,
  });
  wp.blocks.registerBlockStyle("core/navigation", {
    name: "md-has-line",
    label: "Has Line",
    isDefault: false,
  });
});
import { __ } from "@wordpress/i18n";
import { addFilter } from "@wordpress/hooks";
import { InspectorControls } from "@wordpress/block-editor";
import { SelectControl, PanelBody } from "@wordpress/components";
import { useSelect } from "@wordpress/data";

// Add a custom attribute for storing the selected post ID.
const addPostSelectionAttribute = (settings, name) => {
  if (name !== "core/navigation-link") {
    return settings;
  }

  // Extend the attributes with a custom `selectedPost` attribute.
  settings.attributes = {
    ...settings.attributes,
    selectedPost: {
      type: "number",
      default: 0,
    },
  };

  return settings;
};
addFilter(
  "blocks.registerBlockType",
  "custom/navigation-link-add-post-selection",
  addPostSelectionAttribute
);

// Add a post selection control to the block's Inspector Controls.
const addPostSelectionControl = (BlockEdit) => (props) => {
  if (props.name !== "core/navigation-link") {
    return <BlockEdit {...props} />;
  }

  const { attributes, setAttributes } = props;
  const { selectedPost } = attributes;

  // Fetch posts for the dropdown.
  const posts = useSelect((select) => {
    return (
      select("core").getEntityRecords("postType", 'md-menu-block', {
        per_page: -1,
        _fields: "id,title",
      }) || []
    );
  }, []);

  const postOptions = [
    { value: 0, label: __("Select a Post", "md-woodward") },
    ...posts.map((post) => ({
      value: post.id,
      label: post.title.rendered,
    })),
  ];

  return (
    <>
      <BlockEdit {...props} />
      <InspectorControls>
        <PanelBody
          title={__("Post Selection", "md-woodward")}
          initialOpen={true}
        >
          <SelectControl
            label={__("Select a Post", "md-woodward")}
            value={selectedPost}
            options={postOptions}
            onChange={(newValue) => {
              const selectedPostId = parseInt(newValue, 10);
              setAttributes({ selectedPost: selectedPostId });

              // Automatically set the href attribute based on the selected post.
              const selectedPostData = posts.find(
                (post) => post.id === selectedPostId
              );
              if (selectedPostData) {
                setAttributes({
                  url: `${window.location.origin}/?p=${selectedPostId}`,
                });
              } else {
                setAttributes({ url: "" });
              }
            }}
          />
        </PanelBody>
      </InspectorControls>
    </>
  );
};
addFilter(
  "editor.BlockEdit",
  "custom/navigation-link-add-post-selection-control",
  addPostSelectionControl
);
