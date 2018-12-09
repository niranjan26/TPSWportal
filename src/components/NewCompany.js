'use strict';

import React from 'react';
import { Link } from 'react-router';
import CKEditor from 'react-ckeditor-wrapper';

export default class NewCompany extends React.Component {
  render() {
    return (
      <div className="panel panel-default">
        <form action="/company" className="companyValidate" id="companyValidate" method="post">
          {/* Default panel contents */}
          <div className="panel-heading h1">Add Company</div>
          <div className="panel-body ">
            <div className="row">
              <div className="input-field col s12 m10 l8 ">
                <label htmlFor="companyname" className>Comapny Name</label>
                <input id="companyname" name="companyname" type="text" className="validate" data-error=".errorTxt1" required />
              </div>
            </div>
            <label htmlFor="fields" className="h4">Required Fields </label>
            <div className="row">
              <div className="input-field col s12 m6 l4">
                <input type="checkbox" name="requiredFields" value="firstname" className="filled-in" id="firstname" />
                <label htmlFor="firstname">First Name</label>
              </div>
              <div className="input-field col s12 m6 l4">
                <input type="checkbox" name="requiredFields" value="lastname" className="filled-in" id="lastname" />
                <label htmlFor="lastname">Last Name</label>
              </div>
              <div className="input-field col s12 m6 l4">
                <input type="checkbox" name="requiredFields" value="gender" className="filled-in" id="gender" />
                <label htmlFor="gender">Gender</label>
              </div>
              <div className="input-field col s12 m6 l4">
                <input type="checkbox" name="requiredFields" value="dob" className="filled-in" id="dob" />
                <label htmlFor="dob">Date of Birth</label>
              </div>
              <div className="input-field col s12 m6 l4">
                <input type="checkbox" name="requiredFields" value="paddress" className="filled-in" id="paddress" />
                <label htmlFor="paddress">Present Address</label>
              </div>
              <div className="input-field col s12 m6 l4">
                <input type="checkbox" name="requiredFields" value="caddress" className="filled-in" id="caddress" />
                <label htmlFor="caddress">Correspondence Address</label>
              </div>
              <div className="input-field col s12 m6 l4">
                <input type="checkbox" name="requiredFields" value="phone" className="filled-in" id="phone" />
                <label htmlFor="phone">Phone No.</label>
              </div>
              <div className="input-field col s12 m6 l4">
                <input type="checkbox" name="requiredFields" value="email" className="filled-in" id="email" />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field col s12 m6 l4">
                <input type="checkbox" name="requiredFields" value="branch" className="filled-in" id="branch" />
                <label htmlFor="branch">Branch</label>
              </div>
              <div className="input-field col s12 m6 l4">
                <input type="checkbox" name="requiredFields" value="roll" className="filled-in" id="roll" />
                <label htmlFor="roll">Roll No.</label>
              </div>
              <div className="input-field col s12 m6 l4">
                <input type="checkbox" name="requiredFields" value="reg" className="filled-in" id="reg" />
                <label htmlFor="reg">Registration Number</label>
              </div>
              <div className="input-field col s12 m6 l4">
                <input type="checkbox" name="requiredFields" value="cgpa" className="filled-in" id="cgpa" />
                <label htmlFor="cgpa">CGPA</label>
              </div>
              <div className="input-field col s12 m6 l4">
                <input type="checkbox" name="requiredFields" value="smarks" className="filled-in" id="smarks" />
                <label htmlFor="smarks">X Class Marks</label>
              </div>
              <div className="input-field col s12 m6 l4">
                <input type="checkbox" name="requiredFields" value="sboard" className="filled-in" id="sboard" />
                <label htmlFor="sboard">X Class Board</label>
              </div>
              <div className="input-field col s12 m6 l4">
                <input type="checkbox" name="requiredFields" value="hsmarks" className="filled-in" id="hsmarks" />
                <label htmlFor="hsmarks">XII Class Marks</label>
              </div>
              <div className="input-field col s12 m6 l4">
                <input type="checkbox" name="requiredFields" value="hsboard" className="filled-in" id="hsboard" />
                <label htmlFor="hsboard">XII Class Board</label>
              </div>
            </div>
            <br /> <br />
            <label htmlFor="fields" className="h4">Constraints </label><br />
            <label htmlFor="fields" className="h5">Branches Allowed</label>
            <div className="row">
              <div className="input-field col s12 m6 l4">
                <input type="checkbox" name="branchesAllowed" value="bt" className="filled-in" id="bt" />
                <label htmlFor="bt">Bio Technology</label>
              </div>
              <div className="input-field col s12 m6 l4">
                <input type="checkbox" name="branchesAllowed"  value="ce" className="filled-in" id="ce" />
                <label htmlFor="ce">Civil Engineering</label>
              </div>
              <div className="input-field col s12 m6 l4">
                <input type="checkbox" name="branchesAllowed" value="ch" className="filled-in" id="ch" />
                <label htmlFor="ch">Chemical Engineering</label>
              </div>
              <div className="input-field col s12 m6 l4">
                <input type="checkbox" name="branchesAllowed" value="cs" className="filled-in" id="cs" />
                <label htmlFor="cs">Computer Science Engineering</label>
              </div>
              <div className="input-field col s12 m6 l4">
                <input type="checkbox" name="branchesAllowed" value="ec" className="filled-in" id="ec" />
                <label htmlFor="ec">Electronics Engineering</label>
              </div>
              <div className="input-field col s12 m6 l4">
                <input type="checkbox" name="branchesAllowed" value="ee" className="filled-in" id="ee" />
                <label htmlFor="ee">Electrical Engineering</label>
              </div>
              <div className="input-field col s12 m6 l4">
                <input type="checkbox" name="branchesAllowed" value="it" className="filled-in" id="it" />
                <label htmlFor="it">Information Technology</label>
              </div>
              <div className="input-field col s12 m6 l4">
                <input type="checkbox" name="branchesAllowed" value="me" className="filled-in" id="me" />
                <label htmlFor="me">Mechanical Engineering</label>
              </div>
              <div className="input-field col s12 m6 l4">
                <input type="checkbox" name="branchesAllowed" value="mm" className="filled-in" id="mm" />
                <label htmlFor="mm">Metallurgical &amp; Materials Engineering</label>
              </div>
              <div className="input-field col s12 m6 l4">
                <input type="checkbox" name="branchesAllowed" value="mtech" className="filled-in" id="mtech" />
                <label htmlFor="mtech">M Tech</label>
              </div>
              <div className="input-field col s12 m6 l4">
                <input type="checkbox" name="branchesAllowed" value="mca" className="filled-in" id="mca" />
                <label htmlFor="mca">MCA</label>
              </div>
            </div>
            <br /> <br />
            <label htmlFor="markscontraints" className="h5"> Marks Constraints</label>
            <div className="row">
              <div className="input-field col s12 m10 l8">
                <label htmlFor="minsmarks">Minimum X Marks %</label>  <br />
                <input type="range" name="minsmark" id="minsmarks" min={0} max={100} defaultValue={0} /><br />
              </div>
              <div className="input-field col s12 m10 l8">
                <label htmlFor="minhsmarks">Minimum XII Marks %</label> <br /><br />
                <input type="range" name="minhsmark" id="minhsmarks" min={0} max={100} defaultValue={0} />
              </div>
              <div className="input-field col s12 m10 l8">
                <label htmlFor="mincgpa">Minimum CGPA</label> <br /><br />
                <input type="range" name="mincg" id="mincgpa" min={0} max={10} step=".5" defaultValue={0} />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12 m6 l4">
                <input type="checkbox" name="constraint" value="backlogs" className="filled-in" id="backlog" />
                <label htmlFor="backlog">No. of Back Logs</label>
              </div>
              <div className="input-field col s12 m6 l4">
                <input type="checkbox" name="constraint" value="currentbacklogs" className="filled-in" id="cbacklog" />
                <label htmlFor="cbacklog">No. of Current Back Logs</label>
              </div>
              <div className="input-field col s12 m6 l4">
                <input type="checkbox" name="constraint" value="fresher" className="filled-in" id="fresher" />
                <label htmlFor="fresher">Must be Fresher</label>
              </div>  <br /> <br />  <hr />
              <label htmlFor="aboutcompany" className="h4">About Company</label>
              <div className="row">
                <textarea className="ckeditor" name="editor" value="" />
              </div>
            </div>
            <br />
            <div className="input-field col s12 m10 l8 push-l2">
              <button className="btn mangeta waves-effect waves-light " type="submit" name="submit">Submit</button>
            </div>
          </div>
        </form></div>
    );
  }
}
