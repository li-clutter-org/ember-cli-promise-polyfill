ember-cli-promise-polyfill
==============================================================================

Ember-CLI addon to add a polyfill for [ES6 Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) based on [es6-promise polyfill](https://github.com/stefanpenner/es6-promise)


Installation
------------------------------------------------------------------------------

```
ember install ember-cli-promise-polyfill
```


Usage
------------------------------------------------------------------------------

Beginning with Ember 3.4.0, you can use safely Native Promise in your Ember apps. Read more on ["Why does Ember still use RSVP?"](https://discuss.emberjs.com/t/readers-questions-why-does-ember-still-use-rsvp/14736)

This addon will install the polyfill for browsers that do not support Native Promise, so you can start using it in your Ember app.

Ember CLI supports a [Targets](http://rwjblue.com/2017/04/21/ember-cli-targets/) feature,
allowing you to specify the list of browsers your app should support like `last 1 Chrome versions` or `ie 11`.
If the [caniuse database](http://caniuse.com/#feat=classlist) indicates that all browsers you want to support *fully* support the feature, then the polyfill will *not* be included into your build, to not increase your bundle size.

See full [browser support details](https://caniuse.com/#feat=promises).


Note: the addon will fail if your app uses a Ember version minor than 3.4.0.

```
You must have Ember 3.4.0 or above to use "ember-cli-promise-polyfill".
Please, remove "ember-cli-promise-polyfill" from your "package.json".
Apps using previous Ember versions should continue using "RSVP.Promise" instead of "Native Promise".

```

Credits
------------------------------------------------------------------------------
This addon was inspired by a similar polyfill addon: https://github.com/kaliber5/ember-cli-classlist-polyfill


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-cli-promise-polyfill`
* `npm install`

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
