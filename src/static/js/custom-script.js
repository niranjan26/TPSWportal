 $(document).ready(function () {
     $("#formValidate").validate({
        rules: {
            firstname: {
                required: true,
                minlength: 1
            },
			lastname: {
                required: true,
                minlength: 1
            },
			fathername: {
                required: true,
                minlength: 1
            },
            email: {
                required: true,
                email:true
            },
            pass: {
				required: true,
				minlength: 6
			},
			cpass: {
				required: true,
				minlength: 6,
				equalTo: "#pass"
			},
			reg: {
                required: true,
                number:true,
            },
      phone:{
             	number: true,
            	minlength: 10,
            },
            address:"required",
			caddress:"required",
			gender: "required",
			branch:"required",
			syear:{
				required: true,
				number: true,
			},
			hsyear:{
				required: true,
				number: true,
			},
			smark:{
				required: true,
				number: true,
			},
			hsmarks:{
				required: true,
				number: true,
			},
        },
        //For custom messages
        messages: {
            uname:{
                required: "Enter a username",
                minlength: "Enter at least 1 characters"
            },
            curl: "Enter your website",
        },
        errorElement : 'div',
        errorPlacement: function(error, element) {
          var placement = $(element).data('error');
          if (placement) {
            $(placement).append(error)
          } else {
            error.insertAfter(element);
          }
        }
     });

function check_course(x){
if (x==0){
$("#formValidate").validate({
 rules: {
          firstsgpa : {
        required: true,
                number:true,
        range: [0,10],
      },
      secondsgpa:{
        required: true,
                number:true,
        range: [0,10],
      },
      thirdsgpa:{
        required: true,
                number:true,
        range: [0,10],
      },
      fourthsgpa:{
        required: true,
                number:true,
        range: [0,10],
      },
      fifthsgpa:{
        required: true,
                number:true,
        range: [0,10],
      },
      sixthsgpa:{
        required: true,
                number:true,
        range: [0,10],
      },
      seventhsgpa:{

                number:true,
        range: [0,10],
      },
      eighthsgpa:{

                number:true,
        range: [0,10],
      },
      firstcgpa:{
        required: true,
                number:true,
        range: [0,10],
      },
      secondcgpa:{
        required: true,
                number:true,
        range: [0,10],
      },
      thirdcgpa:{
        required: true,
                number:true,
        range: [0,10],
      },
      fourthcgpa:{
        required: true,
                number:true,
        range: [0,10],
      },
      fifthcgpa:{
        required: true,
                number:true,
        range: [0,10],
      },
      sixthcgpa:{
        required: true,
                number:true,
        range: [0,10],
      },
      seventhcgpa:{
                number:true,
                range: [0,10],
      },
      eighthcgpa:{

                number:true,
        range: [0,10],
      },


}
});
}
if (x==1){
$("#formValidate").validate({
 rules: {
    ugcollege : {
      required: true,
    },
    uguniv:{
      required: true,
    },
    mtechugmarks:{
      required: true,
                number:true,
    },
    mtechugtotalmarks: {
      required: true,
                number:true,
    },
          mfirstsgpa : {
        required: true,
                number:true,
        range: [0,10],
      },
      msecondsgpa:{
        required: true,
                number:true,
        range: [0,10],
      },
      mthirdsgpa:{
        //required: true,
                number:true,
        range: [0,10],
      },
      mfourthsgpa:{
        //required: true,
                number:true,
        range: [0,10],
      },
      mfirstcgpa:{
        required: true,
                number:true,
        range: [0,10],
      },
      msecondcgpa:{
        required: true,
                number:true,
        range: [0,10],
      },
      mthirdcgpa:{
        //required: true,
                number:true,
        range: [0,10],
      },
      mfourthcgpa:{
        //required: true,
                number:true,
        range: [0,10],
      },


}
});


}
if (x==2){
$("#formValidate").validate({
 rules: {
    mcaugcollege : {
      required: true,
    },
    mcauguniv:{
      required: true,
    },
    mcaugmarks:{
      required: true,
                number:true,
    },
    mcaugtotalmarks: {
      required: true,
                number:true,
    },
          mcafirstsgpa : {
        required: true,
                number:true,
        range: [0,10],
      },
      mcasecondsgpa:{
        required: true,
                number:true,
        range: [0,10],
      },
      mcathirdsgpa:{
        required: true,
                number:true,
        range: [0,10],
      },
      mcafourthsgpa:{
        required: true,
                number:true,
        range: [0,10],
      },
      mcafifthsgpa:{
        //required: true,
                number:true,
        range: [0,10],
      },
      mcasixthsgpa:{
        //required: true,
                number:true,
        range: [0,10],
      },
      mcafirstcgpa : {
        required: true,
                number:true,
        range: [0,10],
      },
      mcasecondcgpa:{
        required: true,
                number:true,
        range: [0,10],
      },
      mcathirdcgpa:{
        required: true,
                number:true,
        range: [0,10],
      },
      mcafourthcgpa:{
        //required: true,
                number:true,
        range: [0,10],
      },
      mcafifthcgpa:{
        required: true,
                number:true,
        range: [0,10],
      },
      mcasixthcgpa:{
        //required: true,
                number:true,
        range: [0,10],
      },
    }
});;


}
console.log(x);
}
 $(".caret").empty();
 $(".error").addClass("invalid");
 $("#ug").hide();
 $("#mtechpg").hide();
 $("#mcapg").hide();
 $('#mtech').click(function(){
 	$("#mcapg").hide();
 	$("#ug").hide();
   console.log(this.checked);
   if(this.checked == true) {
        $("#mtechpg").show();
    } else {
       $("#mtechpg").hide();
   }
});
 $('#mca').click(function(){
   console.log(this.checked);
   $("#mtechpg").hide();
   $("#ug").hide();
   if(this.checked == true) {
        $("#mcapg").show();
    } else {
       $("#mcapg").hide();
   }
});
  $('#btech').click(function(){
   console.log(this.checked);
   $("#mtechpg").hide();
   $("#mcapg").hide();
   if(this.checked == true) {
        $("#ug").show();
    } else {
       $("#ug").hide();
   }
});

});
