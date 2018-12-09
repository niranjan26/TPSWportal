var mongoose = require('mongoose');

var companySchema = mongoose.Schema({
  companyName : String,
  requiredFields : [String],
  branchesAllowed : [String],
  minsmark : Number,
  minhsmark : Number,
  mincg : Number,
  constraint : [String],
  moreDetails : [String],
  studentsApplied : [String],
  companyId : String
});

companySchema.methods.addCompany = function(req,res){
  this.companyName = req.body.companyname;
  this.requiredFields = req.body.requiredFields;
  this.branchesAllowed = req.body.branchesAllowed;
  this.minhsmark = req.body.minhsmark;
  this.minsmark = req.body.minsmark;
  this.mincg = req.body.mincg;
  this.constraint = req.body.constraint;
  this.moreDetails = req.body.moreDetails;
  this.companyid = req.body.companyname+" "+(Date());
  this.save();
  res.redirect('/new');
};

var Company = module.exports = mongoose.model('Company',companySchema);
