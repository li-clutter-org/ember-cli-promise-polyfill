import ES6Promise from 'es6-promise';

export default {
  name: 'promise-polyfill',

  initialize() {
    ES6Promise.polyfill();
  }
};
