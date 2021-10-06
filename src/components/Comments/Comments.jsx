import './Comments.scss';
import moment from 'moment';

function Comments({ currentVideo, handleDelete }) {
  return (
    <div>
      {currentVideo.comments
        .sort((a, b) => b.timestamp - a.timestamp)
        .map((video) => {
          return (
            <section key={video.id} className="comment">
              <figure className="comment__figure">
                <img
                  className="comment__figure-img"
                  src="https://picsum.photos/48/48?random=1"
                  alt="profile"
                />
              </figure>
              <article className="comment-section">
                <h3 className="comment-section__name">{video.name}</h3>
                <div className="comment-section__date">
                  {moment.unix(video.timestamp / 1000).fromNow()}
                </div>
                <p className="comment-section__comment">{video.comment}</p>
                <button
                  onClick={() => handleDelete(video.id)}
                  className="comment-section__button"
                >
                  Delete
                </button>
              </article>
            </section>
          );
        })}
    </div>
  );
}

export default Comments;
