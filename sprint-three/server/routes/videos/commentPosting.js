const fs = require('fs');

// File Name and Location
const VideoDetailsLocation = __dirname + '/../data/videosDetails.json';

const postComment = (req, res) => {
  try {
    const TBA = req.body;
  } catch (err) {
    console.log(err);
  }
};

module.exports = postComment;
