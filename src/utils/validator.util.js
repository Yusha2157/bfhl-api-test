const { ALLOWED_KEYS } = require('../constants/keys.constants');

exports.validatePayload = (body) => {
  const keys = Object.keys(body);
  if (keys.length !== 1 || !ALLOWED_KEYS.includes(keys[0])) {
    throw { status: 400, message: 'Invalid payload' };
  }
  return { key: keys[0], value: body[keys[0]] };
};
