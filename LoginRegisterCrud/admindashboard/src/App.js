
// import './App.css';

import Main from './component/Main'
import Header from './component/Header'
import React from "react";
import {BrowserRouter as Router,Switch,Route,Link, BrowserRouter} from "react-router-dom";
import Home from './component/Home';
import Myself from './component/Myself';
import Weather from './component/Weather';
// import Home from './component/Home';
// import Home from '@material-ui/icons/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route exact path='/' component={Main}/>
      <Route exact path='/Header' component={Header}/>
      <Route exact path='/Home' component={Home}/> 
      {/* <Route exact path='/weather' component={Weather}/> */}
      <Route exact path='/Signin'component={Myself}/>
      </Switch>
      </BrowserRouter>
    {/* <Home/>  */}
    </div>
  );
}

export default App;
