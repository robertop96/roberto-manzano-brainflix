import './Home.scss';
import { Component } from 'react';
import Video from '../../components/Video/Video';
import VideoInfo from '../../components/VideoInfo/VideoInfo';
import Form from '../../components/Form/Form';
import Comments from '../../components/Comments/Comments';
import NextVideo from '../../components/NextVideo/NextVideo';
import Loading from '../../components/Loader/';
import axios from 'axios';

const defaultVideoURL = `/videos/1af0jruup5gu`;

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
    const selectedVideoID = this.props.match.params.id;
    const videoUrl = `/videos/${selectedVideoID}`;

    this.axiosRequest('get', '/videos', 'videoList');
    if (!selectedVideoID) {
      this.axiosRequest('get', defaultVideoURL, 'currentVideo');
    } else {
      this.axiosRequest('get', videoUrl, 'currentVideo');
    }
    console.log(defaultVideoURL);
  }

  componentDidUpdate(prevProps) {
    const selectedVideoID = this.props.match.params.id;
    const previousVideoID = prevProps.match.params.id;
    const videoUrl = `/videos/${selectedVideoID}`;

    if (selectedVideoID !== previousVideoID && selectedVideoID) {
      this.axiosRequest('get', videoUrl, 'currentVideo');
    } else if (selectedVideoID !== previousVideoID && !selectedVideoID) {
      this.axiosRequest('get', defaultVideoURL, 'currentVideo');
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const currentVidId = this.state.currentVideo.id;
    const commentEndpoint = `/videos/${currentVidId}/comments`;
    const currentVideo = `/videos/${currentVidId}`;

    axios
      .post(commentEndpoint, {
        name: 'BrainStation Man',
        comment: e.target.comment.value
      })
      .then(() => {
        this.axiosRequest('get', currentVideo, 'currentVideo');
      })
      .catch((error) => {
        console.log(error.message);
      });
    e.target.reset();
  };

  handleDelete = (commentID) => {
    const currentVidId = this.state.currentVideo.id;
    const deleteEndpoint = `/videos/${currentVidId}/comments/${commentID}`;
    const currentVideo = `/videos/${currentVidId}`;

    let confirm = window.confirm(
      'Are you sure you want to DELETE this message?'
    );
    if (confirm) {
      axios
        .delete(deleteEndpoint)
        .then(() => {
          this.axiosRequest('get', currentVideo, 'currentVideo');
        })
        .catch((error) => console.log(error.message));
    }
  };
  handleLikes = () => {
    const currentVideoId = this.state.currentVideo.id;
    const currentVideo = `/videos/${currentVideoId}`;
    const putEndPoint = `/videos/${currentVideoId}/likes`;
    axios.put(putEndPoint).then(() => {
      this.axiosRequest('get', currentVideo, 'currentVideo');
    });
  };

  render() {
    return (
      <>
        {this.state.currentVideo && this.state.videoList ? (
          <>
            <Video currentVideo={this.state.currentVideo} />
            <section className="content">
              <article className="content__video-information">
                <VideoInfo
                  currentVideo={this.state.currentVideo}
                  handleLikes={this.handleLikes}
                />
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
