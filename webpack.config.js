const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = () => {
    return {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist/umd'),
            filename: "main.js",
            library: 'JsLibSkeleton',
            libraryTarget: 'umd',
        },
        externals: [nodeExternals()],
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.jsx?$/i,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.js', '.jsx'],
        },
    };
};
