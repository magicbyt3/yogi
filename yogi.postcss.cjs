const { selectors } = require('./yogi.config.cjs');
const yogiSafelist = [];

const yogiExtract = (content) => {
    selectors.map((selector) => {
        const regex = new RegExp(`\\b${selector}\\b`, 'g');
        const matches = content.match(regex);
        if (matches && matches[0] && !yogiSafelist.includes(selector)) {
            yogiSafelist.push(matches[0]);
        }
    });
}

module.exports = {
    yogiExtract,
    yogiSafelist
};
