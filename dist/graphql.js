'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Return true if `value` is object-like. A value is object-like if it's not
 * `null` and has a `typeof` result of "object".
 */
function isObjectLike(value) {
  return _typeof(value) == 'object' && value !== null;
}

/**
 * Represents a location in a Source.
 */

/**
 * Takes a Source and a UTF-8 character offset, and returns the corresponding
 * line and column as a SourceLocation.
 */
function getLocation(source, position) {
  var lineRegexp = /\r\n|[\n\r]/g;
  var line = 1;
  var column = position + 1;
  var match;

  while ((match = lineRegexp.exec(source.body)) && match.index < position) {
    line += 1;
    column = position + 1 - (match.index + match[0].length);
  }

  return {
    line: line,
    column: column
  };
}

/**
 * Render a helpful description of the location in the GraphQL Source document.
 */

function printLocation(location) {
  return printSourceLocation(location.source, getLocation(location.source, location.start));
}
/**
 * Render a helpful description of the location in the GraphQL Source document.
 */

function printSourceLocation(source, sourceLocation) {
  var firstLineColumnOffset = source.locationOffset.column - 1;
  var body = whitespace(firstLineColumnOffset) + source.body;
  var lineIndex = sourceLocation.line - 1;
  var lineOffset = source.locationOffset.line - 1;
  var lineNum = sourceLocation.line + lineOffset;
  var columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
  var columnNum = sourceLocation.column + columnOffset;
  var locationStr = "".concat(source.name, ":").concat(lineNum, ":").concat(columnNum, "\n");
  var lines = body.split(/\r\n|[\n\r]/g);
  var locationLine = lines[lineIndex]; // Special case for minified documents

  if (locationLine.length > 120) {
    var sublineIndex = Math.floor(columnNum / 80);
    var sublineColumnNum = columnNum % 80;
    var sublines = [];

    for (var i = 0; i < locationLine.length; i += 80) {
      sublines.push(locationLine.slice(i, i + 80));
    }

    return locationStr + printPrefixedLines([["".concat(lineNum), sublines[0]]].concat(sublines.slice(1, sublineIndex + 1).map(function (subline) {
      return ['', subline];
    }), [[' ', whitespace(sublineColumnNum - 1) + '^'], ['', sublines[sublineIndex + 1]]]));
  }

  return locationStr + printPrefixedLines([// Lines specified like this: ["prefix", "string"],
  ["".concat(lineNum - 1), lines[lineIndex - 1]], ["".concat(lineNum), locationLine], ['', whitespace(columnNum - 1) + '^'], ["".concat(lineNum + 1), lines[lineIndex + 1]]]);
}

function printPrefixedLines(lines) {
  var existingLines = lines.filter(function (_ref) {
    var _ = _ref[0],
        line = _ref[1];
    return line !== undefined;
  });
  var padLen = Math.max.apply(Math, existingLines.map(function (_ref2) {
    var prefix = _ref2[0];
    return prefix.length;
  }));
  return existingLines.map(function (_ref3) {
    var prefix = _ref3[0],
        line = _ref3[1];
    return lpad(padLen, prefix) + (line ? ' | ' + line : ' |');
  }).join('\n');
}

function whitespace(len) {
  return Array(len + 1).join(' ');
}

function lpad(len, str) {
  return whitespace(len - str.length) + str;
}

/**
 * A GraphQLError describes an Error found during the parse, validate, or
 * execute phases of performing a GraphQL operation. In addition to a message
 * and stack trace, it also includes information about the locations in a
 * GraphQL document and/or execution result that correspond to the Error.
 */

function GraphQLError( // eslint-disable-line no-redeclare
message, nodes, source, positions, path, originalError, extensions) {
  // Compute list of blame nodes.
  var _nodes = Array.isArray(nodes) ? nodes.length !== 0 ? nodes : undefined : nodes ? [nodes] : undefined; // Compute locations in the source for the given nodes/positions.


  var _source = source;

  if (!_source && _nodes) {
    var node = _nodes[0];
    _source = node && node.loc && node.loc.source;
  }

  var _positions = positions;

  if (!_positions && _nodes) {
    _positions = _nodes.reduce(function (list, node) {
      if (node.loc) {
        list.push(node.loc.start);
      }

      return list;
    }, []);
  }

  if (_positions && _positions.length === 0) {
    _positions = undefined;
  }

  var _locations;

  if (positions && source) {
    _locations = positions.map(function (pos) {
      return getLocation(source, pos);
    });
  } else if (_nodes) {
    _locations = _nodes.reduce(function (list, node) {
      if (node.loc) {
        list.push(getLocation(node.loc.source, node.loc.start));
      }

      return list;
    }, []);
  }

  var _extensions = extensions;

  if (_extensions == null && originalError != null) {
    var originalExtensions = originalError.extensions;

    if (isObjectLike(originalExtensions)) {
      _extensions = originalExtensions;
    }
  }

  Object.defineProperties(this, {
    message: {
      value: message,
      // By being enumerable, JSON.stringify will include `message` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: true,
      writable: true
    },
    locations: {
      // Coercing falsey values to undefined ensures they will not be included
      // in JSON.stringify() when not provided.
      value: _locations || undefined,
      // By being enumerable, JSON.stringify will include `locations` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: Boolean(_locations)
    },
    path: {
      // Coercing falsey values to undefined ensures they will not be included
      // in JSON.stringify() when not provided.
      value: path || undefined,
      // By being enumerable, JSON.stringify will include `path` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: Boolean(path)
    },
    nodes: {
      value: _nodes || undefined
    },
    source: {
      value: _source || undefined
    },
    positions: {
      value: _positions || undefined
    },
    originalError: {
      value: originalError
    },
    extensions: {
      // Coercing falsey values to undefined ensures they will not be included
      // in JSON.stringify() when not provided.
      value: _extensions || undefined,
      // By being enumerable, JSON.stringify will include `path` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: Boolean(_extensions)
    }
  }); // Include (non-enumerable) stack trace.

  if (originalError && originalError.stack) {
    Object.defineProperty(this, 'stack', {
      value: originalError.stack,
      writable: true,
      configurable: true
    });
  } else if (Error.captureStackTrace) {
    Error.captureStackTrace(this, GraphQLError);
  } else {
    Object.defineProperty(this, 'stack', {
      value: Error().stack,
      writable: true,
      configurable: true
    });
  }
}
GraphQLError.prototype = Object.create(Error.prototype, {
  constructor: {
    value: GraphQLError
  },
  name: {
    value: 'GraphQLError'
  },
  toString: {
    value: function toString() {
      return printError(this);
    }
  }
});
/**
 * Prints a GraphQLError to a string, representing useful location information
 * about the error's position in the source.
 */

function printError(error) {
  var output = error.message;

  if (error.nodes) {
    for (var _i2 = 0, _error$nodes2 = error.nodes; _i2 < _error$nodes2.length; _i2++) {
      var node = _error$nodes2[_i2];

      if (node.loc) {
        output += '\n\n' + printLocation(node.loc);
      }
    }
  } else if (error.source && error.locations) {
    for (var _i4 = 0, _error$locations2 = error.locations; _i4 < _error$locations2.length; _i4++) {
      var location = _error$locations2[_i4];
      output += '\n\n' + printSourceLocation(error.source, location);
    }
  }

  return output;
}

/**
 * Produces a GraphQLError representing a syntax error, containing useful
 * descriptive information about the syntax error's position in the source.
 */

function syntaxError(source, position, description) {
  return new GraphQLError("Syntax Error: ".concat(description), undefined, source, [position]);
}

/**
 * Given an arbitrary Error, presumably thrown while attempting to execute a
 * GraphQL operation, produce a new GraphQLError aware of the location in the
 * document responsible for the original Error.
 */

function locatedError(originalError, nodes, path) {
  // Note: this uses a brand-check to support GraphQL errors originating from
  // other contexts.
  if (originalError && Array.isArray(originalError.path)) {
    return originalError;
  }

  return new GraphQLError(originalError && originalError.message, originalError && originalError.nodes || nodes, originalError && originalError.source, originalError && originalError.positions, path, originalError);
}

function devAssert(condition, message) {
  var booleanCondition = Boolean(condition);

  if (!booleanCondition) {
    throw new Error(message);
  }
}

/**
 * Given a GraphQLError, format it according to the rules described by the
 * Response Format, Errors section of the GraphQL Specification.
 */
function formatError(error) {
  error || devAssert(0, 'Received null or undefined error.');
  var message = error.message || 'An unknown error occurred.';
  var locations = error.locations;
  var path = error.path;
  var extensions = error.extensions;
  return extensions ? {
    message: message,
    locations: locations,
    path: path,
    extensions: extensions
  } : {
    message: message,
    locations: locations,
    path: path
  };
}
/**
 * @see https://github.com/graphql/graphql-spec/blob/master/spec/Section%207%20--%20Response.md#errors
 */



var index = /*#__PURE__*/Object.freeze({
  __proto__: null,
  GraphQLError: GraphQLError,
  printError: printError,
  syntaxError: syntaxError,
  locatedError: locatedError,
  formatError: formatError
});

/**
 * Given a Path and a key, return a new Path containing the new key.
 */
function addPath(prev, key) {
  return {
    prev: prev,
    key: key
  };
}
/**
 * Given a Path, return an Array of the path keys.
 */

function pathToArray(path) {
  var flattened = [];
  var curr = path;

  while (curr) {
    flattened.push(curr.key);
    curr = curr.prev;
  }

  return flattened.reverse();
}

/**
 * Copyright (c) 2016, Lee Byron
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @ignore
 */

/**
 * [Iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterator)
 * is a *protocol* which describes a standard way to produce a sequence of
 * values, typically the values of the Iterable represented by this Iterator.
 *
 * While described by the [ES2015 version of JavaScript](http://www.ecma-international.org/ecma-262/6.0/#sec-iterator-interface)
 * it can be utilized by any version of JavaScript.
 *
 * @external Iterator
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterator|MDN Iteration protocols}
 */

/**
 * [Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterable)
 * is a *protocol* which when implemented allows a JavaScript object to define
 * their iteration behavior, such as what values are looped over in a
 * [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
 * loop or `iterall`'s `forEach` function. Many [built-in types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#Builtin_iterables)
 * implement the Iterable protocol, including `Array` and `Map`.
 *
 * While described by the [ES2015 version of JavaScript](http://www.ecma-international.org/ecma-262/6.0/#sec-iterable-interface)
 * it can be utilized by any version of JavaScript.
 *
 * @external Iterable
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterable|MDN Iteration protocols}
 */

// In ES2015 environments, Symbol exists
var SYMBOL /*: any */ = typeof Symbol === 'function' ? Symbol : void 0;

// In ES2015 (or a polyfilled) environment, this will be Symbol.iterator
var SYMBOL_ITERATOR = SYMBOL && SYMBOL.iterator;

/**
 * Returns true if the provided object implements the Iterator protocol via
 * either implementing a `Symbol.iterator` or `"@@iterator"` method.
 *
 * @example
 *
 * var isIterable = require('iterall').isIterable
 * isIterable([ 1, 2, 3 ]) // true
 * isIterable('ABC') // true
 * isIterable({ length: 1, 0: 'Alpha' }) // false
 * isIterable({ key: 'value' }) // false
 * isIterable(new Map()) // true
 *
 * @param obj
 *   A value which might implement the Iterable protocol.
 * @return {boolean} true if Iterable.
 */
/*:: declare export function isIterable(obj: any): boolean; */
function isIterable(obj) {
  return !!getIteratorMethod(obj)
}

/**
 * Returns true if the provided object implements the Array-like protocol via
 * defining a positive-integer `length` property.
 *
 * @example
 *
 * var isArrayLike = require('iterall').isArrayLike
 * isArrayLike([ 1, 2, 3 ]) // true
 * isArrayLike('ABC') // true
 * isArrayLike({ length: 1, 0: 'Alpha' }) // true
 * isArrayLike({ key: 'value' }) // false
 * isArrayLike(new Map()) // false
 *
 * @param obj
 *   A value which might implement the Array-like protocol.
 * @return {boolean} true if Array-like.
 */
/*:: declare export function isArrayLike(obj: any): boolean; */
function isArrayLike(obj) {
  var length = obj != null && obj.length;
  return typeof length === 'number' && length >= 0 && length % 1 === 0
}

/**
 * Returns true if the provided object is an Object (i.e. not a string literal)
 * and is either Iterable or Array-like.
 *
 * This may be used in place of [Array.isArray()][isArray] to determine if an
 * object should be iterated-over. It always excludes string literals and
 * includes Arrays (regardless of if it is Iterable). It also includes other
 * Array-like objects such as NodeList, TypedArray, and Buffer.
 *
 * @example
 *
 * var isCollection = require('iterall').isCollection
 * isCollection([ 1, 2, 3 ]) // true
 * isCollection('ABC') // false
 * isCollection({ length: 1, 0: 'Alpha' }) // true
 * isCollection({ key: 'value' }) // false
 * isCollection(new Map()) // true
 *
 * @example
 *
 * var forEach = require('iterall').forEach
 * if (isCollection(obj)) {
 *   forEach(obj, function (value) {
 *     console.log(value)
 *   })
 * }
 *
 * @param obj
 *   An Object value which might implement the Iterable or Array-like protocols.
 * @return {boolean} true if Iterable or Array-like Object.
 */
/*:: declare export function isCollection(obj: any): boolean; */
function isCollection(obj) {
  return Object(obj) === obj && (isArrayLike(obj) || isIterable(obj))
}

/**
 * If the provided object implements the Iterator protocol, its Iterator object
 * is returned. Otherwise returns undefined.
 *
 * @example
 *
 * var getIterator = require('iterall').getIterator
 * var iterator = getIterator([ 1, 2, 3 ])
 * iterator.next() // { value: 1, done: false }
 * iterator.next() // { value: 2, done: false }
 * iterator.next() // { value: 3, done: false }
 * iterator.next() // { value: undefined, done: true }
 *
 * @template T the type of each iterated value
 * @param {Iterable<T>} iterable
 *   An Iterable object which is the source of an Iterator.
 * @return {Iterator<T>} new Iterator instance.
 */
/*:: declare export var getIterator:
  & (<+TValue>(iterable: Iterable<TValue>) => Iterator<TValue>)
  & ((iterable: mixed) => void | Iterator<mixed>); */
function getIterator(iterable) {
  var method = getIteratorMethod(iterable);
  if (method) {
    return method.call(iterable)
  }
}

/**
 * If the provided object implements the Iterator protocol, the method
 * responsible for producing its Iterator object is returned.
 *
 * This is used in rare cases for performance tuning. This method must be called
 * with obj as the contextual this-argument.
 *
 * @example
 *
 * var getIteratorMethod = require('iterall').getIteratorMethod
 * var myArray = [ 1, 2, 3 ]
 * var method = getIteratorMethod(myArray)
 * if (method) {
 *   var iterator = method.call(myArray)
 * }
 *
 * @template T the type of each iterated value
 * @param {Iterable<T>} iterable
 *   An Iterable object which defines an `@@iterator` method.
 * @return {function(): Iterator<T>} `@@iterator` method.
 */
/*:: declare export var getIteratorMethod:
  & (<+TValue>(iterable: Iterable<TValue>) => (() => Iterator<TValue>))
  & ((iterable: mixed) => (void | (() => Iterator<mixed>))); */
function getIteratorMethod(iterable) {
  if (iterable != null) {
    var method =
      (SYMBOL_ITERATOR && iterable[SYMBOL_ITERATOR]) || iterable['@@iterator'];
    if (typeof method === 'function') {
      return method
    }
  }
}

/**
 * Given an object which either implements the Iterable protocol or is
 * Array-like, iterate over it, calling the `callback` at each iteration.
 *
 * Use `forEach` where you would expect to use a `for ... of` loop in ES6.
 * However `forEach` adheres to the behavior of [Array#forEach][] described in
 * the ECMAScript specification, skipping over "holes" in Array-likes. It will
 * also delegate to a `forEach` method on `collection` if one is defined,
 * ensuring native performance for `Arrays`.
 *
 * Similar to [Array#forEach][], the `callback` function accepts three
 * arguments, and is provided with `thisArg` as the calling context.
 *
 * Note: providing an infinite Iterator to forEach will produce an error.
 *
 * [Array#forEach]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 *
 * @example
 *
 * var forEach = require('iterall').forEach
 *
 * forEach(myIterable, function (value, index, iterable) {
 *   console.log(value, index, iterable === myIterable)
 * })
 *
 * @example
 *
 * // ES6:
 * for (let value of myIterable) {
 *   console.log(value)
 * }
 *
 * // Any JavaScript environment:
 * forEach(myIterable, function (value) {
 *   console.log(value)
 * })
 *
 * @template T the type of each iterated value
 * @param {Iterable<T>|{ length: number }} collection
 *   The Iterable or array to iterate over.
 * @param {function(T, number, object)} callback
 *   Function to execute for each iteration, taking up to three arguments
 * @param [thisArg]
 *   Optional. Value to use as `this` when executing `callback`.
 */
/*:: declare export var forEach:
  & (<+TValue, TCollection: Iterable<TValue>>(
      collection: TCollection,
      callbackFn: (value: TValue, index: number, collection: TCollection) => any,
      thisArg?: any
    ) => void)
  & (<TCollection: {length: number}>(
      collection: TCollection,
      callbackFn: (value: mixed, index: number, collection: TCollection) => any,
      thisArg?: any
    ) => void); */
function forEach(collection, callback, thisArg) {
  if (collection != null) {
    if (typeof collection.forEach === 'function') {
      return collection.forEach(callback, thisArg)
    }
    var i = 0;
    var iterator = getIterator(collection);
    if (iterator) {
      var step;
      while (!(step = iterator.next()).done) {
        callback.call(thisArg, step.value, i++, collection);
        // Infinite Iterators could cause forEach to run forever.
        // After a very large number of iterations, produce an error.
        /* istanbul ignore if */
        if (i > 9999999) {
          throw new TypeError('Near-infinite iteration.')
        }
      }
    } else if (isArrayLike(collection)) {
      for (; i < collection.length; i++) {
        if (collection.hasOwnProperty(i)) {
          callback.call(thisArg, collection[i], i, collection);
        }
      }
    }
  }
}

/////////////////////////////////////////////////////
//                                                 //
//                 ASYNC ITERATORS                 //
//                                                 //
/////////////////////////////////////////////////////

/**
 * [AsyncIterable](https://tc39.github.io/proposal-async-iteration/#sec-asynciterable-interface)
 * is a *protocol* which when implemented allows a JavaScript object to define
 * an asynchronous iteration behavior, such as what values are looped over in
 * a [`for-await-of`](https://tc39.github.io/proposal-async-iteration/#sec-for-in-and-for-of-statements)
 * loop or `iterall`'s {@link forAwaitEach} function.
 *
 * While described as a proposed addition to the [ES2017 version of JavaScript](https://tc39.github.io/proposal-async-iteration/)
 * it can be utilized by any version of JavaScript.
 *
 * @external AsyncIterable
 * @see {@link https://tc39.github.io/proposal-async-iteration/#sec-asynciterable-interface|Async Iteration Proposal}
 * @template T The type of each iterated value
 * @property {function (): AsyncIterator<T>} Symbol.asyncIterator
 *   A method which produces an AsyncIterator for this AsyncIterable.
 */

/**
 * [AsyncIterator](https://tc39.github.io/proposal-async-iteration/#sec-asynciterator-interface)
 * is a *protocol* which describes a standard way to produce and consume an
 * asynchronous sequence of values, typically the values of the
 * {@link AsyncIterable} represented by this {@link AsyncIterator}.
 *
 * AsyncIterator is similar to Observable or Stream. Like an {@link Iterator} it
 * also as a `next()` method, however instead of an IteratorResult,
 * calling this method returns a {@link Promise} for a IteratorResult.
 *
 * While described as a proposed addition to the [ES2017 version of JavaScript](https://tc39.github.io/proposal-async-iteration/)
 * it can be utilized by any version of JavaScript.
 *
 * @external AsyncIterator
 * @see {@link https://tc39.github.io/proposal-async-iteration/#sec-asynciterator-interface|Async Iteration Proposal}
 */

// In ES2017 (or a polyfilled) environment, this will be Symbol.asyncIterator
var SYMBOL_ASYNC_ITERATOR = SYMBOL && SYMBOL.asyncIterator;

/**
 * A property name to be used as the name of an AsyncIterable's method
 * responsible for producing an Iterator, referred to as `@@asyncIterator`.
 * Typically represents the value `Symbol.asyncIterator` but falls back to the
 * string `"@@asyncIterator"` when `Symbol.asyncIterator` is not defined.
 *
 * Use `$$asyncIterator` for defining new AsyncIterables instead of
 * `Symbol.asyncIterator`, but do not use it for accessing existing Iterables,
 * instead use {@link getAsyncIterator} or {@link isAsyncIterable}.
 *
 * @example
 *
 * var $$asyncIterator = require('iterall').$$asyncIterator
 *
 * function Chirper (to) {
 *   this.to = to
 * }
 *
 * Chirper.prototype[$$asyncIterator] = function () {
 *   return {
 *     to: this.to,
 *     num: 0,
 *     next () {
 *       return new Promise(resolve => {
 *         if (this.num >= this.to) {
 *           resolve({ value: undefined, done: true })
 *         } else {
 *           setTimeout(() => {
 *             resolve({ value: this.num++, done: false })
 *           }, 1000)
 *         }
 *       })
 *     }
 *   }
 * }
 *
 * var chirper = new Chirper(3)
 * for await (var number of chirper) {
 *   console.log(number) // 0 ...wait... 1 ...wait... 2
 * }
 *
 * @type {Symbol|string}
 */
/*:: declare export var $$asyncIterator: '@@asyncIterator'; */
var $$asyncIterator = SYMBOL_ASYNC_ITERATOR || '@@asyncIterator';

/**
 * Returns true if the provided object implements the AsyncIterator protocol via
 * either implementing a `Symbol.asyncIterator` or `"@@asyncIterator"` method.
 *
 * @example
 *
 * var isAsyncIterable = require('iterall').isAsyncIterable
 * isAsyncIterable(myStream) // true
 * isAsyncIterable('ABC') // false
 *
 * @param obj
 *   A value which might implement the AsyncIterable protocol.
 * @return {boolean} true if AsyncIterable.
 */
/*:: declare export function isAsyncIterable(obj: any): boolean; */
function isAsyncIterable(obj) {
  return !!getAsyncIteratorMethod(obj)
}

/**
 * If the provided object implements the AsyncIterator protocol, its
 * AsyncIterator object is returned. Otherwise returns undefined.
 *
 * @example
 *
 * var getAsyncIterator = require('iterall').getAsyncIterator
 * var asyncIterator = getAsyncIterator(myStream)
 * asyncIterator.next().then(console.log) // { value: 1, done: false }
 * asyncIterator.next().then(console.log) // { value: 2, done: false }
 * asyncIterator.next().then(console.log) // { value: 3, done: false }
 * asyncIterator.next().then(console.log) // { value: undefined, done: true }
 *
 * @template T the type of each iterated value
 * @param {AsyncIterable<T>} asyncIterable
 *   An AsyncIterable object which is the source of an AsyncIterator.
 * @return {AsyncIterator<T>} new AsyncIterator instance.
 */
/*:: declare export var getAsyncIterator:
  & (<+TValue>(asyncIterable: AsyncIterable<TValue>) => AsyncIterator<TValue>)
  & ((asyncIterable: mixed) => (void | AsyncIterator<mixed>)); */
function getAsyncIterator(asyncIterable) {
  var method = getAsyncIteratorMethod(asyncIterable);
  if (method) {
    return method.call(asyncIterable)
  }
}

/**
 * If the provided object implements the AsyncIterator protocol, the method
 * responsible for producing its AsyncIterator object is returned.
 *
 * This is used in rare cases for performance tuning. This method must be called
 * with obj as the contextual this-argument.
 *
 * @example
 *
 * var getAsyncIteratorMethod = require('iterall').getAsyncIteratorMethod
 * var method = getAsyncIteratorMethod(myStream)
 * if (method) {
 *   var asyncIterator = method.call(myStream)
 * }
 *
 * @template T the type of each iterated value
 * @param {AsyncIterable<T>} asyncIterable
 *   An AsyncIterable object which defines an `@@asyncIterator` method.
 * @return {function(): AsyncIterator<T>} `@@asyncIterator` method.
 */
/*:: declare export var getAsyncIteratorMethod:
  & (<+TValue>(asyncIterable: AsyncIterable<TValue>) => (() => AsyncIterator<TValue>))
  & ((asyncIterable: mixed) => (void | (() => AsyncIterator<mixed>))); */
function getAsyncIteratorMethod(asyncIterable) {
  if (asyncIterable != null) {
    var method =
      (SYMBOL_ASYNC_ITERATOR && asyncIterable[SYMBOL_ASYNC_ITERATOR]) ||
      asyncIterable['@@asyncIterator'];
    if (typeof method === 'function') {
      return method
    }
  }
}

var nodejsCustomInspectSymbol = typeof Symbol === 'function' && typeof Symbol.for === 'function' ? Symbol.for('nodejs.util.inspect.custom') : undefined;

function _typeof$1(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }
var MAX_ARRAY_LENGTH = 10;
var MAX_RECURSIVE_DEPTH = 2;
/**
 * Used to print values in error messages.
 */

function inspect(value) {
  return formatValue(value, []);
}

function formatValue(value, seenValues) {
  switch (_typeof$1(value)) {
    case 'string':
      return JSON.stringify(value);

    case 'function':
      return value.name ? "[function ".concat(value.name, "]") : '[function]';

    case 'object':
      if (value === null) {
        return 'null';
      }

      return formatObjectValue(value, seenValues);

    default:
      return String(value);
  }
}

function formatObjectValue(value, previouslySeenValues) {
  if (previouslySeenValues.indexOf(value) !== -1) {
    return '[Circular]';
  }

  var seenValues = [].concat(previouslySeenValues, [value]);
  var customInspectFn = getCustomFn(value);

  if (customInspectFn !== undefined) {
    // $FlowFixMe(>=0.90.0)
    var customValue = customInspectFn.call(value); // check for infinite recursion

    if (customValue !== value) {
      return typeof customValue === 'string' ? customValue : formatValue(customValue, seenValues);
    }
  } else if (Array.isArray(value)) {
    return formatArray(value, seenValues);
  }

  return formatObject(value, seenValues);
}

function formatObject(object, seenValues) {
  var keys = Object.keys(object);

  if (keys.length === 0) {
    return '{}';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[' + getObjectTag(object) + ']';
  }

  var properties = keys.map(function (key) {
    var value = formatValue(object[key], seenValues);
    return key + ': ' + value;
  });
  return '{ ' + properties.join(', ') + ' }';
}

function formatArray(array, seenValues) {
  if (array.length === 0) {
    return '[]';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[Array]';
  }

  var len = Math.min(MAX_ARRAY_LENGTH, array.length);
  var remaining = array.length - len;
  var items = [];

  for (var i = 0; i < len; ++i) {
    items.push(formatValue(array[i], seenValues));
  }

  if (remaining === 1) {
    items.push('... 1 more item');
  } else if (remaining > 1) {
    items.push("... ".concat(remaining, " more items"));
  }

  return '[' + items.join(', ') + ']';
}

function getCustomFn(object) {
  var customInspectFn = object[String(nodejsCustomInspectSymbol)];

  if (typeof customInspectFn === 'function') {
    return customInspectFn;
  }

  if (typeof object.inspect === 'function') {
    return object.inspect;
  }
}

function getObjectTag(object) {
  var tag = Object.prototype.toString.call(object).replace(/^\[object /, '').replace(/]$/, '');

  if (tag === 'Object' && typeof object.constructor === 'function') {
    var name = object.constructor.name;

    if (typeof name === 'string' && name !== '') {
      return name;
    }
  }

  return tag;
}

/**
 * Memoizes the provided three-argument function.
 */
function memoize3(fn) {
  var cache0;

  function memoized(a1, a2, a3) {
    if (!cache0) {
      cache0 = new WeakMap();
    }

    var cache1 = cache0.get(a1);
    var cache2;

    if (cache1) {
      cache2 = cache1.get(a2);

      if (cache2) {
        var cachedValue = cache2.get(a3);

        if (cachedValue !== undefined) {
          return cachedValue;
        }
      }
    } else {
      cache1 = new WeakMap();
      cache0.set(a1, cache1);
    }

    if (!cache2) {
      cache2 = new WeakMap();
      cache1.set(a2, cache2);
    }

    var newValue = fn(a1, a2, a3);
    cache2.set(a3, newValue);
    return newValue;
  }

  return memoized;
}

function invariant(condition, message) {
  var booleanCondition = Boolean(condition);

  if (!booleanCondition) {
    throw new Error(message || 'Unexpected invariant triggered');
  }
}

/**
 * Returns true if a value is undefined, or NaN.
 */
function isInvalid(value) {
  return value === undefined || value !== value;
}

/**
 * Returns true if a value is null, undefined, or NaN.
 */
function isNullish(value) {
  return value === null || value === undefined || value !== value;
}

/**
 * Returns true if the value acts like a Promise, i.e. has a "then" function,
 * otherwise returns false.
 */
// eslint-disable-next-line no-redeclare
function isPromise(value) {
  return Boolean(value && typeof value.then === 'function');
}

/**
 * Similar to Array.prototype.reduce(), however the reducing callback may return
 * a Promise, in which case reduction will continue after each promise resolves.
 *
 * If the callback does not return a Promise, then this function will also not
 * return a Promise.
 */
function promiseReduce(values, callback, initialValue) {
  return values.reduce(function (previous, value) {
    return isPromise(previous) ? previous.then(function (resolved) {
      return callback(resolved, value);
    }) : callback(previous, value);
  }, initialValue);
}

/**
 * This function transforms a JS object `ObjMap<Promise<T>>` into
 * a `Promise<ObjMap<T>>`
 *
 * This is akin to bluebird's `Promise.props`, but implemented only using
 * `Promise.all` so it will work with any implementation of ES6 promises.
 */
function promiseForObject(object) {
  var keys = Object.keys(object);
  var valuesAndPromises = keys.map(function (name) {
    return object[name];
  });
  return Promise.all(valuesAndPromises).then(function (values) {
    return values.reduce(function (resolvedObject, value, i) {
      resolvedObject[keys[i]] = value;
      return resolvedObject;
    }, Object.create(null));
  });
}

/**
 * The set of allowed kind values for AST nodes.
 */
var Kind = Object.freeze({
  // Name
  NAME: 'Name',
  // Document
  DOCUMENT: 'Document',
  OPERATION_DEFINITION: 'OperationDefinition',
  VARIABLE_DEFINITION: 'VariableDefinition',
  SELECTION_SET: 'SelectionSet',
  FIELD: 'Field',
  ARGUMENT: 'Argument',
  // Fragments
  FRAGMENT_SPREAD: 'FragmentSpread',
  INLINE_FRAGMENT: 'InlineFragment',
  FRAGMENT_DEFINITION: 'FragmentDefinition',
  // Values
  VARIABLE: 'Variable',
  INT: 'IntValue',
  FLOAT: 'FloatValue',
  STRING: 'StringValue',
  BOOLEAN: 'BooleanValue',
  NULL: 'NullValue',
  ENUM: 'EnumValue',
  LIST: 'ListValue',
  OBJECT: 'ObjectValue',
  OBJECT_FIELD: 'ObjectField',
  // Directives
  DIRECTIVE: 'Directive',
  // Types
  NAMED_TYPE: 'NamedType',
  LIST_TYPE: 'ListType',
  NON_NULL_TYPE: 'NonNullType',
  // Type System Definitions
  SCHEMA_DEFINITION: 'SchemaDefinition',
  OPERATION_TYPE_DEFINITION: 'OperationTypeDefinition',
  // Type Definitions
  SCALAR_TYPE_DEFINITION: 'ScalarTypeDefinition',
  OBJECT_TYPE_DEFINITION: 'ObjectTypeDefinition',
  FIELD_DEFINITION: 'FieldDefinition',
  INPUT_VALUE_DEFINITION: 'InputValueDefinition',
  INTERFACE_TYPE_DEFINITION: 'InterfaceTypeDefinition',
  UNION_TYPE_DEFINITION: 'UnionTypeDefinition',
  ENUM_TYPE_DEFINITION: 'EnumTypeDefinition',
  ENUM_VALUE_DEFINITION: 'EnumValueDefinition',
  INPUT_OBJECT_TYPE_DEFINITION: 'InputObjectTypeDefinition',
  // Directive Definitions
  DIRECTIVE_DEFINITION: 'DirectiveDefinition',
  // Type System Extensions
  SCHEMA_EXTENSION: 'SchemaExtension',
  // Type Extensions
  SCALAR_TYPE_EXTENSION: 'ScalarTypeExtension',
  OBJECT_TYPE_EXTENSION: 'ObjectTypeExtension',
  INTERFACE_TYPE_EXTENSION: 'InterfaceTypeExtension',
  UNION_TYPE_EXTENSION: 'UnionTypeExtension',
  ENUM_TYPE_EXTENSION: 'EnumTypeExtension',
  INPUT_OBJECT_TYPE_EXTENSION: 'InputObjectTypeExtension'
});
/**
 * The enum type representing the possible kind values of AST nodes.
 */

/* eslint-disable no-redeclare */
// $FlowFixMe
var find = Array.prototype.find ? function (list, predicate) {
  return Array.prototype.find.call(list, predicate);
} : function (list, predicate) {
  for (var _i2 = 0; _i2 < list.length; _i2++) {
    var value = list[_i2];

    if (predicate(value)) {
      return value;
    }
  }
};

// Workaround to make older Flow versions happy
var flatMapMethod = Array.prototype.flatMap;
/* eslint-disable no-redeclare */
// $FlowFixMe

var flatMap = flatMapMethod ? function (list, fn) {
  return flatMapMethod.call(list, fn);
} : function (list, fn) {
  var result = [];

  for (var _i2 = 0; _i2 < list.length; _i2++) {
    var _item = list[_i2];
    var value = fn(_item);

    if (Array.isArray(value)) {
      result = result.concat(value);
    } else {
      result.push(value);
    }
  }

  return result;
};

/* eslint-disable no-redeclare */
// $FlowFixMe workaround for: https://github.com/facebook/flow/issues/2221
var objectValues = Object.values || function (obj) {
  return Object.keys(obj).map(function (key) {
    return obj[key];
  });
};

/* eslint-disable no-redeclare */
// $FlowFixMe workaround for: https://github.com/facebook/flow/issues/5838
var objectEntries = Object.entries || function (obj) {
  return Object.keys(obj).map(function (key) {
    return [key, obj[key]];
  });
};

var NAME_RX = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
/**
 * Upholds the spec rules about naming.
 */

function assertValidName(name) {
  var error = isValidNameError(name);

  if (error) {
    throw error;
  }

  return name;
}
/**
 * Returns an Error if a name is invalid.
 */

function isValidNameError(name, node) {
  typeof name === 'string' || devAssert(0, 'Expected string');

  if (name.length > 1 && name[0] === '_' && name[1] === '_') {
    return new GraphQLError("Name \"".concat(name, "\" must not begin with \"__\", which is reserved by GraphQL introspection."), node);
  }

  if (!NAME_RX.test(name)) {
    return new GraphQLError("Names must match /^[_a-zA-Z][_a-zA-Z0-9]*$/ but \"".concat(name, "\" does not."), node);
  }
}

/**
 * Creates a keyed JS object from an array, given a function to produce the keys
 * for each value in the array.
 *
 * This provides a convenient lookup for the array items if the key function
 * produces unique results.
 *
 *     const phoneBook = [
 *       { name: 'Jon', num: '555-1234' },
 *       { name: 'Jenny', num: '867-5309' }
 *     ]
 *
 *     // { Jon: { name: 'Jon', num: '555-1234' },
 *     //   Jenny: { name: 'Jenny', num: '867-5309' } }
 *     const entriesByName = keyMap(
 *       phoneBook,
 *       entry => entry.name
 *     )
 *
 *     // { name: 'Jenny', num: '857-6309' }
 *     const jennyEntry = entriesByName['Jenny']
 *
 */
function keyMap(list, keyFn) {
  return list.reduce(function (map, item) {
    map[keyFn(item)] = item;
    return map;
  }, Object.create(null));
}

/**
 * Creates an object map with the same keys as `map` and values generated by
 * running each value of `map` thru `fn`.
 */
function mapValue(map, fn) {
  var result = Object.create(null);

  for (var _i2 = 0, _objectEntries2 = objectEntries(map); _i2 < _objectEntries2.length; _i2++) {
    var _ref2 = _objectEntries2[_i2];
    var _key = _ref2[0];
    var _value = _ref2[1];
    result[_key] = fn(_value, _key);
  }

  return result;
}

function toObjMap(obj) {
  /* eslint-enable no-redeclare */
  if (Object.getPrototypeOf(obj) === null) {
    return obj;
  }

  var map = Object.create(null);

  for (var _i2 = 0, _objectEntries2 = objectEntries(obj); _i2 < _objectEntries2.length; _i2++) {
    var _ref2 = _objectEntries2[_i2];
    var key = _ref2[0];
    var value = _ref2[1];
    map[key] = value;
  }

  return map;
}

/**
 * Creates a keyed JS object from an array, given a function to produce the keys
 * and a function to produce the values from each item in the array.
 *
 *     const phoneBook = [
 *       { name: 'Jon', num: '555-1234' },
 *       { name: 'Jenny', num: '867-5309' }
 *     ]
 *
 *     // { Jon: '555-1234', Jenny: '867-5309' }
 *     const phonesByName = keyValMap(
 *       phoneBook,
 *       entry => entry.name,
 *       entry => entry.num
 *     )
 *
 */
function keyValMap(list, keyFn, valFn) {
  return list.reduce(function (map, item) {
    map[keyFn(item)] = valFn(item);
    return map;
  }, Object.create(null));
}

/**
 * A replacement for instanceof which includes an error warning when multi-realm
 * constructors are detected.
 */
// See: https://expressjs.com/en/advanced/best-practice-performance.html#set-node_env-to-production
// See: https://webpack.js.org/guides/production/
var instanceOf = process.env.NODE_ENV === 'production' ? // eslint-disable-next-line no-shadow
function instanceOf(value, constructor) {
  return value instanceof constructor;
} : // eslint-disable-next-line no-shadow
function instanceOf(value, constructor) {
  if (value instanceof constructor) {
    return true;
  }

  if (value) {
    var valueClass = value.constructor;
    var className = constructor.name;

    if (className && valueClass && valueClass.name === className) {
      throw new Error("Cannot use ".concat(className, " \"").concat(value, "\" from another module or realm.\n\nEnsure that there is only one instance of \"graphql\" in the node_modules\ndirectory. If different versions of \"graphql\" are the dependencies of other\nrelied on modules, use \"resolutions\" to ensure only one version is installed.\n\nhttps://yarnpkg.com/en/docs/selective-version-resolutions\n\nDuplicate \"graphql\" modules cannot be used at the same time since different\nversions may have different capabilities and behavior. The data from one\nversion used in the function from another could produce confusing and\nspurious results."));
    }
  }

  return false;
};

/**
 * Returns the first argument it receives.
 */
function identityFunc(x) {
  return x;
}

/**
 * The `defineToJSON()` function defines toJSON() and inspect() prototype
 * methods, if no function provided they become aliases for toString().
 */

function defineToJSON(classObject) {
  var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : classObject.prototype.toString;
  classObject.prototype.toJSON = fn;
  classObject.prototype.inspect = fn;

  if (nodejsCustomInspectSymbol) {
    classObject.prototype[nodejsCustomInspectSymbol] = fn;
  }
}

/**
 * The `defineToStringTag()` function checks first to see if the runtime
 * supports the `Symbol` class and then if the `Symbol.toStringTag` constant
 * is defined as a `Symbol` instance. If both conditions are met, the
 * Symbol.toStringTag property is defined as a getter that returns the
 * supplied class constructor's name.
 *
 * @method defineToStringTag
 *
 * @param {Class<any>} classObject a class such as Object, String, Number but
 * typically one of your own creation through the class keyword; `class A {}`,
 * for example.
 */
function defineToStringTag(classObject) {
  if (typeof Symbol === 'function' && Symbol.toStringTag) {
    Object.defineProperty(classObject.prototype, Symbol.toStringTag, {
      get: function get() {
        return this.constructor.name;
      }
    });
  }
}

/**
 * Produces a JavaScript value given a GraphQL Value AST.
 *
 * Unlike `valueFromAST()`, no type is provided. The resulting JavaScript value
 * will reflect the provided GraphQL value AST.
 *
 * | GraphQL Value        | JavaScript Value |
 * | -------------------- | ---------------- |
 * | Input Object         | Object           |
 * | List                 | Array            |
 * | Boolean              | Boolean          |
 * | String / Enum        | String           |
 * | Int / Float          | Number           |
 * | Null                 | null             |
 *
 */
function valueFromASTUntyped(valueNode, variables) {
  switch (valueNode.kind) {
    case Kind.NULL:
      return null;

    case Kind.INT:
      return parseInt(valueNode.value, 10);

    case Kind.FLOAT:
      return parseFloat(valueNode.value);

    case Kind.STRING:
    case Kind.ENUM:
    case Kind.BOOLEAN:
      return valueNode.value;

    case Kind.LIST:
      return valueNode.values.map(function (node) {
        return valueFromASTUntyped(node, variables);
      });

    case Kind.OBJECT:
      return keyValMap(valueNode.fields, function (field) {
        return field.name.value;
      }, function (field) {
        return valueFromASTUntyped(field.value, variables);
      });

    case Kind.VARIABLE:
      {
        var variableName = valueNode.name.value;
        return variables && !isInvalid(variables[variableName]) ? variables[variableName] : undefined;
      }
  } // Not reachable. All possible value nodes have been considered.


  /* istanbul ignore next */
  invariant(false, 'Unexpected value node: ' + inspect(valueNode));
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function isType(type) {
  return isScalarType(type) || isObjectType(type) || isInterfaceType(type) || isUnionType(type) || isEnumType(type) || isInputObjectType(type) || isListType(type) || isNonNullType(type);
}
function assertType(type) {
  if (!isType(type)) {
    throw new Error("Expected ".concat(inspect(type), " to be a GraphQL type."));
  }

  return type;
}
/**
 * There are predicates for each kind of GraphQL type.
 */

// eslint-disable-next-line no-redeclare
function isScalarType(type) {
  return instanceOf(type, GraphQLScalarType);
}
function assertScalarType(type) {
  if (!isScalarType(type)) {
    throw new Error("Expected ".concat(inspect(type), " to be a GraphQL Scalar type."));
  }

  return type;
}
// eslint-disable-next-line no-redeclare
function isObjectType(type) {
  return instanceOf(type, GraphQLObjectType);
}
function assertObjectType(type) {
  if (!isObjectType(type)) {
    throw new Error("Expected ".concat(inspect(type), " to be a GraphQL Object type."));
  }

  return type;
}
// eslint-disable-next-line no-redeclare
function isInterfaceType(type) {
  return instanceOf(type, GraphQLInterfaceType);
}
function assertInterfaceType(type) {
  if (!isInterfaceType(type)) {
    throw new Error("Expected ".concat(inspect(type), " to be a GraphQL Interface type."));
  }

  return type;
}
// eslint-disable-next-line no-redeclare
function isUnionType(type) {
  return instanceOf(type, GraphQLUnionType);
}
function assertUnionType(type) {
  if (!isUnionType(type)) {
    throw new Error("Expected ".concat(inspect(type), " to be a GraphQL Union type."));
  }

  return type;
}
// eslint-disable-next-line no-redeclare
function isEnumType(type) {
  return instanceOf(type, GraphQLEnumType);
}
function assertEnumType(type) {
  if (!isEnumType(type)) {
    throw new Error("Expected ".concat(inspect(type), " to be a GraphQL Enum type."));
  }

  return type;
}
// eslint-disable-next-line no-redeclare
function isInputObjectType(type) {
  return instanceOf(type, GraphQLInputObjectType);
}
function assertInputObjectType(type) {
  if (!isInputObjectType(type)) {
    throw new Error("Expected ".concat(inspect(type), " to be a GraphQL Input Object type."));
  }

  return type;
}
// eslint-disable-next-line no-redeclare
function isListType(type) {
  return instanceOf(type, GraphQLList);
}
function assertListType(type) {
  if (!isListType(type)) {
    throw new Error("Expected ".concat(inspect(type), " to be a GraphQL List type."));
  }

  return type;
}
// eslint-disable-next-line no-redeclare
function isNonNullType(type) {
  return instanceOf(type, GraphQLNonNull);
}
function assertNonNullType(type) {
  if (!isNonNullType(type)) {
    throw new Error("Expected ".concat(inspect(type), " to be a GraphQL Non-Null type."));
  }

  return type;
}
/**
 * These types may be used as input types for arguments and directives.
 */

function isInputType(type) {
  return isScalarType(type) || isEnumType(type) || isInputObjectType(type) || isWrappingType(type) && isInputType(type.ofType);
}
function assertInputType(type) {
  if (!isInputType(type)) {
    throw new Error("Expected ".concat(inspect(type), " to be a GraphQL input type."));
  }

  return type;
}
/**
 * These types may be used as output types as the result of fields.
 */

function isOutputType(type) {
  return isScalarType(type) || isObjectType(type) || isInterfaceType(type) || isUnionType(type) || isEnumType(type) || isWrappingType(type) && isOutputType(type.ofType);
}
function assertOutputType(type) {
  if (!isOutputType(type)) {
    throw new Error("Expected ".concat(inspect(type), " to be a GraphQL output type."));
  }

  return type;
}
/**
 * These types may describe types which may be leaf values.
 */

function isLeafType(type) {
  return isScalarType(type) || isEnumType(type);
}
function assertLeafType(type) {
  if (!isLeafType(type)) {
    throw new Error("Expected ".concat(inspect(type), " to be a GraphQL leaf type."));
  }

  return type;
}
/**
 * These types may describe the parent context of a selection set.
 */

function isCompositeType(type) {
  return isObjectType(type) || isInterfaceType(type) || isUnionType(type);
}
function assertCompositeType(type) {
  if (!isCompositeType(type)) {
    throw new Error("Expected ".concat(inspect(type), " to be a GraphQL composite type."));
  }

  return type;
}
/**
 * These types may describe the parent context of a selection set.
 */

function isAbstractType(type) {
  return isInterfaceType(type) || isUnionType(type);
}
function assertAbstractType(type) {
  if (!isAbstractType(type)) {
    throw new Error("Expected ".concat(inspect(type), " to be a GraphQL abstract type."));
  }

  return type;
}
/**
 * List Type Wrapper
 *
 * A list is a wrapping type which points to another type.
 * Lists are often created within the context of defining the fields of
 * an object type.
 *
 * Example:
 *
 *     const PersonType = new GraphQLObjectType({
 *       name: 'Person',
 *       fields: () => ({
 *         parents: { type: GraphQLList(PersonType) },
 *         children: { type: GraphQLList(PersonType) },
 *       })
 *     })
 *
 */

// eslint-disable-next-line no-redeclare
function GraphQLList(ofType) {
  if (this instanceof GraphQLList) {
    this.ofType = assertType(ofType);
  } else {
    return new GraphQLList(ofType);
  }
} // Need to cast through any to alter the prototype.

GraphQLList.prototype.toString = function toString() {
  return '[' + String(this.ofType) + ']';
}; // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported


defineToStringTag(GraphQLList);
defineToJSON(GraphQLList);
/**
 * Non-Null Type Wrapper
 *
 * A non-null is a wrapping type which points to another type.
 * Non-null types enforce that their values are never null and can ensure
 * an error is raised if this ever occurs during a request. It is useful for
 * fields which you can make a strong guarantee on non-nullability, for example
 * usually the id field of a database row will never be null.
 *
 * Example:
 *
 *     const RowType = new GraphQLObjectType({
 *       name: 'Row',
 *       fields: () => ({
 *         id: { type: GraphQLNonNull(GraphQLString) },
 *       })
 *     })
 *
 * Note: the enforcement of non-nullability occurs within the executor.
 */

// eslint-disable-next-line no-redeclare
function GraphQLNonNull(ofType) {
  if (this instanceof GraphQLNonNull) {
    this.ofType = assertNullableType(ofType);
  } else {
    return new GraphQLNonNull(ofType);
  }
} // Need to cast through any to alter the prototype.

GraphQLNonNull.prototype.toString = function toString() {
  return String(this.ofType) + '!';
}; // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported


defineToStringTag(GraphQLNonNull);
defineToJSON(GraphQLNonNull);
/**
 * These types wrap and modify other types
 */

function isWrappingType(type) {
  return isListType(type) || isNonNullType(type);
}
function assertWrappingType(type) {
  if (!isWrappingType(type)) {
    throw new Error("Expected ".concat(inspect(type), " to be a GraphQL wrapping type."));
  }

  return type;
}
/**
 * These types can all accept null as a value.
 */

function isNullableType(type) {
  return isType(type) && !isNonNullType(type);
}
function assertNullableType(type) {
  if (!isNullableType(type)) {
    throw new Error("Expected ".concat(inspect(type), " to be a GraphQL nullable type."));
  }

  return type;
}
/* eslint-disable no-redeclare */

function getNullableType(type) {
  /* eslint-enable no-redeclare */
  if (type) {
    return isNonNullType(type) ? type.ofType : type;
  }
}
/**
 * These named types do not include modifiers like List or NonNull.
 */

function isNamedType(type) {
  return isScalarType(type) || isObjectType(type) || isInterfaceType(type) || isUnionType(type) || isEnumType(type) || isInputObjectType(type);
}
function assertNamedType(type) {
  if (!isNamedType(type)) {
    throw new Error("Expected ".concat(inspect(type), " to be a GraphQL named type."));
  }

  return type;
}
/* eslint-disable no-redeclare */

function getNamedType(type) {
  /* eslint-enable no-redeclare */
  if (type) {
    var unwrappedType = type;

    while (isWrappingType(unwrappedType)) {
      unwrappedType = unwrappedType.ofType;
    }

    return unwrappedType;
  }
}
/**
 * Used while defining GraphQL types to allow for circular references in
 * otherwise immutable type definitions.
 */

function resolveThunk(thunk) {
  // $FlowFixMe(>=0.90.0)
  return typeof thunk === 'function' ? thunk() : thunk;
}

function undefineIfEmpty(arr) {
  return arr && arr.length > 0 ? arr : undefined;
}
/**
 * Scalar Type Definition
 *
 * The leaf values of any request and input values to arguments are
 * Scalars (or Enums) and are defined with a name and a series of functions
 * used to parse input from ast or variables and to ensure validity.
 *
 * If a type's serialize function does not return a value (i.e. it returns
 * `undefined`) then an error will be raised and a `null` value will be returned
 * in the response. If the serialize function returns `null`, then no error will
 * be included in the response.
 *
 * Example:
 *
 *     const OddType = new GraphQLScalarType({
 *       name: 'Odd',
 *       serialize(value) {
 *         if (value % 2 === 1) {
 *           return value;
 *         }
 *       }
 *     });
 *
 */


var GraphQLScalarType =
/*#__PURE__*/
function () {
  function GraphQLScalarType(config) {
    var parseValue = config.parseValue || identityFunc;
    this.name = config.name;
    this.description = config.description;
    this.serialize = config.serialize || identityFunc;
    this.parseValue = parseValue;

    this.parseLiteral = config.parseLiteral || function (node) {
      return parseValue(valueFromASTUntyped(node));
    };

    this.extensions = config.extensions && toObjMap(config.extensions);
    this.astNode = config.astNode;
    this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
    typeof config.name === 'string' || devAssert(0, 'Must provide name.');
    config.serialize == null || typeof config.serialize === 'function' || devAssert(0, "".concat(this.name, " must provide \"serialize\" function. If this custom Scalar is also used as an input type, ensure \"parseValue\" and \"parseLiteral\" functions are also provided."));

    if (config.parseLiteral) {
      typeof config.parseValue === 'function' && typeof config.parseLiteral === 'function' || devAssert(0, "".concat(this.name, " must provide both \"parseValue\" and \"parseLiteral\" functions."));
    }
  }

  var _proto = GraphQLScalarType.prototype;

  _proto.toConfig = function toConfig() {
    return {
      name: this.name,
      description: this.description,
      serialize: this.serialize,
      parseValue: this.parseValue,
      parseLiteral: this.parseLiteral,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes || []
    };
  };

  _proto.toString = function toString() {
    return this.name;
  };

  return GraphQLScalarType;
}(); // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported

defineToStringTag(GraphQLScalarType);
defineToJSON(GraphQLScalarType);

/**
 * Object Type Definition
 *
 * Almost all of the GraphQL types you define will be object types. Object types
 * have a name, but most importantly describe their fields.
 *
 * Example:
 *
 *     const AddressType = new GraphQLObjectType({
 *       name: 'Address',
 *       fields: {
 *         street: { type: GraphQLString },
 *         number: { type: GraphQLInt },
 *         formatted: {
 *           type: GraphQLString,
 *           resolve(obj) {
 *             return obj.number + ' ' + obj.street
 *           }
 *         }
 *       }
 *     });
 *
 * When two types need to refer to each other, or a type needs to refer to
 * itself in a field, you can use a function expression (aka a closure or a
 * thunk) to supply the fields lazily.
 *
 * Example:
 *
 *     const PersonType = new GraphQLObjectType({
 *       name: 'Person',
 *       fields: () => ({
 *         name: { type: GraphQLString },
 *         bestFriend: { type: PersonType },
 *       })
 *     });
 *
 */
var GraphQLObjectType =
/*#__PURE__*/
function () {
  function GraphQLObjectType(config) {
    this.name = config.name;
    this.description = config.description;
    this.isTypeOf = config.isTypeOf;
    this.extensions = config.extensions && toObjMap(config.extensions);
    this.astNode = config.astNode;
    this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
    this._fields = defineFieldMap.bind(undefined, config);
    this._interfaces = defineInterfaces.bind(undefined, config);
    typeof config.name === 'string' || devAssert(0, 'Must provide name.');
    config.isTypeOf == null || typeof config.isTypeOf === 'function' || devAssert(0, "".concat(this.name, " must provide \"isTypeOf\" as a function, ") + "but got: ".concat(inspect(config.isTypeOf), "."));
  }

  var _proto2 = GraphQLObjectType.prototype;

  _proto2.getFields = function getFields() {
    if (typeof this._fields === 'function') {
      this._fields = this._fields();
    }

    return this._fields;
  };

  _proto2.getInterfaces = function getInterfaces() {
    if (typeof this._interfaces === 'function') {
      this._interfaces = this._interfaces();
    }

    return this._interfaces;
  };

  _proto2.toConfig = function toConfig() {
    return {
      name: this.name,
      description: this.description,
      interfaces: this.getInterfaces(),
      fields: fieldsToFieldsConfig(this.getFields()),
      isTypeOf: this.isTypeOf,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes || []
    };
  };

  _proto2.toString = function toString() {
    return this.name;
  };

  return GraphQLObjectType;
}(); // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported

defineToStringTag(GraphQLObjectType);
defineToJSON(GraphQLObjectType);

function defineInterfaces(config) {
  var interfaces = resolveThunk(config.interfaces) || [];
  Array.isArray(interfaces) || devAssert(0, "".concat(config.name, " interfaces must be an Array or a function which returns an Array."));
  return interfaces;
}

function defineFieldMap(config) {
  var fieldMap = resolveThunk(config.fields) || {};
  isPlainObj(fieldMap) || devAssert(0, "".concat(config.name, " fields must be an object with field names as keys or a function which returns such an object."));
  return mapValue(fieldMap, function (fieldConfig, fieldName) {
    isPlainObj(fieldConfig) || devAssert(0, "".concat(config.name, ".").concat(fieldName, " field config must be an object"));
    !('isDeprecated' in fieldConfig) || devAssert(0, "".concat(config.name, ".").concat(fieldName, " should provide \"deprecationReason\" instead of \"isDeprecated\"."));
    fieldConfig.resolve == null || typeof fieldConfig.resolve === 'function' || devAssert(0, "".concat(config.name, ".").concat(fieldName, " field resolver must be a function if ") + "provided, but got: ".concat(inspect(fieldConfig.resolve), "."));
    var argsConfig = fieldConfig.args || {};
    isPlainObj(argsConfig) || devAssert(0, "".concat(config.name, ".").concat(fieldName, " args must be an object with argument names as keys."));
    var args = objectEntries(argsConfig).map(function (_ref) {
      var argName = _ref[0],
          arg = _ref[1];
      return {
        name: argName,
        description: arg.description === undefined ? null : arg.description,
        type: arg.type,
        defaultValue: arg.defaultValue,
        extensions: arg.extensions && toObjMap(arg.extensions),
        astNode: arg.astNode
      };
    });
    return _objectSpread({}, fieldConfig, {
      name: fieldName,
      description: fieldConfig.description,
      type: fieldConfig.type,
      args: args,
      resolve: fieldConfig.resolve,
      subscribe: fieldConfig.subscribe,
      isDeprecated: Boolean(fieldConfig.deprecationReason),
      deprecationReason: fieldConfig.deprecationReason,
      extensions: fieldConfig.extensions && toObjMap(fieldConfig.extensions),
      astNode: fieldConfig.astNode
    });
  });
}

function isPlainObj(obj) {
  return isObjectLike(obj) && !Array.isArray(obj);
}

function fieldsToFieldsConfig(fields) {
  return mapValue(fields, function (field) {
    return {
      description: field.description,
      type: field.type,
      args: argsToArgsConfig(field.args),
      resolve: field.resolve,
      subscribe: field.subscribe,
      deprecationReason: field.deprecationReason,
      extensions: field.extensions,
      astNode: field.astNode
    };
  });
}

function argsToArgsConfig(args) {
  return keyValMap(args, function (arg) {
    return arg.name;
  }, function (arg) {
    return {
      description: arg.description,
      type: arg.type,
      defaultValue: arg.defaultValue,
      extensions: arg.extensions,
      astNode: arg.astNode
    };
  });
}
function isRequiredArgument(arg) {
  return isNonNullType(arg.type) && arg.defaultValue === undefined;
}

/**
 * Interface Type Definition
 *
 * When a field can return one of a heterogeneous set of types, a Interface type
 * is used to describe what types are possible, what fields are in common across
 * all types, as well as a function to determine which type is actually used
 * when the field is resolved.
 *
 * Example:
 *
 *     const EntityType = new GraphQLInterfaceType({
 *       name: 'Entity',
 *       fields: {
 *         name: { type: GraphQLString }
 *       }
 *     });
 *
 */
var GraphQLInterfaceType =
/*#__PURE__*/
function () {
  function GraphQLInterfaceType(config) {
    this.name = config.name;
    this.description = config.description;
    this.resolveType = config.resolveType;
    this.extensions = config.extensions && toObjMap(config.extensions);
    this.astNode = config.astNode;
    this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
    this._fields = defineFieldMap.bind(undefined, config);
    typeof config.name === 'string' || devAssert(0, 'Must provide name.');
    config.resolveType == null || typeof config.resolveType === 'function' || devAssert(0, "".concat(this.name, " must provide \"resolveType\" as a function, ") + "but got: ".concat(inspect(config.resolveType), "."));
  }

  var _proto3 = GraphQLInterfaceType.prototype;

  _proto3.getFields = function getFields() {
    if (typeof this._fields === 'function') {
      this._fields = this._fields();
    }

    return this._fields;
  };

  _proto3.toConfig = function toConfig() {
    return {
      name: this.name,
      description: this.description,
      fields: fieldsToFieldsConfig(this.getFields()),
      resolveType: this.resolveType,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes || []
    };
  };

  _proto3.toString = function toString() {
    return this.name;
  };

  return GraphQLInterfaceType;
}(); // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported

defineToStringTag(GraphQLInterfaceType);
defineToJSON(GraphQLInterfaceType);

/**
 * Union Type Definition
 *
 * When a field can return one of a heterogeneous set of types, a Union type
 * is used to describe what types are possible as well as providing a function
 * to determine which type is actually used when the field is resolved.
 *
 * Example:
 *
 *     const PetType = new GraphQLUnionType({
 *       name: 'Pet',
 *       types: [ DogType, CatType ],
 *       resolveType(value) {
 *         if (value instanceof Dog) {
 *           return DogType;
 *         }
 *         if (value instanceof Cat) {
 *           return CatType;
 *         }
 *       }
 *     });
 *
 */
var GraphQLUnionType =
/*#__PURE__*/
function () {
  function GraphQLUnionType(config) {
    this.name = config.name;
    this.description = config.description;
    this.resolveType = config.resolveType;
    this.extensions = config.extensions && toObjMap(config.extensions);
    this.astNode = config.astNode;
    this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
    this._types = defineTypes.bind(undefined, config);
    typeof config.name === 'string' || devAssert(0, 'Must provide name.');
    config.resolveType == null || typeof config.resolveType === 'function' || devAssert(0, "".concat(this.name, " must provide \"resolveType\" as a function, ") + "but got: ".concat(inspect(config.resolveType), "."));
  }

  var _proto4 = GraphQLUnionType.prototype;

  _proto4.getTypes = function getTypes() {
    if (typeof this._types === 'function') {
      this._types = this._types();
    }

    return this._types;
  };

  _proto4.toConfig = function toConfig() {
    return {
      name: this.name,
      description: this.description,
      types: this.getTypes(),
      resolveType: this.resolveType,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes || []
    };
  };

  _proto4.toString = function toString() {
    return this.name;
  };

  return GraphQLUnionType;
}(); // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported

defineToStringTag(GraphQLUnionType);
defineToJSON(GraphQLUnionType);

function defineTypes(config) {
  var types = resolveThunk(config.types) || [];
  Array.isArray(types) || devAssert(0, "Must provide Array of types or a function which returns such an array for Union ".concat(config.name, "."));
  return types;
}

/**
 * Enum Type Definition
 *
 * Some leaf values of requests and input values are Enums. GraphQL serializes
 * Enum values as strings, however internally Enums can be represented by any
 * kind of type, often integers.
 *
 * Example:
 *
 *     const RGBType = new GraphQLEnumType({
 *       name: 'RGB',
 *       values: {
 *         RED: { value: 0 },
 *         GREEN: { value: 1 },
 *         BLUE: { value: 2 }
 *       }
 *     });
 *
 * Note: If a value is not provided in a definition, the name of the enum value
 * will be used as its internal value.
 */
var GraphQLEnumType
/* <T> */
=
/*#__PURE__*/
function () {
  function GraphQLEnumType(config) {
    this.name = config.name;
    this.description = config.description;
    this.extensions = config.extensions && toObjMap(config.extensions);
    this.astNode = config.astNode;
    this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
    this._values = defineEnumValues(this.name, config.values);
    this._valueLookup = new Map(this._values.map(function (enumValue) {
      return [enumValue.value, enumValue];
    }));
    this._nameLookup = keyMap(this._values, function (value) {
      return value.name;
    });
    typeof config.name === 'string' || devAssert(0, 'Must provide name.');
  }

  var _proto5 = GraphQLEnumType.prototype;

  _proto5.getValues = function getValues() {
    return this._values;
  };

  _proto5.getValue = function getValue(name) {
    return this._nameLookup[name];
  };

  _proto5.serialize = function serialize(value) {
    var enumValue = this._valueLookup.get(value);

    if (enumValue) {
      return enumValue.name;
    }
  };

  _proto5.parseValue = function parseValue(value)
  /* T */
  {
    if (typeof value === 'string') {
      var enumValue = this.getValue(value);

      if (enumValue) {
        return enumValue.value;
      }
    }
  };

  _proto5.parseLiteral = function parseLiteral(valueNode, _variables)
  /* T */
  {
    // Note: variables will be resolved to a value before calling this function.
    if (valueNode.kind === Kind.ENUM) {
      var enumValue = this.getValue(valueNode.value);

      if (enumValue) {
        return enumValue.value;
      }
    }
  };

  _proto5.toConfig = function toConfig() {
    var values = keyValMap(this.getValues(), function (value) {
      return value.name;
    }, function (value) {
      return {
        description: value.description,
        value: value.value,
        deprecationReason: value.deprecationReason,
        extensions: value.extensions,
        astNode: value.astNode
      };
    });
    return {
      name: this.name,
      description: this.description,
      values: values,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes || []
    };
  };

  _proto5.toString = function toString() {
    return this.name;
  };

  return GraphQLEnumType;
}(); // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported

defineToStringTag(GraphQLEnumType);
defineToJSON(GraphQLEnumType);

function defineEnumValues(typeName, valueMap) {
  isPlainObj(valueMap) || devAssert(0, "".concat(typeName, " values must be an object with value names as keys."));
  return objectEntries(valueMap).map(function (_ref2) {
    var valueName = _ref2[0],
        value = _ref2[1];
    isPlainObj(value) || devAssert(0, "".concat(typeName, ".").concat(valueName, " must refer to an object with a \"value\" key ") + "representing an internal value but got: ".concat(inspect(value), "."));
    !('isDeprecated' in value) || devAssert(0, "".concat(typeName, ".").concat(valueName, " should provide \"deprecationReason\" instead of \"isDeprecated\"."));
    return {
      name: valueName,
      description: value.description,
      value: 'value' in value ? value.value : valueName,
      isDeprecated: Boolean(value.deprecationReason),
      deprecationReason: value.deprecationReason,
      extensions: value.extensions && toObjMap(value.extensions),
      astNode: value.astNode
    };
  });
}

/**
 * Input Object Type Definition
 *
 * An input object defines a structured collection of fields which may be
 * supplied to a field argument.
 *
 * Using `NonNull` will ensure that a value must be provided by the query
 *
 * Example:
 *
 *     const GeoPoint = new GraphQLInputObjectType({
 *       name: 'GeoPoint',
 *       fields: {
 *         lat: { type: GraphQLNonNull(GraphQLFloat) },
 *         lon: { type: GraphQLNonNull(GraphQLFloat) },
 *         alt: { type: GraphQLFloat, defaultValue: 0 },
 *       }
 *     });
 *
 */
var GraphQLInputObjectType =
/*#__PURE__*/
function () {
  function GraphQLInputObjectType(config) {
    this.name = config.name;
    this.description = config.description;
    this.extensions = config.extensions && toObjMap(config.extensions);
    this.astNode = config.astNode;
    this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
    this._fields = defineInputFieldMap.bind(undefined, config);
    typeof config.name === 'string' || devAssert(0, 'Must provide name.');
  }

  var _proto6 = GraphQLInputObjectType.prototype;

  _proto6.getFields = function getFields() {
    if (typeof this._fields === 'function') {
      this._fields = this._fields();
    }

    return this._fields;
  };

  _proto6.toConfig = function toConfig() {
    var fields = mapValue(this.getFields(), function (field) {
      return {
        description: field.description,
        type: field.type,
        defaultValue: field.defaultValue,
        extensions: field.extensions,
        astNode: field.astNode
      };
    });
    return {
      name: this.name,
      description: this.description,
      fields: fields,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes || []
    };
  };

  _proto6.toString = function toString() {
    return this.name;
  };

  return GraphQLInputObjectType;
}(); // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported

defineToStringTag(GraphQLInputObjectType);
defineToJSON(GraphQLInputObjectType);

function defineInputFieldMap(config) {
  var fieldMap = resolveThunk(config.fields) || {};
  isPlainObj(fieldMap) || devAssert(0, "".concat(config.name, " fields must be an object with field names as keys or a function which returns such an object."));
  return mapValue(fieldMap, function (fieldConfig, fieldName) {
    !('resolve' in fieldConfig) || devAssert(0, "".concat(config.name, ".").concat(fieldName, " field has a resolve property, but Input Types cannot define resolvers."));
    return _objectSpread({}, fieldConfig, {
      name: fieldName,
      description: fieldConfig.description,
      type: fieldConfig.type,
      defaultValue: fieldConfig.defaultValue,
      extensions: fieldConfig.extensions && toObjMap(fieldConfig.extensions),
      astNode: fieldConfig.astNode
    });
  });
}

function isRequiredInputField(field) {
  return isNonNullType(field.type) && field.defaultValue === undefined;
}

/**
 * Provided two types, return true if the types are equal (invariant).
 */

function isEqualType(typeA, typeB) {
  // Equivalent types are equal.
  if (typeA === typeB) {
    return true;
  } // If either type is non-null, the other must also be non-null.


  if (isNonNullType(typeA) && isNonNullType(typeB)) {
    return isEqualType(typeA.ofType, typeB.ofType);
  } // If either type is a list, the other must also be a list.


  if (isListType(typeA) && isListType(typeB)) {
    return isEqualType(typeA.ofType, typeB.ofType);
  } // Otherwise the types are not equal.


  return false;
}
/**
 * Provided a type and a super type, return true if the first type is either
 * equal or a subset of the second super type (covariant).
 */

function isTypeSubTypeOf(schema, maybeSubType, superType) {
  // Equivalent type is a valid subtype
  if (maybeSubType === superType) {
    return true;
  } // If superType is non-null, maybeSubType must also be non-null.


  if (isNonNullType(superType)) {
    if (isNonNullType(maybeSubType)) {
      return isTypeSubTypeOf(schema, maybeSubType.ofType, superType.ofType);
    }

    return false;
  }

  if (isNonNullType(maybeSubType)) {
    // If superType is nullable, maybeSubType may be non-null or nullable.
    return isTypeSubTypeOf(schema, maybeSubType.ofType, superType);
  } // If superType type is a list, maybeSubType type must also be a list.


  if (isListType(superType)) {
    if (isListType(maybeSubType)) {
      return isTypeSubTypeOf(schema, maybeSubType.ofType, superType.ofType);
    }

    return false;
  }

  if (isListType(maybeSubType)) {
    // If superType is not a list, maybeSubType must also be not a list.
    return false;
  } // If superType type is an abstract type, maybeSubType type may be a currently
  // possible object type.


  if (isAbstractType(superType) && isObjectType(maybeSubType) && schema.isPossibleType(superType, maybeSubType)) {
    return true;
  } // Otherwise, the child type is not a valid subtype of the parent type.


  return false;
}
/**
 * Provided two composite types, determine if they "overlap". Two composite
 * types overlap when the Sets of possible concrete types for each intersect.
 *
 * This is often used to determine if a fragment of a given type could possibly
 * be visited in a context of another type.
 *
 * This function is commutative.
 */

function doTypesOverlap(schema, typeA, typeB) {
  // Equivalent types overlap
  if (typeA === typeB) {
    return true;
  }

  if (isAbstractType(typeA)) {
    if (isAbstractType(typeB)) {
      // If both types are abstract, then determine if there is any intersection
      // between possible concrete types of each.
      return schema.getPossibleTypes(typeA).some(function (type) {
        return schema.isPossibleType(typeB, type);
      });
    } // Determine if the latter type is a possible concrete type of the former.


    return schema.isPossibleType(typeA, typeB);
  }

  if (isAbstractType(typeB)) {
    // Determine if the former type is a possible concrete type of the latter.
    return schema.isPossibleType(typeB, typeA);
  } // Otherwise the types do not overlap.


  return false;
}

/**
 * The set of allowed directive location values.
 */
var DirectiveLocation = Object.freeze({
  // Request Definitions
  QUERY: 'QUERY',
  MUTATION: 'MUTATION',
  SUBSCRIPTION: 'SUBSCRIPTION',
  FIELD: 'FIELD',
  FRAGMENT_DEFINITION: 'FRAGMENT_DEFINITION',
  FRAGMENT_SPREAD: 'FRAGMENT_SPREAD',
  INLINE_FRAGMENT: 'INLINE_FRAGMENT',
  VARIABLE_DEFINITION: 'VARIABLE_DEFINITION',
  // Type System Definitions
  SCHEMA: 'SCHEMA',
  SCALAR: 'SCALAR',
  OBJECT: 'OBJECT',
  FIELD_DEFINITION: 'FIELD_DEFINITION',
  ARGUMENT_DEFINITION: 'ARGUMENT_DEFINITION',
  INTERFACE: 'INTERFACE',
  UNION: 'UNION',
  ENUM: 'ENUM',
  ENUM_VALUE: 'ENUM_VALUE',
  INPUT_OBJECT: 'INPUT_OBJECT',
  INPUT_FIELD_DEFINITION: 'INPUT_FIELD_DEFINITION'
});
/**
 * The enum type representing the directive location values.
 */

/* eslint-disable no-redeclare */
// $FlowFixMe workaround for: https://github.com/facebook/flow/issues/4441
var isFinitePolyfill = Number.isFinite || function (value) {
  return typeof value === 'number' && isFinite(value);
};

/* eslint-disable no-redeclare */
// $FlowFixMe workaround for: https://github.com/facebook/flow/issues/4441
var isInteger = Number.isInteger || function (value) {
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
};

// 32-bit signed integer, providing the broadest support across platforms.
//
// n.b. JavaScript's integers are safe between -(2^53 - 1) and 2^53 - 1 because
// they are internally represented as IEEE 754 doubles.

var MAX_INT = 2147483647;
var MIN_INT = -2147483648;

function serializeInt(value) {
  if (typeof value === 'boolean') {
    return value ? 1 : 0;
  }

  var num = value;

  if (typeof value === 'string' && value !== '') {
    num = Number(value);
  }

  if (!isInteger(num)) {
    throw new TypeError("Int cannot represent non-integer value: ".concat(inspect(value)));
  }

  if (num > MAX_INT || num < MIN_INT) {
    throw new TypeError("Int cannot represent non 32-bit signed integer value: ".concat(inspect(value)));
  }

  return num;
}

function coerceInt(value) {
  if (!isInteger(value)) {
    throw new TypeError("Int cannot represent non-integer value: ".concat(inspect(value)));
  }

  if (value > MAX_INT || value < MIN_INT) {
    throw new TypeError("Int cannot represent non 32-bit signed integer value: ".concat(inspect(value)));
  }

  return value;
}

var GraphQLInt = new GraphQLScalarType({
  name: 'Int',
  description: 'The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.',
  serialize: serializeInt,
  parseValue: coerceInt,
  parseLiteral: function parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      var num = parseInt(ast.value, 10);

      if (num <= MAX_INT && num >= MIN_INT) {
        return num;
      }
    }

    return undefined;
  }
});

function serializeFloat(value) {
  if (typeof value === 'boolean') {
    return value ? 1 : 0;
  }

  var num = value;

  if (typeof value === 'string' && value !== '') {
    num = Number(value);
  }

  if (!isFinitePolyfill(num)) {
    throw new TypeError("Float cannot represent non numeric value: ".concat(inspect(value)));
  }

  return num;
}

function coerceFloat(value) {
  if (!isFinitePolyfill(value)) {
    throw new TypeError("Float cannot represent non numeric value: ".concat(inspect(value)));
  }

  return value;
}

var GraphQLFloat = new GraphQLScalarType({
  name: 'Float',
  description: 'The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).',
  serialize: serializeFloat,
  parseValue: coerceFloat,
  parseLiteral: function parseLiteral(ast) {
    return ast.kind === Kind.FLOAT || ast.kind === Kind.INT ? parseFloat(ast.value) : undefined;
  }
}); // Support serializing objects with custom valueOf() or toJSON() functions -
// a common way to represent a complex value which can be represented as
// a string (ex: MongoDB id objects).

function serializeObject(value) {
  if (isObjectLike(value)) {
    if (typeof value.valueOf === 'function') {
      var valueOfResult = value.valueOf();

      if (!isObjectLike(valueOfResult)) {
        return valueOfResult;
      }
    }

    if (typeof value.toJSON === 'function') {
      // $FlowFixMe(>=0.90.0)
      return value.toJSON();
    }
  }

  return value;
}

function serializeString(rawValue) {
  var value = serializeObject(rawValue); // Serialize string, boolean and number values to a string, but do not
  // attempt to coerce object, function, symbol, or other types as strings.

  if (typeof value === 'string') {
    return value;
  }

  if (typeof value === 'boolean') {
    return value ? 'true' : 'false';
  }

  if (isFinitePolyfill(value)) {
    return value.toString();
  }

  throw new TypeError("String cannot represent value: ".concat(inspect(rawValue)));
}

function coerceString(value) {
  if (typeof value !== 'string') {
    throw new TypeError("String cannot represent a non string value: ".concat(inspect(value)));
  }

  return value;
}

var GraphQLString = new GraphQLScalarType({
  name: 'String',
  description: 'The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.',
  serialize: serializeString,
  parseValue: coerceString,
  parseLiteral: function parseLiteral(ast) {
    return ast.kind === Kind.STRING ? ast.value : undefined;
  }
});

function serializeBoolean(value) {
  if (typeof value === 'boolean') {
    return value;
  }

  if (isFinitePolyfill(value)) {
    return value !== 0;
  }

  throw new TypeError("Boolean cannot represent a non boolean value: ".concat(inspect(value)));
}

function coerceBoolean(value) {
  if (typeof value !== 'boolean') {
    throw new TypeError("Boolean cannot represent a non boolean value: ".concat(inspect(value)));
  }

  return value;
}

var GraphQLBoolean = new GraphQLScalarType({
  name: 'Boolean',
  description: 'The `Boolean` scalar type represents `true` or `false`.',
  serialize: serializeBoolean,
  parseValue: coerceBoolean,
  parseLiteral: function parseLiteral(ast) {
    return ast.kind === Kind.BOOLEAN ? ast.value : undefined;
  }
});

function serializeID(rawValue) {
  var value = serializeObject(rawValue);

  if (typeof value === 'string') {
    return value;
  }

  if (isInteger(value)) {
    return String(value);
  }

  throw new TypeError("ID cannot represent value: ".concat(inspect(rawValue)));
}

function coerceID(value) {
  if (typeof value === 'string') {
    return value;
  }

  if (isInteger(value)) {
    return value.toString();
  }

  throw new TypeError("ID cannot represent value: ".concat(inspect(value)));
}

var GraphQLID = new GraphQLScalarType({
  name: 'ID',
  description: 'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',
  serialize: serializeID,
  parseValue: coerceID,
  parseLiteral: function parseLiteral(ast) {
    return ast.kind === Kind.STRING || ast.kind === Kind.INT ? ast.value : undefined;
  }
});
var specifiedScalarTypes = Object.freeze([GraphQLString, GraphQLInt, GraphQLFloat, GraphQLBoolean, GraphQLID]);
function isSpecifiedScalarType(type) {
  return isScalarType(type) && specifiedScalarTypes.some(function (_ref) {
    var name = _ref.name;
    return type.name === name;
  });
}

/**
 * Test if the given value is a GraphQL directive.
 */

// eslint-disable-next-line no-redeclare
function isDirective(directive) {
  return instanceOf(directive, GraphQLDirective);
}
function assertDirective(directive) {
  if (!isDirective(directive)) {
    throw new Error("Expected ".concat(inspect(directive), " to be a GraphQL directive."));
  }

  return directive;
}
/**
 * Directives are used by the GraphQL runtime as a way of modifying execution
 * behavior. Type system creators will usually not create these directly.
 */

var GraphQLDirective =
/*#__PURE__*/
function () {
  function GraphQLDirective(config) {
    this.name = config.name;
    this.description = config.description;
    this.locations = config.locations;
    this.isRepeatable = config.isRepeatable != null && config.isRepeatable;
    this.extensions = config.extensions && toObjMap(config.extensions);
    this.astNode = config.astNode;
    config.name || devAssert(0, 'Directive must be named.');
    Array.isArray(config.locations) || devAssert(0, "@".concat(config.name, " locations must be an Array."));
    var args = config.args || {};
    isObjectLike(args) && !Array.isArray(args) || devAssert(0, "@".concat(config.name, " args must be an object with argument names as keys."));
    this.args = objectEntries(args).map(function (_ref) {
      var argName = _ref[0],
          arg = _ref[1];
      return {
        name: argName,
        description: arg.description === undefined ? null : arg.description,
        type: arg.type,
        defaultValue: arg.defaultValue,
        extensions: arg.extensions && toObjMap(arg.extensions),
        astNode: arg.astNode
      };
    });
  }

  var _proto = GraphQLDirective.prototype;

  _proto.toString = function toString() {
    return '@' + this.name;
  };

  _proto.toConfig = function toConfig() {
    return {
      name: this.name,
      description: this.description,
      locations: this.locations,
      args: argsToArgsConfig(this.args),
      isRepeatable: this.isRepeatable,
      extensions: this.extensions,
      astNode: this.astNode
    };
  };

  return GraphQLDirective;
}(); // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported

defineToStringTag(GraphQLDirective);
defineToJSON(GraphQLDirective);

/**
 * Used to conditionally include fields or fragments.
 */
var GraphQLIncludeDirective = new GraphQLDirective({
  name: 'include',
  description: 'Directs the executor to include this field or fragment only when the `if` argument is true.',
  locations: [DirectiveLocation.FIELD, DirectiveLocation.FRAGMENT_SPREAD, DirectiveLocation.INLINE_FRAGMENT],
  args: {
    if: {
      type: GraphQLNonNull(GraphQLBoolean),
      description: 'Included when true.'
    }
  }
});
/**
 * Used to conditionally skip (exclude) fields or fragments.
 */

var GraphQLSkipDirective = new GraphQLDirective({
  name: 'skip',
  description: 'Directs the executor to skip this field or fragment when the `if` argument is true.',
  locations: [DirectiveLocation.FIELD, DirectiveLocation.FRAGMENT_SPREAD, DirectiveLocation.INLINE_FRAGMENT],
  args: {
    if: {
      type: GraphQLNonNull(GraphQLBoolean),
      description: 'Skipped when true.'
    }
  }
});
/**
 * Constant string used for default reason for a deprecation.
 */

var DEFAULT_DEPRECATION_REASON = 'No longer supported';
/**
 * Used to declare element of a GraphQL schema as deprecated.
 */

var GraphQLDeprecatedDirective = new GraphQLDirective({
  name: 'deprecated',
  description: 'Marks an element of a GraphQL schema as no longer supported.',
  locations: [DirectiveLocation.FIELD_DEFINITION, DirectiveLocation.ENUM_VALUE],
  args: {
    reason: {
      type: GraphQLString,
      description: 'Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax (as specified by [CommonMark](https://commonmark.org/).',
      defaultValue: DEFAULT_DEPRECATION_REASON
    }
  }
});
/**
 * The full list of specified directives.
 */

var specifiedDirectives = Object.freeze([GraphQLIncludeDirective, GraphQLSkipDirective, GraphQLDeprecatedDirective]);
function isSpecifiedDirective(directive) {
  return isDirective(directive) && specifiedDirectives.some(function (_ref2) {
    var name = _ref2.name;
    return name === directive.name;
  });
}

var QueryDocumentKeys = {
  Name: [],
  Document: ['definitions'],
  OperationDefinition: ['name', 'variableDefinitions', 'directives', 'selectionSet'],
  VariableDefinition: ['variable', 'type', 'defaultValue', 'directives'],
  Variable: ['name'],
  SelectionSet: ['selections'],
  Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
  Argument: ['name', 'value'],
  FragmentSpread: ['name', 'directives'],
  InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
  FragmentDefinition: ['name', // Note: fragment variable definitions are experimental and may be changed
  // or removed in the future.
  'variableDefinitions', 'typeCondition', 'directives', 'selectionSet'],
  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ['values'],
  ObjectValue: ['fields'],
  ObjectField: ['name', 'value'],
  Directive: ['name', 'arguments'],
  NamedType: ['name'],
  ListType: ['type'],
  NonNullType: ['type'],
  SchemaDefinition: ['directives', 'operationTypes'],
  OperationTypeDefinition: ['type'],
  ScalarTypeDefinition: ['description', 'name', 'directives'],
  ObjectTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
  FieldDefinition: ['description', 'name', 'arguments', 'type', 'directives'],
  InputValueDefinition: ['description', 'name', 'type', 'defaultValue', 'directives'],
  InterfaceTypeDefinition: ['description', 'name', 'directives', 'fields'],
  UnionTypeDefinition: ['description', 'name', 'directives', 'types'],
  EnumTypeDefinition: ['description', 'name', 'directives', 'values'],
  EnumValueDefinition: ['description', 'name', 'directives'],
  InputObjectTypeDefinition: ['description', 'name', 'directives', 'fields'],
  DirectiveDefinition: ['description', 'name', 'arguments', 'locations'],
  SchemaExtension: ['directives', 'operationTypes'],
  ScalarTypeExtension: ['name', 'directives'],
  ObjectTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
  InterfaceTypeExtension: ['name', 'directives', 'fields'],
  UnionTypeExtension: ['name', 'directives', 'types'],
  EnumTypeExtension: ['name', 'directives', 'values'],
  InputObjectTypeExtension: ['name', 'directives', 'fields']
};
var BREAK = Object.freeze({});
/**
 * visit() will walk through an AST using a depth first traversal, calling
 * the visitor's enter function at each node in the traversal, and calling the
 * leave function after visiting that node and all of its child nodes.
 *
 * By returning different values from the enter and leave functions, the
 * behavior of the visitor can be altered, including skipping over a sub-tree of
 * the AST (by returning false), editing the AST by returning a value or null
 * to remove the value, or to stop the whole traversal by returning BREAK.
 *
 * When using visit() to edit an AST, the original AST will not be modified, and
 * a new version of the AST with the changes applied will be returned from the
 * visit function.
 *
 *     const editedAST = visit(ast, {
 *       enter(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: skip visiting this node
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       },
 *       leave(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: no action
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       }
 *     });
 *
 * Alternatively to providing enter() and leave() functions, a visitor can
 * instead provide functions named the same as the kinds of AST nodes, or
 * enter/leave visitors at a named key, leading to four permutations of
 * visitor API:
 *
 * 1) Named visitors triggered when entering a node a specific kind.
 *
 *     visit(ast, {
 *       Kind(node) {
 *         // enter the "Kind" node
 *       }
 *     })
 *
 * 2) Named visitors that trigger upon entering and leaving a node of
 *    a specific kind.
 *
 *     visit(ast, {
 *       Kind: {
 *         enter(node) {
 *           // enter the "Kind" node
 *         }
 *         leave(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 *
 * 3) Generic visitors that trigger upon entering and leaving any node.
 *
 *     visit(ast, {
 *       enter(node) {
 *         // enter any node
 *       },
 *       leave(node) {
 *         // leave any node
 *       }
 *     })
 *
 * 4) Parallel visitors for entering and leaving nodes of a specific kind.
 *
 *     visit(ast, {
 *       enter: {
 *         Kind(node) {
 *           // enter the "Kind" node
 *         }
 *       },
 *       leave: {
 *         Kind(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 */

function visit(root, visitor) {
  var visitorKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : QueryDocumentKeys;

  /* eslint-disable no-undef-init */
  var stack = undefined;
  var inArray = Array.isArray(root);
  var keys = [root];
  var index = -1;
  var edits = [];
  var node = undefined;
  var key = undefined;
  var parent = undefined;
  var path = [];
  var ancestors = [];
  var newRoot = root;
  /* eslint-enable no-undef-init */

  do {
    index++;
    var isLeaving = index === keys.length;
    var isEdited = isLeaving && edits.length !== 0;

    if (isLeaving) {
      key = ancestors.length === 0 ? undefined : path[path.length - 1];
      node = parent;
      parent = ancestors.pop();

      if (isEdited) {
        if (inArray) {
          node = node.slice();
        } else {
          var clone = {};

          for (var _i2 = 0, _Object$keys2 = Object.keys(node); _i2 < _Object$keys2.length; _i2++) {
            var k = _Object$keys2[_i2];
            clone[k] = node[k];
          }

          node = clone;
        }

        var editOffset = 0;

        for (var ii = 0; ii < edits.length; ii++) {
          var editKey = edits[ii][0];
          var editValue = edits[ii][1];

          if (inArray) {
            editKey -= editOffset;
          }

          if (inArray && editValue === null) {
            node.splice(editKey, 1);
            editOffset++;
          } else {
            node[editKey] = editValue;
          }
        }
      }

      index = stack.index;
      keys = stack.keys;
      edits = stack.edits;
      inArray = stack.inArray;
      stack = stack.prev;
    } else {
      key = parent ? inArray ? index : keys[index] : undefined;
      node = parent ? parent[key] : newRoot;

      if (node === null || node === undefined) {
        continue;
      }

      if (parent) {
        path.push(key);
      }
    }

    var result = void 0;

    if (!Array.isArray(node)) {
      if (!isNode(node)) {
        throw new Error('Invalid AST Node: ' + inspect(node));
      }

      var visitFn = getVisitFn(visitor, node.kind, isLeaving);

      if (visitFn) {
        result = visitFn.call(visitor, node, key, parent, path, ancestors);

        if (result === BREAK) {
          break;
        }

        if (result === false) {
          if (!isLeaving) {
            path.pop();
            continue;
          }
        } else if (result !== undefined) {
          edits.push([key, result]);

          if (!isLeaving) {
            if (isNode(result)) {
              node = result;
            } else {
              path.pop();
              continue;
            }
          }
        }
      }
    }

    if (result === undefined && isEdited) {
      edits.push([key, node]);
    }

    if (isLeaving) {
      path.pop();
    } else {
      stack = {
        inArray: inArray,
        index: index,
        keys: keys,
        edits: edits,
        prev: stack
      };
      inArray = Array.isArray(node);
      keys = inArray ? node : visitorKeys[node.kind] || [];
      index = -1;
      edits = [];

      if (parent) {
        ancestors.push(parent);
      }

      parent = node;
    }
  } while (stack !== undefined);

  if (edits.length !== 0) {
    newRoot = edits[edits.length - 1][1];
  }

  return newRoot;
}

function isNode(maybeNode) {
  return Boolean(maybeNode && typeof maybeNode.kind === 'string');
}
/**
 * Creates a new visitor instance which delegates to many visitors to run in
 * parallel. Each visitor will be visited for each node before moving on.
 *
 * If a prior visitor edits a node, no following visitors will see that node.
 */


function visitInParallel(visitors) {
  var skipping = new Array(visitors.length);
  return {
    enter: function enter(node) {
      for (var i = 0; i < visitors.length; i++) {
        if (!skipping[i]) {
          var fn = getVisitFn(visitors[i], node.kind,
          /* isLeaving */
          false);

          if (fn) {
            var result = fn.apply(visitors[i], arguments);

            if (result === false) {
              skipping[i] = node;
            } else if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined) {
              return result;
            }
          }
        }
      }
    },
    leave: function leave(node) {
      for (var i = 0; i < visitors.length; i++) {
        if (!skipping[i]) {
          var fn = getVisitFn(visitors[i], node.kind,
          /* isLeaving */
          true);

          if (fn) {
            var result = fn.apply(visitors[i], arguments);

            if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined && result !== false) {
              return result;
            }
          }
        } else if (skipping[i] === node) {
          skipping[i] = null;
        }
      }
    }
  };
}
/**
 * Creates a new visitor instance which maintains a provided TypeInfo instance
 * along with visiting visitor.
 */

function visitWithTypeInfo(typeInfo, visitor) {
  return {
    enter: function enter(node) {
      typeInfo.enter(node);
      var fn = getVisitFn(visitor, node.kind,
      /* isLeaving */
      false);

      if (fn) {
        var result = fn.apply(visitor, arguments);

        if (result !== undefined) {
          typeInfo.leave(node);

          if (isNode(result)) {
            typeInfo.enter(result);
          }
        }

        return result;
      }
    },
    leave: function leave(node) {
      var fn = getVisitFn(visitor, node.kind,
      /* isLeaving */
      true);
      var result;

      if (fn) {
        result = fn.apply(visitor, arguments);
      }

      typeInfo.leave(node);
      return result;
    }
  };
}
/**
 * Given a visitor instance, if it is leaving or not, and a node kind, return
 * the function the visitor runtime should call.
 */

function getVisitFn(visitor, kind, isLeaving) {
  var kindVisitor = visitor[kind];

  if (kindVisitor) {
    if (!isLeaving && typeof kindVisitor === 'function') {
      // { Kind() {} }
      return kindVisitor;
    }

    var kindSpecificVisitor = isLeaving ? kindVisitor.leave : kindVisitor.enter;

    if (typeof kindSpecificVisitor === 'function') {
      // { Kind: { enter() {}, leave() {} } }
      return kindSpecificVisitor;
    }
  } else {
    var specificVisitor = isLeaving ? visitor.leave : visitor.enter;

    if (specificVisitor) {
      if (typeof specificVisitor === 'function') {
        // { enter() {}, leave() {} }
        return specificVisitor;
      }

      var specificKindVisitor = specificVisitor[kind];

      if (typeof specificKindVisitor === 'function') {
        // { enter: { Kind() {} }, leave: { Kind() {} } }
        return specificKindVisitor;
      }
    }
  }
}

/**
 * Produces the value of a block string from its parsed raw value, similar to
 * CoffeeScript's block string, Python's docstring trim or Ruby's strip_heredoc.
 *
 * This implements the GraphQL spec's BlockStringValue() static algorithm.
 */
function dedentBlockStringValue(rawString) {
  // Expand a block string's raw value into independent lines.
  var lines = rawString.split(/\r\n|[\n\r]/g); // Remove common indentation from all lines but first.

  var commonIndent = getBlockStringIndentation(lines);

  if (commonIndent !== 0) {
    for (var i = 1; i < lines.length; i++) {
      lines[i] = lines[i].slice(commonIndent);
    }
  } // Remove leading and trailing blank lines.


  while (lines.length > 0 && isBlank(lines[0])) {
    lines.shift();
  }

  while (lines.length > 0 && isBlank(lines[lines.length - 1])) {
    lines.pop();
  } // Return a string of the lines joined with U+000A.


  return lines.join('\n');
} // @internal

function getBlockStringIndentation(lines) {
  var commonIndent = null;

  for (var i = 1; i < lines.length; i++) {
    var line = lines[i];
    var indent = leadingWhitespace(line);

    if (indent === line.length) {
      continue; // skip empty lines
    }

    if (commonIndent === null || indent < commonIndent) {
      commonIndent = indent;

      if (commonIndent === 0) {
        break;
      }
    }
  }

  return commonIndent === null ? 0 : commonIndent;
}

function leadingWhitespace(str) {
  var i = 0;

  while (i < str.length && (str[i] === ' ' || str[i] === '\t')) {
    i++;
  }

  return i;
}

function isBlank(str) {
  return leadingWhitespace(str) === str.length;
}
/**
 * Print a block string in the indented block form by adding a leading and
 * trailing blank line. However, if a block string starts with whitespace and is
 * a single-line, adding a leading blank line would strip that whitespace.
 */


function printBlockString(value) {
  var indentation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var preferMultipleLines = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isSingleLine = value.indexOf('\n') === -1;
  var hasLeadingSpace = value[0] === ' ' || value[0] === '\t';
  var hasTrailingQuote = value[value.length - 1] === '"';
  var printAsMultipleLines = !isSingleLine || hasTrailingQuote || preferMultipleLines;
  var result = ''; // Format a multi-line block quote to account for leading space.

  if (printAsMultipleLines && !(isSingleLine && hasLeadingSpace)) {
    result += '\n' + indentation;
  }

  result += indentation ? value.replace(/\n/g, '\n' + indentation) : value;

  if (printAsMultipleLines) {
    result += '\n';
  }

  return '"""' + result.replace(/"""/g, '\\"""') + '"""';
}

/**
 * Converts an AST into a string, using one set of reasonable
 * formatting rules.
 */

function print(ast) {
  return visit(ast, {
    leave: printDocASTReducer
  });
} // TODO: provide better type coverage in future

var printDocASTReducer = {
  Name: function Name(node) {
    return node.value;
  },
  Variable: function Variable(node) {
    return '$' + node.name;
  },
  // Document
  Document: function Document(node) {
    return join(node.definitions, '\n\n') + '\n';
  },
  OperationDefinition: function OperationDefinition(node) {
    var op = node.operation;
    var name = node.name;
    var varDefs = wrap('(', join(node.variableDefinitions, ', '), ')');
    var directives = join(node.directives, ' ');
    var selectionSet = node.selectionSet; // Anonymous queries with no directives or variable definitions can use
    // the query short form.

    return !name && !directives && !varDefs && op === 'query' ? selectionSet : join([op, join([name, varDefs]), directives, selectionSet], ' ');
  },
  VariableDefinition: function VariableDefinition(_ref) {
    var variable = _ref.variable,
        type = _ref.type,
        defaultValue = _ref.defaultValue,
        directives = _ref.directives;
    return variable + ': ' + type + wrap(' = ', defaultValue) + wrap(' ', join(directives, ' '));
  },
  SelectionSet: function SelectionSet(_ref2) {
    var selections = _ref2.selections;
    return block(selections);
  },
  Field: function Field(_ref3) {
    var alias = _ref3.alias,
        name = _ref3.name,
        args = _ref3.arguments,
        directives = _ref3.directives,
        selectionSet = _ref3.selectionSet;
    return join([wrap('', alias, ': ') + name + wrap('(', join(args, ', '), ')'), join(directives, ' '), selectionSet], ' ');
  },
  Argument: function Argument(_ref4) {
    var name = _ref4.name,
        value = _ref4.value;
    return name + ': ' + value;
  },
  // Fragments
  FragmentSpread: function FragmentSpread(_ref5) {
    var name = _ref5.name,
        directives = _ref5.directives;
    return '...' + name + wrap(' ', join(directives, ' '));
  },
  InlineFragment: function InlineFragment(_ref6) {
    var typeCondition = _ref6.typeCondition,
        directives = _ref6.directives,
        selectionSet = _ref6.selectionSet;
    return join(['...', wrap('on ', typeCondition), join(directives, ' '), selectionSet], ' ');
  },
  FragmentDefinition: function FragmentDefinition(_ref7) {
    var name = _ref7.name,
        typeCondition = _ref7.typeCondition,
        variableDefinitions = _ref7.variableDefinitions,
        directives = _ref7.directives,
        selectionSet = _ref7.selectionSet;
    return (// Note: fragment variable definitions are experimental and may be changed
      // or removed in the future.
      "fragment ".concat(name).concat(wrap('(', join(variableDefinitions, ', '), ')'), " ") + "on ".concat(typeCondition, " ").concat(wrap('', join(directives, ' '), ' ')) + selectionSet
    );
  },
  // Value
  IntValue: function IntValue(_ref8) {
    var value = _ref8.value;
    return value;
  },
  FloatValue: function FloatValue(_ref9) {
    var value = _ref9.value;
    return value;
  },
  StringValue: function StringValue(_ref10, key) {
    var value = _ref10.value,
        isBlockString = _ref10.block;
    return isBlockString ? printBlockString(value, key === 'description' ? '' : '  ') : JSON.stringify(value);
  },
  BooleanValue: function BooleanValue(_ref11) {
    var value = _ref11.value;
    return value ? 'true' : 'false';
  },
  NullValue: function NullValue() {
    return 'null';
  },
  EnumValue: function EnumValue(_ref12) {
    var value = _ref12.value;
    return value;
  },
  ListValue: function ListValue(_ref13) {
    var values = _ref13.values;
    return '[' + join(values, ', ') + ']';
  },
  ObjectValue: function ObjectValue(_ref14) {
    var fields = _ref14.fields;
    return '{' + join(fields, ', ') + '}';
  },
  ObjectField: function ObjectField(_ref15) {
    var name = _ref15.name,
        value = _ref15.value;
    return name + ': ' + value;
  },
  // Directive
  Directive: function Directive(_ref16) {
    var name = _ref16.name,
        args = _ref16.arguments;
    return '@' + name + wrap('(', join(args, ', '), ')');
  },
  // Type
  NamedType: function NamedType(_ref17) {
    var name = _ref17.name;
    return name;
  },
  ListType: function ListType(_ref18) {
    var type = _ref18.type;
    return '[' + type + ']';
  },
  NonNullType: function NonNullType(_ref19) {
    var type = _ref19.type;
    return type + '!';
  },
  // Type System Definitions
  SchemaDefinition: function SchemaDefinition(_ref20) {
    var directives = _ref20.directives,
        operationTypes = _ref20.operationTypes;
    return join(['schema', join(directives, ' '), block(operationTypes)], ' ');
  },
  OperationTypeDefinition: function OperationTypeDefinition(_ref21) {
    var operation = _ref21.operation,
        type = _ref21.type;
    return operation + ': ' + type;
  },
  ScalarTypeDefinition: addDescription(function (_ref22) {
    var name = _ref22.name,
        directives = _ref22.directives;
    return join(['scalar', name, join(directives, ' ')], ' ');
  }),
  ObjectTypeDefinition: addDescription(function (_ref23) {
    var name = _ref23.name,
        interfaces = _ref23.interfaces,
        directives = _ref23.directives,
        fields = _ref23.fields;
    return join(['type', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  }),
  FieldDefinition: addDescription(function (_ref24) {
    var name = _ref24.name,
        args = _ref24.arguments,
        type = _ref24.type,
        directives = _ref24.directives;
    return name + (hasMultilineItems(args) ? wrap('(\n', indent(join(args, '\n')), '\n)') : wrap('(', join(args, ', '), ')')) + ': ' + type + wrap(' ', join(directives, ' '));
  }),
  InputValueDefinition: addDescription(function (_ref25) {
    var name = _ref25.name,
        type = _ref25.type,
        defaultValue = _ref25.defaultValue,
        directives = _ref25.directives;
    return join([name + ': ' + type, wrap('= ', defaultValue), join(directives, ' ')], ' ');
  }),
  InterfaceTypeDefinition: addDescription(function (_ref26) {
    var name = _ref26.name,
        directives = _ref26.directives,
        fields = _ref26.fields;
    return join(['interface', name, join(directives, ' '), block(fields)], ' ');
  }),
  UnionTypeDefinition: addDescription(function (_ref27) {
    var name = _ref27.name,
        directives = _ref27.directives,
        types = _ref27.types;
    return join(['union', name, join(directives, ' '), types && types.length !== 0 ? '= ' + join(types, ' | ') : ''], ' ');
  }),
  EnumTypeDefinition: addDescription(function (_ref28) {
    var name = _ref28.name,
        directives = _ref28.directives,
        values = _ref28.values;
    return join(['enum', name, join(directives, ' '), block(values)], ' ');
  }),
  EnumValueDefinition: addDescription(function (_ref29) {
    var name = _ref29.name,
        directives = _ref29.directives;
    return join([name, join(directives, ' ')], ' ');
  }),
  InputObjectTypeDefinition: addDescription(function (_ref30) {
    var name = _ref30.name,
        directives = _ref30.directives,
        fields = _ref30.fields;
    return join(['input', name, join(directives, ' '), block(fields)], ' ');
  }),
  DirectiveDefinition: addDescription(function (_ref31) {
    var name = _ref31.name,
        args = _ref31.arguments,
        repeatable = _ref31.repeatable,
        locations = _ref31.locations;
    return 'directive @' + name + (hasMultilineItems(args) ? wrap('(\n', indent(join(args, '\n')), '\n)') : wrap('(', join(args, ', '), ')')) + (repeatable ? ' repeatable' : '') + ' on ' + join(locations, ' | ');
  }),
  SchemaExtension: function SchemaExtension(_ref32) {
    var directives = _ref32.directives,
        operationTypes = _ref32.operationTypes;
    return join(['extend schema', join(directives, ' '), block(operationTypes)], ' ');
  },
  ScalarTypeExtension: function ScalarTypeExtension(_ref33) {
    var name = _ref33.name,
        directives = _ref33.directives;
    return join(['extend scalar', name, join(directives, ' ')], ' ');
  },
  ObjectTypeExtension: function ObjectTypeExtension(_ref34) {
    var name = _ref34.name,
        interfaces = _ref34.interfaces,
        directives = _ref34.directives,
        fields = _ref34.fields;
    return join(['extend type', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  },
  InterfaceTypeExtension: function InterfaceTypeExtension(_ref35) {
    var name = _ref35.name,
        directives = _ref35.directives,
        fields = _ref35.fields;
    return join(['extend interface', name, join(directives, ' '), block(fields)], ' ');
  },
  UnionTypeExtension: function UnionTypeExtension(_ref36) {
    var name = _ref36.name,
        directives = _ref36.directives,
        types = _ref36.types;
    return join(['extend union', name, join(directives, ' '), types && types.length !== 0 ? '= ' + join(types, ' | ') : ''], ' ');
  },
  EnumTypeExtension: function EnumTypeExtension(_ref37) {
    var name = _ref37.name,
        directives = _ref37.directives,
        values = _ref37.values;
    return join(['extend enum', name, join(directives, ' '), block(values)], ' ');
  },
  InputObjectTypeExtension: function InputObjectTypeExtension(_ref38) {
    var name = _ref38.name,
        directives = _ref38.directives,
        fields = _ref38.fields;
    return join(['extend input', name, join(directives, ' '), block(fields)], ' ');
  }
};

function addDescription(cb) {
  return function (node) {
    return join([node.description, cb(node)], '\n');
  };
}
/**
 * Given maybeArray, print an empty string if it is null or empty, otherwise
 * print all items together separated by separator if provided
 */


function join(maybeArray, separator) {
  return maybeArray ? maybeArray.filter(function (x) {
    return x;
  }).join(separator || '') : '';
}
/**
 * Given array, print each item on its own line, wrapped in an
 * indented "{ }" block.
 */


function block(array) {
  return array && array.length !== 0 ? '{\n' + indent(join(array, '\n')) + '\n}' : '';
}
/**
 * If maybeString is not null or empty, then wrap with start and end, otherwise
 * print an empty string.
 */


function wrap(start, maybeString, end) {
  return maybeString ? start + maybeString + (end || '') : '';
}

function indent(maybeString) {
  return maybeString && '  ' + maybeString.replace(/\n/g, '\n  ');
}

function isMultiline(string) {
  return string.indexOf('\n') !== -1;
}

function hasMultilineItems(maybeArray) {
  return maybeArray && maybeArray.some(isMultiline);
}

/**
 * Produces a GraphQL Value AST given a JavaScript value.
 *
 * A GraphQL type must be provided, which will be used to interpret different
 * JavaScript values.
 *
 * | JSON Value    | GraphQL Value        |
 * | ------------- | -------------------- |
 * | Object        | Input Object         |
 * | Array         | List                 |
 * | Boolean       | Boolean              |
 * | String        | String / Enum Value  |
 * | Number        | Int / Float          |
 * | Mixed         | Enum Value           |
 * | null          | NullValue            |
 *
 */

function astFromValue(value, type) {
  if (isNonNullType(type)) {
    var astValue = astFromValue(value, type.ofType);

    if (astValue && astValue.kind === Kind.NULL) {
      return null;
    }

    return astValue;
  } // only explicit null, not undefined, NaN


  if (value === null) {
    return {
      kind: Kind.NULL
    };
  } // undefined, NaN


  if (isInvalid(value)) {
    return null;
  } // Convert JavaScript array to GraphQL list. If the GraphQLType is a list, but
  // the value is not an array, convert the value using the list's item type.


  if (isListType(type)) {
    var itemType = type.ofType;

    if (isCollection(value)) {
      var valuesNodes = [];
      forEach(value, function (item) {
        var itemNode = astFromValue(item, itemType);

        if (itemNode) {
          valuesNodes.push(itemNode);
        }
      });
      return {
        kind: Kind.LIST,
        values: valuesNodes
      };
    }

    return astFromValue(value, itemType);
  } // Populate the fields of the input object by creating ASTs from each value
  // in the JavaScript object according to the fields in the input type.


  if (isInputObjectType(type)) {
    if (!isObjectLike(value)) {
      return null;
    }

    var fieldNodes = [];

    for (var _i2 = 0, _objectValues2 = objectValues(type.getFields()); _i2 < _objectValues2.length; _i2++) {
      var field = _objectValues2[_i2];
      var fieldValue = astFromValue(value[field.name], field.type);

      if (fieldValue) {
        fieldNodes.push({
          kind: Kind.OBJECT_FIELD,
          name: {
            kind: Kind.NAME,
            value: field.name
          },
          value: fieldValue
        });
      }
    }

    return {
      kind: Kind.OBJECT,
      fields: fieldNodes
    };
  }

  /* istanbul ignore else */
  if (isLeafType(type)) {
    // Since value is an internally represented value, it must be serialized
    // to an externally represented value before converting into an AST.
    var serialized = type.serialize(value);

    if (isNullish(serialized)) {
      return null;
    } // Others serialize based on their corresponding JavaScript scalar types.


    if (typeof serialized === 'boolean') {
      return {
        kind: Kind.BOOLEAN,
        value: serialized
      };
    } // JavaScript numbers can be Int or Float values.


    if (typeof serialized === 'number') {
      var stringNum = String(serialized);
      return integerStringRegExp.test(stringNum) ? {
        kind: Kind.INT,
        value: stringNum
      } : {
        kind: Kind.FLOAT,
        value: stringNum
      };
    }

    if (typeof serialized === 'string') {
      // Enum types use Enum literals.
      if (isEnumType(type)) {
        return {
          kind: Kind.ENUM,
          value: serialized
        };
      } // ID types can use Int literals.


      if (type === GraphQLID && integerStringRegExp.test(serialized)) {
        return {
          kind: Kind.INT,
          value: serialized
        };
      }

      return {
        kind: Kind.STRING,
        value: serialized
      };
    }

    throw new TypeError("Cannot convert value to AST: ".concat(inspect(serialized)));
  } // Not reachable. All possible input types have been considered.


  /* istanbul ignore next */
  invariant(false, 'Unexpected input type: ' + inspect(type));
}
/**
 * IntValue:
 *   - NegativeSign? 0
 *   - NegativeSign? NonZeroDigit ( Digit+ )?
 */

var integerStringRegExp = /^-?(?:0|[1-9][0-9]*)$/;

var __Schema = new GraphQLObjectType({
  name: '__Schema',
  description: 'A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.',
  fields: function fields() {
    return {
      types: {
        description: 'A list of all types supported by this server.',
        type: GraphQLNonNull(GraphQLList(GraphQLNonNull(__Type))),
        resolve: function resolve(schema) {
          return objectValues(schema.getTypeMap());
        }
      },
      queryType: {
        description: 'The type that query operations will be rooted at.',
        type: GraphQLNonNull(__Type),
        resolve: function resolve(schema) {
          return schema.getQueryType();
        }
      },
      mutationType: {
        description: 'If this server supports mutation, the type that mutation operations will be rooted at.',
        type: __Type,
        resolve: function resolve(schema) {
          return schema.getMutationType();
        }
      },
      subscriptionType: {
        description: 'If this server support subscription, the type that subscription operations will be rooted at.',
        type: __Type,
        resolve: function resolve(schema) {
          return schema.getSubscriptionType();
        }
      },
      directives: {
        description: 'A list of all directives supported by this server.',
        type: GraphQLNonNull(GraphQLList(GraphQLNonNull(__Directive))),
        resolve: function resolve(schema) {
          return schema.getDirectives();
        }
      }
    };
  }
});
var __Directive = new GraphQLObjectType({
  name: '__Directive',
  description: "A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.\n\nIn some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.",
  fields: function fields() {
    return {
      name: {
        type: GraphQLNonNull(GraphQLString),
        resolve: function resolve(obj) {
          return obj.name;
        }
      },
      description: {
        type: GraphQLString,
        resolve: function resolve(obj) {
          return obj.description;
        }
      },
      locations: {
        type: GraphQLNonNull(GraphQLList(GraphQLNonNull(__DirectiveLocation))),
        resolve: function resolve(obj) {
          return obj.locations;
        }
      },
      args: {
        type: GraphQLNonNull(GraphQLList(GraphQLNonNull(__InputValue))),
        resolve: function resolve(directive) {
          return directive.args;
        }
      }
    };
  }
});
var __DirectiveLocation = new GraphQLEnumType({
  name: '__DirectiveLocation',
  description: 'A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.',
  values: {
    QUERY: {
      value: DirectiveLocation.QUERY,
      description: 'Location adjacent to a query operation.'
    },
    MUTATION: {
      value: DirectiveLocation.MUTATION,
      description: 'Location adjacent to a mutation operation.'
    },
    SUBSCRIPTION: {
      value: DirectiveLocation.SUBSCRIPTION,
      description: 'Location adjacent to a subscription operation.'
    },
    FIELD: {
      value: DirectiveLocation.FIELD,
      description: 'Location adjacent to a field.'
    },
    FRAGMENT_DEFINITION: {
      value: DirectiveLocation.FRAGMENT_DEFINITION,
      description: 'Location adjacent to a fragment definition.'
    },
    FRAGMENT_SPREAD: {
      value: DirectiveLocation.FRAGMENT_SPREAD,
      description: 'Location adjacent to a fragment spread.'
    },
    INLINE_FRAGMENT: {
      value: DirectiveLocation.INLINE_FRAGMENT,
      description: 'Location adjacent to an inline fragment.'
    },
    VARIABLE_DEFINITION: {
      value: DirectiveLocation.VARIABLE_DEFINITION,
      description: 'Location adjacent to a variable definition.'
    },
    SCHEMA: {
      value: DirectiveLocation.SCHEMA,
      description: 'Location adjacent to a schema definition.'
    },
    SCALAR: {
      value: DirectiveLocation.SCALAR,
      description: 'Location adjacent to a scalar definition.'
    },
    OBJECT: {
      value: DirectiveLocation.OBJECT,
      description: 'Location adjacent to an object type definition.'
    },
    FIELD_DEFINITION: {
      value: DirectiveLocation.FIELD_DEFINITION,
      description: 'Location adjacent to a field definition.'
    },
    ARGUMENT_DEFINITION: {
      value: DirectiveLocation.ARGUMENT_DEFINITION,
      description: 'Location adjacent to an argument definition.'
    },
    INTERFACE: {
      value: DirectiveLocation.INTERFACE,
      description: 'Location adjacent to an interface definition.'
    },
    UNION: {
      value: DirectiveLocation.UNION,
      description: 'Location adjacent to a union definition.'
    },
    ENUM: {
      value: DirectiveLocation.ENUM,
      description: 'Location adjacent to an enum definition.'
    },
    ENUM_VALUE: {
      value: DirectiveLocation.ENUM_VALUE,
      description: 'Location adjacent to an enum value definition.'
    },
    INPUT_OBJECT: {
      value: DirectiveLocation.INPUT_OBJECT,
      description: 'Location adjacent to an input object type definition.'
    },
    INPUT_FIELD_DEFINITION: {
      value: DirectiveLocation.INPUT_FIELD_DEFINITION,
      description: 'Location adjacent to an input object field definition.'
    }
  }
});
var __Type = new GraphQLObjectType({
  name: '__Type',
  description: 'The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name and description, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.',
  fields: function fields() {
    return {
      kind: {
        type: GraphQLNonNull(__TypeKind),
        resolve: function resolve(type) {
          if (isScalarType(type)) {
            return TypeKind.SCALAR;
          } else if (isObjectType(type)) {
            return TypeKind.OBJECT;
          } else if (isInterfaceType(type)) {
            return TypeKind.INTERFACE;
          } else if (isUnionType(type)) {
            return TypeKind.UNION;
          } else if (isEnumType(type)) {
            return TypeKind.ENUM;
          } else if (isInputObjectType(type)) {
            return TypeKind.INPUT_OBJECT;
          } else if (isListType(type)) {
            return TypeKind.LIST;
          } else if (isNonNullType(type)) {
            return TypeKind.NON_NULL;
          } // Not reachable. All possible types have been considered.


          /* istanbul ignore next */
          invariant(false, "Unexpected type: \"".concat(inspect(type), "\"."));
        }
      },
      name: {
        type: GraphQLString,
        resolve: function resolve(obj) {
          return obj.name !== undefined ? obj.name : undefined;
        }
      },
      description: {
        type: GraphQLString,
        resolve: function resolve(obj) {
          return obj.description !== undefined ? obj.description : undefined;
        }
      },
      fields: {
        type: GraphQLList(GraphQLNonNull(__Field)),
        args: {
          includeDeprecated: {
            type: GraphQLBoolean,
            defaultValue: false
          }
        },
        resolve: function resolve(type, _ref) {
          var includeDeprecated = _ref.includeDeprecated;

          if (isObjectType(type) || isInterfaceType(type)) {
            var fields = objectValues(type.getFields());

            if (!includeDeprecated) {
              fields = fields.filter(function (field) {
                return !field.deprecationReason;
              });
            }

            return fields;
          }

          return null;
        }
      },
      interfaces: {
        type: GraphQLList(GraphQLNonNull(__Type)),
        resolve: function resolve(type) {
          if (isObjectType(type)) {
            return type.getInterfaces();
          }
        }
      },
      possibleTypes: {
        type: GraphQLList(GraphQLNonNull(__Type)),
        resolve: function resolve(type, args, context, _ref2) {
          var schema = _ref2.schema;

          if (isAbstractType(type)) {
            return schema.getPossibleTypes(type);
          }
        }
      },
      enumValues: {
        type: GraphQLList(GraphQLNonNull(__EnumValue)),
        args: {
          includeDeprecated: {
            type: GraphQLBoolean,
            defaultValue: false
          }
        },
        resolve: function resolve(type, _ref3) {
          var includeDeprecated = _ref3.includeDeprecated;

          if (isEnumType(type)) {
            var values = type.getValues();

            if (!includeDeprecated) {
              values = values.filter(function (value) {
                return !value.deprecationReason;
              });
            }

            return values;
          }
        }
      },
      inputFields: {
        type: GraphQLList(GraphQLNonNull(__InputValue)),
        resolve: function resolve(type) {
          if (isInputObjectType(type)) {
            return objectValues(type.getFields());
          }
        }
      },
      ofType: {
        type: __Type,
        resolve: function resolve(obj) {
          return obj.ofType !== undefined ? obj.ofType : undefined;
        }
      }
    };
  }
});
var __Field = new GraphQLObjectType({
  name: '__Field',
  description: 'Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.',
  fields: function fields() {
    return {
      name: {
        type: GraphQLNonNull(GraphQLString),
        resolve: function resolve(obj) {
          return obj.name;
        }
      },
      description: {
        type: GraphQLString,
        resolve: function resolve(obj) {
          return obj.description;
        }
      },
      args: {
        type: GraphQLNonNull(GraphQLList(GraphQLNonNull(__InputValue))),
        resolve: function resolve(field) {
          return field.args;
        }
      },
      type: {
        type: GraphQLNonNull(__Type),
        resolve: function resolve(obj) {
          return obj.type;
        }
      },
      isDeprecated: {
        type: GraphQLNonNull(GraphQLBoolean),
        resolve: function resolve(obj) {
          return obj.isDeprecated;
        }
      },
      deprecationReason: {
        type: GraphQLString,
        resolve: function resolve(obj) {
          return obj.deprecationReason;
        }
      }
    };
  }
});
var __InputValue = new GraphQLObjectType({
  name: '__InputValue',
  description: 'Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.',
  fields: function fields() {
    return {
      name: {
        type: GraphQLNonNull(GraphQLString),
        resolve: function resolve(obj) {
          return obj.name;
        }
      },
      description: {
        type: GraphQLString,
        resolve: function resolve(obj) {
          return obj.description;
        }
      },
      type: {
        type: GraphQLNonNull(__Type),
        resolve: function resolve(obj) {
          return obj.type;
        }
      },
      defaultValue: {
        type: GraphQLString,
        description: 'A GraphQL-formatted string representing the default value for this input value.',
        resolve: function resolve(inputVal) {
          var valueAST = astFromValue(inputVal.defaultValue, inputVal.type);
          return valueAST ? print(valueAST) : null;
        }
      }
    };
  }
});
var __EnumValue = new GraphQLObjectType({
  name: '__EnumValue',
  description: 'One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.',
  fields: function fields() {
    return {
      name: {
        type: GraphQLNonNull(GraphQLString),
        resolve: function resolve(obj) {
          return obj.name;
        }
      },
      description: {
        type: GraphQLString,
        resolve: function resolve(obj) {
          return obj.description;
        }
      },
      isDeprecated: {
        type: GraphQLNonNull(GraphQLBoolean),
        resolve: function resolve(obj) {
          return obj.isDeprecated;
        }
      },
      deprecationReason: {
        type: GraphQLString,
        resolve: function resolve(obj) {
          return obj.deprecationReason;
        }
      }
    };
  }
});
var TypeKind = Object.freeze({
  SCALAR: 'SCALAR',
  OBJECT: 'OBJECT',
  INTERFACE: 'INTERFACE',
  UNION: 'UNION',
  ENUM: 'ENUM',
  INPUT_OBJECT: 'INPUT_OBJECT',
  LIST: 'LIST',
  NON_NULL: 'NON_NULL'
});
var __TypeKind = new GraphQLEnumType({
  name: '__TypeKind',
  description: 'An enum describing what kind of type a given `__Type` is.',
  values: {
    SCALAR: {
      value: TypeKind.SCALAR,
      description: 'Indicates this type is a scalar.'
    },
    OBJECT: {
      value: TypeKind.OBJECT,
      description: 'Indicates this type is an object. `fields` and `interfaces` are valid fields.'
    },
    INTERFACE: {
      value: TypeKind.INTERFACE,
      description: 'Indicates this type is an interface. `fields` and `possibleTypes` are valid fields.'
    },
    UNION: {
      value: TypeKind.UNION,
      description: 'Indicates this type is a union. `possibleTypes` is a valid field.'
    },
    ENUM: {
      value: TypeKind.ENUM,
      description: 'Indicates this type is an enum. `enumValues` is a valid field.'
    },
    INPUT_OBJECT: {
      value: TypeKind.INPUT_OBJECT,
      description: 'Indicates this type is an input object. `inputFields` is a valid field.'
    },
    LIST: {
      value: TypeKind.LIST,
      description: 'Indicates this type is a list. `ofType` is a valid field.'
    },
    NON_NULL: {
      value: TypeKind.NON_NULL,
      description: 'Indicates this type is a non-null. `ofType` is a valid field.'
    }
  }
});
/**
 * Note that these are GraphQLField and not GraphQLFieldConfig,
 * so the format for args is different.
 */

var SchemaMetaFieldDef = {
  name: '__schema',
  type: GraphQLNonNull(__Schema),
  description: 'Access the current type schema of this server.',
  args: [],
  resolve: function resolve(source, args, context, _ref4) {
    var schema = _ref4.schema;
    return schema;
  },
  deprecationReason: undefined,
  extensions: undefined,
  astNode: undefined
};
var TypeMetaFieldDef = {
  name: '__type',
  type: __Type,
  description: 'Request the type information of a single type.',
  args: [{
    name: 'name',
    description: undefined,
    type: GraphQLNonNull(GraphQLString),
    defaultValue: undefined,
    extensions: undefined,
    astNode: undefined
  }],
  resolve: function resolve(source, _ref5, context, _ref6) {
    var name = _ref5.name;
    var schema = _ref6.schema;
    return schema.getType(name);
  },
  deprecationReason: undefined,
  extensions: undefined,
  astNode: undefined
};
var TypeNameMetaFieldDef = {
  name: '__typename',
  type: GraphQLNonNull(GraphQLString),
  description: 'The name of the current Object type at runtime.',
  args: [],
  resolve: function resolve(source, args, context, _ref7) {
    var parentType = _ref7.parentType;
    return parentType.name;
  },
  deprecationReason: undefined,
  extensions: undefined,
  astNode: undefined
};
var introspectionTypes = Object.freeze([__Schema, __Directive, __DirectiveLocation, __Type, __Field, __InputValue, __EnumValue, __TypeKind]);
function isIntrospectionType(type) {
  return isNamedType(type) && introspectionTypes.some(function (_ref8) {
    var name = _ref8.name;
    return type.name === name;
  });
}

/**
 * Test if the given value is a GraphQL schema.
 */

// eslint-disable-next-line no-redeclare
function isSchema(schema) {
  return instanceOf(schema, GraphQLSchema);
}
function assertSchema(schema) {
  if (!isSchema(schema)) {
    throw new Error("Expected ".concat(inspect(schema), " to be a GraphQL schema."));
  }

  return schema;
}
/**
 * Schema Definition
 *
 * A Schema is created by supplying the root types of each type of operation,
 * query and mutation (optional). A schema definition is then supplied to the
 * validator and executor.
 *
 * Example:
 *
 *     const MyAppSchema = new GraphQLSchema({
 *       query: MyAppQueryRootType,
 *       mutation: MyAppMutationRootType,
 *     })
 *
 * Note: When the schema is constructed, by default only the types that are
 * reachable by traversing the root types are included, other types must be
 * explicitly referenced.
 *
 * Example:
 *
 *     const characterInterface = new GraphQLInterfaceType({
 *       name: 'Character',
 *       ...
 *     });
 *
 *     const humanType = new GraphQLObjectType({
 *       name: 'Human',
 *       interfaces: [characterInterface],
 *       ...
 *     });
 *
 *     const droidType = new GraphQLObjectType({
 *       name: 'Droid',
 *       interfaces: [characterInterface],
 *       ...
 *     });
 *
 *     const schema = new GraphQLSchema({
 *       query: new GraphQLObjectType({
 *         name: 'Query',
 *         fields: {
 *           hero: { type: characterInterface, ... },
 *         }
 *       }),
 *       ...
 *       // Since this schema references only the `Character` interface it's
 *       // necessary to explicitly list the types that implement it if
 *       // you want them to be included in the final schema.
 *       types: [humanType, droidType],
 *     })
 *
 * Note: If an array of `directives` are provided to GraphQLSchema, that will be
 * the exact list of directives represented and allowed. If `directives` is not
 * provided then a default set of the specified directives (e.g. @include and
 * @skip) will be used. If you wish to provide *additional* directives to these
 * specified directives, you must explicitly declare them. Example:
 *
 *     const MyAppSchema = new GraphQLSchema({
 *       ...
 *       directives: specifiedDirectives.concat([ myCustomDirective ]),
 *     })
 *
 */

var GraphQLSchema =
/*#__PURE__*/
function () {
  // Used as a cache for validateSchema().
  // Referenced by validateSchema().
  function GraphQLSchema(config) {
    // If this schema was built from a source known to be valid, then it may be
    // marked with assumeValid to avoid an additional type system validation.
    if (config && config.assumeValid) {
      this.__validationErrors = [];
    } else {
      this.__validationErrors = undefined; // Otherwise check for common mistakes during construction to produce
      // clear and early error messages.

      isObjectLike(config) || devAssert(0, 'Must provide configuration object.');
      !config.types || Array.isArray(config.types) || devAssert(0, "\"types\" must be Array if provided but got: ".concat(inspect(config.types), "."));
      !config.directives || Array.isArray(config.directives) || devAssert(0, '"directives" must be Array if provided but got: ' + "".concat(inspect(config.directives), "."));
      !config.allowedLegacyNames || Array.isArray(config.allowedLegacyNames) || devAssert(0, '"allowedLegacyNames" must be Array if provided but got: ' + "".concat(inspect(config.allowedLegacyNames), "."));
    }

    this.extensions = config.extensions && toObjMap(config.extensions);
    this.astNode = config.astNode;
    this.extensionASTNodes = config.extensionASTNodes;
    this.__allowedLegacyNames = config.allowedLegacyNames || [];
    this._queryType = config.query;
    this._mutationType = config.mutation;
    this._subscriptionType = config.subscription; // Provide specified directives (e.g. @include and @skip) by default.

    this._directives = config.directives || specifiedDirectives; // Build type map now to detect any errors within this schema.

    var initialTypes = [this._queryType, this._mutationType, this._subscriptionType, __Schema].concat(config.types); // Keep track of all types referenced within the schema.

    var typeMap = Object.create(null); // First by deeply visiting all initial types.

    typeMap = initialTypes.reduce(typeMapReducer, typeMap); // Then by deeply visiting all directive types.

    typeMap = this._directives.reduce(typeMapDirectiveReducer, typeMap); // Storing the resulting map for reference by the schema.

    this._typeMap = typeMap;
    this._possibleTypeMap = Object.create(null); // Keep track of all implementations by interface name.

    this._implementations = Object.create(null);

    for (var _i2 = 0, _objectValues2 = objectValues(this._typeMap); _i2 < _objectValues2.length; _i2++) {
      var type = _objectValues2[_i2];

      if (isObjectType(type)) {
        for (var _i4 = 0, _type$getInterfaces2 = type.getInterfaces(); _i4 < _type$getInterfaces2.length; _i4++) {
          var iface = _type$getInterfaces2[_i4];

          if (isInterfaceType(iface)) {
            var impls = this._implementations[iface.name];

            if (impls) {
              impls.push(type);
            } else {
              this._implementations[iface.name] = [type];
            }
          }
        }
      }
    }
  }

  var _proto = GraphQLSchema.prototype;

  _proto.getQueryType = function getQueryType() {
    return this._queryType;
  };

  _proto.getMutationType = function getMutationType() {
    return this._mutationType;
  };

  _proto.getSubscriptionType = function getSubscriptionType() {
    return this._subscriptionType;
  };

  _proto.getTypeMap = function getTypeMap() {
    return this._typeMap;
  };

  _proto.getType = function getType(name) {
    return this.getTypeMap()[name];
  };

  _proto.getPossibleTypes = function getPossibleTypes(abstractType) {
    if (isUnionType(abstractType)) {
      return abstractType.getTypes();
    }

    return this._implementations[abstractType.name] || [];
  };

  _proto.isPossibleType = function isPossibleType(abstractType, possibleType) {
    if (this._possibleTypeMap[abstractType.name] == null) {
      var map = Object.create(null);

      for (var _i6 = 0, _this$getPossibleType2 = this.getPossibleTypes(abstractType); _i6 < _this$getPossibleType2.length; _i6++) {
        var type = _this$getPossibleType2[_i6];
        map[type.name] = true;
      }

      this._possibleTypeMap[abstractType.name] = map;
    }

    return Boolean(this._possibleTypeMap[abstractType.name][possibleType.name]);
  };

  _proto.getDirectives = function getDirectives() {
    return this._directives;
  };

  _proto.getDirective = function getDirective(name) {
    return find(this.getDirectives(), function (directive) {
      return directive.name === name;
    });
  };

  _proto.toConfig = function toConfig() {
    return {
      query: this.getQueryType(),
      mutation: this.getMutationType(),
      subscription: this.getSubscriptionType(),
      types: objectValues(this.getTypeMap()),
      directives: this.getDirectives().slice(),
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes || [],
      assumeValid: this.__validationErrors !== undefined,
      allowedLegacyNames: this.__allowedLegacyNames
    };
  };

  return GraphQLSchema;
}(); // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported

defineToStringTag(GraphQLSchema);

function typeMapReducer(map, type) {
  if (!type) {
    return map;
  }

  var namedType = getNamedType(type);
  var seenType = map[namedType.name];

  if (seenType) {
    if (seenType !== namedType) {
      throw new Error("Schema must contain uniquely named types but contains multiple types named \"".concat(namedType.name, "\"."));
    }

    return map;
  }

  map[namedType.name] = namedType;
  var reducedMap = map;

  if (isUnionType(namedType)) {
    reducedMap = namedType.getTypes().reduce(typeMapReducer, reducedMap);
  }

  if (isObjectType(namedType)) {
    reducedMap = namedType.getInterfaces().reduce(typeMapReducer, reducedMap);
  }

  if (isObjectType(namedType) || isInterfaceType(namedType)) {
    for (var _i8 = 0, _objectValues4 = objectValues(namedType.getFields()); _i8 < _objectValues4.length; _i8++) {
      var field = _objectValues4[_i8];
      var fieldArgTypes = field.args.map(function (arg) {
        return arg.type;
      });
      reducedMap = fieldArgTypes.reduce(typeMapReducer, reducedMap);
      reducedMap = typeMapReducer(reducedMap, field.type);
    }
  }

  if (isInputObjectType(namedType)) {
    for (var _i10 = 0, _objectValues6 = objectValues(namedType.getFields()); _i10 < _objectValues6.length; _i10++) {
      var _field = _objectValues6[_i10];
      reducedMap = typeMapReducer(reducedMap, _field.type);
    }
  }

  return reducedMap;
}

function typeMapDirectiveReducer(map, directive) {
  // Directives are not validated until validateSchema() is called.
  if (!isDirective(directive)) {
    return map;
  }

  return directive.args.reduce(function (_map, arg) {
    return typeMapReducer(_map, arg.type);
  }, map);
}

/**
 * Implements the "Type Validation" sub-sections of the specification's
 * "Type System" section.
 *
 * Validation runs synchronously, returning an array of encountered errors, or
 * an empty array if no errors were encountered and the Schema is valid.
 */

function validateSchema(schema) {
  // First check to ensure the provided value is in fact a GraphQLSchema.
  assertSchema(schema); // If this Schema has already been validated, return the previous results.

  if (schema.__validationErrors) {
    return schema.__validationErrors;
  } // Validate the schema, producing a list of errors.


  var context = new SchemaValidationContext(schema);
  validateRootTypes(context);
  validateDirectives(context);
  validateTypes(context); // Persist the results of validation before returning to ensure validation
  // does not run multiple times for this schema.

  var errors = context.getErrors();
  schema.__validationErrors = errors;
  return errors;
}
/**
 * Utility function which asserts a schema is valid by throwing an error if
 * it is invalid.
 */

function assertValidSchema(schema) {
  var errors = validateSchema(schema);

  if (errors.length !== 0) {
    throw new Error(errors.map(function (error) {
      return error.message;
    }).join('\n\n'));
  }
}

var SchemaValidationContext =
/*#__PURE__*/
function () {
  function SchemaValidationContext(schema) {
    this._errors = [];
    this.schema = schema;
  }

  var _proto = SchemaValidationContext.prototype;

  _proto.reportError = function reportError(message, nodes) {
    var _nodes = Array.isArray(nodes) ? nodes.filter(Boolean) : nodes;

    this.addError(new GraphQLError(message, _nodes));
  };

  _proto.addError = function addError(error) {
    this._errors.push(error);
  };

  _proto.getErrors = function getErrors() {
    return this._errors;
  };

  return SchemaValidationContext;
}();

function validateRootTypes(context) {
  var schema = context.schema;
  var queryType = schema.getQueryType();

  if (!queryType) {
    context.reportError('Query root type must be provided.', schema.astNode);
  } else if (!isObjectType(queryType)) {
    context.reportError("Query root type must be Object type, it cannot be ".concat(inspect(queryType), "."), getOperationTypeNode(schema, queryType, 'query'));
  }

  var mutationType = schema.getMutationType();

  if (mutationType && !isObjectType(mutationType)) {
    context.reportError('Mutation root type must be Object type if provided, it cannot be ' + "".concat(inspect(mutationType), "."), getOperationTypeNode(schema, mutationType, 'mutation'));
  }

  var subscriptionType = schema.getSubscriptionType();

  if (subscriptionType && !isObjectType(subscriptionType)) {
    context.reportError('Subscription root type must be Object type if provided, it cannot be ' + "".concat(inspect(subscriptionType), "."), getOperationTypeNode(schema, subscriptionType, 'subscription'));
  }
}

function getOperationTypeNode(schema, type, operation) {
  var operationNodes = getAllSubNodes(schema, function (node) {
    return node.operationTypes;
  });

  for (var _i2 = 0; _i2 < operationNodes.length; _i2++) {
    var node = operationNodes[_i2];

    if (node.operation === operation) {
      return node.type;
    }
  }

  return type.astNode;
}

function validateDirectives(context) {
  for (var _i4 = 0, _context$schema$getDi2 = context.schema.getDirectives(); _i4 < _context$schema$getDi2.length; _i4++) {
    var directive = _context$schema$getDi2[_i4];

    // Ensure all directives are in fact GraphQL directives.
    if (!isDirective(directive)) {
      context.reportError("Expected directive but got: ".concat(inspect(directive), "."), directive && directive.astNode);
      continue;
    } // Ensure they are named correctly.


    validateName(context, directive); // TODO: Ensure proper locations.
    // Ensure the arguments are valid.

    var argNames = Object.create(null);

    var _loop = function _loop(_i6, _directive$args2) {
      var arg = _directive$args2[_i6];
      var argName = arg.name; // Ensure they are named correctly.

      validateName(context, arg); // Ensure they are unique per directive.

      if (argNames[argName]) {
        context.reportError("Argument @".concat(directive.name, "(").concat(argName, ":) can only be defined once."), directive.astNode && directive.args.filter(function (_ref) {
          var name = _ref.name;
          return name === argName;
        }).map(function (_ref2) {
          var astNode = _ref2.astNode;
          return astNode;
        }));
        return "continue";
      }

      argNames[argName] = true; // Ensure the type is an input type.

      if (!isInputType(arg.type)) {
        context.reportError("The type of @".concat(directive.name, "(").concat(argName, ":) must be Input Type ") + "but got: ".concat(inspect(arg.type), "."), arg.astNode);
      }
    };

    for (var _i6 = 0, _directive$args2 = directive.args; _i6 < _directive$args2.length; _i6++) {
      var _ret = _loop(_i6, _directive$args2);

      if (_ret === "continue") continue;
    }
  }
}

function validateName(context, node) {
  // If a schema explicitly allows some legacy name which is no longer valid,
  // allow it to be assumed valid.
  if (context.schema.__allowedLegacyNames.indexOf(node.name) !== -1) {
    return;
  } // Ensure names are valid, however introspection types opt out.


  var error = isValidNameError(node.name, node.astNode || undefined);

  if (error) {
    context.addError(error);
  }
}

function validateTypes(context) {
  var validateInputObjectCircularRefs = createInputObjectCircularRefsValidator(context);
  var typeMap = context.schema.getTypeMap();

  for (var _i8 = 0, _objectValues2 = objectValues(typeMap); _i8 < _objectValues2.length; _i8++) {
    var type = _objectValues2[_i8];

    // Ensure all provided types are in fact GraphQL type.
    if (!isNamedType(type)) {
      context.reportError("Expected GraphQL named type but got: ".concat(inspect(type), "."), type && type.astNode);
      continue;
    } // Ensure it is named correctly (excluding introspection types).


    if (!isIntrospectionType(type)) {
      validateName(context, type);
    }

    if (isObjectType(type)) {
      // Ensure fields are valid
      validateFields(context, type); // Ensure objects implement the interfaces they claim to.

      validateObjectInterfaces(context, type);
    } else if (isInterfaceType(type)) {
      // Ensure fields are valid.
      validateFields(context, type);
    } else if (isUnionType(type)) {
      // Ensure Unions include valid member types.
      validateUnionMembers(context, type);
    } else if (isEnumType(type)) {
      // Ensure Enums have valid values.
      validateEnumValues(context, type);
    } else if (isInputObjectType(type)) {
      // Ensure Input Object fields are valid.
      validateInputFields(context, type); // Ensure Input Objects do not contain non-nullable circular references

      validateInputObjectCircularRefs(type);
    }
  }
}

function validateFields(context, type) {
  var fields = objectValues(type.getFields()); // Objects and Interfaces both must define one or more fields.

  if (fields.length === 0) {
    context.reportError("Type ".concat(type.name, " must define one or more fields."), getAllNodes(type));
  }

  for (var _i10 = 0; _i10 < fields.length; _i10++) {
    var field = fields[_i10];
    // Ensure they are named correctly.
    validateName(context, field); // Ensure the type is an output type

    if (!isOutputType(field.type)) {
      context.reportError("The type of ".concat(type.name, ".").concat(field.name, " must be Output Type ") + "but got: ".concat(inspect(field.type), "."), field.astNode && field.astNode.type);
    } // Ensure the arguments are valid


    var argNames = Object.create(null);

    var _loop2 = function _loop2(_i12, _field$args2) {
      var arg = _field$args2[_i12];
      var argName = arg.name; // Ensure they are named correctly.

      validateName(context, arg); // Ensure they are unique per field.

      if (argNames[argName]) {
        context.reportError("Field argument ".concat(type.name, ".").concat(field.name, "(").concat(argName, ":) can only be defined once."), field.args.filter(function (_ref3) {
          var name = _ref3.name;
          return name === argName;
        }).map(function (_ref4) {
          var astNode = _ref4.astNode;
          return astNode;
        }));
      }

      argNames[argName] = true; // Ensure the type is an input type

      if (!isInputType(arg.type)) {
        context.reportError("The type of ".concat(type.name, ".").concat(field.name, "(").concat(argName, ":) must be Input ") + "Type but got: ".concat(inspect(arg.type), "."), arg.astNode && arg.astNode.type);
      }
    };

    for (var _i12 = 0, _field$args2 = field.args; _i12 < _field$args2.length; _i12++) {
      _loop2(_i12, _field$args2);
    }
  }
}

function validateObjectInterfaces(context, object) {
  var implementedTypeNames = Object.create(null);

  for (var _i14 = 0, _object$getInterfaces2 = object.getInterfaces(); _i14 < _object$getInterfaces2.length; _i14++) {
    var iface = _object$getInterfaces2[_i14];

    if (!isInterfaceType(iface)) {
      context.reportError("Type ".concat(inspect(object), " must only implement Interface types, ") + "it cannot implement ".concat(inspect(iface), "."), getAllImplementsInterfaceNodes(object, iface));
      continue;
    }

    if (implementedTypeNames[iface.name]) {
      context.reportError("Type ".concat(object.name, " can only implement ").concat(iface.name, " once."), getAllImplementsInterfaceNodes(object, iface));
      continue;
    }

    implementedTypeNames[iface.name] = true;
    validateObjectImplementsInterface(context, object, iface);
  }
}

function validateObjectImplementsInterface(context, object, iface) {
  var objectFieldMap = object.getFields();
  var ifaceFieldMap = iface.getFields(); // Assert each interface field is implemented.

  for (var _i16 = 0, _objectEntries2 = objectEntries(ifaceFieldMap); _i16 < _objectEntries2.length; _i16++) {
    var _ref6 = _objectEntries2[_i16];
    var fieldName = _ref6[0];
    var ifaceField = _ref6[1];
    var objectField = objectFieldMap[fieldName]; // Assert interface field exists on object.

    if (!objectField) {
      context.reportError("Interface field ".concat(iface.name, ".").concat(fieldName, " expected but ").concat(object.name, " does not provide it."), [ifaceField.astNode].concat(getAllNodes(object)));
      continue;
    } // Assert interface field type is satisfied by object field type, by being
    // a valid subtype. (covariant)


    if (!isTypeSubTypeOf(context.schema, objectField.type, ifaceField.type)) {
      context.reportError("Interface field ".concat(iface.name, ".").concat(fieldName, " expects type ") + "".concat(inspect(ifaceField.type), " but ").concat(object.name, ".").concat(fieldName, " ") + "is type ".concat(inspect(objectField.type), "."), [ifaceField.astNode && ifaceField.astNode.type, objectField.astNode && objectField.astNode.type]);
    } // Assert each interface field arg is implemented.


    var _loop3 = function _loop3(_i18, _ifaceField$args2) {
      var ifaceArg = _ifaceField$args2[_i18];
      var argName = ifaceArg.name;
      var objectArg = find(objectField.args, function (arg) {
        return arg.name === argName;
      }); // Assert interface field arg exists on object field.

      if (!objectArg) {
        context.reportError("Interface field argument ".concat(iface.name, ".").concat(fieldName, "(").concat(argName, ":) expected but ").concat(object.name, ".").concat(fieldName, " does not provide it."), [ifaceArg.astNode, objectField.astNode]);
        return "continue";
      } // Assert interface field arg type matches object field arg type.
      // (invariant)
      // TODO: change to contravariant?


      if (!isEqualType(ifaceArg.type, objectArg.type)) {
        context.reportError("Interface field argument ".concat(iface.name, ".").concat(fieldName, "(").concat(argName, ":) ") + "expects type ".concat(inspect(ifaceArg.type), " but ") + "".concat(object.name, ".").concat(fieldName, "(").concat(argName, ":) is type ") + "".concat(inspect(objectArg.type), "."), [ifaceArg.astNode && ifaceArg.astNode.type, objectArg.astNode && objectArg.astNode.type]);
      } // TODO: validate default values?

    };

    for (var _i18 = 0, _ifaceField$args2 = ifaceField.args; _i18 < _ifaceField$args2.length; _i18++) {
      var _ret2 = _loop3(_i18, _ifaceField$args2);

      if (_ret2 === "continue") continue;
    } // Assert additional arguments must not be required.


    var _loop4 = function _loop4(_i20, _objectField$args2) {
      var objectArg = _objectField$args2[_i20];
      var argName = objectArg.name;
      var ifaceArg = find(ifaceField.args, function (arg) {
        return arg.name === argName;
      });

      if (!ifaceArg && isRequiredArgument(objectArg)) {
        context.reportError("Object field ".concat(object.name, ".").concat(fieldName, " includes required argument ").concat(argName, " that is missing from the Interface field ").concat(iface.name, ".").concat(fieldName, "."), [objectArg.astNode, ifaceField.astNode]);
      }
    };

    for (var _i20 = 0, _objectField$args2 = objectField.args; _i20 < _objectField$args2.length; _i20++) {
      _loop4(_i20, _objectField$args2);
    }
  }
}

function validateUnionMembers(context, union) {
  var memberTypes = union.getTypes();

  if (memberTypes.length === 0) {
    context.reportError("Union type ".concat(union.name, " must define one or more member types."), getAllNodes(union));
  }

  var includedTypeNames = Object.create(null);

  for (var _i22 = 0; _i22 < memberTypes.length; _i22++) {
    var memberType = memberTypes[_i22];

    if (includedTypeNames[memberType.name]) {
      context.reportError("Union type ".concat(union.name, " can only include type ").concat(memberType.name, " once."), getUnionMemberTypeNodes(union, memberType.name));
      continue;
    }

    includedTypeNames[memberType.name] = true;

    if (!isObjectType(memberType)) {
      context.reportError("Union type ".concat(union.name, " can only include Object types, ") + "it cannot include ".concat(inspect(memberType), "."), getUnionMemberTypeNodes(union, String(memberType)));
    }
  }
}

function validateEnumValues(context, enumType) {
  var enumValues = enumType.getValues();

  if (enumValues.length === 0) {
    context.reportError("Enum type ".concat(enumType.name, " must define one or more values."), getAllNodes(enumType));
  }

  for (var _i24 = 0; _i24 < enumValues.length; _i24++) {
    var enumValue = enumValues[_i24];
    var valueName = enumValue.name; // Ensure valid name.

    validateName(context, enumValue);

    if (valueName === 'true' || valueName === 'false' || valueName === 'null') {
      context.reportError("Enum type ".concat(enumType.name, " cannot include value: ").concat(valueName, "."), enumValue.astNode);
    }
  }
}

function validateInputFields(context, inputObj) {
  var fields = objectValues(inputObj.getFields());

  if (fields.length === 0) {
    context.reportError("Input Object type ".concat(inputObj.name, " must define one or more fields."), getAllNodes(inputObj));
  } // Ensure the arguments are valid


  for (var _i26 = 0; _i26 < fields.length; _i26++) {
    var field = fields[_i26];
    // Ensure they are named correctly.
    validateName(context, field); // Ensure the type is an input type

    if (!isInputType(field.type)) {
      context.reportError("The type of ".concat(inputObj.name, ".").concat(field.name, " must be Input Type ") + "but got: ".concat(inspect(field.type), "."), field.astNode && field.astNode.type);
    }
  }
}

function createInputObjectCircularRefsValidator(context) {
  // Modified copy of algorithm from 'src/validation/rules/NoFragmentCycles.js'.
  // Tracks already visited types to maintain O(N) and to ensure that cycles
  // are not redundantly reported.
  var visitedTypes = Object.create(null); // Array of types nodes used to produce meaningful errors

  var fieldPath = []; // Position in the type path

  var fieldPathIndexByTypeName = Object.create(null);
  return detectCycleRecursive; // This does a straight-forward DFS to find cycles.
  // It does not terminate when a cycle was found but continues to explore
  // the graph to find all possible cycles.

  function detectCycleRecursive(inputObj) {
    if (visitedTypes[inputObj.name]) {
      return;
    }

    visitedTypes[inputObj.name] = true;
    fieldPathIndexByTypeName[inputObj.name] = fieldPath.length;
    var fields = objectValues(inputObj.getFields());

    for (var _i28 = 0; _i28 < fields.length; _i28++) {
      var field = fields[_i28];

      if (isNonNullType(field.type) && isInputObjectType(field.type.ofType)) {
        var fieldType = field.type.ofType;
        var cycleIndex = fieldPathIndexByTypeName[fieldType.name];
        fieldPath.push(field);

        if (cycleIndex === undefined) {
          detectCycleRecursive(fieldType);
        } else {
          var cyclePath = fieldPath.slice(cycleIndex);
          var pathStr = cyclePath.map(function (fieldObj) {
            return fieldObj.name;
          }).join('.');
          context.reportError("Cannot reference Input Object \"".concat(fieldType.name, "\" within itself through a series of non-null fields: \"").concat(pathStr, "\"."), cyclePath.map(function (fieldObj) {
            return fieldObj.astNode;
          }));
        }

        fieldPath.pop();
      }
    }

    fieldPathIndexByTypeName[inputObj.name] = undefined;
  }
}

function getAllNodes(object) {
  var astNode = object.astNode,
      extensionASTNodes = object.extensionASTNodes;
  return astNode ? extensionASTNodes ? [astNode].concat(extensionASTNodes) : [astNode] : extensionASTNodes || [];
}

function getAllSubNodes(object, getter) {
  return flatMap(getAllNodes(object), function (item) {
    return getter(item) || [];
  });
}

function getAllImplementsInterfaceNodes(type, iface) {
  return getAllSubNodes(type, function (typeNode) {
    return typeNode.interfaces;
  }).filter(function (ifaceNode) {
    return ifaceNode.name.value === iface.name;
  });
}

function getUnionMemberTypeNodes(union, typeName) {
  return getAllSubNodes(union, function (unionNode) {
    return unionNode.types;
  }).filter(function (typeNode) {
    return typeNode.name.value === typeName;
  });
}

/**
 * Given a Schema and an AST node describing a type, return a GraphQLType
 * definition which applies to that type. For example, if provided the parsed
 * AST node for `[User]`, a GraphQLList instance will be returned, containing
 * the type called "User" found in the schema. If a type called "User" is not
 * found in the schema, then undefined will be returned.
 */

/* eslint-disable no-redeclare */

function typeFromAST(schema, typeNode) {
  /* eslint-enable no-redeclare */
  var innerType;

  if (typeNode.kind === Kind.LIST_TYPE) {
    innerType = typeFromAST(schema, typeNode.type);
    return innerType && GraphQLList(innerType);
  }

  if (typeNode.kind === Kind.NON_NULL_TYPE) {
    innerType = typeFromAST(schema, typeNode.type);
    return innerType && GraphQLNonNull(innerType);
  }

  /* istanbul ignore else */
  if (typeNode.kind === Kind.NAMED_TYPE) {
    return schema.getType(typeNode.name.value);
  } // Not reachable. All possible type nodes have been considered.


  /* istanbul ignore next */
  invariant(false, 'Unexpected type node: ' + inspect(typeNode));
}

/**
 * Extracts the root type of the operation from the schema.
 */
function getOperationRootType(schema, operation) {
  if (operation.operation === 'query') {
    var queryType = schema.getQueryType();

    if (!queryType) {
      throw new GraphQLError('Schema does not define the required query root type.', operation);
    }

    return queryType;
  }

  if (operation.operation === 'mutation') {
    var mutationType = schema.getMutationType();

    if (!mutationType) {
      throw new GraphQLError('Schema is not configured for mutations.', operation);
    }

    return mutationType;
  }

  if (operation.operation === 'subscription') {
    var subscriptionType = schema.getSubscriptionType();

    if (!subscriptionType) {
      throw new GraphQLError('Schema is not configured for subscriptions.', operation);
    }

    return subscriptionType;
  }

  throw new GraphQLError('Can only have query, mutation and subscription operations.', operation);
}

/**
 * Build a string describing the path.
 */
function printPathArray(path) {
  return path.map(function (key) {
    return typeof key === 'number' ? '[' + key.toString() + ']' : '.' + key;
  }).join('');
}

/**
 * Produces a JavaScript value given a GraphQL Value AST.
 *
 * A GraphQL type must be provided, which will be used to interpret different
 * GraphQL Value literals.
 *
 * Returns `undefined` when the value could not be validly coerced according to
 * the provided type.
 *
 * | GraphQL Value        | JSON Value    |
 * | -------------------- | ------------- |
 * | Input Object         | Object        |
 * | List                 | Array         |
 * | Boolean              | Boolean       |
 * | String               | String        |
 * | Int / Float          | Number        |
 * | Enum Value           | Mixed         |
 * | NullValue            | null          |
 *
 */

function valueFromAST(valueNode, type, variables) {
  if (!valueNode) {
    // When there is no node, then there is also no value.
    // Importantly, this is different from returning the value null.
    return;
  }

  if (isNonNullType(type)) {
    if (valueNode.kind === Kind.NULL) {
      return; // Invalid: intentionally return no value.
    }

    return valueFromAST(valueNode, type.ofType, variables);
  }

  if (valueNode.kind === Kind.NULL) {
    // This is explicitly returning the value null.
    return null;
  }

  if (valueNode.kind === Kind.VARIABLE) {
    var variableName = valueNode.name.value;

    if (!variables || isInvalid(variables[variableName])) {
      // No valid return value.
      return;
    }

    var variableValue = variables[variableName];

    if (variableValue === null && isNonNullType(type)) {
      return; // Invalid: intentionally return no value.
    } // Note: This does no further checking that this variable is correct.
    // This assumes that this query has been validated and the variable
    // usage here is of the correct type.


    return variableValue;
  }

  if (isListType(type)) {
    var itemType = type.ofType;

    if (valueNode.kind === Kind.LIST) {
      var coercedValues = [];

      for (var _i2 = 0, _valueNode$values2 = valueNode.values; _i2 < _valueNode$values2.length; _i2++) {
        var itemNode = _valueNode$values2[_i2];

        if (isMissingVariable(itemNode, variables)) {
          // If an array contains a missing variable, it is either coerced to
          // null or if the item type is non-null, it considered invalid.
          if (isNonNullType(itemType)) {
            return; // Invalid: intentionally return no value.
          }

          coercedValues.push(null);
        } else {
          var itemValue = valueFromAST(itemNode, itemType, variables);

          if (isInvalid(itemValue)) {
            return; // Invalid: intentionally return no value.
          }

          coercedValues.push(itemValue);
        }
      }

      return coercedValues;
    }

    var coercedValue = valueFromAST(valueNode, itemType, variables);

    if (isInvalid(coercedValue)) {
      return; // Invalid: intentionally return no value.
    }

    return [coercedValue];
  }

  if (isInputObjectType(type)) {
    if (valueNode.kind !== Kind.OBJECT) {
      return; // Invalid: intentionally return no value.
    }

    var coercedObj = Object.create(null);
    var fieldNodes = keyMap(valueNode.fields, function (field) {
      return field.name.value;
    });

    for (var _i4 = 0, _objectValues2 = objectValues(type.getFields()); _i4 < _objectValues2.length; _i4++) {
      var field = _objectValues2[_i4];
      var fieldNode = fieldNodes[field.name];

      if (!fieldNode || isMissingVariable(fieldNode.value, variables)) {
        if (field.defaultValue !== undefined) {
          coercedObj[field.name] = field.defaultValue;
        } else if (isNonNullType(field.type)) {
          return; // Invalid: intentionally return no value.
        }

        continue;
      }

      var fieldValue = valueFromAST(fieldNode.value, field.type, variables);

      if (isInvalid(fieldValue)) {
        return; // Invalid: intentionally return no value.
      }

      coercedObj[field.name] = fieldValue;
    }

    return coercedObj;
  }

  if (isEnumType(type)) {
    if (valueNode.kind !== Kind.ENUM) {
      return; // Invalid: intentionally return no value.
    }

    var enumValue = type.getValue(valueNode.value);

    if (!enumValue) {
      return; // Invalid: intentionally return no value.
    }

    return enumValue.value;
  }

  /* istanbul ignore else */
  if (isScalarType(type)) {
    // Scalars fulfill parsing a literal value via parseLiteral().
    // Invalid values represent a failure to parse correctly, in which case
    // no value is returned.
    var result;

    try {
      result = type.parseLiteral(valueNode, variables);
    } catch (_error) {
      return; // Invalid: intentionally return no value.
    }

    if (isInvalid(result)) {
      return; // Invalid: intentionally return no value.
    }

    return result;
  } // Not reachable. All possible input types have been considered.


  /* istanbul ignore next */
  invariant(false, 'Unexpected input type: ' + inspect(type));
} // Returns true if the provided valueNode is a variable which is not defined
// in the set of variables.

function isMissingVariable(valueNode, variables) {
  return valueNode.kind === Kind.VARIABLE && (!variables || isInvalid(variables[valueNode.name.value]));
}

var MAX_SUGGESTIONS = 5;
/**
 * Given [ A, B, C ] return ' Did you mean A, B, or C?'.
 */

// eslint-disable-next-line no-redeclare
function didYouMean(firstArg, secondArg) {
  var _ref = typeof firstArg === 'string' ? [firstArg, secondArg] : [undefined, firstArg],
      subMessage = _ref[0],
      suggestions = _ref[1];

  var message = ' Did you mean ';

  if (subMessage) {
    message += subMessage + ' ';
  }

  switch (suggestions.length) {
    case 0:
      return '';

    case 1:
      return message + suggestions[0] + '?';

    case 2:
      return message + suggestions[0] + ' or ' + suggestions[1] + '?';
  }

  var selected = suggestions.slice(0, MAX_SUGGESTIONS);
  var lastItem = selected.pop();
  return message + selected.join(', ') + ', or ' + lastItem + '?';
}

/**
 * Given an invalid input string and a list of valid options, returns a filtered
 * list of valid options sorted based on their similarity with the input.
 */
function suggestionList(input, options) {
  var optionsByDistance = Object.create(null);
  var inputThreshold = input.length / 2;

  for (var _i2 = 0; _i2 < options.length; _i2++) {
    var option = options[_i2];
    var distance = lexicalDistance(input, option);
    var threshold = Math.max(inputThreshold, option.length / 2, 1);

    if (distance <= threshold) {
      optionsByDistance[option] = distance;
    }
  }

  return Object.keys(optionsByDistance).sort(function (a, b) {
    return optionsByDistance[a] - optionsByDistance[b];
  });
}
/**
 * Computes the lexical distance between strings A and B.
 *
 * The "distance" between two strings is given by counting the minimum number
 * of edits needed to transform string A into string B. An edit can be an
 * insertion, deletion, or substitution of a single character, or a swap of two
 * adjacent characters.
 *
 * Includes a custom alteration from Damerau-Levenshtein to treat case changes
 * as a single edit which helps identify mis-cased values with an edit distance
 * of 1.
 *
 * This distance can be useful for detecting typos in input or sorting
 *
 * @param {string} a
 * @param {string} b
 * @return {int} distance in number of edits
 */

function lexicalDistance(aStr, bStr) {
  if (aStr === bStr) {
    return 0;
  }

  var d = [];
  var a = aStr.toLowerCase();
  var b = bStr.toLowerCase();
  var aLength = a.length;
  var bLength = b.length; // Any case change counts as a single edit

  if (a === b) {
    return 1;
  }

  for (var i = 0; i <= aLength; i++) {
    d[i] = [i];
  }

  for (var j = 1; j <= bLength; j++) {
    d[0][j] = j;
  }

  for (var _i3 = 1; _i3 <= aLength; _i3++) {
    for (var _j = 1; _j <= bLength; _j++) {
      var cost = a[_i3 - 1] === b[_j - 1] ? 0 : 1;
      d[_i3][_j] = Math.min(d[_i3 - 1][_j] + 1, d[_i3][_j - 1] + 1, d[_i3 - 1][_j - 1] + cost);

      if (_i3 > 1 && _j > 1 && a[_i3 - 1] === b[_j - 2] && a[_i3 - 2] === b[_j - 1]) {
        d[_i3][_j] = Math.min(d[_i3][_j], d[_i3 - 2][_j - 2] + cost);
      }
    }
  }

  return d[aLength][bLength];
}

/**
 * Coerces a JavaScript value given a GraphQL Input Type.
 */
function coerceInputValue(inputValue, type) {
  var onError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultOnError;
  return coerceInputValueImpl(inputValue, type, onError);
}

function defaultOnError(path, invalidValue, error) {
  var errorPrefix = 'Invalid value ' + inspect(invalidValue);

  if (path.length > 0) {
    errorPrefix += " at \"value".concat(printPathArray(path), "\": ");
  }

  error.message = errorPrefix + ': ' + error.message;
  throw error;
}

function coerceInputValueImpl(inputValue, type, onError, path) {
  if (isNonNullType(type)) {
    if (inputValue != null) {
      return coerceInputValueImpl(inputValue, type.ofType, onError, path);
    }

    onError(pathToArray(path), inputValue, new GraphQLError("Expected non-nullable type ".concat(inspect(type), " not to be null.")));
    return;
  }

  if (inputValue == null) {
    // Explicitly return the value null.
    return null;
  }

  if (isListType(type)) {
    var itemType = type.ofType;

    if (isCollection(inputValue)) {
      var coercedValue = [];
      forEach(inputValue, function (itemValue, index) {
        coercedValue.push(coerceInputValueImpl(itemValue, itemType, onError, addPath(path, index)));
      });
      return coercedValue;
    } // Lists accept a non-list value as a list of one.


    return [coerceInputValueImpl(inputValue, itemType, onError, path)];
  }

  if (isInputObjectType(type)) {
    if (!isObjectLike(inputValue)) {
      onError(pathToArray(path), inputValue, new GraphQLError("Expected type ".concat(type.name, " to be an object.")));
      return;
    }

    var _coercedValue = {};
    var fieldDefs = type.getFields();

    for (var _i2 = 0, _objectValues2 = objectValues(fieldDefs); _i2 < _objectValues2.length; _i2++) {
      var field = _objectValues2[_i2];
      var fieldValue = inputValue[field.name];

      if (fieldValue === undefined) {
        if (field.defaultValue !== undefined) {
          _coercedValue[field.name] = field.defaultValue;
        } else if (isNonNullType(field.type)) {
          var typeStr = inspect(field.type);
          onError(pathToArray(path), inputValue, new GraphQLError("Field ".concat(field.name, " of required type ").concat(typeStr, " was not provided.")));
        }

        continue;
      }

      _coercedValue[field.name] = coerceInputValueImpl(fieldValue, field.type, onError, addPath(path, field.name));
    } // Ensure every provided field is defined.


    for (var _i4 = 0, _Object$keys2 = Object.keys(inputValue); _i4 < _Object$keys2.length; _i4++) {
      var fieldName = _Object$keys2[_i4];

      if (!fieldDefs[fieldName]) {
        var suggestions = suggestionList(fieldName, Object.keys(type.getFields()));
        onError(pathToArray(path), inputValue, new GraphQLError("Field \"".concat(fieldName, "\" is not defined by type ").concat(type.name, ".") + didYouMean(suggestions)));
      }
    }

    return _coercedValue;
  }

  if (isScalarType(type)) {
    var parseResult; // Scalars determine if a input value is valid via parseValue(), which can
    // throw to indicate failure. If it throws, maintain a reference to
    // the original error.

    try {
      parseResult = type.parseValue(inputValue);
    } catch (error) {
      onError(pathToArray(path), inputValue, new GraphQLError("Expected type ".concat(type.name, ". ") + error.message, undefined, undefined, undefined, undefined, error));
      return;
    }

    if (parseResult === undefined) {
      onError(pathToArray(path), inputValue, new GraphQLError("Expected type ".concat(type.name, ".")));
    }

    return parseResult;
  }

  /* istanbul ignore else */
  if (isEnumType(type)) {
    if (typeof inputValue === 'string') {
      var enumValue = type.getValue(inputValue);

      if (enumValue) {
        return enumValue.value;
      }
    }

    var _suggestions = suggestionList(String(inputValue), type.getValues().map(function (enumValue) {
      return enumValue.name;
    }));

    onError(pathToArray(path), inputValue, new GraphQLError("Expected type ".concat(type.name, ".") + didYouMean(_suggestions)));
    return;
  } // Not reachable. All possible input types have been considered.


  /* istanbul ignore next */
  invariant(false, 'Unexpected input type: ' + inspect(type));
}

/**
 * Prepares an object map of variableValues of the correct type based on the
 * provided variable definitions and arbitrary input. If the input cannot be
 * parsed to match the variable definitions, a GraphQLError will be thrown.
 *
 * Note: The returned value is a plain Object with a prototype, since it is
 * exposed to user code. Care should be taken to not pull values from the
 * Object prototype.
 */
function getVariableValues(schema, varDefNodes, inputs, options) {
  var maxErrors = options && options.maxErrors;
  var errors = [];

  try {
    var coerced = coerceVariableValues(schema, varDefNodes, inputs, function (error) {
      if (maxErrors != null && errors.length >= maxErrors) {
        throw new GraphQLError('Too many errors processing variables, error limit reached. Execution aborted.');
      }

      errors.push(error);
    });

    if (errors.length === 0) {
      return {
        coerced: coerced
      };
    }
  } catch (error) {
    errors.push(error);
  }

  return {
    errors: errors
  };
}

function coerceVariableValues(schema, varDefNodes, inputs, onError) {
  var coercedValues = {};

  var _loop = function _loop(_i2) {
    var varDefNode = varDefNodes[_i2];
    var varName = varDefNode.variable.name.value;
    var varType = typeFromAST(schema, varDefNode.type);

    if (!isInputType(varType)) {
      // Must use input types for variables. This should be caught during
      // validation, however is checked again here for safety.
      var varTypeStr = print(varDefNode.type);
      onError(new GraphQLError("Variable \"$".concat(varName, "\" expected value of type \"").concat(varTypeStr, "\" which cannot be used as an input type."), varDefNode.type));
      return "continue";
    }

    if (!hasOwnProperty(inputs, varName)) {
      if (varDefNode.defaultValue) {
        coercedValues[varName] = valueFromAST(varDefNode.defaultValue, varType);
      } else if (isNonNullType(varType)) {
        var _varTypeStr = inspect(varType);

        onError(new GraphQLError("Variable \"$".concat(varName, "\" of required type \"").concat(_varTypeStr, "\" was not provided."), varDefNode));
      }

      return "continue";
    }

    var value = inputs[varName];

    if (value === null && isNonNullType(varType)) {
      var _varTypeStr2 = inspect(varType);

      onError(new GraphQLError("Variable \"$".concat(varName, "\" of non-null type \"").concat(_varTypeStr2, "\" must not be null."), varDefNode));
      return "continue";
    }

    coercedValues[varName] = coerceInputValue(value, varType, function (path, invalidValue, error) {
      var prefix = "Variable \"$".concat(varName, "\" got invalid value ") + inspect(invalidValue);

      if (path.length > 0) {
        prefix += " at \"".concat(varName).concat(printPathArray(path), "\"");
      }

      onError(new GraphQLError(prefix + '; ' + error.message, varDefNode, undefined, undefined, undefined, error.originalError));
    });
  };

  for (var _i2 = 0; _i2 < varDefNodes.length; _i2++) {
    var _ret = _loop(_i2);

    if (_ret === "continue") continue;
  }

  return coercedValues;
}
/**
 * Prepares an object map of argument values given a list of argument
 * definitions and list of argument AST nodes.
 *
 * Note: The returned value is a plain Object with a prototype, since it is
 * exposed to user code. Care should be taken to not pull values from the
 * Object prototype.
 */


function getArgumentValues(def, node, variableValues) {
  var coercedValues = {};
  var argNodeMap = keyMap(node.arguments || [], function (arg) {
    return arg.name.value;
  });

  for (var _i4 = 0, _def$args2 = def.args; _i4 < _def$args2.length; _i4++) {
    var argDef = _def$args2[_i4];
    var name = argDef.name;
    var argType = argDef.type;
    var argumentNode = argNodeMap[name];

    if (!argumentNode) {
      if (argDef.defaultValue !== undefined) {
        coercedValues[name] = argDef.defaultValue;
      } else if (isNonNullType(argType)) {
        throw new GraphQLError("Argument \"".concat(name, "\" of required type \"").concat(inspect(argType), "\" ") + 'was not provided.', node);
      }

      continue;
    }

    var valueNode = argumentNode.value;
    var isNull = valueNode.kind === Kind.NULL;

    if (valueNode.kind === Kind.VARIABLE) {
      var variableName = valueNode.name.value;

      if (variableValues == null || !hasOwnProperty(variableValues, variableName)) {
        if (argDef.defaultValue !== undefined) {
          coercedValues[name] = argDef.defaultValue;
        } else if (isNonNullType(argType)) {
          throw new GraphQLError("Argument \"".concat(name, "\" of required type \"").concat(inspect(argType), "\" ") + "was provided the variable \"$".concat(variableName, "\" which was not provided a runtime value."), valueNode);
        }

        continue;
      }

      isNull = variableValues[variableName] == null;
    }

    if (isNull && isNonNullType(argType)) {
      throw new GraphQLError("Argument \"".concat(name, "\" of non-null type \"").concat(inspect(argType), "\" ") + 'must not be null.', valueNode);
    }

    var coercedValue = valueFromAST(valueNode, argType, variableValues);

    if (coercedValue === undefined) {
      // Note: ValuesOfCorrectType validation should catch this before
      // execution. This is a runtime check to ensure execution does not
      // continue with an invalid argument value.
      throw new GraphQLError("Argument \"".concat(name, "\" has invalid value ").concat(print(valueNode), "."), valueNode);
    }

    coercedValues[name] = coercedValue;
  }

  return coercedValues;
}
/**
 * Prepares an object map of argument values given a directive definition
 * and a AST node which may contain directives. Optionally also accepts a map
 * of variable values.
 *
 * If the directive does not exist on the node, returns undefined.
 *
 * Note: The returned value is a plain Object with a prototype, since it is
 * exposed to user code. Care should be taken to not pull values from the
 * Object prototype.
 */

function getDirectiveValues(directiveDef, node, variableValues) {
  var directiveNode = node.directives && find(node.directives, function (directive) {
    return directive.name.value === directiveDef.name;
  });

  if (directiveNode) {
    return getArgumentValues(directiveDef, directiveNode, variableValues);
  }
}

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/**
 * Terminology
 *
 * "Definitions" are the generic name for top-level statements in the document.
 * Examples of this include:
 * 1) Operations (such as a query)
 * 2) Fragments
 *
 * "Operations" are a generic name for requests in the document.
 * Examples of this include:
 * 1) query,
 * 2) mutation
 *
 * "Selections" are the definitions that can appear legally and at
 * single level of the query. These include:
 * 1) field references e.g "a"
 * 2) fragment "spreads" e.g. "...c"
 * 3) inline fragment "spreads" e.g. "...on Type { a }"
 */

/**
 * Data that must be available at all points during query execution.
 *
 * Namely, schema of the type system that is currently executing,
 * and the fragments defined in the query document
 */

function execute(argsOrSchema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, typeResolver) {
  /* eslint-enable no-redeclare */
  // Extract arguments from object args if provided.
  return arguments.length === 1 ? executeImpl(argsOrSchema) : executeImpl({
    schema: argsOrSchema,
    document: document,
    rootValue: rootValue,
    contextValue: contextValue,
    variableValues: variableValues,
    operationName: operationName,
    fieldResolver: fieldResolver,
    typeResolver: typeResolver
  });
}

function executeImpl(args) {
  var schema = args.schema,
      document = args.document,
      rootValue = args.rootValue,
      contextValue = args.contextValue,
      variableValues = args.variableValues,
      operationName = args.operationName,
      fieldResolver = args.fieldResolver,
      typeResolver = args.typeResolver; // If arguments are missing or incorrect, throw an error.

  assertValidExecutionArguments(schema, document, variableValues); // If a valid execution context cannot be created due to incorrect arguments,
  // a "Response" with only errors is returned.

  var exeContext = buildExecutionContext(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, typeResolver); // Return early errors if execution context failed.

  if (Array.isArray(exeContext)) {
    return {
      errors: exeContext
    };
  } // Return a Promise that will eventually resolve to the data described by
  // The "Response" section of the GraphQL specification.
  //
  // If errors are encountered while executing a GraphQL field, only that
  // field and its descendants will be omitted, and sibling fields will still
  // be executed. An execution which encounters errors will still result in a
  // resolved Promise.


  var data = executeOperation(exeContext, exeContext.operation, rootValue);
  return buildResponse(exeContext, data);
}
/**
 * Given a completed execution context and data, build the { errors, data }
 * response defined by the "Response" section of the GraphQL specification.
 */


function buildResponse(exeContext, data) {
  if (isPromise(data)) {
    return data.then(function (resolved) {
      return buildResponse(exeContext, resolved);
    });
  }

  return exeContext.errors.length === 0 ? {
    data: data
  } : {
    errors: exeContext.errors,
    data: data
  };
}
/**
 * Essential assertions before executing to provide developer feedback for
 * improper use of the GraphQL library.
 */


function assertValidExecutionArguments(schema, document, rawVariableValues) {
  document || devAssert(0, 'Must provide document'); // If the schema used for execution is invalid, throw an error.

  assertValidSchema(schema); // Variables, if provided, must be an object.

  rawVariableValues == null || isObjectLike(rawVariableValues) || devAssert(0, 'Variables must be provided as an Object where each property is a variable value. Perhaps look to see if an unparsed JSON string was provided.');
}
/**
 * Constructs a ExecutionContext object from the arguments passed to
 * execute, which we will pass throughout the other execution methods.
 *
 * Throws a GraphQLError if a valid execution context cannot be created.
 */

function buildExecutionContext(schema, document, rootValue, contextValue, rawVariableValues, operationName, fieldResolver, typeResolver) {
  var operation;
  var hasMultipleAssumedOperations = false;
  var fragments = Object.create(null);

  for (var _i2 = 0, _document$definitions2 = document.definitions; _i2 < _document$definitions2.length; _i2++) {
    var definition = _document$definitions2[_i2];

    switch (definition.kind) {
      case Kind.OPERATION_DEFINITION:
        if (!operationName && operation) {
          hasMultipleAssumedOperations = true;
        } else if (!operationName || definition.name && definition.name.value === operationName) {
          operation = definition;
        }

        break;

      case Kind.FRAGMENT_DEFINITION:
        fragments[definition.name.value] = definition;
        break;
    }
  }

  if (!operation) {
    if (operationName) {
      return [new GraphQLError("Unknown operation named \"".concat(operationName, "\"."))];
    }

    return [new GraphQLError('Must provide an operation.')];
  }

  if (hasMultipleAssumedOperations) {
    return [new GraphQLError('Must provide operation name if query contains multiple operations.')];
  }

  var coercedVariableValues = getVariableValues(schema, operation.variableDefinitions || [], rawVariableValues || {}, {
    maxErrors: 50
  });

  if (coercedVariableValues.errors) {
    return coercedVariableValues.errors;
  }

  return {
    schema: schema,
    fragments: fragments,
    rootValue: rootValue,
    contextValue: contextValue,
    operation: operation,
    variableValues: coercedVariableValues.coerced,
    fieldResolver: fieldResolver || defaultFieldResolver,
    typeResolver: typeResolver || defaultTypeResolver,
    errors: []
  };
}
/**
 * Implements the "Evaluating operations" section of the spec.
 */

function executeOperation(exeContext, operation, rootValue) {
  var type = getOperationRootType(exeContext.schema, operation);
  var fields = collectFields(exeContext, type, operation.selectionSet, Object.create(null), Object.create(null));
  var path = undefined; // Errors from sub-fields of a NonNull type may propagate to the top level,
  // at which point we still log the error and null the parent field, which
  // in this case is the entire response.
  //
  // Similar to completeValueCatchingError.

  try {
    var result = operation.operation === 'mutation' ? executeFieldsSerially(exeContext, type, rootValue, path, fields) : executeFields(exeContext, type, rootValue, path, fields);

    if (isPromise(result)) {
      return result.then(undefined, function (error) {
        exeContext.errors.push(error);
        return Promise.resolve(null);
      });
    }

    return result;
  } catch (error) {
    exeContext.errors.push(error);
    return null;
  }
}
/**
 * Implements the "Evaluating selection sets" section of the spec
 * for "write" mode.
 */


function executeFieldsSerially(exeContext, parentType, sourceValue, path, fields) {
  return promiseReduce(Object.keys(fields), function (results, responseName) {
    var fieldNodes = fields[responseName];
    var fieldPath = addPath(path, responseName);
    var result = resolveField(exeContext, parentType, sourceValue, fieldNodes, fieldPath);

    if (result === undefined) {
      return results;
    }

    if (isPromise(result)) {
      return result.then(function (resolvedResult) {
        results[responseName] = resolvedResult;
        return results;
      });
    }

    results[responseName] = result;
    return results;
  }, Object.create(null));
}
/**
 * Implements the "Evaluating selection sets" section of the spec
 * for "read" mode.
 */


function executeFields(exeContext, parentType, sourceValue, path, fields) {
  var results = Object.create(null);
  var containsPromise = false;

  for (var _i4 = 0, _Object$keys2 = Object.keys(fields); _i4 < _Object$keys2.length; _i4++) {
    var responseName = _Object$keys2[_i4];
    var fieldNodes = fields[responseName];
    var fieldPath = addPath(path, responseName);
    var result = resolveField(exeContext, parentType, sourceValue, fieldNodes, fieldPath);

    if (result !== undefined) {
      results[responseName] = result;

      if (!containsPromise && isPromise(result)) {
        containsPromise = true;
      }
    }
  } // If there are no promises, we can just return the object


  if (!containsPromise) {
    return results;
  } // Otherwise, results is a map from field name to the result of resolving that
  // field, which is possibly a promise. Return a promise that will return this
  // same map, but with any promises replaced with the values they resolved to.


  return promiseForObject(results);
}
/**
 * Given a selectionSet, adds all of the fields in that selection to
 * the passed in map of fields, and returns it at the end.
 *
 * CollectFields requires the "runtime type" of an object. For a field which
 * returns an Interface or Union type, the "runtime type" will be the actual
 * Object type returned by that field.
 */


function collectFields(exeContext, runtimeType, selectionSet, fields, visitedFragmentNames) {
  for (var _i6 = 0, _selectionSet$selecti2 = selectionSet.selections; _i6 < _selectionSet$selecti2.length; _i6++) {
    var selection = _selectionSet$selecti2[_i6];

    switch (selection.kind) {
      case Kind.FIELD:
        {
          if (!shouldIncludeNode(exeContext, selection)) {
            continue;
          }

          var name = getFieldEntryKey(selection);

          if (!fields[name]) {
            fields[name] = [];
          }

          fields[name].push(selection);
          break;
        }

      case Kind.INLINE_FRAGMENT:
        {
          if (!shouldIncludeNode(exeContext, selection) || !doesFragmentConditionMatch(exeContext, selection, runtimeType)) {
            continue;
          }

          collectFields(exeContext, runtimeType, selection.selectionSet, fields, visitedFragmentNames);
          break;
        }

      case Kind.FRAGMENT_SPREAD:
        {
          var fragName = selection.name.value;

          if (visitedFragmentNames[fragName] || !shouldIncludeNode(exeContext, selection)) {
            continue;
          }

          visitedFragmentNames[fragName] = true;
          var fragment = exeContext.fragments[fragName];

          if (!fragment || !doesFragmentConditionMatch(exeContext, fragment, runtimeType)) {
            continue;
          }

          collectFields(exeContext, runtimeType, fragment.selectionSet, fields, visitedFragmentNames);
          break;
        }
    }
  }

  return fields;
}
/**
 * Determines if a field should be included based on the @include and @skip
 * directives, where @skip has higher precedence than @include.
 */

function shouldIncludeNode(exeContext, node) {
  var skip = getDirectiveValues(GraphQLSkipDirective, node, exeContext.variableValues);

  if (skip && skip.if === true) {
    return false;
  }

  var include = getDirectiveValues(GraphQLIncludeDirective, node, exeContext.variableValues);

  if (include && include.if === false) {
    return false;
  }

  return true;
}
/**
 * Determines if a fragment is applicable to the given type.
 */


function doesFragmentConditionMatch(exeContext, fragment, type) {
  var typeConditionNode = fragment.typeCondition;

  if (!typeConditionNode) {
    return true;
  }

  var conditionalType = typeFromAST(exeContext.schema, typeConditionNode);

  if (conditionalType === type) {
    return true;
  }

  if (isAbstractType(conditionalType)) {
    return exeContext.schema.isPossibleType(conditionalType, type);
  }

  return false;
}
/**
 * Implements the logic to compute the key of a given field's entry
 */


function getFieldEntryKey(node) {
  return node.alias ? node.alias.value : node.name.value;
}
/**
 * Resolves the field on the given source object. In particular, this
 * figures out the value that the field returns by calling its resolve function,
 * then calls completeValue to complete promises, serialize scalars, or execute
 * the sub-selection-set for objects.
 */


function resolveField(exeContext, parentType, source, fieldNodes, path) {
  var fieldNode = fieldNodes[0];
  var fieldName = fieldNode.name.value;
  var fieldDef = getFieldDef(exeContext.schema, parentType, fieldName);

  if (!fieldDef) {
    return;
  }

  var resolveFn = fieldDef.resolve || exeContext.fieldResolver;
  var info = buildResolveInfo(exeContext, fieldDef, fieldNodes, parentType, path); // Get the resolve function, regardless of if its result is normal
  // or abrupt (error).

  var result = resolveFieldValueOrError(exeContext, fieldDef, fieldNodes, resolveFn, source, info);
  return completeValueCatchingError(exeContext, fieldDef.type, fieldNodes, info, path, result);
}

function buildResolveInfo(exeContext, fieldDef, fieldNodes, parentType, path) {
  // The resolve function's optional fourth argument is a collection of
  // information about the current execution state.
  return {
    fieldName: fieldDef.name,
    fieldNodes: fieldNodes,
    returnType: fieldDef.type,
    parentType: parentType,
    path: path,
    schema: exeContext.schema,
    fragments: exeContext.fragments,
    rootValue: exeContext.rootValue,
    operation: exeContext.operation,
    variableValues: exeContext.variableValues
  };
} // Isolates the "ReturnOrAbrupt" behavior to not de-opt the `resolveField`
// function. Returns the result of resolveFn or the abrupt-return Error object.

function resolveFieldValueOrError(exeContext, fieldDef, fieldNodes, resolveFn, source, info) {
  try {
    // Build a JS object of arguments from the field.arguments AST, using the
    // variables scope to fulfill any variable references.
    // TODO: find a way to memoize, in case this field is within a List type.
    var args = getArgumentValues(fieldDef, fieldNodes[0], exeContext.variableValues); // The resolve function's optional third argument is a context value that
    // is provided to every resolve function within an execution. It is commonly
    // used to represent an authenticated user, or request-specific caches.

    var _contextValue = exeContext.contextValue;
    var result = resolveFn(source, args, _contextValue, info);
    return isPromise(result) ? result.then(undefined, asErrorInstance) : result;
  } catch (error) {
    return asErrorInstance(error);
  }
} // Sometimes a non-error is thrown, wrap it as an Error instance to ensure a
// consistent Error interface.

function asErrorInstance(error) {
  if (error instanceof Error) {
    return error;
  }

  return new Error('Unexpected error value: ' + inspect(error));
} // This is a small wrapper around completeValue which detects and logs errors
// in the execution context.


function completeValueCatchingError(exeContext, returnType, fieldNodes, info, path, result) {
  try {
    var completed;

    if (isPromise(result)) {
      completed = result.then(function (resolved) {
        return completeValue(exeContext, returnType, fieldNodes, info, path, resolved);
      });
    } else {
      completed = completeValue(exeContext, returnType, fieldNodes, info, path, result);
    }

    if (isPromise(completed)) {
      // Note: we don't rely on a `catch` method, but we do expect "thenable"
      // to take a second callback for the error case.
      return completed.then(undefined, function (error) {
        return handleFieldError(error, fieldNodes, path, returnType, exeContext);
      });
    }

    return completed;
  } catch (error) {
    return handleFieldError(error, fieldNodes, path, returnType, exeContext);
  }
}

function handleFieldError(rawError, fieldNodes, path, returnType, exeContext) {
  var error = locatedError(asErrorInstance(rawError), fieldNodes, pathToArray(path)); // If the field type is non-nullable, then it is resolved without any
  // protection from errors, however it still properly locates the error.

  if (isNonNullType(returnType)) {
    throw error;
  } // Otherwise, error protection is applied, logging the error and resolving
  // a null value for this field if one is encountered.


  exeContext.errors.push(error);
  return null;
}
/**
 * Implements the instructions for completeValue as defined in the
 * "Field entries" section of the spec.
 *
 * If the field type is Non-Null, then this recursively completes the value
 * for the inner type. It throws a field error if that completion returns null,
 * as per the "Nullability" section of the spec.
 *
 * If the field type is a List, then this recursively completes the value
 * for the inner type on each item in the list.
 *
 * If the field type is a Scalar or Enum, ensures the completed value is a legal
 * value of the type by calling the `serialize` method of GraphQL type
 * definition.
 *
 * If the field is an abstract type, determine the runtime type of the value
 * and then complete based on that type
 *
 * Otherwise, the field type expects a sub-selection set, and will complete the
 * value by evaluating all sub-selections.
 */


function completeValue(exeContext, returnType, fieldNodes, info, path, result) {
  // If result is an Error, throw a located error.
  if (result instanceof Error) {
    throw result;
  } // If field type is NonNull, complete for inner type, and throw field error
  // if result is null.


  if (isNonNullType(returnType)) {
    var completed = completeValue(exeContext, returnType.ofType, fieldNodes, info, path, result);

    if (completed === null) {
      throw new Error("Cannot return null for non-nullable field ".concat(info.parentType.name, ".").concat(info.fieldName, "."));
    }

    return completed;
  } // If result value is null-ish (null, undefined, or NaN) then return null.


  if (isNullish(result)) {
    return null;
  } // If field type is List, complete each item in the list with the inner type


  if (isListType(returnType)) {
    return completeListValue(exeContext, returnType, fieldNodes, info, path, result);
  } // If field type is a leaf type, Scalar or Enum, serialize to a valid value,
  // returning null if serialization is not possible.


  if (isLeafType(returnType)) {
    return completeLeafValue(returnType, result);
  } // If field type is an abstract type, Interface or Union, determine the
  // runtime Object type and complete for that type.


  if (isAbstractType(returnType)) {
    return completeAbstractValue(exeContext, returnType, fieldNodes, info, path, result);
  } // If field type is Object, execute and complete all sub-selections.


  /* istanbul ignore else */
  if (isObjectType(returnType)) {
    return completeObjectValue(exeContext, returnType, fieldNodes, info, path, result);
  } // Not reachable. All possible output types have been considered.


  /* istanbul ignore next */
  invariant(false, 'Cannot complete value of unexpected output type: ' + inspect(returnType));
}
/**
 * Complete a list value by completing each item in the list with the
 * inner type
 */


function completeListValue(exeContext, returnType, fieldNodes, info, path, result) {
  if (!isCollection(result)) {
    throw new GraphQLError("Expected Iterable, but did not find one for field ".concat(info.parentType.name, ".").concat(info.fieldName, "."));
  } // This is specified as a simple map, however we're optimizing the path
  // where the list contains no Promises by avoiding creating another Promise.


  var itemType = returnType.ofType;
  var containsPromise = false;
  var completedResults = [];
  forEach(result, function (item, index) {
    // No need to modify the info object containing the path,
    // since from here on it is not ever accessed by resolver functions.
    var fieldPath = addPath(path, index);
    var completedItem = completeValueCatchingError(exeContext, itemType, fieldNodes, info, fieldPath, item);

    if (!containsPromise && isPromise(completedItem)) {
      containsPromise = true;
    }

    completedResults.push(completedItem);
  });
  return containsPromise ? Promise.all(completedResults) : completedResults;
}
/**
 * Complete a Scalar or Enum by serializing to a valid value, returning
 * null if serialization is not possible.
 */


function completeLeafValue(returnType, result) {
  var serializedResult = returnType.serialize(result);

  if (isInvalid(serializedResult)) {
    throw new Error("Expected a value of type \"".concat(inspect(returnType), "\" but ") + "received: ".concat(inspect(result)));
  }

  return serializedResult;
}
/**
 * Complete a value of an abstract type by determining the runtime object type
 * of that value, then complete the value for that type.
 */


function completeAbstractValue(exeContext, returnType, fieldNodes, info, path, result) {
  var resolveTypeFn = returnType.resolveType || exeContext.typeResolver;
  var contextValue = exeContext.contextValue;
  var runtimeType = resolveTypeFn(result, contextValue, info, returnType);

  if (isPromise(runtimeType)) {
    return runtimeType.then(function (resolvedRuntimeType) {
      return completeObjectValue(exeContext, ensureValidRuntimeType(resolvedRuntimeType, exeContext, returnType, fieldNodes, info, result), fieldNodes, info, path, result);
    });
  }

  return completeObjectValue(exeContext, ensureValidRuntimeType(runtimeType, exeContext, returnType, fieldNodes, info, result), fieldNodes, info, path, result);
}

function ensureValidRuntimeType(runtimeTypeOrName, exeContext, returnType, fieldNodes, info, result) {
  var runtimeType = typeof runtimeTypeOrName === 'string' ? exeContext.schema.getType(runtimeTypeOrName) : runtimeTypeOrName;

  if (!isObjectType(runtimeType)) {
    throw new GraphQLError("Abstract type ".concat(returnType.name, " must resolve to an Object type at runtime for field ").concat(info.parentType.name, ".").concat(info.fieldName, " with ") + "value ".concat(inspect(result), ", received \"").concat(inspect(runtimeType), "\". ") + "Either the ".concat(returnType.name, " type should provide a \"resolveType\" function or each possible type should provide an \"isTypeOf\" function."), fieldNodes);
  }

  if (!exeContext.schema.isPossibleType(returnType, runtimeType)) {
    throw new GraphQLError("Runtime Object type \"".concat(runtimeType.name, "\" is not a possible type for \"").concat(returnType.name, "\"."), fieldNodes);
  }

  return runtimeType;
}
/**
 * Complete an Object value by executing all sub-selections.
 */


function completeObjectValue(exeContext, returnType, fieldNodes, info, path, result) {
  // If there is an isTypeOf predicate function, call it with the
  // current result. If isTypeOf returns false, then raise an error rather
  // than continuing execution.
  if (returnType.isTypeOf) {
    var isTypeOf = returnType.isTypeOf(result, exeContext.contextValue, info);

    if (isPromise(isTypeOf)) {
      return isTypeOf.then(function (resolvedIsTypeOf) {
        if (!resolvedIsTypeOf) {
          throw invalidReturnTypeError(returnType, result, fieldNodes);
        }

        return collectAndExecuteSubfields(exeContext, returnType, fieldNodes, path, result);
      });
    }

    if (!isTypeOf) {
      throw invalidReturnTypeError(returnType, result, fieldNodes);
    }
  }

  return collectAndExecuteSubfields(exeContext, returnType, fieldNodes, path, result);
}

function invalidReturnTypeError(returnType, result, fieldNodes) {
  return new GraphQLError("Expected value of type \"".concat(returnType.name, "\" but got: ").concat(inspect(result), "."), fieldNodes);
}

function collectAndExecuteSubfields(exeContext, returnType, fieldNodes, path, result) {
  // Collect sub-fields to execute to complete this value.
  var subFieldNodes = collectSubfields(exeContext, returnType, fieldNodes);
  return executeFields(exeContext, returnType, result, path, subFieldNodes);
}
/**
 * A memoized collection of relevant subfields with regard to the return
 * type. Memoizing ensures the subfields are not repeatedly calculated, which
 * saves overhead when resolving lists of values.
 */


var collectSubfields = memoize3(_collectSubfields);

function _collectSubfields(exeContext, returnType, fieldNodes) {
  var subFieldNodes = Object.create(null);
  var visitedFragmentNames = Object.create(null);

  for (var _i8 = 0; _i8 < fieldNodes.length; _i8++) {
    var node = fieldNodes[_i8];

    if (node.selectionSet) {
      subFieldNodes = collectFields(exeContext, returnType, node.selectionSet, subFieldNodes, visitedFragmentNames);
    }
  }

  return subFieldNodes;
}
/**
 * If a resolveType function is not given, then a default resolve behavior is
 * used which attempts two strategies:
 *
 * First, See if the provided value has a `__typename` field defined, if so, use
 * that value as name of the resolved type.
 *
 * Otherwise, test each possible type for the abstract type by calling
 * isTypeOf for the object being coerced, returning the first type that matches.
 */


var defaultTypeResolver = function defaultTypeResolver(value, contextValue, info, abstractType) {
  // First, look for `__typename`.
  if (isObjectLike(value) && typeof value.__typename === 'string') {
    return value.__typename;
  } // Otherwise, test each possible type.


  var possibleTypes = info.schema.getPossibleTypes(abstractType);
  var promisedIsTypeOfResults = [];

  for (var i = 0; i < possibleTypes.length; i++) {
    var type = possibleTypes[i];

    if (type.isTypeOf) {
      var isTypeOfResult = type.isTypeOf(value, contextValue, info);

      if (isPromise(isTypeOfResult)) {
        promisedIsTypeOfResults[i] = isTypeOfResult;
      } else if (isTypeOfResult) {
        return type;
      }
    }
  }

  if (promisedIsTypeOfResults.length) {
    return Promise.all(promisedIsTypeOfResults).then(function (isTypeOfResults) {
      for (var _i9 = 0; _i9 < isTypeOfResults.length; _i9++) {
        if (isTypeOfResults[_i9]) {
          return possibleTypes[_i9];
        }
      }
    });
  }
};
/**
 * If a resolve function is not given, then a default resolve behavior is used
 * which takes the property of the source object of the same name as the field
 * and returns it as the result, or if it's a function, returns the result
 * of calling that function while passing along args and context value.
 */

var defaultFieldResolver = function defaultFieldResolver(source, args, contextValue, info) {
  // ensure source is a value for which property access is acceptable.
  if (isObjectLike(source) || typeof source === 'function') {
    var property = source[info.fieldName];

    if (typeof property === 'function') {
      return source[info.fieldName](args, contextValue, info);
    }

    return property;
  }
};
/**
 * This method looks up the field on the given type definition.
 * It has special casing for the two introspection fields, __schema
 * and __typename. __typename is special because it can always be
 * queried as a field, even in situations where no other fields
 * are allowed, like on a Union. __schema could get automatically
 * added to the query type, but that would require mutating type
 * definitions, which would cause issues.
 */

function getFieldDef(schema, parentType, fieldName) {
  if (fieldName === SchemaMetaFieldDef.name && schema.getQueryType() === parentType) {
    return SchemaMetaFieldDef;
  } else if (fieldName === TypeMetaFieldDef.name && schema.getQueryType() === parentType) {
    return TypeMetaFieldDef;
  } else if (fieldName === TypeNameMetaFieldDef.name) {
    return TypeNameMetaFieldDef;
  }

  return parentType.getFields()[fieldName];
}



var index$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  responsePathAsArray: pathToArray,
  execute: execute,
  defaultFieldResolver: defaultFieldResolver,
  defaultTypeResolver: defaultTypeResolver,
  getDirectiveValues: getDirectiveValues
});

/**
 * A representation of source input to GraphQL.
 * `name` and `locationOffset` are optional. They are useful for clients who
 * store GraphQL documents in source files; for example, if the GraphQL input
 * starts at line 40 in a file named Foo.graphql, it might be useful for name to
 * be "Foo.graphql" and location to be `{ line: 40, column: 0 }`.
 * line and column in locationOffset are 1-indexed
 */
var Source = function Source(body, name, locationOffset) {
  this.body = body;
  this.name = name || 'GraphQL request';
  this.locationOffset = locationOffset || {
    line: 1,
    column: 1
  };
  this.locationOffset.line > 0 || devAssert(0, 'line in locationOffset is 1-indexed and must be positive');
  this.locationOffset.column > 0 || devAssert(0, 'column in locationOffset is 1-indexed and must be positive');
}; // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported

defineToStringTag(Source);

/**
 * An exported enum describing the different kinds of tokens that the
 * lexer emits.
 */
var TokenKind = Object.freeze({
  SOF: '<SOF>',
  EOF: '<EOF>',
  BANG: '!',
  DOLLAR: '$',
  AMP: '&',
  PAREN_L: '(',
  PAREN_R: ')',
  SPREAD: '...',
  COLON: ':',
  EQUALS: '=',
  AT: '@',
  BRACKET_L: '[',
  BRACKET_R: ']',
  BRACE_L: '{',
  PIPE: '|',
  BRACE_R: '}',
  NAME: 'Name',
  INT: 'Int',
  FLOAT: 'Float',
  STRING: 'String',
  BLOCK_STRING: 'BlockString',
  COMMENT: 'Comment'
});
/**
 * The enum type representing the token kinds values.
 */

/**
 * Given a Source object, this returns a Lexer for that source.
 * A Lexer is a stateful stream generator in that every time
 * it is advanced, it returns the next token in the Source. Assuming the
 * source lexes, the final Token emitted by the lexer will be of kind
 * EOF, after which the lexer will repeatedly return the same EOF token
 * whenever called.
 */

function createLexer(source, options) {
  var startOfFileToken = new Tok(TokenKind.SOF, 0, 0, 0, 0, null);
  var lexer = {
    source: source,
    options: options,
    lastToken: startOfFileToken,
    token: startOfFileToken,
    line: 1,
    lineStart: 0,
    advance: advanceLexer,
    lookahead: lookahead
  };
  return lexer;
}

function advanceLexer() {
  this.lastToken = this.token;
  var token = this.token = this.lookahead();
  return token;
}

function lookahead() {
  var token = this.token;

  if (token.kind !== TokenKind.EOF) {
    do {
      // Note: next is only mutable during parsing, so we cast to allow this.
      token = token.next || (token.next = readToken(this, token));
    } while (token.kind === TokenKind.COMMENT);
  }

  return token;
}
/**
 * The return type of createLexer.
 */


// @internal
function isPunctuatorToken(token) {
  var kind = token.kind;
  return kind === TokenKind.BANG || kind === TokenKind.DOLLAR || kind === TokenKind.AMP || kind === TokenKind.PAREN_L || kind === TokenKind.PAREN_R || kind === TokenKind.SPREAD || kind === TokenKind.COLON || kind === TokenKind.EQUALS || kind === TokenKind.AT || kind === TokenKind.BRACKET_L || kind === TokenKind.BRACKET_R || kind === TokenKind.BRACE_L || kind === TokenKind.PIPE || kind === TokenKind.BRACE_R;
}
/**
 * Helper function for constructing the Token object.
 */

function Tok(kind, start, end, line, column, prev, value) {
  this.kind = kind;
  this.start = start;
  this.end = end;
  this.line = line;
  this.column = column;
  this.value = value;
  this.prev = prev;
  this.next = null;
} // Print a simplified form when appearing in JSON/util.inspect.


defineToJSON(Tok, function () {
  return {
    kind: this.kind,
    value: this.value,
    line: this.line,
    column: this.column
  };
});

function printCharCode(code) {
  return (// NaN/undefined represents access beyond the end of the file.
    isNaN(code) ? TokenKind.EOF : // Trust JSON for ASCII.
    code < 0x007f ? JSON.stringify(String.fromCharCode(code)) : // Otherwise print the escaped form.
    "\"\\u".concat(('00' + code.toString(16).toUpperCase()).slice(-4), "\"")
  );
}
/**
 * Gets the next token from the source starting at the given position.
 *
 * This skips over whitespace until it finds the next lexable token, then lexes
 * punctuators immediately or calls the appropriate helper function for more
 * complicated tokens.
 */


function readToken(lexer, prev) {
  var source = lexer.source;
  var body = source.body;
  var bodyLength = body.length;
  var pos = positionAfterWhitespace(body, prev.end, lexer);
  var line = lexer.line;
  var col = 1 + pos - lexer.lineStart;

  if (pos >= bodyLength) {
    return new Tok(TokenKind.EOF, bodyLength, bodyLength, line, col, prev);
  }

  var code = body.charCodeAt(pos); // SourceCharacter

  switch (code) {
    // !
    case 33:
      return new Tok(TokenKind.BANG, pos, pos + 1, line, col, prev);
    // #

    case 35:
      return readComment(source, pos, line, col, prev);
    // $

    case 36:
      return new Tok(TokenKind.DOLLAR, pos, pos + 1, line, col, prev);
    // &

    case 38:
      return new Tok(TokenKind.AMP, pos, pos + 1, line, col, prev);
    // (

    case 40:
      return new Tok(TokenKind.PAREN_L, pos, pos + 1, line, col, prev);
    // )

    case 41:
      return new Tok(TokenKind.PAREN_R, pos, pos + 1, line, col, prev);
    // .

    case 46:
      if (body.charCodeAt(pos + 1) === 46 && body.charCodeAt(pos + 2) === 46) {
        return new Tok(TokenKind.SPREAD, pos, pos + 3, line, col, prev);
      }

      break;
    // :

    case 58:
      return new Tok(TokenKind.COLON, pos, pos + 1, line, col, prev);
    // =

    case 61:
      return new Tok(TokenKind.EQUALS, pos, pos + 1, line, col, prev);
    // @

    case 64:
      return new Tok(TokenKind.AT, pos, pos + 1, line, col, prev);
    // [

    case 91:
      return new Tok(TokenKind.BRACKET_L, pos, pos + 1, line, col, prev);
    // ]

    case 93:
      return new Tok(TokenKind.BRACKET_R, pos, pos + 1, line, col, prev);
    // {

    case 123:
      return new Tok(TokenKind.BRACE_L, pos, pos + 1, line, col, prev);
    // |

    case 124:
      return new Tok(TokenKind.PIPE, pos, pos + 1, line, col, prev);
    // }

    case 125:
      return new Tok(TokenKind.BRACE_R, pos, pos + 1, line, col, prev);
    // A-Z _ a-z

    case 65:
    case 66:
    case 67:
    case 68:
    case 69:
    case 70:
    case 71:
    case 72:
    case 73:
    case 74:
    case 75:
    case 76:
    case 77:
    case 78:
    case 79:
    case 80:
    case 81:
    case 82:
    case 83:
    case 84:
    case 85:
    case 86:
    case 87:
    case 88:
    case 89:
    case 90:
    case 95:
    case 97:
    case 98:
    case 99:
    case 100:
    case 101:
    case 102:
    case 103:
    case 104:
    case 105:
    case 106:
    case 107:
    case 108:
    case 109:
    case 110:
    case 111:
    case 112:
    case 113:
    case 114:
    case 115:
    case 116:
    case 117:
    case 118:
    case 119:
    case 120:
    case 121:
    case 122:
      return readName(source, pos, line, col, prev);
    // - 0-9

    case 45:
    case 48:
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
      return readNumber(source, pos, code, line, col, prev);
    // "

    case 34:
      if (body.charCodeAt(pos + 1) === 34 && body.charCodeAt(pos + 2) === 34) {
        return readBlockString(source, pos, line, col, prev, lexer);
      }

      return readString(source, pos, line, col, prev);
  }

  throw syntaxError(source, pos, unexpectedCharacterMessage(code));
}
/**
 * Report a message that an unexpected character was encountered.
 */


function unexpectedCharacterMessage(code) {
  if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
    return "Cannot contain the invalid character ".concat(printCharCode(code), ".");
  }

  if (code === 39) {
    // '
    return 'Unexpected single quote character (\'), did you mean to use a double quote (")?';
  }

  return "Cannot parse the unexpected character ".concat(printCharCode(code), ".");
}
/**
 * Reads from body starting at startPosition until it finds a non-whitespace
 * character, then returns the position of that character for lexing.
 */


function positionAfterWhitespace(body, startPosition, lexer) {
  var bodyLength = body.length;
  var position = startPosition;

  while (position < bodyLength) {
    var code = body.charCodeAt(position); // tab | space | comma | BOM

    if (code === 9 || code === 32 || code === 44 || code === 0xfeff) {
      ++position;
    } else if (code === 10) {
      // new line
      ++position;
      ++lexer.line;
      lexer.lineStart = position;
    } else if (code === 13) {
      // carriage return
      if (body.charCodeAt(position + 1) === 10) {
        position += 2;
      } else {
        ++position;
      }

      ++lexer.line;
      lexer.lineStart = position;
    } else {
      break;
    }
  }

  return position;
}
/**
 * Reads a comment token from the source file.
 *
 * #[\u0009\u0020-\uFFFF]*
 */


function readComment(source, start, line, col, prev) {
  var body = source.body;
  var code;
  var position = start;

  do {
    code = body.charCodeAt(++position);
  } while (!isNaN(code) && ( // SourceCharacter but not LineTerminator
  code > 0x001f || code === 0x0009));

  return new Tok(TokenKind.COMMENT, start, position, line, col, prev, body.slice(start + 1, position));
}
/**
 * Reads a number token from the source file, either a float
 * or an int depending on whether a decimal point appears.
 *
 * Int:   -?(0|[1-9][0-9]*)
 * Float: -?(0|[1-9][0-9]*)(\.[0-9]+)?((E|e)(+|-)?[0-9]+)?
 */


function readNumber(source, start, firstCode, line, col, prev) {
  var body = source.body;
  var code = firstCode;
  var position = start;
  var isFloat = false;

  if (code === 45) {
    // -
    code = body.charCodeAt(++position);
  }

  if (code === 48) {
    // 0
    code = body.charCodeAt(++position);

    if (code >= 48 && code <= 57) {
      throw syntaxError(source, position, "Invalid number, unexpected digit after 0: ".concat(printCharCode(code), "."));
    }
  } else {
    position = readDigits(source, position, code);
    code = body.charCodeAt(position);
  }

  if (code === 46) {
    // .
    isFloat = true;
    code = body.charCodeAt(++position);
    position = readDigits(source, position, code);
    code = body.charCodeAt(position);
  }

  if (code === 69 || code === 101) {
    // E e
    isFloat = true;
    code = body.charCodeAt(++position);

    if (code === 43 || code === 45) {
      // + -
      code = body.charCodeAt(++position);
    }

    position = readDigits(source, position, code);
    code = body.charCodeAt(position);
  } // Numbers cannot be followed by . or e


  if (code === 46 || code === 69 || code === 101) {
    throw syntaxError(source, position, "Invalid number, expected digit but got: ".concat(printCharCode(code), "."));
  }

  return new Tok(isFloat ? TokenKind.FLOAT : TokenKind.INT, start, position, line, col, prev, body.slice(start, position));
}
/**
 * Returns the new position in the source after reading digits.
 */


function readDigits(source, start, firstCode) {
  var body = source.body;
  var position = start;
  var code = firstCode;

  if (code >= 48 && code <= 57) {
    // 0 - 9
    do {
      code = body.charCodeAt(++position);
    } while (code >= 48 && code <= 57); // 0 - 9


    return position;
  }

  throw syntaxError(source, position, "Invalid number, expected digit but got: ".concat(printCharCode(code), "."));
}
/**
 * Reads a string token from the source file.
 *
 * "([^"\\\u000A\u000D]|(\\(u[0-9a-fA-F]{4}|["\\/bfnrt])))*"
 */


function readString(source, start, line, col, prev) {
  var body = source.body;
  var position = start + 1;
  var chunkStart = position;
  var code = 0;
  var value = '';

  while (position < body.length && !isNaN(code = body.charCodeAt(position)) && // not LineTerminator
  code !== 0x000a && code !== 0x000d) {
    // Closing Quote (")
    if (code === 34) {
      value += body.slice(chunkStart, position);
      return new Tok(TokenKind.STRING, start, position + 1, line, col, prev, value);
    } // SourceCharacter


    if (code < 0x0020 && code !== 0x0009) {
      throw syntaxError(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
    }

    ++position;

    if (code === 92) {
      // \
      value += body.slice(chunkStart, position - 1);
      code = body.charCodeAt(position);

      switch (code) {
        case 34:
          value += '"';
          break;

        case 47:
          value += '/';
          break;

        case 92:
          value += '\\';
          break;

        case 98:
          value += '\b';
          break;

        case 102:
          value += '\f';
          break;

        case 110:
          value += '\n';
          break;

        case 114:
          value += '\r';
          break;

        case 116:
          value += '\t';
          break;

        case 117:
          {
            // uXXXX
            var charCode = uniCharCode(body.charCodeAt(position + 1), body.charCodeAt(position + 2), body.charCodeAt(position + 3), body.charCodeAt(position + 4));

            if (charCode < 0) {
              var invalidSequence = body.slice(position + 1, position + 5);
              throw syntaxError(source, position, "Invalid character escape sequence: \\u".concat(invalidSequence, "."));
            }

            value += String.fromCharCode(charCode);
            position += 4;
            break;
          }

        default:
          throw syntaxError(source, position, "Invalid character escape sequence: \\".concat(String.fromCharCode(code), "."));
      }

      ++position;
      chunkStart = position;
    }
  }

  throw syntaxError(source, position, 'Unterminated string.');
}
/**
 * Reads a block string token from the source file.
 *
 * """("?"?(\\"""|\\(?!=""")|[^"\\]))*"""
 */


function readBlockString(source, start, line, col, prev, lexer) {
  var body = source.body;
  var position = start + 3;
  var chunkStart = position;
  var code = 0;
  var rawValue = '';

  while (position < body.length && !isNaN(code = body.charCodeAt(position))) {
    // Closing Triple-Quote (""")
    if (code === 34 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) {
      rawValue += body.slice(chunkStart, position);
      return new Tok(TokenKind.BLOCK_STRING, start, position + 3, line, col, prev, dedentBlockStringValue(rawValue));
    } // SourceCharacter


    if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
      throw syntaxError(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
    }

    if (code === 10) {
      // new line
      ++position;
      ++lexer.line;
      lexer.lineStart = position;
    } else if (code === 13) {
      // carriage return
      if (body.charCodeAt(position + 1) === 10) {
        position += 2;
      } else {
        ++position;
      }

      ++lexer.line;
      lexer.lineStart = position;
    } else if ( // Escape Triple-Quote (\""")
    code === 92 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34 && body.charCodeAt(position + 3) === 34) {
      rawValue += body.slice(chunkStart, position) + '"""';
      position += 4;
      chunkStart = position;
    } else {
      ++position;
    }
  }

  throw syntaxError(source, position, 'Unterminated string.');
}
/**
 * Converts four hexadecimal chars to the integer that the
 * string represents. For example, uniCharCode('0','0','0','f')
 * will return 15, and uniCharCode('0','0','f','f') returns 255.
 *
 * Returns a negative number on error, if a char was invalid.
 *
 * This is implemented by noting that char2hex() returns -1 on error,
 * which means the result of ORing the char2hex() will also be negative.
 */


function uniCharCode(a, b, c, d) {
  return char2hex(a) << 12 | char2hex(b) << 8 | char2hex(c) << 4 | char2hex(d);
}
/**
 * Converts a hex character to its integer value.
 * '0' becomes 0, '9' becomes 9
 * 'A' becomes 10, 'F' becomes 15
 * 'a' becomes 10, 'f' becomes 15
 *
 * Returns -1 on error.
 */


function char2hex(a) {
  return a >= 48 && a <= 57 ? a - 48 // 0-9
  : a >= 65 && a <= 70 ? a - 55 // A-F
  : a >= 97 && a <= 102 ? a - 87 // a-f
  : -1;
}
/**
 * Reads an alphanumeric + underscore name from the source.
 *
 * [_A-Za-z][_0-9A-Za-z]*
 */


function readName(source, start, line, col, prev) {
  var body = source.body;
  var bodyLength = body.length;
  var position = start + 1;
  var code = 0;

  while (position !== bodyLength && !isNaN(code = body.charCodeAt(position)) && (code === 95 || // _
  code >= 48 && code <= 57 || // 0-9
  code >= 65 && code <= 90 || // A-Z
  code >= 97 && code <= 122) // a-z
  ) {
    ++position;
  }

  return new Tok(TokenKind.NAME, start, position, line, col, prev, body.slice(start, position));
}

/**
 * Given a GraphQL source, parses it into a Document.
 * Throws GraphQLError if a syntax error is encountered.
 */
function parse(source, options) {
  var parser = new Parser(source, options);
  return parser.parseDocument();
}
/**
 * Given a string containing a GraphQL value (ex. `[42]`), parse the AST for
 * that value.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Values directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: valueFromAST().
 */

function parseValue(source, options) {
  var parser = new Parser(source, options);
  parser.expectToken(TokenKind.SOF);
  var value = parser.parseValueLiteral(false);
  parser.expectToken(TokenKind.EOF);
  return value;
}
/**
 * Given a string containing a GraphQL Type (ex. `[Int!]`), parse the AST for
 * that type.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Types directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: typeFromAST().
 */

function parseType(source, options) {
  var parser = new Parser(source, options);
  parser.expectToken(TokenKind.SOF);
  var type = parser.parseTypeReference();
  parser.expectToken(TokenKind.EOF);
  return type;
}

var Parser =
/*#__PURE__*/
function () {
  function Parser(source, options) {
    var sourceObj = typeof source === 'string' ? new Source(source) : source;
    sourceObj instanceof Source || devAssert(0, "Must provide Source. Received: ".concat(inspect(sourceObj)));
    this._lexer = createLexer(sourceObj);
    this._options = options || {};
  }
  /**
   * Converts a name lex token into a name parse node.
   */


  var _proto = Parser.prototype;

  _proto.parseName = function parseName() {
    var token = this.expectToken(TokenKind.NAME);
    return {
      kind: Kind.NAME,
      value: token.value,
      loc: this.loc(token)
    };
  } // Implements the parsing rules in the Document section.

  /**
   * Document : Definition+
   */
  ;

  _proto.parseDocument = function parseDocument() {
    var start = this._lexer.token;
    return {
      kind: Kind.DOCUMENT,
      definitions: this.many(TokenKind.SOF, this.parseDefinition, TokenKind.EOF),
      loc: this.loc(start)
    };
  }
  /**
   * Definition :
   *   - ExecutableDefinition
   *   - TypeSystemDefinition
   *   - TypeSystemExtension
   *
   * ExecutableDefinition :
   *   - OperationDefinition
   *   - FragmentDefinition
   */
  ;

  _proto.parseDefinition = function parseDefinition() {
    if (this.peek(TokenKind.NAME)) {
      switch (this._lexer.token.value) {
        case 'query':
        case 'mutation':
        case 'subscription':
          return this.parseOperationDefinition();

        case 'fragment':
          return this.parseFragmentDefinition();

        case 'schema':
        case 'scalar':
        case 'type':
        case 'interface':
        case 'union':
        case 'enum':
        case 'input':
        case 'directive':
          return this.parseTypeSystemDefinition();

        case 'extend':
          return this.parseTypeSystemExtension();
      }
    } else if (this.peek(TokenKind.BRACE_L)) {
      return this.parseOperationDefinition();
    } else if (this.peekDescription()) {
      return this.parseTypeSystemDefinition();
    }

    throw this.unexpected();
  } // Implements the parsing rules in the Operations section.

  /**
   * OperationDefinition :
   *  - SelectionSet
   *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
   */
  ;

  _proto.parseOperationDefinition = function parseOperationDefinition() {
    var start = this._lexer.token;

    if (this.peek(TokenKind.BRACE_L)) {
      return {
        kind: Kind.OPERATION_DEFINITION,
        operation: 'query',
        name: undefined,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet(),
        loc: this.loc(start)
      };
    }

    var operation = this.parseOperationType();
    var name;

    if (this.peek(TokenKind.NAME)) {
      name = this.parseName();
    }

    return {
      kind: Kind.OPERATION_DEFINITION,
      operation: operation,
      name: name,
      variableDefinitions: this.parseVariableDefinitions(),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(start)
    };
  }
  /**
   * OperationType : one of query mutation subscription
   */
  ;

  _proto.parseOperationType = function parseOperationType() {
    var operationToken = this.expectToken(TokenKind.NAME);

    switch (operationToken.value) {
      case 'query':
        return 'query';

      case 'mutation':
        return 'mutation';

      case 'subscription':
        return 'subscription';
    }

    throw this.unexpected(operationToken);
  }
  /**
   * VariableDefinitions : ( VariableDefinition+ )
   */
  ;

  _proto.parseVariableDefinitions = function parseVariableDefinitions() {
    return this.optionalMany(TokenKind.PAREN_L, this.parseVariableDefinition, TokenKind.PAREN_R);
  }
  /**
   * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
   */
  ;

  _proto.parseVariableDefinition = function parseVariableDefinition() {
    var start = this._lexer.token;
    return {
      kind: Kind.VARIABLE_DEFINITION,
      variable: this.parseVariable(),
      type: (this.expectToken(TokenKind.COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken(TokenKind.EQUALS) ? this.parseValueLiteral(true) : undefined,
      directives: this.parseDirectives(true),
      loc: this.loc(start)
    };
  }
  /**
   * Variable : $ Name
   */
  ;

  _proto.parseVariable = function parseVariable() {
    var start = this._lexer.token;
    this.expectToken(TokenKind.DOLLAR);
    return {
      kind: Kind.VARIABLE,
      name: this.parseName(),
      loc: this.loc(start)
    };
  }
  /**
   * SelectionSet : { Selection+ }
   */
  ;

  _proto.parseSelectionSet = function parseSelectionSet() {
    var start = this._lexer.token;
    return {
      kind: Kind.SELECTION_SET,
      selections: this.many(TokenKind.BRACE_L, this.parseSelection, TokenKind.BRACE_R),
      loc: this.loc(start)
    };
  }
  /**
   * Selection :
   *   - Field
   *   - FragmentSpread
   *   - InlineFragment
   */
  ;

  _proto.parseSelection = function parseSelection() {
    return this.peek(TokenKind.SPREAD) ? this.parseFragment() : this.parseField();
  }
  /**
   * Field : Alias? Name Arguments? Directives? SelectionSet?
   *
   * Alias : Name :
   */
  ;

  _proto.parseField = function parseField() {
    var start = this._lexer.token;
    var nameOrAlias = this.parseName();
    var alias;
    var name;

    if (this.expectOptionalToken(TokenKind.COLON)) {
      alias = nameOrAlias;
      name = this.parseName();
    } else {
      name = nameOrAlias;
    }

    return {
      kind: Kind.FIELD,
      alias: alias,
      name: name,
      arguments: this.parseArguments(false),
      directives: this.parseDirectives(false),
      selectionSet: this.peek(TokenKind.BRACE_L) ? this.parseSelectionSet() : undefined,
      loc: this.loc(start)
    };
  }
  /**
   * Arguments[Const] : ( Argument[?Const]+ )
   */
  ;

  _proto.parseArguments = function parseArguments(isConst) {
    var item = isConst ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(TokenKind.PAREN_L, item, TokenKind.PAREN_R);
  }
  /**
   * Argument[Const] : Name : Value[?Const]
   */
  ;

  _proto.parseArgument = function parseArgument() {
    var start = this._lexer.token;
    var name = this.parseName();
    this.expectToken(TokenKind.COLON);
    return {
      kind: Kind.ARGUMENT,
      name: name,
      value: this.parseValueLiteral(false),
      loc: this.loc(start)
    };
  };

  _proto.parseConstArgument = function parseConstArgument() {
    var start = this._lexer.token;
    return {
      kind: Kind.ARGUMENT,
      name: this.parseName(),
      value: (this.expectToken(TokenKind.COLON), this.parseValueLiteral(true)),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Fragments section.

  /**
   * Corresponds to both FragmentSpread and InlineFragment in the spec.
   *
   * FragmentSpread : ... FragmentName Directives?
   *
   * InlineFragment : ... TypeCondition? Directives? SelectionSet
   */
  ;

  _proto.parseFragment = function parseFragment() {
    var start = this._lexer.token;
    this.expectToken(TokenKind.SPREAD);
    var hasTypeCondition = this.expectOptionalKeyword('on');

    if (!hasTypeCondition && this.peek(TokenKind.NAME)) {
      return {
        kind: Kind.FRAGMENT_SPREAD,
        name: this.parseFragmentName(),
        directives: this.parseDirectives(false),
        loc: this.loc(start)
      };
    }

    return {
      kind: Kind.INLINE_FRAGMENT,
      typeCondition: hasTypeCondition ? this.parseNamedType() : undefined,
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(start)
    };
  }
  /**
   * FragmentDefinition :
   *   - fragment FragmentName on TypeCondition Directives? SelectionSet
   *
   * TypeCondition : NamedType
   */
  ;

  _proto.parseFragmentDefinition = function parseFragmentDefinition() {
    var start = this._lexer.token;
    this.expectKeyword('fragment'); // Experimental support for defining variables within fragments changes
    // the grammar of FragmentDefinition:
    //   - fragment FragmentName VariableDefinitions? on TypeCondition Directives? SelectionSet

    if (this._options.experimentalFragmentVariables) {
      return {
        kind: Kind.FRAGMENT_DEFINITION,
        name: this.parseFragmentName(),
        variableDefinitions: this.parseVariableDefinitions(),
        typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
        directives: this.parseDirectives(false),
        selectionSet: this.parseSelectionSet(),
        loc: this.loc(start)
      };
    }

    return {
      kind: Kind.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(start)
    };
  }
  /**
   * FragmentName : Name but not `on`
   */
  ;

  _proto.parseFragmentName = function parseFragmentName() {
    if (this._lexer.token.value === 'on') {
      throw this.unexpected();
    }

    return this.parseName();
  } // Implements the parsing rules in the Values section.

  /**
   * Value[Const] :
   *   - [~Const] Variable
   *   - IntValue
   *   - FloatValue
   *   - StringValue
   *   - BooleanValue
   *   - NullValue
   *   - EnumValue
   *   - ListValue[?Const]
   *   - ObjectValue[?Const]
   *
   * BooleanValue : one of `true` `false`
   *
   * NullValue : `null`
   *
   * EnumValue : Name but not `true`, `false` or `null`
   */
  ;

  _proto.parseValueLiteral = function parseValueLiteral(isConst) {
    var token = this._lexer.token;

    switch (token.kind) {
      case TokenKind.BRACKET_L:
        return this.parseList(isConst);

      case TokenKind.BRACE_L:
        return this.parseObject(isConst);

      case TokenKind.INT:
        this._lexer.advance();

        return {
          kind: Kind.INT,
          value: token.value,
          loc: this.loc(token)
        };

      case TokenKind.FLOAT:
        this._lexer.advance();

        return {
          kind: Kind.FLOAT,
          value: token.value,
          loc: this.loc(token)
        };

      case TokenKind.STRING:
      case TokenKind.BLOCK_STRING:
        return this.parseStringLiteral();

      case TokenKind.NAME:
        if (token.value === 'true' || token.value === 'false') {
          this._lexer.advance();

          return {
            kind: Kind.BOOLEAN,
            value: token.value === 'true',
            loc: this.loc(token)
          };
        } else if (token.value === 'null') {
          this._lexer.advance();

          return {
            kind: Kind.NULL,
            loc: this.loc(token)
          };
        }

        this._lexer.advance();

        return {
          kind: Kind.ENUM,
          value: token.value,
          loc: this.loc(token)
        };

      case TokenKind.DOLLAR:
        if (!isConst) {
          return this.parseVariable();
        }

        break;
    }

    throw this.unexpected();
  };

  _proto.parseStringLiteral = function parseStringLiteral() {
    var token = this._lexer.token;

    this._lexer.advance();

    return {
      kind: Kind.STRING,
      value: token.value,
      block: token.kind === TokenKind.BLOCK_STRING,
      loc: this.loc(token)
    };
  }
  /**
   * ListValue[Const] :
   *   - [ ]
   *   - [ Value[?Const]+ ]
   */
  ;

  _proto.parseList = function parseList(isConst) {
    var _this = this;

    var start = this._lexer.token;

    var item = function item() {
      return _this.parseValueLiteral(isConst);
    };

    return {
      kind: Kind.LIST,
      values: this.any(TokenKind.BRACKET_L, item, TokenKind.BRACKET_R),
      loc: this.loc(start)
    };
  }
  /**
   * ObjectValue[Const] :
   *   - { }
   *   - { ObjectField[?Const]+ }
   */
  ;

  _proto.parseObject = function parseObject(isConst) {
    var _this2 = this;

    var start = this._lexer.token;

    var item = function item() {
      return _this2.parseObjectField(isConst);
    };

    return {
      kind: Kind.OBJECT,
      fields: this.any(TokenKind.BRACE_L, item, TokenKind.BRACE_R),
      loc: this.loc(start)
    };
  }
  /**
   * ObjectField[Const] : Name : Value[?Const]
   */
  ;

  _proto.parseObjectField = function parseObjectField(isConst) {
    var start = this._lexer.token;
    var name = this.parseName();
    this.expectToken(TokenKind.COLON);
    return {
      kind: Kind.OBJECT_FIELD,
      name: name,
      value: this.parseValueLiteral(isConst),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Directives section.

  /**
   * Directives[Const] : Directive[?Const]+
   */
  ;

  _proto.parseDirectives = function parseDirectives(isConst) {
    var directives = [];

    while (this.peek(TokenKind.AT)) {
      directives.push(this.parseDirective(isConst));
    }

    return directives;
  }
  /**
   * Directive[Const] : @ Name Arguments[?Const]?
   */
  ;

  _proto.parseDirective = function parseDirective(isConst) {
    var start = this._lexer.token;
    this.expectToken(TokenKind.AT);
    return {
      kind: Kind.DIRECTIVE,
      name: this.parseName(),
      arguments: this.parseArguments(isConst),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Types section.

  /**
   * Type :
   *   - NamedType
   *   - ListType
   *   - NonNullType
   */
  ;

  _proto.parseTypeReference = function parseTypeReference() {
    var start = this._lexer.token;
    var type;

    if (this.expectOptionalToken(TokenKind.BRACKET_L)) {
      type = this.parseTypeReference();
      this.expectToken(TokenKind.BRACKET_R);
      type = {
        kind: Kind.LIST_TYPE,
        type: type,
        loc: this.loc(start)
      };
    } else {
      type = this.parseNamedType();
    }

    if (this.expectOptionalToken(TokenKind.BANG)) {
      return {
        kind: Kind.NON_NULL_TYPE,
        type: type,
        loc: this.loc(start)
      };
    }

    return type;
  }
  /**
   * NamedType : Name
   */
  ;

  _proto.parseNamedType = function parseNamedType() {
    var start = this._lexer.token;
    return {
      kind: Kind.NAMED_TYPE,
      name: this.parseName(),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Type Definition section.

  /**
   * TypeSystemDefinition :
   *   - SchemaDefinition
   *   - TypeDefinition
   *   - DirectiveDefinition
   *
   * TypeDefinition :
   *   - ScalarTypeDefinition
   *   - ObjectTypeDefinition
   *   - InterfaceTypeDefinition
   *   - UnionTypeDefinition
   *   - EnumTypeDefinition
   *   - InputObjectTypeDefinition
   */
  ;

  _proto.parseTypeSystemDefinition = function parseTypeSystemDefinition() {
    // Many definitions begin with a description and require a lookahead.
    var keywordToken = this.peekDescription() ? this._lexer.lookahead() : this._lexer.token;

    if (keywordToken.kind === TokenKind.NAME) {
      switch (keywordToken.value) {
        case 'schema':
          return this.parseSchemaDefinition();

        case 'scalar':
          return this.parseScalarTypeDefinition();

        case 'type':
          return this.parseObjectTypeDefinition();

        case 'interface':
          return this.parseInterfaceTypeDefinition();

        case 'union':
          return this.parseUnionTypeDefinition();

        case 'enum':
          return this.parseEnumTypeDefinition();

        case 'input':
          return this.parseInputObjectTypeDefinition();

        case 'directive':
          return this.parseDirectiveDefinition();
      }
    }

    throw this.unexpected(keywordToken);
  };

  _proto.peekDescription = function peekDescription() {
    return this.peek(TokenKind.STRING) || this.peek(TokenKind.BLOCK_STRING);
  }
  /**
   * Description : StringValue
   */
  ;

  _proto.parseDescription = function parseDescription() {
    if (this.peekDescription()) {
      return this.parseStringLiteral();
    }
  }
  /**
   * SchemaDefinition : schema Directives[Const]? { OperationTypeDefinition+ }
   */
  ;

  _proto.parseSchemaDefinition = function parseSchemaDefinition() {
    var start = this._lexer.token;
    this.expectKeyword('schema');
    var directives = this.parseDirectives(true);
    var operationTypes = this.many(TokenKind.BRACE_L, this.parseOperationTypeDefinition, TokenKind.BRACE_R);
    return {
      kind: Kind.SCHEMA_DEFINITION,
      directives: directives,
      operationTypes: operationTypes,
      loc: this.loc(start)
    };
  }
  /**
   * OperationTypeDefinition : OperationType : NamedType
   */
  ;

  _proto.parseOperationTypeDefinition = function parseOperationTypeDefinition() {
    var start = this._lexer.token;
    var operation = this.parseOperationType();
    this.expectToken(TokenKind.COLON);
    var type = this.parseNamedType();
    return {
      kind: Kind.OPERATION_TYPE_DEFINITION,
      operation: operation,
      type: type,
      loc: this.loc(start)
    };
  }
  /**
   * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
   */
  ;

  _proto.parseScalarTypeDefinition = function parseScalarTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('scalar');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    return {
      kind: Kind.SCALAR_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * ObjectTypeDefinition :
   *   Description?
   *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
   */
  ;

  _proto.parseObjectTypeDefinition = function parseObjectTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('type');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();
    return {
      kind: Kind.OBJECT_TYPE_DEFINITION,
      description: description,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * ImplementsInterfaces :
   *   - implements `&`? NamedType
   *   - ImplementsInterfaces & NamedType
   */
  ;

  _proto.parseImplementsInterfaces = function parseImplementsInterfaces() {
    var types = [];

    if (this.expectOptionalKeyword('implements')) {
      // Optional leading ampersand
      this.expectOptionalToken(TokenKind.AMP);

      do {
        types.push(this.parseNamedType());
      } while (this.expectOptionalToken(TokenKind.AMP) || // Legacy support for the SDL?
      this._options.allowLegacySDLImplementsInterfaces && this.peek(TokenKind.NAME));
    }

    return types;
  }
  /**
   * FieldsDefinition : { FieldDefinition+ }
   */
  ;

  _proto.parseFieldsDefinition = function parseFieldsDefinition() {
    // Legacy support for the SDL?
    if (this._options.allowLegacySDLEmptyFields && this.peek(TokenKind.BRACE_L) && this._lexer.lookahead().kind === TokenKind.BRACE_R) {
      this._lexer.advance();

      this._lexer.advance();

      return [];
    }

    return this.optionalMany(TokenKind.BRACE_L, this.parseFieldDefinition, TokenKind.BRACE_R);
  }
  /**
   * FieldDefinition :
   *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
   */
  ;

  _proto.parseFieldDefinition = function parseFieldDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    var name = this.parseName();
    var args = this.parseArgumentDefs();
    this.expectToken(TokenKind.COLON);
    var type = this.parseTypeReference();
    var directives = this.parseDirectives(true);
    return {
      kind: Kind.FIELD_DEFINITION,
      description: description,
      name: name,
      arguments: args,
      type: type,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * ArgumentsDefinition : ( InputValueDefinition+ )
   */
  ;

  _proto.parseArgumentDefs = function parseArgumentDefs() {
    return this.optionalMany(TokenKind.PAREN_L, this.parseInputValueDef, TokenKind.PAREN_R);
  }
  /**
   * InputValueDefinition :
   *   - Description? Name : Type DefaultValue? Directives[Const]?
   */
  ;

  _proto.parseInputValueDef = function parseInputValueDef() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    var name = this.parseName();
    this.expectToken(TokenKind.COLON);
    var type = this.parseTypeReference();
    var defaultValue;

    if (this.expectOptionalToken(TokenKind.EQUALS)) {
      defaultValue = this.parseValueLiteral(true);
    }

    var directives = this.parseDirectives(true);
    return {
      kind: Kind.INPUT_VALUE_DEFINITION,
      description: description,
      name: name,
      type: type,
      defaultValue: defaultValue,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * InterfaceTypeDefinition :
   *   - Description? interface Name Directives[Const]? FieldsDefinition?
   */
  ;

  _proto.parseInterfaceTypeDefinition = function parseInterfaceTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('interface');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();
    return {
      kind: Kind.INTERFACE_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * UnionTypeDefinition :
   *   - Description? union Name Directives[Const]? UnionMemberTypes?
   */
  ;

  _proto.parseUnionTypeDefinition = function parseUnionTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('union');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var types = this.parseUnionMemberTypes();
    return {
      kind: Kind.UNION_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      types: types,
      loc: this.loc(start)
    };
  }
  /**
   * UnionMemberTypes :
   *   - = `|`? NamedType
   *   - UnionMemberTypes | NamedType
   */
  ;

  _proto.parseUnionMemberTypes = function parseUnionMemberTypes() {
    var types = [];

    if (this.expectOptionalToken(TokenKind.EQUALS)) {
      // Optional leading pipe
      this.expectOptionalToken(TokenKind.PIPE);

      do {
        types.push(this.parseNamedType());
      } while (this.expectOptionalToken(TokenKind.PIPE));
    }

    return types;
  }
  /**
   * EnumTypeDefinition :
   *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
   */
  ;

  _proto.parseEnumTypeDefinition = function parseEnumTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('enum');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var values = this.parseEnumValuesDefinition();
    return {
      kind: Kind.ENUM_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      values: values,
      loc: this.loc(start)
    };
  }
  /**
   * EnumValuesDefinition : { EnumValueDefinition+ }
   */
  ;

  _proto.parseEnumValuesDefinition = function parseEnumValuesDefinition() {
    return this.optionalMany(TokenKind.BRACE_L, this.parseEnumValueDefinition, TokenKind.BRACE_R);
  }
  /**
   * EnumValueDefinition : Description? EnumValue Directives[Const]?
   *
   * EnumValue : Name
   */
  ;

  _proto.parseEnumValueDefinition = function parseEnumValueDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    return {
      kind: Kind.ENUM_VALUE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * InputObjectTypeDefinition :
   *   - Description? input Name Directives[Const]? InputFieldsDefinition?
   */
  ;

  _proto.parseInputObjectTypeDefinition = function parseInputObjectTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('input');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var fields = this.parseInputFieldsDefinition();
    return {
      kind: Kind.INPUT_OBJECT_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * InputFieldsDefinition : { InputValueDefinition+ }
   */
  ;

  _proto.parseInputFieldsDefinition = function parseInputFieldsDefinition() {
    return this.optionalMany(TokenKind.BRACE_L, this.parseInputValueDef, TokenKind.BRACE_R);
  }
  /**
   * TypeSystemExtension :
   *   - SchemaExtension
   *   - TypeExtension
   *
   * TypeExtension :
   *   - ScalarTypeExtension
   *   - ObjectTypeExtension
   *   - InterfaceTypeExtension
   *   - UnionTypeExtension
   *   - EnumTypeExtension
   *   - InputObjectTypeDefinition
   */
  ;

  _proto.parseTypeSystemExtension = function parseTypeSystemExtension() {
    var keywordToken = this._lexer.lookahead();

    if (keywordToken.kind === TokenKind.NAME) {
      switch (keywordToken.value) {
        case 'schema':
          return this.parseSchemaExtension();

        case 'scalar':
          return this.parseScalarTypeExtension();

        case 'type':
          return this.parseObjectTypeExtension();

        case 'interface':
          return this.parseInterfaceTypeExtension();

        case 'union':
          return this.parseUnionTypeExtension();

        case 'enum':
          return this.parseEnumTypeExtension();

        case 'input':
          return this.parseInputObjectTypeExtension();
      }
    }

    throw this.unexpected(keywordToken);
  }
  /**
   * SchemaExtension :
   *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
   *  - extend schema Directives[Const]
   */
  ;

  _proto.parseSchemaExtension = function parseSchemaExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('schema');
    var directives = this.parseDirectives(true);
    var operationTypes = this.optionalMany(TokenKind.BRACE_L, this.parseOperationTypeDefinition, TokenKind.BRACE_R);

    if (directives.length === 0 && operationTypes.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: Kind.SCHEMA_EXTENSION,
      directives: directives,
      operationTypes: operationTypes,
      loc: this.loc(start)
    };
  }
  /**
   * ScalarTypeExtension :
   *   - extend scalar Name Directives[Const]
   */
  ;

  _proto.parseScalarTypeExtension = function parseScalarTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('scalar');
    var name = this.parseName();
    var directives = this.parseDirectives(true);

    if (directives.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: Kind.SCALAR_TYPE_EXTENSION,
      name: name,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * ObjectTypeExtension :
   *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend type Name ImplementsInterfaces? Directives[Const]
   *  - extend type Name ImplementsInterfaces
   */
  ;

  _proto.parseObjectTypeExtension = function parseObjectTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('type');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();

    if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: Kind.OBJECT_TYPE_EXTENSION,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * InterfaceTypeExtension :
   *   - extend interface Name Directives[Const]? FieldsDefinition
   *   - extend interface Name Directives[Const]
   */
  ;

  _proto.parseInterfaceTypeExtension = function parseInterfaceTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('interface');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();

    if (directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: Kind.INTERFACE_TYPE_EXTENSION,
      name: name,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * UnionTypeExtension :
   *   - extend union Name Directives[Const]? UnionMemberTypes
   *   - extend union Name Directives[Const]
   */
  ;

  _proto.parseUnionTypeExtension = function parseUnionTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('union');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var types = this.parseUnionMemberTypes();

    if (directives.length === 0 && types.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: Kind.UNION_TYPE_EXTENSION,
      name: name,
      directives: directives,
      types: types,
      loc: this.loc(start)
    };
  }
  /**
   * EnumTypeExtension :
   *   - extend enum Name Directives[Const]? EnumValuesDefinition
   *   - extend enum Name Directives[Const]
   */
  ;

  _proto.parseEnumTypeExtension = function parseEnumTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('enum');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var values = this.parseEnumValuesDefinition();

    if (directives.length === 0 && values.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: Kind.ENUM_TYPE_EXTENSION,
      name: name,
      directives: directives,
      values: values,
      loc: this.loc(start)
    };
  }
  /**
   * InputObjectTypeExtension :
   *   - extend input Name Directives[Const]? InputFieldsDefinition
   *   - extend input Name Directives[Const]
   */
  ;

  _proto.parseInputObjectTypeExtension = function parseInputObjectTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('input');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var fields = this.parseInputFieldsDefinition();

    if (directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: Kind.INPUT_OBJECT_TYPE_EXTENSION,
      name: name,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * DirectiveDefinition :
   *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
   */
  ;

  _proto.parseDirectiveDefinition = function parseDirectiveDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('directive');
    this.expectToken(TokenKind.AT);
    var name = this.parseName();
    var args = this.parseArgumentDefs();
    var repeatable = this.expectOptionalKeyword('repeatable');
    this.expectKeyword('on');
    var locations = this.parseDirectiveLocations();
    return {
      kind: Kind.DIRECTIVE_DEFINITION,
      description: description,
      name: name,
      arguments: args,
      repeatable: repeatable,
      locations: locations,
      loc: this.loc(start)
    };
  }
  /**
   * DirectiveLocations :
   *   - `|`? DirectiveLocation
   *   - DirectiveLocations | DirectiveLocation
   */
  ;

  _proto.parseDirectiveLocations = function parseDirectiveLocations() {
    // Optional leading pipe
    this.expectOptionalToken(TokenKind.PIPE);
    var locations = [];

    do {
      locations.push(this.parseDirectiveLocation());
    } while (this.expectOptionalToken(TokenKind.PIPE));

    return locations;
  }
  /*
   * DirectiveLocation :
   *   - ExecutableDirectiveLocation
   *   - TypeSystemDirectiveLocation
   *
   * ExecutableDirectiveLocation : one of
   *   `QUERY`
   *   `MUTATION`
   *   `SUBSCRIPTION`
   *   `FIELD`
   *   `FRAGMENT_DEFINITION`
   *   `FRAGMENT_SPREAD`
   *   `INLINE_FRAGMENT`
   *
   * TypeSystemDirectiveLocation : one of
   *   `SCHEMA`
   *   `SCALAR`
   *   `OBJECT`
   *   `FIELD_DEFINITION`
   *   `ARGUMENT_DEFINITION`
   *   `INTERFACE`
   *   `UNION`
   *   `ENUM`
   *   `ENUM_VALUE`
   *   `INPUT_OBJECT`
   *   `INPUT_FIELD_DEFINITION`
   */
  ;

  _proto.parseDirectiveLocation = function parseDirectiveLocation() {
    var start = this._lexer.token;
    var name = this.parseName();

    if (DirectiveLocation[name.value] !== undefined) {
      return name;
    }

    throw this.unexpected(start);
  } // Core parsing utility functions

  /**
   * Returns a location object, used to identify the place in
   * the source that created a given parsed object.
   */
  ;

  _proto.loc = function loc(startToken) {
    if (!this._options.noLocation) {
      return new Loc(startToken, this._lexer.lastToken, this._lexer.source);
    }
  }
  /**
   * Determines if the next token is of a given kind
   */
  ;

  _proto.peek = function peek(kind) {
    return this._lexer.token.kind === kind;
  }
  /**
   * If the next token is of the given kind, return that token after advancing
   * the lexer. Otherwise, do not change the parser state and throw an error.
   */
  ;

  _proto.expectToken = function expectToken(kind) {
    var token = this._lexer.token;

    if (token.kind === kind) {
      this._lexer.advance();

      return token;
    }

    throw syntaxError(this._lexer.source, token.start, "Expected ".concat(kind, ", found ").concat(getTokenDesc(token)));
  }
  /**
   * If the next token is of the given kind, return that token after advancing
   * the lexer. Otherwise, do not change the parser state and return undefined.
   */
  ;

  _proto.expectOptionalToken = function expectOptionalToken(kind) {
    var token = this._lexer.token;

    if (token.kind === kind) {
      this._lexer.advance();

      return token;
    }

    return undefined;
  }
  /**
   * If the next token is a given keyword, advance the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  ;

  _proto.expectKeyword = function expectKeyword(value) {
    var token = this._lexer.token;

    if (token.kind === TokenKind.NAME && token.value === value) {
      this._lexer.advance();
    } else {
      throw syntaxError(this._lexer.source, token.start, "Expected \"".concat(value, "\", found ").concat(getTokenDesc(token)));
    }
  }
  /**
   * If the next token is a given keyword, return "true" after advancing
   * the lexer. Otherwise, do not change the parser state and return "false".
   */
  ;

  _proto.expectOptionalKeyword = function expectOptionalKeyword(value) {
    var token = this._lexer.token;

    if (token.kind === TokenKind.NAME && token.value === value) {
      this._lexer.advance();

      return true;
    }

    return false;
  }
  /**
   * Helper function for creating an error when an unexpected lexed token
   * is encountered.
   */
  ;

  _proto.unexpected = function unexpected(atToken) {
    var token = atToken || this._lexer.token;
    return syntaxError(this._lexer.source, token.start, "Unexpected ".concat(getTokenDesc(token)));
  }
  /**
   * Returns a possibly empty list of parse nodes, determined by
   * the parseFn. This list begins with a lex token of openKind
   * and ends with a lex token of closeKind. Advances the parser
   * to the next lex token after the closing token.
   */
  ;

  _proto.any = function any(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    var nodes = [];

    while (!this.expectOptionalToken(closeKind)) {
      nodes.push(parseFn.call(this));
    }

    return nodes;
  }
  /**
   * Returns a list of parse nodes, determined by the parseFn.
   * It can be empty only if open token is missing otherwise it will always
   * return non-empty list that begins with a lex token of openKind and ends
   * with a lex token of closeKind. Advances the parser to the next lex token
   * after the closing token.
   */
  ;

  _proto.optionalMany = function optionalMany(openKind, parseFn, closeKind) {
    if (this.expectOptionalToken(openKind)) {
      var nodes = [];

      do {
        nodes.push(parseFn.call(this));
      } while (!this.expectOptionalToken(closeKind));

      return nodes;
    }

    return [];
  }
  /**
   * Returns a non-empty list of parse nodes, determined by
   * the parseFn. This list begins with a lex token of openKind
   * and ends with a lex token of closeKind. Advances the parser
   * to the next lex token after the closing token.
   */
  ;

  _proto.many = function many(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    var nodes = [];

    do {
      nodes.push(parseFn.call(this));
    } while (!this.expectOptionalToken(closeKind));

    return nodes;
  };

  return Parser;
}();

function Loc(startToken, endToken, source) {
  this.start = startToken.start;
  this.end = endToken.end;
  this.startToken = startToken;
  this.endToken = endToken;
  this.source = source;
} // Print a simplified form when appearing in JSON/util.inspect.


defineToJSON(Loc, function () {
  return {
    start: this.start,
    end: this.end
  };
});
/**
 * A helper function to describe a token as a string for debugging
 */

function getTokenDesc(token) {
  var value = token.value;
  return value ? "".concat(token.kind, " \"").concat(value, "\"") : token.kind;
}

var parser = /*#__PURE__*/Object.freeze({
  __proto__: null,
  parse: parse,
  parseValue: parseValue,
  parseType: parseType
});

function isDefinitionNode(node) {
  return isExecutableDefinitionNode(node) || isTypeSystemDefinitionNode(node) || isTypeSystemExtensionNode(node);
}
function isExecutableDefinitionNode(node) {
  return node.kind === Kind.OPERATION_DEFINITION || node.kind === Kind.FRAGMENT_DEFINITION;
}
function isSelectionNode(node) {
  return node.kind === Kind.FIELD || node.kind === Kind.FRAGMENT_SPREAD || node.kind === Kind.INLINE_FRAGMENT;
}
function isValueNode(node) {
  return node.kind === Kind.VARIABLE || node.kind === Kind.INT || node.kind === Kind.FLOAT || node.kind === Kind.STRING || node.kind === Kind.BOOLEAN || node.kind === Kind.NULL || node.kind === Kind.ENUM || node.kind === Kind.LIST || node.kind === Kind.OBJECT;
}
function isTypeNode(node) {
  return node.kind === Kind.NAMED_TYPE || node.kind === Kind.LIST_TYPE || node.kind === Kind.NON_NULL_TYPE;
}
function isTypeSystemDefinitionNode(node) {
  return node.kind === Kind.SCHEMA_DEFINITION || isTypeDefinitionNode(node) || node.kind === Kind.DIRECTIVE_DEFINITION;
}
function isTypeDefinitionNode(node) {
  return node.kind === Kind.SCALAR_TYPE_DEFINITION || node.kind === Kind.OBJECT_TYPE_DEFINITION || node.kind === Kind.INTERFACE_TYPE_DEFINITION || node.kind === Kind.UNION_TYPE_DEFINITION || node.kind === Kind.ENUM_TYPE_DEFINITION || node.kind === Kind.INPUT_OBJECT_TYPE_DEFINITION;
}
function isTypeSystemExtensionNode(node) {
  return node.kind === Kind.SCHEMA_EXTENSION || isTypeExtensionNode(node);
}
function isTypeExtensionNode(node) {
  return node.kind === Kind.SCALAR_TYPE_EXTENSION || node.kind === Kind.OBJECT_TYPE_EXTENSION || node.kind === Kind.INTERFACE_TYPE_EXTENSION || node.kind === Kind.UNION_TYPE_EXTENSION || node.kind === Kind.ENUM_TYPE_EXTENSION || node.kind === Kind.INPUT_OBJECT_TYPE_EXTENSION;
}



var index$2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Source: Source,
  getLocation: getLocation,
  printLocation: printLocation,
  printSourceLocation: printSourceLocation,
  Kind: Kind,
  TokenKind: TokenKind,
  createLexer: createLexer,
  parse: parse,
  parseValue: parseValue,
  parseType: parseType,
  print: print,
  visit: visit,
  visitInParallel: visitInParallel,
  visitWithTypeInfo: visitWithTypeInfo,
  getVisitFn: getVisitFn,
  BREAK: BREAK,
  isDefinitionNode: isDefinitionNode,
  isExecutableDefinitionNode: isExecutableDefinitionNode,
  isSelectionNode: isSelectionNode,
  isValueNode: isValueNode,
  isTypeNode: isTypeNode,
  isTypeSystemDefinitionNode: isTypeSystemDefinitionNode,
  isTypeDefinitionNode: isTypeDefinitionNode,
  isTypeSystemExtensionNode: isTypeSystemExtensionNode,
  isTypeExtensionNode: isTypeExtensionNode,
  DirectiveLocation: DirectiveLocation
});



var index$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  isSchema: isSchema,
  assertSchema: assertSchema,
  GraphQLSchema: GraphQLSchema,
  isType: isType,
  isScalarType: isScalarType,
  isObjectType: isObjectType,
  isInterfaceType: isInterfaceType,
  isUnionType: isUnionType,
  isEnumType: isEnumType,
  isInputObjectType: isInputObjectType,
  isListType: isListType,
  isNonNullType: isNonNullType,
  isInputType: isInputType,
  isOutputType: isOutputType,
  isLeafType: isLeafType,
  isCompositeType: isCompositeType,
  isAbstractType: isAbstractType,
  isWrappingType: isWrappingType,
  isNullableType: isNullableType,
  isNamedType: isNamedType,
  isRequiredArgument: isRequiredArgument,
  isRequiredInputField: isRequiredInputField,
  assertType: assertType,
  assertScalarType: assertScalarType,
  assertObjectType: assertObjectType,
  assertInterfaceType: assertInterfaceType,
  assertUnionType: assertUnionType,
  assertEnumType: assertEnumType,
  assertInputObjectType: assertInputObjectType,
  assertListType: assertListType,
  assertNonNullType: assertNonNullType,
  assertInputType: assertInputType,
  assertOutputType: assertOutputType,
  assertLeafType: assertLeafType,
  assertCompositeType: assertCompositeType,
  assertAbstractType: assertAbstractType,
  assertWrappingType: assertWrappingType,
  assertNullableType: assertNullableType,
  assertNamedType: assertNamedType,
  getNullableType: getNullableType,
  getNamedType: getNamedType,
  GraphQLScalarType: GraphQLScalarType,
  GraphQLObjectType: GraphQLObjectType,
  GraphQLInterfaceType: GraphQLInterfaceType,
  GraphQLUnionType: GraphQLUnionType,
  GraphQLEnumType: GraphQLEnumType,
  GraphQLInputObjectType: GraphQLInputObjectType,
  GraphQLList: GraphQLList,
  GraphQLNonNull: GraphQLNonNull,
  isDirective: isDirective,
  assertDirective: assertDirective,
  GraphQLDirective: GraphQLDirective,
  isSpecifiedDirective: isSpecifiedDirective,
  specifiedDirectives: specifiedDirectives,
  GraphQLIncludeDirective: GraphQLIncludeDirective,
  GraphQLSkipDirective: GraphQLSkipDirective,
  GraphQLDeprecatedDirective: GraphQLDeprecatedDirective,
  DEFAULT_DEPRECATION_REASON: DEFAULT_DEPRECATION_REASON,
  isSpecifiedScalarType: isSpecifiedScalarType,
  specifiedScalarTypes: specifiedScalarTypes,
  GraphQLInt: GraphQLInt,
  GraphQLFloat: GraphQLFloat,
  GraphQLString: GraphQLString,
  GraphQLBoolean: GraphQLBoolean,
  GraphQLID: GraphQLID,
  isIntrospectionType: isIntrospectionType,
  introspectionTypes: introspectionTypes,
  __Schema: __Schema,
  __Directive: __Directive,
  __DirectiveLocation: __DirectiveLocation,
  __Type: __Type,
  __Field: __Field,
  __InputValue: __InputValue,
  __EnumValue: __EnumValue,
  __TypeKind: __TypeKind,
  TypeKind: TypeKind,
  SchemaMetaFieldDef: SchemaMetaFieldDef,
  TypeMetaFieldDef: TypeMetaFieldDef,
  TypeNameMetaFieldDef: TypeNameMetaFieldDef,
  validateSchema: validateSchema,
  assertValidSchema: assertValidSchema
});

function getIntrospectionQuery(options) {
  var descriptions = !(options && options.descriptions === false);
  return "\n    query IntrospectionQuery {\n      __schema {\n        queryType { name }\n        mutationType { name }\n        subscriptionType { name }\n        types {\n          ...FullType\n        }\n        directives {\n          name\n          ".concat(descriptions ? 'description' : '', "\n          locations\n          args {\n            ...InputValue\n          }\n        }\n      }\n    }\n\n    fragment FullType on __Type {\n      kind\n      name\n      ").concat(descriptions ? 'description' : '', "\n      fields(includeDeprecated: true) {\n        name\n        ").concat(descriptions ? 'description' : '', "\n        args {\n          ...InputValue\n        }\n        type {\n          ...TypeRef\n        }\n        isDeprecated\n        deprecationReason\n      }\n      inputFields {\n        ...InputValue\n      }\n      interfaces {\n        ...TypeRef\n      }\n      enumValues(includeDeprecated: true) {\n        name\n        ").concat(descriptions ? 'description' : '', "\n        isDeprecated\n        deprecationReason\n      }\n      possibleTypes {\n        ...TypeRef\n      }\n    }\n\n    fragment InputValue on __InputValue {\n      name\n      ").concat(descriptions ? 'description' : '', "\n      type { ...TypeRef }\n      defaultValue\n    }\n\n    fragment TypeRef on __Type {\n      kind\n      name\n      ofType {\n        kind\n        name\n        ofType {\n          kind\n          name\n          ofType {\n            kind\n            name\n            ofType {\n              kind\n              name\n              ofType {\n                kind\n                name\n                ofType {\n                  kind\n                  name\n                  ofType {\n                    kind\n                    name\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  ");
}
/**
 * Deprecated, call getIntrospectionQuery directly.
 *
 * This function will be removed in v15
 */

var introspectionQuery = getIntrospectionQuery();

/**
 * Returns an operation AST given a document AST and optionally an operation
 * name. If a name is not provided, an operation is only returned if only one is
 * provided in the document.
 */
function getOperationAST(documentAST, operationName) {
  var operation = null;

  for (var _i2 = 0, _documentAST$definiti2 = documentAST.definitions; _i2 < _documentAST$definiti2.length; _i2++) {
    var definition = _documentAST$definiti2[_i2];

    if (definition.kind === Kind.OPERATION_DEFINITION) {
      if (!operationName) {
        // If no operation name was provided, only return an Operation if there
        // is one defined in the document. Upon encountering the second, return
        // null.
        if (operation) {
          return null;
        }

        operation = definition;
      } else if (definition.name && definition.name.value === operationName) {
        return definition;
      }
    }
  }

  return operation;
}

/**
 * Build an IntrospectionQuery from a GraphQLSchema
 *
 * IntrospectionQuery is useful for utilities that care about type and field
 * relationships, but do not need to traverse through those relationships.
 *
 * This is the inverse of buildClientSchema. The primary use case is outside
 * of the server context, for instance when doing schema comparisons.
 */

function introspectionFromSchema(schema, options) {
  var queryAST = parse(getIntrospectionQuery(options));
  var result = execute(schema, queryAST);

  /* istanbul ignore next */
  !isPromise(result) && !result.errors && result.data || invariant(0);
  return result.data;
}

/**
 * Build a GraphQLSchema for use by client tools.
 *
 * Given the result of a client running the introspection query, creates and
 * returns a GraphQLSchema instance which can be then used with all graphql-js
 * tools, but cannot be used to execute a query, as introspection does not
 * represent the "resolver", "parse" or "serialize" functions or any other
 * server-internal mechanisms.
 *
 * This function expects a complete introspection result. Don't forget to check
 * the "errors" field of a server response before calling this function.
 */
function buildClientSchema(introspection, options) {
  isObjectLike(introspection) && isObjectLike(introspection.__schema) || devAssert(0, 'Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ' + inspect(introspection)); // Get the schema from the introspection result.

  var schemaIntrospection = introspection.__schema; // Iterate through all types, getting the type definition for each.

  var typeMap = keyValMap(schemaIntrospection.types, function (typeIntrospection) {
    return typeIntrospection.name;
  }, function (typeIntrospection) {
    return buildType(typeIntrospection);
  });

  for (var _i2 = 0, _ref2 = [].concat(specifiedScalarTypes, introspectionTypes); _i2 < _ref2.length; _i2++) {
    var stdType = _ref2[_i2];

    if (typeMap[stdType.name]) {
      typeMap[stdType.name] = stdType;
    }
  } // Get the root Query, Mutation, and Subscription types.


  var queryType = schemaIntrospection.queryType ? getObjectType(schemaIntrospection.queryType) : null;
  var mutationType = schemaIntrospection.mutationType ? getObjectType(schemaIntrospection.mutationType) : null;
  var subscriptionType = schemaIntrospection.subscriptionType ? getObjectType(schemaIntrospection.subscriptionType) : null; // Get the directives supported by Introspection, assuming empty-set if
  // directives were not queried for.

  var directives = schemaIntrospection.directives ? schemaIntrospection.directives.map(buildDirective) : []; // Then produce and return a Schema with these types.

  return new GraphQLSchema({
    query: queryType,
    mutation: mutationType,
    subscription: subscriptionType,
    types: objectValues(typeMap),
    directives: directives,
    assumeValid: options && options.assumeValid,
    allowedLegacyNames: options && options.allowedLegacyNames
  }); // Given a type reference in introspection, return the GraphQLType instance.
  // preferring cached instances before building new instances.

  function getType(typeRef) {
    if (typeRef.kind === TypeKind.LIST) {
      var itemRef = typeRef.ofType;

      if (!itemRef) {
        throw new Error('Decorated type deeper than introspection query.');
      }

      return GraphQLList(getType(itemRef));
    }

    if (typeRef.kind === TypeKind.NON_NULL) {
      var nullableRef = typeRef.ofType;

      if (!nullableRef) {
        throw new Error('Decorated type deeper than introspection query.');
      }

      var nullableType = getType(nullableRef);
      return GraphQLNonNull(assertNullableType(nullableType));
    }

    if (!typeRef.name) {
      throw new Error('Unknown type reference: ' + inspect(typeRef));
    }

    return getNamedType(typeRef.name);
  }

  function getNamedType(typeName) {
    var type = typeMap[typeName];

    if (!type) {
      throw new Error("Invalid or incomplete schema, unknown type: ".concat(typeName, ". Ensure that a full introspection query is used in order to build a client schema."));
    }

    return type;
  }

  function getInputType(typeRef) {
    var type = getType(typeRef);

    if (isInputType(type)) {
      return type;
    }

    throw new Error('Introspection must provide input type for arguments, but received: ' + inspect(type) + '.');
  }

  function getOutputType(typeRef) {
    var type = getType(typeRef);

    if (isOutputType(type)) {
      return type;
    }

    throw new Error('Introspection must provide output type for fields, but received: ' + inspect(type) + '.');
  }

  function getObjectType(typeRef) {
    var type = getType(typeRef);
    return assertObjectType(type);
  }

  function getInterfaceType(typeRef) {
    var type = getType(typeRef);
    return assertInterfaceType(type);
  } // Given a type's introspection result, construct the correct
  // GraphQLType instance.


  function buildType(type) {
    if (type && type.name && type.kind) {
      switch (type.kind) {
        case TypeKind.SCALAR:
          return buildScalarDef(type);

        case TypeKind.OBJECT:
          return buildObjectDef(type);

        case TypeKind.INTERFACE:
          return buildInterfaceDef(type);

        case TypeKind.UNION:
          return buildUnionDef(type);

        case TypeKind.ENUM:
          return buildEnumDef(type);

        case TypeKind.INPUT_OBJECT:
          return buildInputObjectDef(type);
      }
    }

    throw new Error('Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema:' + inspect(type));
  }

  function buildScalarDef(scalarIntrospection) {
    return new GraphQLScalarType({
      name: scalarIntrospection.name,
      description: scalarIntrospection.description
    });
  }

  function buildObjectDef(objectIntrospection) {
    if (!objectIntrospection.interfaces) {
      throw new Error('Introspection result missing interfaces: ' + inspect(objectIntrospection));
    }

    return new GraphQLObjectType({
      name: objectIntrospection.name,
      description: objectIntrospection.description,
      interfaces: function interfaces() {
        return objectIntrospection.interfaces.map(getInterfaceType);
      },
      fields: function fields() {
        return buildFieldDefMap(objectIntrospection);
      }
    });
  }

  function buildInterfaceDef(interfaceIntrospection) {
    return new GraphQLInterfaceType({
      name: interfaceIntrospection.name,
      description: interfaceIntrospection.description,
      fields: function fields() {
        return buildFieldDefMap(interfaceIntrospection);
      }
    });
  }

  function buildUnionDef(unionIntrospection) {
    if (!unionIntrospection.possibleTypes) {
      throw new Error('Introspection result missing possibleTypes: ' + inspect(unionIntrospection));
    }

    return new GraphQLUnionType({
      name: unionIntrospection.name,
      description: unionIntrospection.description,
      types: function types() {
        return unionIntrospection.possibleTypes.map(getObjectType);
      }
    });
  }

  function buildEnumDef(enumIntrospection) {
    if (!enumIntrospection.enumValues) {
      throw new Error('Introspection result missing enumValues: ' + inspect(enumIntrospection));
    }

    return new GraphQLEnumType({
      name: enumIntrospection.name,
      description: enumIntrospection.description,
      values: keyValMap(enumIntrospection.enumValues, function (valueIntrospection) {
        return valueIntrospection.name;
      }, function (valueIntrospection) {
        return {
          description: valueIntrospection.description,
          deprecationReason: valueIntrospection.deprecationReason
        };
      })
    });
  }

  function buildInputObjectDef(inputObjectIntrospection) {
    if (!inputObjectIntrospection.inputFields) {
      throw new Error('Introspection result missing inputFields: ' + inspect(inputObjectIntrospection));
    }

    return new GraphQLInputObjectType({
      name: inputObjectIntrospection.name,
      description: inputObjectIntrospection.description,
      fields: function fields() {
        return buildInputValueDefMap(inputObjectIntrospection.inputFields);
      }
    });
  }

  function buildFieldDefMap(typeIntrospection) {
    if (!typeIntrospection.fields) {
      throw new Error('Introspection result missing fields: ' + inspect(typeIntrospection));
    }

    return keyValMap(typeIntrospection.fields, function (fieldIntrospection) {
      return fieldIntrospection.name;
    }, function (fieldIntrospection) {
      if (!fieldIntrospection.args) {
        throw new Error('Introspection result missing field args: ' + inspect(fieldIntrospection));
      }

      return {
        description: fieldIntrospection.description,
        deprecationReason: fieldIntrospection.deprecationReason,
        type: getOutputType(fieldIntrospection.type),
        args: buildInputValueDefMap(fieldIntrospection.args)
      };
    });
  }

  function buildInputValueDefMap(inputValueIntrospections) {
    return keyValMap(inputValueIntrospections, function (inputValue) {
      return inputValue.name;
    }, buildInputValue);
  }

  function buildInputValue(inputValueIntrospection) {
    var type = getInputType(inputValueIntrospection.type);
    var defaultValue = inputValueIntrospection.defaultValue ? valueFromAST(parseValue(inputValueIntrospection.defaultValue), type) : undefined;
    return {
      description: inputValueIntrospection.description,
      type: type,
      defaultValue: defaultValue
    };
  }

  function buildDirective(directiveIntrospection) {
    if (!directiveIntrospection.args) {
      throw new Error('Introspection result missing directive args: ' + inspect(directiveIntrospection));
    }

    if (!directiveIntrospection.locations) {
      throw new Error('Introspection result missing directive locations: ' + inspect(directiveIntrospection));
    }

    return new GraphQLDirective({
      name: directiveIntrospection.name,
      description: directiveIntrospection.description,
      locations: directiveIntrospection.locations.slice(),
      args: buildInputValueDefMap(directiveIntrospection.args)
    });
  }
}

/**
 * TypeInfo is a utility class which, given a GraphQL schema, can keep track
 * of the current field and type definitions at any point in a GraphQL document
 * AST during a recursive descent by calling `enter(node)` and `leave(node)`.
 */

var TypeInfo =
/*#__PURE__*/
function () {
  function TypeInfo(schema, // NOTE: this experimental optional second parameter is only needed in order
  // to support non-spec-compliant codebases. You should never need to use it.
  // It may disappear in the future.
  getFieldDefFn, // Initial type may be provided in rare cases to facilitate traversals
  // beginning somewhere other than documents.
  initialType) {
    this._schema = schema;
    this._typeStack = [];
    this._parentTypeStack = [];
    this._inputTypeStack = [];
    this._fieldDefStack = [];
    this._defaultValueStack = [];
    this._directive = null;
    this._argument = null;
    this._enumValue = null;
    this._getFieldDef = getFieldDefFn || getFieldDef$1;

    if (initialType) {
      if (isInputType(initialType)) {
        this._inputTypeStack.push(initialType);
      }

      if (isCompositeType(initialType)) {
        this._parentTypeStack.push(initialType);
      }

      if (isOutputType(initialType)) {
        this._typeStack.push(initialType);
      }
    }
  }

  var _proto = TypeInfo.prototype;

  _proto.getType = function getType() {
    if (this._typeStack.length > 0) {
      return this._typeStack[this._typeStack.length - 1];
    }
  };

  _proto.getParentType = function getParentType() {
    if (this._parentTypeStack.length > 0) {
      return this._parentTypeStack[this._parentTypeStack.length - 1];
    }
  };

  _proto.getInputType = function getInputType() {
    if (this._inputTypeStack.length > 0) {
      return this._inputTypeStack[this._inputTypeStack.length - 1];
    }
  };

  _proto.getParentInputType = function getParentInputType() {
    if (this._inputTypeStack.length > 1) {
      return this._inputTypeStack[this._inputTypeStack.length - 2];
    }
  };

  _proto.getFieldDef = function getFieldDef() {
    if (this._fieldDefStack.length > 0) {
      return this._fieldDefStack[this._fieldDefStack.length - 1];
    }
  };

  _proto.getDefaultValue = function getDefaultValue() {
    if (this._defaultValueStack.length > 0) {
      return this._defaultValueStack[this._defaultValueStack.length - 1];
    }
  };

  _proto.getDirective = function getDirective() {
    return this._directive;
  };

  _proto.getArgument = function getArgument() {
    return this._argument;
  };

  _proto.getEnumValue = function getEnumValue() {
    return this._enumValue;
  };

  _proto.enter = function enter(node) {
    var schema = this._schema; // Note: many of the types below are explicitly typed as "mixed" to drop
    // any assumptions of a valid schema to ensure runtime types are properly
    // checked before continuing since TypeInfo is used as part of validation
    // which occurs before guarantees of schema and document validity.

    switch (node.kind) {
      case Kind.SELECTION_SET:
        {
          var namedType = getNamedType(this.getType());

          this._parentTypeStack.push(isCompositeType(namedType) ? namedType : undefined);

          break;
        }

      case Kind.FIELD:
        {
          var parentType = this.getParentType();
          var fieldDef;
          var fieldType;

          if (parentType) {
            fieldDef = this._getFieldDef(schema, parentType, node);

            if (fieldDef) {
              fieldType = fieldDef.type;
            }
          }

          this._fieldDefStack.push(fieldDef);

          this._typeStack.push(isOutputType(fieldType) ? fieldType : undefined);

          break;
        }

      case Kind.DIRECTIVE:
        this._directive = schema.getDirective(node.name.value);
        break;

      case Kind.OPERATION_DEFINITION:
        {
          var type;

          if (node.operation === 'query') {
            type = schema.getQueryType();
          } else if (node.operation === 'mutation') {
            type = schema.getMutationType();
          } else if (node.operation === 'subscription') {
            type = schema.getSubscriptionType();
          }

          this._typeStack.push(isObjectType(type) ? type : undefined);

          break;
        }

      case Kind.INLINE_FRAGMENT:
      case Kind.FRAGMENT_DEFINITION:
        {
          var typeConditionAST = node.typeCondition;
          var outputType = typeConditionAST ? typeFromAST(schema, typeConditionAST) : getNamedType(this.getType());

          this._typeStack.push(isOutputType(outputType) ? outputType : undefined);

          break;
        }

      case Kind.VARIABLE_DEFINITION:
        {
          var inputType = typeFromAST(schema, node.type);

          this._inputTypeStack.push(isInputType(inputType) ? inputType : undefined);

          break;
        }

      case Kind.ARGUMENT:
        {
          var argDef;
          var argType;
          var fieldOrDirective = this.getDirective() || this.getFieldDef();

          if (fieldOrDirective) {
            argDef = find(fieldOrDirective.args, function (arg) {
              return arg.name === node.name.value;
            });

            if (argDef) {
              argType = argDef.type;
            }
          }

          this._argument = argDef;

          this._defaultValueStack.push(argDef ? argDef.defaultValue : undefined);

          this._inputTypeStack.push(isInputType(argType) ? argType : undefined);

          break;
        }

      case Kind.LIST:
        {
          var listType = getNullableType(this.getInputType());
          var itemType = isListType(listType) ? listType.ofType : listType; // List positions never have a default value.

          this._defaultValueStack.push(undefined);

          this._inputTypeStack.push(isInputType(itemType) ? itemType : undefined);

          break;
        }

      case Kind.OBJECT_FIELD:
        {
          var objectType = getNamedType(this.getInputType());
          var inputFieldType;
          var inputField;

          if (isInputObjectType(objectType)) {
            inputField = objectType.getFields()[node.name.value];

            if (inputField) {
              inputFieldType = inputField.type;
            }
          }

          this._defaultValueStack.push(inputField ? inputField.defaultValue : undefined);

          this._inputTypeStack.push(isInputType(inputFieldType) ? inputFieldType : undefined);

          break;
        }

      case Kind.ENUM:
        {
          var enumType = getNamedType(this.getInputType());
          var enumValue;

          if (isEnumType(enumType)) {
            enumValue = enumType.getValue(node.value);
          }

          this._enumValue = enumValue;
          break;
        }
    }
  };

  _proto.leave = function leave(node) {
    switch (node.kind) {
      case Kind.SELECTION_SET:
        this._parentTypeStack.pop();

        break;

      case Kind.FIELD:
        this._fieldDefStack.pop();

        this._typeStack.pop();

        break;

      case Kind.DIRECTIVE:
        this._directive = null;
        break;

      case Kind.OPERATION_DEFINITION:
      case Kind.INLINE_FRAGMENT:
      case Kind.FRAGMENT_DEFINITION:
        this._typeStack.pop();

        break;

      case Kind.VARIABLE_DEFINITION:
        this._inputTypeStack.pop();

        break;

      case Kind.ARGUMENT:
        this._argument = null;

        this._defaultValueStack.pop();

        this._inputTypeStack.pop();

        break;

      case Kind.LIST:
      case Kind.OBJECT_FIELD:
        this._defaultValueStack.pop();

        this._inputTypeStack.pop();

        break;

      case Kind.ENUM:
        this._enumValue = null;
        break;
    }
  };

  return TypeInfo;
}();
/**
 * Not exactly the same as the executor's definition of getFieldDef, in this
 * statically evaluated environment we do not always have an Object type,
 * and need to handle Interface and Union types.
 */

function getFieldDef$1(schema, parentType, fieldNode) {
  var name = fieldNode.name.value;

  if (name === SchemaMetaFieldDef.name && schema.getQueryType() === parentType) {
    return SchemaMetaFieldDef;
  }

  if (name === TypeMetaFieldDef.name && schema.getQueryType() === parentType) {
    return TypeMetaFieldDef;
  }

  if (name === TypeNameMetaFieldDef.name && isCompositeType(parentType)) {
    return TypeNameMetaFieldDef;
  }

  if (isObjectType(parentType) || isInterfaceType(parentType)) {
    return parentType.getFields()[name];
  }
}

function nonExecutableDefinitionMessage(defName) {
  return "The ".concat(defName, " definition is not executable.");
}
/**
 * Executable definitions
 *
 * A GraphQL document is only valid for execution if all definitions are either
 * operation or fragment definitions.
 */

function ExecutableDefinitions(context) {
  return {
    Document: function Document(node) {
      for (var _i2 = 0, _node$definitions2 = node.definitions; _i2 < _node$definitions2.length; _i2++) {
        var definition = _node$definitions2[_i2];

        if (!isExecutableDefinitionNode(definition)) {
          context.reportError(new GraphQLError(nonExecutableDefinitionMessage(definition.kind === Kind.SCHEMA_DEFINITION || definition.kind === Kind.SCHEMA_EXTENSION ? 'schema' : definition.name.value), definition));
        }
      }

      return false;
    }
  };
}

function duplicateOperationNameMessage(operationName) {
  return "There can be only one operation named \"".concat(operationName, "\".");
}
/**
 * Unique operation names
 *
 * A GraphQL document is only valid if all defined operations have unique names.
 */

function UniqueOperationNames(context) {
  var knownOperationNames = Object.create(null);
  return {
    OperationDefinition: function OperationDefinition(node) {
      var operationName = node.name;

      if (operationName) {
        if (knownOperationNames[operationName.value]) {
          context.reportError(new GraphQLError(duplicateOperationNameMessage(operationName.value), [knownOperationNames[operationName.value], operationName]));
        } else {
          knownOperationNames[operationName.value] = operationName;
        }
      }

      return false;
    },
    FragmentDefinition: function FragmentDefinition() {
      return false;
    }
  };
}

function anonOperationNotAloneMessage() {
  return 'This anonymous operation must be the only defined operation.';
}
/**
 * Lone anonymous operation
 *
 * A GraphQL document is only valid if when it contains an anonymous operation
 * (the query short-hand) that it contains only that one operation definition.
 */

function LoneAnonymousOperation(context) {
  var operationCount = 0;
  return {
    Document: function Document(node) {
      operationCount = node.definitions.filter(function (definition) {
        return definition.kind === Kind.OPERATION_DEFINITION;
      }).length;
    },
    OperationDefinition: function OperationDefinition(node) {
      if (!node.name && operationCount > 1) {
        context.reportError(new GraphQLError(anonOperationNotAloneMessage(), node));
      }
    }
  };
}

function singleFieldOnlyMessage(name) {
  return name ? "Subscription \"".concat(name, "\" must select only one top level field.") : 'Anonymous Subscription must select only one top level field.';
}
/**
 * Subscriptions must only include one field.
 *
 * A GraphQL subscription is valid only if it contains a single root field.
 */

function SingleFieldSubscriptions(context) {
  return {
    OperationDefinition: function OperationDefinition(node) {
      if (node.operation === 'subscription') {
        if (node.selectionSet.selections.length !== 1) {
          context.reportError(new GraphQLError(singleFieldOnlyMessage(node.name && node.name.value), node.selectionSet.selections.slice(1)));
        }
      }
    }
  };
}

function unknownTypeMessage(typeName, suggestedTypes) {
  return "Unknown type \"".concat(typeName, "\".") + didYouMean(suggestedTypes.map(function (x) {
    return "\"".concat(x, "\"");
  }));
}
/**
 * Known type names
 *
 * A GraphQL document is only valid if referenced types (specifically
 * variable definitions and fragment conditions) are defined by the type schema.
 */

function KnownTypeNames(context) {
  var schema = context.getSchema();
  var existingTypesMap = schema ? schema.getTypeMap() : Object.create(null);
  var definedTypes = Object.create(null);

  for (var _i2 = 0, _context$getDocument$2 = context.getDocument().definitions; _i2 < _context$getDocument$2.length; _i2++) {
    var def = _context$getDocument$2[_i2];

    if (isTypeDefinitionNode(def)) {
      definedTypes[def.name.value] = true;
    }
  }

  var typeNames = Object.keys(existingTypesMap).concat(Object.keys(definedTypes));
  return {
    NamedType: function NamedType(node, _1, parent, _2, ancestors) {
      var typeName = node.name.value;

      if (!existingTypesMap[typeName] && !definedTypes[typeName]) {
        var definitionNode = ancestors[2] || parent;
        var isSDL = isSDLNode(definitionNode);

        if (isSDL && isSpecifiedScalarName(typeName)) {
          return;
        }

        var suggestedTypes = suggestionList(typeName, isSDL ? specifiedScalarsNames.concat(typeNames) : typeNames);
        context.reportError(new GraphQLError(unknownTypeMessage(typeName, suggestedTypes), node));
      }
    }
  };
}
var specifiedScalarsNames = specifiedScalarTypes.map(function (type) {
  return type.name;
});

function isSpecifiedScalarName(typeName) {
  return specifiedScalarsNames.indexOf(typeName) !== -1;
}

function isSDLNode(value) {
  return Boolean(value && !Array.isArray(value) && (isTypeSystemDefinitionNode(value) || isTypeSystemExtensionNode(value)));
}

function inlineFragmentOnNonCompositeErrorMessage(type) {
  return "Fragment cannot condition on non composite type \"".concat(type, "\".");
}
function fragmentOnNonCompositeErrorMessage(fragName, type) {
  return "Fragment \"".concat(fragName, "\" cannot condition on non composite type \"").concat(type, "\".");
}
/**
 * Fragments on composite type
 *
 * Fragments use a type condition to determine if they apply, since fragments
 * can only be spread into a composite type (object, interface, or union), the
 * type condition must also be a composite type.
 */

function FragmentsOnCompositeTypes(context) {
  return {
    InlineFragment: function InlineFragment(node) {
      var typeCondition = node.typeCondition;

      if (typeCondition) {
        var type = typeFromAST(context.getSchema(), typeCondition);

        if (type && !isCompositeType(type)) {
          context.reportError(new GraphQLError(inlineFragmentOnNonCompositeErrorMessage(print(typeCondition)), typeCondition));
        }
      }
    },
    FragmentDefinition: function FragmentDefinition(node) {
      var type = typeFromAST(context.getSchema(), node.typeCondition);

      if (type && !isCompositeType(type)) {
        context.reportError(new GraphQLError(fragmentOnNonCompositeErrorMessage(node.name.value, print(node.typeCondition)), node.typeCondition));
      }
    }
  };
}

function nonInputTypeOnVarMessage(variableName, typeName) {
  return "Variable \"$".concat(variableName, "\" cannot be non-input type \"").concat(typeName, "\".");
}
/**
 * Variables are input types
 *
 * A GraphQL operation is only valid if all the variables it defines are of
 * input types (scalar, enum, or input object).
 */

function VariablesAreInputTypes(context) {
  return {
    VariableDefinition: function VariableDefinition(node) {
      var type = typeFromAST(context.getSchema(), node.type); // If the variable type is not an input type, return an error.

      if (type && !isInputType(type)) {
        var variableName = node.variable.name.value;
        context.reportError(new GraphQLError(nonInputTypeOnVarMessage(variableName, print(node.type)), node.type));
      }
    }
  };
}

function noSubselectionAllowedMessage(fieldName, type) {
  return "Field \"".concat(fieldName, "\" must not have a selection since type \"").concat(type, "\" has no subfields.");
}
function requiredSubselectionMessage(fieldName, type) {
  return "Field \"".concat(fieldName, "\" of type \"").concat(type, "\" must have a selection of subfields. Did you mean \"").concat(fieldName, " { ... }\"?");
}
/**
 * Scalar leafs
 *
 * A GraphQL document is valid only if all leaf fields (fields without
 * sub selections) are of scalar or enum types.
 */

function ScalarLeafs(context) {
  return {
    Field: function Field(node) {
      var type = context.getType();
      var selectionSet = node.selectionSet;

      if (type) {
        if (isLeafType(getNamedType(type))) {
          if (selectionSet) {
            context.reportError(new GraphQLError(noSubselectionAllowedMessage(node.name.value, inspect(type)), selectionSet));
          }
        } else if (!selectionSet) {
          context.reportError(new GraphQLError(requiredSubselectionMessage(node.name.value, inspect(type)), node));
        }
      }
    }
  };
}

function undefinedFieldMessage(fieldName, type, suggestedTypeNames, suggestedFieldNames) {
  var quotedTypeNames = suggestedTypeNames.map(function (x) {
    return "\"".concat(x, "\"");
  });
  var quotedFieldNames = suggestedFieldNames.map(function (x) {
    return "\"".concat(x, "\"");
  });
  return "Cannot query field \"".concat(fieldName, "\" on type \"").concat(type, "\".") + (didYouMean('to use an inline fragment on', quotedTypeNames) || didYouMean(quotedFieldNames));
}
/**
 * Fields on correct type
 *
 * A GraphQL document is only valid if all fields selected are defined by the
 * parent type, or are an allowed meta field such as __typename.
 */

function FieldsOnCorrectType(context) {
  return {
    Field: function Field(node) {
      var type = context.getParentType();

      if (type) {
        var fieldDef = context.getFieldDef();

        if (!fieldDef) {
          // This field doesn't exist, lets look for suggestions.
          var schema = context.getSchema();
          var fieldName = node.name.value; // First determine if there are any suggested types to condition on.

          var suggestedTypeNames = getSuggestedTypeNames(schema, type, fieldName); // If there are no suggested types, then perhaps this was a typo?

          var suggestedFieldNames = suggestedTypeNames.length !== 0 ? [] : getSuggestedFieldNames(schema, type, fieldName); // Report an error, including helpful suggestions.

          context.reportError(new GraphQLError(undefinedFieldMessage(fieldName, type.name, suggestedTypeNames, suggestedFieldNames), node));
        }
      }
    }
  };
}
/**
 * Go through all of the implementations of type, as well as the interfaces that
 * they implement. If any of those types include the provided field, suggest
 * them, sorted by how often the type is referenced, starting with Interfaces.
 */

function getSuggestedTypeNames(schema, type, fieldName) {
  if (isAbstractType(type)) {
    var suggestedObjectTypes = [];
    var interfaceUsageCount = Object.create(null);

    for (var _i2 = 0, _schema$getPossibleTy2 = schema.getPossibleTypes(type); _i2 < _schema$getPossibleTy2.length; _i2++) {
      var possibleType = _schema$getPossibleTy2[_i2];

      if (!possibleType.getFields()[fieldName]) {
        continue;
      } // This object type defines this field.


      suggestedObjectTypes.push(possibleType.name);

      for (var _i4 = 0, _possibleType$getInte2 = possibleType.getInterfaces(); _i4 < _possibleType$getInte2.length; _i4++) {
        var possibleInterface = _possibleType$getInte2[_i4];

        if (!possibleInterface.getFields()[fieldName]) {
          continue;
        } // This interface type defines this field.


        interfaceUsageCount[possibleInterface.name] = (interfaceUsageCount[possibleInterface.name] || 0) + 1;
      }
    } // Suggest interface types based on how common they are.


    var suggestedInterfaceTypes = Object.keys(interfaceUsageCount).sort(function (a, b) {
      return interfaceUsageCount[b] - interfaceUsageCount[a];
    }); // Suggest both interface and object types.

    return suggestedInterfaceTypes.concat(suggestedObjectTypes);
  } // Otherwise, must be an Object type, which does not have possible fields.


  return [];
}
/**
 * For the field name provided, determine if there are any similar field names
 * that may be the result of a typo.
 */


function getSuggestedFieldNames(schema, type, fieldName) {
  if (isObjectType(type) || isInterfaceType(type)) {
    var possibleFieldNames = Object.keys(type.getFields());
    return suggestionList(fieldName, possibleFieldNames);
  } // Otherwise, must be a Union type, which does not define fields.


  return [];
}

function duplicateFragmentNameMessage(fragName) {
  return "There can be only one fragment named \"".concat(fragName, "\".");
}
/**
 * Unique fragment names
 *
 * A GraphQL document is only valid if all defined fragments have unique names.
 */

function UniqueFragmentNames(context) {
  var knownFragmentNames = Object.create(null);
  return {
    OperationDefinition: function OperationDefinition() {
      return false;
    },
    FragmentDefinition: function FragmentDefinition(node) {
      var fragmentName = node.name.value;

      if (knownFragmentNames[fragmentName]) {
        context.reportError(new GraphQLError(duplicateFragmentNameMessage(fragmentName), [knownFragmentNames[fragmentName], node.name]));
      } else {
        knownFragmentNames[fragmentName] = node.name;
      }

      return false;
    }
  };
}

function unknownFragmentMessage(fragName) {
  return "Unknown fragment \"".concat(fragName, "\".");
}
/**
 * Known fragment names
 *
 * A GraphQL document is only valid if all `...Fragment` fragment spreads refer
 * to fragments defined in the same document.
 */

function KnownFragmentNames(context) {
  return {
    FragmentSpread: function FragmentSpread(node) {
      var fragmentName = node.name.value;
      var fragment = context.getFragment(fragmentName);

      if (!fragment) {
        context.reportError(new GraphQLError(unknownFragmentMessage(fragmentName), node.name));
      }
    }
  };
}

function unusedFragMessage(fragName) {
  return "Fragment \"".concat(fragName, "\" is never used.");
}
/**
 * No unused fragments
 *
 * A GraphQL document is only valid if all fragment definitions are spread
 * within operations, or spread within other fragments spread within operations.
 */

function NoUnusedFragments(context) {
  var operationDefs = [];
  var fragmentDefs = [];
  return {
    OperationDefinition: function OperationDefinition(node) {
      operationDefs.push(node);
      return false;
    },
    FragmentDefinition: function FragmentDefinition(node) {
      fragmentDefs.push(node);
      return false;
    },
    Document: {
      leave: function leave() {
        var fragmentNameUsed = Object.create(null);

        for (var _i2 = 0; _i2 < operationDefs.length; _i2++) {
          var operation = operationDefs[_i2];

          for (var _i4 = 0, _context$getRecursive2 = context.getRecursivelyReferencedFragments(operation); _i4 < _context$getRecursive2.length; _i4++) {
            var fragment = _context$getRecursive2[_i4];
            fragmentNameUsed[fragment.name.value] = true;
          }
        }

        for (var _i6 = 0; _i6 < fragmentDefs.length; _i6++) {
          var fragmentDef = fragmentDefs[_i6];
          var fragName = fragmentDef.name.value;

          if (fragmentNameUsed[fragName] !== true) {
            context.reportError(new GraphQLError(unusedFragMessage(fragName), fragmentDef));
          }
        }
      }
    }
  };
}

function typeIncompatibleSpreadMessage(fragName, parentType, fragType) {
  return "Fragment \"".concat(fragName, "\" cannot be spread here as objects of type \"").concat(parentType, "\" can never be of type \"").concat(fragType, "\".");
}
function typeIncompatibleAnonSpreadMessage(parentType, fragType) {
  return "Fragment cannot be spread here as objects of type \"".concat(parentType, "\" can never be of type \"").concat(fragType, "\".");
}
/**
 * Possible fragment spread
 *
 * A fragment spread is only valid if the type condition could ever possibly
 * be true: if there is a non-empty intersection of the possible parent types,
 * and possible types which pass the type condition.
 */

function PossibleFragmentSpreads(context) {
  return {
    InlineFragment: function InlineFragment(node) {
      var fragType = context.getType();
      var parentType = context.getParentType();

      if (isCompositeType(fragType) && isCompositeType(parentType) && !doTypesOverlap(context.getSchema(), fragType, parentType)) {
        context.reportError(new GraphQLError(typeIncompatibleAnonSpreadMessage(inspect(parentType), inspect(fragType)), node));
      }
    },
    FragmentSpread: function FragmentSpread(node) {
      var fragName = node.name.value;
      var fragType = getFragmentType(context, fragName);
      var parentType = context.getParentType();

      if (fragType && parentType && !doTypesOverlap(context.getSchema(), fragType, parentType)) {
        context.reportError(new GraphQLError(typeIncompatibleSpreadMessage(fragName, inspect(parentType), inspect(fragType)), node));
      }
    }
  };
}

function getFragmentType(context, name) {
  var frag = context.getFragment(name);

  if (frag) {
    var type = typeFromAST(context.getSchema(), frag.typeCondition);

    if (isCompositeType(type)) {
      return type;
    }
  }
}

function cycleErrorMessage(fragName, spreadNames) {
  var via = spreadNames.length ? ' via ' + spreadNames.join(', ') : '';
  return "Cannot spread fragment \"".concat(fragName, "\" within itself").concat(via, ".");
}
function NoFragmentCycles(context) {
  // Tracks already visited fragments to maintain O(N) and to ensure that cycles
  // are not redundantly reported.
  var visitedFrags = Object.create(null); // Array of AST nodes used to produce meaningful errors

  var spreadPath = []; // Position in the spread path

  var spreadPathIndexByName = Object.create(null);
  return {
    OperationDefinition: function OperationDefinition() {
      return false;
    },
    FragmentDefinition: function FragmentDefinition(node) {
      detectCycleRecursive(node);
      return false;
    }
  }; // This does a straight-forward DFS to find cycles.
  // It does not terminate when a cycle was found but continues to explore
  // the graph to find all possible cycles.

  function detectCycleRecursive(fragment) {
    if (visitedFrags[fragment.name.value]) {
      return;
    }

    var fragmentName = fragment.name.value;
    visitedFrags[fragmentName] = true;
    var spreadNodes = context.getFragmentSpreads(fragment.selectionSet);

    if (spreadNodes.length === 0) {
      return;
    }

    spreadPathIndexByName[fragmentName] = spreadPath.length;

    for (var _i2 = 0; _i2 < spreadNodes.length; _i2++) {
      var spreadNode = spreadNodes[_i2];
      var spreadName = spreadNode.name.value;
      var cycleIndex = spreadPathIndexByName[spreadName];
      spreadPath.push(spreadNode);

      if (cycleIndex === undefined) {
        var spreadFragment = context.getFragment(spreadName);

        if (spreadFragment) {
          detectCycleRecursive(spreadFragment);
        }
      } else {
        var cyclePath = spreadPath.slice(cycleIndex);
        var fragmentNames = cyclePath.slice(0, -1).map(function (s) {
          return s.name.value;
        });
        context.reportError(new GraphQLError(cycleErrorMessage(spreadName, fragmentNames), cyclePath));
      }

      spreadPath.pop();
    }

    spreadPathIndexByName[fragmentName] = undefined;
  }
}

function duplicateVariableMessage(variableName) {
  return "There can be only one variable named \"".concat(variableName, "\".");
}
/**
 * Unique variable names
 *
 * A GraphQL operation is only valid if all its variables are uniquely named.
 */

function UniqueVariableNames(context) {
  var knownVariableNames = Object.create(null);
  return {
    OperationDefinition: function OperationDefinition() {
      knownVariableNames = Object.create(null);
    },
    VariableDefinition: function VariableDefinition(node) {
      var variableName = node.variable.name.value;

      if (knownVariableNames[variableName]) {
        context.reportError(new GraphQLError(duplicateVariableMessage(variableName), [knownVariableNames[variableName], node.variable.name]));
      } else {
        knownVariableNames[variableName] = node.variable.name;
      }
    }
  };
}

function undefinedVarMessage(varName, opName) {
  return opName ? "Variable \"$".concat(varName, "\" is not defined by operation \"").concat(opName, "\".") : "Variable \"$".concat(varName, "\" is not defined.");
}
/**
 * No undefined variables
 *
 * A GraphQL operation is only valid if all variables encountered, both directly
 * and via fragment spreads, are defined by that operation.
 */

function NoUndefinedVariables(context) {
  var variableNameDefined = Object.create(null);
  return {
    OperationDefinition: {
      enter: function enter() {
        variableNameDefined = Object.create(null);
      },
      leave: function leave(operation) {
        var usages = context.getRecursiveVariableUsages(operation);

        for (var _i2 = 0; _i2 < usages.length; _i2++) {
          var _ref2 = usages[_i2];
          var node = _ref2.node;
          var varName = node.name.value;

          if (variableNameDefined[varName] !== true) {
            context.reportError(new GraphQLError(undefinedVarMessage(varName, operation.name && operation.name.value), [node, operation]));
          }
        }
      }
    },
    VariableDefinition: function VariableDefinition(node) {
      variableNameDefined[node.variable.name.value] = true;
    }
  };
}

function unusedVariableMessage(varName, opName) {
  return opName ? "Variable \"$".concat(varName, "\" is never used in operation \"").concat(opName, "\".") : "Variable \"$".concat(varName, "\" is never used.");
}
/**
 * No unused variables
 *
 * A GraphQL operation is only valid if all variables defined by an operation
 * are used, either directly or within a spread fragment.
 */

function NoUnusedVariables(context) {
  var variableDefs = [];
  return {
    OperationDefinition: {
      enter: function enter() {
        variableDefs = [];
      },
      leave: function leave(operation) {
        var variableNameUsed = Object.create(null);
        var usages = context.getRecursiveVariableUsages(operation);
        var opName = operation.name ? operation.name.value : null;

        for (var _i2 = 0; _i2 < usages.length; _i2++) {
          var _ref2 = usages[_i2];
          var node = _ref2.node;
          variableNameUsed[node.name.value] = true;
        }

        for (var _i4 = 0, _variableDefs2 = variableDefs; _i4 < _variableDefs2.length; _i4++) {
          var variableDef = _variableDefs2[_i4];
          var variableName = variableDef.variable.name.value;

          if (variableNameUsed[variableName] !== true) {
            context.reportError(new GraphQLError(unusedVariableMessage(variableName, opName), variableDef));
          }
        }
      }
    },
    VariableDefinition: function VariableDefinition(def) {
      variableDefs.push(def);
    }
  };
}

function unknownDirectiveMessage(directiveName) {
  return "Unknown directive \"".concat(directiveName, "\".");
}
function misplacedDirectiveMessage(directiveName, location) {
  return "Directive \"".concat(directiveName, "\" may not be used on ").concat(location, ".");
}
/**
 * Known directives
 *
 * A GraphQL document is only valid if all `@directives` are known by the
 * schema and legally positioned.
 */

function KnownDirectives(context) {
  var locationsMap = Object.create(null);
  var schema = context.getSchema();
  var definedDirectives = schema ? schema.getDirectives() : specifiedDirectives;

  for (var _i2 = 0; _i2 < definedDirectives.length; _i2++) {
    var directive = definedDirectives[_i2];
    locationsMap[directive.name] = directive.locations;
  }

  var astDefinitions = context.getDocument().definitions;

  for (var _i4 = 0; _i4 < astDefinitions.length; _i4++) {
    var def = astDefinitions[_i4];

    if (def.kind === Kind.DIRECTIVE_DEFINITION) {
      locationsMap[def.name.value] = def.locations.map(function (name) {
        return name.value;
      });
    }
  }

  return {
    Directive: function Directive(node, key, parent, path, ancestors) {
      var name = node.name.value;
      var locations = locationsMap[name];

      if (!locations) {
        context.reportError(new GraphQLError(unknownDirectiveMessage(name), node));
        return;
      }

      var candidateLocation = getDirectiveLocationForASTPath(ancestors);

      if (candidateLocation && locations.indexOf(candidateLocation) === -1) {
        context.reportError(new GraphQLError(misplacedDirectiveMessage(name, candidateLocation), node));
      }
    }
  };
}

function getDirectiveLocationForASTPath(ancestors) {
  var appliedTo = ancestors[ancestors.length - 1];

  if (!Array.isArray(appliedTo)) {
    switch (appliedTo.kind) {
      case Kind.OPERATION_DEFINITION:
        switch (appliedTo.operation) {
          case 'query':
            return DirectiveLocation.QUERY;

          case 'mutation':
            return DirectiveLocation.MUTATION;

          case 'subscription':
            return DirectiveLocation.SUBSCRIPTION;
        }

        break;

      case Kind.FIELD:
        return DirectiveLocation.FIELD;

      case Kind.FRAGMENT_SPREAD:
        return DirectiveLocation.FRAGMENT_SPREAD;

      case Kind.INLINE_FRAGMENT:
        return DirectiveLocation.INLINE_FRAGMENT;

      case Kind.FRAGMENT_DEFINITION:
        return DirectiveLocation.FRAGMENT_DEFINITION;

      case Kind.VARIABLE_DEFINITION:
        return DirectiveLocation.VARIABLE_DEFINITION;

      case Kind.SCHEMA_DEFINITION:
      case Kind.SCHEMA_EXTENSION:
        return DirectiveLocation.SCHEMA;

      case Kind.SCALAR_TYPE_DEFINITION:
      case Kind.SCALAR_TYPE_EXTENSION:
        return DirectiveLocation.SCALAR;

      case Kind.OBJECT_TYPE_DEFINITION:
      case Kind.OBJECT_TYPE_EXTENSION:
        return DirectiveLocation.OBJECT;

      case Kind.FIELD_DEFINITION:
        return DirectiveLocation.FIELD_DEFINITION;

      case Kind.INTERFACE_TYPE_DEFINITION:
      case Kind.INTERFACE_TYPE_EXTENSION:
        return DirectiveLocation.INTERFACE;

      case Kind.UNION_TYPE_DEFINITION:
      case Kind.UNION_TYPE_EXTENSION:
        return DirectiveLocation.UNION;

      case Kind.ENUM_TYPE_DEFINITION:
      case Kind.ENUM_TYPE_EXTENSION:
        return DirectiveLocation.ENUM;

      case Kind.ENUM_VALUE_DEFINITION:
        return DirectiveLocation.ENUM_VALUE;

      case Kind.INPUT_OBJECT_TYPE_DEFINITION:
      case Kind.INPUT_OBJECT_TYPE_EXTENSION:
        return DirectiveLocation.INPUT_OBJECT;

      case Kind.INPUT_VALUE_DEFINITION:
        {
          var parentNode = ancestors[ancestors.length - 3];
          return parentNode.kind === Kind.INPUT_OBJECT_TYPE_DEFINITION ? DirectiveLocation.INPUT_FIELD_DEFINITION : DirectiveLocation.ARGUMENT_DEFINITION;
        }
    }
  }
}

function duplicateDirectiveMessage(directiveName) {
  return "The directive \"".concat(directiveName, "\" can only be used once at this location.");
}
/**
 * Unique directive names per location
 *
 * A GraphQL document is only valid if all non-repeatable directives at
 * a given location are uniquely named.
 */

function UniqueDirectivesPerLocation(context) {
  var uniqueDirectiveMap = Object.create(null);
  var schema = context.getSchema();
  var definedDirectives = schema ? schema.getDirectives() : specifiedDirectives;

  for (var _i2 = 0; _i2 < definedDirectives.length; _i2++) {
    var directive = definedDirectives[_i2];
    uniqueDirectiveMap[directive.name] = !directive.isRepeatable;
  }

  var astDefinitions = context.getDocument().definitions;

  for (var _i4 = 0; _i4 < astDefinitions.length; _i4++) {
    var def = astDefinitions[_i4];

    if (def.kind === Kind.DIRECTIVE_DEFINITION) {
      uniqueDirectiveMap[def.name.value] = !def.repeatable;
    }
  }

  return {
    // Many different AST nodes may contain directives. Rather than listing
    // them all, just listen for entering any node, and check to see if it
    // defines any directives.
    enter: function enter(node) {
      // Flow can't refine that node.directives will only contain directives,
      // so we cast so the rest of the code is well typed.
      var directives = node.directives;

      if (directives) {
        var knownDirectives = Object.create(null);

        for (var _i6 = 0; _i6 < directives.length; _i6++) {
          var _directive = directives[_i6];
          var directiveName = _directive.name.value;

          if (uniqueDirectiveMap[directiveName]) {
            if (knownDirectives[directiveName]) {
              context.reportError(new GraphQLError(duplicateDirectiveMessage(directiveName), [knownDirectives[directiveName], _directive]));
            } else {
              knownDirectives[directiveName] = _directive;
            }
          }
        }
      }
    }
  };
}

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(source, true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function unknownArgMessage(argName, fieldName, typeName, suggestedArgs) {
  return "Unknown argument \"".concat(argName, "\" on field \"").concat(fieldName, "\" of type \"").concat(typeName, "\".") + didYouMean(suggestedArgs.map(function (x) {
    return "\"".concat(x, "\"");
  }));
}
function unknownDirectiveArgMessage(argName, directiveName, suggestedArgs) {
  return "Unknown argument \"".concat(argName, "\" on directive \"@").concat(directiveName, "\".") + didYouMean(suggestedArgs.map(function (x) {
    return "\"".concat(x, "\"");
  }));
}
/**
 * Known argument names
 *
 * A GraphQL field is only valid if all supplied arguments are defined by
 * that field.
 */

function KnownArgumentNames(context) {
  return _objectSpread$1({}, KnownArgumentNamesOnDirectives(context), {
    Argument: function Argument(argNode) {
      var argDef = context.getArgument();
      var fieldDef = context.getFieldDef();
      var parentType = context.getParentType();

      if (!argDef && fieldDef && parentType) {
        var argName = argNode.name.value;
        var knownArgsNames = fieldDef.args.map(function (arg) {
          return arg.name;
        });
        context.reportError(new GraphQLError(unknownArgMessage(argName, fieldDef.name, parentType.name, suggestionList(argName, knownArgsNames)), argNode));
      }
    }
  });
} // @internal

function KnownArgumentNamesOnDirectives(context) {
  var directiveArgs = Object.create(null);
  var schema = context.getSchema();
  var definedDirectives = schema ? schema.getDirectives() : specifiedDirectives;

  for (var _i2 = 0; _i2 < definedDirectives.length; _i2++) {
    var directive = definedDirectives[_i2];
    directiveArgs[directive.name] = directive.args.map(function (arg) {
      return arg.name;
    });
  }

  var astDefinitions = context.getDocument().definitions;

  for (var _i4 = 0; _i4 < astDefinitions.length; _i4++) {
    var def = astDefinitions[_i4];

    if (def.kind === Kind.DIRECTIVE_DEFINITION) {
      directiveArgs[def.name.value] = def.arguments ? def.arguments.map(function (arg) {
        return arg.name.value;
      }) : [];
    }
  }

  return {
    Directive: function Directive(directiveNode) {
      var directiveName = directiveNode.name.value;
      var knownArgs = directiveArgs[directiveName];

      if (directiveNode.arguments && knownArgs) {
        for (var _i6 = 0, _directiveNode$argume2 = directiveNode.arguments; _i6 < _directiveNode$argume2.length; _i6++) {
          var argNode = _directiveNode$argume2[_i6];
          var argName = argNode.name.value;

          if (knownArgs.indexOf(argName) === -1) {
            var suggestions = suggestionList(argName, knownArgs);
            context.reportError(new GraphQLError(unknownDirectiveArgMessage(argName, directiveName, suggestions), argNode));
          }
        }
      }

      return false;
    }
  };
}

function duplicateArgMessage(argName) {
  return "There can be only one argument named \"".concat(argName, "\".");
}
/**
 * Unique argument names
 *
 * A GraphQL field or directive is only valid if all supplied arguments are
 * uniquely named.
 */

function UniqueArgumentNames(context) {
  var knownArgNames = Object.create(null);
  return {
    Field: function Field() {
      knownArgNames = Object.create(null);
    },
    Directive: function Directive() {
      knownArgNames = Object.create(null);
    },
    Argument: function Argument(node) {
      var argName = node.name.value;

      if (knownArgNames[argName]) {
        context.reportError(new GraphQLError(duplicateArgMessage(argName), [knownArgNames[argName], node.name]));
      } else {
        knownArgNames[argName] = node.name;
      }

      return false;
    }
  };
}

function badValueMessage(typeName, valueName, message) {
  return "Expected type ".concat(typeName, ", found ").concat(valueName) + (message ? "; ".concat(message) : '.');
}
function badEnumValueMessage(typeName, valueName, suggestedValues) {
  return "Expected type ".concat(typeName, ", found ").concat(valueName, ".") + didYouMean('the enum value', suggestedValues);
}
function requiredFieldMessage(typeName, fieldName, fieldTypeName) {
  return "Field ".concat(typeName, ".").concat(fieldName, " of required type ").concat(fieldTypeName, " was not provided.");
}
function unknownFieldMessage(typeName, fieldName, suggestedFields) {
  return "Field \"".concat(fieldName, "\" is not defined by type ").concat(typeName, ".") + didYouMean(suggestedFields);
}
/**
 * Value literals of correct type
 *
 * A GraphQL document is only valid if all value literals are of the type
 * expected at their position.
 */

function ValuesOfCorrectType(context) {
  return {
    NullValue: function NullValue(node) {
      var type = context.getInputType();

      if (isNonNullType(type)) {
        context.reportError(new GraphQLError(badValueMessage(inspect(type), print(node)), node));
      }
    },
    ListValue: function ListValue(node) {
      // Note: TypeInfo will traverse into a list's item type, so look to the
      // parent input type to check if it is a list.
      var type = getNullableType(context.getParentInputType());

      if (!isListType(type)) {
        isValidScalar(context, node);
        return false; // Don't traverse further.
      }
    },
    ObjectValue: function ObjectValue(node) {
      var type = getNamedType(context.getInputType());

      if (!isInputObjectType(type)) {
        isValidScalar(context, node);
        return false; // Don't traverse further.
      } // Ensure every required field exists.


      var fieldNodeMap = keyMap(node.fields, function (field) {
        return field.name.value;
      });

      for (var _i2 = 0, _objectValues2 = objectValues(type.getFields()); _i2 < _objectValues2.length; _i2++) {
        var fieldDef = _objectValues2[_i2];
        var fieldNode = fieldNodeMap[fieldDef.name];

        if (!fieldNode && isRequiredInputField(fieldDef)) {
          var typeStr = inspect(fieldDef.type);
          context.reportError(new GraphQLError(requiredFieldMessage(type.name, fieldDef.name, typeStr), node));
        }
      }
    },
    ObjectField: function ObjectField(node) {
      var parentType = getNamedType(context.getParentInputType());
      var fieldType = context.getInputType();

      if (!fieldType && isInputObjectType(parentType)) {
        var suggestions = suggestionList(node.name.value, Object.keys(parentType.getFields()));
        context.reportError(new GraphQLError(unknownFieldMessage(parentType.name, node.name.value, suggestions), node));
      }
    },
    EnumValue: function EnumValue(node) {
      var type = getNamedType(context.getInputType());

      if (!isEnumType(type)) {
        isValidScalar(context, node);
      } else if (!type.getValue(node.value)) {
        context.reportError(new GraphQLError(badEnumValueMessage(type.name, print(node), enumTypeSuggestion(type, node)), node));
      }
    },
    IntValue: function IntValue(node) {
      return isValidScalar(context, node);
    },
    FloatValue: function FloatValue(node) {
      return isValidScalar(context, node);
    },
    StringValue: function StringValue(node) {
      return isValidScalar(context, node);
    },
    BooleanValue: function BooleanValue(node) {
      return isValidScalar(context, node);
    }
  };
}
/**
 * Any value literal may be a valid representation of a Scalar, depending on
 * that scalar type.
 */

function isValidScalar(context, node) {
  // Report any error at the full type expected by the location.
  var locationType = context.getInputType();

  if (!locationType) {
    return;
  }

  var type = getNamedType(locationType);

  if (!isScalarType(type)) {
    var message = isEnumType(type) ? badEnumValueMessage(inspect(locationType), print(node), enumTypeSuggestion(type, node)) : badValueMessage(inspect(locationType), print(node));
    context.reportError(new GraphQLError(message, node));
    return;
  } // Scalars determine if a literal value is valid via parseLiteral() which
  // may throw or return an invalid value to indicate failure.


  try {
    var parseResult = type.parseLiteral(node, undefined
    /* variables */
    );

    if (isInvalid(parseResult)) {
      context.reportError(new GraphQLError(badValueMessage(inspect(locationType), print(node)), node));
    }
  } catch (error) {
    // Ensure a reference to the original error is maintained.
    context.reportError(new GraphQLError(badValueMessage(inspect(locationType), print(node), error.message), node, undefined, undefined, undefined, error));
  }
}

function enumTypeSuggestion(type, node) {
  var allNames = type.getValues().map(function (value) {
    return value.name;
  });
  return suggestionList(print(node), allNames);
}

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(source, true).forEach(function (key) { _defineProperty$2(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function missingFieldArgMessage(fieldName, argName, type) {
  return "Field \"".concat(fieldName, "\" argument \"").concat(argName, "\" of type \"").concat(type, "\" is required, but it was not provided.");
}
function missingDirectiveArgMessage(directiveName, argName, type) {
  return "Directive \"@".concat(directiveName, "\" argument \"").concat(argName, "\" of type \"").concat(type, "\" is required, but it was not provided.");
}
/**
 * Provided required arguments
 *
 * A field or directive is only valid if all required (non-null without a
 * default value) field arguments have been provided.
 */

function ProvidedRequiredArguments(context) {
  return _objectSpread$2({}, ProvidedRequiredArgumentsOnDirectives(context), {
    Field: {
      // Validate on leave to allow for deeper errors to appear first.
      leave: function leave(fieldNode) {
        var fieldDef = context.getFieldDef();

        if (!fieldDef) {
          return false;
        }

        var argNodes = fieldNode.arguments || [];
        var argNodeMap = keyMap(argNodes, function (arg) {
          return arg.name.value;
        });

        for (var _i2 = 0, _fieldDef$args2 = fieldDef.args; _i2 < _fieldDef$args2.length; _i2++) {
          var argDef = _fieldDef$args2[_i2];
          var argNode = argNodeMap[argDef.name];

          if (!argNode && isRequiredArgument(argDef)) {
            context.reportError(new GraphQLError(missingFieldArgMessage(fieldDef.name, argDef.name, inspect(argDef.type)), fieldNode));
          }
        }
      }
    }
  });
} // @internal

function ProvidedRequiredArgumentsOnDirectives(context) {
  var requiredArgsMap = Object.create(null);
  var schema = context.getSchema();
  var definedDirectives = schema ? schema.getDirectives() : specifiedDirectives;

  for (var _i4 = 0; _i4 < definedDirectives.length; _i4++) {
    var directive = definedDirectives[_i4];
    requiredArgsMap[directive.name] = keyMap(directive.args.filter(isRequiredArgument), function (arg) {
      return arg.name;
    });
  }

  var astDefinitions = context.getDocument().definitions;

  for (var _i6 = 0; _i6 < astDefinitions.length; _i6++) {
    var def = astDefinitions[_i6];

    if (def.kind === Kind.DIRECTIVE_DEFINITION) {
      requiredArgsMap[def.name.value] = keyMap(def.arguments ? def.arguments.filter(isRequiredArgumentNode) : [], function (arg) {
        return arg.name.value;
      });
    }
  }

  return {
    Directive: {
      // Validate on leave to allow for deeper errors to appear first.
      leave: function leave(directiveNode) {
        var directiveName = directiveNode.name.value;
        var requiredArgs = requiredArgsMap[directiveName];

        if (requiredArgs) {
          var argNodes = directiveNode.arguments || [];
          var argNodeMap = keyMap(argNodes, function (arg) {
            return arg.name.value;
          });

          for (var _i8 = 0, _Object$keys2 = Object.keys(requiredArgs); _i8 < _Object$keys2.length; _i8++) {
            var argName = _Object$keys2[_i8];

            if (!argNodeMap[argName]) {
              var argType = requiredArgs[argName].type;
              context.reportError(new GraphQLError(missingDirectiveArgMessage(directiveName, argName, isType(argType) ? inspect(argType) : print(argType)), directiveNode));
            }
          }
        }
      }
    }
  };
}

function isRequiredArgumentNode(arg) {
  return arg.type.kind === Kind.NON_NULL_TYPE && arg.defaultValue == null;
}

function badVarPosMessage(varName, varType, expectedType) {
  return "Variable \"$".concat(varName, "\" of type \"").concat(varType, "\" used in position expecting type \"").concat(expectedType, "\".");
}
/**
 * Variables passed to field arguments conform to type
 */

function VariablesInAllowedPosition(context) {
  var varDefMap = Object.create(null);
  return {
    OperationDefinition: {
      enter: function enter() {
        varDefMap = Object.create(null);
      },
      leave: function leave(operation) {
        var usages = context.getRecursiveVariableUsages(operation);

        for (var _i2 = 0; _i2 < usages.length; _i2++) {
          var _ref2 = usages[_i2];
          var node = _ref2.node;
          var type = _ref2.type;
          var defaultValue = _ref2.defaultValue;
          var varName = node.name.value;
          var varDef = varDefMap[varName];

          if (varDef && type) {
            // A var type is allowed if it is the same or more strict (e.g. is
            // a subtype of) than the expected type. It can be more strict if
            // the variable type is non-null when the expected type is nullable.
            // If both are list types, the variable item type can be more strict
            // than the expected item type (contravariant).
            var schema = context.getSchema();
            var varType = typeFromAST(schema, varDef.type);

            if (varType && !allowedVariableUsage(schema, varType, varDef.defaultValue, type, defaultValue)) {
              context.reportError(new GraphQLError(badVarPosMessage(varName, inspect(varType), inspect(type)), [varDef, node]));
            }
          }
        }
      }
    },
    VariableDefinition: function VariableDefinition(node) {
      varDefMap[node.variable.name.value] = node;
    }
  };
}
/**
 * Returns true if the variable is allowed in the location it was found,
 * which includes considering if default values exist for either the variable
 * or the location at which it is located.
 */

function allowedVariableUsage(schema, varType, varDefaultValue, locationType, locationDefaultValue) {
  if (isNonNullType(locationType) && !isNonNullType(varType)) {
    var hasNonNullVariableDefaultValue = varDefaultValue != null && varDefaultValue.kind !== Kind.NULL;
    var hasLocationDefaultValue = locationDefaultValue !== undefined;

    if (!hasNonNullVariableDefaultValue && !hasLocationDefaultValue) {
      return false;
    }

    var nullableLocationType = locationType.ofType;
    return isTypeSubTypeOf(schema, varType, nullableLocationType);
  }

  return isTypeSubTypeOf(schema, varType, locationType);
}

function fieldsConflictMessage(responseName, reason) {
  return "Fields \"".concat(responseName, "\" conflict because ").concat(reasonMessage(reason), ". ") + 'Use different aliases on the fields to fetch both if this was intentional.';
}

function reasonMessage(reason) {
  if (Array.isArray(reason)) {
    return reason.map(function (_ref) {
      var responseName = _ref[0],
          subreason = _ref[1];
      return "subfields \"".concat(responseName, "\" conflict because ").concat(reasonMessage(subreason));
    }).join(' and ');
  }

  return reason;
}
/**
 * Overlapping fields can be merged
 *
 * A selection set is only valid if all fields (including spreading any
 * fragments) either correspond to distinct response names or can be merged
 * without ambiguity.
 */


function OverlappingFieldsCanBeMerged(context) {
  // A memoization for when two fragments are compared "between" each other for
  // conflicts. Two fragments may be compared many times, so memoizing this can
  // dramatically improve the performance of this validator.
  var comparedFragmentPairs = new PairSet(); // A cache for the "field map" and list of fragment names found in any given
  // selection set. Selection sets may be asked for this information multiple
  // times, so this improves the performance of this validator.

  var cachedFieldsAndFragmentNames = new Map();
  return {
    SelectionSet: function SelectionSet(selectionSet) {
      var conflicts = findConflictsWithinSelectionSet(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, context.getParentType(), selectionSet);

      for (var _i2 = 0; _i2 < conflicts.length; _i2++) {
        var _ref3 = conflicts[_i2];
        var _ref2$ = _ref3[0];
        var responseName = _ref2$[0];
        var reason = _ref2$[1];
        var fields1 = _ref3[1];
        var fields2 = _ref3[2];
        context.reportError(new GraphQLError(fieldsConflictMessage(responseName, reason), fields1.concat(fields2)));
      }
    }
  };
}

/**
 * Algorithm:
 *
 * Conflicts occur when two fields exist in a query which will produce the same
 * response name, but represent differing values, thus creating a conflict.
 * The algorithm below finds all conflicts via making a series of comparisons
 * between fields. In order to compare as few fields as possible, this makes
 * a series of comparisons "within" sets of fields and "between" sets of fields.
 *
 * Given any selection set, a collection produces both a set of fields by
 * also including all inline fragments, as well as a list of fragments
 * referenced by fragment spreads.
 *
 * A) Each selection set represented in the document first compares "within" its
 * collected set of fields, finding any conflicts between every pair of
 * overlapping fields.
 * Note: This is the *only time* that a the fields "within" a set are compared
 * to each other. After this only fields "between" sets are compared.
 *
 * B) Also, if any fragment is referenced in a selection set, then a
 * comparison is made "between" the original set of fields and the
 * referenced fragment.
 *
 * C) Also, if multiple fragments are referenced, then comparisons
 * are made "between" each referenced fragment.
 *
 * D) When comparing "between" a set of fields and a referenced fragment, first
 * a comparison is made between each field in the original set of fields and
 * each field in the the referenced set of fields.
 *
 * E) Also, if any fragment is referenced in the referenced selection set,
 * then a comparison is made "between" the original set of fields and the
 * referenced fragment (recursively referring to step D).
 *
 * F) When comparing "between" two fragments, first a comparison is made between
 * each field in the first referenced set of fields and each field in the the
 * second referenced set of fields.
 *
 * G) Also, any fragments referenced by the first must be compared to the
 * second, and any fragments referenced by the second must be compared to the
 * first (recursively referring to step F).
 *
 * H) When comparing two fields, if both have selection sets, then a comparison
 * is made "between" both selection sets, first comparing the set of fields in
 * the first selection set with the set of fields in the second.
 *
 * I) Also, if any fragment is referenced in either selection set, then a
 * comparison is made "between" the other set of fields and the
 * referenced fragment.
 *
 * J) Also, if two fragments are referenced in both selection sets, then a
 * comparison is made "between" the two fragments.
 *
 */
// Find all conflicts found "within" a selection set, including those found
// via spreading in fragments. Called when visiting each SelectionSet in the
// GraphQL Document.
function findConflictsWithinSelectionSet(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentType, selectionSet) {
  var conflicts = [];

  var _getFieldsAndFragment = getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType, selectionSet),
      fieldMap = _getFieldsAndFragment[0],
      fragmentNames = _getFieldsAndFragment[1]; // (A) Find find all conflicts "within" the fields of this selection set.
  // Note: this is the *only place* `collectConflictsWithin` is called.


  collectConflictsWithin(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, fieldMap);

  if (fragmentNames.length !== 0) {
    // (B) Then collect conflicts between these fields and those represented by
    // each spread fragment name found.
    var comparedFragments = Object.create(null);

    for (var i = 0; i < fragmentNames.length; i++) {
      collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, comparedFragmentPairs, false, fieldMap, fragmentNames[i]); // (C) Then compare this fragment with all other fragments found in this
      // selection set to collect conflicts between fragments spread together.
      // This compares each item in the list of fragment names to every other
      // item in that same list (except for itself).

      for (var j = i + 1; j < fragmentNames.length; j++) {
        collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, false, fragmentNames[i], fragmentNames[j]);
      }
    }
  }

  return conflicts;
} // Collect all conflicts found between a set of fields and a fragment reference
// including via spreading in any nested fragments.


function collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, comparedFragmentPairs, areMutuallyExclusive, fieldMap, fragmentName) {
  // Memoize so a fragment is not compared for conflicts more than once.
  if (comparedFragments[fragmentName]) {
    return;
  }

  comparedFragments[fragmentName] = true;
  var fragment = context.getFragment(fragmentName);

  if (!fragment) {
    return;
  }

  var _getReferencedFieldsA = getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment),
      fieldMap2 = _getReferencedFieldsA[0],
      fragmentNames2 = _getReferencedFieldsA[1]; // Do not compare a fragment's fieldMap to itself.


  if (fieldMap === fieldMap2) {
    return;
  } // (D) First collect any conflicts between the provided collection of fields
  // and the collection of fields represented by the given fragment.


  collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap, fieldMap2); // (E) Then collect any conflicts between the provided collection of fields
  // and any fragment names found in the given fragment.

  for (var i = 0; i < fragmentNames2.length; i++) {
    collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, comparedFragmentPairs, areMutuallyExclusive, fieldMap, fragmentNames2[i]);
  }
} // Collect all conflicts found between two fragments, including via spreading in
// any nested fragments.


function collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fragmentName1, fragmentName2) {
  // No need to compare a fragment to itself.
  if (fragmentName1 === fragmentName2) {
    return;
  } // Memoize so two fragments are not compared for conflicts more than once.


  if (comparedFragmentPairs.has(fragmentName1, fragmentName2, areMutuallyExclusive)) {
    return;
  }

  comparedFragmentPairs.add(fragmentName1, fragmentName2, areMutuallyExclusive);
  var fragment1 = context.getFragment(fragmentName1);
  var fragment2 = context.getFragment(fragmentName2);

  if (!fragment1 || !fragment2) {
    return;
  }

  var _getReferencedFieldsA2 = getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment1),
      fieldMap1 = _getReferencedFieldsA2[0],
      fragmentNames1 = _getReferencedFieldsA2[1];

  var _getReferencedFieldsA3 = getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment2),
      fieldMap2 = _getReferencedFieldsA3[0],
      fragmentNames2 = _getReferencedFieldsA3[1]; // (F) First, collect all conflicts between these two collections of fields
  // (not including any nested fragments).


  collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap1, fieldMap2); // (G) Then collect conflicts between the first fragment and any nested
  // fragments spread in the second fragment.

  for (var j = 0; j < fragmentNames2.length; j++) {
    collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fragmentName1, fragmentNames2[j]);
  } // (G) Then collect conflicts between the second fragment and any nested
  // fragments spread in the first fragment.


  for (var i = 0; i < fragmentNames1.length; i++) {
    collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fragmentNames1[i], fragmentName2);
  }
} // Find all conflicts found between two selection sets, including those found
// via spreading in fragments. Called when determining if conflicts exist
// between the sub-fields of two overlapping fields.


function findConflictsBetweenSubSelectionSets(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, parentType1, selectionSet1, parentType2, selectionSet2) {
  var conflicts = [];

  var _getFieldsAndFragment2 = getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType1, selectionSet1),
      fieldMap1 = _getFieldsAndFragment2[0],
      fragmentNames1 = _getFieldsAndFragment2[1];

  var _getFieldsAndFragment3 = getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType2, selectionSet2),
      fieldMap2 = _getFieldsAndFragment3[0],
      fragmentNames2 = _getFieldsAndFragment3[1]; // (H) First, collect all conflicts between these two collections of field.


  collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap1, fieldMap2); // (I) Then collect conflicts between the first collection of fields and
  // those referenced by each fragment name associated with the second.

  if (fragmentNames2.length !== 0) {
    var comparedFragments = Object.create(null);

    for (var j = 0; j < fragmentNames2.length; j++) {
      collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragments, comparedFragmentPairs, areMutuallyExclusive, fieldMap1, fragmentNames2[j]);
    }
  } // (I) Then collect conflicts between the second collection of fields and
  // those referenced by each fragment name associated with the first.


  if (fragmentNames1.length !== 0) {
    var _comparedFragments = Object.create(null);

    for (var i = 0; i < fragmentNames1.length; i++) {
      collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, _comparedFragments, comparedFragmentPairs, areMutuallyExclusive, fieldMap2, fragmentNames1[i]);
    }
  } // (J) Also collect conflicts between any fragment names by the first and
  // fragment names by the second. This compares each item in the first set of
  // names to each item in the second set of names.


  for (var _i3 = 0; _i3 < fragmentNames1.length; _i3++) {
    for (var _j = 0; _j < fragmentNames2.length; _j++) {
      collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fragmentNames1[_i3], fragmentNames2[_j]);
    }
  }

  return conflicts;
} // Collect all Conflicts "within" one collection of fields.


function collectConflictsWithin(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, fieldMap) {
  // A field map is a keyed collection, where each key represents a response
  // name and the value at that key is a list of all fields which provide that
  // response name. For every response name, if there are multiple fields, they
  // must be compared to find a potential conflict.
  for (var _i5 = 0, _objectEntries2 = objectEntries(fieldMap); _i5 < _objectEntries2.length; _i5++) {
    var _ref5 = _objectEntries2[_i5];
    var responseName = _ref5[0];
    var fields = _ref5[1];

    // This compares every field in the list to every other field in this list
    // (except to itself). If the list only has one item, nothing needs to
    // be compared.
    if (fields.length > 1) {
      for (var i = 0; i < fields.length; i++) {
        for (var j = i + 1; j < fields.length; j++) {
          var conflict = findConflict(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, false, // within one collection is never mutually exclusive
          responseName, fields[i], fields[j]);

          if (conflict) {
            conflicts.push(conflict);
          }
        }
      }
    }
  }
} // Collect all Conflicts between two collections of fields. This is similar to,
// but different from the `collectConflictsWithin` function above. This check
// assumes that `collectConflictsWithin` has already been called on each
// provided collection of fields. This is true because this validator traverses
// each individual selection set.


function collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentFieldsAreMutuallyExclusive, fieldMap1, fieldMap2) {
  // A field map is a keyed collection, where each key represents a response
  // name and the value at that key is a list of all fields which provide that
  // response name. For any response name which appears in both provided field
  // maps, each field from the first field map must be compared to every field
  // in the second field map to find potential conflicts.
  for (var _i7 = 0, _Object$keys2 = Object.keys(fieldMap1); _i7 < _Object$keys2.length; _i7++) {
    var responseName = _Object$keys2[_i7];
    var fields2 = fieldMap2[responseName];

    if (fields2) {
      var fields1 = fieldMap1[responseName];

      for (var i = 0; i < fields1.length; i++) {
        for (var j = 0; j < fields2.length; j++) {
          var conflict = findConflict(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentFieldsAreMutuallyExclusive, responseName, fields1[i], fields2[j]);

          if (conflict) {
            conflicts.push(conflict);
          }
        }
      }
    }
  }
} // Determines if there is a conflict between two particular fields, including
// comparing their sub-fields.


function findConflict(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentFieldsAreMutuallyExclusive, responseName, field1, field2) {
  var parentType1 = field1[0],
      node1 = field1[1],
      def1 = field1[2];
  var parentType2 = field2[0],
      node2 = field2[1],
      def2 = field2[2]; // If it is known that two fields could not possibly apply at the same
  // time, due to the parent types, then it is safe to permit them to diverge
  // in aliased field or arguments used as they will not present any ambiguity
  // by differing.
  // It is known that two parent types could never overlap if they are
  // different Object types. Interface or Union types might overlap - if not
  // in the current state of the schema, then perhaps in some future version,
  // thus may not safely diverge.

  var areMutuallyExclusive = parentFieldsAreMutuallyExclusive || parentType1 !== parentType2 && isObjectType(parentType1) && isObjectType(parentType2); // The return type for each field.

  var type1 = def1 && def1.type;
  var type2 = def2 && def2.type;

  if (!areMutuallyExclusive) {
    // Two aliases must refer to the same field.
    var name1 = node1.name.value;
    var name2 = node2.name.value;

    if (name1 !== name2) {
      return [[responseName, "".concat(name1, " and ").concat(name2, " are different fields")], [node1], [node2]];
    } // Two field calls must have the same arguments.


    if (!sameArguments(node1.arguments || [], node2.arguments || [])) {
      return [[responseName, 'they have differing arguments'], [node1], [node2]];
    }
  }

  if (type1 && type2 && doTypesConflict(type1, type2)) {
    return [[responseName, "they return conflicting types ".concat(inspect(type1), " and ").concat(inspect(type2))], [node1], [node2]];
  } // Collect and compare sub-fields. Use the same "visited fragment names" list
  // for both collections so fields in a fragment reference are never
  // compared to themselves.


  var selectionSet1 = node1.selectionSet;
  var selectionSet2 = node2.selectionSet;

  if (selectionSet1 && selectionSet2) {
    var conflicts = findConflictsBetweenSubSelectionSets(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, getNamedType(type1), selectionSet1, getNamedType(type2), selectionSet2);
    return subfieldConflicts(conflicts, responseName, node1, node2);
  }
}

function sameArguments(arguments1, arguments2) {
  if (arguments1.length !== arguments2.length) {
    return false;
  }

  return arguments1.every(function (argument1) {
    var argument2 = find(arguments2, function (argument) {
      return argument.name.value === argument1.name.value;
    });

    if (!argument2) {
      return false;
    }

    return sameValue(argument1.value, argument2.value);
  });
}

function sameValue(value1, value2) {
  return !value1 && !value2 || print(value1) === print(value2);
} // Two types conflict if both types could not apply to a value simultaneously.
// Composite types are ignored as their individual field types will be compared
// later recursively. However List and Non-Null types must match.


function doTypesConflict(type1, type2) {
  if (isListType(type1)) {
    return isListType(type2) ? doTypesConflict(type1.ofType, type2.ofType) : true;
  }

  if (isListType(type2)) {
    return true;
  }

  if (isNonNullType(type1)) {
    return isNonNullType(type2) ? doTypesConflict(type1.ofType, type2.ofType) : true;
  }

  if (isNonNullType(type2)) {
    return true;
  }

  if (isLeafType(type1) || isLeafType(type2)) {
    return type1 !== type2;
  }

  return false;
} // Given a selection set, return the collection of fields (a mapping of response
// name to field nodes and definitions) as well as a list of fragment names
// referenced via fragment spreads.


function getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType, selectionSet) {
  var cached = cachedFieldsAndFragmentNames.get(selectionSet);

  if (!cached) {
    var nodeAndDefs = Object.create(null);
    var fragmentNames = Object.create(null);

    _collectFieldsAndFragmentNames(context, parentType, selectionSet, nodeAndDefs, fragmentNames);

    cached = [nodeAndDefs, Object.keys(fragmentNames)];
    cachedFieldsAndFragmentNames.set(selectionSet, cached);
  }

  return cached;
} // Given a reference to a fragment, return the represented collection of fields
// as well as a list of nested fragment names referenced via fragment spreads.


function getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment) {
  // Short-circuit building a type from the node if possible.
  var cached = cachedFieldsAndFragmentNames.get(fragment.selectionSet);

  if (cached) {
    return cached;
  }

  var fragmentType = typeFromAST(context.getSchema(), fragment.typeCondition);
  return getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragmentType, fragment.selectionSet);
}

function _collectFieldsAndFragmentNames(context, parentType, selectionSet, nodeAndDefs, fragmentNames) {
  for (var _i9 = 0, _selectionSet$selecti2 = selectionSet.selections; _i9 < _selectionSet$selecti2.length; _i9++) {
    var selection = _selectionSet$selecti2[_i9];

    switch (selection.kind) {
      case Kind.FIELD:
        {
          var fieldName = selection.name.value;
          var fieldDef = void 0;

          if (isObjectType(parentType) || isInterfaceType(parentType)) {
            fieldDef = parentType.getFields()[fieldName];
          }

          var responseName = selection.alias ? selection.alias.value : fieldName;

          if (!nodeAndDefs[responseName]) {
            nodeAndDefs[responseName] = [];
          }

          nodeAndDefs[responseName].push([parentType, selection, fieldDef]);
          break;
        }

      case Kind.FRAGMENT_SPREAD:
        fragmentNames[selection.name.value] = true;
        break;

      case Kind.INLINE_FRAGMENT:
        {
          var typeCondition = selection.typeCondition;
          var inlineFragmentType = typeCondition ? typeFromAST(context.getSchema(), typeCondition) : parentType;

          _collectFieldsAndFragmentNames(context, inlineFragmentType, selection.selectionSet, nodeAndDefs, fragmentNames);

          break;
        }
    }
  }
} // Given a series of Conflicts which occurred between two sub-fields, generate
// a single Conflict.


function subfieldConflicts(conflicts, responseName, node1, node2) {
  if (conflicts.length > 0) {
    return [[responseName, conflicts.map(function (_ref6) {
      var reason = _ref6[0];
      return reason;
    })], conflicts.reduce(function (allFields, _ref7) {
      var fields1 = _ref7[1];
      return allFields.concat(fields1);
    }, [node1]), conflicts.reduce(function (allFields, _ref8) {
      var fields2 = _ref8[2];
      return allFields.concat(fields2);
    }, [node2])];
  }
}
/**
 * A way to keep track of pairs of things when the ordering of the pair does
 * not matter. We do this by maintaining a sort of double adjacency sets.
 */


var PairSet =
/*#__PURE__*/
function () {
  function PairSet() {
    this._data = Object.create(null);
  }

  var _proto = PairSet.prototype;

  _proto.has = function has(a, b, areMutuallyExclusive) {
    var first = this._data[a];
    var result = first && first[b];

    if (result === undefined) {
      return false;
    } // areMutuallyExclusive being false is a superset of being true,
    // hence if we want to know if this PairSet "has" these two with no
    // exclusivity, we have to ensure it was added as such.


    if (areMutuallyExclusive === false) {
      return result === false;
    }

    return true;
  };

  _proto.add = function add(a, b, areMutuallyExclusive) {
    _pairSetAdd(this._data, a, b, areMutuallyExclusive);

    _pairSetAdd(this._data, b, a, areMutuallyExclusive);
  };

  return PairSet;
}();

function _pairSetAdd(data, a, b, areMutuallyExclusive) {
  var map = data[a];

  if (!map) {
    map = Object.create(null);
    data[a] = map;
  }

  map[b] = areMutuallyExclusive;
}

function duplicateInputFieldMessage(fieldName) {
  return "There can be only one input field named \"".concat(fieldName, "\".");
}
/**
 * Unique input field names
 *
 * A GraphQL input object value is only valid if all supplied fields are
 * uniquely named.
 */

function UniqueInputFieldNames(context) {
  var knownNameStack = [];
  var knownNames = Object.create(null);
  return {
    ObjectValue: {
      enter: function enter() {
        knownNameStack.push(knownNames);
        knownNames = Object.create(null);
      },
      leave: function leave() {
        knownNames = knownNameStack.pop();
      }
    },
    ObjectField: function ObjectField(node) {
      var fieldName = node.name.value;

      if (knownNames[fieldName]) {
        context.reportError(new GraphQLError(duplicateInputFieldMessage(fieldName), [knownNames[fieldName], node.name]));
      } else {
        knownNames[fieldName] = node.name;
      }
    }
  };
}

function schemaDefinitionNotAloneMessage() {
  return 'Must provide only one schema definition.';
}
function canNotDefineSchemaWithinExtensionMessage() {
  return 'Cannot define a new schema within a schema extension.';
}
/**
 * Lone Schema definition
 *
 * A GraphQL document is only valid if it contains only one schema definition.
 */

function LoneSchemaDefinition(context) {
  var oldSchema = context.getSchema();
  var alreadyDefined = oldSchema && (oldSchema.astNode || oldSchema.getQueryType() || oldSchema.getMutationType() || oldSchema.getSubscriptionType());
  var schemaDefinitionsCount = 0;
  return {
    SchemaDefinition: function SchemaDefinition(node) {
      if (alreadyDefined) {
        context.reportError(new GraphQLError(canNotDefineSchemaWithinExtensionMessage(), node));
        return;
      }

      if (schemaDefinitionsCount > 0) {
        context.reportError(new GraphQLError(schemaDefinitionNotAloneMessage(), node));
      }

      ++schemaDefinitionsCount;
    }
  };
}

function duplicateOperationTypeMessage(operation) {
  return "There can be only one ".concat(operation, " type in schema.");
}
function existedOperationTypeMessage(operation) {
  return "Type for ".concat(operation, " already defined in the schema. It cannot be redefined.");
}
/**
 * Unique operation types
 *
 * A GraphQL document is only valid if it has only one type per operation.
 */

function UniqueOperationTypes(context) {
  var schema = context.getSchema();
  var definedOperationTypes = Object.create(null);
  var existingOperationTypes = schema ? {
    query: schema.getQueryType(),
    mutation: schema.getMutationType(),
    subscription: schema.getSubscriptionType()
  } : {};
  return {
    SchemaDefinition: checkOperationTypes,
    SchemaExtension: checkOperationTypes
  };

  function checkOperationTypes(node) {
    if (node.operationTypes) {
      for (var _i2 = 0, _ref2 = node.operationTypes || []; _i2 < _ref2.length; _i2++) {
        var operationType = _ref2[_i2];
        var operation = operationType.operation;
        var alreadyDefinedOperationType = definedOperationTypes[operation];

        if (existingOperationTypes[operation]) {
          context.reportError(new GraphQLError(existedOperationTypeMessage(operation), operationType));
        } else if (alreadyDefinedOperationType) {
          context.reportError(new GraphQLError(duplicateOperationTypeMessage(operation), [alreadyDefinedOperationType, operationType]));
        } else {
          definedOperationTypes[operation] = operationType;
        }
      }
    }

    return false;
  }
}

function duplicateTypeNameMessage(typeName) {
  return "There can be only one type named \"".concat(typeName, "\".");
}
function existedTypeNameMessage(typeName) {
  return "Type \"".concat(typeName, "\" already exists in the schema. It cannot also be defined in this type definition.");
}
/**
 * Unique type names
 *
 * A GraphQL document is only valid if all defined types have unique names.
 */

function UniqueTypeNames(context) {
  var knownTypeNames = Object.create(null);
  var schema = context.getSchema();
  return {
    ScalarTypeDefinition: checkTypeName,
    ObjectTypeDefinition: checkTypeName,
    InterfaceTypeDefinition: checkTypeName,
    UnionTypeDefinition: checkTypeName,
    EnumTypeDefinition: checkTypeName,
    InputObjectTypeDefinition: checkTypeName
  };

  function checkTypeName(node) {
    var typeName = node.name.value;

    if (schema && schema.getType(typeName)) {
      context.reportError(new GraphQLError(existedTypeNameMessage(typeName), node.name));
      return;
    }

    if (knownTypeNames[typeName]) {
      context.reportError(new GraphQLError(duplicateTypeNameMessage(typeName), [knownTypeNames[typeName], node.name]));
    } else {
      knownTypeNames[typeName] = node.name;
    }

    return false;
  }
}

function duplicateEnumValueNameMessage(typeName, valueName) {
  return "Enum value \"".concat(typeName, ".").concat(valueName, "\" can only be defined once.");
}
function existedEnumValueNameMessage(typeName, valueName) {
  return "Enum value \"".concat(typeName, ".").concat(valueName, "\" already exists in the schema. It cannot also be defined in this type extension.");
}
/**
 * Unique enum value names
 *
 * A GraphQL enum type is only valid if all its values are uniquely named.
 */

function UniqueEnumValueNames(context) {
  var schema = context.getSchema();
  var existingTypeMap = schema ? schema.getTypeMap() : Object.create(null);
  var knownValueNames = Object.create(null);
  return {
    EnumTypeDefinition: checkValueUniqueness,
    EnumTypeExtension: checkValueUniqueness
  };

  function checkValueUniqueness(node) {
    var typeName = node.name.value;

    if (!knownValueNames[typeName]) {
      knownValueNames[typeName] = Object.create(null);
    }

    if (node.values) {
      var valueNames = knownValueNames[typeName];

      for (var _i2 = 0, _node$values2 = node.values; _i2 < _node$values2.length; _i2++) {
        var valueDef = _node$values2[_i2];
        var valueName = valueDef.name.value;
        var existingType = existingTypeMap[typeName];

        if (isEnumType(existingType) && existingType.getValue(valueName)) {
          context.reportError(new GraphQLError(existedEnumValueNameMessage(typeName, valueName), valueDef.name));
        } else if (valueNames[valueName]) {
          context.reportError(new GraphQLError(duplicateEnumValueNameMessage(typeName, valueName), [valueNames[valueName], valueDef.name]));
        } else {
          valueNames[valueName] = valueDef.name;
        }
      }
    }

    return false;
  }
}

function duplicateFieldDefinitionNameMessage(typeName, fieldName) {
  return "Field \"".concat(typeName, ".").concat(fieldName, "\" can only be defined once.");
}
function existedFieldDefinitionNameMessage(typeName, fieldName) {
  return "Field \"".concat(typeName, ".").concat(fieldName, "\" already exists in the schema. It cannot also be defined in this type extension.");
}
/**
 * Unique field definition names
 *
 * A GraphQL complex type is only valid if all its fields are uniquely named.
 */

function UniqueFieldDefinitionNames(context) {
  var schema = context.getSchema();
  var existingTypeMap = schema ? schema.getTypeMap() : Object.create(null);
  var knownFieldNames = Object.create(null);
  return {
    InputObjectTypeDefinition: checkFieldUniqueness,
    InputObjectTypeExtension: checkFieldUniqueness,
    InterfaceTypeDefinition: checkFieldUniqueness,
    InterfaceTypeExtension: checkFieldUniqueness,
    ObjectTypeDefinition: checkFieldUniqueness,
    ObjectTypeExtension: checkFieldUniqueness
  };

  function checkFieldUniqueness(node) {
    var typeName = node.name.value;

    if (!knownFieldNames[typeName]) {
      knownFieldNames[typeName] = Object.create(null);
    }

    if (node.fields) {
      var fieldNames = knownFieldNames[typeName];

      for (var _i2 = 0, _node$fields2 = node.fields; _i2 < _node$fields2.length; _i2++) {
        var fieldDef = _node$fields2[_i2];
        var fieldName = fieldDef.name.value;

        if (hasField(existingTypeMap[typeName], fieldName)) {
          context.reportError(new GraphQLError(existedFieldDefinitionNameMessage(typeName, fieldName), fieldDef.name));
        } else if (fieldNames[fieldName]) {
          context.reportError(new GraphQLError(duplicateFieldDefinitionNameMessage(typeName, fieldName), [fieldNames[fieldName], fieldDef.name]));
        } else {
          fieldNames[fieldName] = fieldDef.name;
        }
      }
    }

    return false;
  }
}

function hasField(type, fieldName) {
  if (isObjectType(type) || isInterfaceType(type) || isInputObjectType(type)) {
    return type.getFields()[fieldName];
  }

  return false;
}

function duplicateDirectiveNameMessage(directiveName) {
  return "There can be only one directive named \"".concat(directiveName, "\".");
}
function existedDirectiveNameMessage(directiveName) {
  return "Directive \"".concat(directiveName, "\" already exists in the schema. It cannot be redefined.");
}
/**
 * Unique directive names
 *
 * A GraphQL document is only valid if all defined directives have unique names.
 */

function UniqueDirectiveNames(context) {
  var knownDirectiveNames = Object.create(null);
  var schema = context.getSchema();
  return {
    DirectiveDefinition: function DirectiveDefinition(node) {
      var directiveName = node.name.value;

      if (schema && schema.getDirective(directiveName)) {
        context.reportError(new GraphQLError(existedDirectiveNameMessage(directiveName), node.name));
        return;
      }

      if (knownDirectiveNames[directiveName]) {
        context.reportError(new GraphQLError(duplicateDirectiveNameMessage(directiveName), [knownDirectiveNames[directiveName], node.name]));
      } else {
        knownDirectiveNames[directiveName] = node.name;
      }

      return false;
    }
  };
}

var _defKindToExtKind;

function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function extendingUnknownTypeMessage(typeName, suggestedTypes) {
  return "Cannot extend type \"".concat(typeName, "\" because it is not defined.") + didYouMean(suggestedTypes.map(function (x) {
    return "\"".concat(x, "\"");
  }));
}
function extendingDifferentTypeKindMessage(typeName, kind) {
  return "Cannot extend non-".concat(kind, " type \"").concat(typeName, "\".");
}
/**
 * Possible type extension
 *
 * A type extension is only valid if the type is defined and has the same kind.
 */

function PossibleTypeExtensions(context) {
  var schema = context.getSchema();
  var definedTypes = Object.create(null);

  for (var _i2 = 0, _context$getDocument$2 = context.getDocument().definitions; _i2 < _context$getDocument$2.length; _i2++) {
    var def = _context$getDocument$2[_i2];

    if (isTypeDefinitionNode(def)) {
      definedTypes[def.name.value] = def;
    }
  }

  return {
    ScalarTypeExtension: checkExtension,
    ObjectTypeExtension: checkExtension,
    InterfaceTypeExtension: checkExtension,
    UnionTypeExtension: checkExtension,
    EnumTypeExtension: checkExtension,
    InputObjectTypeExtension: checkExtension
  };

  function checkExtension(node) {
    var typeName = node.name.value;
    var defNode = definedTypes[typeName];
    var existingType = schema && schema.getType(typeName);

    if (defNode) {
      var expectedKind = defKindToExtKind[defNode.kind];

      if (expectedKind !== node.kind) {
        context.reportError(new GraphQLError(extendingDifferentTypeKindMessage(typeName, extensionKindToTypeName(expectedKind)), [defNode, node]));
      }
    } else if (existingType) {
      var _expectedKind = typeToExtKind(existingType);

      if (_expectedKind !== node.kind) {
        context.reportError(new GraphQLError(extendingDifferentTypeKindMessage(typeName, extensionKindToTypeName(_expectedKind)), node));
      }
    } else {
      var allTypeNames = Object.keys(definedTypes);

      if (schema) {
        allTypeNames = allTypeNames.concat(Object.keys(schema.getTypeMap()));
      }

      var suggestedTypes = suggestionList(typeName, allTypeNames);
      context.reportError(new GraphQLError(extendingUnknownTypeMessage(typeName, suggestedTypes), node.name));
    }
  }
}
var defKindToExtKind = (_defKindToExtKind = {}, _defineProperty$3(_defKindToExtKind, Kind.SCALAR_TYPE_DEFINITION, Kind.SCALAR_TYPE_EXTENSION), _defineProperty$3(_defKindToExtKind, Kind.OBJECT_TYPE_DEFINITION, Kind.OBJECT_TYPE_EXTENSION), _defineProperty$3(_defKindToExtKind, Kind.INTERFACE_TYPE_DEFINITION, Kind.INTERFACE_TYPE_EXTENSION), _defineProperty$3(_defKindToExtKind, Kind.UNION_TYPE_DEFINITION, Kind.UNION_TYPE_EXTENSION), _defineProperty$3(_defKindToExtKind, Kind.ENUM_TYPE_DEFINITION, Kind.ENUM_TYPE_EXTENSION), _defineProperty$3(_defKindToExtKind, Kind.INPUT_OBJECT_TYPE_DEFINITION, Kind.INPUT_OBJECT_TYPE_EXTENSION), _defKindToExtKind);

function typeToExtKind(type) {
  if (isScalarType(type)) {
    return Kind.SCALAR_TYPE_EXTENSION;
  } else if (isObjectType(type)) {
    return Kind.OBJECT_TYPE_EXTENSION;
  } else if (isInterfaceType(type)) {
    return Kind.INTERFACE_TYPE_EXTENSION;
  } else if (isUnionType(type)) {
    return Kind.UNION_TYPE_EXTENSION;
  } else if (isEnumType(type)) {
    return Kind.ENUM_TYPE_EXTENSION;
  } else if (isInputObjectType(type)) {
    return Kind.INPUT_OBJECT_TYPE_EXTENSION;
  }
}

function extensionKindToTypeName(kind) {
  switch (kind) {
    case Kind.SCALAR_TYPE_EXTENSION:
      return 'scalar';

    case Kind.OBJECT_TYPE_EXTENSION:
      return 'object';

    case Kind.INTERFACE_TYPE_EXTENSION:
      return 'interface';

    case Kind.UNION_TYPE_EXTENSION:
      return 'union';

    case Kind.ENUM_TYPE_EXTENSION:
      return 'enum';

    case Kind.INPUT_OBJECT_TYPE_EXTENSION:
      return 'input object';

    default:
      return 'unknown type';
  }
}

// Spec Section: "Executable Definitions"
/**
 * This set includes all validation rules defined by the GraphQL spec.
 *
 * The order of the rules in this list has been adjusted to lead to the
 * most clear output when encountering multiple validation errors.
 */

var specifiedRules = Object.freeze([ExecutableDefinitions, UniqueOperationNames, LoneAnonymousOperation, SingleFieldSubscriptions, KnownTypeNames, FragmentsOnCompositeTypes, VariablesAreInputTypes, ScalarLeafs, FieldsOnCorrectType, UniqueFragmentNames, KnownFragmentNames, NoUnusedFragments, PossibleFragmentSpreads, NoFragmentCycles, UniqueVariableNames, NoUndefinedVariables, NoUnusedVariables, KnownDirectives, UniqueDirectivesPerLocation, KnownArgumentNames, UniqueArgumentNames, ValuesOfCorrectType, ProvidedRequiredArguments, VariablesInAllowedPosition, OverlappingFieldsCanBeMerged, UniqueInputFieldNames]);

var specifiedSDLRules = Object.freeze([LoneSchemaDefinition, UniqueOperationTypes, UniqueTypeNames, UniqueEnumValueNames, UniqueFieldDefinitionNames, UniqueDirectiveNames, KnownTypeNames, KnownDirectives, UniqueDirectivesPerLocation, PossibleTypeExtensions, KnownArgumentNamesOnDirectives, UniqueArgumentNames, UniqueInputFieldNames, ProvidedRequiredArgumentsOnDirectives]);

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/**
 * An instance of this class is passed as the "this" context to all validators,
 * allowing access to commonly useful contextual information from within a
 * validation rule.
 */
var ASTValidationContext =
/*#__PURE__*/
function () {
  function ASTValidationContext(ast, onError) {
    this._ast = ast;
    this._errors = [];
    this._fragments = undefined;
    this._fragmentSpreads = new Map();
    this._recursivelyReferencedFragments = new Map();
    this._onError = onError;
  }

  var _proto = ASTValidationContext.prototype;

  _proto.reportError = function reportError(error) {
    this._errors.push(error);

    if (this._onError) {
      this._onError(error);
    }
  } // @deprecated: use onError callback instead - will be removed in v15.
  ;

  _proto.getErrors = function getErrors() {
    return this._errors;
  };

  _proto.getDocument = function getDocument() {
    return this._ast;
  };

  _proto.getFragment = function getFragment(name) {
    var fragments = this._fragments;

    if (!fragments) {
      this._fragments = fragments = this.getDocument().definitions.reduce(function (frags, statement) {
        if (statement.kind === Kind.FRAGMENT_DEFINITION) {
          frags[statement.name.value] = statement;
        }

        return frags;
      }, Object.create(null));
    }

    return fragments[name];
  };

  _proto.getFragmentSpreads = function getFragmentSpreads(node) {
    var spreads = this._fragmentSpreads.get(node);

    if (!spreads) {
      spreads = [];
      var setsToVisit = [node];

      while (setsToVisit.length !== 0) {
        var set = setsToVisit.pop();

        for (var _i2 = 0, _set$selections2 = set.selections; _i2 < _set$selections2.length; _i2++) {
          var selection = _set$selections2[_i2];

          if (selection.kind === Kind.FRAGMENT_SPREAD) {
            spreads.push(selection);
          } else if (selection.selectionSet) {
            setsToVisit.push(selection.selectionSet);
          }
        }
      }

      this._fragmentSpreads.set(node, spreads);
    }

    return spreads;
  };

  _proto.getRecursivelyReferencedFragments = function getRecursivelyReferencedFragments(operation) {
    var fragments = this._recursivelyReferencedFragments.get(operation);

    if (!fragments) {
      fragments = [];
      var collectedNames = Object.create(null);
      var nodesToVisit = [operation.selectionSet];

      while (nodesToVisit.length !== 0) {
        var node = nodesToVisit.pop();

        for (var _i4 = 0, _this$getFragmentSpre2 = this.getFragmentSpreads(node); _i4 < _this$getFragmentSpre2.length; _i4++) {
          var spread = _this$getFragmentSpre2[_i4];
          var fragName = spread.name.value;

          if (collectedNames[fragName] !== true) {
            collectedNames[fragName] = true;
            var fragment = this.getFragment(fragName);

            if (fragment) {
              fragments.push(fragment);
              nodesToVisit.push(fragment.selectionSet);
            }
          }
        }
      }

      this._recursivelyReferencedFragments.set(operation, fragments);
    }

    return fragments;
  };

  return ASTValidationContext;
}();
var SDLValidationContext =
/*#__PURE__*/
function (_ASTValidationContext) {
  _inheritsLoose(SDLValidationContext, _ASTValidationContext);

  function SDLValidationContext(ast, schema, onError) {
    var _this;

    _this = _ASTValidationContext.call(this, ast, onError) || this;
    _this._schema = schema;
    return _this;
  }

  var _proto2 = SDLValidationContext.prototype;

  _proto2.getSchema = function getSchema() {
    return this._schema;
  };

  return SDLValidationContext;
}(ASTValidationContext);
var ValidationContext =
/*#__PURE__*/
function (_ASTValidationContext2) {
  _inheritsLoose(ValidationContext, _ASTValidationContext2);

  function ValidationContext(schema, ast, typeInfo, onError) {
    var _this2;

    _this2 = _ASTValidationContext2.call(this, ast, onError) || this;
    _this2._schema = schema;
    _this2._typeInfo = typeInfo;
    _this2._variableUsages = new Map();
    _this2._recursiveVariableUsages = new Map();
    return _this2;
  }

  var _proto3 = ValidationContext.prototype;

  _proto3.getSchema = function getSchema() {
    return this._schema;
  };

  _proto3.getVariableUsages = function getVariableUsages(node) {
    var usages = this._variableUsages.get(node);

    if (!usages) {
      var newUsages = [];
      var typeInfo = new TypeInfo(this._schema);
      visit(node, visitWithTypeInfo(typeInfo, {
        VariableDefinition: function VariableDefinition() {
          return false;
        },
        Variable: function Variable(variable) {
          newUsages.push({
            node: variable,
            type: typeInfo.getInputType(),
            defaultValue: typeInfo.getDefaultValue()
          });
        }
      }));
      usages = newUsages;

      this._variableUsages.set(node, usages);
    }

    return usages;
  };

  _proto3.getRecursiveVariableUsages = function getRecursiveVariableUsages(operation) {
    var usages = this._recursiveVariableUsages.get(operation);

    if (!usages) {
      usages = this.getVariableUsages(operation);

      for (var _i6 = 0, _this$getRecursivelyR2 = this.getRecursivelyReferencedFragments(operation); _i6 < _this$getRecursivelyR2.length; _i6++) {
        var frag = _this$getRecursivelyR2[_i6];
        usages = usages.concat(this.getVariableUsages(frag));
      }

      this._recursiveVariableUsages.set(operation, usages);
    }

    return usages;
  };

  _proto3.getType = function getType() {
    return this._typeInfo.getType();
  };

  _proto3.getParentType = function getParentType() {
    return this._typeInfo.getParentType();
  };

  _proto3.getInputType = function getInputType() {
    return this._typeInfo.getInputType();
  };

  _proto3.getParentInputType = function getParentInputType() {
    return this._typeInfo.getParentInputType();
  };

  _proto3.getFieldDef = function getFieldDef() {
    return this._typeInfo.getFieldDef();
  };

  _proto3.getDirective = function getDirective() {
    return this._typeInfo.getDirective();
  };

  _proto3.getArgument = function getArgument() {
    return this._typeInfo.getArgument();
  };

  return ValidationContext;
}(ASTValidationContext);

var ABORT_VALIDATION = Object.freeze({});
/**
 * Implements the "Validation" section of the spec.
 *
 * Validation runs synchronously, returning an array of encountered errors, or
 * an empty array if no errors were encountered and the document is valid.
 *
 * A list of specific validation rules may be provided. If not provided, the
 * default list of rules defined by the GraphQL specification will be used.
 *
 * Each validation rules is a function which returns a visitor
 * (see the language/visitor API). Visitor methods are expected to return
 * GraphQLErrors, or Arrays of GraphQLErrors when invalid.
 *
 * Optionally a custom TypeInfo instance may be provided. If not provided, one
 * will be created from the provided schema.
 */

function validate(schema, documentAST) {
  var rules = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : specifiedRules;
  var typeInfo = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new TypeInfo(schema);
  var options = arguments.length > 4 ? arguments[4] : undefined;
  documentAST || devAssert(0, 'Must provide document'); // If the schema used for validation is invalid, throw an error.

  assertValidSchema(schema);
  var abortObj = Object.freeze({});
  var errors = [];
  var maxErrors = options && options.maxErrors;
  var context = new ValidationContext(schema, documentAST, typeInfo, function (error) {
    if (maxErrors != null && errors.length >= maxErrors) {
      errors.push(new GraphQLError('Too many validation errors, error limit reached. Validation aborted.'));
      throw abortObj;
    }

    errors.push(error);
  }); // This uses a specialized visitor which runs multiple visitors in parallel,
  // while maintaining the visitor skip and break API.

  var visitor = visitInParallel(rules.map(function (rule) {
    return rule(context);
  })); // Visit the whole document with each instance of all provided rules.

  try {
    visit(documentAST, visitWithTypeInfo(typeInfo, visitor));
  } catch (e) {
    if (e !== abortObj) {
      throw e;
    }
  }

  return errors;
} // @internal

function validateSDL(documentAST, schemaToExtend) {
  var rules = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : specifiedSDLRules;
  var errors = [];
  var context = new SDLValidationContext(documentAST, schemaToExtend, function (error) {
    errors.push(error);
  });
  var visitors = rules.map(function (rule) {
    return rule(context);
  });
  visit(documentAST, visitInParallel(visitors));
  return errors;
}
/**
 * Utility function which asserts a SDL document is valid by throwing an error
 * if it is invalid.
 *
 * @internal
 */

function assertValidSDL(documentAST) {
  var errors = validateSDL(documentAST);

  if (errors.length !== 0) {
    throw new Error(errors.map(function (error) {
      return error.message;
    }).join('\n\n'));
  }
}
/**
 * Utility function which asserts a SDL document is valid by throwing an error
 * if it is invalid.
 *
 * @internal
 */

function assertValidSDLExtension(documentAST, schema) {
  var errors = validateSDL(documentAST, schema);

  if (errors.length !== 0) {
    throw new Error(errors.map(function (error) {
      return error.message;
    }).join('\n\n'));
  }
}

/**
 * This takes the ast of a schema document produced by the parse function in
 * src/language/parser.js.
 *
 * If no schema definition is provided, then it will look for types named Query
 * and Mutation.
 *
 * Given that AST it constructs a GraphQLSchema. The resulting schema
 * has no resolve methods, so execution will use default resolvers.
 *
 * Accepts options as a second argument:
 *
 *    - commentDescriptions:
 *        Provide true to use preceding comments as the description.
 *
 */
function buildASTSchema(documentAST, options) {
  documentAST && documentAST.kind === Kind.DOCUMENT || devAssert(0, 'Must provide valid Document AST');

  if (!options || !(options.assumeValid || options.assumeValidSDL)) {
    assertValidSDL(documentAST);
  }

  var schemaDef;
  var typeDefs = [];
  var directiveDefs = [];

  for (var _i2 = 0, _documentAST$definiti2 = documentAST.definitions; _i2 < _documentAST$definiti2.length; _i2++) {
    var def = _documentAST$definiti2[_i2];

    if (def.kind === Kind.SCHEMA_DEFINITION) {
      schemaDef = def;
    } else if (isTypeDefinitionNode(def)) {
      typeDefs.push(def);
    } else if (def.kind === Kind.DIRECTIVE_DEFINITION) {
      directiveDefs.push(def);
    }
  }

  var astBuilder = new ASTDefinitionBuilder(options, function (typeName) {
    var type = typeMap[typeName];

    if (type === undefined) {
      throw new Error("Type \"".concat(typeName, "\" not found in document."));
    }

    return type;
  });
  var typeMap = keyByNameNode(typeDefs, function (node) {
    return astBuilder.buildType(node);
  });
  var operationTypes = schemaDef ? getOperationTypes(schemaDef) : {
    query: 'Query',
    mutation: 'Mutation',
    subscription: 'Subscription'
  };
  var directives = directiveDefs.map(function (def) {
    return astBuilder.buildDirective(def);
  }); // If specified directives were not explicitly declared, add them.

  if (!directives.some(function (directive) {
    return directive.name === 'skip';
  })) {
    directives.push(GraphQLSkipDirective);
  }

  if (!directives.some(function (directive) {
    return directive.name === 'include';
  })) {
    directives.push(GraphQLIncludeDirective);
  }

  if (!directives.some(function (directive) {
    return directive.name === 'deprecated';
  })) {
    directives.push(GraphQLDeprecatedDirective);
  }

  return new GraphQLSchema({
    // Note: While this could make early assertions to get the correctly
    // typed values below, that would throw immediately while type system
    // validation with validateSchema() will produce more actionable results.
    query: operationTypes.query ? typeMap[operationTypes.query] : null,
    mutation: operationTypes.mutation ? typeMap[operationTypes.mutation] : null,
    subscription: operationTypes.subscription ? typeMap[operationTypes.subscription] : null,
    types: objectValues(typeMap),
    directives: directives,
    astNode: schemaDef,
    assumeValid: options && options.assumeValid,
    allowedLegacyNames: options && options.allowedLegacyNames
  });

  function getOperationTypes(schema) {
    var opTypes = {};

    for (var _i4 = 0, _schema$operationType2 = schema.operationTypes; _i4 < _schema$operationType2.length; _i4++) {
      var operationType = _schema$operationType2[_i4];
      opTypes[operationType.operation] = operationType.type.name.value;
    }

    return opTypes;
  }
}
var stdTypeMap = keyMap(specifiedScalarTypes.concat(introspectionTypes), function (type) {
  return type.name;
});
var ASTDefinitionBuilder =
/*#__PURE__*/
function () {
  function ASTDefinitionBuilder(options, resolveType) {
    this._options = options;
    this._resolveType = resolveType;
  }

  var _proto = ASTDefinitionBuilder.prototype;

  _proto.getNamedType = function getNamedType(node) {
    var name = node.name.value;
    return stdTypeMap[name] || this._resolveType(name);
  };

  _proto.getWrappedType = function getWrappedType(node) {
    if (node.kind === Kind.LIST_TYPE) {
      return new GraphQLList(this.getWrappedType(node.type));
    }

    if (node.kind === Kind.NON_NULL_TYPE) {
      return new GraphQLNonNull(this.getWrappedType(node.type));
    }

    return this.getNamedType(node);
  };

  _proto.buildDirective = function buildDirective(directive) {
    var _this = this;

    var locations = directive.locations.map(function (_ref) {
      var value = _ref.value;
      return value;
    });
    return new GraphQLDirective({
      name: directive.name.value,
      description: getDescription(directive, this._options),
      locations: locations,
      isRepeatable: directive.repeatable,
      args: keyByNameNode(directive.arguments || [], function (arg) {
        return _this.buildArg(arg);
      }),
      astNode: directive
    });
  };

  _proto.buildField = function buildField(field) {
    var _this2 = this;

    return {
      // Note: While this could make assertions to get the correctly typed
      // value, that would throw immediately while type system validation
      // with validateSchema() will produce more actionable results.
      type: this.getWrappedType(field.type),
      description: getDescription(field, this._options),
      args: keyByNameNode(field.arguments || [], function (arg) {
        return _this2.buildArg(arg);
      }),
      deprecationReason: getDeprecationReason(field),
      astNode: field
    };
  };

  _proto.buildArg = function buildArg(value) {
    // Note: While this could make assertions to get the correctly typed
    // value, that would throw immediately while type system validation
    // with validateSchema() will produce more actionable results.
    var type = this.getWrappedType(value.type);
    return {
      type: type,
      description: getDescription(value, this._options),
      defaultValue: valueFromAST(value.defaultValue, type),
      astNode: value
    };
  };

  _proto.buildInputField = function buildInputField(value) {
    // Note: While this could make assertions to get the correctly typed
    // value, that would throw immediately while type system validation
    // with validateSchema() will produce more actionable results.
    var type = this.getWrappedType(value.type);
    return {
      type: type,
      description: getDescription(value, this._options),
      defaultValue: valueFromAST(value.defaultValue, type),
      astNode: value
    };
  };

  _proto.buildEnumValue = function buildEnumValue(value) {
    return {
      description: getDescription(value, this._options),
      deprecationReason: getDeprecationReason(value),
      astNode: value
    };
  };

  _proto.buildType = function buildType(astNode) {
    var name = astNode.name.value;

    if (stdTypeMap[name]) {
      return stdTypeMap[name];
    }

    switch (astNode.kind) {
      case Kind.OBJECT_TYPE_DEFINITION:
        return this._makeTypeDef(astNode);

      case Kind.INTERFACE_TYPE_DEFINITION:
        return this._makeInterfaceDef(astNode);

      case Kind.ENUM_TYPE_DEFINITION:
        return this._makeEnumDef(astNode);

      case Kind.UNION_TYPE_DEFINITION:
        return this._makeUnionDef(astNode);

      case Kind.SCALAR_TYPE_DEFINITION:
        return this._makeScalarDef(astNode);

      case Kind.INPUT_OBJECT_TYPE_DEFINITION:
        return this._makeInputObjectDef(astNode);
    } // Not reachable. All possible type definition nodes have been considered.


    /* istanbul ignore next */
    invariant(false, 'Unexpected type definition node: ' + inspect(astNode));
  };

  _proto._makeTypeDef = function _makeTypeDef(astNode) {
    var _this3 = this;

    var interfaceNodes = astNode.interfaces;
    var fieldNodes = astNode.fields; // Note: While this could make assertions to get the correctly typed
    // values below, that would throw immediately while type system
    // validation with validateSchema() will produce more actionable results.

    var interfaces = interfaceNodes && interfaceNodes.length > 0 ? function () {
      return interfaceNodes.map(function (ref) {
        return _this3.getNamedType(ref);
      });
    } : [];
    var fields = fieldNodes && fieldNodes.length > 0 ? function () {
      return keyByNameNode(fieldNodes, function (field) {
        return _this3.buildField(field);
      });
    } : Object.create(null);
    return new GraphQLObjectType({
      name: astNode.name.value,
      description: getDescription(astNode, this._options),
      interfaces: interfaces,
      fields: fields,
      astNode: astNode
    });
  };

  _proto._makeInterfaceDef = function _makeInterfaceDef(astNode) {
    var _this4 = this;

    var fieldNodes = astNode.fields;
    var fields = fieldNodes && fieldNodes.length > 0 ? function () {
      return keyByNameNode(fieldNodes, function (field) {
        return _this4.buildField(field);
      });
    } : Object.create(null);
    return new GraphQLInterfaceType({
      name: astNode.name.value,
      description: getDescription(astNode, this._options),
      fields: fields,
      astNode: astNode
    });
  };

  _proto._makeEnumDef = function _makeEnumDef(astNode) {
    var _this5 = this;

    var valueNodes = astNode.values || [];
    return new GraphQLEnumType({
      name: astNode.name.value,
      description: getDescription(astNode, this._options),
      values: keyByNameNode(valueNodes, function (value) {
        return _this5.buildEnumValue(value);
      }),
      astNode: astNode
    });
  };

  _proto._makeUnionDef = function _makeUnionDef(astNode) {
    var _this6 = this;

    var typeNodes = astNode.types; // Note: While this could make assertions to get the correctly typed
    // values below, that would throw immediately while type system
    // validation with validateSchema() will produce more actionable results.

    var types = typeNodes && typeNodes.length > 0 ? function () {
      return typeNodes.map(function (ref) {
        return _this6.getNamedType(ref);
      });
    } : [];
    return new GraphQLUnionType({
      name: astNode.name.value,
      description: getDescription(astNode, this._options),
      types: types,
      astNode: astNode
    });
  };

  _proto._makeScalarDef = function _makeScalarDef(astNode) {
    return new GraphQLScalarType({
      name: astNode.name.value,
      description: getDescription(astNode, this._options),
      astNode: astNode
    });
  };

  _proto._makeInputObjectDef = function _makeInputObjectDef(def) {
    var _this7 = this;

    var fields = def.fields;
    return new GraphQLInputObjectType({
      name: def.name.value,
      description: getDescription(def, this._options),
      fields: fields ? function () {
        return keyByNameNode(fields, function (field) {
          return _this7.buildInputField(field);
        });
      } : Object.create(null),
      astNode: def
    });
  };

  return ASTDefinitionBuilder;
}();

function keyByNameNode(list, valFn) {
  return keyValMap(list, function (_ref2) {
    var name = _ref2.name;
    return name.value;
  }, valFn);
}
/**
 * Given a field or enum value node, returns the string value for the
 * deprecation reason.
 */


function getDeprecationReason(node) {
  var deprecated = getDirectiveValues(GraphQLDeprecatedDirective, node);
  return deprecated && deprecated.reason;
}
/**
 * Given an ast node, returns its string description.
 * @deprecated: provided to ease adoption and will be removed in v16.
 *
 * Accepts options as a second argument:
 *
 *    - commentDescriptions:
 *        Provide true to use preceding comments as the description.
 *
 */


function getDescription(node, options) {
  if (node.description) {
    return node.description.value;
  }

  if (options && options.commentDescriptions) {
    var rawValue = getLeadingCommentBlock(node);

    if (rawValue !== undefined) {
      return dedentBlockStringValue('\n' + rawValue);
    }
  }
}

function getLeadingCommentBlock(node) {
  var loc = node.loc;

  if (!loc) {
    return;
  }

  var comments = [];
  var token = loc.startToken.prev;

  while (token && token.kind === TokenKind.COMMENT && token.next && token.prev && token.line + 1 === token.next.line && token.line !== token.prev.line) {
    var value = String(token.value);
    comments.push(value);
    token = token.prev;
  }

  return comments.reverse().join('\n');
}
/**
 * A helper function to build a GraphQLSchema directly from a source
 * document.
 */


function buildSchema(source, options) {
  return buildASTSchema(parse(source, options), options);
}

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(source, true).forEach(function (key) { _defineProperty$4(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$4(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Produces a new schema given an existing schema and a document which may
 * contain GraphQL type extensions and definitions. The original schema will
 * remain unaltered.
 *
 * Because a schema represents a graph of references, a schema cannot be
 * extended without effectively making an entire copy. We do not know until it's
 * too late if subgraphs remain unchanged.
 *
 * This algorithm copies the provided schema, applying extensions while
 * producing the copy. The original schema remains unaltered.
 *
 * Accepts options as a third argument:
 *
 *    - commentDescriptions:
 *        Provide true to use preceding comments as the description.
 *
 */
function extendSchema(schema, documentAST, options) {
  assertSchema(schema);
  documentAST && documentAST.kind === Kind.DOCUMENT || devAssert(0, 'Must provide valid Document AST');

  if (!options || !(options.assumeValid || options.assumeValidSDL)) {
    assertValidSDLExtension(documentAST, schema);
  } // Collect the type definitions and extensions found in the document.


  var typeDefs = [];
  var typeExtsMap = Object.create(null); // New directives and types are separate because a directives and types can
  // have the same name. For example, a type named "skip".

  var directiveDefs = [];
  var schemaDef; // Schema extensions are collected which may add additional operation types.

  var schemaExts = [];

  for (var _i2 = 0, _documentAST$definiti2 = documentAST.definitions; _i2 < _documentAST$definiti2.length; _i2++) {
    var def = _documentAST$definiti2[_i2];

    if (def.kind === Kind.SCHEMA_DEFINITION) {
      schemaDef = def;
    } else if (def.kind === Kind.SCHEMA_EXTENSION) {
      schemaExts.push(def);
    } else if (isTypeDefinitionNode(def)) {
      typeDefs.push(def);
    } else if (isTypeExtensionNode(def)) {
      var extendedTypeName = def.name.value;
      var existingTypeExts = typeExtsMap[extendedTypeName];
      typeExtsMap[extendedTypeName] = existingTypeExts ? existingTypeExts.concat([def]) : [def];
    } else if (def.kind === Kind.DIRECTIVE_DEFINITION) {
      directiveDefs.push(def);
    }
  } // If this document contains no new types, extensions, or directives then
  // return the same unmodified GraphQLSchema instance.


  if (Object.keys(typeExtsMap).length === 0 && typeDefs.length === 0 && directiveDefs.length === 0 && schemaExts.length === 0 && !schemaDef) {
    return schema;
  }

  var schemaConfig = schema.toConfig();
  var astBuilder = new ASTDefinitionBuilder(options, function (typeName) {
    var type = typeMap[typeName];

    if (type === undefined) {
      throw new Error("Unknown type: \"".concat(typeName, "\"."));
    }

    return type;
  });
  var typeMap = keyValMap(typeDefs, function (node) {
    return node.name.value;
  }, function (node) {
    return astBuilder.buildType(node);
  });

  for (var _i4 = 0, _schemaConfig$types2 = schemaConfig.types; _i4 < _schemaConfig$types2.length; _i4++) {
    var existingType = _schemaConfig$types2[_i4];
    typeMap[existingType.name] = extendNamedType(existingType);
  } // Get the extended root operation types.


  var operationTypes = {
    query: schemaConfig.query && schemaConfig.query.name,
    mutation: schemaConfig.mutation && schemaConfig.mutation.name,
    subscription: schemaConfig.subscription && schemaConfig.subscription.name
  };

  if (schemaDef) {
    for (var _i6 = 0, _schemaDef$operationT2 = schemaDef.operationTypes; _i6 < _schemaDef$operationT2.length; _i6++) {
      var _ref2 = _schemaDef$operationT2[_i6];
      var operation = _ref2.operation;
      var type = _ref2.type;
      operationTypes[operation] = type.name.value;
    }
  } // Then, incorporate schema definition and all schema extensions.


  for (var _i8 = 0; _i8 < schemaExts.length; _i8++) {
    var schemaExt = schemaExts[_i8];

    if (schemaExt.operationTypes) {
      for (var _i10 = 0, _schemaExt$operationT2 = schemaExt.operationTypes; _i10 < _schemaExt$operationT2.length; _i10++) {
        var _ref4 = _schemaExt$operationT2[_i10];
        var _operation = _ref4.operation;
        var _type = _ref4.type;
        operationTypes[_operation] = _type.name.value;
      }
    }
  } // Support both original legacy names and extended legacy names.


  var allowedLegacyNames = schemaConfig.allowedLegacyNames.concat(options && options.allowedLegacyNames || []); // Then produce and return a Schema with these types.

  return new GraphQLSchema({
    // Note: While this could make early assertions to get the correctly
    // typed values, that would throw immediately while type system
    // validation with validateSchema() will produce more actionable results.
    query: getMaybeTypeByName(operationTypes.query),
    mutation: getMaybeTypeByName(operationTypes.mutation),
    subscription: getMaybeTypeByName(operationTypes.subscription),
    types: objectValues(typeMap),
    directives: getMergedDirectives(),
    astNode: schemaDef || schemaConfig.astNode,
    extensionASTNodes: schemaConfig.extensionASTNodes.concat(schemaExts),
    allowedLegacyNames: allowedLegacyNames
  }); // Below are functions used for producing this schema that have closed over
  // this scope and have access to the schema, cache, and newly defined types.

  function replaceType(type) {
    if (isListType(type)) {
      return new GraphQLList(replaceType(type.ofType));
    } else if (isNonNullType(type)) {
      return new GraphQLNonNull(replaceType(type.ofType));
    }

    return replaceNamedType(type);
  }

  function replaceNamedType(type) {
    return typeMap[type.name];
  }

  function getMaybeTypeByName(typeName) {
    return typeName ? typeMap[typeName] : null;
  }

  function getMergedDirectives() {
    var existingDirectives = schema.getDirectives().map(extendDirective);
    existingDirectives || devAssert(0, 'schema must have default directives');
    return existingDirectives.concat(directiveDefs.map(function (node) {
      return astBuilder.buildDirective(node);
    }));
  }

  function extendNamedType(type) {
    if (isIntrospectionType(type) || isSpecifiedScalarType(type)) {
      // Builtin types are not extended.
      return type;
    } else if (isScalarType(type)) {
      return extendScalarType(type);
    } else if (isObjectType(type)) {
      return extendObjectType(type);
    } else if (isInterfaceType(type)) {
      return extendInterfaceType(type);
    } else if (isUnionType(type)) {
      return extendUnionType(type);
    } else if (isEnumType(type)) {
      return extendEnumType(type);
    } else if (isInputObjectType(type)) {
      return extendInputObjectType(type);
    } // Not reachable. All possible types have been considered.


    /* istanbul ignore next */
    invariant(false, 'Unexpected type: ' + inspect(type));
  }

  function extendDirective(directive) {
    var config = directive.toConfig();
    return new GraphQLDirective(_objectSpread$3({}, config, {
      args: mapValue(config.args, extendArg)
    }));
  }

  function extendInputObjectType(type) {
    var config = type.toConfig();
    var extensions = typeExtsMap[config.name] || [];
    var fieldNodes = flatMap(extensions, function (node) {
      return node.fields || [];
    });
    return new GraphQLInputObjectType(_objectSpread$3({}, config, {
      fields: function fields() {
        return _objectSpread$3({}, mapValue(config.fields, function (field) {
          return _objectSpread$3({}, field, {
            type: replaceType(field.type)
          });
        }), {}, keyValMap(fieldNodes, function (field) {
          return field.name.value;
        }, function (field) {
          return astBuilder.buildInputField(field);
        }));
      },
      extensionASTNodes: config.extensionASTNodes.concat(extensions)
    }));
  }

  function extendEnumType(type) {
    var config = type.toConfig();
    var extensions = typeExtsMap[type.name] || [];
    var valueNodes = flatMap(extensions, function (node) {
      return node.values || [];
    });
    return new GraphQLEnumType(_objectSpread$3({}, config, {
      values: _objectSpread$3({}, config.values, {}, keyValMap(valueNodes, function (value) {
        return value.name.value;
      }, function (value) {
        return astBuilder.buildEnumValue(value);
      })),
      extensionASTNodes: config.extensionASTNodes.concat(extensions)
    }));
  }

  function extendScalarType(type) {
    var config = type.toConfig();
    var extensions = typeExtsMap[config.name] || [];
    return new GraphQLScalarType(_objectSpread$3({}, config, {
      extensionASTNodes: config.extensionASTNodes.concat(extensions)
    }));
  }

  function extendObjectType(type) {
    var config = type.toConfig();
    var extensions = typeExtsMap[config.name] || [];
    var interfaceNodes = flatMap(extensions, function (node) {
      return node.interfaces || [];
    });
    var fieldNodes = flatMap(extensions, function (node) {
      return node.fields || [];
    });
    return new GraphQLObjectType(_objectSpread$3({}, config, {
      interfaces: function interfaces() {
        return [].concat(type.getInterfaces().map(replaceNamedType), interfaceNodes.map(function (node) {
          return astBuilder.getNamedType(node);
        }));
      },
      fields: function fields() {
        return _objectSpread$3({}, mapValue(config.fields, extendField), {}, keyValMap(fieldNodes, function (node) {
          return node.name.value;
        }, function (node) {
          return astBuilder.buildField(node);
        }));
      },
      extensionASTNodes: config.extensionASTNodes.concat(extensions)
    }));
  }

  function extendInterfaceType(type) {
    var config = type.toConfig();
    var extensions = typeExtsMap[config.name] || [];
    var fieldNodes = flatMap(extensions, function (node) {
      return node.fields || [];
    });
    return new GraphQLInterfaceType(_objectSpread$3({}, config, {
      fields: function fields() {
        return _objectSpread$3({}, mapValue(config.fields, extendField), {}, keyValMap(fieldNodes, function (node) {
          return node.name.value;
        }, function (node) {
          return astBuilder.buildField(node);
        }));
      },
      extensionASTNodes: config.extensionASTNodes.concat(extensions)
    }));
  }

  function extendUnionType(type) {
    var config = type.toConfig();
    var extensions = typeExtsMap[config.name] || [];
    var typeNodes = flatMap(extensions, function (node) {
      return node.types || [];
    });
    return new GraphQLUnionType(_objectSpread$3({}, config, {
      types: function types() {
        return [].concat(type.getTypes().map(replaceNamedType), typeNodes.map(function (node) {
          return astBuilder.getNamedType(node);
        }));
      },
      extensionASTNodes: config.extensionASTNodes.concat(extensions)
    }));
  }

  function extendField(field) {
    return _objectSpread$3({}, field, {
      type: replaceType(field.type),
      args: mapValue(field.args, extendArg)
    });
  }

  function extendArg(arg) {
    return _objectSpread$3({}, arg, {
      type: replaceType(arg.type)
    });
  }
}

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(source, true).forEach(function (key) { _defineProperty$5(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$5(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
/**
 * Sort GraphQLSchema.
 */

function lexicographicSortSchema(schema) {
  var schemaConfig = schema.toConfig();
  var typeMap = keyValMap(sortByName(schemaConfig.types), function (type) {
    return type.name;
  }, sortNamedType);
  return new GraphQLSchema(_objectSpread$4({}, schemaConfig, {
    types: objectValues(typeMap),
    directives: sortByName(schemaConfig.directives).map(sortDirective),
    query: replaceMaybeType(schemaConfig.query),
    mutation: replaceMaybeType(schemaConfig.mutation),
    subscription: replaceMaybeType(schemaConfig.subscription)
  }));

  function replaceType(type) {
    if (isListType(type)) {
      return new GraphQLList(replaceType(type.ofType));
    } else if (isNonNullType(type)) {
      return new GraphQLNonNull(replaceType(type.ofType));
    }

    return replaceNamedType(type);
  }

  function replaceNamedType(type) {
    return typeMap[type.name];
  }

  function replaceMaybeType(maybeType) {
    return maybeType && replaceNamedType(maybeType);
  }

  function sortDirective(directive) {
    var config = directive.toConfig();
    return new GraphQLDirective(_objectSpread$4({}, config, {
      locations: sortBy(config.locations, function (x) {
        return x;
      }),
      args: sortArgs(config.args)
    }));
  }

  function sortArgs(args) {
    return sortObjMap(args, function (arg) {
      return _objectSpread$4({}, arg, {
        type: replaceType(arg.type)
      });
    });
  }

  function sortFields(fieldsMap) {
    return sortObjMap(fieldsMap, function (field) {
      return _objectSpread$4({}, field, {
        type: replaceType(field.type),
        args: sortArgs(field.args)
      });
    });
  }

  function sortInputFields(fieldsMap) {
    return sortObjMap(fieldsMap, function (field) {
      return _objectSpread$4({}, field, {
        type: replaceType(field.type)
      });
    });
  }

  function sortTypes(arr) {
    return sortByName(arr).map(replaceNamedType);
  }

  function sortNamedType(type) {
    if (isScalarType(type) || isIntrospectionType(type)) {
      return type;
    } else if (isObjectType(type)) {
      var config = type.toConfig();
      return new GraphQLObjectType(_objectSpread$4({}, config, {
        interfaces: function interfaces() {
          return sortTypes(config.interfaces);
        },
        fields: function fields() {
          return sortFields(config.fields);
        }
      }));
    } else if (isInterfaceType(type)) {
      var _config = type.toConfig();

      return new GraphQLInterfaceType(_objectSpread$4({}, _config, {
        fields: function fields() {
          return sortFields(_config.fields);
        }
      }));
    } else if (isUnionType(type)) {
      var _config2 = type.toConfig();

      return new GraphQLUnionType(_objectSpread$4({}, _config2, {
        types: function types() {
          return sortTypes(_config2.types);
        }
      }));
    } else if (isEnumType(type)) {
      var _config3 = type.toConfig();

      return new GraphQLEnumType(_objectSpread$4({}, _config3, {
        values: sortObjMap(_config3.values)
      }));
    } else if (isInputObjectType(type)) {
      var _config4 = type.toConfig();

      return new GraphQLInputObjectType(_objectSpread$4({}, _config4, {
        fields: function fields() {
          return sortInputFields(_config4.fields);
        }
      }));
    } // Not reachable. All possible types have been considered.


    /* istanbul ignore next */
    invariant(false, 'Unexpected type: ' + inspect(type));
  }
}

function sortObjMap(map, sortValueFn) {
  var sortedMap = Object.create(null);
  var sortedKeys = sortBy(Object.keys(map), function (x) {
    return x;
  });

  for (var _i2 = 0; _i2 < sortedKeys.length; _i2++) {
    var key = sortedKeys[_i2];
    var value = map[key];
    sortedMap[key] = sortValueFn ? sortValueFn(value) : value;
  }

  return sortedMap;
}

function sortByName(array) {
  return sortBy(array, function (obj) {
    return obj.name;
  });
}

function sortBy(array, mapToKey) {
  return array.slice().sort(function (obj1, obj2) {
    var key1 = mapToKey(obj1);
    var key2 = mapToKey(obj2);
    return key1.localeCompare(key2);
  });
}

/**
 * Accepts options as a second argument:
 *
 *    - commentDescriptions:
 *        Provide true to use preceding comments as the description.
 *
 */
function printSchema(schema, options) {
  return printFilteredSchema(schema, function (n) {
    return !isSpecifiedDirective(n);
  }, isDefinedType, options);
}
function printIntrospectionSchema(schema, options) {
  return printFilteredSchema(schema, isSpecifiedDirective, isIntrospectionType, options);
}

function isDefinedType(type) {
  return !isSpecifiedScalarType(type) && !isIntrospectionType(type);
}

function printFilteredSchema(schema, directiveFilter, typeFilter, options) {
  var directives = schema.getDirectives().filter(directiveFilter);
  var typeMap = schema.getTypeMap();
  var types = objectValues(typeMap).sort(function (type1, type2) {
    return type1.name.localeCompare(type2.name);
  }).filter(typeFilter);
  return [printSchemaDefinition(schema)].concat(directives.map(function (directive) {
    return printDirective(directive, options);
  }), types.map(function (type) {
    return printType(type, options);
  })).filter(Boolean).join('\n\n') + '\n';
}

function printSchemaDefinition(schema) {
  if (isSchemaOfCommonNames(schema)) {
    return;
  }

  var operationTypes = [];
  var queryType = schema.getQueryType();

  if (queryType) {
    operationTypes.push("  query: ".concat(queryType.name));
  }

  var mutationType = schema.getMutationType();

  if (mutationType) {
    operationTypes.push("  mutation: ".concat(mutationType.name));
  }

  var subscriptionType = schema.getSubscriptionType();

  if (subscriptionType) {
    operationTypes.push("  subscription: ".concat(subscriptionType.name));
  }

  return "schema {\n".concat(operationTypes.join('\n'), "\n}");
}
/**
 * GraphQL schema define root types for each type of operation. These types are
 * the same as any other type and can be named in any manner, however there is
 * a common naming convention:
 *
 *   schema {
 *     query: Query
 *     mutation: Mutation
 *   }
 *
 * When using this naming convention, the schema description can be omitted.
 */


function isSchemaOfCommonNames(schema) {
  var queryType = schema.getQueryType();

  if (queryType && queryType.name !== 'Query') {
    return false;
  }

  var mutationType = schema.getMutationType();

  if (mutationType && mutationType.name !== 'Mutation') {
    return false;
  }

  var subscriptionType = schema.getSubscriptionType();

  if (subscriptionType && subscriptionType.name !== 'Subscription') {
    return false;
  }

  return true;
}

function printType(type, options) {
  if (isScalarType(type)) {
    return printScalar(type, options);
  } else if (isObjectType(type)) {
    return printObject(type, options);
  } else if (isInterfaceType(type)) {
    return printInterface(type, options);
  } else if (isUnionType(type)) {
    return printUnion(type, options);
  } else if (isEnumType(type)) {
    return printEnum(type, options);
  } else if (isInputObjectType(type)) {
    return printInputObject(type, options);
  } // Not reachable. All possible types have been considered.


  /* istanbul ignore next */
  invariant(false, 'Unexpected type: ' + inspect(type));
}

function printScalar(type, options) {
  return printDescription(options, type) + "scalar ".concat(type.name);
}

function printObject(type, options) {
  var interfaces = type.getInterfaces();
  var implementedInterfaces = interfaces.length ? ' implements ' + interfaces.map(function (i) {
    return i.name;
  }).join(' & ') : '';
  return printDescription(options, type) + "type ".concat(type.name).concat(implementedInterfaces) + printFields(options, type);
}

function printInterface(type, options) {
  return printDescription(options, type) + "interface ".concat(type.name) + printFields(options, type);
}

function printUnion(type, options) {
  var types = type.getTypes();
  var possibleTypes = types.length ? ' = ' + types.join(' | ') : '';
  return printDescription(options, type) + 'union ' + type.name + possibleTypes;
}

function printEnum(type, options) {
  var values = type.getValues().map(function (value, i) {
    return printDescription(options, value, '  ', !i) + '  ' + value.name + printDeprecated(value);
  });
  return printDescription(options, type) + "enum ".concat(type.name) + printBlock(values);
}

function printInputObject(type, options) {
  var fields = objectValues(type.getFields()).map(function (f, i) {
    return printDescription(options, f, '  ', !i) + '  ' + printInputValue(f);
  });
  return printDescription(options, type) + "input ".concat(type.name) + printBlock(fields);
}

function printFields(options, type) {
  var fields = objectValues(type.getFields()).map(function (f, i) {
    return printDescription(options, f, '  ', !i) + '  ' + f.name + printArgs(options, f.args, '  ') + ': ' + String(f.type) + printDeprecated(f);
  });
  return printBlock(fields);
}

function printBlock(items) {
  return items.length !== 0 ? ' {\n' + items.join('\n') + '\n}' : '';
}

function printArgs(options, args) {
  var indentation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  if (args.length === 0) {
    return '';
  } // If every arg does not have a description, print them on one line.


  if (args.every(function (arg) {
    return !arg.description;
  })) {
    return '(' + args.map(printInputValue).join(', ') + ')';
  }

  return '(\n' + args.map(function (arg, i) {
    return printDescription(options, arg, '  ' + indentation, !i) + '  ' + indentation + printInputValue(arg);
  }).join('\n') + '\n' + indentation + ')';
}

function printInputValue(arg) {
  var defaultAST = astFromValue(arg.defaultValue, arg.type);
  var argDecl = arg.name + ': ' + String(arg.type);

  if (defaultAST) {
    argDecl += " = ".concat(print(defaultAST));
  }

  return argDecl;
}

function printDirective(directive, options) {
  return printDescription(options, directive) + 'directive @' + directive.name + printArgs(options, directive.args) + (directive.isRepeatable ? ' repeatable' : '') + ' on ' + directive.locations.join(' | ');
}

function printDeprecated(fieldOrEnumVal) {
  if (!fieldOrEnumVal.isDeprecated) {
    return '';
  }

  var reason = fieldOrEnumVal.deprecationReason;
  var reasonAST = astFromValue(reason, GraphQLString);

  if (reasonAST && reason !== '' && reason !== DEFAULT_DEPRECATION_REASON) {
    return ' @deprecated(reason: ' + print(reasonAST) + ')';
  }

  return ' @deprecated';
}

function printDescription(options, def) {
  var indentation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var firstInBlock = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  if (!def.description) {
    return '';
  }

  var lines = descriptionLines(def.description, 120 - indentation.length);

  if (options && options.commentDescriptions) {
    return printDescriptionWithComments(lines, indentation, firstInBlock);
  }

  var text = lines.join('\n');
  var preferMultipleLines = text.length > 70;
  var blockString = printBlockString(text, '', preferMultipleLines);
  var prefix = indentation && !firstInBlock ? '\n' + indentation : indentation;
  return prefix + blockString.replace(/\n/g, '\n' + indentation) + '\n';
}

function printDescriptionWithComments(lines, indentation, firstInBlock) {
  var description = indentation && !firstInBlock ? '\n' : '';

  for (var _i2 = 0; _i2 < lines.length; _i2++) {
    var line = lines[_i2];

    if (line === '') {
      description += indentation + '#\n';
    } else {
      description += indentation + '# ' + line + '\n';
    }
  }

  return description;
}

function descriptionLines(description, maxLen) {
  var rawLines = description.split('\n');
  return flatMap(rawLines, function (line) {
    if (line.length < maxLen + 5) {
      return line;
    } // For > 120 character long lines, cut at space boundaries into sublines
    // of ~80 chars.


    return breakLine(line, maxLen);
  });
}

function breakLine(line, maxLen) {
  var parts = line.split(new RegExp("((?: |^).{15,".concat(maxLen - 40, "}(?= |$))")));

  if (parts.length < 4) {
    return [line];
  }

  var sublines = [parts[0] + parts[1] + parts[2]];

  for (var i = 3; i < parts.length; i += 2) {
    sublines.push(parts[i].slice(1) + parts[i + 1]);
  }

  return sublines;
}

/* istanbul ignore file */

/**
 * Deprecated. Use coerceInputValue() directly for richer information.
 *
 * This function will be removed in v15
 */
function coerceValue(inputValue, type, blameNode, path) {
  var errors = [];
  var value = coerceInputValue(inputValue, type, function (errorPath, invalidValue, error) {
    var errorPrefix = 'Invalid value ' + inspect(invalidValue);
    var pathArray = [].concat(pathToArray(path), errorPath);

    if (pathArray.length > 0) {
      errorPrefix += " at \"value".concat(printPathArray(pathArray), "\"");
    }

    errors.push(new GraphQLError(errorPrefix + ': ' + error.message, blameNode, undefined, undefined, undefined, error.originalError));
  });
  return errors.length > 0 ? {
    errors: errors,
    value: undefined
  } : {
    errors: undefined,
    value: value
  };
}

/* istanbul ignore file */
/**
 * Deprecated. Use coerceInputValue() directly for richer information.
 *
 * This function will be removed in v15
 */

function isValidJSValue(value, type) {
  var errors = coerceValue(value, type).errors;
  return errors ? errors.map(function (error) {
    return error.message;
  }) : [];
}

/**
 * Utility which determines if a value literal node is valid for an input type.
 *
 * Deprecated. Rely on validation for documents containing literal values.
 *
 * This function will be removed in v15
 */

function isValidLiteralValue(type, valueNode) {
  var emptySchema = new GraphQLSchema({});
  var emptyDoc = {
    kind: Kind.DOCUMENT,
    definitions: []
  };
  var typeInfo = new TypeInfo(emptySchema, undefined, type);
  var context = new ValidationContext(emptySchema, emptyDoc, typeInfo);
  var visitor = ValuesOfCorrectType(context);
  visit(valueNode, visitWithTypeInfo(typeInfo, visitor));
  return context.getErrors();
}

/**
 * Provided a collection of ASTs, presumably each from different files,
 * concatenate the ASTs together into batched AST, useful for validating many
 * GraphQL source files which together represent one conceptual application.
 */
function concatAST(asts) {
  return {
    kind: 'Document',
    definitions: flatMap(asts, function (ast) {
      return ast.definitions;
    })
  };
}

/**
 * separateOperations accepts a single AST document which may contain many
 * operations and fragments and returns a collection of AST documents each of
 * which contains a single operation as well the fragment definitions it
 * refers to.
 */
function separateOperations(documentAST) {
  var operations = [];
  var fragments = Object.create(null);
  var positions = new Map();
  var depGraph = Object.create(null);
  var fromName;
  var idx = 0; // Populate metadata and build a dependency graph.

  visit(documentAST, {
    OperationDefinition: function OperationDefinition(node) {
      fromName = opName(node);
      operations.push(node);
      positions.set(node, idx++);
    },
    FragmentDefinition: function FragmentDefinition(node) {
      fromName = node.name.value;
      fragments[fromName] = node;
      positions.set(node, idx++);
    },
    FragmentSpread: function FragmentSpread(node) {
      var toName = node.name.value;
      (depGraph[fromName] || (depGraph[fromName] = Object.create(null)))[toName] = true;
    }
  }); // For each operation, produce a new synthesized AST which includes only what
  // is necessary for completing that operation.

  var separatedDocumentASTs = Object.create(null);

  for (var _i2 = 0; _i2 < operations.length; _i2++) {
    var operation = operations[_i2];
    var operationName = opName(operation);
    var dependencies = Object.create(null);
    collectTransitiveDependencies(dependencies, depGraph, operationName); // The list of definition nodes to be included for this operation, sorted
    // to retain the same order as the original document.

    var definitions = [operation];

    for (var _i4 = 0, _Object$keys2 = Object.keys(dependencies); _i4 < _Object$keys2.length; _i4++) {
      var name = _Object$keys2[_i4];
      definitions.push(fragments[name]);
    }

    definitions.sort(function (n1, n2) {
      return (positions.get(n1) || 0) - (positions.get(n2) || 0);
    });
    separatedDocumentASTs[operationName] = {
      kind: 'Document',
      definitions: definitions
    };
  }

  return separatedDocumentASTs;
}

// Provides the empty string for anonymous operations.
function opName(operation) {
  return operation.name ? operation.name.value : '';
} // From a dependency graph, collects a list of transitive dependencies by
// recursing through a dependency graph.


function collectTransitiveDependencies(collected, depGraph, fromName) {
  var immediateDeps = depGraph[fromName];

  if (immediateDeps) {
    for (var _i6 = 0, _Object$keys4 = Object.keys(immediateDeps); _i6 < _Object$keys4.length; _i6++) {
      var toName = _Object$keys4[_i6];

      if (!collected[toName]) {
        collected[toName] = true;
        collectTransitiveDependencies(collected, depGraph, toName);
      }
    }
  }
}

/**
 * Strips characters that are not significant to the validity or execution
 * of a GraphQL document:
 *   - UnicodeBOM
 *   - WhiteSpace
 *   - LineTerminator
 *   - Comment
 *   - Comma
 *   - BlockString indentation
 *
 * Note: It is required to have a delimiter character between neighboring
 * non-punctuator tokens and this function always uses single space as delimiter.
 *
 * It is guaranteed that both input and output documents if parsed would result
 * in the exact same AST except for nodes location.
 *
 * Warning: It is guaranteed that this function will always produce stable results.
 * However, it's not guaranteed that it will stay the same between different
 * releases due to bugfixes or changes in the GraphQL specification.
 *
 * Query example:
 *
 * query SomeQuery($foo: String!, $bar: String) {
 *   someField(foo: $foo, bar: $bar) {
 *     a
 *     b {
 *       c
 *       d
 *     }
 *   }
 * }
 *
 * Becomes:
 *
 * query SomeQuery($foo:String!$bar:String){someField(foo:$foo bar:$bar){a b{c d}}}
 *
 * SDL example:
 *
 * """
 * Type description
 * """
 * type Foo {
 *   """
 *   Field description
 *   """
 *   bar: String
 * }
 *
 * Becomes:
 *
 * """Type description""" type Foo{"""Field description""" bar:String}
 */

function stripIgnoredCharacters(source) {
  var sourceObj = typeof source === 'string' ? new Source(source) : source;

  if (!(sourceObj instanceof Source)) {
    throw new TypeError("Must provide string or Source. Received: ".concat(inspect(sourceObj)));
  }

  var body = sourceObj.body;
  var lexer = createLexer(sourceObj);
  var strippedBody = '';
  var wasLastAddedTokenNonPunctuator = false;

  while (lexer.advance().kind !== TokenKind.EOF) {
    var currentToken = lexer.token;
    var tokenKind = currentToken.kind;
    /**
     * Every two non-punctuator tokens should have space between them.
     * Also prevent case of non-punctuator token following by spread resulting
     * in invalid token (e.g. `1...` is invalid Float token).
     */

    var isNonPunctuator = !isPunctuatorToken(currentToken);

    if (wasLastAddedTokenNonPunctuator) {
      if (isNonPunctuator || currentToken.kind === TokenKind.SPREAD) {
        strippedBody += ' ';
      }
    }

    var tokenBody = body.slice(currentToken.start, currentToken.end);

    if (tokenKind === TokenKind.BLOCK_STRING) {
      strippedBody += dedentBlockString(tokenBody);
    } else {
      strippedBody += tokenBody;
    }

    wasLastAddedTokenNonPunctuator = isNonPunctuator;
  }

  return strippedBody;
}

function dedentBlockString(blockStr) {
  // skip leading and trailing triple quotations
  var rawStr = blockStr.slice(3, -3);
  var body = dedentBlockStringValue(rawStr);
  var lines = body.split(/\r\n|[\n\r]/g);

  if (getBlockStringIndentation(lines) > 0) {
    body = '\n' + body;
  }

  var lastChar = body[body.length - 1];
  var hasTrailingQuote = lastChar === '"' && body.slice(-4) !== '\\"""';

  if (hasTrailingQuote || lastChar === '\\') {
    body += '\n';
  }

  return '"""' + body + '"""';
}

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(source, true).forEach(function (key) { _defineProperty$6(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$6(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var BreakingChangeType = Object.freeze({
  TYPE_REMOVED: 'TYPE_REMOVED',
  TYPE_CHANGED_KIND: 'TYPE_CHANGED_KIND',
  TYPE_REMOVED_FROM_UNION: 'TYPE_REMOVED_FROM_UNION',
  VALUE_REMOVED_FROM_ENUM: 'VALUE_REMOVED_FROM_ENUM',
  REQUIRED_INPUT_FIELD_ADDED: 'REQUIRED_INPUT_FIELD_ADDED',
  INTERFACE_REMOVED_FROM_OBJECT: 'INTERFACE_REMOVED_FROM_OBJECT',
  FIELD_REMOVED: 'FIELD_REMOVED',
  FIELD_CHANGED_KIND: 'FIELD_CHANGED_KIND',
  REQUIRED_ARG_ADDED: 'REQUIRED_ARG_ADDED',
  ARG_REMOVED: 'ARG_REMOVED',
  ARG_CHANGED_KIND: 'ARG_CHANGED_KIND',
  DIRECTIVE_REMOVED: 'DIRECTIVE_REMOVED',
  DIRECTIVE_ARG_REMOVED: 'DIRECTIVE_ARG_REMOVED',
  REQUIRED_DIRECTIVE_ARG_ADDED: 'REQUIRED_DIRECTIVE_ARG_ADDED',
  DIRECTIVE_LOCATION_REMOVED: 'DIRECTIVE_LOCATION_REMOVED'
});
var DangerousChangeType = Object.freeze({
  VALUE_ADDED_TO_ENUM: 'VALUE_ADDED_TO_ENUM',
  TYPE_ADDED_TO_UNION: 'TYPE_ADDED_TO_UNION',
  OPTIONAL_INPUT_FIELD_ADDED: 'OPTIONAL_INPUT_FIELD_ADDED',
  OPTIONAL_ARG_ADDED: 'OPTIONAL_ARG_ADDED',
  INTERFACE_ADDED_TO_OBJECT: 'INTERFACE_ADDED_TO_OBJECT',
  ARG_DEFAULT_VALUE_CHANGE: 'ARG_DEFAULT_VALUE_CHANGE'
});

/**
 * Given two schemas, returns an Array containing descriptions of all the types
 * of breaking changes covered by the other functions down below.
 */
function findBreakingChanges(oldSchema, newSchema) {
  var breakingChanges = findSchemaChanges(oldSchema, newSchema).filter(function (change) {
    return change.type in BreakingChangeType;
  });
  return breakingChanges;
}
/**
 * Given two schemas, returns an Array containing descriptions of all the types
 * of potentially dangerous changes covered by the other functions down below.
 */

function findDangerousChanges(oldSchema, newSchema) {
  var dangerousChanges = findSchemaChanges(oldSchema, newSchema).filter(function (change) {
    return change.type in DangerousChangeType;
  });
  return dangerousChanges;
}

function findSchemaChanges(oldSchema, newSchema) {
  return [].concat(findTypeChanges(oldSchema, newSchema), findDirectiveChanges(oldSchema, newSchema));
}

function findDirectiveChanges(oldSchema, newSchema) {
  var schemaChanges = [];
  var directivesDiff = diff(oldSchema.getDirectives(), newSchema.getDirectives());

  for (var _i2 = 0, _directivesDiff$remov2 = directivesDiff.removed; _i2 < _directivesDiff$remov2.length; _i2++) {
    var oldDirective = _directivesDiff$remov2[_i2];
    schemaChanges.push({
      type: BreakingChangeType.DIRECTIVE_REMOVED,
      description: "".concat(oldDirective.name, " was removed.")
    });
  }

  for (var _i4 = 0, _directivesDiff$persi2 = directivesDiff.persisted; _i4 < _directivesDiff$persi2.length; _i4++) {
    var _ref2 = _directivesDiff$persi2[_i4];
    var _oldDirective = _ref2[0];
    var newDirective = _ref2[1];
    var argsDiff = diff(_oldDirective.args, newDirective.args);

    for (var _i6 = 0, _argsDiff$added2 = argsDiff.added; _i6 < _argsDiff$added2.length; _i6++) {
      var newArg = _argsDiff$added2[_i6];

      if (isRequiredArgument(newArg)) {
        schemaChanges.push({
          type: BreakingChangeType.REQUIRED_DIRECTIVE_ARG_ADDED,
          description: "A required arg ".concat(newArg.name, " on directive ").concat(_oldDirective.name, " was added.")
        });
      }
    }

    for (var _i8 = 0, _argsDiff$removed2 = argsDiff.removed; _i8 < _argsDiff$removed2.length; _i8++) {
      var oldArg = _argsDiff$removed2[_i8];
      schemaChanges.push({
        type: BreakingChangeType.DIRECTIVE_ARG_REMOVED,
        description: "".concat(oldArg.name, " was removed from ").concat(_oldDirective.name, ".")
      });
    }

    for (var _i10 = 0, _oldDirective$locatio2 = _oldDirective.locations; _i10 < _oldDirective$locatio2.length; _i10++) {
      var location = _oldDirective$locatio2[_i10];

      if (newDirective.locations.indexOf(location) === -1) {
        schemaChanges.push({
          type: BreakingChangeType.DIRECTIVE_LOCATION_REMOVED,
          description: "".concat(location, " was removed from ").concat(_oldDirective.name, ".")
        });
      }
    }
  }

  return schemaChanges;
}

function findTypeChanges(oldSchema, newSchema) {
  var schemaChanges = [];
  var typesDiff = diff(objectValues(oldSchema.getTypeMap()), objectValues(newSchema.getTypeMap()));

  for (var _i12 = 0, _typesDiff$removed2 = typesDiff.removed; _i12 < _typesDiff$removed2.length; _i12++) {
    var oldType = _typesDiff$removed2[_i12];
    schemaChanges.push({
      type: BreakingChangeType.TYPE_REMOVED,
      description: "".concat(oldType.name, " was removed.")
    });
  }

  for (var _i14 = 0, _typesDiff$persisted2 = typesDiff.persisted; _i14 < _typesDiff$persisted2.length; _i14++) {
    var _ref4 = _typesDiff$persisted2[_i14];
    var _oldType = _ref4[0];
    var newType = _ref4[1];

    if (isEnumType(_oldType) && isEnumType(newType)) {
      schemaChanges.push.apply(schemaChanges, findEnumTypeChanges(_oldType, newType));
    } else if (isUnionType(_oldType) && isUnionType(newType)) {
      schemaChanges.push.apply(schemaChanges, findUnionTypeChanges(_oldType, newType));
    } else if (isInputObjectType(_oldType) && isInputObjectType(newType)) {
      schemaChanges.push.apply(schemaChanges, findInputObjectTypeChanges(_oldType, newType));
    } else if (isObjectType(_oldType) && isObjectType(newType)) {
      schemaChanges.push.apply(schemaChanges, findObjectTypeChanges(_oldType, newType));
    } else if (isInterfaceType(_oldType) && isInterfaceType(newType)) {
      schemaChanges.push.apply(schemaChanges, findFieldChanges(_oldType, newType));
    } else if (_oldType.constructor !== newType.constructor) {
      schemaChanges.push({
        type: BreakingChangeType.TYPE_CHANGED_KIND,
        description: "".concat(_oldType.name, " changed from ") + "".concat(typeKindName(_oldType), " to ").concat(typeKindName(newType), ".")
      });
    }
  }

  return schemaChanges;
}

function findInputObjectTypeChanges(oldType, newType) {
  var schemaChanges = [];
  var fieldsDiff = diff(objectValues(oldType.getFields()), objectValues(newType.getFields()));

  for (var _i16 = 0, _fieldsDiff$added2 = fieldsDiff.added; _i16 < _fieldsDiff$added2.length; _i16++) {
    var newField = _fieldsDiff$added2[_i16];

    if (isRequiredInputField(newField)) {
      schemaChanges.push({
        type: BreakingChangeType.REQUIRED_INPUT_FIELD_ADDED,
        description: "A required field ".concat(newField.name, " on input type ").concat(oldType.name, " was added.")
      });
    } else {
      schemaChanges.push({
        type: DangerousChangeType.OPTIONAL_INPUT_FIELD_ADDED,
        description: "An optional field ".concat(newField.name, " on input type ").concat(oldType.name, " was added.")
      });
    }
  }

  for (var _i18 = 0, _fieldsDiff$removed2 = fieldsDiff.removed; _i18 < _fieldsDiff$removed2.length; _i18++) {
    var oldField = _fieldsDiff$removed2[_i18];
    schemaChanges.push({
      type: BreakingChangeType.FIELD_REMOVED,
      description: "".concat(oldType.name, ".").concat(oldField.name, " was removed.")
    });
  }

  for (var _i20 = 0, _fieldsDiff$persisted2 = fieldsDiff.persisted; _i20 < _fieldsDiff$persisted2.length; _i20++) {
    var _ref6 = _fieldsDiff$persisted2[_i20];
    var _oldField = _ref6[0];
    var _newField = _ref6[1];
    var isSafe = isChangeSafeForInputObjectFieldOrFieldArg(_oldField.type, _newField.type);

    if (!isSafe) {
      schemaChanges.push({
        type: BreakingChangeType.FIELD_CHANGED_KIND,
        description: "".concat(oldType.name, ".").concat(_oldField.name, " changed type from ") + "".concat(String(_oldField.type), " to ").concat(String(_newField.type), ".")
      });
    }
  }

  return schemaChanges;
}

function findUnionTypeChanges(oldType, newType) {
  var schemaChanges = [];
  var possibleTypesDiff = diff(oldType.getTypes(), newType.getTypes());

  for (var _i22 = 0, _possibleTypesDiff$ad2 = possibleTypesDiff.added; _i22 < _possibleTypesDiff$ad2.length; _i22++) {
    var newPossibleType = _possibleTypesDiff$ad2[_i22];
    schemaChanges.push({
      type: DangerousChangeType.TYPE_ADDED_TO_UNION,
      description: "".concat(newPossibleType.name, " was added to union type ").concat(oldType.name, ".")
    });
  }

  for (var _i24 = 0, _possibleTypesDiff$re2 = possibleTypesDiff.removed; _i24 < _possibleTypesDiff$re2.length; _i24++) {
    var oldPossibleType = _possibleTypesDiff$re2[_i24];
    schemaChanges.push({
      type: BreakingChangeType.TYPE_REMOVED_FROM_UNION,
      description: "".concat(oldPossibleType.name, " was removed from union type ").concat(oldType.name, ".")
    });
  }

  return schemaChanges;
}

function findEnumTypeChanges(oldType, newType) {
  var schemaChanges = [];
  var valuesDiff = diff(oldType.getValues(), newType.getValues());

  for (var _i26 = 0, _valuesDiff$added2 = valuesDiff.added; _i26 < _valuesDiff$added2.length; _i26++) {
    var newValue = _valuesDiff$added2[_i26];
    schemaChanges.push({
      type: DangerousChangeType.VALUE_ADDED_TO_ENUM,
      description: "".concat(newValue.name, " was added to enum type ").concat(oldType.name, ".")
    });
  }

  for (var _i28 = 0, _valuesDiff$removed2 = valuesDiff.removed; _i28 < _valuesDiff$removed2.length; _i28++) {
    var oldValue = _valuesDiff$removed2[_i28];
    schemaChanges.push({
      type: BreakingChangeType.VALUE_REMOVED_FROM_ENUM,
      description: "".concat(oldValue.name, " was removed from enum type ").concat(oldType.name, ".")
    });
  }

  return schemaChanges;
}

function findObjectTypeChanges(oldType, newType) {
  var schemaChanges = findFieldChanges(oldType, newType);
  var interfacesDiff = diff(oldType.getInterfaces(), newType.getInterfaces());

  for (var _i30 = 0, _interfacesDiff$added2 = interfacesDiff.added; _i30 < _interfacesDiff$added2.length; _i30++) {
    var newInterface = _interfacesDiff$added2[_i30];
    schemaChanges.push({
      type: DangerousChangeType.INTERFACE_ADDED_TO_OBJECT,
      description: "".concat(newInterface.name, " added to interfaces implemented by ").concat(oldType.name, ".")
    });
  }

  for (var _i32 = 0, _interfacesDiff$remov2 = interfacesDiff.removed; _i32 < _interfacesDiff$remov2.length; _i32++) {
    var oldInterface = _interfacesDiff$remov2[_i32];
    schemaChanges.push({
      type: BreakingChangeType.INTERFACE_REMOVED_FROM_OBJECT,
      description: "".concat(oldType.name, " no longer implements interface ").concat(oldInterface.name, ".")
    });
  }

  return schemaChanges;
}

function findFieldChanges(oldType, newType) {
  var schemaChanges = [];
  var fieldsDiff = diff(objectValues(oldType.getFields()), objectValues(newType.getFields()));

  for (var _i34 = 0, _fieldsDiff$removed4 = fieldsDiff.removed; _i34 < _fieldsDiff$removed4.length; _i34++) {
    var oldField = _fieldsDiff$removed4[_i34];
    schemaChanges.push({
      type: BreakingChangeType.FIELD_REMOVED,
      description: "".concat(oldType.name, ".").concat(oldField.name, " was removed.")
    });
  }

  for (var _i36 = 0, _fieldsDiff$persisted4 = fieldsDiff.persisted; _i36 < _fieldsDiff$persisted4.length; _i36++) {
    var _ref8 = _fieldsDiff$persisted4[_i36];
    var _oldField2 = _ref8[0];
    var newField = _ref8[1];
    schemaChanges.push.apply(schemaChanges, findArgChanges(oldType, _oldField2, newField));
    var isSafe = isChangeSafeForObjectOrInterfaceField(_oldField2.type, newField.type);

    if (!isSafe) {
      schemaChanges.push({
        type: BreakingChangeType.FIELD_CHANGED_KIND,
        description: "".concat(oldType.name, ".").concat(_oldField2.name, " changed type from ") + "".concat(String(_oldField2.type), " to ").concat(String(newField.type), ".")
      });
    }
  }

  return schemaChanges;
}

function findArgChanges(oldType, oldField, newField) {
  var schemaChanges = [];
  var argsDiff = diff(oldField.args, newField.args);

  for (var _i38 = 0, _argsDiff$removed4 = argsDiff.removed; _i38 < _argsDiff$removed4.length; _i38++) {
    var oldArg = _argsDiff$removed4[_i38];
    schemaChanges.push({
      type: BreakingChangeType.ARG_REMOVED,
      description: "".concat(oldType.name, ".").concat(oldField.name, " arg ").concat(oldArg.name, " was removed.")
    });
  }

  for (var _i40 = 0, _argsDiff$persisted2 = argsDiff.persisted; _i40 < _argsDiff$persisted2.length; _i40++) {
    var _ref10 = _argsDiff$persisted2[_i40];
    var _oldArg = _ref10[0];
    var newArg = _ref10[1];
    var isSafe = isChangeSafeForInputObjectFieldOrFieldArg(_oldArg.type, newArg.type);

    if (!isSafe) {
      schemaChanges.push({
        type: BreakingChangeType.ARG_CHANGED_KIND,
        description: "".concat(oldType.name, ".").concat(oldField.name, " arg ").concat(_oldArg.name, " has changed type from ") + "".concat(String(_oldArg.type), " to ").concat(String(newArg.type), ".")
      });
    } else if (_oldArg.defaultValue !== undefined) {
      if (newArg.defaultValue === undefined) {
        schemaChanges.push({
          type: DangerousChangeType.ARG_DEFAULT_VALUE_CHANGE,
          description: "".concat(oldType.name, ".").concat(oldField.name, " arg ").concat(_oldArg.name, " defaultValue was removed.")
        });
      } else {
        // Since we looking only for client's observable changes we should
        // compare default values in the same representation as they are
        // represented inside introspection.
        var oldValueStr = stringifyValue(_oldArg.defaultValue, _oldArg.type);
        var newValueStr = stringifyValue(newArg.defaultValue, newArg.type);

        if (oldValueStr !== newValueStr) {
          schemaChanges.push({
            type: DangerousChangeType.ARG_DEFAULT_VALUE_CHANGE,
            description: "".concat(oldType.name, ".").concat(oldField.name, " arg ").concat(_oldArg.name, " has changed defaultValue from ").concat(oldValueStr, " to ").concat(newValueStr, ".")
          });
        }
      }
    }
  }

  for (var _i42 = 0, _argsDiff$added4 = argsDiff.added; _i42 < _argsDiff$added4.length; _i42++) {
    var _newArg = _argsDiff$added4[_i42];

    if (isRequiredArgument(_newArg)) {
      schemaChanges.push({
        type: BreakingChangeType.REQUIRED_ARG_ADDED,
        description: "A required arg ".concat(_newArg.name, " on ").concat(oldType.name, ".").concat(oldField.name, " was added.")
      });
    } else {
      schemaChanges.push({
        type: DangerousChangeType.OPTIONAL_ARG_ADDED,
        description: "An optional arg ".concat(_newArg.name, " on ").concat(oldType.name, ".").concat(oldField.name, " was added.")
      });
    }
  }

  return schemaChanges;
}

function isChangeSafeForObjectOrInterfaceField(oldType, newType) {
  if (isListType(oldType)) {
    return (// if they're both lists, make sure the underlying types are compatible
      isListType(newType) && isChangeSafeForObjectOrInterfaceField(oldType.ofType, newType.ofType) || // moving from nullable to non-null of the same underlying type is safe
      isNonNullType(newType) && isChangeSafeForObjectOrInterfaceField(oldType, newType.ofType)
    );
  }

  if (isNonNullType(oldType)) {
    // if they're both non-null, make sure the underlying types are compatible
    return isNonNullType(newType) && isChangeSafeForObjectOrInterfaceField(oldType.ofType, newType.ofType);
  }

  return (// if they're both named types, see if their names are equivalent
    isNamedType(newType) && oldType.name === newType.name || // moving from nullable to non-null of the same underlying type is safe
    isNonNullType(newType) && isChangeSafeForObjectOrInterfaceField(oldType, newType.ofType)
  );
}

function isChangeSafeForInputObjectFieldOrFieldArg(oldType, newType) {
  if (isListType(oldType)) {
    // if they're both lists, make sure the underlying types are compatible
    return isListType(newType) && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType.ofType);
  }

  if (isNonNullType(oldType)) {
    return (// if they're both non-null, make sure the underlying types are
      // compatible
      isNonNullType(newType) && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType.ofType) || // moving from non-null to nullable of the same underlying type is safe
      !isNonNullType(newType) && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType)
    );
  } // if they're both named types, see if their names are equivalent


  return isNamedType(newType) && oldType.name === newType.name;
}

function typeKindName(type) {
  if (isScalarType(type)) {
    return 'a Scalar type';
  }

  if (isObjectType(type)) {
    return 'an Object type';
  }

  if (isInterfaceType(type)) {
    return 'an Interface type';
  }

  if (isUnionType(type)) {
    return 'a Union type';
  }

  if (isEnumType(type)) {
    return 'an Enum type';
  }

  /* istanbul ignore else */
  if (isInputObjectType(type)) {
    return 'an Input type';
  } // Not reachable. All possible named types have been considered.


  /* istanbul ignore next */
  invariant(false, 'Unexpected type: ' + inspect(type));
}

function stringifyValue(value, type) {
  var ast = astFromValue(value, type);

  /* istanbul ignore next */
  ast != null || invariant(0);
  var sortedAST = visit(ast, {
    ObjectValue: function ObjectValue(objectNode) {
      var fields = [].concat(objectNode.fields).sort(function (fieldA, fieldB) {
        return fieldA.name.value.localeCompare(fieldB.name.value);
      });
      return _objectSpread$5({}, objectNode, {
        fields: fields
      });
    }
  });
  return print(sortedAST);
}

function diff(oldArray, newArray) {
  var added = [];
  var removed = [];
  var persisted = [];
  var oldMap = keyMap(oldArray, function (_ref11) {
    var name = _ref11.name;
    return name;
  });
  var newMap = keyMap(newArray, function (_ref12) {
    var name = _ref12.name;
    return name;
  });

  for (var _i44 = 0; _i44 < oldArray.length; _i44++) {
    var oldItem = oldArray[_i44];
    var newItem = newMap[oldItem.name];

    if (newItem === undefined) {
      removed.push(oldItem);
    } else {
      persisted.push([oldItem, newItem]);
    }
  }

  for (var _i46 = 0; _i46 < newArray.length; _i46++) {
    var _newItem = newArray[_i46];

    if (oldMap[_newItem.name] === undefined) {
      added.push(_newItem);
    }
  }

  return {
    added: added,
    persisted: persisted,
    removed: removed
  };
}

/**
 * A validation rule which reports deprecated usages.
 *
 * Returns a list of GraphQLError instances describing each deprecated use.
 */

function findDeprecatedUsages(schema, ast) {
  var errors = [];
  var typeInfo = new TypeInfo(schema);
  visit(ast, visitWithTypeInfo(typeInfo, {
    Field: function Field(node) {
      var fieldDef = typeInfo.getFieldDef();

      if (fieldDef && fieldDef.isDeprecated) {
        var parentType = typeInfo.getParentType();

        if (parentType) {
          var reason = fieldDef.deprecationReason;
          errors.push(new GraphQLError("The field ".concat(parentType.name, ".").concat(fieldDef.name, " is deprecated.") + (reason ? ' ' + reason : ''), node));
        }
      }
    },
    EnumValue: function EnumValue(node) {
      var enumVal = typeInfo.getEnumValue();

      if (enumVal && enumVal.isDeprecated) {
        var type = getNamedType(typeInfo.getInputType());

        if (type) {
          var reason = enumVal.deprecationReason;
          errors.push(new GraphQLError("The enum value ".concat(type.name, ".").concat(enumVal.name, " is deprecated.") + (reason ? ' ' + reason : ''), node));
        }
      }
    }
  }));
  return errors;
}

// The GraphQL query recommended for a full schema introspection.

var index$4 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getIntrospectionQuery: getIntrospectionQuery,
  introspectionQuery: introspectionQuery,
  getOperationAST: getOperationAST,
  getOperationRootType: getOperationRootType,
  introspectionFromSchema: introspectionFromSchema,
  buildClientSchema: buildClientSchema,
  buildASTSchema: buildASTSchema,
  buildSchema: buildSchema,
  getDescription: getDescription,
  extendSchema: extendSchema,
  lexicographicSortSchema: lexicographicSortSchema,
  printSchema: printSchema,
  printType: printType,
  printIntrospectionSchema: printIntrospectionSchema,
  typeFromAST: typeFromAST,
  valueFromAST: valueFromAST,
  valueFromASTUntyped: valueFromASTUntyped,
  astFromValue: astFromValue,
  TypeInfo: TypeInfo,
  coerceInputValue: coerceInputValue,
  coerceValue: coerceValue,
  isValidJSValue: isValidJSValue,
  isValidLiteralValue: isValidLiteralValue,
  concatAST: concatAST,
  separateOperations: separateOperations,
  stripIgnoredCharacters: stripIgnoredCharacters,
  isEqualType: isEqualType,
  isTypeSubTypeOf: isTypeSubTypeOf,
  doTypesOverlap: doTypesOverlap,
  assertValidName: assertValidName,
  isValidNameError: isValidNameError,
  BreakingChangeType: BreakingChangeType,
  DangerousChangeType: DangerousChangeType,
  findBreakingChanges: findBreakingChanges,
  findDangerousChanges: findDangerousChanges,
  findDeprecatedUsages: findDeprecatedUsages
});



var index$5 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  validate: validate,
  ValidationContext: ValidationContext,
  specifiedRules: specifiedRules,
  FieldsOnCorrectTypeRule: FieldsOnCorrectType,
  FragmentsOnCompositeTypesRule: FragmentsOnCompositeTypes,
  KnownArgumentNamesRule: KnownArgumentNames,
  KnownDirectivesRule: KnownDirectives,
  KnownFragmentNamesRule: KnownFragmentNames,
  KnownTypeNamesRule: KnownTypeNames,
  LoneAnonymousOperationRule: LoneAnonymousOperation,
  NoFragmentCyclesRule: NoFragmentCycles,
  NoUndefinedVariablesRule: NoUndefinedVariables,
  NoUnusedFragmentsRule: NoUnusedFragments,
  NoUnusedVariablesRule: NoUnusedVariables,
  OverlappingFieldsCanBeMergedRule: OverlappingFieldsCanBeMerged,
  PossibleFragmentSpreadsRule: PossibleFragmentSpreads,
  ProvidedRequiredArgumentsRule: ProvidedRequiredArguments,
  ScalarLeafsRule: ScalarLeafs,
  SingleFieldSubscriptionsRule: SingleFieldSubscriptions,
  UniqueArgumentNamesRule: UniqueArgumentNames,
  UniqueDirectivesPerLocationRule: UniqueDirectivesPerLocation,
  UniqueFragmentNamesRule: UniqueFragmentNames,
  UniqueInputFieldNamesRule: UniqueInputFieldNames,
  UniqueOperationNamesRule: UniqueOperationNames,
  UniqueVariableNamesRule: UniqueVariableNames,
  ValuesOfCorrectTypeRule: ValuesOfCorrectType,
  VariablesAreInputTypesRule: VariablesAreInputTypes,
  VariablesInAllowedPositionRule: VariablesInAllowedPosition
});

function _defineProperty$7(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Given an AsyncIterable and a callback function, return an AsyncIterator
 * which produces values mapped via calling the callback function.
 */
function mapAsyncIterator(iterable, callback, rejectCallback) {
  var iterator = getAsyncIterator(iterable);
  var $return;
  var abruptClose; // $FlowFixMe(>=0.68.0)

  if (typeof iterator.return === 'function') {
    $return = iterator.return;

    abruptClose = function abruptClose(error) {
      var rethrow = function rethrow() {
        return Promise.reject(error);
      };

      return $return.call(iterator).then(rethrow, rethrow);
    };
  }

  function mapResult(result) {
    return result.done ? result : asyncMapValue(result.value, callback).then(iteratorResult, abruptClose);
  }

  var mapReject;

  if (rejectCallback) {
    // Capture rejectCallback to ensure it cannot be null.
    var reject = rejectCallback;

    mapReject = function mapReject(error) {
      return asyncMapValue(error, reject).then(iteratorResult, abruptClose);
    };
  }
  /* TODO: Flow doesn't support symbols as keys:
     https://github.com/facebook/flow/issues/3258 */


  return _defineProperty$7({
    next: function next() {
      return iterator.next().then(mapResult, mapReject);
    },
    return: function _return() {
      return $return ? $return.call(iterator).then(mapResult, mapReject) : Promise.resolve({
        value: undefined,
        done: true
      });
    },
    throw: function _throw(error) {
      // $FlowFixMe(>=0.68.0)
      if (typeof iterator.throw === 'function') {
        return iterator.throw(error).then(mapResult, mapReject);
      }

      return Promise.reject(error).catch(abruptClose);
    }
  }, $$asyncIterator, function () {
    return this;
  });
}

function asyncMapValue(value, callback) {
  return new Promise(function (resolve) {
    return resolve(callback(value));
  });
}

function iteratorResult(value) {
  return {
    value: value,
    done: false
  };
}

function subscribe(argsOrSchema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, subscribeFieldResolver) {
  /* eslint-enable no-redeclare */
  // Extract arguments from object args if provided.
  return arguments.length === 1 ? subscribeImpl(argsOrSchema) : subscribeImpl({
    schema: argsOrSchema,
    document: document,
    rootValue: rootValue,
    contextValue: contextValue,
    variableValues: variableValues,
    operationName: operationName,
    fieldResolver: fieldResolver,
    subscribeFieldResolver: subscribeFieldResolver
  });
}
/**
 * This function checks if the error is a GraphQLError. If it is, report it as
 * an ExecutionResult, containing only errors and no data. Otherwise treat the
 * error as a system-class error and re-throw it.
 */

function reportGraphQLError(error) {
  if (error instanceof GraphQLError) {
    return {
      errors: [error]
    };
  }

  throw error;
}

function subscribeImpl(args) {
  var schema = args.schema,
      document = args.document,
      rootValue = args.rootValue,
      contextValue = args.contextValue,
      variableValues = args.variableValues,
      operationName = args.operationName,
      fieldResolver = args.fieldResolver,
      subscribeFieldResolver = args.subscribeFieldResolver;
  var sourcePromise = createSourceEventStream(schema, document, rootValue, contextValue, variableValues, operationName, subscribeFieldResolver); // For each payload yielded from a subscription, map it over the normal
  // GraphQL `execute` function, with `payload` as the rootValue.
  // This implements the "MapSourceToResponseEvent" algorithm described in
  // the GraphQL specification. The `execute` function provides the
  // "ExecuteSubscriptionEvent" algorithm, as it is nearly identical to the
  // "ExecuteQuery" algorithm, for which `execute` is also used.

  var mapSourceToResponse = function mapSourceToResponse(payload) {
    return execute(schema, document, payload, contextValue, variableValues, operationName, fieldResolver);
  }; // Resolve the Source Stream, then map every source value to a
  // ExecutionResult value as described above.


  return sourcePromise.then(function (resultOrStream) {
    return (// Note: Flow can't refine isAsyncIterable, so explicit casts are used.
      isAsyncIterable(resultOrStream) ? mapAsyncIterator(resultOrStream, mapSourceToResponse, reportGraphQLError) : resultOrStream
    );
  });
}
/**
 * Implements the "CreateSourceEventStream" algorithm described in the
 * GraphQL specification, resolving the subscription source event stream.
 *
 * Returns a Promise which resolves to either an AsyncIterable (if successful)
 * or an ExecutionResult (error). The promise will be rejected if the schema or
 * other arguments to this function are invalid, or if the resolved event stream
 * is not an async iterable.
 *
 * If the client-provided arguments to this function do not result in a
 * compliant subscription, a GraphQL Response (ExecutionResult) with
 * descriptive errors and no data will be returned.
 *
 * If the the source stream could not be created due to faulty subscription
 * resolver logic or underlying systems, the promise will resolve to a single
 * ExecutionResult containing `errors` and no `data`.
 *
 * If the operation succeeded, the promise resolves to the AsyncIterable for the
 * event stream returned by the resolver.
 *
 * A Source Event Stream represents a sequence of events, each of which triggers
 * a GraphQL execution for that event.
 *
 * This may be useful when hosting the stateful subscription service in a
 * different process or machine than the stateless GraphQL execution engine,
 * or otherwise separating these two steps. For more on this, see the
 * "Supporting Subscriptions at Scale" information in the GraphQL specification.
 */


function createSourceEventStream(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver) {
  // If arguments are missing or incorrectly typed, this is an internal
  // developer mistake which should throw an early error.
  assertValidExecutionArguments(schema, document, variableValues);

  try {
    // If a valid context cannot be created due to incorrect arguments,
    // this will throw an error.
    var exeContext = buildExecutionContext(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver); // Return early errors if execution context failed.

    if (Array.isArray(exeContext)) {
      return Promise.resolve({
        errors: exeContext
      });
    }

    var type = getOperationRootType(schema, exeContext.operation);
    var fields = collectFields(exeContext, type, exeContext.operation.selectionSet, Object.create(null), Object.create(null));
    var responseNames = Object.keys(fields);
    var responseName = responseNames[0];
    var fieldNodes = fields[responseName];
    var fieldNode = fieldNodes[0];
    var fieldName = fieldNode.name.value;
    var fieldDef = getFieldDef(schema, type, fieldName);

    if (!fieldDef) {
      throw new GraphQLError("The subscription field \"".concat(fieldName, "\" is not defined."), fieldNodes);
    } // Call the `subscribe()` resolver or the default resolver to produce an
    // AsyncIterable yielding raw payloads.


    var resolveFn = fieldDef.subscribe || exeContext.fieldResolver;
    var path = addPath(undefined, responseName);
    var info = buildResolveInfo(exeContext, fieldDef, fieldNodes, type, path); // resolveFieldValueOrError implements the "ResolveFieldEventStream"
    // algorithm from GraphQL specification. It differs from
    // "ResolveFieldValue" due to providing a different `resolveFn`.

    var result = resolveFieldValueOrError(exeContext, fieldDef, fieldNodes, resolveFn, rootValue, info); // Coerce to Promise for easier error handling and consistent return type.

    return Promise.resolve(result).then(function (eventStream) {
      // If eventStream is an Error, rethrow a located error.
      if (eventStream instanceof Error) {
        return {
          errors: [locatedError(eventStream, fieldNodes, pathToArray(path))]
        };
      } // Assert field returned an event stream, otherwise yield an error.


      if (isAsyncIterable(eventStream)) {
        // Note: isAsyncIterable above ensures this will be correct.
        return eventStream;
      }

      throw new Error('Subscription field must return Async Iterable. Received: ' + inspect(eventStream));
    });
  } catch (error) {
    // As with reportGraphQLError above, if the error is a GraphQLError, report
    // it as an ExecutionResult; otherwise treat it as a system-class error and
    // re-throw it.
    return error instanceof GraphQLError ? Promise.resolve({
      errors: [error]
    }) : Promise.reject(error);
  }
}



var index$6 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  subscribe: subscribe,
  createSourceEventStream: createSourceEventStream
});

/**
 * Note: This file is autogenerated using "resources/gen-version.js" script and
 * automatically updated by "yarn version" command.
 */

/**
 * A string containing the version of the GraphQL.js library
 */
var version = '14.5.8';
/**
 * An object containing the components of the GraphQL.js version string
 */

var versionInfo = Object.freeze({
  major: 14,
  minor: 5,
  patch: 8,
  preReleaseTag: null
});

/**
 * This is the primary entry point function for fulfilling GraphQL operations
 * by parsing, validating, and executing a GraphQL document along side a
 * GraphQL schema.
 *
 * More sophisticated GraphQL servers, such as those which persist queries,
 * may wish to separate the validation and execution phases to a static time
 * tooling step, and a server runtime step.
 *
 * Accepts either an object with named arguments, or individual arguments:
 *
 * schema:
 *    The GraphQL type system to use when validating and executing a query.
 * source:
 *    A GraphQL language formatted string representing the requested operation.
 * rootValue:
 *    The value provided as the first argument to resolver functions on the top
 *    level type (e.g. the query object type).
 * contextValue:
 *    The context value is provided as an argument to resolver functions after
 *    field arguments. It is used to pass shared information useful at any point
 *    during executing this query, for example the currently logged in user and
 *    connections to databases or other services.
 * variableValues:
 *    A mapping of variable name to runtime value to use for all variables
 *    defined in the requestString.
 * operationName:
 *    The name of the operation to use if requestString contains multiple
 *    possible operations. Can be omitted if requestString contains only
 *    one operation.
 * fieldResolver:
 *    A resolver function to use when one is not provided by the schema.
 *    If not provided, the default field resolver is used (which looks for a
 *    value or method on the source value with the field's name).
 * typeResolver:
 *    A type resolver function to use when none is provided by the schema.
 *    If not provided, the default type resolver is used (which looks for a
 *    `__typename` field or alternatively calls the `isTypeOf` method).
 */

function graphql(argsOrSchema, source, rootValue, contextValue, variableValues, operationName, fieldResolver, typeResolver) {
  var _arguments = arguments;

  /* eslint-enable no-redeclare */
  // Always return a Promise for a consistent API.
  return new Promise(function (resolve) {
    return resolve( // Extract arguments from object args if provided.
    _arguments.length === 1 ? graphqlImpl(argsOrSchema) : graphqlImpl({
      schema: argsOrSchema,
      source: source,
      rootValue: rootValue,
      contextValue: contextValue,
      variableValues: variableValues,
      operationName: operationName,
      fieldResolver: fieldResolver,
      typeResolver: typeResolver
    }));
  });
}
/**
 * The graphqlSync function also fulfills GraphQL operations by parsing,
 * validating, and executing a GraphQL document along side a GraphQL schema.
 * However, it guarantees to complete synchronously (or throw an error) assuming
 * that all field resolvers are also synchronous.
 */

function graphqlSync(argsOrSchema, source, rootValue, contextValue, variableValues, operationName, fieldResolver, typeResolver) {
  /* eslint-enable no-redeclare */
  // Extract arguments from object args if provided.
  var result = arguments.length === 1 ? graphqlImpl(argsOrSchema) : graphqlImpl({
    schema: argsOrSchema,
    source: source,
    rootValue: rootValue,
    contextValue: contextValue,
    variableValues: variableValues,
    operationName: operationName,
    fieldResolver: fieldResolver,
    typeResolver: typeResolver
  }); // Assert that the execution was synchronous.

  if (isPromise(result)) {
    throw new Error('GraphQL execution failed to complete synchronously.');
  }

  return result;
}

function graphqlImpl(args) {
  var schema = args.schema,
      source = args.source,
      rootValue = args.rootValue,
      contextValue = args.contextValue,
      variableValues = args.variableValues,
      operationName = args.operationName,
      fieldResolver = args.fieldResolver,
      typeResolver = args.typeResolver; // Validate Schema

  var schemaValidationErrors = validateSchema(schema);

  if (schemaValidationErrors.length > 0) {
    return {
      errors: schemaValidationErrors
    };
  } // Parse


  var document;

  try {
    document = parse(source);
  } catch (syntaxError) {
    return {
      errors: [syntaxError]
    };
  } // Validate


  var validationErrors = validate(schema, document);

  if (validationErrors.length > 0) {
    return {
      errors: validationErrors
    };
  } // Execute


  return execute({
    schema: schema,
    document: document,
    rootValue: rootValue,
    contextValue: contextValue,
    variableValues: variableValues,
    operationName: operationName,
    fieldResolver: fieldResolver,
    typeResolver: typeResolver
  });
}

exports.$error = index;
exports.$execution = index$1;
exports.$language = index$2;
exports.$languageParser = parser;
exports.$subscription = index$6;
exports.$type = index$3;
exports.$utilities = index$4;
exports.$validation = index$5;
exports.BREAK = BREAK;
exports.BreakingChangeType = BreakingChangeType;
exports.DEFAULT_DEPRECATION_REASON = DEFAULT_DEPRECATION_REASON;
exports.DangerousChangeType = DangerousChangeType;
exports.DirectiveLocation = DirectiveLocation;
exports.FieldsOnCorrectTypeRule = FieldsOnCorrectType;
exports.FragmentsOnCompositeTypesRule = FragmentsOnCompositeTypes;
exports.GraphQLBoolean = GraphQLBoolean;
exports.GraphQLDeprecatedDirective = GraphQLDeprecatedDirective;
exports.GraphQLDirective = GraphQLDirective;
exports.GraphQLEnumType = GraphQLEnumType;
exports.GraphQLError = GraphQLError;
exports.GraphQLFloat = GraphQLFloat;
exports.GraphQLID = GraphQLID;
exports.GraphQLIncludeDirective = GraphQLIncludeDirective;
exports.GraphQLInputObjectType = GraphQLInputObjectType;
exports.GraphQLInt = GraphQLInt;
exports.GraphQLInterfaceType = GraphQLInterfaceType;
exports.GraphQLList = GraphQLList;
exports.GraphQLNonNull = GraphQLNonNull;
exports.GraphQLObjectType = GraphQLObjectType;
exports.GraphQLScalarType = GraphQLScalarType;
exports.GraphQLSchema = GraphQLSchema;
exports.GraphQLSkipDirective = GraphQLSkipDirective;
exports.GraphQLString = GraphQLString;
exports.GraphQLUnionType = GraphQLUnionType;
exports.Kind = Kind;
exports.KnownArgumentNamesRule = KnownArgumentNames;
exports.KnownDirectivesRule = KnownDirectives;
exports.KnownFragmentNamesRule = KnownFragmentNames;
exports.KnownTypeNamesRule = KnownTypeNames;
exports.LoneAnonymousOperationRule = LoneAnonymousOperation;
exports.NoFragmentCyclesRule = NoFragmentCycles;
exports.NoUndefinedVariablesRule = NoUndefinedVariables;
exports.NoUnusedFragmentsRule = NoUnusedFragments;
exports.NoUnusedVariablesRule = NoUnusedVariables;
exports.OverlappingFieldsCanBeMergedRule = OverlappingFieldsCanBeMerged;
exports.PossibleFragmentSpreadsRule = PossibleFragmentSpreads;
exports.ProvidedRequiredArgumentsRule = ProvidedRequiredArguments;
exports.ScalarLeafsRule = ScalarLeafs;
exports.SchemaMetaFieldDef = SchemaMetaFieldDef;
exports.SingleFieldSubscriptionsRule = SingleFieldSubscriptions;
exports.Source = Source;
exports.TokenKind = TokenKind;
exports.TypeInfo = TypeInfo;
exports.TypeKind = TypeKind;
exports.TypeMetaFieldDef = TypeMetaFieldDef;
exports.TypeNameMetaFieldDef = TypeNameMetaFieldDef;
exports.UniqueArgumentNamesRule = UniqueArgumentNames;
exports.UniqueDirectivesPerLocationRule = UniqueDirectivesPerLocation;
exports.UniqueFragmentNamesRule = UniqueFragmentNames;
exports.UniqueInputFieldNamesRule = UniqueInputFieldNames;
exports.UniqueOperationNamesRule = UniqueOperationNames;
exports.UniqueVariableNamesRule = UniqueVariableNames;
exports.ValidationContext = ValidationContext;
exports.ValuesOfCorrectTypeRule = ValuesOfCorrectType;
exports.VariablesAreInputTypesRule = VariablesAreInputTypes;
exports.VariablesInAllowedPositionRule = VariablesInAllowedPosition;
exports.__Directive = __Directive;
exports.__DirectiveLocation = __DirectiveLocation;
exports.__EnumValue = __EnumValue;
exports.__Field = __Field;
exports.__InputValue = __InputValue;
exports.__Schema = __Schema;
exports.__Type = __Type;
exports.__TypeKind = __TypeKind;
exports.assertAbstractType = assertAbstractType;
exports.assertCompositeType = assertCompositeType;
exports.assertDirective = assertDirective;
exports.assertEnumType = assertEnumType;
exports.assertInputObjectType = assertInputObjectType;
exports.assertInputType = assertInputType;
exports.assertInterfaceType = assertInterfaceType;
exports.assertLeafType = assertLeafType;
exports.assertListType = assertListType;
exports.assertNamedType = assertNamedType;
exports.assertNonNullType = assertNonNullType;
exports.assertNullableType = assertNullableType;
exports.assertObjectType = assertObjectType;
exports.assertOutputType = assertOutputType;
exports.assertScalarType = assertScalarType;
exports.assertSchema = assertSchema;
exports.assertType = assertType;
exports.assertUnionType = assertUnionType;
exports.assertValidName = assertValidName;
exports.assertValidSchema = assertValidSchema;
exports.assertWrappingType = assertWrappingType;
exports.astFromValue = astFromValue;
exports.buildASTSchema = buildASTSchema;
exports.buildClientSchema = buildClientSchema;
exports.buildSchema = buildSchema;
exports.coerceInputValue = coerceInputValue;
exports.coerceValue = coerceValue;
exports.concatAST = concatAST;
exports.createLexer = createLexer;
exports.createSourceEventStream = createSourceEventStream;
exports.defaultFieldResolver = defaultFieldResolver;
exports.defaultTypeResolver = defaultTypeResolver;
exports.doTypesOverlap = doTypesOverlap;
exports.execute = execute;
exports.extendSchema = extendSchema;
exports.findBreakingChanges = findBreakingChanges;
exports.findDangerousChanges = findDangerousChanges;
exports.findDeprecatedUsages = findDeprecatedUsages;
exports.formatError = formatError;
exports.getDescription = getDescription;
exports.getDirectiveValues = getDirectiveValues;
exports.getIntrospectionQuery = getIntrospectionQuery;
exports.getLocation = getLocation;
exports.getNamedType = getNamedType;
exports.getNullableType = getNullableType;
exports.getOperationAST = getOperationAST;
exports.getOperationRootType = getOperationRootType;
exports.getVisitFn = getVisitFn;
exports.graphql = graphql;
exports.graphqlSync = graphqlSync;
exports.introspectionFromSchema = introspectionFromSchema;
exports.introspectionQuery = introspectionQuery;
exports.introspectionTypes = introspectionTypes;
exports.isAbstractType = isAbstractType;
exports.isCompositeType = isCompositeType;
exports.isDefinitionNode = isDefinitionNode;
exports.isDirective = isDirective;
exports.isEnumType = isEnumType;
exports.isEqualType = isEqualType;
exports.isExecutableDefinitionNode = isExecutableDefinitionNode;
exports.isInputObjectType = isInputObjectType;
exports.isInputType = isInputType;
exports.isInterfaceType = isInterfaceType;
exports.isIntrospectionType = isIntrospectionType;
exports.isLeafType = isLeafType;
exports.isListType = isListType;
exports.isNamedType = isNamedType;
exports.isNonNullType = isNonNullType;
exports.isNullableType = isNullableType;
exports.isObjectType = isObjectType;
exports.isOutputType = isOutputType;
exports.isRequiredArgument = isRequiredArgument;
exports.isRequiredInputField = isRequiredInputField;
exports.isScalarType = isScalarType;
exports.isSchema = isSchema;
exports.isSelectionNode = isSelectionNode;
exports.isSpecifiedDirective = isSpecifiedDirective;
exports.isSpecifiedScalarType = isSpecifiedScalarType;
exports.isType = isType;
exports.isTypeDefinitionNode = isTypeDefinitionNode;
exports.isTypeExtensionNode = isTypeExtensionNode;
exports.isTypeNode = isTypeNode;
exports.isTypeSubTypeOf = isTypeSubTypeOf;
exports.isTypeSystemDefinitionNode = isTypeSystemDefinitionNode;
exports.isTypeSystemExtensionNode = isTypeSystemExtensionNode;
exports.isUnionType = isUnionType;
exports.isValidJSValue = isValidJSValue;
exports.isValidLiteralValue = isValidLiteralValue;
exports.isValidNameError = isValidNameError;
exports.isValueNode = isValueNode;
exports.isWrappingType = isWrappingType;
exports.lexicographicSortSchema = lexicographicSortSchema;
exports.locatedError = locatedError;
exports.parse = parse;
exports.parseType = parseType;
exports.parseValue = parseValue;
exports.print = print;
exports.printError = printError;
exports.printIntrospectionSchema = printIntrospectionSchema;
exports.printLocation = printLocation;
exports.printSchema = printSchema;
exports.printSourceLocation = printSourceLocation;
exports.printType = printType;
exports.responsePathAsArray = pathToArray;
exports.separateOperations = separateOperations;
exports.specifiedDirectives = specifiedDirectives;
exports.specifiedRules = specifiedRules;
exports.specifiedScalarTypes = specifiedScalarTypes;
exports.stripIgnoredCharacters = stripIgnoredCharacters;
exports.subscribe = subscribe;
exports.syntaxError = syntaxError;
exports.typeFromAST = typeFromAST;
exports.validate = validate;
exports.validateSchema = validateSchema;
exports.valueFromAST = valueFromAST;
exports.valueFromASTUntyped = valueFromASTUntyped;
exports.version = version;
exports.versionInfo = versionInfo;
exports.visit = visit;
exports.visitInParallel = visitInParallel;
exports.visitWithTypeInfo = visitWithTypeInfo;
