function renderSwimLaneTasks(tasks, laneDiv) {
    let tasksContainer = renderTasksContainer(laneDiv);

    tasks.forEach((task) => {
        renderTaskContent(task, tasksContainer)
    })

    let addTask = document.createElement('button')
    addTask.innerText = "+ Add Task"
    addTask.className = 'add-task'
    laneDiv.append(addTask)

    addTask.addEventListener("click", () => {
        addTaskAction()
    })
}