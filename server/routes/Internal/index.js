const router = require('express').Router();
const internal = require('./internal');

router.get('/', internal);

module.exports = router;
