const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = [
    // Client
    {
        mode: 'development',
        entry: './src/client/index.js',
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist/scripts')
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    include: [
                        path.resolve(__dirname, 'src/client'),
                        path.resolve(__dirname, 'src/shared')
                    ],
                    use: 'babel-loader',
                    exclude: /node-modules/
                }
            ]
        },
        resolve: {
            extensions: ['.js'],
            alias: {
                "jinaga": "jinaga/dist/jinaga"
            }
        }
    },
    // Server
    {
        mode: 'development',
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
                    use: 'babel-loader',
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