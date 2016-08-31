import React from 'react';
import { Link } from "react-router";

import Footer from "../components/Footer"
import Header from "../components/Header"
import Nav from "../components/Nav"

export default class Layout extends React.Component {
  render () {
    return (
      <div>
      <Nav />
        <Header />
        <h1>It Works!</h1>
        <Footer />
      </div>
    )
  }
}
