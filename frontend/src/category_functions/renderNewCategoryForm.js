const renderNewCategoryForm = (categoryInput, user, catList) => {
    
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
            })
        })
        catList.append(catLi, viewCat, editCat, delCat)
    })
    categoryInput.value = ''
    document.body.append(catList)
}