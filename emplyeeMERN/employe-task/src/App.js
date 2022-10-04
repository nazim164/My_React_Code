import AdminDetail from './components/AdminDetail';
import EmpDetail from './components/EmpDetail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserBoost from './components/UserBoost';


function App() {
  return (
   <div>
     <Router>

       <Route exact path="/" component={EmpDetail}/>

      <Switch>
      <Route exact path="/admin" component={AdminDetail}/>
      </Switch>  
        
       </Router>
       <UserBoost/>

       
    
   </div>
  );
}

export default App;
