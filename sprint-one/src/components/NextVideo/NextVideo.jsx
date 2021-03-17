import './NextVideo.scss';

function NextVideo({ image, title, channel }) {
  return (
    <section className="next-video">
      <figure className="next-video__figure">
        <img className="next-video__figure--img" src={image} alt="Video Thumbnail" />
      </figure>
      <div className="next-video__info">
        <h3 className="next-video__info--title">{title}</h3>
        <p className="next-video__info--channel">{channel}</p>
      </div>
    </section>
  );
}

export default NextVideo;
