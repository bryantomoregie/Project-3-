const newUserSubmitAction = (modal, modCont) => {
    modal.style.display = "block";
    let newUser = document.createElement("form")

    let nameInput = document.createElement("input")
    nameInput.className = "username-input"
    nameInput.setAttribute('type',"text")
    nameInput.setAttribute('name',"name")
    nameInput.placeholder = 'Your Name Here'

    let usernameInput = document.createElement("input")
    usernameInput.className = "username-input"
    usernameInput.setAttribute('type',"text")
    usernameInput.setAttribute('username',"username")
    usernameInput.placeholder = 'Create a username'

    let passwordInput = document.createElement("input")
    passwordInput.className = "password-input"
    passwordInput.setAttribute('type',"password")
    passwordInput.setAttribute('password',"password")
    passwordInput.placeholder = 'Create a password'

    let emailInput = document.createElement("input")
    emailInput.className = "username-input"
    emailInput.setAttribute('type',"text")
    emailInput.setAttribute('email',"email")
    emailInput.placeholder = 'Insert your email'

    let newUserSubmit = document.createElement("input")
    newUserSubmit.className = "login-submit"
    newUserSubmit.setAttribute('type',"submit")
    newUserSubmit.setAttribute('value',"Create User")

    newUserSubmit.addEventListener("click", function(e){
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
            renderHome(currentUser)
        })
        nameInput.value = ''
        usernameInput.value = ''
        passwordInput.value = ''
        emailInput.value = ''
    })
    modCont.append(newUser, nameInput, usernameInput, passwordInput, emailInput, newUserSubmit)
    
    window.onclick = function(event) {
        console.log(modal)
        if (event.target == modal) {
            while (modCont.firstChild) {
                modCont.removeChild(modCont.lastChild);
            }
        modal.style.display = "none";
        }
    }
}