// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////// SHOW FORM //////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let signUp = document.querySelector('#sign-up');
let loginForm = document.querySelector('#login-form');

let signIn = document.querySelector('#sign-in');
let registerForm = document.querySelector('#register-form');

signUp.addEventListener('click', () => {
    loginForm.classList.add('show-form');
});

signIn.addEventListener('click', () => {
    registerForm.classList.add('show-form');
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////// REGISTER FORM //////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let nameInput = document.querySelector('#uName-input');
let validNom = false;

nameInput.addEventListener("input", function (evt) {
    evt.preventDefault();
    const nameValidRgx = /^([A-Za-z0-9]){4,20}$/;
    const nameValue = nameInput.value;
    validNom = nameValidRgx.test(nameValue);
  
    if(validNom) {
        nameInput.style.borderColor = "green";
        localStorage.setItem("name", nameValue);
    }
    else {
        nameInput.style.borderColor = "red";
    }
});

let passInput = document.querySelector('#password-input');
let validPass = false;

passInput.addEventListener("input", function (evt) {
    evt.preventDefault();
    const passValidRgx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    const passValue = passInput.value;
    validPass = passValidRgx.test(passValue);
  
    if(validPass) {
        passInput.style.borderColor = "green";
        localStorage.setItem("pass", passValue);
    }
    else {
        passInput.style.borderColor = "red";
    }
});

let eMailInput = document.querySelector('#mail-input');
let validEmail = false;

eMailInput.addEventListener("input", function (evt) {
    evt.preventDefault();
    const eMailValidRgx = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    const emailValue = evt.target.value;
    validEmail = eMailValidRgx.test(emailValue);
  
    if(validEmail) {
        eMailInput.style.borderColor = "green";
        localStorage.setItem("mail", emailValue);
    }
    else {
        eMailInput.style.borderColor = "red";
    }
});

let registerButton = document.querySelector("#register-btn");

registerButton.addEventListener('click', (e) => {
    e.preventDefault();
    if(validNom == true && validPass == true && validEmail == true) {

        registerForm.classList.add('hide-again');
        loginForm.classList.add('show-form');
    }
    else {
        registerButton.style.backgroundColor = "red";
    }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////// LOGIN FORM /////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let loginButton = document.querySelector("#login-btn");
let divSuccess = document.getElementById('connectionSuccess');

let nameStored = localStorage.getItem("name");
let passStored = localStorage.getItem("pass");

console.log(nameStored);
console.log(passStored);

loginButton.addEventListener('click', (e) => {
    e.preventDefault();

    let nameLoginValue = document.querySelector('#uName-login').value;
    let passLoginValue = document.querySelector('#pass-login').value;

    if(nameLoginValue == nameStored && passLoginValue == passStored) {
        divSuccess.classList.remove('d-none');
        loginButton.classList.add('d-none');
    }
    else {
        loginButton.style.backgroundColor = "red";
    }
});

let goSiteBtn = document.getElementById('accederSite-btn')

let liUno = document.getElementById('li-1');
let liDos = document.getElementById('li-2');
let avatarName = document.getElementById('avatar-profile');
let profileName = document.getElementById('profile-name');

function showProfile() {
    profileName.innerText = nameStored;
    avatarName.classList.add('show-profile');
}

goSiteBtn.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.classList.add('hide-again');
    signUp.classList.add('hide-again');
    signIn.classList.add('hide-again');
    liUno.classList.add('show-li');
    liDos.classList.add('show-li');
    showProfile();
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////// CLASSES ////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


