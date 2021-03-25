import './NextVideo.scss';
import { Link } from 'react-router-dom';

function NextVideo({ currentVideo, videoList }) {
  return (
    <section>
      {videoList
        .filter((video) => !(video.id === currentVideo.id))
        .map((video) => {
          return (
            <Link //WHEN Link PUSH TO .video/video.id THE .match.params IS CREATED.
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
