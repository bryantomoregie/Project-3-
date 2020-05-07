const renderLoginForm = () => {
    let formDiv = document.createElement("div")
    formDiv.className = "form-div"

    let userNameLabel = document.createElement("label")
    userNameLabel.append("Username ")
    formDiv.append(userNameLabel)

    let iconUser = document.createElement("i")
    iconUser.className = "fa fa-user icon"
    formDiv.append(iconUser)

    let signInUserInput = document.createElement("input")
    signInUserInput.className = "username-input"
    signInUserInput.setAttribute('type',"text")
    signInUserInput.setAttribute('username',"username")
    signInUserInput.placeholder = 'Enter your username'
    formDiv.append(signInUserInput)

    let passwordLabel = document.createElement("label")
    passwordLabel.append("Password ")
    formDiv.append(passwordLabel)

    let iconPassword = document.createElement("i")
    iconPassword.className = "fa fa-key icon"
    formDiv.append(iconPassword)

    let signInPasswordInput = document.createElement("input")
    signInPasswordInput.className = "password-input"
    signInPasswordInput.setAttribute('type',"password")
    signInPasswordInput.setAttribute('password',"password")
    signInPasswordInput.placeholder = 'Enter your password'
    formDiv.append(signInPasswordInput)

    let passVisa = document.createElement("i")
    passVisa.id = "pass-visa"
    passVisa.className = "fa fa-eye"
    formDiv.append(passVisa)

    let passVisaLabel = document.createElement("label")
    passVisaLabel.for = "pass-visa"
    passVisaLabel.append(" Show Password")
    formDiv.append(passVisaLabel)

    let loginSubmit = document.createElement("button")
    loginSubmit.className = "login-submit"
    loginSubmit.setAttribute('type',"submit")
    loginSubmit.append("Sign In! ")
    formDiv.append(loginSubmit)

    let iconSignIn = document.createElement("i")
    iconSignIn.className = "fa fa-sign-in"
    loginSubmit.append(iconSignIn)

    passVisa.addEventListener("click", function(e){
        passwordVisabilityEvent(e)
    })

    loginSubmit.addEventListener("click", function(e){
        signUpSubmitEvent(e, signInUserInput, signInPasswordInput)
    })

    let signUpBtn = document.createElement("button")
    let iconSignUp = document.createElement("i")
    signUpBtn.className = "sign-up"
    signUpBtn.append("Sign Up! ")
    iconSignUp.className = "fa fa-user-plus"
    signUpBtn.append(iconSignUp)

    let modal = document.getElementById("myModal");
    let exitBtn = document.getElementsByClassName("close")[0];

    let modCont = document.querySelector(".modal-content")

    signUpBtn.addEventListener("click", function(){
        modal.style.display = "block";
        let newUser = document.createElement("form")

        let nameInput = document.createElement("input")
        nameInput.setAttribute('type',"text")
        nameInput.setAttribute('name',"name")
        nameInput.placeholder = 'Your Name Here'

        let usernameInput = document.createElement("input")
        usernameInput.setAttribute('type',"text")
        usernameInput.setAttribute('username',"username")
        usernameInput.placeholder = 'Create a username'

        let passwordInput = document.createElement("input")
        passwordInput.setAttribute('type',"password")
        passwordInput.setAttribute('password',"password")
        passwordInput.placeholder = 'Create a password'

        let emailInput = document.createElement("input")
        emailInput.setAttribute('type',"text")
        emailInput.setAttribute('email',"email")
        emailInput.placeholder = 'Insert your email'

        let subForm = document.createElement("input")
        subForm.setAttribute('type',"submit")
        subForm.setAttribute('value',"Create User")

        subForm.addEventListener("click", function(e){
            e.preventDefault()
            fetch("http://localhost:3000/users", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    name: nameInput.value,
                    username: usernameInput.value,
                    password: passwordInput.value,
                    email: emailInput.value
                })
            })
            .then((response) => response.json())
            .then(function(user){
                currentUser = user
                renderHome()
            })
            nameInput.value = ''
            usernameInput.value = ''
            passwordInput.value = ''
            emailInput.value = ''
        })

        modCont.append(newUser, nameInput, usernameInput, passwordInput, emailInput, subForm)
    })
    exitBtn.addEventListener("click", function(){
        modal.style.display = "none";
    })

    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
        }
    }

    formDiv.append(signUpBtn)
    document.body.append(formDiv)
    return formDiv
}