const fs = require('fs');
const VideoDetailsLocation = __dirname + '/../../data/videosDetails.json';
const write = require('../../helpers/writeFile');

const videoLikes = (req, res) => {
  try {
    fs.readFile(VideoDetailsLocation, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const readVideoDetails = JSON.parse(data);
        const requestedVideo = readVideoDetails.find(
          (video) => video.id == req.params.id
        );
        requestedVideo.likes++;
        write.writeFile(VideoDetailsLocation, readVideoDetails);
        res.send(requestedVideo);
      }
    });
    console.log('received at videoLikes');
  } catch (err) {
    console.log(err);
  }
};

module.exports = videoLikes;
