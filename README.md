ember-cli-promise-polyfill
==============================================================================

Ember addon polyfill for ES6-style Promises

Installation
------------------------------------------------------------------------------

```
ember install ember-cli-promise-polyfill
```


Usage
------------------------------------------------------------------------------

This addon will execute the [es6-promise polyfill](https://github.com/stefanpenner/es6-promise).

If `window.Promise` is not available, the polyfill will patch the global environment `window.Promise`.


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-cli-promise-polyfill`
* `npm install`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
