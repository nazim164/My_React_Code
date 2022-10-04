import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
// import AppWithRouterAccess from './AppWithRouterAccess'
//components
import Header from "./component/Header";
import Home from "./component/home/Home";
import DataView from "./component/post/DataView";
import CreateView from "./component/post/CreateView";

import { Box } from "@material-ui/core";
import UpdateView from "./component/post/UpdateView";

function App() {
  return (

      <BrowserRouter>
      {/* <AppWithRouterAccess/> */}
        <Header />
        <Box style={{ marginTop: 64 }}>
          <Switch>
         <Route exact path='/' component={Home}/>
         <Route exact path='/details/:id' component={DataView}/>
         <Route exact path='/create' component={CreateView}/>
         <Route exact path='/update/:id' component={UpdateView}/>
          </Switch>
        </Box>
      </BrowserRouter>

  );
}

export default App;
