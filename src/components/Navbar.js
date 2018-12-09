'use-strict';

import React, { Component } from 'react';
/*
import '../static/Login/js/index.js';*/
import { Link } from 'react-router';

class Navbar extends React.Component {
  render() {
    return (
  <nav className="navbar navbar-default navbar-fixed-top pad">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#">Brand</a>
    </div>
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <span className="glyphicon glyphicon-cog"></span><span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><a href="#">Sign in</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">Register</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

    );
  }
}

export default Navbar;