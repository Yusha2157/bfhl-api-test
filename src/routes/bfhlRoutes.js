const router = require('express').Router();
const bfhlController = require('../controllers/bfhl.controller');

router.post('/', bfhlController.handleRequest);

module.exports = router;
