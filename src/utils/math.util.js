exports.gcd = (a, b) => (b === 0 ? a : exports.gcd(b, a % b));

