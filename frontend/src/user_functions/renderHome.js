const renderHome = () => {
    while (document.body.firstChild) {
        document.body.removeChild(document.body.lastChild);
    }
    renderHeader()
    renderUserHUD()
    renderCategories()
}