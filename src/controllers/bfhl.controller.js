const { validatePayload } = require('../utils/validator.util');
const response = require('../utils/response.util');

const fibonacci = require('../services/fibonacci.service');
const prime = require('../services/prime.service');
const lcm = require('../services/lcm.service');
const hcf = require('../services/hcf.service');
const ai = require('../services/ai.service');

exports.handleRequest = async (req, res, next) => {
  try {
    const { key, value } = validatePayload(req.body);

    let data;
    switch (key) {
      case 'fibonacci': data = fibonacci(value); break;
      case 'prime': data = prime(value); break;
      case 'lcm': data = lcm(value); break;
      case 'hcf': data = hcf(value); break;
      case 'AI': data = await ai(value); break;
    }

    res.status(200).json(response.success(data));
  } catch (err) {
    next(err);
  }
};
