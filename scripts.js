var list = document.getElementById('list');
var add = document.getElementById('addElem');
add.addEventListener('click', function() {
    var element = document.createElement('li');
    var arrayOfLi = document.getElementsByTagName('Li').length;
    element.innerHTML = `item  ${arrayOfLi}`;
    list.appendChild(element);
});