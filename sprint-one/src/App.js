import './App.scss';
import './partials/_partials.scss';
import Navbar from './components/Navbar/Navbar';
import CurrentVideo from './components/CurrentVideo/CurrentVideo';

function App() {
  return (
    <section>
      <header>
        <Navbar />
      </header>
      <main>
        <CurrentVideo />
      </main>
    </section>
  );
}

export default App;
