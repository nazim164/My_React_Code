import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import CodeForinterview from "./components/CodeForinterview";
import AllUser from "./components/AllUser";
import AddUser from "./components/AddUser";
import NotFound from "./components/NotFound";
import EditUser from "./components/EditUser";
import Register from "./components/Register";
import Login from "./components/Login";


function App() {
  return (
  <div>
    <BrowserRouter>
    <NavBar/>
    <Switch>
    <Route exact path='/' component={CodeForinterview}/>
    <Route exact path='/All' component={AllUser}/>
    {/* <Route exact path='/Add' component={AddUser}/> */}
    <Route exact path='/Register' component={Register}/>
    <Route exact path='/Login' component={Login}/>
    <Route exact path='/edit/:id' component={EditUser}/>
    <Route component={NotFound}/>
   
    </Switch>
   
    </BrowserRouter>

  </div>
  );
}

export default App;
