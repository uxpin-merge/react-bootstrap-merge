# React Bootstrap + UXPin Merge

This is a starter design system based on [react-bootstrap](https://github.com/react-bootstrap) that shows how to push Bootstrap components to UXPin Merge. Currently it contains just a handful of react-bootstrap components.

## About UXPin Merge

[Merge](https://uxpin.com/merge) is a revolutionary technology that lets users import (and keep in sync) coded React.js components from GIT repositories to UXPin editor. The imported components are 100% identical to components used by developers during the development process. It means that components are going to look and, function (interactions, data) identical to the real product experienced by the users.

## Using this project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). `react-bootstrap` and `@uxpin/merge-cli` are added as dependencies. To add this design system to UXPin:

1. [Follow our instructions](https://www.uxpin.com/docs/merge/ci-servers) to create a new design system within the UXPin app using the "import React components" option. Copy the Auth token.

2. Run the following command from your terminal to push this to UXPin within your terminal:

```
git clone git@github.com:uxpin-merge/react-bootstrap-merge.git
cd react-bootstrap-merge
npm install
uxpin-merge push --token [YOUR UXPIN AUTH TOKEN]
```

3. Refresh your UXPin Editor browser tab. The design system components should be available.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## Package Notes

* sass-loader version: https://stackoverflow.com/questions/58546521/node-sass-and-sass-loader-module-build-failed-typeerror-this-getresolve-is-n. css-loader appears to have the same issue w/webpack v4+.
