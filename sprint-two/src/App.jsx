import './App.scss';
import './partials/_partials.scss';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import VideoUpload from './components/pages/VideoUpload/VideoUpload';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/VideoUpload" component={VideoUpload} />
        <Route exact path="/Video/:id" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
