const renderSwimLaneContent = (swimLane, listContainer) => {
    let swimLaneDiv = document.createElement('div')
    swimLaneDiv.className = 'swim-lane'

    let titleDiv = document.createElement('div')
    titleDiv.className = 'swim-lane-header'

    let laneH4 = document.createElement('h4')
    laneH4.innerText = swimLane.name
    laneH4.contentEditable = 'true'
    titleDiv.append(laneH4)
    
    let editBtn = document.createElement('button')
    editBtn.append('edit')

    //User can edit the swimLane name
    editBtn.addEventListener('click', function(){
        fetch(`http://127.0.0.1:3000/swim_lanes/${swimLane.id}`, {
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
        swimLaneDiv.remove()
        fetch(`http://127.0.0.1:3000/swim_lanes/${swimLane.id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify ({
                id: swimLane.id
            })
        })
    })

    renderAllTasks(swimLaneDiv, swimLane.id)
    swimLaneDiv.append(titleDiv, editBtn, deleteButton,)
    
    listContainer.append(swimLaneDiv)
}