const renderAllTasks = (laneDiv, swimLaneId) => {
    fetch("http://localhost:3000/tasks").then(function (resp) {
        return resp.json();
    }).then(function (tasks) {
        let filteredTasks = tasks.filter(function (task){
            return task.swim_lane_id == swimLaneId
        })
        renderSwimLaneTasks(filteredTasks, laneDiv, swimLaneId);  
    })
}