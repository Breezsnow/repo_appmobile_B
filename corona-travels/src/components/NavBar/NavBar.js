import React, { Component } from "react";
import {Navbar} from 'react-bootstrap';

class NavBar extends Component {
  render() {
    return( 
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Corona Travels</Navbar.Brand>
      <Navbar.Text>
         <a href="bloop">Login</a>
      </Navbar.Text>
    </Navbar>
  )}
}

export default NavBar;
