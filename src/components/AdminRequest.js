'use-strict';
import React, { Component } from 'react';
/*
import '../static/Login/js/index.js';*/
import { Link } from 'react-router';
import TprCandidate from './TprCandidate';
class AdminRequest extends React.Component {
render() {
return (
<div>
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
                     <li>
                        <h1 className="logo-wrapper">
                           <a href="index.html" className="brand-logo darken-1">
                              <div className="logo-customised">TPSW</div>
                           </a>
                           <span className="logo-text logo-customised-lappy" >TPSW</span>
                        </h1>
                     </li>
                  </ul>
                  <ul className="right hide-on-med-and-down">
                     <li><a href="javascript:void(0);" className="waves-effect waves-block waves-light toggle-fullscreen"><i className="mdi-action-settings-overscan"></i></a>
                     </li>
                  </ul>
               </div>
            </nav>
         </div>
      </header>
      <div id="main-material">
         <div className="wrapper">
            <aside id="left-sidebar-nav">
               <ul id="slide-out" className="side-nav fixed leftside-navigation">
                  <li className="user-details cyan darken-2">
                     <div className="row">
                        <div className="col col s4 m4 l4">
                           <img src="images/nitdgp.png" alt="" className="circle responsive-img valign profile-image"/>
                        </div>
                        <div className="col col s8 m8 l8">
                           <ul id="profile-dropdown" className="dropdown-content">
                              <li><a href="#"><i className="mdi-action-face-unlock"></i> Profile</a>
                              </li>
                              <li><a href="#"><i className="mdi-action-settings"></i> Settings</a>
                              </li>
                              <li><a href="#"><i className="mdi-communication-live-help"></i> Help</a>
                              </li>
                              <li className="divider"></li>
                              <li><a href="#"><i className="mdi-action-lock-outline"></i> Lock</a>
                              </li>
                              <li><a href="/logout"><i className="mdi-hardware-keyboard-tab"></i> Logout</a>
                              </li>
                           </ul>
                           <a className="btn-flat dropdown-button waves-effect waves-light white-text profile-btn" href="#" data-activates="profile-dropdown">Admin<i className="mdi-navigation-arrow-drop-down right"></i></a>
                           <p className="user-roal">TPSW</p>
                        </div>
                     </div>
                  </li>
                  <li className="bold"><a href="/admindashboard" className="waves-effect waves-cyan"><i className="mdi-action-dashboard"></i> Dashboard</a>
                  </li>
                  <li className="bold active"><a href="/tprrequest" className="waves-effect waves-cyan"><i className="mdi-action-dashboard"></i>TPR Request</a>
                  </li>
               </ul>
               <a href="#" data-activates="slide-out" className="sidebar-collapse btn-floating btn-medium waves-effect waves-light hide-on-large-only cyan"><i className="mdi-navigation-menu"></i></a>
            </aside>
            <section id="content">
               <div id="breadcrumbs-wrapper">
                  <div className="container">
                     <div className="row">
                        <div className="col s12 m12 l12">
                           <h5 className="breadcrumbs-title">New TPR Request</h5>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="container">
                  <div className="section">
                     <div id="blog-posts" className="row-customised row">
                        <div className="blog-sizer"></div>
                        { this.props.applications.length > 0 &&
                          <div>
                            {this.props.applications.map(function(applica){
                                return <TprCandidate applicant={applica}/>;
                              })}
                          </div>
                        }
                     </div>
                  </div>
               </div>
            </section>
         </div>
      </div>
   </div>
</div>
);
}
}
export default AdminRequest;
