const shareList = (list, listdiv) => {
    let shareListDiv = document.createElement('div')
    listdiv.append(shareListDiv)


    let shareListBtn = document.createElement('button')
    shareListBtn.innerText = "Share List"
    shareListBtn.addEventListener('click', () => {
        shareListBtn.remove()
        let shareListForm = document.createElement('form')

        let shareListInput = document.createElement('input')
        shareListInput.type = "text"
        shareListInput.value = "Enter User to Share List"
        shareListForm.append(shareListInput)

        let shareListSubmit = document.createElement('input')
        shareListSubmit.type ="submit"
        shareListSubmit.value = "Share"
        shareListSubmit.addEventListener('click', (e) => {
            e.preventDefault()
            fetch("http://localhost:3000/user_lists", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    user_id: 2,
                    list_id: list.id
                })
            })
        })
        shareListForm.append(shareListSubmit)
        shareListDiv.append(shareListForm)
    })
    listdiv.append(shareListBtn)
}