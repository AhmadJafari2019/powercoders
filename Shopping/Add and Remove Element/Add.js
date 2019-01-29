document.addEventListener('DOMContentLoaded', function (event) {
  document.querySelector('button').addEventListener('click', function (event) {
    let inputBox = document.getElementById('item');
    let inputValue = inputBox.value;
    let li = creatNewListItem(inputBox.value);
    document.querySelector('ul').appendChild(li);
  });
  //Add code here that listen for 'keyup' on the 'input' element
  document.querySelector('input').addEventListener('keyup', function (event) {
    //and logs the event.key property
    if (event.key === 'Enter') {
      let inputBox = document.getElementById('item');
      let li = creatNewListItem(inputBox.value);
      document.querySelector('ul').appendChild(li);
      //console.log(event.key);
    }
  });
});