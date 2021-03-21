import './Comments.scss';

function Comments({ image, name, comment, date }) {
  return (
    <section className="comment">
      <figure className="comment__figure">
        <img className="comment__figure-img" src={image} alt="profile" />
      </figure>
      <article className="comment-section">
        <h3 className="comment-section__name">{name}</h3>
        <div className="comment-section__date">{date}</div>
        <p className="comment-section__comment">{comment}</p>
      </article>
    </section>
  );
}

export default Comments;
