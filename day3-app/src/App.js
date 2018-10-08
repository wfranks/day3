import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import page1 from './page1.js';

class App extends Component {
  render() {
    return (
	  <div>
	    <Router>
	    <Switch>
	      <Route exact path="/" component={Home} />
 	      <Route path="/iloveyou" component={page1} />
	    </Switch>
	    </Router>
	  </div>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
	    <Link to="/iloveyou">FUCK OFF</Link>	
	</header>
      </div>
    );
  }
}

export default App;
