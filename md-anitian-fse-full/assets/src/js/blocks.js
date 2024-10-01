wp.domReady(() => {
    wp.blocks.registerBlockStyle('core/list-item', {
        name: 'check-icon-list',
        label: 'Check Icons',
        isDefault: false,
    });

    wp.blocks.registerBlockStyle('core/list-item', {
        name: 'close-icon-list',
        label: 'Close Icons',
        isDefault: false,
    });
});