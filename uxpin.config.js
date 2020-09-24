module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/Button/Button.js',
        ]
      },
      {
        name: 'Forms',
        include: [
          'src/Form/Form.js',
          'src/FormGroup/FormGroup.js',
          'src/FormLabel/FormLabel.js',
          'src/FormControl/FormControl.js',

        ]
      }
    ],
    wrapper: 'src/Wrapper/UXPinWrapper.js',
    webpackConfig: 'uxpin.webpack.config.js',
  },
  name: 'Bootstrap'
};
