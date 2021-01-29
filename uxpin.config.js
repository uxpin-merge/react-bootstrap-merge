module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/stories/Button.stories.js',
        ]
      },
    ],
    wrapper: 'src/Wrapper/UXPinWrapper.js',
    webpackConfig: 'uxpin.webpack.config.js',
  },
  name: 'Bootstrap'
};
