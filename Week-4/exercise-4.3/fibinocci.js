const Fibonacci = {
  [Symbol.iterator]: function () {
    var i = 1;
    var n = 5;
    var done = false;
    var old = 0;
    var newValue = 1;
    var mynum = 0;
    return {
      next() {
        if (i++ <= n) {
          [old, newValue] = [newValue, old + newValue];
          return {
            value: old,
            done: false,
          };
        } else {
          return {
            done: true,
          };
        }
      },
    };
  },
};
console.log(...Fibonacci);
