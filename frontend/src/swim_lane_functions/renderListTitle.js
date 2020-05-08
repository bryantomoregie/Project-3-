const renderListTitle = (list, divdiv) => {

    const listTitle = document.createElement('h2')
    listTitle.innerText = list.name
    divdiv.append(listTitle)
}