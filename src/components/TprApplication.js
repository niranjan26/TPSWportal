import React, { Component } from 'react';
import { Link } from 'react-router';
class TprApplication extends React.Component {
  constructor(props) {
    super(props);
  }
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
                           <a className="btn-flat dropdown-button waves-effect waves-light white-text profile-btn" href="#" data-activates="profile-dropdown">{this.props.user.firstname}<i className="mdi-navigation-arrow-drop-down right"></i></a>
                           <p className="user-roal">Student</p>
                        </div>
                     </div>
                  </li>
                  <li className="bold"><a href="/studentprofile" className="waves-effect waves-cyan"><i className="mdi-action-dashboard"></i> Dashboard</a>
                  </li>
                  <li className="bold active"><a href="/applytpr" className="waves-effect waves-cyan"><i className="material-icons">library_books</i> Apply For TPR </a>
                  </li>
               </ul>
               <a href="#" data-activates="slide-out" className="sidebar-collapse btn-floating btn-medium waves-effect waves-light hide-on-large-only cyan"><i className="mdi-navigation-menu"></i></a>
            </aside>
            <section id="content">
               <div className="container pad_top_reg">
                  <div className="panel panel-default" >
          { !this.props.user.appliedForTpr &&
               <form action="/applytpr" method="post" >
                        <div className="panel-heading">Apply</div>
                        <div className="panel-body">
                           <div className="row">
                              <div className="col-sm-6 col-md-8">
                                 <ul className="list-group">
                                    <div className="table-responsive">
                                       <table className="table">
                                          <tbody>
                                             <tr>
                                                <td>First Name</td>
                                                <td><input  type="text" name="firstname" className="form-control" value={this.props.user.firstname} readonly/></td>
                                             </tr>
                                             <tr>
                                                <td>Last Name</td>
                                                <td><input  type="text" name="lastname" className="form-control" value={this.props.user.lastname} readonly/></td>
                                             </tr>
                                             <tr>
                                                <td>Email</td>
                                                <td><input  type="text" name="email" className="form-control" value={this.props.user.email} readonly/></td>
                                             </tr>
                                             <tr>
                                                <td>Roll No.</td>
                                                <td><input  type="text" name="roll" className="form-control" value={this.props.user.roll} readonly/></td>
                                             </tr>
                                             <tr>
                                                <td>Branch</td>
                                                <td><input  type="text" name="branch" className="form-control" value={this.props.user.branch} readonly/></td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </div>
                                 </ul>
                           </div>
                        </div>
                      </div>
                      <input type="submit" name="submit"/>
                    </form>
                  }
                  {
                    this.props.user.appliedForTpr &&
                    <div align="center">
                      <p>Already Applied for Tpr </p>
                    </div>
                  }
                  </div>
                </div>
              </section>
          </div>
        </div>
      </div>
    </div>
  )}};
export default TprApplication;
