'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _storage = require('./src/storage');

Object.keys(_storage).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _storage[key];
    }
  });
});

var _cache = require('./src/cache');

Object.keys(_cache).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _cache[key];
    }
  });
});

var _xhr = require('./src/xhr');

Object.keys(_xhr).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _xhr[key];
    }
  });
});

var _parse = require('./src/parse');

Object.keys(_parse).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _parse[key];
    }
  });
});

var _serialize = require('./src/serialize');

Object.keys(_serialize).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _serialize[key];
    }
  });
});