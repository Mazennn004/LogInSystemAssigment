var logOutBtn=document.getElementById('logOutBtn');
var userNameHeroSec=document.getElementById('userNameHeroSec');


vertifyToken();
logOutBtn.addEventListener('click',function(){
logOutUser();
});


function logOutUser(){
    localStorage.setItem('token','');
    redirectTo('/index.html');

}
function redirectTo(pathName){
    location.pathname=pathName;
 }

 async function vertifyToken() {
 try{
    const response=await fetch("https://ecommerce.routemisr.com/api/v1/auth/verifyToken",{
        headers:{
            token:localStorage.getItem('token'),

        }
    });
    const data=await response.json();
    if(!response.ok){
        throw new Error;
    }else{
       userNameHeroSec.innerHTML=data.decoded.name;
        
    }
    

    
    
    
 }catch{
redirectTo(`/index.html`);

 }
 }