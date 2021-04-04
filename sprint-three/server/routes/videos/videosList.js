const fs = require('fs');
const VideoListLocation = __dirname + '/../../data/videosList.json';

const videosList = (req, res) => {
  try {
    fs.readFile(VideoListLocation, (err, data) => {
      if (err) {
        console.error(err);
      }
      const videoList = JSON.parse(data);
      res.json(videoList);
      console.log(`received at videosList.js`);
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = videosList;
