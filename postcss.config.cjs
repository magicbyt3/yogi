const postCssPurge = require('@fullhuman/postcss-purgecss');
const { yogiExtract, yogiSafelist } = require('./yogi.postcss.cjs');

module.exports = {
    plugins: [
        postCssPurge({
            content: ['./**/*.html'],
            defaultExtractor(content) {
                yogiExtract(content);
                return content;
            },
            safelist: yogiSafelist
        }),
    ],
};