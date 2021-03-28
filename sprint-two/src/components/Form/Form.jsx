import './Form.scss';
function Form({ currentVideo, handleSubmit }) {
  return (
    <section className="container">
      <h1 className="container__title">{currentVideo.length} Comments</h1>
      <form onSubmit={handleSubmit} className="form">
        <figure className="form__profile-picture">
          <img
            className="form__profile-picture--img"
            src="http://placeimg.com/48/48/any"
            alt=""
          />
        </figure>
        <article className="form__comment-container">
          <div className="form__textarea">
            <label className="form__textarea--label" htmlFor="comment">
              JOIN THE CONVERSATION
            </label>
            <input
              type="text"
              className="form__textarea--textarea"
              name="comment"
              id="comment"
              cols="30"
              rows="10"
              placeholder="Add a new comment"
              required
            ></input>
          </div>
          <button type="submit" className="form__button">
            COMMENT
          </button>
        </article>
      </form>
    </section>
  );
}

export default Form;
