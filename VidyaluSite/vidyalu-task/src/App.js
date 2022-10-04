import FrontPage from "./components/FrontPage";
import Login from "./components/Login";

import {BrowserRouter as Router,Switch,Route}from "react-router-dom";
import GotoPage from "./components/GotoPage";
import StudData from "./components/pages/StudData";
import Councellor from "./components/pages/Councellor";
import Teacher from "./components/pages/Teacher";
import Student from "./components/Lists/Student";
import EditUser from "./components/EditUser";
import UserValue from "./components/UserValue";

function App() {
  return (
    <div >
    <Router>
      <Route exact path="/" component={FrontPage}/>
      <Switch>
        <Route exact path="/login" component={Login}/>
        <Route exact path='/goto' component={GotoPage}/>
        <Route exact path='/stud' component={StudData}/>
        <Route Exact path="/couns" component={Councellor}/>
        <Route exact path="/stdlis" component={Student}/>
        <Route exact path="/edit/:id" component={EditUser}/>
        <Route exact path="/setval" component={UserValue}/>
      </Switch>
      <Route exact path="/tech" component={Teacher}/>
    </Router>
    </div>
  );
}

export default App;
