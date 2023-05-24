const presets = [
    [
        '@babel/preset-env',
        {
            modules: false
        }
    ]
];
const plugins = [
    [
        '@babel/plugin-transform-runtime',
        {
            corejs: {
                version: 3,
                proposals: true
            }
        }
    ]
];
module.exports = {targets: 'ie 8', plugins, presets};
