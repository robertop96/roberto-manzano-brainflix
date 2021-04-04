const router = require('express').Router();
const videosList = require('./videosList');
const videoDetails = require('./videoDetails');
const videoPosting = require('./videoPosting');
const commentPosting = require('./commentPosting');
const commentDeleting = require('./commentDeleting');

router.get('/:id', videoDetails);
router.delete('/:id/comments/:commentId', commentDeleting);
router.post('/:id/comments', commentPosting);
router.get('/', videosList);
router.post('/', videoPosting);

module.exports = router;
