import './Body.scss';
import { Component } from 'react';
import Video from '../Video/Video';
import VideoInfo from '../VideoInfo/VideoInfo';
import Form from '../Form/Form';
import Comments from '../Comments/Comments';
import NextVideo from '../NextVideo/NextVideo';
import axios from 'axios';

const videosFetch =
  'https://project-2-api.herokuapp.com/videos?api_key=110384a1-246f-4eb7-b30e-631184749f49';

export default class Body extends Component {
  state = {
    currentVideo: null,
    videoList: null
  };

  componentDidMount() {
    axios
      .get(videosFetch)
      .then((response) => {
        this.setState({ videoList: response.data });
      })
      .then(() => {
        axios
          .get(
            `https://project-2-api.herokuapp.com/videos/1af0jruup5gu?api_key=110384a1-246f-4eb7-b30e-631184749f49`
          )
          .then((response) => {
            this.setState({ currentVideo: response.data });
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  /* 
  this.props.match.params.id IS CREATED WHEN nextVideo FILTERS AND MAPS TO CREATE THE VIDEO LIST INSIDE THE Link route.
  */
  componentDidUpdate(prevProps) {
    if (
      // IF MY CURRENT id IS DIFFERENT THAN MY prevProps id AND MY CURRENT id IS NOT false (UNIDENTIFIED) THEN...
      this.props.match.params.id !== prevProps.match.params.id &&
      this.props.match.params.id
    ) {
      // GETS AN SPECIFIC VIDEO USING THE ID OF THE PAGE WE HAVE CLICKED IN THE LINK.
      let id = this.props.match.params.id;
      axios
        .get(
          `https://project-2-api.herokuapp.com/videos/${id}?api_key=110384a1-246f-4eb7-b30e-631184749f49`
        )
        .then((response) => {
          this.setState({ currentVideo: response.data });
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else if (
      // IF MY CURRENT id IS DIFFERENT THAN MY prevProps id && AND MY CURRENT id IS false (UNIDENTIFIED) THEN...
      this.props.match.params.id !== prevProps.match.params.id &&
      !this.props.match.params.id
    ) {
      axios
        // LOADS DEFAULT IMAGE.
        .get(
          `https://project-2-api.herokuapp.com/videos/1af0jruup5gu?api_key=110384a1-246f-4eb7-b30e-631184749f49`
        )
        .then((response) => {
          this.setState({ currentVideo: response.data });
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }

  render() {
    return (
      <>
        {this.state.currentVideo && this.state.videoList && (
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
        )}
      </>
    );
  }
}
