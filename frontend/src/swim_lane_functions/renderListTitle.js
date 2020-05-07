const renderListTitle = (list) => {
    const listTitle = document.createElement('h2')
    listTitle.innerText = list.name
    document.body.append(listTitle)
    return
}