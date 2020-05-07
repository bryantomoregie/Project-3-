const signUpBtnAction = () => {
    let modal = document.createElement("div")
    modal.className = "modal"
    modal.id = "myModal"

    let modContent = document.createElement("div")
    modContent.className = "modal-content"
    modal.append(modContent)

    let modalClose = document.createElement('span')
    modalClose.innerHTML = "&times;"
    modalClose.className = "close"
    modContent.append(modalClose)

    document.body.append(modal)
    newUserSubmitAction(modal, modContent)
}