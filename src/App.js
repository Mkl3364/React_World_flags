//import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; //importation des librairies
import NotFound from './pages/NotFound';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>*/}
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
