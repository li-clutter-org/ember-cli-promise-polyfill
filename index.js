'use strict';
const path = require('path');
const caniuse = require('caniuse-api');
const VersionChecker = require('ember-cli-version-checker');
const packageName = require('./package').name;


module.exports = {
  name: packageName,

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
    this._ensureThisImport();

    if (this.shouldImportPolyfill()) {
      this.import('node_modules/es6-promise/dist/es6-promise.auto.js');
    }
  },

  _ensureThisImport() {
    if (!this.import) {
      this._findHost = function findHostShim() {
        var current = this;
        var app;
        do {
          app = current.app || app;
        } while (current.parent.parent && (current = current.parent));
        return app;
      };
      this.import = function importShim(asset, options) {
        var app = this._findHost();
        app.import(asset, options);
      };
    }
  }

};
