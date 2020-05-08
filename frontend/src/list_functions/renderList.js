const renderList = (category_id) => {
    renderSignOutHeader()
    let backToCategoriesBtn = document.createElement('button')
    backToCategoriesBtn.innerText = "Back to Categories"
    backToCategoriesBtn.addEventListener('click', () => {
        renderHome()
    })
    document.body.append(backToCategoriesBtn)


    fetch('http://localhost:3000/lists')
    .then(function(response){
        return response.json()
    })
    .then(function(lists){
        lists = lists.filter(list => {
            return list.category_id == category_id
        })

        lists.forEach(list => {
            renderListPreview(list)
        });
    })
}