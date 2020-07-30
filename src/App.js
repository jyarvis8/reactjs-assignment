import React from "react";
import {Nav} from "./Nav";
import {Home} from "./Home";
import {Account} from "./Account";
import {BrowserRouter, Route , Switch} from "react-router-dom";


function App (){
  
  return(
    <BrowserRouter>
    <div>
      <Nav/>
      <switch>
        <Route path="/" exact component={home}/>
      <Route path="/home" component={Home}/>
      <Route path="/account" component={Account}/>
      </switch>
    </div>
    </BrowserRouter>
  );
}

const home = () =>(
  <div className="home">
    <h2>This is the About page</h2>
  </div>
);

export default App ;
