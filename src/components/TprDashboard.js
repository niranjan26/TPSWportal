import React, { Component } from 'react';
import { Link } from 'react-router';
class TprDashboard extends React.Component {
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
                  <li className="bold active"><a href="/tpr" className="waves-effect waves-cyan"><i className="mdi-action-dashboard"></i> Dashboard</a>
                  </li>
                  { this.props.user.admin &&
                  <li className="bold "><a href="/tprrequest" className="waves-effect waves-cyan"><i className="mdi-action-dashboard"></i>TPR Request</a>
                  </li>
                }
                <li className="bold "><a href="/new" className="waves-effect waves-cyan"><i className="mdi-action-dashboard"></i>Add New Company</a>
                </li>
               </ul>
               <a href="#" data-activates="slide-out" className="sidebar-collapse btn-floating btn-medium waves-effect waves-light hide-on-large-only cyan"><i className="mdi-navigation-menu"></i></a>
            </aside>
            <section id="content">
               <div className="container">
                  <div id="card-stats">
                     <div className="row">
                        <div className="col s12 m6 l3">
                           <div className="card">
                              <div className="card-content  green white-text">
                                 <p className="card-stats-title"> Core Companies</p>
                                 <h4 className="card-stats-number">15</h4>
                                 <p className="card-stats-compare">20<span className="green-text text-lighten-5"> Companies Visited. </span>
                                 </p>
                              </div>
                           </div>
                        </div>
                        <div className="col s12 m6 l3">
                           <div className="card">
                              <div className="card-content pink lighten-1 white-text">
                                 <p className="card-stats-title"> Non-Core Companies</p>
                                 <h4 className="card-stats-number">140</h4>
                                 <p className="card-stats-compare">  40 <span className="deep-purple-text text-lighten-5"> Companies Visited.</span>
                                 </p>
                              </div>
                           </div>
                        </div>
                        <div className="col s12 m6 l3">
                           <div className="card">
                              <div className="card-content blue-grey white-text">
                                 <p className="card-stats-title"> Mass Recruiters</p>
                                 <h4 className="card-stats-number">400</h4>
                                 <p className="card-stats-compare">5 <span className="blue-grey-text text-lighten-5">Companies Visited.</span>
                                 </p>
                              </div>
                           </div>
                        </div>
                        <div className="col s12 m6 l3">
                           <div className="card">
                              <div className="card-content purple white-text">
                                 <p className="card-stats-title">PSU</p>
                                 <h4 className="card-stats-number">0</h4>
                                 <p className="card-stats-compare"> 0 <span className="purple-text text-lighten-5">Companies Visited.</span>
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div id="work-collections">
                     <div className="row">
                        <div className="col s12 m12 l6">
                           <ul id="projects-collection" className="collection">
                              <li className="collection-item avatar">
                                 <i className="mdi-file-folder circle light-blue darken-2"></i>
                                 <span className="collection-header">Recent Companies</span>
                                 <a href="#" className="secondary-content"><i className="mdi-action-grade"></i></a>
                              </li>
                              <li className="collection-item">
                                 <div className="row">
                                    <div className="col s4">
                                       <p className="collections-title">FACTSET</p>
                                       <p className="collections-content">Non-Core</p>
                                    </div>
                                    <div className="col s5">
                                       <span className="task-cat cyan">Software Engg.</span>
                                    </div>
                                    <div className="col s3">
                                       <button type="button" className="btn waves-effect waves-light light-blue animated swing"> 40</button>
                                    </div>
                                 </div>
                              </li>
                              <li className="collection-item">
                                 <div className="row">
                                    <div className="col s4">
                                       <p className="collections-title">Oracle</p>
                                       <p className="collections-content">Non-Core</p>
                                    </div>
                                    <div className="col s5">
                                       <span className="task-cat cyan">Application Engg</span><br/>
                                       <span className="task-cat cyan">Senior Consultant</span>
                                    </div>
                                    <div className="col s3">
                                       <button type="button" className="btn waves-effect waves-light light-blue animated swing"> 40</button>
                                    </div>
                                 </div>
                              </li>
                              <li className="collection-item">
                                 <div className="row">
                                    <div className="col s4">
                                       <p className="collections-title">Infosys</p>
                                       <p className="collections-content">Mass Recuiter</p>
                                    </div>
                                    <div className="col s5">
                                       <span className="task-cat cyan">Associate Software Engg.</span>
                                    </div>
                                    <div className="col s3">
                                       <button type="button" className="btn waves-effect waves-light light-blue animated swing"> 40</button>
                                    </div>
                                 </div>
                              </li>
                              <li className="collection-item">
                                 <div className="row">
                                    <div className="col s4">
                                       <p className="collections-title">Tata Motors</p>
                                       <p className="collections-content">Core</p>
                                    </div>
                                    <div className="col s5">
                                       <span className="task-cat cyan">Automobile Engg.</span>
                                    </div>
                                    <div className="col s3">
                                       <button type="button" className="btn waves-effect waves-light light-blue animated swing"> 40</button>
                                    </div>
                                 </div>
                              </li>
                           </ul>
                        </div>
                        <div className="col s12 m12 l6">
                           <ul id="issues-collection" className="collection">
                              <li className="collection-item avatar">
                                 <i className="mdi-action-bug-report circle red darken-2"></i>
                                 <span className="collection-header">Departments</span>
                                 <a href="#" className="secondary-content"><i className="mdi-action-grade"></i></a>
                              </li>
                              <li className="collection-item">
                                 <div className="row">
                                    <div className="col s7">
                                       <p className="collections-title"><strong>#1. </strong> Bio-Technology</p>
                                       <p className="collections-content">Total Strength : 100</p>
                                    </div>
                                    <div className="col s2">
                                       <span className="task-cat pink accent-2">15</span>
                                    </div>
                                    <div className="col s3">
                                       <div className="progress">
                                          <div className="determinate coll-item1"></div>
                                       </div>
                                    </div>
                                 </div>
                              </li>
                              <li className="collection-item">
                                 <div className="row">
                                    <div className="col s7">
                                       <p className="collections-title"><strong>#2. </strong> Chemical Engineering</p>
                                       <p className="collections-content">Total Strength : 50 </p>
                                    </div>
                                    <div className="col s2">
                                       <span className="task-cat yellow darken-4">10</span>
                                    </div>
                                    <div className="col s3">
                                       <div className="progress">
                                          <div className="determinate coll-item2" ></div>
                                       </div>
                                    </div>
                                 </div>
                              </li>
                              <li className="collection-item">
                                 <div className="row">
                                    <div className="col s7">
                                       <p className="collections-title"><strong>#3. </strong> Information Technology</p>
                                       <p className="collections-content">Total Strength : 100 </p>
                                    </div>
                                    <div className="col s2">
                                       <span className="task-cat light-green darken-3">70</span>
                                    </div>
                                    <div className="col s3">
                                       <div className="progress">
                                          <div className="determinate coll-item3"></div>
                                       </div>
                                    </div>
                                 </div>
                              </li>
                              <li className="collection-item">
                                 <div className="row">
                                    <div className="col s7">
                                       <p className="collections-title"><strong>#4. </strong> Computer Science and Engineering</p>
                                       <p className="collections-content">Total Strength : 100</p>
                                    </div>
                                    <div className="col s2">
                                       <span className="task-cat pink accent-2">65</span>
                                    </div>
                                    <div className="col s3">
                                       <div className="progress">
                                          <div className="determinate coll-item4" ></div>
                                       </div>
                                    </div>
                                 </div>
                              </li>
                           </ul>
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
export default TprDashboard;
