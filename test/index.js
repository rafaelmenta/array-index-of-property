var should = require('chai').should(),
    indexOfProperty = require('../index');

describe('Array#indexOfProperty', function() {

  it('should exist', function() {
    Array.prototype.indexOfProperty.should.be.a('function');
  });

  it('should return correct index if value matches', function() {
    var a = [{a : 1}, {b : 3}, {c : 2}, {b : 2}];
    a.indexOfProperty('c', 2).should.equals(2);
  });

  it('should return first found if more than 1 value match', function() {
    var a = [{a : 1}, {b : 1}, {b : 1}];
    a.indexOfProperty('b', 1).should.equal(1);
  });

  it('should return -1 if there is no match', function() {
    var a = [{a : 1}, {b : 2}, {c : 3}];
    a.indexOfProperty('c', 1).should.equals(-1);
  });

  it('should not work for values with no key defined', function() {
    var a = [1, 2, 3];
    a.indexOfProperty('0', 1).should.equals(-1);
  });

  it('should work fine for mixed arrays', function() {
    var a = [1, 'a', {b : 'c'}, ''];
    a.indexOfProperty('b', 'c').should.equals(2);
  });

  it('should find nested properties', function() {
    var a = [{ a : { b : 2}}, { a : { b: 3}}];
    a.indexOfProperty('a.b', 3).should.equals(1);
  })

});
