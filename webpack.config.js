const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        path: __dirname +  '/assets',
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                enforce: "pre",
                test: /\.js$/,
                options: {
                    configFile: __dirname + '/.eslintrc.js',
                },
                loader: "eslint-loader",
            },
        ]
    }
};