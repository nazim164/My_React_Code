import react from 'react'
import Alluser from "./components/Alluser";
import UserConsole from "./components/UserConsole";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div >
       <Router>
    <Route exact path="/" component={UserConsole}/>
    <Switch>
      <Route exact path="/Alluser" component={Alluser}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
