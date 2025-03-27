
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
	mode: "development",
    entry: path.resolve(__dirname, "src/index.ts"),
    // entry: path.resolve('./index.js'),
    output: {
        path: path.resolve(__dirname ,"dist"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.ts(x)?$/,
                use: 'ts-loader',
                exclude:/node_modules/,
            }
        ]
    }, 
    resolve: {
        extensions:['.ts' , '.tsx' , '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname , 'dist'),
    } ,
    plugins:[
        new HtmlWebpackPlugin({
            template: 'src/assets/index.html',
            scriptLoading: 'blocking', // или 'defer', в зависимости от ваших нужд
            inject: false, // отключаем автоматическую вставку скриптов
        })
    ]
};