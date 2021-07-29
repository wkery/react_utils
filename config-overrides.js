const { override, fixBabelImports, addWebpackAlias, addLessLoader } = require('customize-cra');
const path = require('path');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'true',
    }),
    addLessLoader({
        lessOptions: {
            // modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
        },
    }),
    addWebpackAlias({
        src: path.resolve(__dirname, 'src'),
        components: path.resolve(__dirname, 'src/components'),
        pages: path.resolve(__dirname, 'src/pages'),
        api: path.resolve(__dirname, 'src/api'),
        utils: path.resolve(__dirname, 'src/utils'),
    })
);