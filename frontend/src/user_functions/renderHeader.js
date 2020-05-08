const renderHeader = (currentUser) => {

    let headerDiv = document.createElement("div")
    headerDiv.className = "topnav"

    let appName = document.createElement("h2")
    appName.className = "app-name"
    appName.innerText = "Chrello"
    headerDiv.append(appName)

    let userControlsDiv = document.createElement('div')
    userControlsDiv.className = 'user-controls-div'


    let name = document.createElement("p")
    name.className = "user-name"
    name.append(currentUser.name)
    userControlsDiv.append(name)

    let modal = document.createElement("div")
    let modContent = document.createElement("div")

    const headerBtns = document.createElement('div')
    

    let editProfileBtn = document.createElement("button")
    editProfileBtn.className = "header-btn"
    editProfileBtn.append("Edit My Profile")
    editProfileBtn.addEventListener("click", function(){
        modal.className = "modal"
        modal.id = "myModal"
        modal.style.display = "block";
        modContent.className = "modal-content"
        modal.append(modContent)
        document.body.append(modal)
        renderEditFormPopUp(modContent, currentUser, modal)
    })
    headerBtns.append(editProfileBtn)

    window.onclick = function(event) {
        if (event.target == modal) {
            while (modContent.firstChild) {
                modContent.removeChild(modContent.lastChild);
            }
        modal.style.display = "none";
        }
    }
    
    let signoutBtn = document.createElement("button")
    signoutBtn.className = "header-btn"
    signoutBtn.append("Sign Out!")
    signoutBtn.addEventListener("click", function(){
        while (document.body.firstChild) {
            document.body.removeChild(document.body.lastChild);
        }
        renderLoginPage()
    })
    headerBtns.append(signoutBtn)
    userControlsDiv.append(headerBtns)
    headerDiv.append(userControlsDiv)
    
    document.body.append(headerDiv)
    
}


const renderEditFormPopUp = (modContent, currentUser, modal) => {
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

        let subForm = document.createElement("input")
        subForm.className = "sign-up"
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
            .then((response) => response.json())
            .then(function(user){
                let userNameTag = document.querySelector(".user-name")
                console.log(userNameTag)
                userNameTag.innerText = user.name
            })
            name.innerText = nameInput.value
            nameInput.remove()
            usernameInput.remove()
            passwordInput.remove()
            emailInput.remove()
            subForm.remove()
            modal.style.display = "none";

        })
        newUser.append(nameInput,usernameInput,passwordInput, emailInput, subForm)
        modContent.append(newUser)
}
