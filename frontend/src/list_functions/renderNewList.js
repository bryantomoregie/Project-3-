const renderNewListItem = (i, category_id,ulTag) => {
    fetch('http://localhost:3000/lists', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: i.value,
            category_id: category_id.id
            //
        })
    })
    .then(function(response){
        return response.json()
    })
    .then(function(list){
        renderListPreview(list, ulTag)
        // console.log(ulTag)
        // let liTag = document.createElement('h4')
        // liTag.innerText = list.name 
        // liTag.contentEditable = 'true'

        // let viewBtn = document.createElement('button')
        // viewBtn.innerText = "View"

        // viewBtn.addEventListener('click', (e) => {
        //     e.preventDefault();
        //     while (document.body.firstChild) {
        //         document.body.removeChild(document.body.lastChild);
        //     }
        //     renderAllLanes(element)
        // })

        // let deleteButton = document.createElement('button')
        // deleteButton.append('delete')

        // deleteButton.addEventListener('click', function(){
        //     fetch(`http://127.0.0.1:3000/lists/${list.id}`,{
        //         method: 'DELETE',
        //         headers: {'Content-Type': 'application/json'},
        //         body: JSON.stringify ({
        //             id: list.id
        //         })
        //     })
        //     liTag.remove()
        //     deleteButton.remove()
        //     editButton.remove()
        // })

        // let editButton = document.createElement('button')
        // editButton.append('edit')
    
        // // lists.forEach(element => { 
        // //     if (element.name == liTag.innerText)
        // editButton.addEventListener('click', function(){
        //     fetch(`http://127.0.0.1:3000/lists/${list.id}`,{
        //         method: 'PATCH',
        //         headers: {'Content-Type': 'application/json'},
        //         body: JSON.stringify ({
        //             name: liTag.innerText
        //         })
        //     })
        
        // })
        // })
    
        // ulTag.append(liTag, deleteButton, editButton)
    })
    i.value = ''
    document.body.append(ulTag)
}