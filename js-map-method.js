Array.prototype.map = function (callback, thisArg) {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    arr.push(callback.call(thisArg, this[i], i, this));
  }
  return arr;
};
