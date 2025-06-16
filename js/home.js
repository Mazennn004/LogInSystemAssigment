var logOutBtn=document.getElementById('logOutBtn');
var userNameHeroSec=document.getElementById('userNameHeroSec');

userNameHeroSec.innerHTML=localStorage.getItem('sessionName');

logOutBtn.addEventListener('click',function(){
logOutUser();
});


function logOutUser(){
    localStorage.setItem('sessionName','');
    redirectTo('/index.html');

}
function redirectTo(pathName){
    location.pathname=pathName;
 }