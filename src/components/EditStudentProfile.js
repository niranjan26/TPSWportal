import React, { Component } from 'react';
import { Link } from 'react-router';
class EditStudentProfile extends React.Component {
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
                  <li className="bold"><a href="/applytpr" className="waves-effect waves-cyan"><i className="material-icons">library_books</i> Apply For TPR </a>
                  </li>
               </ul>
               <a href="#" data-activates="slide-out" className="sidebar-collapse btn-floating btn-medium waves-effect waves-light hide-on-large-only cyan"><i className="mdi-navigation-menu"></i></a>
            </aside>
            <section id="content">
               <div className="container">
               <form  action="/editprofile" method="post" className="form-control">
                  <div className="panel-heading">Edit Profile</div>
                  <div className="panel-body">
                     <div className="row">
                        <div className="col-sm-6 col-md-8">
                           <ul className="list-group">
                              <div className="table-responsive">
                                 <table className="table">
                                    <tbody>
                                       <tr>
                                          <td>First Name</td>
                                          <td><input  type="text" name="firstname" className="form-control" placeholder="First Name" value={this.props.user.firstname} readOnly/></td>
                                       </tr>
                                       <tr>
                                          <td>Last Name</td>
                                          <td><input  type="text" name="lastname" className="form-control" placeholder="Last Name" value={this.props.user.lastname} readOnly /></td>
                                       </tr>
                                       <tr>
                                          <td>Date of Birth</td>
                                          <td><input  type="text" name="dob" className="form-control" placeholder="D.O.B" value={this.props.user.dob} readOnly /></td>
                                       </tr>
                                       <tr>
                                          <td>Fathers"'" Name</td>
                                          <td><input  type="text" name="fathername" className="form-control" placeholder="Fathers' Name" value={this.props.user.fathername} readOnly/></td>
                                       </tr>
                                       <tr>
                                          <td>Roll No.</td>
                                          <td><input  type="text" name="roll" className="form-control" placeholder="Roll Number" value={this.props.user.roll} readOnly/></td>
                                       </tr>
                                       <tr>
                                          <td>Branch</td>
                                          <td><input  type="text" name="branch" className="form-control" placeholder="Branch" value={this.props.user.branch} readOnly/></td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </div>
                           </ul>
                        </div>
                        <div className="col-sm-6 col-md-4">
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-sm-6 col-md-12">
                           <ul className="list-group">
                              <div className="table-responsive">
                                 <table className="table">
                                    <tbody>
                                       <tr>
                                          <td>Present Address</td>
                                          <td><input  type="text" name="paddress" className="form-control" placeholder="Present Address" value={this.props.user.paddress} /></td>
                                       </tr>
                                       <tr>
                                          <td>Address for Correspondence</td>
                                          <td><input type="text" className="form-control" name="caddress" placeholder="Address for Correspondence" value={this.props.user.caddress} /></td>
                                       </tr>
                                       <tr>
                                          <td>E-Mail Id</td>
                                          <td><input type="text" className="form-control" name="email" placeholder="E-Mail Id" value={this.props.user.email} readOnly/></td>
                                          <td>Cel No.</td>
                                          <td><input type="text" className="form-control" name="phone" placeholder="Cel Number" value={this.props.user.phone} /></td>
                                       </tr>
                                       <tr>
                                          <td><strong>Educational Qualification</strong></td>
                                       </tr>
                                       <tr>
                                          <td><strong>Secondary & Higher Secondary</strong></td>
                                          <table className="table table-bordered">
                                             <thead>
                                                <tr>
                                                   <th>Examination</th>
                                                   <th>Board/Institution</th>
                                                   <th>Year of Passing</th>
                                                   <th>Obtained Marks</th>
                                                   <th>Out of (Total marks)</th>
                                                   <th>Percentage</th>
                                                </tr>
                                             </thead>
                                             <tbody>
                                                <tr>
                                                   <td><input  type="text" name="sexam"className="form-control" placeholder="" value={this.props.user.sexams} readOnly/></td>
                                                   <td><input  type="text" name="sboard" value={this.props.user.sboard} readOnly className="form-control" placeholder=""/></td>
                                                   <td><input  type="text" name="syear" value={this.props.user.syear} readOnly className="form-control" placeholder=""/></td>
                                                   <td><input  type="text" name="smarks" value={this.props.user.smarks} readOnly className="form-control" placeholder=""/></td>
                                                   <td><input  type="text" name="stotal" value={this.props.user.stotal} readOnly className="form-control" placeholder=""/></td>
                                                   <td><input  type="text" name="spercent" value={this.props.user.spercent} readOnly className="form-control" placeholder=""/></td>
                                                </tr>
                                                <tr>
                                                   <td><input  type="text" name="hsexams" value={this.props.user.hsexams} readOnly className="form-control" placeholder=""/></td>
                                                   <td><input  type="text" name="hsboard" value={this.props.user.hsboard} readOnly className="form-control" placeholder=""/></td>
                                                   <td><input  type="text" name="hsyear" value={this.props.user.hsyear} readOnly className="form-control" placeholder=""/></td>
                                                   <td><input  type="text" name="hsmarks" value={this.props.user.hsmarks} readOnly className="form-control" placeholder=""/></td>
                                                   <td><input  type="text" name="hstotal" value={this.props.user.hstotal} readOnly className="form-control" placeholder=""/></td>
                                                   <td><input  type="text" name="hspercent" value={this.props.user.hspercent} readOnly className="form-control" placeholder=""/></td>
                                                </tr>
                                             </tbody>
                                          </table>
                                       </tr>
                                       <tr>
                                          <td><strong>Under Graduation</strong></td>
                                          <table className="table table-bordered">
                                             <thead>
                                                <tr>
                                                   <th>Semester</th>
                                                   <th>1</th>
                                                   <th>2</th>
                                                   <th>3</th>
                                                   <th>4</th>
                                                   <th>5</th>
                                                   <th>6</th>
                                                   <th>7</th>
                                                   <th>8</th>
                                                </tr>
                                             </thead>
                                             <tbody>
                                                <tr>
                                                   <td>SGPA</td>
                                                   <td><input type="text" className="form-control" name="firstsgpa" value={this.props.user.firstsgpa} readOnly placeholder=""/></td>
                                                   <td><input type="text" className="form-control" name="secondsgpa" value={this.props.user.secondsgpa} readOnly placeholder=""/></td>
                                                   <td><input type="text" className="form-control" name="thirdsgpa" value={this.props.user.thirdsgpa} readOnly placeholder=""/></td>
                                                   <td><input type="text" className="form-control" name="fourthsgpa" value={this.props.user.fourthsgpa} readOnly placeholder=""/></td>
                                                   <td><input type="text" className="form-control" name="fifthsgpa" value={this.props.user.fifthsgpa} readOnly placeholder=""/></td>
                                                   <td><input type="text" className="form-control" name="sixthsgpa" value={this.props.user.sixthsgpa} readOnly placeholder=""/></td>
                                                   <td><input type="text" className="form-control" name="seventhsgpa" value={this.props.user.seventhsgpa} placeholder=""/></td>
                                                   <td><input type="text" className="form-control" name="eighthsgpa" value={this.props.user.eightsgpa} placeholder=""/></td>
                                                </tr>
                                                <tr>
                                                   <td>CGPA</td>
                                                   <td><input type="text" className="form-control" name="firstcgpa" value={this.props.user.firstcgpa} readOnly placeholder=""/></td>
                                                   <td><input type="text" className="form-control" name="secondcgpa" value={this.props.user.secondcgpa} readOnly placeholder=""/></td>
                                                   <td><input type="text" className="form-control" name="thirdcgpa" value={this.props.user.thirdcgpa} readOnly placeholder=""/></td>
                                                   <td><input type="text" className="form-control" name="fourthcgpa" value={this.props.user.fourthcgpa} readOnly placeholder=""/></td>
                                                   <td><input type="text" className="form-control" name="fifthcgpa" value={this.props.user.fifthcgpa} readOnly placeholder=""/></td>
                                                   <td><input type="text" className="form-control" name="sixthcgpa" value={this.props.user.sixthcgpa} readOnly placeholder=""/></td>
                                                   <td><input type="text" className="form-control" name="seventhcgpa" value={this.props.user.seventhcgpa} placeholder=""/></td>
                                                   <td><input type="text" className="form-control" name="eighthcgpa" value={this.props.user.eighthcgpa} placeholder=""/></td>
                                                </tr>
                                             </tbody>
                                          </table>
                                       </tr>
                                    </tbody>
                                 </table>
                                 <hr/>
                                 <table className="table">
                                    <tbody>
                                       <tr>
                                          <td>Other Details: </td>
                                       </tr>
                                       <tr>
                                          <td>Registration Number: </td>
                                          <td><input  type="text" className="form-control" name="reg" value={this.props.user.reg} readOnly placeholder="Registration Number"/></td>
                                       </tr>
                                       <tr>
                                          <td>Gender: </td>
                                          <td><input  type="text" className="form-control" name="gender" value={this.props.user.gender} readOnly placeholder="Gender"/></td>
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
               </div>
            </section>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
export default EditStudentProfile;
