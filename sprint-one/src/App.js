import './App.scss';
import './partials/_partials.scss';
import Navbar from './components/Navbar/Navbar';
import Body from './components/Body/Body';

function App() {
  return (
    <section>
      <header>
        <Navbar />
      </header>
      <main>
        <Body />
      </main>
    </section>
  );
}

export default App;
