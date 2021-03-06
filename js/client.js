import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory} from "react-router";

import About from "./pages/About";
import Layout from "./pages/Layout";
import ProjectsPage from "./pages/ProjectsPage";
import Contact from "./pages/Contact";

const app = document.getElementById('app');
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute></IndexRoute>
      <Route path="about" component={About}></Route>
      <Route path="projects" component={ProjectsPage}></Route>
      <Route path="contact" component={Contact}></Route>
    </Route>
  </Router>, app);
