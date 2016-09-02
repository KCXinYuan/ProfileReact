import React from 'react';

export default class Projects extends React.Component {
  render () {
    return (
      <div>
        <h3>Projects</h3>

        <h4>Red Panda Bucket List Blog CMS | July 2016 | github.com/project-red-panda/PRP</h4>

        <ul>
          <li>Created a simple content management system that allows users to signup/login and create bucket list posts.</li>
          <li>Angular front-end with a modular project layout. Made API cals to our own Express/Node.js backend and MongoDB to fetch users data and posts to populate the site content.</li>
        </ul>

        <h4>Equalizer/EQ | June 2016 | github.com/EQ-project/EQ</h4>
        <ul>
          <li>Collaborative playlist maker using the Spotify API.</li>
          <li>Designed with MongoDB persistence and Express/Node.js backend to create requests to the Spotify playform</li>
        </ul>
      </div>
    )
  }
}
