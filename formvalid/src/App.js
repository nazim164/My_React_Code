import React from 'react'
import './App.css'
import NavBar from './pages/NavBar'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import SignUp from './pages/SignUp';
import Contact from './pages/Contact';

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Contact" component={Contact} />
            <Route path="/SignUp" component={SignUp} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
