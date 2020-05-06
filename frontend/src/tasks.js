// write your code here
document.addEventListener('DOMContentLoaded', () => {
    fetch("http://localhost:3000/tasks").then(function (resp) {
        return resp.json();
    }).then(function (tasks) {
        renderTaskList(tasks);   
    })
})


function renderTaskList(tasks) {

    let swimLaneDiv = document.createElement('div')
    swimLaneDiv.className = 'swim-lane'
    document.body.append(swimLaneDiv)

    let swimLaneTitleDiv = document.createElement('div')
    swimLaneTitleDiv.innerText = "ALL TASKS"
    swimLaneTitleDiv.className = 'swim-lane-title'
    swimLaneDiv.append(swimLaneTitleDiv)


    let tasksDiv = document.createElement('div')
    tasksDiv.className = 'tasks-div'
    swimLaneDiv.append(tasksDiv)

    tasks.forEach((task) => {
        let taskDiv = document.createElement('div')
        taskDiv.className = 'task-card'

        let taskH4 = document.createElement('h4')
        taskH4.innerText = task.name
        taskDiv.append(taskH4)

        let editTaskBtn = document.createElement('button')
        editTaskBtn.className = "edit-task-btn"
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
            taskNameInput.value = (task.name)
            editTaskForm.append(taskNameInput)

            let editFormBtns = document.createElement('div')
            editFormBtns.className = 'edit-form-btns'

            let cancelBtn = document.createElement('button')
            cancelBtn.innerText = "Cancel"
            editFormBtns.append(cancelBtn)
            cancelBtn.addEventListener('click', (e) => {
                e.preventDefault();
                editTaskForm.remove();
                taskDiv.append(taskH4)
                taskDiv.append(editTaskBtn)
            })

            let deleteBtn = document.createElement('button')
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
            updateTaskBtn.type = "submit"
            updateTaskBtn.value = "Update"
            editFormBtns.append(updateTaskBtn)

            editTaskForm.append(editFormBtns)

            editTaskForm.addEventListener('submit', (e) => {
                e.preventDefault();
                editTaskForm.remove()
                taskH4.innerText = taskNameInput.value
                taskDiv.append(taskH4)
                taskDiv.append(editTaskBtn)

                fetch(`http://localhost:3000/tasks/${task.id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: taskH4.innerText,
                    })
                })
                    .then((resp) => {
                        return resp.json();
                    })
                    .then((task) => {
                        console.log(task)
                    })
            })

            taskDiv.append(editTaskForm)

        })

        tasksDiv.append(taskDiv)

    })

    let addTask = document.createElement('button')
    addTask.innerText = "+ Add Task"
    addTask.className = 'add-task'
    swimLaneDiv.append(addTask)

    addTask.addEventListener("click", () => {
        let newTaskDiv = document.createElement('div')
        newTaskDiv.className = 'task-card'

        let newTaskForm = document.createElement('form')

        let taskNameInput = document.createElement('input')
        taskNameInput.type = 'text'
        taskNameInput.value = "Task title..."
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
        tasksDiv.append(newTaskDiv)



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
            tasksDiv.append(newTaskDiv)

            fetch("http://localhost:3000/tasks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                    },
                body: JSON.stringify({
                    name: taskNameInput.value
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
    })
}
