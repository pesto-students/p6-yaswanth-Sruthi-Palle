function add(...args) {
  return args.reduce((prev, current) => prev + current, 0);
}

const memoize = (fn) => {
  let cache = {};
  return (...args) => {
    if (args.toString() in cache) {
      console.log("in cache");
      console.log(cache[args.toString()]);
    } else {
      console.log("calculated");
      const result = fn(...args);
      cache[args.toString()] = result;
      console.log(result);
    }
  };
};
const memoizeAdd = memoize(add);
memoizeAdd(100, 100);
memoizeAdd(100);
memoizeAdd(100, 200);
memoizeAdd(100, 100);
