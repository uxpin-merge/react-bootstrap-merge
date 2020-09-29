# React Bootstrap + UXPin Merge

This is a starter design system based on [react-bootstrap](https://github.com/react-bootstrap) that shows how to push Bootstrap components to UXPin Merge. Currently it contains just a handful of react-bootstrap components.

## About UXPin Merge

[Merge](https://uxpin.com/merge) is a revolutionary technology that lets users import (and keep in sync) coded React.js components from GIT repositories to UXPin editor. The imported components are 100% identical to components used by developers during the development process. It means that components are going to look and, function (interactions, data) identical to the real product experienced by the users.

## Dependencies

* git
* NodeJS

## Quickstart

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). `react-bootstrap` and `@uxpin/merge-cli` are added as dependencies. To add this design system to UXPin:

1. Go to your UXPin account and enter the UXPin Editor.
2. Click on the "Design Systems" library icon in the bottom left corner and create a new library.
3. Select the "import React components" option.
4. Copy the Auth token to your clipboard.
5. Open a terminal. Run the commands below to push this to UXPin. _Substitute `YOUR_UXPIN_AUTH_TOKEN` with the token from the previous step._

```
git clone https://github.com/uxpin-merge/react-bootstrap-merge.git
cd react-bootstrap-merge
npm install
./node_modules/.bin/uxpin-merge push --token YOUR_UXPIN_AUTH_TOKEN
```

Note that `npm install` takes a couple of minutes to run.

6. Refresh your UXPin Editor browser tab. The design system components should be available.

## Package Notes

* sass-loader version: https://stackoverflow.com/questions/58546521/node-sass-and-sass-loader-module-build-failed-typeerror-this-getresolve-is-n. css-loader appears to have the same issue w/webpack v4+.
