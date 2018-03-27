import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="full-page">
    <div className="navbar">
    <NavLink className="navbar-item" to="/" activeClassName="is-active" exact={true}><i className="material-icons">home</i></NavLink>
    <NavLink className="navbar-item" to="/about" activeClassName="is-active"><i className="material-icons">person_outline</i></NavLink>
    <NavLink className="navbar-item" to="/skills" activeClassName="is-active"><i className="material-icons">settings</i></NavLink>
    <NavLink className="navbar-item" to="/projects" activeClassName="is-active"><i className="material-icons">code</i></NavLink>
    <NavLink className="navbar-item" to="/contact" activeClassName="is-active"><i className="material-icons">mail_outline</i></NavLink>
    </div>
  </div>
);

export default Navbar;