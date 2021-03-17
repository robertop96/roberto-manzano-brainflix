import './Form.scss';

function Form({ comments }) {
  return (
    <section className="conversation-container">
      <h1 className="conversation-container__title">{comments.length}</h1>
      <form className="conversation-form">
        <figure className="conversation-form__picture">
          <img className="conversation-form__picture--img" src="http://placeimg.com/48/48/any" alt="" />
        </figure>
        <div className="conversation-form__form-container">
          <label className="conversation-form__label-textarea" htmlFor="comment">
            JOIN THE CONVERSATION
          </label>
          <textarea
            className="conversation-form__textarea conversation__form--textarea-input"
            name="comment"
            id="comment"
            cols="30"
            rows="10"
            placeholder="Add a new comment"
            required
          ></textarea>
          <button className="conversation-form__button">COMMENT</button>
        </div>
      </form>
      <hr className="conversation-form__divider--top" />
    </section>
  );
}

export default Form;
