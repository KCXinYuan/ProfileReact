import React from 'react';
import { Link } from "react-router";

export default class Nav extends React.Component {
  render () {
    return (
      <nav>
        <Link to="/about"><button>About</button></Link>
        <Link to="/projects"><button>Projects</button></Link>
        <Link to="/contact"><button>Contact</button></Link>
      </nav>
    )
  }
}
