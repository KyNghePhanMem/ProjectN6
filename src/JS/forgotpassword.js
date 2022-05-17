
var userAPI='http://localhost:3000/User';

const getValueEmail = document.getElementById('email');




const checkDataForgot = () => {
    getDataUser(function(data){
        let count = 0;
        const arr = data;
        arr.forEach(e => {
            if(e.email==getValueEmail.value){
                count++;
                window.location.href="../Dasboard/dashboard.html";
            }
        });
        if(count==0 && $("#forgot-form").valid()){
            const notify = document.getElementById("notifycation-login");
            setTimeout(() => notify.classList.remove("hidden") ,500);
            notify.classList.add("hidden");   
        }
    })
}



function forgot(){
    checkDataForgot();
}
// fetch data

function getDataUser(callback){
    fetch(userAPI)
        .then(res => res.json())
        .then(callback)
}