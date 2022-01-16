// Rest API

var loginAPI='http://localhost:3000/User';

// Declaration
var username = document.querySelector("#username");
var password = document.querySelector("#password");



const checklogin= async () =>{
    getData(function(data){
        const arr = data;
        for(let i=0;i<arr.length;i++){
            if(arr[i].username == username.value && arr[i].password == password.value)
            {
               
                if(username.value=='admin' && password.value=='admin'){
                    window.location.href="../Dasboard/dashboard.html";
                }
                else{
                    window.location.href="../Main/index.html";
                }
            }
        }
    })
}
function login(){
    checklogin();
}
//funtion

function getData(callback){
    fetch(loginAPI)
        .then(function(res){
            return res.json();
        })
        .then(callback)
}