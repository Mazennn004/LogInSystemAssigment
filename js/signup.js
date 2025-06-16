var userAccounts=[];
var regexPatterns={
    email:/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    username:/^[a-z0-9_-]{3,15}$/,

 };
 var userNameInput=document.getElementById('userNameSignUp');
 var emailInput=document.getElementById('emailSignUp');
 var passwordInput=document.getElementById('passwordSignUp');
 var passwordConfirmInput=document.getElementById('passswordConfirmSignUp');
var signUpBtn=document.getElementById('signUpBtn');
var allSignUpInputs=Array.from(document.querySelectorAll('.form-control'));
var isInputsValid=false;
var accountExist=false;
if(localStorage.getItem('users')==null){
    userAccounts=[];
}
else{
    userAccounts=JSON.parse(localStorage.getItem('users'));
}

signUpBtn.addEventListener('click',function(){
    finalValidation();
    if(isInputsValid&&!isNullInputs()){
        isAlreadyExisted();
        if(!accountExist){
            createUser();
     redirectTo('/LogInSystemAssigment/index.html');
        }else{
            popAlert(`

<div class="alert alert-danger mt-3" role="alert">
 Account already exists!
</div>
                
`);
        }
    
    }
    else{
        
        popAlert(
    `<div class="alert alert-danger mt-3" role="alert">
  Please Enter Valid Credentials!
</div>`);
    }

});

userNameInput.addEventListener('input',function(){
validateInputs('username',userNameInput.value,userNameInput);
 unpopAlert();
});
emailInput.addEventListener('input',function(){
    validateInputs('email',emailInput.value,emailInput);
    unpopAlert();
    
})
passwordConfirmInput.addEventListener('input',function(){
validatePassword();
 unpopAlert();
});
passwordInput.addEventListener('input',function(){
validatePassword();
 unpopAlert();
});


function createUser(){
var user={
    username:userNameInput.value,
    email:emailInput.value,
    password:passwordInput.value,
};
userAccounts.push(user);
localStorage.setItem('users',JSON.stringify(userAccounts));
}


function clearInputs(){
    userNameInput.value='';
    emailInput.value='';
    passwordInput.value='';
    passwordConfirmInput.value='';
}


 function redirectTo(pathName){
    location.pathname=pathName;
 }

 function isNullInputs(){
    if(userNameInput.value.trim()==''||emailInput.value.trim()==''||passwordInput.value==''||passwordConfirmInput.value==''){
      
    return true;
        
    }
    else{
        
        return false;
    }

 }

 function validateInputs(patternKey,userValue,inputElm){
   var isMatched=regexPatterns[patternKey].test(userValue);
   if(!isMatched){
    inputElm.classList.add('is-invalid');
   
}else{
    inputElm.classList.remove('is-invalid');
    
}
}
 function validatePassword(){
    if(passwordInput.value==passwordConfirmInput.value){
        if(passwordInput.classList.contains('is-invalid')&&passwordConfirmInput.classList.contains('is-invalid')){
        passwordConfirmInput.classList.replace('is-invalid' ,'is-valid');
        passwordInput.classList.replace('is-invalid' ,'is-valid');
        
        }
        else{
            passwordConfirmInput.classList.add('is-valid');
        passwordInput.classList.add('is-valid');
       
    
    }
        
    }
    else{
         passwordConfirmInput.classList.replace('is-valid' ,'is-invalid');
        passwordInput.classList.replace('is-valid' ,'is-invalid');
         
    }
 }

 function finalValidation(){
    for(var i=0;i<allSignUpInputs.length;i++){
        if(allSignUpInputs[i].classList.contains('is-invalid')){
            isInputsValid=false;
            break;
        }
        else{

           isInputsValid=true;
            
        }
    }

 }
 function popAlert(htmlCode){
document.getElementById('alert').innerHTML=htmlCode;
 }
 function unpopAlert(){
document.getElementById('alert').innerHTML=``;
 }
 function isAlreadyExisted(){
    for(var x=0;x<userAccounts.length;x++){
        if(userAccounts[x].email==emailInput.value){
           accountExist=true;
           break;
            
        }
        else{
            accountExist= false;
            
        }
        
    }
    
 }
 
