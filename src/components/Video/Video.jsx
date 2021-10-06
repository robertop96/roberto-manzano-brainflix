import './Video.scss';

function Video({ currentVideo }) {
  return (
    <section className="video">
      <figure className="video__figure">
        <video
          className="video__figure--video"
          controls
          poster={currentVideo.image}
        ></video>
      </figure>
    </section>
  );
}
export default Video;
