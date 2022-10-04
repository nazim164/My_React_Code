import Alluser from "./components/Alluser";
import UserConsole from "./components/UserConsole";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Imageupload from "./components/Imageupload";




function App() {
  return (
    <div className="App">
      <Router>
    <Route exact path="/" component={UserConsole}/>
    <Switch>
      <Route exact path="/Alluser" component={Alluser}/>
      </Switch>
      {/* <Imageupload/> */}
      </Router>
 

    </div>
  );
}

export default App;
