const fs = require('fs');
const write = require('../../helpers/writeFile');
const template = require('../../helpers/videoTemplates');
const VideoListLocation = __dirname + '/../../data/videosList.json';
const VideoDetailsLocation = __dirname + '/../../data/videosDetails.json';

const videoPosting = (req, res) => {
  try {
    const { title, description } = req.body;
    fs.readFile(VideoListLocation, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const retrievedVideoList = JSON.parse(data);
        retrievedVideoList.push(template.videoList(title));
        write.writeFile(VideoListLocation, retrievedVideoList);
      }
    });
    fs.readFile(VideoDetailsLocation, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const retrievedDetails = JSON.parse(data);
        retrievedDetails.push(template.videoDetails(title, description));
        write.writeFile(VideoDetailsLocation, retrievedDetails);
        res.send(template.videoList(title));
      }
    });
    console.log(`received at videoPosting`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = videoPosting;
