import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home';
import Footer from './components/Footer';
import Menu from './Pages/Menu';
import About from './Pages/About';
import Contact from './Pages/Contact';
const App = () => {

  return (
    
  <Router>
<Navbar/>
<Switch>
  <Route exact path='/' component={Home}/>
  <Route exact path='/menu' component={Menu}/>
  <Route exact path='/about' component={About}/>
  <Route exact path='/contact' component={Contact}/>
      </Switch>
      
<Footer/>
  </Router>
      
    
  )
}

export default App
