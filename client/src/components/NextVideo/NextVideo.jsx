import './NextVideo.scss';
import { Link } from 'react-router-dom';

function NextVideo({ currentVideo, videoList }) {
  return (
    <section className="videos-container">
      <h3 className="videos-container--title">Next Video</h3>
      {videoList
        .filter((video) => !(video.id === currentVideo.id))
        .map((video) => {
          return (
            <Link
              key={video.id}
              className="next-video"
              to={`/video/${video.id}`}
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
        })}
    </section>
  );
}

export default NextVideo;
