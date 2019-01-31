document.addEventListener('DOMContentLoaded', function (event) {
  const inputBox = document.getElementById('item');
  inputBox.focus();

document.getElementById('button').addEventListener('click', function(event) {
  if (inputBox.value.trim() === '' ){
    return;
  }
  const element = document.createElement('li');
  const elementText = document.createTextNode(inputBox.value.trim());
  element.appendChild(elementText);
  const ul = document.querySelector('ul');
  ul.appendChild(element);
  const deleteButton = document.createElement('button');
  deleteButton.textContent ='delete';
  element.appendChild(deleteButton);
  inputBox.value = '';

  });

document.querySelector('input').addEventListener('keyup', function (event) {
  if (inputBox.value.trim() === '' ){
    return;
  }

  console.log(`Key is [${event.key}]`);
  if (event.key !== ' '){
    return;
  }
  const element = document.createElement('li');
  const elementText = document.createTextNode(inputBox.value.trim());
  element.appendChild(elementText);
  const ul = document.querySelector('ul');
  ul.appendChild(element);
  const deleteButton = document.createElement('button');
  deleteButton.textContent ='delete';
  element.appendChild(deleteButton);
  deleteButton.addEventListener('click', function (event) {
    element.remove();
  });
  inputBox.value = '';
});
});