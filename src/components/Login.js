'use-strict';

import React, { Component } from 'react';
/*
import '../static/Login/js/index.js';*/
import { Link } from 'react-router';

class Login extends React.Component {
  render() {
    return (
      <div className="login_body">
    <div id="loader-wrapper">
        <div id="loader"></div>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
    </div>
        <header id="header" className="page-topbar">
        <div className="navbar-fixed">
            <nav className="navbar-color">
                <div className="nav-wrapper">
                    <ul className="left">
                      <li><h1 className="logo-wrapper"><a href="index.html" className="brand-logo darken-1"><div className="logo-customised">TPSW</div></a> <span className="logo-text logo-customised-lappy" >TPSW</span></h1></li>
                    </ul>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="javascript:void(0);" className="waves-effect waves-block waves-light toggle-fullscreen"><i className="mdi-action-settings-overscan"></i></a>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    </header>
          <div className="wrapper">
   			<aside id="left-sidebar-nav">
   					<ul id="slide-out" className="side-nav fixed leftside-navigation">
                <li className="user-details cyan darken-2">
                <div className="row">
                    <div className="col col s4 m4 l4">
                        <img src="images/nitdgp.png" alt="" className="circle responsive-img valign profile-image"/>
                    </div>
                    <div className="col col s8 m8 l8">
                        <a className="btn-flat dropdown-button waves-effect waves-light white-text profile-btn" href="#" data-activates="profile-dropdown">NIT Durgapur</a>
                        <p className="user-roal">TPSW</p>
                    </div>
                </div>
                </li>
   					<li className="bold"><a href="/register" className="waves-effect waves-cyan"><i className="material-icons">library_books</i> Register</a>
   					</li>
   					<li className="bold active"><a href="/" className="waves-effect waves-cyan"><i className="material-icons">verified_user</i>Login</a>
   					</li>
   			</ul>
   					<a href="#" data-activates="slide-out" className="sidebar-collapse btn-floating btn-medium waves-effect waves-light hide-on-large-only cyan"><i className="material-icons">reorder</i></a>
   			</aside>
        <section id="content">
         <div className="container">
            <div className="row">
               <div className="form_bg">
                  <ul className="nav nav-tabs ">
                     <li className="active">
                        <a  href="#1" data-toggle="tab">Student</a>
                     </li>
                     <li><a href="#2" data-toggle="tab">T.P.R</a>
                     </li>
                     <li><a href="#3" data-toggle="tab">Admin</a>
                     </li>
                  </ul>
                  <div className="tab-content ">
                     <div className="tab-pane active" id="1">
                        <form action="/signin" method="post">
                           <h2 className="text-center h2_nav_tabs">Student Login</h2>
                           <br/>
                           <div className="form-group">
                              <input type="email" name="email" className="form-control" id="userid" placeholder="User id" />
                           </div>
                           <div className="form-group">
                              <input type="password" name="password" className="form-control" id="pwd" placeholder="Password" />
                           </div>
                           <br/>
                           <div className="align-center">
                              <button type="submit" className="btn btn-default" id="login">Login</button>
                           </div>
                        </form>
                     </div>
                     <div className="tab-pane" id="2">
                        <form action="/tprsignin" method="post">
                           <h2 className="text-center h2_nav_tabs">T.P.R Login</h2>
                           <br/>
                           <div className="form-group">
                              <input type="email" name="email" className="form-control" id="userid" placeholder="User id" />
                           </div>
                           <div className="form-group">
                              <input type="password" name="password" className="form-control" id="pwd" placeholder="Password" />
                           </div>
                           <br/>
                           <div className="align-center">
                              <button type="submit" className="btn btn-default" id="login">Login</button>
                           </div>
                        </form>
                     </div>
                     <div className="tab-pane" id="3">
                        <form action="/adminlogin" method="post">
                           <h2 className="text-center h2_nav_tabs">Admin Login</h2>
                           <br/>
                           <div className="form-group">
                              <input type="email" name="email" className="form-control" id="userid" placeholder="User id" />
                           </div>
                           <div className="form-group">
                              <input type="password" name="password" className="form-control" id="pwd" placeholder="Password" />
                           </div>
                           <br/>
                           <div className="align-center">
                              <button type="submit" className="btn btn-default" id="login">Login</button>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
    </section>
    </div>
  </div>

    );
  }
}

export default Login;
