(function(global) {

  var indexOfProperty = function(property, value) {
    var length = this.length;
    for (var i = 0; i < length; ++i) {
      if (this[i][property] === value) {
        return i;
      }
    }
    return -1;
  };

  if (!Array.prototype.indexOfProperty) {
    Array.prototype.indexOfProperty = indexOfProperty;
  }

}(this));
