(function(global) {

  var indexOfProperty = function(property, value) {
    var length = this.length;
    var properties = property.split('.');
    for (var i = 0; i < length; ++i) {
      var item = properties.reduce(function(soFar, prop) {
        return soFar[prop];
      }, this[i]);

      if (item === value) {
        return i;
      }
    }
    return -1;
  };

  if (!Array.prototype.indexOfProperty) {
    Object.defineProperty(Array.prototype, 'indexOfProperty', {
      enumerable: false,
      writable: true,
      value: indexOfProperty
    });
  }

}(this));
