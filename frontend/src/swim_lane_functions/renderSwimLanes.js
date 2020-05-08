const renderSwimLanes = (list) => {
    fetch('http://localhost:3000/swim_lanes')
    .then(function(response){
        return response.json()
    })
    .then(function(swimLanes){
        
        let contDiv = document.createElement("div")
        contDiv.className = "container"
        document.body.append(contDiv)

        let listDiv = document.createElement("div")
        listDiv.className = "category-div"
        renderListTitle(list, listDiv)
        shareList(list, listDiv)

        contDiv.append(listDiv)

        let listContainer = document.createElement('div')
        listContainer.className = 'list-container'
        contDiv.append(listContainer)

        swimLanes = swimLanes.filter(swimLane => {
            return swimLane.list_id == list.id
        })
        swimLanes.forEach(swimLane => {
            renderSwimLaneContent(swimLane, listContainer, list)
        });  

        let swimLaneDiv = document.createElement("div")
        // swimLaneDiv.className = "category-div"

        const addSwimLaneBtn = document.createElement('button')
        addSwimLaneBtn.innerText = "+ Add Swim Lane"
        addSwimLaneBtn.className = "add-swim-lane"

        swimLaneDiv.append(addSwimLaneBtn)

        contDiv.append(swimLaneDiv)

        addSwimLaneBtn.addEventListener('click', (e) => {
            e.preventDefault()
            renderNewSwimLaneForm(listContainer, list)
        })
    })
}