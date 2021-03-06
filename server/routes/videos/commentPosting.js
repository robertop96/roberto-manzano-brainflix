const fs = require('fs');
const write = require('../../helpers/writeFile');
const template = require('../../helpers/videoTemplates');
const VideoDetailsLocation = __dirname + '/../../data/videosDetails.json';

const postComment = (req, res) => {
  try {
    const { comment } = req.body;
    fs.readFile(VideoDetailsLocation, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const readVideoDetails = JSON.parse(data);
        const requestedVideo = readVideoDetails.find(
          (video) => video.id == req.params.id
        );
        requestedVideo.comments.push(template.videoComment(comment));
        write.writeFile(VideoDetailsLocation, readVideoDetails);
        res.send(requestedVideo);
      }
    });
    console.log('received at commentPosting');
  } catch (err) {
    console.log(err);
  }
};

module.exports = postComment;
