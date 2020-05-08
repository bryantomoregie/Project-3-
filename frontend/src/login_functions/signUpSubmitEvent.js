const signUpSubmitEvent = (e, signInUserInput ,signInPasswordInput) => {
    e.preventDefault()

    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            username: signInUserInput.value,
            password: signInPasswordInput.value,
        })
    })
    .then((response) => response.json())
    .then(function(user){
        fetch(`http://localhost:3000/users/${user.id}`)
        .then((response) => response.json())
        .then(function(user){
            currentUser = user
            renderHome()
    })

    })
    signInUserInput.value = ''
    signInPasswordInput.value = ''
}