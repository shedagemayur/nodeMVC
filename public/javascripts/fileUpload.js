const rootStyle = window.getComputedStyle(document.documentElement);

if(rootStyle.getPropertyValue('--book-cover-width-large') != null && rootStyle.getPropertyValue('--book-cover-width-large') != '') {
    ready();
} else {
    document.getElementById('main-css').addEventListener('load', ready);
}

function ready() {
    const coverWidth = parseFloat(rootStyle.getPropertyValue('--book-cover-width-large'));
    const aspectRatio = parseFloat(rootStyle.getPropertyValue('--book-cover-aspect-ratio'));
    const coverHeight = parseFloat(coverWidth / aspectRatio);

    FilePond.registerPlugin(
        FilePondPluginImagePreview,
        FilePondPluginImageResize,
        FilePondPluginFileEncode
    );

    FilePond.setOptions({
        stylePanelAspectRatio: 1 / aspectRatio,
        imageResizeTargetWidth: coverWidth,
        imageResizeTargetHeight: coverHeight
    });
    FilePond.parse(document.body);
}