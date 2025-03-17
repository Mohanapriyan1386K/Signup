document.getElementById("forms").addEventListener("submit",function(event){
    event.preventDefault();
    let user=document.getElementById("username").value.trim();
    let mail= document.getElementById("mail").value.trim();
    let password=document.getElementById("password").value.trim();
    let confirmpassword=document.getElementById("confirmpassword").value.trim();
  
    // error
    let uerror=document.getElementById("user-error")
    let merror=document.getElementById("email-error")
    let paerror=document.getElementById("password-error")
    let cpaerror=document.getElementById("confirmpassword-error")
    //  mohanapriyan1386@gmail.com
    let userpattern=/^[A-Za-z]+ [A-Za-z]+$/;
    let emailpattern=/^[a-z0-9]+@[a-z]{4,}\.[a-z]{2,}$/;
    let passpattern=/^[a-z]+[A-Z]+[0-9]$/;

    if(user ===""){
        document.getElementById("user-error").innerText="*username required"
    }
    else if(!userpattern.test(user)){
        uerror.innerText="Enter your full name"
    }
    else if(userpattern.test(user)){
        uerror.innerText=""
    }

    // email
    if(mail ===""){
        document.getElementById("email-error").innerText="*email required"
    }
    else if(emailpattern.test(mail)){
        merror.innerText=""
    }
    else if(!emailpattern.test(mail)){
        merror.innerText="enter your correct mail"
    }

    // password
    if(password ===""){
        document.getElementById("password-error").innerText="*password required"

    }
    else if((password.length<3 && password.length>10 && passpattern.test(password))){
        paerror.innerText="password low"
    }
    else if(password.length>3 || password.length<10 ){
        paerror.innerText=""
    }
    
    //confirm password    

    if(confirmpassword ===""){
        document.getElementById("confirmpassword-error").innerText="*password required"
    }
    else if(password !== confirmpassword){
        document.getElementById("confirmpassword-error").innerText="* not match"
    }
    else if(paerror===password){
        document.getElementById("confirmpassword-error").innerText=""
    }
})