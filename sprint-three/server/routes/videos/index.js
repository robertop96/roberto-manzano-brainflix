const router = require('express').Router();
const videosList = require('./videosList');
const videoDetails = require('./videoDetails');
const videoPosting = require('./videoPosting');
const commentPosting = require('./commentPosting');

router.get('/:id', videoDetails);
router.post('/:id/comments', commentPosting);
router.get('/', videosList);
router.post('/', videoPosting);

module.exports = router;
