import React from 'react';
import Video from '../../Video/Video';
import VideoInfo from '../../VideoInfo/VideoInfo';
import Form from '../../Form/Form';
import Comments from '../../Comments/Comments';
import NextVideo from '../../NextVideo/NextVideo';
import VideoDetails from '../../../data/video-details.json';

export default function CurrentVideo(props) {
  const id = props.match.params.id;
  console.log(id);
  return (
    <main>
      <h1>{id}</h1>
      <figure className="video">
        <Video />
      </figure>
      <section className="content">
        <article className="content__video-information">
          <VideoInfo />
          <Form />
          <Comments />
        </article>
        <article className="content__next-video">
          <h3 className="content__next-video--title">Next Video</h3>
          <NextVideo />
        </article>
      </section>
    </main>
  );
}
