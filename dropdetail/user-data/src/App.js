import User from "./component/User";
import {BrowserRouter as Router,Routes,Route,BrowserRouter}from "react-router-dom";
import GetPage from "./component/GetPage";
function App() {
  return (
    <div>
    <BrowserRouter>

       <Routes>
       <Route  path="/" element={<User/>}/>
        <Route  path="get" element={<GetPage/>}/>
      </Routes> 
  
    </BrowserRouter>
   
    </div>
  );
}

export default App;
