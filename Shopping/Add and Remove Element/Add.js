document.addEventListener('DOMContentLoaded', function () {
  const inputBox =  document.getElementById('item');
  inputBox.focus();
  document.querySelector('#button').addEventListener('click', function () {

    const trimValue = inputBox.value.trim();
    if (trimValue === ''){
      return;
    }
    const ul = document.querySelector('ul');
    const list = document.createElement('li');
    const listText = document.createTextNode(inputBox.value.trim());
    list.appendChild(listText);
    ul.appendChild(list);
    inputBox.focus();
    inputBox.value = '';

  });
  document.querySelector('input').addEventListener('keyup', function () {
    const trimValue = inputBox.value.trim();
    if (trimValue === ''){
      return;
    }
    if (event.key === 'Enter') {

      const ul = document.querySelector('ul');
      const list = document.createElement('li');
      const listText = document.createTextNode(inputBox.value.trim());
      list.appendChild(listText);
      ul.appendChild(list);
      inputBox.focus();
      inputBox.value = '';
    }
  }) ;
});
