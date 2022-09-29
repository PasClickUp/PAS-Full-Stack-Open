let ul = document.querySelector('ul')
let space = document.querySelector('#space')
let save = document.querySelector('#save')
let newLi


save.addEventListener('click', (e) => {
    newLi = document.createElement('li')
    newLi.textContent = space.value

    ul.append(newLi)

})
