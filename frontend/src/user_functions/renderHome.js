const renderHome = (currentUser) => {
    while (document.body.firstChild) {
        document.body.removeChild(document.body.lastChild);
    }

    renderSignOutHeader(currentUser)
    console.log(currentUser)
    let name = document.createElement("h1")
    name.className = "user-name"
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
        renderNewCatForm(categoryInput, currentUser, catList)
    })

    newCategory.append(categoryInput, submitCategory)
    document.body.append(newCategory)

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
            if(result.lists.length < 1){
                const formTag = document.createElement("form");

                const i = document.createElement("input"); 
                i.setAttribute('type',"text"); 
                i.setAttribute('name',"name");
                i.placeholder = "Type Name"
            
            
                const s = document.createElement("input"); 
                s.setAttribute('type',"submit");
                s.setAttribute('value',"Create List");
            
                formTag.append(i, s)
                document.body.append(formTag)

                s.addEventListener("click", function(e){
                    e.preventDefault()
                    renderNewListItem(i, catList)
                })

            }else{
                renderList(result.lists[0].category_id)
            }
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