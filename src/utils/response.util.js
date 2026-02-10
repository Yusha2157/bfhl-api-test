module.exports = {
  success: (data) => {
    const res = {
      is_success: true,
      official_email: process.env.OFFICIAL_EMAIL
    };

    if (data !== undefined && data !== null) {
      res.data = data;
    }

    return res;
  },

  error: (msg) => ({
    is_success: false,
    error: msg
  })
};
