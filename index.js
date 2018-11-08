'use strict';
const path = require('path');
const caniuse = require('caniuse-api');

module.exports = {
  name: require('./package').name,

  importTransforms: require('ember-cli-cjs-transform').importTransforms,

  //isDevelopingAddon() { return true; },
  //
  shouldImportPolyfill() {
    let browsers = this.project.targets && this.project.targets.browsers;
    return !browsers || !caniuse.isSupported('promises', browsers);
  },

  included(app) {
    this._super.included.apply(this, arguments);
    if (this.shouldImportPolyfill()) {
      app.import('node_modules/es6-promise/dist/es6-promise.js', {using: [{ transformation: 'cjs', as: 'es6-promise' }]});
    }
  }
};
