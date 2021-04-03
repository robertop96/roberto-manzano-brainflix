// const router = require('express').Router();
const express = require('express');
const router = express.Router();
const fs = require('fs');
const axios = require('axios');
const id = require('uniqid');
// const { response } = require('express');

router.use(express.json());

// URL to the Original API
const videoListInternalURL =
  'https://project-2-api.herokuapp.com/videos?api_key=110384a1-246f-4eb7-b30e-631184749f49';
// File Name and Location
const VideoListLocation = __dirname + '/../data/videosList.json';
const VideoDetailsLocation = __dirname + '/../data/videosDetails.json';

//Write file Function
const writeFile = (location, data) => {
  fs.writeFile(location, JSON.stringify(data), (err) => {
    if (err) {
      console.log(err);
    } else console.log('Files Written.');
  });
};

// Get internal copy of videos information
router.get('/internal', (req, res) => {
  const sendGetRequest = async () => {
    try {
      const resp = await axios.get(videoListInternalURL);
      writeFile(VideoListLocation, resp.data);
    } catch (error) {
      console.log(error);
    }
  };
  sendGetRequest();
  res.send('<h1>File Transferred<h1>');
});

//GET videosList
router.get('/videos', (req, res) => {
  try {
    fs.readFile(VideoListLocation, (err, data) => {
      if (err) {
        console.error(err);
      }
      const videoList = JSON.parse(data);
      res.json(videoList);
      console.log('videoList Sent');
    });
  } catch (error) {
    console.log(error);
  }
});

// GET VideoDetails
router.get('/videos/:id', (req, res) => {
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
    });
  } catch (error) {
    console.log(error);
  }
});

//POST Request
router.post('/videos/', (req, res) => {
  try {
    const { title, description } = req.body;
    //Reads videoList as retrievedVideoList, push Template and writesFile
    fs.readFile(VideoListLocation, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const retrievedVideoList = JSON.parse(data);
        const videoListTemplate = {
          id: id(),
          title: title,
          channel: 'Filler Name',
          image: 'https://picsum.photos/500/300?random=1'
        };
        retrievedVideoList.push(videoListTemplate);
        writeFile(VideoListLocation, retrievedVideoList);
        res.send(videoListTemplate);
      }
    });
    //Reads videoDetails as retrievedDetails, push Template and writesFile
    fs.readFile(VideoDetailsLocation, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const retrievedDetails = JSON.parse(data);
        const VideoDetailsTemplate = {
          id: id(),
          title: title,
          channel: 'Red Cow',
          image: 'https://picsum.photos/500/300?random=1',
          description: description,
          views: 0,
          likes: 0,
          duration: 'Not defined',
          video: 'https://picsum.photos/500/300?random=1',
          timestamp: Date.now(),
          comments: []
        };
        retrievedDetails.push(VideoDetailsTemplate);
        writeFile(VideoDetailsLocation, retrievedDetails);
      }
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
