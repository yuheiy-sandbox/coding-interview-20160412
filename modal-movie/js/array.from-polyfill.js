if (!Array.from) {
  Array.from = function (obj) {
    return Array.prototype.slice.call(obj);
  };
}
