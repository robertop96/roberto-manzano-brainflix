import './CurrentVideo.scss';
import VideoInfo from '../VideoInfo/VideoInfo';
import Form from '../Form/Form';
import Comments from '../Comments/Comments';
import moment from 'moment';
import Video from '../Video/Video';
import videoDetails from '../../data/video-details.json';

console.log(videoDetails[0].comments);

function CurrentVideo() {
  let commentsArray = videoDetails[0].comments;

  return (
    <section className="currentVideo">
      <Video image={videoDetails[0].image} />
      <VideoInfo
        title={videoDetails[0].title}
        channel={videoDetails[0].channel}
        timestamp={videoDetails[0].timestamp}
        views={videoDetails[0].views}
        likes={videoDetails[0].likes}
        description={videoDetails[0].description}
      />
      <Form comments={videoDetails[0].comments} />
      {commentsArray.map((comment) => {
        comment.image = 'https://loremflickr.com/48/48';
        comment.date = moment.unix(comment.timestamp / 1000).fromNow();
        return <Comments image={comment.image} name={comment.name} date={comment.date} comment={comment.comment} />;
      })}
    </section>
  );
}

export default CurrentVideo;
