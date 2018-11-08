'use strict';
const path = require('path');
const caniuse = require('caniuse-api');
const VersionChecker = require('ember-cli-version-checker');

const packageName = require('./package').name;

module.exports = {
  name: packageName,

  importTransforms: require('ember-cli-cjs-transform').importTransforms,

  init() {
    this._super.init.apply(this, arguments);

    const checker = new VersionChecker(this);
    const ember = checker.forEmber();

    const expectedVersion = '3.4.0';

    if (ember.lt(expectedVersion)) {
      const error = `
You must have Ember ${expectedVersion} or above to use "${packageName}".
Please, uninstall the "${packageName}" addon. Apps using previous Ember versions should continue using "RSVP.Promise" instead of "Native Promises".`;

      throw new Error(error);
    }
  },

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
