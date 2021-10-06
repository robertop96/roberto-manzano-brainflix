import './videoInfo.scss';
import viewsIcon from '../../assets/Icons/Icon-views.svg';
import likesIcon from '../../assets/Icons/Icon-likes.svg';
import moment from 'moment';

function VideoInfo({ currentVideo, handleLikes }) {
  return (
    <article className="video-info">
      <h1 className="video-info__title">{currentVideo.title}</h1>
      <div className="video-info__social">
        <article className="video-info__channel">
          <h3 className="video-info__channel--name">
            {' '}
            By {currentVideo.channel}
          </h3>
          <p className="video-info__channel--timestamp">
            {moment(currentVideo.timestamp).format('L')}
          </p>
        </article>
        <article className="video-info__social-media">
          <img
            className="video-info__social-media--viewsIcon"
            src={viewsIcon}
            alt=""
          />
          <p className="video-info__social-media--views">
            {currentVideo.views}
          </p>
          <button
            className="video-info__social-media--button"
            onClick={() => handleLikes()}
          >
            <img
              className="video-info__social-media--likesIcon"
              src={likesIcon}
              alt=""
            />
          </button>
          <p className="video-info__social-media--likes">
            {currentVideo.likes}
          </p>
        </article>
      </div>
      <div className="video-info__description">
        <p className="video-info__description--text">
          {currentVideo.description}
        </p>
      </div>
    </article>
  );
}

export default VideoInfo;
