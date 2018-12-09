'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class TprCandidate extends React.Component {
  onAcceptHandleFunction(){
     var email = this.props.applicant.email;
     return "/tprrequest/accept/?email="+email;
  };
  render() {
    return (
      <div >

      <div className="blog blog1-customised">
         <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
               <a><img src="images/tprrequest.jpg" alt="blog-img"/>
               </a>
            </div>
            <ul className="card-action-buttons">
               <li><a  href={this.onAcceptHandleFunction()} className="btn-floating waves-effect waves-light green accent-4"><i className="mdi-action-done"></i></a>
               </li>
               <li><a className="btn-floating waves-effect waves-light light-blue"><i className="mdi-action-info activator"></i></a>
               </li>
               <li><a  className="btn-floating waves-effect waves-light light-red"><i className="mdi-content-clear"></i></a>
               </li>
            </ul>
            <div className="card-content">
               <h4 className="card-title grey-text text-darken-4"><a href="#" className="grey-text text-darken-4">Hi..! Greetings </a>
               </h4>
               <p className="blog-post-content">Please accept my request.</p>
               <div className="row">
                  <div className="col s9"> From <a href="#">{this.props.applicant.firstname} {this.props.applicant.lastname} &nbsp; {this.props.applicant.roll} &nbsp;   {this.props.applicant.branch}</a></div>
               </div>
            </div>
            <div className="card-reveal">
               <span className="card-title grey-text text-darken-4"><i className="mdi-navigation-close right"></i>{this.props.applicant.firstname} {this.props.applicant.firstname}</span>
            </div>
         </div>
      </div>

      </div>
    );
  }
}
