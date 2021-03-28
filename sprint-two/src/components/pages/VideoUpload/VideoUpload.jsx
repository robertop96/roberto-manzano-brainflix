import React from 'react';
import './VideoUpload.scss';
import Thumbnail from '../../../assets/Images/Upload-video-preview.jpg';

function VideoUpload(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your Video Has Been Submitted, Thank you!');
    props.history.push('/');
  };

  // console.log(props);
  return (
    <form onSubmit={handleSubmit} className="upload-container">
      <h1 className="title">Upload Video</h1>
      <article className="upload-form__container">
        <article className="thumbnail">
          <h3 className="thumbnail__title">VIDEO THUMBNAIL</h3>
          <figure className="thumbnail__figure">
            <img className="thumbnail__figure--img" src={Thumbnail} alt="" />
          </figure>
        </article>
        <article className="form">
          <label className="form__title-label" htmlFor="title">
            TITTLE YOUR VIDEO
          </label>
          <input
            className="form__title-input"
            type="text"
            name="title"
            id="title"
            placeholder="Add tittle to your video"
          />
          <label className="form__description-label" htmlFor="description">
            ADD A VIDEO DESCRIPTION
          </label>
          <textarea
            className="form__description-input"
            name="description"
            id="description"
            rows="4"
            cols="40"
            placeholder="Add a description of your video"
          />
        </article>
      </article>
      <article className="submission">
        <button type="submit" className="submission__submit">
          PUBLISH
        </button>
        <button type="submit" className="submission__cancel">
          CANCEL
        </button>
      </article>
    </form>
  );
}

export default VideoUpload;
