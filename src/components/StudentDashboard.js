import React, { Component } from 'react';
import { Link } from 'react-router';
class StudentDashboad extends React.Component {
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
                              <li><a href="/editprofile"><i className="mdi-action-face-unlock"></i>Edit Profile</a>
                              </li>
                              <li><a href="#"><i className="mdi-action-settings"></i>Settings</a>
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
                  <li className="bold active"><a href="/studentprofile" className="waves-effect waves-cyan"><i className="mdi-action-dashboard"></i> Dashboard</a>
                  </li>
                  <li className="bold"><a href="/applytpr" className="waves-effect waves-cyan"><i className="material-icons">library_books</i> Apply For TPR </a>
                  </li>
               </ul>
               <a href="#" data-activates="slide-out" className="sidebar-collapse btn-floating btn-medium waves-effect waves-light hide-on-large-only cyan"><i className="mdi-navigation-menu"></i></a>
            </aside>
            <section id="content">
               <div className="container">
                  <div id="profile-page" className="section">
                     <div id="profile-page-header" className="card">
                        <div className="card-image waves-effect waves-block waves-light">
                           <img className="activator" src="images/user-profile-bg.jpg" alt="user background" />
                        </div>
                        <figure className="card-profile-image">
                           <img src="images/avatar.png" alt="profile image" className="circle z-depth-2 responsive-img activator" />
                        </figure>
                        <div className="card-content">
                           <div className="row">
                              <div className="col s9 offset-s2">
                                 <h4 className="card-title grey-text text-darken-4"><br/>{this.props.user.firstname} {this.props.user.lastname}</h4>
                              </div>
                              <div className="col s1 right-align">
                                 <a className="btn-floating activator waves-effect waves-light darken-2 right">
                                 <i className="mdi-content-create"></i>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div id="profile-page-content" className="row">
                        <div id="profile-page-sidebar" className="col s12 m4">
                           <div className="card light-blue">
                              <div className="card-content white-text">
                                 <span className="card-title">About Me!</span>
                              </div>
                           </div>
                           <ul id="profile-page-about-details" className="collection z-depth-1">
                              <li className="collection-item">
                                 <div className="row">
                                    <div className="col s5 grey-text darken-1">Branch</div>
                                    <div className="col s7 grey-text text-darken-4 right-align">{this.props.user.branch}</div>
                                 </div>
                              </li>
                              <li className="collection-item">
                                 <div className="row">
                                    <div className="col s5 grey-text darken-1"><i className="mdi-social-poll"></i> Roll Number</div>
                                    <div className="col s7 grey-text text-darken-4 right-align">{this.props.user.roll}</div>
                                 </div>
                              </li>
                              <li className="collection-item">
                                 <div className="row">
                                    <div className="col s5 grey-text darken-1"><i className="mdi-social-poll"></i> Email</div>
                                    <div className="col s7 grey-text text-darken-4 right-align">{this.props.user.email}</div>
                                 </div>
                              </li>
                              <li className="collection-item">
                                 <div className="row">
                                    <div className="col s5 grey-text darken-1">Lives in</div>
                                    <div className="col s7 grey-text text-darken-4 right-align">{this.props.user.paddress}</div>
                                 </div>
                              </li>
                              <li className="collection-item">
                                 <div className="row">
                                    <div className="col s5 grey-text darken-1"> Birth date</div>
                                    <div className="col s7 grey-text text-darken-4 right-align">{this.props.user.dob}</div>
                                 </div>
                              </li>
                           </ul>
                           <ul id="task-card" className="collection with-header">
                              <li className="collection-header cyan">
                                 <h4 className="task-card-title">My Details</h4>
                              </li>
                              <li className="collection-item">
                                 <div className="row">
                                    <div className="col s5 grey-text darken-1">Fathers\' Name</div>
                                    <div className="col s7 grey-text text-darken-4 right-align">{this.props.user.fathername}</div>
                                 </div>
                              </li>
                              <li className="collection-item">
                                 <div className="row">
                                    <div className="col s5 grey-text darken-1">Permanent Address</div>
                                    <div className="col s7 grey-text text-darken-4 right-align">{this.props.user.caddress}</div>
                                 </div>
                              </li>
                              <li className="collection-item">
                                 <div className="row">
                                    <div className="col s5 grey-text darken-1"> Gender</div>
                                    <div className="col s7 grey-text text-darken-4 right-align">{this.props.user.gender}</div>
                                 </div>
                              </li>
                           </ul>
                        </div>
                        <div id="profile-page-wall" className="col s12 m8">
                           <div id="profile-page-wall-posts"className="row">
                              <div className="col s12">
                                 <div id="profile-page-wall-post" className="card">
                                    <div className="card-profile-title">
                                       <div className="row">
                                          <div className="col s1">
                                             <img src="images/avatar.png" alt="" className="circle responsive-img valign profile-post-uer-image" />
                                          </div>
                                          <div className="col s10">
                                             <p className="grey-text text-darken-4 margin">{this.props.user.firstname} {this.props.user.lastname}</p>
                                          </div>
                                          <div className="col s1 right-align">
                                             <i className="mdi-navigation-expand-more"></i>
                                          </div>
                                       </div>
                                       <div className="row">
                                          <div className="col s12">
                                             <p>Lets have a look of my CV.</p>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="card-image profile-medium">
                                       <img src="images/gallary/2.jpg" alt="sample" className="responsive-img profile-post-image profile-medium"/>
                                       <span className="card-title">Card Title</span>
                                    </div>
                                    <div className="card-content">
                                       <p>Awesome! Isn't it?</p>
                                    </div>
                                    <div className="card-action row">
                                       <div className="col s4 card-action-share">
                                          <a href="#">Update</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
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
export default StudentDashboad;
