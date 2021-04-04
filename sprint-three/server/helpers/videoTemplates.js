const id = require('uniqid');
const videoId = id();
// const staticImage = require(__dirname + '../public/images/Upload-video-preview.jpg');

const videoList = (title) => {
  return {
    id: videoId,
    title: title,
    channel: 'Filler Name',
    image: 'http://localhost:5050/preview.jpg'
  };
};

const videoDetails = (title, description) => {
  return {
    id: videoId,
    title: title,
    channel: 'Filler Name',
    image: 'http://localhost:5050/preview.jpg',
    description: description,
    views: 0,
    likes: 0,
    duration: 'Not defined',
    video: 'http://localhost:5050/preview.jpg',
    timestamp: Date.now(),
    comments: []
  };
};

const videoComment = (comment) => {
  return {
    name: 'BrainStation Stranger',
    comment: comment,
    id: id(),
    likes: 0,
    timestamp: Date.now()
  };
};
module.exports = { videoList, videoDetails, videoComment };
