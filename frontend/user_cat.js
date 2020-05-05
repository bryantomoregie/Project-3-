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

let userList = document.createElement("ul")

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
        let userLi = document.createElement("li")
        userLi.append(user.name)
        userList.append(userLi)
    })
    nameInput.value = ''
    usernameInput.value = ''
    passwordInput.value = ''
    emailInput.value = ''
})

fetch("http://localhost:3000/users")
.then((response) => response.json())
.then(function(users){
    users.forEach(function(user){
        let userLi = document.createElement("li")
        userLi.append(user.name)
        userLi.addEventListener("click", function(e){
            e.preventDefault()
            fetch(`http://localhost:3000/users/${user.id}`)
            .then((response) => response.json())
            .then(function(user){
            while (document.body.firstChild) {
                document.body.removeChild(document.body.lastChild);
            }
            let catList = document.createElement("ul")
            let name = document.createElement("h1")
            name.append(user.name)
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
        })
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

        let removeAccBtn = document.createElement("button")
        removeAccBtn.append("Remove Account")
        removeAccBtn.addEventListener("click", function(e){
            e.preventDefault()
            console.log(user.id)
            fetch(`http://localhost:3000/users/${user.id}`,{
                method: "DELETE",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    id: user.id
                })
            })
            name.remove()
            editProfile.remove()
            removeAccBtn.remove()
            newCategory.remove()
        })

        document.body.append(editProfile, removeAccBtn)
        document.body.append(catList)
                
        let newCategory = document.createElement("form")

        let categoryInput = document.createElement("input")
        categoryInput.setAttribute('type',"text")
        categoryInput.setAttribute('name',"name")
        categoryInput.placeholder = "New Category Name"

        let submitCategory = document.createElement("input")
        submitCategory.setAttribute('type',"submit")
        submitCategory.setAttribute('value',"Create Category")

        submitCategory.addEventListener("click", function(e){
            e.preventDefault()
            fetch("http://localhost:3000/categories", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    name: categoryInput.value,
                    user_id: user.id
                })
            })
            .then((response) => response.json())
            .then(function(category){
                let catLi = document.createElement("li")
                catLi.append(category.name)
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
                    delCat.addEventListener("click", function(){
                        fetch(`http://localhost:3000/categories/${category.id}`,{
                            method: "DELETE",
                            headers: {"Content-Type": "application/json"},
                            body: JSON.stringify({
                                id: category.id
                            })
                        })
                        catLi.remove()
                        editCat.remove()
                        delCat.remove()
                        viewCat.remove()
                    })
                let viewCat = document.createElement("button")
                viewCat.append("View Category")
                viewCat.addEventListener("click", function(){
                    fetch(`http://localhost:3000/categories/${category.id}`)
                    .then((response) => response.json())
                    .then(function(result){
                        console.log(result)
                        // list view ?
                    })
                })
                catList.append(catLi, viewCat, editCat, delCat)
            })
            categoryInput.value = ''
            })
            newCategory.append(categoryInput, submitCategory)
            document.body.append(newCategory)
            })
        })
        userList.append(userLi)
    })
})

document.body.append(userList)

newUser.append(nameInput,usernameInput,passwordInput, emailInput, subForm)
document.body.append(newUser)
