import React, { useEffect } from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Main from './Main';
import About from './About';

function App() {
  useEffect(() => {
    console.log(window.process);
  }, []);
  return (
    <div className="App">
      <div>
        <Link to="/">Home</Link> |
        <Link to="/about">About</Link>
      </div>
      <div>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/about" exact component={About} />
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
