var emailLogin=document.getElementById('emailLogin');
var passwordLogin=document.getElementById('passwordLogin');
var registeredUsers=JSON.parse(localStorage.getItem('users'));
var loginBtn=document.getElementById('loginBtn');
var isLoginValid=false;
var sessionName='';
localStorage.setItem('sessionName',sessionName);



loginBtn.addEventListener('click',function(){
    if(!isNullInputs()){
        validateLoginInputs();
if(isLoginValid){
    LogInUser(sessionName);
    clearInputs();
}
else{
popAlert(`<div class="alert alert-danger mt-3" role="alert">
 Incorrect email  or Password
</div>`);
}

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










function LogInUser(userAccount){
localStorage.setItem('sessionName',userAccount);
redirectTo('html/home.html');
}
function validateLoginInputs(){
    for(var i=0;i<registeredUsers.length;i++){
    if(emailLogin.value==registeredUsers[i].email&&passwordLogin.value==registeredUsers[i].password){
   isLoginValid=true;
   sessionName=`${registeredUsers[i].username}`;
   break;

    }
    else{
        isLoginValid=false;
     
    
    }
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