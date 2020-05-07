const renderEachTask = (laneDiv, swimLaneId) => {
    fetch("http://localhost:3000/tasks").then(function (resp) {
        return resp.json();
    }).then(function (tasks) {
        console.log(tasks)
        let filteredTasks = tasks.filter(function (task){
            return task.swim_lane_id == swimLaneId
        })
        renderTaskList(filteredTasks, laneDiv);  
    })
}



