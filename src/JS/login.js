// Rest API

var loginAPI='https://cinestar-cinema.herokuapp.com/User';
var sessionUser='https://cinestar-cinema.herokuapp.com/session';

// Declaration
var username = document.querySelector("#username");
var password = document.querySelector("#password");




const checklogin= () =>{
    getDataUser(function(data){
        let count=0;
        const arr = data;
        for(let i=0;i<arr.length;i++){
            if(arr[i].username == username.value && arr[i].password == password.value)
            {         
                count++;
                var option ={
                    id:0,
                }; 
                if(username.value=='admin' && password.value=='admin'){
                    window.location.href="../Dasboard/dashboard.html";
                    option.id=arr[i].id;
                    setDataSession(option);
                }
                else{
                    window.location.href="./index.html";
                    option.id=arr[i].id;
                    setDataSession(option);
                }
            }
        }
        if(count==0 && $("#login-form").valid()){
            const notify = document.getElementById("notifycation-login");
            setTimeout(() => notify.classList.remove("hidden") ,500);
            notify.classList.add("hidden");   
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