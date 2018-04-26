# ship-components-dialog
[React](http://facebook.github.io/react/) dialogs. Exports a commonjs module that can be used with [webpack](http://webpack.github.io/). Source is in ES6 and is compiled down to ES5 using [Babel](https://babeljs.io/).

[![npm](https://img.shields.io/npm/v/ship-components-dialog.svg?maxAge=2592000)](https://www.npmjs.com/package/ship-components-dialog)
[![Build Status](http://img.shields.io/travis/ship-components/ship-components-dialog/master.svg?style=flat)](https://travis-ci.org/ship-components/ship-components-dialog)
[![Coverage](http://img.shields.io/coveralls/ship-components/ship-components-dialog.svg?style=flat)](https://coveralls.io/github/ship-components/ship-components-dialog)
[![devDependencies](https://img.shields.io/david/dev/ship-components/ship-components-dialog.svg?style=flat)](https://david-dm.org/ship-components/ship-components-dialog?type=dev)

## Usage

### ES6/JSX (Recommended)
The component is written using ES6/JSX therefore Babel is recommended to use it. The below example is based on using [webpack](http://webpack.github.io/) and [babel-loader](https://github.com/babel/babel-loader).
```js
import React from 'react';
import { Confirm, Modals, ModalActions, ModalStore }  } from 'ship-components-dialog';

export default class Dialog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modals: ModalStore.getState()
    };

    this.handleModalStoreChange = this.handleModalStoreChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.storeListener = ModalStore.onChange(this.handleModalStoreChange)
  }

  componentWillUnmount() {
    this.storeListener.remove();
  }

  handleModalStoreChange() {
    this.setState({
      modals: ModalStore.getState()
    });
  }

  handleClick() {
    ModalActions.open(
      <Confirm
        confirm='Yes'
        cancel='Cancel'
      >
        Are you sure you want to delete this?
      </Confirm>
    ).then(()=>{
      // 'Yes' was clicked
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          Click Me!
        </button>
        <Modals modals={this.state.modals} />
      </div>
    );
  }
}
```

## Examples and Development
Examples can be found in the `examples/` folder. A development server can be run with:

```shell
$ npm install
$ npm start
```

This will live reload any changes you make and serve them at http://localhost:8080.

### Webpack Configuration
This module is designed to be used with webpack but requires a few loaders if you are pulling the source into another project.

```shell
$ npm install webpack babel-loader css-loader style-loader postcss-loader extract-text-webpack-plugin postcss-nested postcss-color-hex-alpha postcss-color-function postcss-calc postcss-simple-vars autoprefixer --save-dev
```

Below are is a sample of how to setup the loaders:

```js
/**
 * Relevant Webpack Configuration
 */
{
  [...]
  module: {
    loaders: [
      // Setup support for ES6
      {
        test: /\.(jsx?|es6)$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      // ES6/JSX for external ship-components modules
      {
        test: /\.(jsx?|es6)$/,
        include: [
          /ship-components\-.*\/src/
        ],
        loader: 'babel'
      },
      // Loaded for fonts and images
      {
       test: /\.(png|svg|jpeg|jpg|ttf|eot|woff)/,
       loader: 'file?name=[path][name].[ext]'
      },
      // Setup support for CSS Modules
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
      }
    ]
  },
  plugins: [
    // Extract the css and put it in one file. Path is relative to output path
    new ExtractTextPlugin('../css/[name].css', { allChunks: true })
  ],
  // CSS Modules
  postcss: [
    require('postcss-nested'),
    require('postcss-color-hex-alpha'),
    require('postcss-color-function'),
    require('postcss-calc'),
    require('autoprefixer')
  ],
  [...]
}
```

## Tests
1. `npm install`
2. `npm test`

## History
* 1.0.0 - Switched to react-transition-group@1.x (for React 16)
* 0.8.0 - Replace babel 6.x with babel-cli, update babel to env from latest, prop-types, sub-component updates
* 0.7.1 - Updates babel presets to latest.
* 0.7.0 - Added new boolean prop closeOnLeave to allow dialog to close with window.onpopstate.
* 0.6.1 - Fixes the Jest functionality to pass all tests
* 0.6.0 - updates to FormDialog for scrolling inner content
* 0.4.1 - css tweaks to fix scrolling and very tall modals
* 0.4.1 - css tweaks to fix scrolling and very tall modals
* 0.4.0 - Added option to cancel confirm by having onConfirm return false
* 0.3.0 - Removed header close button; and added dialog type FormDialog
* 0.2.5 - Switched font-weight around to be more consistent with other components
* 0.2.4 - Updated ship-components-*
* 0.2.3 - Fixed cancel
* 0.2.2 - Added support for 'finally'
* 0.2.1 - Added support for disable confirm button in <Confirm />
* 0.2.0 - Allowed multiple modals at the same time
* 0.1.2 - Fixed a spelling error
* 0.1.1 - Moved ship-components-* to dependencies
* 0.1.0 - Initial

## License
The MIT License (MIT)

Copyright (c) 2017 SHIP

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
