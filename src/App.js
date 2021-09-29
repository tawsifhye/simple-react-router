import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Friends from './components/Friends/Friends';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Friends></Friends>
    </div>
  );
}

export default App;
