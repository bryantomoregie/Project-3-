
let currentUser = {}

// MOTHER FUNCTION ----------------------------------------------------

const renderLoginPage = () => {

    let formDiv = renderForm()
    document.body.append(formDiv)

}

// FUNCTION LIBRARY ----------------------------------------------------

const renderForm = () => {
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
        visaAction(e)
    })

    loginSubmit.addEventListener("click", function(e){
        submitAction(e, signInUserInput, signInPasswordInput)
    })

    let signUpBtn = document.createElement("button")
    let iconSignUp = document.createElement("i")
    signUpBtn.className = "sign-up"
    signUpBtn.append("Sign Up! ")
    iconSignUp.className = "fa fa-user-plus"
    signUpBtn.append(iconSignUp)

    let modal = document.getElementById("myModal");
    let exitBtn = document.getElementsByClassName("close")[0];
    signUpBtn.addEventListener("click", function(){
        modal.style.display = "block";
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

const submitAction = (e, signInUserInput ,signInPasswordInput) => {
    e.preventDefault()
    console.log(signInUserInput.value)
    console.log(signInPasswordInput.value)

    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            username: signInUserInput.value,
            password: signInPasswordInput.value,
        })
    })
    .then((response) => response.json())
    .then(function(user){
        fetch(`http://localhost:3000/users/${user.id}`)
        .then((response) => response.json())
        .then(function(user){
            currentUser = user
            renderHome()
    })

    })
    signInUserInput.value = ''
    signInPasswordInput.value = ''
}

const visaAction = (e) => {
    e.preventDefault()
    let pass = document.querySelector(".password-input");
    if (pass.type === "password") {
    pass.type = "text";
    } else {
    pass.type = "password";
    }
}

const renderHome = () => {
    while (document.body.firstChild) {
        document.body.removeChild(document.body.lastChild);
    }
    let name = document.createElement("h1")
    name.append(currentUser.name)
    document.body.append(name)


    let editProfile = document.createElement("button")
    editProfile.append("Edit My Profile")
    editProfile.addEventListener("click", function(){
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
    subForm.setAttribute('value',"Update User")

    subForm.addEventListener("click", function(e){
        e.preventDefault()
        console.log(nameInput.value)
        fetch(`http://localhost:3000/users/${currentUser.id}`,{
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: nameInput.value,
                username: usernameInput.value,
                password: passwordInput.value,
                email: emailInput.value
            })
        })
        name.innerText = nameInput.value
        nameInput.remove()
        usernameInput.remove()
        passwordInput.remove()
        emailInput.remove()
        subForm.remove()
    })
    newUser.append(nameInput,usernameInput,passwordInput, emailInput, subForm)
    document.body.append(newUser)
})

    let catList = document.createElement("ul")
    currentUser.categories.forEach(function(cat){
    let catLi = document.createElement("li")
    catLi.contentEditable = "true"
    catLi.append(cat.name)

    
    let viewCat = document.createElement("button")
    viewCat.append("View Category")
    viewCat.addEventListener("click", function(){
        fetch(`http://localhost:3000/categories/${cat.id}`)
        .then((response) => response.json())
        .then(function(result){
            while (document.body.firstChild) {
                document.body.removeChild(document.body.lastChild);
            }
            renderList(result.lists[0].category_id)
        })
    })

    let editCat = document.createElement("button")
    editCat.append("Edit/Save")
    editCat.addEventListener("click", function(e){
        e.preventDefault()
        fetch(`http://localhost:3000/categories/${cat.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: catLi.innerText
            })
        })
    })
    let delCat = document.createElement("button")
    delCat.append("Delete")
    delCat.addEventListener("click", function(e){
        e.preventDefault()
        fetch(`http://localhost:3000/categories/${cat.id}`,{
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                id: cat.id
            })
        })
        catLi.remove()
        editCat.remove()
        delCat.remove()
        viewCat.remove()
    })
        catList.append(catLi,viewCat, editCat, delCat)
        document.body.append(catList)
})
}