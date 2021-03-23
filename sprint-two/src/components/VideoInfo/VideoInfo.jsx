import './videoInfo.scss';
import viewsIcon from '../../assets/Icons/Icon-views.svg';
import likesIcon from '../../assets/Icons/Icon-likes.svg';
import moment from 'moment';
import VideoDetails from "../../data/video-details.json"


function VideoInfo() {
  const homeVideo = VideoDetails[0];
  return (
    <article className="video-info">
      <h1 className="video-info__title">{homeVideo.title}</h1>
      <div className="video-info__social">
        <article className="video-info__channel">
          <h3 className="video-info__channel--name"> By {homeVideo.channel}</h3>
          <p className="video-info__channel--timestamp">{moment(homeVideo.timestamp).format('L')}</p>
        </article>
        <article className="video-info__social-media">
          <img className="video-info__social-media--viewsIcon" src={viewsIcon} alt="" />
          <p className="video-info__social-media--views">{homeVideo.views}</p>
          <img className="video-info__social-media--likesIcon" src={likesIcon} alt="" />
          <p className="video-info__social-media--likes">{homeVideo.likes}</p>
        </article>
      </div>
      <div className="video-info__description">
        <p className="video-info__description--text">{homeVideo.description}</p>
      </div>
    </article>
  );
}

export default VideoInfo;
