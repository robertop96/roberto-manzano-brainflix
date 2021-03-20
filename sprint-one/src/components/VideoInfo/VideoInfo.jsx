import './videoInfo.scss';
import viewsIcon from '../../assets/Icons/Icon-views.svg';
import likesIcon from '../../assets/Icons/Icon-likes.svg';
import moment from 'moment';

function VideoInfo({ title, channel, timestamp, views, likes, description }) {
  return (
    <article className="video-info">
      <h1 className="video-info__title">{title}</h1>
      <article className="video-info__left">
        <h3 className="video-info__left--channel"> By {channel}</h3>
        <p className="video-info__left--timestamp">{moment(timestamp).format('L')}</p>
      </article>
      <article className="video-info__right">
        <img className="video-info__right--viewsIcon" src={viewsIcon} alt="" />
        <p className="video-info__right--views">{views}</p>
        <img className="video-info__right--likesIcon" src={likesIcon} alt="" />
        <p className="video-info__right--likes">{likes}</p>
      </article>
      <hr className="video-info__divider" />
      <p className="video-info__description">{description}</p>
    </article>
  );
}

export default VideoInfo;
