const id = require('uniqid');

const videoList = (title) => {
  return {
    id: id(),
    title: title,
    channel: 'Filler Name',
    image: 'https://picsum.photos/500/300?random=1'
  };
};

const videoDetails = (title, description) => {
  return {
    id: id(),
    title: title,
    channel: 'Filler Name',
    image: 'https://picsum.photos/500/300?random=1',
    description: description,
    views: 0,
    likes: 0,
    duration: 'Not defined',
    video: 'https://picsum.photos/500/300?random=1',
    timestamp: Date.now(),
    comments: []
  };
};

module.exports = { videoList, videoDetails };
