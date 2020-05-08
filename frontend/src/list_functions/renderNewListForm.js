const renderNewListForm = (category_id, listDiv) => {
    const newListForm = document.createElement("form");

    const newListNameInput = document.createElement("input"); 
    newListNameInput.setAttribute('type',"text"); 
    newListNameInput.setAttribute('name',"name");
    newListNameInput.placeholder = "Type Name"

    const newListSubmit = document.createElement("input"); 
    newListSubmit.setAttribute('type',"submit");
    newListSubmit.setAttribute('value',"Create List");

    newListForm.append(newListNameInput, newListSubmit)
    document.body.append(newListForm)

    newListSubmit.addEventListener('click', function(e){
        e.preventDefault()
        renderNewListItem(newListNameInput, category_id,listDiv)
        newListForm.remove()
        newListNameInput.remove()
        newListSubmit.remove()
    })
    document.body.append(newListForm, newListNameInput, newListSubmit)
}