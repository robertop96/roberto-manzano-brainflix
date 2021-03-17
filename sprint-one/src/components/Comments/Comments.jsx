import './Comments.scss';

function Comments({ image, name, comment, date }) {
  return (
    <section className="conversation-container-posted">
      <article className="comment-container">
        <figure className="comment-container__picture">
          <img className="comment-container__picture-img" src={image} alt="profile picture" />
        </figure>
        <div className="comment-body">
          <h3 className="comment-body__name">{name}</h3>
          <div className="comment-body__date">{date}</div>
          <article className="comment-body__comment">
            <p>{comment}</p>
          </article>
        </div>
        <hr className="comment-container__divider" />
      </article>
    </section>
  );
}

export default Comments;
