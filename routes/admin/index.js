const express = require('express');
var router = express.Router();

const { renderIndex } = require('../../controllers/indexController');
const loginMiddleware = require('../../middlewares/checkLogin');

router.get('/', loginMiddleware,renderIndex);

module.exports = router;