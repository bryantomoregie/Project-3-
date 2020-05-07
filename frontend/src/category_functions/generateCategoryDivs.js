const generateCategoryDivs = (categoriesDiv) => {
    currentUser.categories.forEach(function(category) {
        let categoryDiv = document.createElement("div")
        let categoryH4 = document.createElement("h4")
        categoryH4.contentEditable = "true"
        categoryH4.innerText = category.name
        categoryDiv.append(categoryH4)

        let viewCategoryBtn = document.createElement("button")
        viewCategoryBtn.append("View Category")
        viewCategoryBtn.addEventListener("click", function(){
            fetch(`http://localhost:3000/categories/${category.id}`)
            .then((response) => response.json())
            .then(function(result){
                while (document.body.firstChild) {
                    document.body.removeChild(document.body.lastChild);
                }
                let categoryTitle = document.createElement('h2')
                categoryTitle.innerText = category.name
                categoriesDiv.append(categoryTitle)

                let addListBtn = document.createElement('button')
                addListBtn.innerText = "+ Add List"
                addListBtn.addEventListener('click', () => {
                    renderNewListForm()
                })
                categoriesDiv.append(addListBtn)

                document.body.append(categoriesDiv)

                if(result.lists.length < 1){
                    renderHeader()
                    let listMsg = document.createElement('p')
                    listMsg.innerText = `You have not created any ${category.name} lists yet! Click the "+ Add List" button above to get started.`
                    document.body.append(listMsg)
                }else{
                    renderList(result.lists[0].category_id)
                }
            })
        })

        let editCategoryBtn = document.createElement("button")
        editCategoryBtn.append("Edit/Save")
        editCategoryBtn.addEventListener("click", function(e){
            e.preventDefault()
            fetch(`http://localhost:3000/categories/${category.id}`, {
                method: "PATCH",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    name: categoryH4.innerText
                })
            })
        })
        let deleteCategoryBtn = document.createElement("button")
        deleteCategoryBtn.append("Delete")
        deleteCategoryBtn.addEventListener("click", function(e){
            e.preventDefault()
            fetch(`http://localhost:3000/categories/${category.id}`,{
                method: "DELETE",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    id: cat.id
                })
            })
            categoryH4.remove()
            editCategoryBtn.remove()
            deleteCategoryBtn.remove()
            viewCategoryBtn.remove()
        })
        categoryDiv.append(categoryH4,viewCategoryBtn, editCategoryBtn, deleteCategoryBtn)
        document.body.append(categoryDiv)
    })
}