var mongoose = require('mongoose');
var Student = require('./student.js');

var applicationForTPRSchema = mongoose.Schema({
  firstname : String,
  lastname : String,
  roll : String,
  email : {
    type : String,
    index : true},
  branch : String,
  application_status : String,
  isTpr : Boolean,
});

applicationForTPRSchema.methods.newApplication = function(req,res){
  this.firstname = req.body.firstname;
  this.lastname = req.body.lastname;
  this.roll = req.body.roll;
  this.branch = req.body.branch;
  this.email = req.body.email;
  this.application_status = "applied";
  var getStudent = new Student();
  this.isTpr = getStudent.getStudentByEmail(req.body.email,function(err,student){
    return student.isTpr;
  });
  getStudent.applicationForTpr(req.body.email);
  this.save();
  res.redirect('/studentprofile');
};

applicationForTPRSchema.methods.findAllNonAcceptedApplications = function(callback){
  console.log('in search function');
  var query = {'application_status': 'applied'};
  TprRequests.find(query,callback);
}

applicationForTPRSchema.methods.requestAccepted = function(email){
  var updateStudentStatus = new Student();
  updateStudentStatus.getStudentByEmail(email,function(err,student){
    student.isTpr = true;
    student.save();
  });
  var updateRequest = new TprRequests();
  updateRequest.getApplicationByEmail(email,function(err,application){
    application.application_status = "accepted";
    application.isTpr = true;
    application.save();
  });
  return true;
}

applicationForTPRSchema.methods.getApplicationByEmail = function(email,callback){
  var query = {'email': email};
  TprRequests.findOne(query,callback);
}

var TprRequests = module.exports = mongoose.model('TprRequests',applicationForTPRSchema);
