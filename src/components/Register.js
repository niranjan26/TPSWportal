'use-strict';
import React, { Component } from 'react';
/*
import '../static/Login/js/index.js';*/
import { Link } from 'react-router';
import Navbar from './Navbar';
class Register extends React.Component {
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
                        <a className="btn-flat dropdown-button waves-effect waves-light white-text profile-btn" href="#" data-activates="profile-dropdown">NIT Durgapur</a>
                        <p className="user-roal">TPSW</p>
                     </div>
                  </div>
               </li>
               <li className="bold active"><a href="/register" className="waves-effect waves-cyan"><i className="material-icons">library_books</i> Register</a>
               </li>
               <li className="bold"><a href="/" className="waves-effect waves-cyan"><i className="material-icons">verified_user</i>Login</a>
               </li>
            </ul>
            <a href="#" data-activates="slide-out" className="sidebar-collapse btn-floating btn-medium waves-effect waves-light hide-on-large-only cyan"><i className="material-icons">reorder</i></a>
         </aside>
         <section id="content">
            <div className="container pad_top_reg">
               <div className="panel panel-default" >

                     <form className="formValidate" id="formValidate" method="post" action="/signup">
                       <div className="panel-heading h1">Register</div>
                       <div className="panel-body ">
                         <div className="row">
                           <div className="input-field col s12 m10 l8 ">
                             <label htmlFor="firstname" className>Name</label>
                             <input id="firstname" name="firstname" type="text" className="validate" data-error=".errorTxt1" />
                           </div>
                         </div>
                         <div className="row">
                           <div className="input-field col s12 m10 l8 ">
                             <input id="lastname" name="lastname" type="text" className="validate" />
                             <label htmlFor="lastname" className>Last Name</label>
                           </div>
                         </div>
                         <div className="row">
                           <div className="input-field col s12 m10 l8 ">
                             <input id="fathername" name="fathername" type="text" className="validate" />
                             <label htmlFor="fathername" className>Father&#39;s Name</label>
                           </div>
                         </div>
                         <div className="row">
                           <div className="input-field col s12 m5 l4 ">
                             <input type="date" name="dob" className="datepicker" />
                             <i className="mdi-social-cake" />
                             <label htmlFor="dob">DOB</label>
                           </div>
                           <div className="input-field col s12 m5 l4">
                             <select id="gender" name="gender">
                               <option value disabled selected>Gender</option>
                               <option value="Male" >Male</option>
                               <option value="Female" >Female</option>
                               <option value="Other" >Others</option>
                             </select>
                             <label>Gender</label>
                           </div>
                         </div>
                         <div className="row">
                           <div className="input-field col s12 m5 l4">
                             <input id="reg" name="reg" type="text" className="validate" />
                             <label htmlFor="regno">Registration No</label>
                           </div>
                           <div className="input-field col s12 m5 l4">
                             <input id="roll" name="roll" type="text" className="validate" />
                             <label htmlFor="roll">Roll No</label>
                           </div>
                         </div>
                         <div className="row">
                           <div className="input-field col s12 m10 l8 ">
                             <select name="branch" id="branch">
                               <option value disabled selected>Branch</option>
                               <option value="Biotechnology">Biotechnology</option>
                               <option value="Civil Engineering">Civil Engineering</option>
                               <option value="Chemical Engineering">Chemical Engineering</option>
                               <option value="Computer Science Engineering">Computer Science Engineering</option>
                               <option value="Electronics And Communication Engi">Electronics And Communication Engi</option>
                               <option value="Electrical Engineering">Electrical Engineering</option>
                               <option value="Information Technology">Information Technology</option>
                               <option value="Mechanical Engineering">Mechanical Engineering</option>
                               <option value="Metallurgical And Materials Engineering">Metallurgical And Materials Engineering</option>
                             </select>
                           </div>
                         </div>
                         <div className="row">
                           <div className="input-field col s12 m10 l8 validate">
                             <input id="address" name="paddress" type="text" className="validate" />
                             <label htmlFor="address" className>Permanent Address</label>
                           </div>
                         </div>
                         <div className="row">
                           <div className="input-field col s12 m10 l8 validate">
                             <input id="caddress" name="caddress" type="text" className="validate" />
                             <label htmlFor="caddress" className>Address for Correspondence</label>
                           </div>
                         </div>
                         <div className="row">
                           <div className="input-field col s12 m10 l8">
                             <input id="email" name="email" type="email" className="validate" />
                             <label htmlFor="email" className>Email ID</label>
                           </div>
                         </div>
                         <div className="row">
                           <div className="input-field col s12 m10 l8">
                             <input id="phone" name="phone" type="text" />
                             <label htmlFor="phone" className>Phone Number</label>
                           </div>
                         </div>
                         <div className="h3">Educational Qualification</div>
                         <div className="h4">Secondary &amp; Higher Secondary</div>
                         <div className="row">
                           <div className="input-field col s12 m4 l2">
                             <input type="text" id="sexam" name="sexam" placeholder="For X" className="validate" />
                             <input type="text" id="hsexam" name="hsexams" placeholder="For XII" className="validate" />
                             <label htmlFor="exam" className>Examination</label>
                           </div>
                           <div className="input-field col s12 m4 l2">
                             <input type="text" id="sboard" name="sboard" placeholder="For X" className="validate" />
                             <input type="text" id="hsboard" name="hsboard" placeholder="For XII" className="validate" />
                             <label htmlFor="board" className>Board/Institution</label>
                           </div>
                           <div className="input-field col s12 m4 l2">
                             <input type="text" id="syear" name="syear" placeholder="For X" className="validate" />
                             <input type="text" id="hsyear" name="hsyear" placeholder="For XII" className="validate" />
                             <label htmlFor="yearofpassing" className>Year of Passing</label>
                           </div>
                           <div className="input-field col s12 m4 l2">
                             <input type="text" id="smarks" name="smarks" placeholder="For X" className="validate" />
                             <input type="text" id="hsmarks" name="hsmarks" placeholder="For XII" className="validate" />
                             <label htmlFor="marksob" className>Marks Obtained</label>
                           </div>
                           <div className="input-field col s12 m4 l2">
                             <input type="text" id="stotal" name="stotal" placeholder="For X" className="validate" />
                             <input type="text" id="hstotal" name="hstotal" placeholder="For XII" className="validate" />
                             <label htmlFor="totalmarks" className>Out of (Total marks)</label>
                           </div>
                         </div>
                         <div className="row">
                           <input type="radio" name="pg" id="btech" onclick="check_course(0)" />
                           <label htmlFor="btech">Under Graduate (B-Tech) </label>
                           <input type="radio" name="pg" id="mtech" onclick="check_course(1)" />
                           <label htmlFor="mtech">Post Graduate (M-Tech) </label>
                           <input type="radio" name="pg" id="mca" onclick="check_course(2)" />
                           <label htmlFor="mca">Post Graduate (MCA) </label>
                         </div>
                         <div id="ug">
                           <div className="h4">Under Graduation</div>
                           <div className="row">
                             <div className="input-field col s12 m4 l1">
                               <input type="text" className="form-control" name="firstsgpa" placeholder="SGPA" />
                               <input type="text" className="form-control" name="firstcgpa" placeholder="CGPA" />
                               <label htmlFor="sem1" className>1st </label>
                             </div>
                             <div className="input-field col s12 m4 l1">
                               <input type="text" className="form-control" name="secondsgpa" placeholder="SGPA" />
                               <input type="text" className="form-control" name="secondcgpa" placeholder="CGPA" />
                               <label htmlFor="sem2" className>2nd </label>
                             </div>
                             <div className="input-field col s12 m4 l1">
                               <input type="text" className="form-control" name="thirdsgpa" placeholder="SGPA" />
                               <input type="text" className="form-control" name="thirdcgpa" placeholder="CGPA" />
                               <label htmlFor="sem3" className>3rd </label>
                             </div>
                             <div className="input-field col s12 m4 l1">
                               <input type="text" className="form-control" name="fourthsgpa" placeholder="SGPA" />
                               <input type="text" className="form-control" name="fourthcgpa" placeholder="CGPA" />
                               <label htmlFor="sem4" className>4th </label>
                             </div>
                             <div className="input-field col s12 m4 l1">
                               <input type="text" className="form-control" name="fifthsgpa" placeholder="SGPA" />
                               <input type="text" className="form-control" name="fifthcgpa" placeholder="CGPA" />
                               <label htmlFor="sem5" className>5th </label>
                             </div>
                             <div className="input-field col s12 m4 l1">
                               <input type="text" className="form-control" name="sixthsgpa" placeholder="SGPA" />
                               <input type="text" className="form-control" name="sixthcgpa" placeholder="CGPA" />
                               <label htmlFor="sem6" className>6th </label>
                             </div>
                             <div className="input-field col s12 m4 l1">
                               <input type="text" className="form-control" name="seventhsgpa" placeholder="SGPA" />
                               <input type="text" className="form-control" name="seventhcgpa" placeholder="CGPA" />
                               <label htmlFor="sem7" className>7th </label>
                             </div>
                             <div className="input-field col s12 m4 l1">
                               <input type="text" className="form-control" name="eighthsgpa" placeholder="SGPA" />
                               <input type="text" className="form-control" name="eigthtcgpa" placeholder="CGPA" />
                               <label htmlFor="sem8" className>8th </label>
                             </div>
                           </div>
                         </div>
                         <div id="mtechpg">
                           <div className="h4">Post Graduation</div>
                           <div className="row validate">
                             <div className="input-field col s12 m4 l2">
                               <input type="text" id="ugcollege" name="ugcollege" placeholder="UG College Name" className="validate" />
                               <label>College Name</label>
                             </div>
                             <div className="input-field col s12 m4 l2">
                               <input type="text" id="uguniv" name="uguniv" placeholder="UG Affliated Unversity" className="validate" />
                               <label>Affliation</label>
                             </div>
                             <div className="input-field col s12 m4 l2">
                               <input type="text" name="mtechugmarks" placeholder="UG CGPA" className="validate" />
                               <label htmlFor="mtechug" className>Under Graduation CGPA </label>
                             </div>
                             <div className="input-field col s12 m4 l2">
                               <input type="text" name="mtechugtotalmarks" placeholder="Total Marks" className="validate" />
                               <label htmlFor="mtechug" className>Total Marks </label>
                             </div>
                           </div>
                           <div className="row">
                             <div className="input-field col s12 m4 l1">
                               <input type="text" name="mfirstsgpa" placeholder="SGPA" className="validate" />
                               <input type="text" name="mfirstcgpa" placeholder="CGPA" className="validate" />
                               <label htmlFor="sem1" className>1st </label>
                             </div>
                             <div className="input-field col s12 m4 l1">
                               <input type="text" name="msecondsgpa" placeholder="SGPA" className="validate" />
                               <input type="text" name="msecondcgpa" placeholder="CGPA" className="validate" />
                               <label htmlFor="sem2" className>2nd </label>
                             </div>
                             <div className="input-field col s12 m4 l1">
                               <input type="text" name="mthirdsgpa" placeholder="SGPA" className="validate" />
                               <input type="text" name="mthirdcgpa" placeholder="CGPA" className="validate" />
                               <label htmlFor="sem3" className>3rd </label>
                             </div>
                             <div className="input-field col s12 m4 l1">
                               <input type="text" name="mfourthsgpa" placeholder="SGPA" className="validate" />
                               <input type="text" name="mfourthcgpa" placeholder="CGPA" className="validate" />
                               <label htmlFor="sem4" className>4th </label>
                             </div>
                           </div>
                         </div>
                         <div id="mcapg" className="validate">
                           <div className="h4">Post Graduation</div>
                           <div className="row validate">
                             <div className="input-field col s12 m4 l2">
                               <input type="text" id="mcaugcollege" name="mcaugcollege" placeholder="UG College Name" className="validate" />
                               <label>College Name</label>
                             </div>
                             <div className="input-field col s12 m4 l2">
                               <input type="text" id="mcauguniv" name="mcauguniv" placeholder="UG Affliated Unversity" className="validate" />
                               <label>Affliation</label>
                             </div>
                             <div className="input-field col s12 m4 l2">
                               <input type="text" name="mcaugmarks" placeholder="UG CGPA" className="validate" />
                               <label htmlFor="mtechug" className>Under Graduation CGPA </label>
                             </div>
                             <div className="input-field col s12 m4 l2">
                               <input type="text" name="mcaugtotalmarks" placeholder="Total Marks" className="validate" />
                               <label htmlFor="mtechug" className>Total Marks </label>
                             </div>
                           </div>
                           <div className="row">
                             <div className="input-field col s12 m4 l1">
                               <input type="text" className="form-control" name="mcafirstsgpa" placeholder="SGPA" />
                               <input type="text" className="form-control" name="mcafirstcgpa" placeholder="CGPA" />
                               <label htmlFor="sem1" className>1st </label>
                             </div>
                             <div className="input-field col s12 m4 l1">
                               <input type="text" className="form-control" name="mcasecondsgpa" placeholder="SGPA" />
                               <input type="text" className="form-control" name="mcasecondcgpa" placeholder="CGPA" />
                               <label htmlFor="sem2" className>2nd </label>
                             </div>
                             <div className="input-field col s12 m4 l1">
                               <input type="text" className="form-control" name="mcathirdsgpa" placeholder="SGPA" />
                               <input type="text" className="form-control" name="mcathirdcgpa" placeholder="CGPA" />
                               <label htmlFor="sem3" className>3rd </label>
                             </div>
                             <div className="input-field col s12 m4 l1">
                               <input type="text" className="form-control" name="mcafourthsgpa" placeholder="SGPA" />
                               <input type="text" className="form-control" name="mcafourthcgpa" placeholder="CGPA" />
                               <label htmlFor="sem4" className>4th </label>
                             </div>
                             <div className="input-field col s12 m4 l1">
                               <input type="text" className="form-control" name="mcafifthsgpa" placeholder="SGPA" />
                               <input type="text" className="form-control" name="mcafifthcgpa" placeholder="CGPA" />
                               <label htmlFor="sem5" className>5th </label>
                             </div>
                             <div className="input-field col s12 m4 l1">
                               <input type="text" className="form-control" name="mcasixthsgpa" placeholder="SGPA" />
                               <input type="text" className="form-control" name="mcasixthcgpa" placeholder="CGPA" />
                               <label htmlFor="sem6" className>6th </label>
                             </div>
                           </div>
                         </div>
                         <div className="row">
                           <div className="input-field col s12 m10 l8">
                             <input id="pass" name="pass" type="password" className="validate" />
                             <label htmlFor="pass">Password</label>
                           </div>
                         </div>
                         <div className="row">
                           <div className="input-field col s12 m10 l8">
                             <input id="cpass" name="cpass" type="password" className="validate" />
                             <label htmlFor="cpass">Confirm Password</label>
                           </div>
                         </div>
                         <div className="input-field col s12 m10 l8 push-l2">
                           <button className="btn mangeta waves-effect waves-light " type="submit" name="submit">Submit</button>
                         </div>
                       </div>
                     </form>
            </div>
           </div>
         </section>
      </div>
   </div>
</div>
);
}
}
export default Register;
