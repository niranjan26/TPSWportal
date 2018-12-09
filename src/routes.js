'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import NotFoundPage from './components/NotFoundPage';
import App from './components/sign.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import TprDashboard from './components/TprDashboard.js';
import TprRequestToAdmin from './components/AdminRequest.js';
import StudentDashboard from './components/StudentDashboard.js';
import NewCompany from './components/NewCompany.js';
const routes = (
  <Route path="/indexremoved" component={Layout}>
    //added below route
    //<Route path="/new" component={NewCompany}/>
    <Route path="/sign" component={App}/>
    <Route path="/" component={Login}/>
    <Route path="/register" component={Register}/>
    <Route path="/tpr" component={TprDashboard}/>
    <Route path="/tprrequest" component={TprRequestToAdmin}/>
    <Route path="/studentprofile" component={StudentDashboard}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;
