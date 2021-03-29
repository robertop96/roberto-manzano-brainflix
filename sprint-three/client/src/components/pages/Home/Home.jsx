import './Home.scss';
import { Component } from 'react';
import Video from '../../Video/Video';
import VideoInfo from '../../VideoInfo/VideoInfo';
import Form from '../../Form/Form';
import Comments from '../../Comments/Comments';
import NextVideo from '../../NextVideo/NextVideo';
import Loading from '../../../components/Loader';
import axios from 'axios';

axios.defaults.baseURL = 'https://project-2-api.herokuapp.com/videos';
const DefaultVideoURL = '1af0jruup5gu';
const key = '?api_key=110384a1-246f-4eb7-b30e-631184749f49';
const Key2 = '110384a1-246f-4eb7-b30e-631184749f49';

export default class Home extends Component {
  state = {
    currentVideo: null,
    videoList: null
  };

  //METHOD TO MAKE AXIOS CALLS AND SET STATE.
  axiosRequest(requestType, apiUrl, state) {
    axios({
      method: requestType,
      url: apiUrl
    })
      .then((response) => {
        this.setState({ [state]: response.data });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  componentDidMount() {
    const SelectedVideoID = this.props.match.params.id;

    this.axiosRequest('get', key, 'videoList');
    if (!SelectedVideoID) {
      this.axiosRequest('get', `/${DefaultVideoURL}${key}`, 'currentVideo');
    } else {
      this.axiosRequest('get', `${SelectedVideoID}${key}`, 'currentVideo');
    }
  }

  componentDidUpdate(prevProps) {
    const SelectedVideoID = this.props.match.params.id;
    const PreviousVideoID = prevProps.match.params.id;

    if (SelectedVideoID !== PreviousVideoID && SelectedVideoID) {
      this.axiosRequest('get', `${SelectedVideoID}${key}`, 'currentVideo');
    } else if (SelectedVideoID !== PreviousVideoID && !SelectedVideoID) {
      this.axiosRequest('get', `${DefaultVideoURL}${key}`, 'currentVideo');
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const CurrentVidId = this.state.currentVideo.id;

    axios
      .post(`${CurrentVidId}/comments${key}`, {
        name: 'BrainStation Man',
        comment: e.target.comment.value
      })
      .then(() => {
        this.axiosRequest('get', `${CurrentVidId}${key}`, 'currentVideo');
      })
      .catch((error) => {
        console.log(error.message);
      });
    e.target.reset();
  };

  handleDelete = (commentID) => {
    const CurrentVidId = this.state.currentVideo.id;

    let confirm = window.confirm(
      'Are you sure you want to DELETE this message?'
    );
    if (confirm) {
      axios
        .delete(`${CurrentVidId}/comments/${commentID}${key}`)
        .then(() => {
          this.axiosRequest('get', `${CurrentVidId}${key}`, 'currentVideo');
        })
        .catch((error) => console.log(error.message));
    }
  };
  render() {
    return (
      <>
        {this.state.currentVideo && this.state.videoList ? (
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
        ) : (
          <Loading />
        )}
      </>
    );
  }
}
