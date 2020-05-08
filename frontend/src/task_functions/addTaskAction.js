const addTaskAction = (tasksContainer, swimLaneId) => {
    console.log(swimLaneId)
    let newTaskDiv = document.createElement('div')
    newTaskDiv.className = 'task-card'

    let newTaskForm = document.createElement('form')

    let taskNameInput = document.createElement('input')
    taskNameInput.type = 'text'
    taskNameInput.placeholder = "Task title..."
    taskNameInput.className = 'task-name-input'
    newTaskForm.append(taskNameInput)

    let addBtns = document.createElement('div')
    addBtns.className = 'edit-form-btns'

    let cancelTaskBtn = document.createElement('button')
    cancelTaskBtn.innerText = 'Cancel'
    addBtns.append(cancelTaskBtn)

    cancelTaskBtn.addEventListener('click', (e) => {
        newTaskDiv.remove();
    })

    let saveTaskBtn = document.createElement('input')
    saveTaskBtn.type = 'submit'
    saveTaskBtn.value = 'Save'
    addBtns.append(saveTaskBtn)

    newTaskForm.append(addBtns)
    newTaskDiv.append(newTaskForm)
    tasksContainer.append(newTaskDiv)



    saveTaskBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let taskH4 = document.createElement('h4')
        taskH4.innerText = taskNameInput.value
        newTaskDiv.append(taskH4)

        taskNameInput.remove()
        cancelTaskBtn.remove()
        saveTaskBtn.remove()

        let editBtn = document.createElement('button')
        editBtn.innerText = "Edit"
        editBtn.addEventListener('click', (e) => {
            taskH4.remove();
            editBtn.remove();
        })

        newTaskDiv.append(editBtn)
        tasksContainer.append(newTaskDiv)

        fetch("http://localhost:3000/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
                },
            body: JSON.stringify({
                name: taskNameInput.value,
                swim_lane_id: swimLaneId
            })
        })
        .then((resp) => {
            return resp.json();
        })
        .then((task) => {
            console.log(task)
        })

        editBtn.addEventListener('click', (e) => {
            taskH4.remove();
            editBtn.remove();
        })
    })
}