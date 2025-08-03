// La récupération des éléments
const signUpForm = document.querySelector("#signUpForm");
const loginForm = document.querySelector("#loginForm");
const username = document.querySelector('#signUpForm input[name="Name"]');
const email = document.querySelector('#signUpForm input[name="EMail"]');
const password = document.querySelector('#signUpForm input[name="Password"]');
const password2 = document.querySelector('#signUpForm input[name="ConfirmPassword"]');
const loginEmail = document.querySelector('#loginForm input[name="Email"]');
const loginPassword = document.querySelector('#loginForm input[name="Password"]');

const signUpButton = document.getElementById('signUp');
const loginButton = document.getElementById('login');
const container = document.getElementById('container');


signUpButton.addEventListener('click', () => {
    container.classList.add('panel-active');
});

loginButton.addEventListener('click', () => {
    container.classList.remove('panel-active');
});
function showAlert(message) {
    alert(message);
}

function BackToHome() {
    window.location.href = "index.html";
}

// Événements
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    form_verify(signUpForm);
    container.classList.remove('panel-active');
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    loginForm_verify(loginForm);
    window.location.href = "index.html";
});

// Fonctions
function form_verify(form) {
    const formElements = form.elements;

    for (let i = 0; i < formElements.length; i++) {
        const element = formElements[i];
        const elementValue = element.value.trim();

        switch (element.name) {
            case "Name":
                if (elementValue === "") {
                    showAlert("Username cannot be empty");
                } else if (!elementValue.match(/^[a-zA-Z]/)) {
                    showAlert("Username must start with a letter");
                } else if (elementValue.length < 3) {
                    showAlert("Username must have at least 3 characters");
                } else {
                    showAlert("Valid Username");
                }
                break;

            case "EMail":
                if (elementValue === "") {
                    showAlert("Email cannot be empty");
                } else if (!email_verify(elementValue)) {
                    showAlert("Invalid email");
                } else {
                    showAlert("Valid Email");
                }
                break;

            case "Password":
                if (elementValue === "") {
                    showAlert("Password cannot be empty");
                } else if (!password_verify(elementValue)) {
                    showAlert("Password is too weak (8 to 12 characters)");
                } else {
                    showAlert("Valid Password");
                }
                break;

            case "ConfirmPassword":
                const passwordValue = formElements["Password"].value.trim();
                if (elementValue === "") {
                    showAlert("Password confirmation cannot be empty");
                } else if (elementValue !== passwordValue) {
                    showAlert("Passwords do not match");
                } else {
                    showAlert("Valid Password confirmation");
                }
                break;
        }
    }
}
function loginForm_verify(form) {
    // Obtenir toutes les valeurs des inputs de connexion
    const loginEmailValue = loginEmail.value.trim();
    const loginPwdValue = loginPassword.value.trim();
    // email verify
    if (loginEmailValue === "") {
        let message = "Email cannot be empty";
        alert(message);
    }else if(!email_verify(loginEmailValue)){
        let message = "Invalid email";
        alert(message);
    }else{
        alert("Valid Mail");
    }
    if (loginPwdValue ==="") {
        let message ="The passeword cannot be empty";
        alert(message);
    }else if(!password_verify(loginPwdValue)){
        let message = "The password is too weak (8 to 12 characters)";
        alert(message);
    }else{
        alert("Valid Password");}

    }

function email_verify(email) {
    return /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/.test(email);
}
function password_verify(passeword) {
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(passeword);
}