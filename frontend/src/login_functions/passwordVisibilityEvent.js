const passwordVisibilityEvent = (e) => {
    e.preventDefault()
    let pass = document.querySelector(".password-input");
    if (pass.type === "password") {
    pass.type = "text";
    } else {
    pass.type = "password";
    }
}