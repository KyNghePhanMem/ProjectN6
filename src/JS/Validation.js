
$("#login-form").validate({
    rules:{
        username:"required",
        password:{
            required : true,
            minlength : 5
        }
    },
    messages:{
        username:"The Username field is required",
        password:{
            required:"The Password field is required",
            minlength:"Your password must be 5 characters long"
        }
    },
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
            minlength : 5
        },
        confirmpassword:{
            required : true,
            minlength : 5,
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
            minlength:"Your password must be 5 characters long"
        },
        confirmpassword:{
            required:"The Confirm Password field is required",
            minlength:"Your password must be 5 characters long",
            equalTo:"The confirm password is incorrect"
        },
        agree:{
            required: "You must be agree all state",
        }
    },
});

$("#forgot-form").validate({
    rules:{
        email:{
            required : true,
            email:true
        }
    },
    messages:{
        email:{
            required: "The Email field is required",
            email : "The Email must be @ character"
        }
    }
})