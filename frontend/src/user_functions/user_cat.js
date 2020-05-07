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

const renderSignUpForm = (e, nameInput, usernameInput, passwordInput, emailInput) => {
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
        console.log(user)
    })
    nameInput.value = ''
    usernameInput.value = ''
    passwordInput.value = ''
    emailInput.value = ''
}

const renderNewCatForm = (categoryInput, user, catList) => {
    
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
                while (document.body.firstChild) {
                    document.body.removeChild(document.body.lastChild);
                }
                renderConditionForm(result, catList)
            })
        })
        catList.append(catLi, viewCat, editCat, delCat)
    })
    categoryInput.value = ''
    document.body.append(catList)
}

renderConditionForm = (result, catList) => {
    if(result.lists.length < 1){
        let listContainer = document.createElement("div")
        listContainer.className = "list-container"
        
        document.body.append(listContainer)
        renderNewSwimLaneForm(listContainer)

    }else{
        renderList(result.lists[0].category_id)
    }
}