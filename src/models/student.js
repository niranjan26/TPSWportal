var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var studentSchema =  mongoose.Schema({
           firstname :String,
           lastname :String,
           dob :String,
           fathername :String,
           roll :String,
           branch :String,
           paddress :String,
           caddress :String,
           email :{
             type : String,
             index : true},
           phone : Number,
           sexams :String,
           sboard :String,
           syear : Number,
           smarks : Number,
           stotal : Number,
           spercent : Number,
           hsexams :String,
           hsboard :String,
           hsyear : Number,
           hsmarks : Number,
           hstotal : Number,
           hspercent : Number,
           firstsgpa : Number,
           secondsgpa : Number,
           thirdsgpa : Number,
           fourthsgpa : Number,
           fifthsgpa : Number,
           sixthsgpa : Number,
           seventhsgpa : Number,
           eighthsgpa : Number,
           firstcgpa : Number,
           secondcgpa : Number,
           thirdcgpa : Number,
           fourthcgpa : Number,
           fifthcgpa : Number,
           sixthcgpa : Number,
           seventhcgpa : Number,
           eighthcgpa : Number,
           reg : Number,
           gender :String,
           pass :String,
           isTpr : Boolean,
           appliedForTpr : Boolean
});

//var Student = module.exports = mongoose.model('Student',studentSchema);

studentSchema.methods.addStudent = function(req, res){
           this.firstname = req.body.firstname;
           this.lastname = req.body.lastname;
           this.dob = req.body.dob;
           this.fathername = req.body.fathername;
           this.roll = req.body.roll;
           this.branch = req.body.branch;
           this.paddress = req.body.paddress;
           this.caddress = req.body.caddress;
           this.email = req.body.email;
           this.phone = req.body.phone;
           this.sexams = req.body.sexams;
           this.sboard = req.body.sboard;
           this.syear = req.body.syear;
           this.smarks = req.body.smarks;
           this.stotal = req.body.stotal;
           this.spercent = req.body.spercent;
           this.hsexams = req.body.hsexams;
           this.hsboard = req.body.hsboard;
           this.hsyear = req.body.hsyear;
           this.hsmarks = req.body.hsmarks;
           this.hstotal = req.body.hstotal;
           this.hspercent = req.body.hspercent;
           this.firstsgpa = req.body.firstsgpa;
           this.secondsgpa = req.body.secondsgpa;
           this.thirdsgpa = req.body.thirdsgpa;
           this.fourthsgpa = req.body.fourthsgpa;
           this.fifthsgpa = req.body.fifthsgpa;
           this.sixthsgpa = req.body.sixthsgpa;
           this.seventhsgpa = req.body.seventhsgpa;
           this.eighthsgpa = req.body.eighthsgpa;
           this.firstcgpa = req.body.firstcgpa;
           this.secondcgpa = req.body.secondcgpa;
           this.thirdcgpa = req.body.thirdcgpa;
           this.fourthcgpa = req.body.fourthcgpa;
           this.fifthcgpa = req.body.fifthcgpa;
           this.sixthcgpa = req.body.sixthcgpa;
           this.seventhcgpa = req.body.seventhcgpa;
           this.eighthcgpa = req.body.eighthcgpa;
           this.reg = req.body.reg;
           this.gender = req.body.gender;
           this.isTpr = false;
           this.appliedForTpr = false;
           //this.pass = req.body.pass;
           this.pass = this.generateHash(req.body.pass);
           this.save();
           res.redirect('/');
};

studentSchema.methods.editprofile = function(req,res){
  var editStudent = new Student();
  editStudent.getStudentByEmail(req.body.email,function(err,student){
    student.paddress = req.body.paddress;
    student.caddress = req.body.caddress;
    student.phone = req.body.phone;
    student.seventhsgpa = req.body.seventhsgpa;
    student.eighthsgpa = req.body.eighthsgpa;
    student.seventhcgpa = req.body.seventhcgpa;
    student.eighthcgpa = req.body.eighthcgpa;
    student.save();
  });
  res.redirect('/studentprofile');
}

studentSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
}

studentSchema.methods.applicationForTpr = function(email){
    var updateStudentStatus = new Student();
    updateStudentStatus.getStudentByEmail(email,function(err,student){
      student.appliedForTpr = true;
      student.save();
    });
}

studentSchema.methods.getStudentByEmail = function(email,callback){
  console.log('in search function');
  var query = {'email': email};
  Student.findOne(query,callback);
}

studentSchema.methods.getStudentById = function(id,callback){
  Student.findById(id,callback);
}

studentSchema.methods.comparePassword = function(password,hash,callback){
  console.log('in compare password');
  console.log(password+" "+hash);
  bcrypt.compare(password, hash, function(err, isMatch) {
    	if(err) throw err;
      console.log(isMatch);
    	callback(null, isMatch);
	});
}

var Student = module.exports = mongoose.model('Student',studentSchema);
