const br = document.createElement("br")

let formDiv = document.createElement("div")
formDiv.className = "form-div"

// let signInForm = document.createElement("form")

let usernameLabel = document.createElement("label")
usernameLabel.append("Username ")

let iconUser = document.createElement("i")
iconUser.className = "fa fa-user icon"

let signInUserInput = document.createElement("input")
signInUserInput.className = "username-input"
signInUserInput.setAttribute('type',"text")
signInUserInput.setAttribute('username',"username")
signInUserInput.placeholder = 'Enter your username'


let passwordLabel = document.createElement("label")
passwordLabel.append("Password ")

let iconPassword = document.createElement("i")
iconPassword.className = "fa fa-key icon"

let signInPasswordInput = document.createElement("input")
signInPasswordInput.className = "password-input"
signInPasswordInput.setAttribute('type',"password")
signInPasswordInput.setAttribute('password',"password")
signInPasswordInput.placeholder = 'Enter your password'

let passVisa = document.createElement("i")
passVisa.id = "pass-visa"
passVisa.className = "fa fa-eye"

let passVisaLabel = document.createElement("label")
passVisaLabel.for = "pass-visa"
passVisaLabel.append(" Show Password")

let loginSubmit = document.createElement("button")
loginSubmit.className = "login-submit"
loginSubmit.setAttribute('type',"submit")
loginSubmit.append("Sign In! ")
let iconSignIn = document.createElement("i")
iconSignIn.className = "fa fa-sign-in"
loginSubmit.append(iconSignIn)

formDiv.append(usernameLabel, signInUserInput, passwordLabel, signInPasswordInput, passVisa, passVisaLabel, loginSubmit, br)
signInUserInput.insertAdjacentElement('beforebegin', iconUser)
signInPasswordInput.insertAdjacentElement('beforebegin', iconPassword)
loginSubmit.insertAdjacentElement('beforebegin', br)

passVisa.addEventListener("click", function(e){
    e.preventDefault()
    let pass = document.querySelector(".password-input");
    if (pass.type === "password") {
      pass.type = "text";
    } else {
      pass.type = "password";
    }
})

loginSubmit.addEventListener("click", function(e){
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
    .then(function(response){
        return response.json()
    })
    .then(function(user){
        fetch(`http://localhost:3000/users/${user.id}`)
        .then((response) => response.json())
        .then(function(user){
            while (document.body.firstChild) {
                document.body.removeChild(document.body.lastChild);
            }
            let name = document.createElement("h1")
            name.append(user.name)
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
                fetch(`http://localhost:3000/users/${user.id}`,{
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
            user.categories.forEach(function(cat){
            let catLi = document.createElement("li")
            catLi.contentEditable = "true"
            catLi.append(cat.name)

            
            let viewCat = document.createElement("button")
            viewCat.append("View Category")
            viewCat.addEventListener("click", function(){
                fetch(`http://localhost:3000/categories/${cat.id}`)
                .then((response) => response.json())
                .then(function(result){
                    console.log(result)
                    // list view ?
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
    })
        //
    })
    signInUserInput.value = ''
    signInPasswordInput.value = ''
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

