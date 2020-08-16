import React, { Component } from "react";
import GrainIcon from "@material-ui/icons/Grain";

export default class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light ">
        <a class="navbar-brand text-light" href="#">
          <GrainIcon /> Weather App
        </a>
      </nav>
    );
  }
}
