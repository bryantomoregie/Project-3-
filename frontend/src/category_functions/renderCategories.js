const renderCategories = (currentUser) => {
    let container = document.createElement('div')
    container.className = "container"

    
    let userCategoriesTitle = document.createElement('h2')
    userCategoriesTitle.innerText = `${currentUser.name}'s Categories`
    document.body.append(userCategoriesTitle)
    
    let categoriesDiv = document.createElement('div')
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
        renderNewCategoryForm(categoryInput, currentUser, categoriesDiv)
    })

    newCategory.append(categoryInput, submitCategory)
    document.body.append(newCategory)

    generateCategoryDivs(categoriesDiv)
}