import React from 'react'
import "./VideoUpload.scss"
import Thumbnail from "../../../assets/Images/Upload-video-preview.jpg"

function VideoUpload() {
  
  return (
    <form className="upload-container">
      <h1 className="upload-container__title">Upload Video</h1>
      <article className="Thumbnail">
        <h3 className="Thumbnail__title">VIDEO THUMBNAIL</h3>
        <figure className="Thumbnail__figure">
          <img className="Thumbnail__figure--img" src={Thumbnail} alt="" />
        </figure>
      </article>
      <article className="form">
        <label className="form__title-label" for="title">TITTLE YOUR VIDEO</label>
        <input className="form__title-input" type="text" name="title" id="title"/>
        <label className="form__description-label" for="description">ADD A VIDEO DESCRIPTION</label>
        <textarea className="form__description-input" name="description" id="description" rows="4" cols="40"/>
      </article>
      <article className="submission">
        <button className="submission__submit">PUBLISH</button>
        <button className="submission__cancel">CANCEL</button>
      </article>
    </form>
  )
}

export default VideoUpload
