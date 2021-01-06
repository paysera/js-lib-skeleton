module.exports = {
    env: {
        browser: true,
    },
    parser: 'babel-eslint',
    'extends': [
        '@paysera'
    ],
    overrides: [
        {
            files: ["*.test.js", "*.test.jsx"],
            env: {
                jest: true
            },
        },
    ]
};
