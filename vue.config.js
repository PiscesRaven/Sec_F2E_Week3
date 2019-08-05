module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@as': '@/assets',
        '@c': '@/components',
        '@v': '@/views',
        '@img': '@/assets/img',
        '@css': '@/assets/scss',
        '@api': '@/api',
      }
    }
  },
  chainWebpack: config => {
    config.module.rule('pug')
      .test(/\.pug$/)
      .use('pug-html-loader')
      .loader('pug-html-loader')
      .end()
  },
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       data: ` @import "@css/mixin.scss"; @import "@css/main.scss";`
  //     }
  //   }
  // }
}