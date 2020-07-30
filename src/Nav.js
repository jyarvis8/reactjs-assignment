import React from "react";
import "./App.css";
import {Link} from "react-router-dom";

export class Nav extends React.Component {
  render(){
    return(
      <nav className="navBar">
          <ul className="navLinks">
              <Link to = {"/home"}>
              <li>HOME</li>
              </Link>
              <Link to = {"/account"}>
              <li>ACCOUNT</li>
              </Link>
              <Link to = {"/"}>
              <li>ABOUT</li>
              </Link>
          </ul>
      </nav>
      
    );
  }
}