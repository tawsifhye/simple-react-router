import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Friends from './components/Friends/Friends';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'></Route>
          <Route path='/friends'>
            <Friends></Friends>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='*'>
            <NotFound> </NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
