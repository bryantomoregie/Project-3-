const renderAllLanes = (the_list) => {



    const ulTag = document.createElement('ul')

    fetch('http://127.0.0.1:3000/swim_lanes')
    .then(function(response){
        return response.json()
    })
    .then(function(swimlanes){
    console.log(swimlanes)
    swimlanes = swimlanes.filter(sl => {
        return sl.list_id == the_list.id
    })
    swimlanes.forEach(element => {
        let laneDiv = document.createElement('div')
        laneDiv.className = 'swim-lane'

        let laneH4 = document.createElement('h4')
        laneH4.innerText = element.name
        laneH4.contentEditable = 'true'
        
        let editButton = document.createElement('button')
        editButton.append('edit')
        
        //post to browser
        // ulTag.append(liTag)

        //User can edit the swimLane name
        editButton.addEventListener('click', function(){
            fetch(`http://127.0.0.1:3000/swim_lanes/${element.id}`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify ({
                    name: laneH4.innerText
                })
            })
        })   
         //User can delete the swimlane  
         let deleteButton = document.createElement('button')
         deleteButton.append('delete')
        deleteButton.addEventListener('click', function(){
            fetch(`http://127.0.0.1:3000/swim_lanes/${element.id}`, {
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
    
    renderEachTask(laneDiv, element.id)
    laneDiv.append(laneH4, editButton, deleteButton,)
    
    document.body.append(laneDiv)
    });  


    //create submit form
    // document.body.append(ulTag)
    const formTag = document.createElement("form");
    
    const i = document.createElement("input"); 
    i.setAttribute('type',"text"); 
    i.setAttribute('name',"name");
    i.placeholder = "Type Name"
    
    
    const s = document.createElement("input"); 
    s.setAttribute('type',"submit");
    s.setAttribute('value',"Create Swim Lane");
    
    formTag.append(i, s)
    document.body.append(formTag)

    //click submit, create new swimlane
    s.addEventListener('click', function(e){
        e.preventDefault()
        renderSwimLaneForm(i,the_list, ulTag)
    })
    //listen for click on button
    //create new sl with post
    //for each sl created, add the buttons, with their function
    //event listener on each button
    //unles...

})

}

const renderSwimLaneForm = (i,list_id, ulTag) => {
    let ulTag = document.createElement("ul")

        fetch('http://127.0.0.1:3000/swim_lanes', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: i.value,
            list_id: list_id.id
             })
         })
         .then(function(response){
            return response.json()
        })
        .then(function(element){

            console.log(element)

            let liTag = document.createElement('li')
            liTag.append(element.name)
            liTag.contentEditable = 'true'
            
            let editButton = document.createElement('button')
            editButton.append('edit')
            
            //post to browser
            // ulTag.append(liTag)
    
            //User can edit the swimLane name
            editButton.addEventListener('click', function(){
                fetch(`http://127.0.0.1:3000/swim_lanes/${element.id}`, {
                    method: 'PATCH',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify ({
                        name: liTag.innerText
                    })
                })
            })   
             //User can delete the swimlane  
             let deleteButton = document.createElement('button')
             deleteButton.append('delete')
            deleteButton.addEventListener('click', function(){
                fetch(`http://127.0.0.1:3000/swim_lanes/${element.id}`, {
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
        
        ulTag.append(liTag, editButton, deleteButton)
        document.body.append(ulTag)
      
        })
        i.value = ''
}
