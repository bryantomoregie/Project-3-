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
        listDiv.className = "title-div"
        renderListTitle(list, listDiv)
        shareList(list, listDiv)

        contDiv.append(listDiv)

        let swimLaneDiv = document.createElement("div")

        contDiv.append(swimLaneDiv)


        let listContainer = document.createElement('div')
        listContainer.className = 'list-container'
        contDiv.append(listContainer)

        swimLanes = swimLanes.filter(swimLane => {
            return swimLane.list_id == list.id
        })
        swimLanes.forEach(swimLane => {
            renderSwimLaneContent(swimLanes, swimLane, listContainer, list)
        });  

        const addSwimLaneBtn = document.createElement('button')
        addSwimLaneBtn.innerText = "+ Add Swim Lane"
        addSwimLaneBtn.className = "add-swim-lane"

        swimLaneDiv.append(addSwimLaneBtn)

        addSwimLaneBtn.addEventListener('click', (e) => {
            e.preventDefault()
            renderNewSwimLaneForm(listContainer, list)
        })
    })
}