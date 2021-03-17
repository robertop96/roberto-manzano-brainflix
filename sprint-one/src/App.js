import './App.scss';
import './partials/_partials.scss';
import Navbar from './components/Navbar/Navbar';
import CurrentVideo from './components/CurrentVideo/CurrentVideo';
import NextVideo from './components/NextVideo/NextVideo';
import VideoList from './data/videos.json';

let videoListArray = VideoList;
console.log(videoListArray);

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <body>
        <CurrentVideo />
        <section>
          <h3>Next Video</h3>
          {videoListArray.map((video) => {
            return <NextVideo image={video.image} title={video.title} channel={video.channel} />;
          })}
        </section>
      </body>
    </div>
  );
}

export default App;
