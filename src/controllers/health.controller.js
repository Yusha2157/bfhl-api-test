const response = require('../utils/response.util');

exports.healthCheck = (req, res) => {
  res.status(200).json(response.success(null));
};
