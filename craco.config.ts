const path = require('path')
const webpack = require('webpack')
export default {
    webpack: {
        configure:(webpackConfig:any, p:any) => {
            // 修改build的生成文件名称
            p.paths.appBuild = 'dist';
            webpackConfig.output ={
              ...webpackConfig.output,
              path:path.resolve(__dirname,'dist'),
              publicPath:'/'
            }
            return webpackConfig;
          },
    },
    babel:{
      plugins: [
        [
          'import',
          {
            libraryName: 'react-vant',
            libraryDirectory: 'es',
            style: false,
          },
        ],
      ],
    }
}