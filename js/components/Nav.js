import React from 'react';
import { Link } from "react-router";

export default class Nav extends React.Component {
  render () {
    return (
      <nav>
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
      </nav>
    )
  }
}
