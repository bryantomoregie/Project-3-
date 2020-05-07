const renderEditProfileForm = () => {
    let editUserForm = document.createElement("form")

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
    editUserForm.append(nameInput,usernameInput,passwordInput, emailInput, subForm)
    document.body.append(editUserForm)
}