const renderTaskContent = (task, tasksContainer, swimLanes) => {         
    let taskDiv = document.createElement('div')
    taskDiv.className = 'task-card'

    let taskH4 = document.createElement('h4')
    taskH4.innerText = task.name
    taskDiv.append(taskH4)

    let editTaskBtn = document.createElement('button')
    editTaskBtn.className = "save-btn"
    editTaskBtn.innerText = 'Edit'
    taskDiv.append(editTaskBtn)

    editTaskBtn.addEventListener("click", (e) => {
        e.preventDefault();
        taskH4.remove()
        editTaskBtn.remove()

        let editTaskForm = document.createElement('form')
        editTaskForm.className = "edit-task"

        let taskNameInput = document.createElement('input')
        taskNameInput.type = "text"
        taskNameInput.placeholder = task.name
        editTaskForm.append(taskNameInput)

        let swimLanesDropDown = document.createElement('select')
        swimLanes.forEach((swimLane) => {
            option = document.createElement("option")
            option.value = swimLane.id
            option.text = swimLane.name
            swimLanesDropDown.append(option)
        })
        editTaskForm.append(swimLanesDropDown)

        let editFormBtns = document.createElement('div')
        editFormBtns.className = 'edit-form-btns'

        let cancelBtn = document.createElement('button')
        cancelBtn.className = "task-btn"
        cancelBtn.innerText = "Cancel"
        editFormBtns.append(cancelBtn)
        cancelBtn.addEventListener('click', (e) => {
            e.preventDefault();
            editTaskForm.remove();
            taskDiv.append(taskH4)
            taskDiv.append(editTaskBtn)
        })

        let deleteBtn = document.createElement('button')
        deleteBtn.className = "task-btn"
        deleteBtn.innerText = "Delete"
        deleteBtn.addEventListener("click", (e) => {
            e.preventDefault();
            taskDiv.remove();

            fetch(`http://localhost:3000/tasks/${task.id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: task.id
                })
            })
        })
        editFormBtns.append(deleteBtn)


        let updateTaskBtn = document.createElement('input')
        updateTaskBtn.className = "task-btn"
        updateTaskBtn.type = "submit"
        updateTaskBtn.value = "Update"
        editFormBtns.append(updateTaskBtn)

        editTaskForm.append(editFormBtns)

        editTaskForm.addEventListener('submit', (e) => {
            e.preventDefault();


            fetch(`http://localhost:3000/tasks/${task.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: taskH4.innerText,
                    swim_lane_id: swimLanesDropDown.value
                })
            })
            .then((resp) => {
                return resp.json();
            })
            .then((task) => {
                console.log(task.name)
            })

            editTaskForm.remove()
            taskH4.innerText = taskNameInput.value
            taskDiv.append(taskH4)
            taskDiv.append(editTaskBtn)
        })

        taskDiv.append(editTaskForm)

    })

    tasksContainer.append(taskDiv)
}