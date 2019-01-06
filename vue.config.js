module.exports = {
    baseUrl: '',
    chainWebpack(config) {
        config
            .output.chunkFilename('[name].bundle.js').end()
            .optimization.splitChunks({
                cacheGroups: {
                    vendorStyles: {
                        name: 'vendor',
                        test(module) {
                            return (
                                /node_modules/.test(module.context)
                                // do not externalize if the request is a CSS file
                                && !/\.css$/.test(module.request)
                            );
                        },
                        chunks: 'all',
                        enforce: true,
                    },
                },
            });
    },
};
