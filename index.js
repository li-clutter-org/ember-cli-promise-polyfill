'use strict';
const path = require('path');

module.exports = {
  name: require('./package').name,

  importTransforms: require('ember-cli-cjs-transform').importTransforms,

  //isDevelopingAddon() { return true; },

  included(app) {
    this._super.included.apply(this, arguments);
    app.import('node_modules/es6-promise/dist/es6-promise.js', {using: [{ transformation: 'cjs', as: 'es6-promise' }]});
  }
};
