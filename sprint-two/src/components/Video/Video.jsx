import './Video.scss';
import VideoDetails from '../../data/video-details.json';

function Video() {
  const currentVideo = VideoDetails[0];
  return (
    <figure className="videoFigure">
      <video
        className="videoFigure__video"
        controls
        poster={currentVideo.image}
      ></video>
    </figure>
  );
}
export default Video;
