import './Comments.scss';
import VideoDetails from '../../data/video-details.json';
import moment from 'moment';

function Comments({ image, name, comment, date }) {
  const currentVideo = VideoDetails[0];
  return (
    <div>
      {currentVideo.comments.map((video) => {
        return (
          <section className="comment">
            <figure className="comment__figure">
              <img
                className="comment__figure-img"
                src={video.image}
                alt="profile"
              />
            </figure>
            <article className="comment-section">
              <h3 className="comment-section__name">{video.name}</h3>
              <div className="comment-section__date">
                {moment.unix(video.timestamp / 1000).fromNow()}
              </div>
              <p className="comment-section__comment">{video.comment}</p>
            </article>
          </section>
        );
      })}
    </div>
  );
}

export default Comments;
