// Rest API

var loginAPI='http://localhost:3000/User';
var sessionUser='http://localhost:3000/session';

// Declaration
var username = document.querySelector("#username");
var password = document.querySelector("#password");




const checklogin= async () =>{
    getDataUser(function(data){
        const arr = data;
        for(let i=0;i<arr.length;i++){
            if(arr[i].username == username.value && arr[i].password == password.value)
            {         
                var option ={
                    id:0,
                }; 
                if(username.value=='admin' && password.value=='admin'){
                    window.location.href="../Dasboard/dashboard.html";
                    option.id=arr[i].id;
                    setDataSession(option);
                }
                else{
                    window.location.href="../Main/index.html";
                    option.id=arr[i].id;
                    setDataSession(option);
                }
            }
        }
    })
}

function login(){
    checklogin();
}
//funtion

function getDataUser(callback){
    fetch(loginAPI)
        .then(function(res){
            return res.json();
        })
        .then(callback)
}
function setDataSession(session,callback){
    var optionUser={
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(session)
    }
    fetch(sessionUser,optionUser)
      .then(function(res){
          res.json();
      })
      .then(callback)
}