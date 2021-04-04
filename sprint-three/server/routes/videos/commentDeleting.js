const fs = require('fs');
const VideoDetailsLocation = __dirname + '/../../data/videosDetails.json';
const write = require('../../helpers/writeFile.js');

const deleteComment = (req, res) => {
  try {
    const videoId = req.params.id;
    const commentId = req.params.commentId;
    fs.readFile(VideoDetailsLocation, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const readVideoDetails = JSON.parse(data);
        const requestedVideo = readVideoDetails.find(
          (video) => video.id == videoId
        );
        requestedVideo.comments.map((comment, index) => {
          if (comment.id == commentId) {
            requestedVideo.comments.splice(index, 1);
          }
        });
        write.writeFile(VideoDetailsLocation, readVideoDetails);
        res.send(requestedVideo);
      }
    });
    console.log('received at commentDeleting');
  } catch (err) {
    console.log(err);
  }
};

module.exports = deleteComment;
