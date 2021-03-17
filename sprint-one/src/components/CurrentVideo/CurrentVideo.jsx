import './CurrentVideo.scss';
import { Component } from 'react';
import Video from '../Video/Video';
import VideoInfo from '../VideoInfo/VideoInfo';
import Form from '../Form/Form';
import Comments from '../Comments/Comments';
import NextVideo from '../NextVideo/NextVideo';
import videoDetails from '../../data/video-details.json';
import VideoList from '../../data/videos.json';
import moment from 'moment';

export default class CurrentVideo extends Component {
  state = {
    videos: videoDetails,
    defaultVideo: 0,
    sideVideos: VideoList,
  };

  handleNextVideo = () => {
    this.setState({
      defaultVideo: this.state.defaultVideo + 1,
    });
  };

  render() {
    const { videos, defaultVideo, sideVideos } = this.state;
    return (
      <section className="currentVideo">
        <Video image={videos[defaultVideo].image} />
        <button onClick={this.handleNextVideo}>Click Me</button>
        <VideoInfo
          title={videos[defaultVideo].title}
          channel={videos[defaultVideo].channel}
          timestamp={videos[defaultVideo].timestamp}
          views={videos[defaultVideo].views}
          likes={videos[defaultVideo].likes}
          description={videos[defaultVideo].description}
        />
        <Form comments={videos[defaultVideo].comments} />
        {videos[defaultVideo].comments.map((comment, index) => {
          comment.image = 'https://loremflickr.com/48/48';
          comment.date = moment.unix(comment.timestamp / 1000).fromNow();
          return <Comments key={index} image={comment.image} name={comment.name} date={comment.date} comment={comment.comment} />;
        })}
        <section>
          <h3>Next Video</h3>
          {sideVideos.map((video, index) => {
            return <NextVideo key={index} image={video.image} title={video.title} channel={video.channel} />;
          })}
        </section>
      </section>
    );
  }
}
