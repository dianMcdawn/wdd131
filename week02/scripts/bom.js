
//Cosntant Variables
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('list');
const li = document.createElement('li');
const deleteButton = document.createElement('button');

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