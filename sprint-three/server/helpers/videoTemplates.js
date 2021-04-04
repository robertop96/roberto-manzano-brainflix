const id = require('uniqid');
const videoId = id();

const videoList = (title) => {
  return {
    id: videoId,
    title: title,
    channel: 'Filler Name',
    image: 'https://picsum.photos/500/300?random=1'
  };
};

const videoDetails = (title, description) => {
  return {
    id: videoId,
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

const videoComment = (name, comment) => {
  return {
    name: name,
    comment: comment,
    id: id(),
    likes: 0,
    timestamp: Date.now()
  };
};
module.exports = { videoList, videoDetails, videoComment };
