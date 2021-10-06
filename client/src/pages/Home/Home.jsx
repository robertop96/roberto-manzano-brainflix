import './Home.scss';
import { Component } from 'react';
import Video from '../../components/Video/Video';
import VideoInfo from '../../components/VideoInfo/VideoInfo';
import Form from '../../components/Form/Form';
import Comments from '../../components/Comments/Comments';
import NextVideo from '../../components/NextVideo/NextVideo';
import Loading from '../../components/Loader/';
import axios from 'axios';

export default class Home extends Component {
  state = {
    currentVideo: null,
    videoList: null
  };

  async axios(req, url, state) {
    try {
      let res = await axios({
        method: req,
        url: url
      });
      this.setState({ [state]: res.data });
    } catch (err) {
      console.log(err.message);
    }
  }

  async axiosPost(url, body, state) {
    try {
      let res = await axios.post(url, body);
      this.setState({ [state]: res.data });
    } catch (err) {
      console.log(err.message);
    }
  }

  componentDidMount() {
    const videoId = this.props.match.params.id || '1af0jruup5gu';
    const url = `/api/videos/${videoId}`;
    this.axios('get', '/api/videos', 'videoList');
    this.axios('get', url, 'currentVideo');
  }

  componentDidUpdate(prevProps) {
    const videoId = this.props.match.params.id || '1af0jruup5gu';
    const url = `/api/videos/${videoId}`;
    const prevUrl = prevProps.match.url;
    const currentUrl = this.props.match.url;
    if (currentUrl !== prevUrl) {
      this.axios('get', url, 'currentVideo');
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const commentEndpoint = `/api/videos/${this.state.currentVideo.id}/comments`;
    const formData = new FormData(e.target);
    const formDataObj = Object.fromEntries(formData);
    this.axiosPost(commentEndpoint, formDataObj, 'currentVideo');
    e.target.reset();
  };

  handleDelete = (commentID) => {
    const deleteEndpoint = `/api/videos/${this.state.currentVideo.id}/comments/${commentID}`;
    let confirm = window.confirm(
      'Are you sure you want to DELETE this message?'
    );
    if (confirm) {
      this.axios('delete', deleteEndpoint, 'currentVideo');
    }
  };
  handleLikes = () => {
    const putEndPoint = `/api/videos/${this.state.currentVideo.id}/likes`;
    this.axios('put', putEndPoint, 'currentVideo');
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
