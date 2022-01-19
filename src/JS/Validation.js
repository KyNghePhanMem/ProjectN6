$("#login-form").validate({
    rules:{
        username:"required",
        password:{
            required : true,
            minlength : 6
        }
    },
    messages:{
        username:"The Username field is required",
        password:{
            required:"The Password field is required",
            minlength:"Your password must be 6 characters long"
        }
    },
    submitHandler: function(form) {
        form.submit();
    }
});

$("#register-form").validate({
    rules:{
        username:"required",
        email:{
            required : true,
            email:true
        },
        password:{
            required : true,
            minlength : 6
        },
        confirmpassword:{
            required : true,
            minlength : 6,
            equalTo:"#password"
        },
        agree:"required",
    },
    messages:{
        username:"The Username field is required",
        email:{
           required: "The Email field is required",
           email : "The Email must be @ character"
        },
        password:{
            required:"The Password field is required",
            minlength:"Your password must be 6 characters long"
        },
        confirmpassword:{
            required:"The Confirm Password field is required",
            minlength:"Your password must be 6 characters long",
            equalTo:"The confirm password is incorrect"
        },
        agree:{
            required: "You must be agree all state",
        }
    },
    submitHandler: function(form) {
        form.submit();
    }
});