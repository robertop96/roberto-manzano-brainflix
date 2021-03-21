import './Form.scss';

function Form({ comments }) {
  return (
    <section className="container">
      <h1 className="container__title">{comments.length} Comments</h1>
      <form className="form">
        <figure className="form__figure">
          <img className="form__figure--img" src="http://placeimg.com/48/48/any" alt="" />
        </figure>
        <article className="form__textarea">
          <label className="form__textarea--label" htmlFor="comment">
            JOIN THE CONVERSATION
          </label>
          <textarea
            className="form__textarea--textarea"
            name="comment"
            id="comment"
            cols="30"
            rows="10"
            placeholder="Add a new comment"
            required
          ></textarea>
        </article>
        <button className="form__button">COMMENT</button>
      </form>
    </section>
  );
}

export default Form;
