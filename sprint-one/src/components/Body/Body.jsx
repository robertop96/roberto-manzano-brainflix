import './Body.scss';
import { Component } from 'react';
import Video from '../Video/Video';
import VideoInfo from '../VideoInfo/VideoInfo';
import Form from '../Form/Form';
import Comments from '../Comments/Comments';
import NextVideo from '../NextVideo/NextVideo';
import VideoDetails from '../../data/video-details.json';
import moment from 'moment';

export default class Body extends Component {
  state = {
    videos: VideoDetails[0],
  };
  handleNextVideo = (id) => {
    let selectedVideo = VideoDetails.find((video) => video.id === id);
    this.setState({
      videos: selectedVideo,
    });
  };

  render() {
    const { videos } = this.state;
    return (
      <main>
        <figure className="video">
          <Video image={videos.image} />
        </figure>
        <section className="content">
          <article className="content__video-information">
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
              return (
                <Comments
                  key={index}
                  image={(comment.image = 'https://loremflickr.com/48/48')}
                  name={comment.name}
                  date={moment.unix(comment.timestamp / 1000).fromNow()}
                  comment={comment.comment}
                />
              );
            })}
          </article>
          <article className="content__next-video">
            <h3 className="content__next-video--title">Next Video</h3>
            {VideoDetails.filter((object) => !(object === this.state.videos)).map((video, index) => {
              return (
                <NextVideo
                  handleNextVideo={() => {
                    this.handleNextVideo(video.id);
                  }}
                  key={video.id}
                  id={video.id}
                  image={video.image}
                  title={video.title}
                  channel={video.channel}
                />
              );
            })}
          </article>
        </section>
      </main>
    );
  }
}
