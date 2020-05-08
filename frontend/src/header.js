const renderSignOutHeader = (currentUser) => {

    let headerDiv = document.createElement("div")
    headerDiv.className = "topnav"

    let modal = document.createElement("div")
    let modContent = document.createElement("div")

    let editProfilePopUp = document.createElement("button")
    editProfilePopUp.append("Edit My Profile")
    editProfilePopUp.addEventListener("click", function(){
        modal.className = "modal"
        modal.id = "myModal"
        modal.style.display = "block";
        modContent.className = "modal-content"
        modal.append(modContent)
        document.body.append(modal)
        renderEditFormPopUp(modContent, currentUser, modal)
    })

    window.onclick = function(event) {
        console.log(modal)
        if (event.target == modal) {
            while (modContent.firstChild) {
                modContent.removeChild(modContent.lastChild);
            }
        modal.style.display = "none";
        }
    }

    let headerLogo = document.createElement("img")
    headerLogo.className = "logo-img"
    headerLogo.style.height = "100px"
    headerLogo.src = "https://media.glassdoor.com/sqll/964142/flatiron-school-squarelogo-1479222088421.png"
    
    let signoutBtn = document.createElement("button")
    signoutBtn.append("Sign Out!")
    signoutBtn.addEventListener("click", function(){
        while (document.body.firstChild) {
            document.body.removeChild(document.body.lastChild);
        }
        renderLoginPage()
    })
    headerDiv.append(editProfilePopUp,headerLogo, signoutBtn)
    
    document.body.append(headerDiv)
    
}


const renderEditFormPopUp = (modContent, currentUser, modal) => {
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