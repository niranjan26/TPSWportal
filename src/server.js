'use strict';

import path from 'path';
import { Server } from 'http';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes';
import NotFoundPage from './components/NotFoundPage';
import StudentDashboard from './components/StudentDashboard.js';
import TprDashboard from './components/TprDashboard.js';
import Login from './components/Login.js';
import TprRequestToAdmin from './components/AdminRequest.js';
import TprApplication from './components/TprApplication.js';
import EditStudentProfile from './components/EditStudentProfile.js';
import AddCompany from './components/AddCompany.js';

var flash = require('connect-flash');
var session = require('express-session');
var bodyParser = require("body-parser");
var Student = require('./models/student.js');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var TprRequests = require('./models/tprapply.js');
var Company = require('./models/company.js');
//connecting db
var url = 'mongodb://localhost:27017/test';
mongoose.Promise = require('bluebird');
mongoose.connect(url,function(err){
  if(err) console.log(err);
});
//create app
const app = new Express();
const server = new Server(app);

// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: false
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

//global vars
app.use(function (req, res, next) {
  //console.log("bskdbvksbvks "+req.student+" "+req.user);
  res.locals.studentUser = req.user || null;
  next();
});

// Connect Flash
app.use(flash());

//view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//session back button problem
app.use(function(req, res, next) {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    next();
});

//logout
app.get('/logout', function(req, res){
  req.logout();
  req.session.destroy();
  //req.flash('success_msg', 'You are logged out');

  res.redirect('/');
});

// universal routing and rendering
function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/');
	}
}

//login page
app.get('/',(req,res) => {
  if(req.url == '/' && req.isAuthenticated() && !req.user.isTpr){
    res.redirect('/studentprofile');
  }
  else if(req.url == '/' && req.isAuthenticated() && req.user.isTpr){
    res.redirect('/tpr');
  }
  else if(req.url == '/' && req.session && req.session.admin){
    res.redirect('/tprrequest');
  }
  let markup
  markup = renderToString(<Login />);
  return res.render('index',{ markup });
});

//STUDENT
//student register post function
app.post('/signup',function(req, res) {
     var newStudent = new Student();
     var conn = mongoose.connection;
     console.log(newStudent);
     newStudent.addStudent(req,res);
});
//student edit profile page
app.get('/editprofile',function(req,res){
  if(req.url == '/editprofile' && !req.isAuthenticated()){
    res.redirect('/');
  }
  if(req.url == '/editprofile' && req.isAuthenticated()){
    let markup
    markup = renderToString(<EditStudentProfile user={req.user}/>);
    return res.render('index',{ markup });
  }
});
//student edit profile post function
app.post('/editprofile',function(req,res){
  var editStudentProfile = new Student();
  editStudentProfile.editprofile(req,res);
});
//student profile page
app.get('/studentprofile',(req,res) => {
  if(req.url == '/studentprofile' && !req.isAuthenticated()){
    res.redirect('/');
  }
  if(req.url == '/studentprofile' && req.isAuthenticated()){
    let markup
    markup = renderToString(<StudentDashboard user={req.user}/>);
    return res.render('index',{ markup });
  }
});
//apply for tpr student form
app.get('/applytpr',(req,res) => {
  if(req.url == '/applytpr' && !req.isAuthenticated()){
    res.redirect('/');
  }
  if(req.url == '/applytpr' && req.isAuthenticated()){
    let markup
    markup = renderToString(<TprApplication user={req.user}/>);
    return res.render('index',{ markup });
  }
});
//tpr Application post function
app.post('/applytpr',function(req,res){
  var newApplication = new TprRequests();
  newApplication.newApplication(req,res);
});


//TPR
//addcompany
app.get('/new',function(req,res){
  if(req.url == '/new' && !req.isAuthenticated()){
    res.redirect('/');
  }
  if(req.url == '/new' && req.isAuthenticated() && req.user.isTpr){
    console.log(req.user.isTpr);
    let markup
    markup = renderToString(<AddCompany user={req.user}/>);
    return res.render('index',{ markup });
  }
});
//new Company
app.post('/company',function(req,res){
  console.log(req.body);
  console.log(Date());
  var newCompany = new Company();
  newCompany.addCompany(req,res);
  //res.redirect('/new');
});
//tpr dashboard page
app.get('/tpr',(req,res) => {
  if(req.url == '/tpr' && !req.isAuthenticated()){
    res.redirect('/');
  }
  if(req.url == '/tpr' && req.isAuthenticated() && req.user.isTpr){
    console.log(req.user.isTpr);
    let markup
    markup = renderToString(<TprDashboard user={req.user}/>);
    return res.render('index',{ markup });
  }
});

