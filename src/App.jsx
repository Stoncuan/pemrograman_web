import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { Route, Routes } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

import NavbarComponent from "./NavbarComponent.jsx";

import DataTabel from "./Table.jsx";

import React, {Component} from "react";

// db
import {API_URL} from "./utils/constant.js";

// axios
import axios from "axios";

export default class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      menus: [

      ],
    }

  }

  componentDidMount(){
    // tangkap data
    axios.get(API_URL+"products")
    .then(res => {
      const menus = res.data;
      this.setState({menus});
    })
    .catch(error => {
      console.log("Error yaa", error);
    })
  }


  render() {
    console.log(this.state.menus);
    return(
      <>
      <NavbarComponent />
      <DataTabel/>
      </>
    );
  }
}


