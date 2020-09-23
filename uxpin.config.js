module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/Button/Button.js',
        ]
      }
    ],
    wrapper: 'src/Wrapper/UXPinWrapper.js',
    webpackConfig: 'uxpin.webpack.config.js',
  },
  name: 'Bootstrap'
};
