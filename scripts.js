let list = document.getElementById('list');
let add = document.getElementById('addElem');
add.addEventListener('click', function() {
    let element = document.createElement('li');
    let arrayOfLi = document.getElementsByTagName('Li').length;
    element.innerHTML = `item  ${arrayOfLi}`;
    list.appendChild(element);
});