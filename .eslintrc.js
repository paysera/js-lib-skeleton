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
            files: ['*.test.js', '*.test.jsx'],
            env: {
                jest: true,
            },
            'extends': [
                'plugin:jest/recommended',
                'plugin:jest/style',
                'plugin:jest-dom/recommended',
                'plugin:testing-library/recommended',
            ],
        },
    ]
};
