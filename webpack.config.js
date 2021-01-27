const autoprefixer = require('autoprefixer');
var path = require('path')

module.exports = [{
    mode: 'production',
    entry: ['./src/app.scss', './src/app.js'],
    output: {
        path: path.join(__dirname, '/src/dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: 'bundle.css',
                },
            },
            {loader: 'extract-loader'},
            {loader: 'css-loader'},
            {
                loader: 'postcss-loader',
                options: {
                    postcssOptions: {
                        plugins: [
                            autoprefixer()
                        ]
                    }
                }
            },
            {
                loader: 'sass-loader',
                options: {
                    implementation: require('sass'),
                    sassOptions: {
                        includePaths: ['./node_modules'],
                    },
                    webpackImporter: false,
                },
            },]
        },
        {
            test: /\.js$/,
	        exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
            },
        }]
    },
}]