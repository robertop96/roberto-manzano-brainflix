import './Body.scss';
import { Component } from 'react';
import Video from '../Video/Video';
import VideoInfo from '../VideoInfo/VideoInfo';
import Form from '../Form/Form';
import Comments from '../Comments/Comments';
import NextVideo from '../NextVideo/NextVideo';
import VideoDetails from '../../data/video-details.json';
import axios from 'axios';

const videosFetch =
  'https://project-2-api.herokuapp.com/videos?api_key=110384a1-246f-4eb7-b30e-631184749f49';

export default class Body extends Component {
  state = {
    currentVideo: VideoDetails[0],
    videoList: []
  };

  componentDidMount() {
    console.log('this just rendered');
    axios
      .get(videosFetch)
      .then((response) => {
        this.setState({ videoList: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidUpdate(prevProps) {
    console.log(this.props.match.params.id);
    // console.log(prevProps.match.params.id);
    if (
      this.props.match.params.id !== prevProps.match.params.id &&
      this.props.match.params.id
    ) {
      let id = this.props.match.params.id;
      // console.log(this.props.match.params.id);
      axios
        .get(
          `https://project-2-api.herokuapp.com/videos/${id}?api_key=110384a1-246f-4eb7-b30e-631184749f49`
        )
        .then((response) => {
          this.setState({ currentVideo: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  render() {
    // let id = this.props.match.params.id;
    // console.log(id);

    // let videoFetch = `https://project-2-api.herokuapp.com/videos/${id}?api_key=110384a1-246f-4eb7-b30e-631184749f49`;

    // console.log(this.props.match.params.id);
    return (
      <div>
        <figure className="video">
          <Video currentVideo={this.state.currentVideo} />
        </figure>
        <section className="content">
          <article className="content__video-information">
            <VideoInfo currentVideo={this.state.currentVideo} />
            <Form currentVideo={this.state.currentVideo} />
            <Comments currentVideo={this.state.currentVideo} />
          </article>
          <article className="content__next-video">
            <h3 className="content__next-video--title">Next Video</h3>
            <NextVideo
              currentVideo={this.state.currentVideo}
              videoList={this.state.videoList}
            />
          </article>
        </section>
      </div>
    );
  }
}
