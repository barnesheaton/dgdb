module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalDecorators: true,
        experimentalImportSupport: false,
        inlineRequires: false
      }
    })
  },
  resolver: {
    sourceExts: ['jsx', 'js', 'json', 'ts', 'tsx']
  }
}
