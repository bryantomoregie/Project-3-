const renderNewCategoryForm = (categoryInput, user, catList, container) => {
    
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
        let catLi = document.createElement("h4")
        catLi.append(category.name)
        let editCat = document.createElement("button")
        editCat.append("Save")
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
                while (document.body.firstChild) {
                    document.body.removeChild(document.body.lastChild);
                }
                renderHeader(currentUser)
                // renderNewListForm(category, catList)
                generateCategoryDivs(catList, container)
                // renderList(result.id, catList)
            })
        })
        catList.append(catLi, viewCat, editCat, delCat)
        // container.append(catList)
    })
    categoryInput.value = ''
    // document.body.append(catList)
}

renderConditionForm = (result, catList) => {
    if(result.lists.length < 1){
        let listContainer = document.createElement("div")
        listContainer.className = "list-container"
        console.log(result)
        document.body.append(listContainer)
        renderNewSwimLaneForm(listContainer, result)
    }else{
        console.log(result)
        renderList(result.lists[0].category_id, container)
    }
}