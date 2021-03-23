import './Body.scss';
import { Component } from 'react';
import Video from '../Video/Video';
import VideoInfo from '../VideoInfo/VideoInfo';
import Form from '../Form/Form';
import Comments from '../Comments/Comments';
import NextVideo from '../NextVideo/NextVideo';
import VideoDetails from '../../data/video-details.json';
import moment from 'moment';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

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
    return (
      <div>
        <figure className="video">
          <Video />
        </figure>
        <section className="content">
          <article className="content__video-information">
            <VideoInfo />
            <Form />
            <Comments />
          </article>
          <article className="content__next-video">
            <h3 className="content__next-video--title">Next Video</h3>
            <NextVideo />
          </article>
        </section>
      </div>
    );
  }
}
