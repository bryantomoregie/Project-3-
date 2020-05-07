// const formTag = document.createElement("form")
// formTag.setAttribute('method', "post")
// formTag('action', "submit")
const renderList = (category_id) => {
    // window.location.reload(true)
    let catBtn = document.createElement('button')
    catBtn.innerText = "Back to Categories"
    document.body.append(catBtn)

    const ulTag = document.createElement('ul')
    fetch('http://127.0.0.1:3000/lists')
    .then(function(response){
        return response.json()
    })

    .then(function(lists){
        console.log(lists)
        console.log(category_id)
        lists = lists.filter(list => {
            return list.category_id == category_id
        })
        console.log(lists)

        catBtn.addEventListener('click', () => {
            renderHome()
        })
    
        lists.forEach(element => {
            let liTag = document.createElement('li')
            liTag.contentEditable = 'true'
            liTag.innerText = element.name 

            let viewBtn = document.createElement('button')
            viewBtn.innerText = "View"

            viewBtn.addEventListener('click', (e) => {
                e.preventDefault();
                while (document.body.firstChild) {
                    document.body.removeChild(document.body.lastChild);
                }
                renderSignOutHeader()
                renderSwimLanes(element)
            })
            
            let deleteButton = document.createElement('button')
            deleteButton.append('delete')

            deleteButton.addEventListener('click', function(){
                fetch(`http://127.0.0.1:3000/lists/${element.id}`,{
                    method: 'DELETE',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify ({
                        id: element.id
                    })
                })
                liTag.remove()
                editButton.remove()
                deleteButton.remove()
            })

            let editButton = document.createElement('button')
            editButton.append('edit')


            editButton.addEventListener('click', function(){
            fetch(`http://127.0.0.1:3000/lists/${element.id}`,{
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify ({
                    name: liTag.innerText
                })
            })
        
            })
            ulTag.append(liTag, viewBtn, deleteButton, editButton)

        });
    })



    document.body.append(ulTag)
    
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


    s.addEventListener('click', function(e){
        e.preventDefault()
        renderNewListItem(i, category_id,ulTag)
    })
    document.body.append(formTag, i, s)
}

const renderNewListItem = (i, category_id,ulTag) => {
    fetch('http://127.0.0.1:3000/lists', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: i.value,
            category_id: category_id
        })
    })
    .then(function(response){
        return response.json()
    })
    .then(function(list){
        console.log(list)
    let liTag = document.createElement('li')
        liTag.innerText = list.name 
        liTag.contentEditable = 'true'

        let viewBtn = document.createElement('button')
        viewBtn.innerText = "View"

        viewBtn.addEventListener('click', (e) => {
            e.preventDefault();
            while (document.body.firstChild) {
                document.body.removeChild(document.body.lastChild);
            }
            renderSignOutHeader()
            renderAllLanes(element)
        })

        let deleteButton = document.createElement('button')
        deleteButton.append('delete')

        deleteButton.addEventListener('click', function(){
            fetch(`http://127.0.0.1:3000/lists/${list.id}`,{
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify ({
                    id: list.id
                })
            })
            liTag.remove()
            deleteButton.remove()
            editButton.remove()
        })

        let editButton = document.createElement('button')
        editButton.append('edit')
    
        // lists.forEach(element => { 
        //     if (element.name == liTag.innerText)
        editButton.addEventListener('click', function(){
            fetch(`http://127.0.0.1:3000/lists/${list.id}`,{
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify ({
                    name: liTag.innerText
                })
            })
        
        })
        // })
    
        ulTag.append(liTag, deleteButton, editButton)
    })
    i.value = ''
    document.body.append(ulTag)

}







