const router = require('express').Router();
const videosList = require('./videosList');
const videoDetails = require('./videoDetails');
const videoPosting = require('./videoPosting');
const commentPosting = require('./commentPosting');
const commentDeleting = require('./commentDeleting');
const videoLikes = require('./videoLikes');

router.get('/:id', videoDetails);
router.get('/', videosList);
router.post('/:id/comments', commentPosting);
router.post('/', videoPosting);
router.delete('/:id/comments/:commentId', commentDeleting);
router.put('/:id/likes', videoLikes);

module.exports = router;
