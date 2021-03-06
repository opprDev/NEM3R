import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render () {
    return (
      <div>
        <nav className="green">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo center">R3LM</a>
            <a data-activates="main-menu" className="button-collapse show-on-large">
              <i className="fa fa-bars"></i>
            </a>
            <ul className="right hide-on-small-only">
              <li>
                <Link to="/">
                  <i className="fa fa-users"></i>
                  &nbsp;
                  Lists
                </Link>
              </li>
            </ul>
            <ul className="side-nav" id="main-menu">
              <li>
                <Link to="/">
                  <i className="fa fa-users"></i>
                  &nbsp;
                  Lists
                </Link>
              </li>
              <li>
                <Link to="/lists/add">
                  <i className="fa fa-plus"></i>
                  &nbsp;
                  Add List
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <i className="fa fa-question-circle"></i>
                  &nbsp;
                  About
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;
