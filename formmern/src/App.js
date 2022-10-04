import React, { useState } from 'react'
import Login from './component/login/Login'
import Register from './component/register/Register'
import './App.css'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import HomePage from './component/homepage/HomePage';

const App = () => {
    const [user,setLoginUser]=useState({})
    return (
        <div className="App" >
            <Router>
                <Switch>
        <Route exact path="/" >
            {
                user && user._id?
                <HomePage setLoginUser={setLoginUser}/>
                :
                <Login setLoginUser={setLoginUser}/>
            }
            </Route>
        <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
            </Route>
        <Route path="/register" >
            <Register/>
            </Route>


                </Switch>
                </Router>           
                 
        </div>
    )
}

export default App
