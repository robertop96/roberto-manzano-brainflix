import './App.scss';
import './partials/_partials.scss';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Body from './components/Body/Body';
import VideoUpload from './components/pages/VideoUpload/VideoUpload';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Body} />
        <Route exact path="/VideoUpload" component={VideoUpload} />
        <Route exact path="/Video/:id" component={Body} />
      </Switch>
    </Router>
  );
}

export default App;
