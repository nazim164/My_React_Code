// import React from "react";
// import {BrowserRouter ,Switch,Route ,useHistory,} from "react-router-dom";


// import Header from "./component/Header";
// import Home from "./component/home/Home";
// import DataView from "./component/post/DataView";
// import CreateView from "./component/post/CreateView";

// import { Box } from "@material-ui/core";
// import UpdateView from "./component/post/UpdateView";
// import { LoginCallback, SecureRoute, Security } from "@okta/okta-react";
// import Login from "./component/account/Login";
// import { oktaSignInConfig,oktaAuthConfig} from "./configue";
// import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
// // import { useHistory } from "react-router";
// const oktaAuth=new OktaAuth(oktaAuthConfig)

// function AppWithRouterAccess() {
// const history=useHistory()
//     const customAuthHandler=()=>{
//         history.push('/login')
//     }
//     const restoreOriginalUri=async(_oktaAuth,originalUri)=>{
//         history.replace(toRelativeUrl(originalUri,window.location.origin))
//     }
//   return (
   
//      <Security oktaAuth={oktaAuth}
//      onAuthRequired={customAuthHandler}
//      restoreOriginalUri={restoreOriginalUri}
//      >
  
//         <SecureRoute path='/' component={Header} />
//         <Box style={{ marginTop: 64 }}>
//           <Switch>
//          <Route exact path='/' component={Home}/>
//          <Route path='/login' render={()=><Login config={oktaSignInConfig}/>}/>
//          <Route path='/login/callback' component={LoginCallback}/>
//          <Route exact path='/details/:id' component={DataView}/>
//          <Route exact path='/create' component={CreateView}/>
//          <Route exact path='/update/:id' component={UpdateView}/>
//           </Switch>
//         </Box>
//         </Security>
   
//   );
// }

// export default AppWithRouterAccess;


