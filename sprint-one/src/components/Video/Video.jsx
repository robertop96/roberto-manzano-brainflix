import './Video.scss';

function Video({ image }) {
  return (
    <figure className="videoFigure">
      <video className="videoFigure__video" controls poster={image}></video>
    </figure>
  );
}

export default Video;
