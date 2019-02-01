document.addEventListener('DOMContentLoaded', function () {
  const inputBox = document.getElementById('item');
  inputBox.focus();
  document.querySelector('button').addEventListener('click', function () {
    if (inputBox.value.trim() === '') {
      return;
    }
    if (event.key !== ''){
      return;
    }
    const element = document.createElement('li');
    const elementText = document.createTextNode(inputBox.value.trim());
    element.appendChild(elementText);
    const ul = document.querySelector('ul');
    ul.appendChild(element)
    inputBox.value = '';

  });
  document.querySelector('input').addEventListener('keyup', function () {
    if (inputBox.value.trim()===''){
          return;
    }
    if (event.key !== 'Enter'){
      return;
      if (event.key !== ' '){
        return;
      }
    }
    const element = document.createElement('li');
    const elementText = document.createTextNode(inputBox.value.trim());
    element.appendChild(elementText);
    const ul = document.querySelector('ul');
    ul.appendChild(element)
    inputBox.value = '';
  });

});