const renderNewSwimLaneForm = (listContainer, list) => {
    console.log(list)
    let swimLaneDiv = document.createElement('div')
    swimLaneDiv.className = 'swim-lane'

    let titleDiv = document.createElement('div')
    titleDiv.className = 'swim-lane-header'
    swimLaneDiv.append(titleDiv)

    const newSwimLaneForm = document.createElement("form");
        
    const taskNameInput = document.createElement("input"); 
    taskNameInput.setAttribute('type',"text"); 
    taskNameInput.setAttribute('name',"name");
    taskNameInput.placeholder = "Type Name"
    
    const newSwimLaneSubmit = document.createElement("input"); 
    newSwimLaneSubmit.setAttribute('type',"submit");
    newSwimLaneSubmit.setAttribute('value',"Create Swim Lane");
    
    newSwimLaneForm.append(taskNameInput, newSwimLaneSubmit)
    titleDiv.append(newSwimLaneForm)
    listContainer.append(swimLaneDiv)

    //click submit, create new swimlane
    newSwimLaneSubmit.addEventListener('click', function(e){
        e.preventDefault()
        newSwimLaneForm.remove()
        fetch('http://localhost:3000/swim_lanes', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: taskNameInput.value,
            list_id: list.id
            })
        })
        .then(function(response){
            return response.json()
        })
        .then(function(newSwimLane){
            console.log(newSwimLane)
            let laneH4 = document.createElement('h4')
            laneH4.innerText = newSwimLane.name
            laneH4.contentEditable = 'true'
            titleDiv.append(laneH4)
            swimLaneDiv.append(titleDiv)

            //User can edit the swimLane name
            let editButton = document.createElement('button')
            editButton.innerText = 'edit'
            swimLaneDiv.append(editButton)

            editButton.addEventListener('click', function(){
                fetch(`http://127.0.0.1:3000/swim_lanes/${newSwimLane.id}`, {
                    method: 'PATCH',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify ({
                        name: newSwimLane.name
                    })
                })
            })   
            //User can delete the swimlane  
            let deleteButton = document.createElement('button')
            deleteButton.append('delete')
            swimLaneDiv.append(deleteButton)

            deleteButton.addEventListener('click', function(){
                swimLaneDiv.remove()
                fetch(`http://127.0.0.1:3000/swim_lanes/${newSwimLane.id}`, {
                    method: 'DELETE',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify ({
                        id: newSwimLane.id
                    })
                })
            })

            let addTask = document.createElement('button')
            addTask.innerText = "+ Add Task"
            addTask.className = 'add-task'
            swimLaneDiv.append(addTask)

        // document.body.append(ulTag)
        })
    })
}