import './NextVideo.scss';

function NextVideo({ image, title, channel, handleNextVideo, id }) {
  return (
    <section id={id} className="next-video" onClick={handleNextVideo}>
      <figure className="next-video__figure">
        <img className="next-video__figure--img" src={image} alt="Video Thumbnail" />
      </figure>
      <div className="next-video__description">
        <h3 className="next-video__description--title">{title}</h3>
        <p className="next-video__description--channel">{channel}</p>
      </div>
    </section>
  );
}

export default NextVideo;
