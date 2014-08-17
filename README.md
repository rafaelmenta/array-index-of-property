array-index-of-property [![Build Status](https://travis-ci.org/rafaelmenta/array-index-of-property.svg?branch=master)](https://travis-ci.org/rafaelmenta/array-index-of-property)
=======================

A helpful function to find object index by one of its properties

---

## Installation

  - Node.js : `npm install array-index-of-property --save-dev`
  - Bower : `bower install array-index-of-property --save`

## Usage

  This package adds a `indexOfProperty` function to retrieve an object index given a value for any of its properties.

 ```javascript
  var a = [{a : 0}, {a : 1}];
  console.log(a.indexOfProperty('a', 1); // Returns 1
  console.log(a.indexOfProperty('a', 2); // Returns -1
 ```
