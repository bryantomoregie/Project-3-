const renderUserHUD = () => {
    let name = document.createElement("h1")
    name.append(currentUser.name)
    document.body.append(name)

    let editProfileBtn = document.createElement("button")
    editProfileBtn.append("Edit My Profile")
    editProfileBtn.addEventListener("click", function(){
        renderEditProfileForm()
    })
    document.body.append(editProfileBtn)
}