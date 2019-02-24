const path = require('path');
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
    // Client - index
    {
        mode: 'production',
        entry: './src/client/index.js',
        output: {
            filename: 'scripts/index-[hash].js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/'
        },
        plugins: [
          new HtmlWebpackPlugin({
              template: 'views/index.html',
              filename: 'views/index.html'
          })
        ],
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    include: [
                        path.resolve(__dirname, 'src/client'),
                        path.resolve(__dirname, 'src/shared')
                    ],
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: [ '@babel/preset-env', '@babel/preset-react' ]
                            }
                        }
                    ],
                    exclude: /node-modules/
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx'],
            alias: {
                "jinaga": "jinaga/dist/jinaga"
            }
        }
    },
    // Client - login
    {
        mode: 'production',
        entry: './src/client/login.js',
        output: {
            filename: 'scripts/login-[hash].js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/'
        },
        plugins: [
          new HtmlWebpackPlugin({
              template: 'views/login.html',
              filename: 'views/login.html'
          })
        ],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    include: [
                        path.resolve(__dirname, 'src/client')
                    ],
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: [ '@babel/preset-env' ]
                            }
                        }
                    ],
                    exclude: /node-modules/
                }
            ]
        }
    },
    // Server
    {
        mode: 'production',
        entry: './src/server/server.js',
        output: {
            filename: 'server.js',
            path: path.resolve(__dirname, 'dist')
        },
        target: 'node',
        node: {
            __dirname: false,
            __filename: false
        },
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    include: [
                        path.resolve(__dirname, 'src/server'),
                        path.resolve(__dirname, 'src/shared')
                    ],
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: [ '@babel/preset-env' ]
                            }
                        }
                    ],
                    exclude: /node-modules/
                }
            ]
        },
        resolve: {
            extensions: ['.js']
        },
        externals: [nodeExternals()]
    }
];