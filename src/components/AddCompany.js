'use strict';

import React from 'react';
import { Link } from 'react-router';
import CKEditor from 'react-ckeditor-wrapper';
import NewCompany from './NewCompany.js';

export default class AddCompany extends React.Component {
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
                                 <a className="btn-flat dropdown-button waves-effect waves-light white-text profile-btn" href="#" data-activates="profile-dropdown">{this.props.user.admin ? this.props.user.user : this.props.user.firstname}<i className="mdi-navigation-arrow-drop-down right"></i></a>
                                 <p className="user-roal">TPR</p>
                              </div>
                           </div>
                        </li>
                        <li className="bold "><a href="/tpr" className="waves-effect waves-cyan"><i className="mdi-action-dashboard"></i> Dashboard</a>
                        </li>
                        { this.props.user.admin &&
                        <li className="bold "><a href="/tprrequest" className="waves-effect waves-cyan"><i className="mdi-action-dashboard"></i>TPR Request</a>
                        </li>
                          }
                          <li className="bold active"><a href="/new" className="waves-effect waves-cyan"><i className="mdi-action-dashboard"></i>Add New Company</a>
                          </li>
                     </ul>
                     <a href="#" data-activates="slide-out" className="sidebar-collapse btn-floating btn-medium waves-effect waves-light hide-on-large-only cyan"><i className="mdi-navigation-menu"></i></a>
                  </aside>
                  <section id="content">
                     <div className="container">
                        <NewCompany />
                     </div>
                  </section>
                </div>
              </div>
            </div>
          </div>

    );
  }
}
