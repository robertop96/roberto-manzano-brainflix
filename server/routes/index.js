const router = require('express').Router();
const videos = require('./videos');
const internal = require('./Internal');

router.use('/api/videos', videos);
router.use('/api/internal', internal);

module.exports = router;
