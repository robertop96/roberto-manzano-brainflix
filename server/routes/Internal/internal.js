const axios = require('axios');
const write = require('../../helpers/writeFile');

// URL to the Original API
const videoListInternalURL =
  'https://project-2-api.herokuapp.com/videos?api_key=110384a1-246f-4eb7-b30e-631184749f49';
// File Name and Location
const VideoListLocation = __dirname + '/../../data/videosList.json';

// Get internal copy of videos information
const internal = (req, res) => {
  const sendGetRequest = async () => {
    try {
      const resp = await axios.get(videoListInternalURL);
      write.writeFile(VideoListLocation, resp.data);
      console.log('received at internalCopy');
      res.send('<h1>File Transferred<h1>');
    } catch (error) {
      console.log(error);
    }
  };
  sendGetRequest();
};

module.exports = internal;
