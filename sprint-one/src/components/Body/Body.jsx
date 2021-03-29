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
    currentVideo: VideoDetails[0]
  };
  handleNextVideo = (id) => {
    let selectedVideo = VideoDetails.find((video) => video.id === id);
    this.setState({
      currentVideo: selectedVideo
    });
  };

  render() {
    const { currentVideo } = this.state;
    return (
      <main>
        <figure className="video">
          <Video image={currentVideo.image} />
        </figure>
        <section className="content">
          <article className="content__video-information">
            <VideoInfo
              title={currentVideo.title}
              channel={currentVideo.channel}
              timestamp={currentVideo.timestamp}
              views={currentVideo.views}
              likes={currentVideo.likes}
              description={currentVideo.description}
            />
            <Form comments={currentVideo.comments} />
            {currentVideo.comments.map((comment, index) => {
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
            {VideoDetails.filter(
              (video) => !(video === this.state.currentVideo)
            ).map((video) => {
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
