import './Body.scss';
import { Component } from 'react';
import Video from '../Video/Video';
import VideoInfo from '../VideoInfo/VideoInfo';
import Form from '../Form/Form';
import Comments from '../Comments/Comments';
import NextVideo from '../NextVideo/NextVideo';
import VideoDetails from '../../data/video-details.json';
import VideoList from '../../data/videos.json';
import moment from 'moment';

export default class Body extends Component {
  state = {
    videos: VideoDetails[0],
    sideVideos: VideoList,
  };

  handleNextVideo = (event) => {
    let id = event.target.id;
    let selectedVideo = VideoDetails.find((video) => video.id === id);
    let newSideVideo = VideoList.filter((video) => !(video.id === id));
    this.setState({
      videos: selectedVideo,
      sideVideos: newSideVideo,
    });
  };

  render() {
    const { videos, sideVideos } = this.state;
    return (
      <section className="currentVideo">
        <Video image={videos.image} />
        <VideoInfo
          title={videos.title}
          channel={videos.channel}
          timestamp={videos.timestamp}
          views={videos.views}
          likes={videos.likes}
          description={videos.description}
        />
        <Form comments={videos.comments} />
        {videos.comments.map((comment, index) => {
          comment.image = 'https://loremflickr.com/48/48';
          comment.date = moment.unix(comment.timestamp / 1000).fromNow();
          return <Comments key={index} image={comment.image} name={comment.name} date={comment.date} comment={comment.comment} />;
        })}
        <section className="nextVideo">
          <h3 className="nextVideo__title">Next Video</h3>
          {sideVideos.map((video, index) => {
            return (
              <NextVideo
                handleNextVideo={this.handleNextVideo}
                key={video.id}
                id={video.id}
                image={video.image}
                title={video.title}
                channel={video.channel}
              />
            );
          })}
        </section>
      </section>
    );
  }
}