//ADMIN
//admin dashboard page
app.get('/admindashboard',(req,res)=>{
  if(req.session && req.session.user == "TPSW" && req.session.admin) {
  console.log(req.session.admin);
  let markup
  var userAdmin = {
    firstname : "Admin"
  };
  markup = renderToString(<TprDashboard user={req.session} />);
  return res.render('index',{ markup });
  }
  else
  {
    res.redirect('/');
  }
});
//admin tpr request accept
app.get('/tprrequest/accept/',(req,res)=>{
  var requestAccept = new TprRequests();
  if(requestAccept.requestAccepted(req.query.email)) {
    res.redirect('/tprrequest');
  }
});
//admin tpr requests show page
app.get('/tprrequest',(req,res)=>{
  if(req.session && req.session.user == "TPSW" && req.session.admin) {
  console.log(req.session.admin);
  var request = new TprRequests();
  request.findAllNonAcceptedApplications(function(err,applications){
    console.log("after search function "+applications);
    if(err) throw err;
    else {
      let markup
      markup = renderToString(<TprRequestToAdmin applications={applications} />);
      return res.render('index',{ markup });
    }
  });
  }
  else
  {
    res.redirect('/');
  }
});

app.get('*', (req, res) => {
  console.log(req.url);
  match(
    { routes, location: req.url },
    (err, redirectLocation, renderProps) => {

      // in case of error display the error message
      if (err) {
        return res.status(500).send(err.message);
      }

      // in case of redirect propagate the redirect to the browser
      if (redirectLocation) {
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      }

      // generate the React markup for the current route
      let markup;
      if (renderProps) {
        // if the current route matched we have renderProps
        markup = renderToString(<RouterContext {...renderProps} />);
      } else {
        // otherwise we can render a 404 page
        markup = renderToString(<NotFoundPage/>);
        res.status(404);
      }

      // render the index template with the embedded React markup
      return res.render('index', { markup });
    }
  );
});

//passport authentication student user
passport.use('user-student',new LocalStrategy({
        usernameField : 'email',
        passReqToCallback : true
        // passwordField : 'password'
},
function(req,email, password, done) {
var newStudent = new Student();
 console.log(email+" "+password);
 newStudent.getStudentByEmail(email, function(err, student){
 	if(err) throw err;
 	if(!student){
 		return done(null, false ,{message: 'Unknown User'});
 	}
 	newStudent.comparePassword(password, student.pass, function(err, isMatch){
 		if(err) throw err;
    console.log(isMatch);
 		if(isMatch){
 			return done(null, student);
 		} else {
 			return done(null, false,{message: 'invalid password'});
 		}
 	});
 });
}));

//passport authentication tpr user
passport.use('user-tpr',new LocalStrategy({
        usernameField : 'email',
        passReqToCallback : true
        // passwordField : 'password'
},
function(req,email, password, done) {
var newStudent = new Student();
 console.log(email+" "+password);
 newStudent.getStudentByEmail(email, function(err, student){
 	if(err) throw err;
 	if(!student){
 		return done(null, false ,{message: 'Unknown User'});
 	}
 	newStudent.comparePassword(password, student.pass, function(err, isMatch){
 		if(err) throw err;
    console.log(isMatch);
 		if(isMatch && student.isTpr){
 			return done(null, student);
 		} else {
 			return done(null, false,{message: 'invalid password'});
 		}
 	});
 });
}));

//passport user serlization
passport.serializeUser(function(student, done) {
  console.log(student.isTpr);
  done(null, student.id);
});

passport.deserializeUser(function(id, done) {
  Student.findById(id, function(err, student) {
    done(err, student);
  });
});

//student login post functon
app.post('/signin',
  passport.authenticate('user-student',{successRedirect:'/studentprofile',failureRedirect:'/',failureFlash:true}),
  function(req,res){
      console.log(req.url);
      res.redirect('/studentprofile');
});

//tpr login post function
app.post('/tprsignin',
  passport.authenticate('user-tpr',{successRedirect:'/tpr',failureRedirect:'/',failureFlash:true}),
  function(req,res){
      console.log(req.url);
      res.redirect('/tpr');
});

//admin login post function
app.post('/adminlogin',function(req,res){
  console.log(req.body.email+" "+req.body.password);
  if(req.body.email == "tpsw@gmail.com" && req.body.password == "tpsw@gmail.com")
  {
    req.session.user = "TPSW";
    req.session.admin = true;
    res.redirect('/tprrequest');
  }
  else{
    res.redirect('/');
  }
});

// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});
