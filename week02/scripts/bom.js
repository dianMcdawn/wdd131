
//Cosntant Variables
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
//Consant creating element
const li = document.createElement('li');
const deleteButton = document.createElement('button');

//When add button is clicked
button.addEventListener('click', function () {
    // Code to execute when the button is clicked
    if (input.value.trim() !== '') {
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
    } else {
        input.focus();
    }
});

deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.value = '';
    input.focus();
});