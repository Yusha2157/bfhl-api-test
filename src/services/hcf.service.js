const { gcd } = require('../utils/math.util');

module.exports = (arr) =>
  arr.reduce((a, b) => gcd(a, b));
