const generateCategoryDivs = (categoriesDiv, container) => {
    currentUser.categories.forEach(function(category) {
        let categoryDiv = document.createElement("div")
        categoryDiv.className = "category-div-each"
        let categoryH4 = document.createElement("h4")
        categoryH4.contentEditable = "true"
        categoryH4.innerText = category.name
        categoryDiv.append(categoryH4)

        // container.append()

        let viewCategoryBtn = document.createElement("button")
        viewCategoryBtn.append("View Category")
        viewCategoryBtn.addEventListener("click", function(){
            fetch(`http://localhost:3000/categories/${category.id}`)
            .then((response) => response.json())
            .then(function(result){

                while (document.body.firstChild) {
                    document.body.removeChild(document.body.lastChild);
                }
                renderHeader(currentUser)
                let container = document.createElement('div')
                container.className = "container"
                document.body.append(container)

                let backToCategoriesBtn = document.createElement('button')
                backToCategoriesBtn.innerText = "Back to Categories"
                backToCategoriesBtn.addEventListener('click', () => {
                    renderHeader(currentUser)
                    renderHome(currentUser)
                })
                container.append(backToCategoriesBtn)

                let categoryTitle = document.createElement('h2')
                categoryTitle.innerText = category.name
                categoriesDiv.append(categoryTitle)

                let addListBtn = document.createElement('button')
                addListBtn.innerText = "+ Add List"
                addListBtn.addEventListener('click', () => {
                    renderNewListForm(category, container)
                })
                categoriesDiv.append(addListBtn)

                container.append(categoriesDiv)



                if(result.lists.length < 1){
                    let listMsg = document.createElement('p')
                    listMsg.innerText = `You have not created any ${category.name} lists yet! Click the "+ Add List" button above to get started.`
                    document.body.append(listMsg)
                }else{
                    let backToCategoriesBtn = document.createElement('button')
                    backToCategoriesBtn.innerText = "Back to Categories"
                    backToCategoriesBtn.addEventListener('click', () => {
                        renderHeader(currentUser)
                        renderHome(currentUser)
                    })

                    renderList(result.lists[0].category_id, container)
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
                    id: category.id
                })
            })
            categoryH4.remove()
            editCategoryBtn.remove()
            deleteCategoryBtn.remove()
            viewCategoryBtn.remove()
        })
        categoryDiv.append(categoryH4,viewCategoryBtn, editCategoryBtn, deleteCategoryBtn)

        container.append(categoryDiv)
    })
}