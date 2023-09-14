const loginText = document.querySelector(".title-text.login");
const loginForm = document.querySelector("form.login");
const signupBtn = document.querySelector(".signup"); // Corrected selector
const signupLink = document.querySelector("form .signup-link a");
const loginBtn = document.querySelector(".login"); // Corrected selector

signupBtn.onclick = () => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
};

loginBtn.onclick = () => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
};

signupLink.onclick = () => {
    signupBtn.click();
    return false;
};
