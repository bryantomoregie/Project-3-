const newUserSubmitAction = (modal, modCont) => {
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

    let newUserSubmit = document.createElement("input")
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
            renderHome()
        })
        nameInput.value = ''
        usernameInput.value = ''
        passwordInput.value = ''
        emailInput.value = ''
    })

    modCont.append(newUser, nameInput, usernameInput, passwordInput, emailInput, newUserSubmit)
}