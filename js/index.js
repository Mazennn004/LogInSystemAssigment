var emailLogin=document.getElementById('emailLogin');
var passwordLogin=document.getElementById('passwordLogin');
var registeredUsers=JSON.parse(localStorage.getItem('users'));
var loginBtn=document.getElementById('loginBtn');
var isLoginValid=false;
var sessionName='';




loginBtn.addEventListener('click',function(){
    if(!isNullInputs()){
        user={
            "email":emailLogin.value,
            "password":passwordLogin.value,
        }
        LogInUser(user);


    }
    else{
        popAlert(`<div class="alert alert-danger mt-3" role="alert">
 Please Enter Email and Password!
</div>`)
    }

});
emailLogin.addEventListener('input',function(){
unpopAlert();
});
passwordLogin.addEventListener('input',function(){
    unpopAlert();
});










 async function LogInUser(userAccount){
try{
    const response=await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin",{
    method: "POST",
    body:JSON.stringify(userAccount),
    headers:{
        "Content-Type":"application/json",
    }
});
const data=await response.json();
if(!response.ok){
    throw new Error(data.message)
}


localStorage.setItem('token',data.token);
redirectTo('/html/home.html');


}catch(error){
popAlert(`
    <div class="alert alert-danger mt-3" role="alert">
    ${error}
    </div>
    `);
}
}

 function popAlert(htmlCode){
document.getElementById('alert').innerHTML=htmlCode;
 }
 function unpopAlert(){
document.getElementById('alert').innerHTML=``;
 }
 function redirectTo(pathName){
    location.pathname=pathName;
 }
function clearInputs(){
    emailLogin.value='';
    passwordLogin.value='';
}
        function isNullInputs(){
    if(emailLogin.value.trim()==''||passwordLogin.value.trim()==''){
      
    return true;
        
    }
    else{
        
        return false;
    }

 }