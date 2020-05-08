const renderListPreview = (list, container) => {
    console.log(container)
    let listDiv = document.createElement('div')
    listDiv.className = "list-div"
    listDiv.append

    let listH4 = document.createElement('h4')
    listH4.contentEditable = 'true'
    listH4.innerText = list.name 

    let viewBtn = document.createElement('button')
    viewBtn.className = "view-btn"
    viewBtn.innerText = "View"
    viewBtn.addEventListener('click', (e) => {
        e.preventDefault();
        while (document.body.firstChild) {
            document.body.removeChild(document.body.lastChild);
        }
        renderHeader(currentUser)
        renderSwimLanes(list)
    })

    let deleteBtn = document.createElement('button')
    deleteBtn.className = "delete-btn"
    deleteBtn.append('Delete')

    deleteBtn.addEventListener('click', function(){
        fetch(`http://127.0.0.1:3000/lists/${list.id}`,{
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify ({
                id: list.id
            })
        })
        listDiv.remove()
    })

    let editButton = document.createElement('button')
    editButton.className = "save-btn"
    editButton.append('Save')
    editButton.addEventListener('click', function(){
    fetch(`http://127.0.0.1:3000/lists/${list.id}`,{
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify ({
            name: listH4.innerText
        })
    })

    })
    listDiv.append(listH4, viewBtn, editButton, deleteBtn)
    container.append(listDiv)
}