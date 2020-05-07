const renderSwimLanes = (list) => {
    fetch('http://localhost:3000/swim_lanes')
    .then(function(response){
        return response.json()
    })
    .then(function(swimLanes){
        renderListTitle(list)
        let listContainer = document.createElement('div')
        listContainer.className = 'list-container'
        document.body.append(listContainer)

        swimLanes = swimLanes.filter(swimLane => {
            return swimLane.list_id == list.id
        })
        swimLanes.forEach(swimLane => {
            renderSwimLaneContent(swimLane, listContainer)
        });  

        const addSwimLaneBtn = document.createElement('button')
        addSwimLaneBtn.innerText = "+ Add Swim Lane"
        addSwimLaneBtn.className = "add-swim-lane"

        document.body.append(addSwimLaneBtn)

        addSwimLaneBtn.addEventListener('click', (e) => {
            e.preventDefault()
            renderNewSwimLaneForm(listContainer)
        })
    })
}