import './NextVideo.scss';
import VideoDetails from '../../data/video-details.json';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom';

function NextVideo({ image, title, channel, handleNextVideo, id }) {
  const currentVideo = VideoDetails[0];
  return (
    <section>
      {VideoDetails.filter((video) => !(video === currentVideo)).map(
        (video) => {
          return (
            <Link
              key={video.id}
              className="next-video"
              to={`./video/${video.id}`}
              className="next-video"
            >
              <figure className="next-video__figure">
                <img
                  className="next-video__figure--img"
                  src={video.image}
                  alt="Video Thumbnail"
                />
              </figure>
              <div className="next-video__description">
                <h3 className="next-video__description--title">
                  {video.title}
                </h3>
                <p className="next-video__description--channel">
                  {video.channel}
                </p>
              </div>
            </Link>
          );
        }
      )}
    </section>
  );
}

export default NextVideo;
