const renderCategories = (currentUser) => {
    let container = document.createElement('div')
    container.className = "container"
    // document.body.append(container)

    
    let userCategoriesTitle = document.createElement('h2')
    userCategoriesTitle.innerText = `${currentUser.name}'s Categories`
    // document.body.append(userCategoriesTitle)
    container.append(userCategoriesTitle)

    let categoriesDiv = document.createElement('div')
    categoriesDiv.className = "category-div-each"
    // container.append(categoriesDiv)

    
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
        renderNewCategoryForm(categoryInput, currentUser, categoriesDiv, container)
    })

    newCategory.append(categoryInput, submitCategory)

    container.append(newCategory)

    // let floatDiv = document.createElement("div")
    // floatDiv.className = "category-div-each"
    // container.append(floatDiv)
    // console.log(currentUser)
    // console.log(currentUser.categories.length)
    // if(currentUser.categories.length === 0){
    // }else{
        generateCategoryDivs(categoriesDiv, container)
    // }
    container.append(categoriesDiv)
    document.body.append(container)
}