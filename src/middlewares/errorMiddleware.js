module.exports = (err, req, res, next) => {
  res.status(err.status || 500).json({
    is_success: false,
    error: err.message || 'Internal Server Error'
  });
};
