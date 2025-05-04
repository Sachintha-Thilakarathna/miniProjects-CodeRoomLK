const email = 'abc@gmail.com' ;
const password = '1234';

const loginForm = document.getElementById("loginForm");


loginForm.addEventListener("submit",function(event){
    event.preventDefault();

    const para = document.getElementById("errorP");
    const emailEl = document.getElementById("email").value;
    const passwordEl = document.getElementById("password").value;

    if(email===emailEl && password===passwordEl){
        window.location.href = "form.html"
    }
    else if(email ===emailEl || password===passwordEl){
        para.textContent = "Your email or password are not correct!! Please check again."
    }
    else{
        para.textContent = "ERROR!! Only admin can log in."
    }

})