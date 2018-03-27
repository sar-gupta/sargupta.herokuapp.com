import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import Navbar from '../components/Navbar';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import SkillsPage from '../components/SkillsPage';
import ProjectsPage from '../components/ProjectsPage';
import ContactPage from '../components/ContactPage';


const AppRouter = () => (
  <BrowserRouter>
    <div className="full-page base">
      <Navbar />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/about" component={AboutPage} />
        <Route path="/skills" component={SkillsPage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;