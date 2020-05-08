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

    let passVisaDiv = document.createElement('div')

    let passVisa = document.createElement("i")
    passVisa.id = "pass-visa"
    passVisa.className = "fa fa-eye"
    passVisaDiv.append(passVisa)

    let passVisaLabel = document.createElement("label")
    passVisaLabel.for = "pass-visa"
    passVisaLabel.append(" Show Password")
    passVisaDiv.append(passVisaLabel)
    formDiv.append(passVisaDiv)

    let loginSubmit = document.createElement("button")
    loginSubmit.className = "login-submit"
    loginSubmit.setAttribute('type',"submit")
    loginSubmit.append("Sign In! ")
    formDiv.append(loginSubmit)

    let iconSignIn = document.createElement("i")
    iconSignIn.className = "fa fa-sign-in"
    loginSubmit.append(iconSignIn)

    passVisa.addEventListener("click", function(e){
        passwordVisibilityEvent(e)
    })

    loginSubmit.addEventListener("click", function(e){
        loginSubmitAction(e, signInUserInput, signInPasswordInput)
    })

    let signUpBtn = document.createElement("button")
    let iconSignUp = document.createElement("i")
    signUpBtn.className = "sign-up"
    signUpBtn.append("Sign Up! ")
    iconSignUp.className = "fa fa-user-plus"
    signUpBtn.append(iconSignUp)

    signUpBtn.addEventListener("click", function(){
        // signUpBtnAction()
        let modal = document.createElement("div")
        modal.className = "modal"
        modal.id = "myModal"
    
        let modContent = document.createElement("div")
        modContent.className = "modal-content"
        modal.append(modContent)

        document.body.append(modal)
        newUserSubmitAction(modal, modContent)
    })

    window.onclick = function(event, modal) {
        if (event.target == modal) {
        modal.style.display = "none";
        }
    }
    formDiv.append(signUpBtn)
    document.body.append(formDiv)
    return formDiv
}