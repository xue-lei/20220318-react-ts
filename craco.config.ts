const path = require('path')
const webpack = require('webpack')
export default {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    configure: (webpackConfig: any, p: any) => {
      // 修改build的生成文件名称
      p.paths.appBuild = 'dist';
      webpackConfig.output = {
        ...webpackConfig.output,
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
      }
      return webpackConfig;
    }
  },
  devServer: {
    open: false
  },
  typescript: {
    enableTypeChecking: true /* (default value) */,
  }
}
