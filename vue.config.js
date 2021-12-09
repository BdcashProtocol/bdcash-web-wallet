module.exports = {
  pages: {
    popup: {
      template: 'public/browser-extension.html',
      entry: './src/popup/main.js',
      title: 'BDCash web Wallet'
    },
    standalone: {
      template: 'public/browser-extension.html',
      entry: './src/standalone/main.js',
      title: 'BDCash web Wallet',
      filename: 'index.html'
    }
  },
  pluginOptions: {
    browserExtension: {
      componentOptions: {
        background: {
          entry: 'src/background.js'
        }
      }
    }
  }
}
