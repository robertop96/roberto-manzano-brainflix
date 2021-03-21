import './Comments.scss';

function Comments({ image, name, comment, date }) {
  return (
    <section className="comment">
      <figure className="comment__figure">
        <img className="comment__figure-img" src={image} alt="profile" />
      </figure>
      <article className="comment__section">
        <h3 className="comment__section--name">{name}</h3>
        <div className="comment__section--date">{date}</div>
        <p className="comment__section--comment">{comment}</p>
      </article>
    </section>
  );
}

export default Comments;
