import React, { Component } from "react";
import NavBar from "../NavBar";
import ListeVols from "../ListeVols";
import FormVols from "../FormVols";
import Container from "../Container";

class HomePage extends Component {
  render() {
    return (
      <>
      <NavBar />
      <Container>
        <FormVols />
        <ListeVols />
      </Container>
      </>
    );
  }
}

export default HomePage;
