const renderHeader = () => {

    let headerDiv = document.createElement("div")
    headerDiv.className = "topnav"
    
    let headerLogo = document.createElement("img")
    headerLogo.className = "logo-img"
    headerLogo.style.height = "100px"
    headerLogo.src = "https://media.glassdoor.com/sqll/964142/flatiron-school-squarelogo-1479222088421.png"
    
    let signoutBtn = document.createElement("button")
    signoutBtn.append("Sign Out!")
    signoutBtn.addEventListener("click", function(){
        while (document.body.firstChild) {
            document.body.removeChild(document.body.lastChild);
        }
        renderLoginPage()
    })
    headerDiv.append(headerLogo, signoutBtn)
    
    document.body.append(headerDiv)
    
    }