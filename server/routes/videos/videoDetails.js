const fs = require('fs');
const VideoDetailsLocation = __dirname + '/../../data/videosDetails.json';

const videoDetails = (req, res) => {
  try {
    fs.readFile(VideoDetailsLocation, (err, data) => {
      if (err) {
        console.error(err);
      }
      const videoDetails = JSON.parse(data);
      const requestedVideo = videoDetails.find(
        (video) => video.id == req.params.id
      );
      res.json(requestedVideo);
      console.log(`received at videoDetails.js`);
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = videoDetails;
