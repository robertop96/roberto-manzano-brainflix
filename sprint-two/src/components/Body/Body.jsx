import './Body.scss';
import { Component } from 'react';
import Video from '../Video/Video';
import VideoInfo from '../VideoInfo/VideoInfo';
import Form from '../Form/Form';
import Comments from '../Comments/Comments';
import NextVideo from '../NextVideo/NextVideo';
import axios from 'axios';

const key = '?api_key=110384a1-246f-4eb7-b30e-631184749f49';
const videosFetch =
  'https://project-2-api.herokuapp.com/videos?api_key=110384a1-246f-4eb7-b30e-631184749f49';

export default class Body extends Component {
  state = {
    currentVideo: null,
    videoList: null
  };

  AxiosGetVideoList(requestType, apiUrl) {
    axios({
      method: requestType,
      url: apiUrl
    })
      .then((response) => {
        this.setState({ videoList: response.data });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  AxiosGetCurrentVideo(requestType, apiUrl) {
    axios({
      method: requestType,
      url: apiUrl
    })
      .then((response) => {
        this.setState({ currentVideo: response.data });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
  // postAxios1(requestType, apiUrl, state) {
  //   axios({
  //     method: requestType,
  //     url: apiUrl
  //   })
  //     .then((response) => {
  //       this.setState({ state: { [state]: response.data } });
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // }

  componentDidMount() {
    this.AxiosGetVideoList('get', videosFetch);
    if (!this.props.match.params.id) {
      let getLink = `https://project-2-api.herokuapp.com/videos/1af0jruup5gu${key}`;
      this.AxiosGetCurrentVideo('get', getLink);
    } else {
      let id = this.props.match.params.id;
      let getLink = `https://project-2-api.herokuapp.com/videos/${id}${key}`;
      this.AxiosGetCurrentVideo('get', getLink);
    }
  }
  //this.props.match.params.id IS CREATED WHEN nextVideo FILTERS AND MAPS TO CREATE THE VIDEO LIST INSIDE THE Link route.
  componentDidUpdate(prevProps) {
    if (
      // IF MY CURRENT id IS DIFFERENT THAN MY prevProps id AND MY CURRENT id IS NOT false (UNIDENTIFIED) THEN...
      this.props.match.params.id !== prevProps.match.params.id &&
      this.props.match.params.id
    ) {
      // GETS AN SPECIFIC VIDEO USING THE ID OF THE PAGE WE HAVE CLICKED IN THE LINK.
      let id = this.props.match.params.id;
      let getLink = `https://project-2-api.herokuapp.com/videos/${id}${key}`;
      this.AxiosGetCurrentVideo('get', getLink);
    } else if (
      // IF MY CURRENT id IS DIFFERENT THAN MY prevProps id && AND MY CURRENT id IS false (UNIDENTIFIED) THEN...
      this.props.match.params.id !== prevProps.match.params.id &&
      !this.props.match.params.id
    ) {
      let getLink = `https://project-2-api.herokuapp.com/videos/1af0jruup5gu${key}`;
      this.AxiosGetCurrentVideo('get', getLink);
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const id = this.state.currentVideo.id;
    axios
      .post(`https://project-2-api.herokuapp.com/videos/${id}/comments${key}`, {
        name: 'BrainStation Man',
        comment: e.target.comment.value
      })
      .then(() => {
        let getLink = `https://project-2-api.herokuapp.com/videos/${id}${key}`;
        this.AxiosGetCurrentVideo('get', getLink);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  handleDelete = (commentID) => {
    const id = this.state.currentVideo.id;
    // const commentID = this.state.currentVideo;
    // console.log(videoID);
    // console.log(commentID);
    // console.log(key);
    axios
      .delete(
        `https://project-2-api.herokuapp.com/videos/${id}/comments/${commentID}${key}`
      )
      .then(() => {
        let getLink = `https://project-2-api.herokuapp.com/videos/${id}${key}`;
        this.AxiosGetCurrentVideo('get', getLink);
      })
      .catch((error) => console.log(error.message));
  };

  render() {
    console.log(this.props);
    return (
      <>
        {this.state.currentVideo && this.state.videoList && (
          <>
            <Video currentVideo={this.state.currentVideo} />
            <section className="content">
              <article className="content__video-information">
                <VideoInfo currentVideo={this.state.currentVideo} />
                <Form
                  currentVideo={this.state.currentVideo}
                  handleSubmit={this.handleSubmit}
                />
                <Comments
                  currentVideo={this.state.currentVideo}
                  handleDelete={this.handleDelete}
                />
              </article>
              <article className="content__next-video">
                <NextVideo
                  currentVideo={this.state.currentVideo}
                  videoList={this.state.videoList}
                />
              </article>
            </section>
          </>
        )}
      </>
    );
  }
}
