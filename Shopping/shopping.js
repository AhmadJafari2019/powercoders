document.addEventListener('DOMContentLoaded', function (event) {
    document.querySelector('button').addEventListener('click', function (event) {
        let inputBox = document.getElementById('item');
        console.log(inputBox.value);
        let li = createNewListItem(inputBox.value);
        let ul = document.querySelector('ul');
        ul.appendChild(li);
        inputBox.value = '';

    });

    document.querySelector('input').addEventListener('keyup', function(event) {
        if (event.key === "Enter") {
            let inputBox = document.getElementById('item');
            let li = createNewListItem(inputBox.value);
            document.querySelector('ul').appendChild(li);
            inputBox.value = '';

        }

    });

});


function createNewListItem(itemName) {
    let listItem = document.createElement('li');
    let listText = document.createElement('span');
    listItem.textContent = itemName;

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', function (event) {
        console.log('Delete is clicked');
        listItem.remove();
    });

listItem.appendChild(listText);
listItem.appendChild(deleteButton);
return listItem;
}



















//with Va
// document.addEventListener('DOMContentLoaded',function (event) {
//     document.querySelector('button').addEventListener('click',function (event) {
//         let inputBox = document.getElementById('item');
//         console.log('inputBox.value');
//
//
//
//     });
// });
//
//
// function createNewListItem(itemName) {
//     let li = document.createElement('li');
//
//     let span = document.createElement('span');
//     let spanText = document.createTextNode(itemName);
//     span.appendChild(spanText);
//     li.appendChild(span);
//
//     let button = document.createElement('button');
//     let text = document.createTextNode('delete');
//     button.appendChild(text);
//     li.appendChild(button);
//     return li;
//     createNewListItem();
//
// }
//
//
//
//
//
//
//       function createNewListItem(itemName) {
//          let li = document.createElement('li');
//
//           let span = document.createElement('span');
//           let spanText= document.createTextNode('itemName');
//           span.appendChild(spanText);
//           span.innerText = itemName;
//           li.appendChild(span);
//
//
//           let button = document.createElement('button');
//           let text = document.createTextNode('delete');
//           button.appendChild(text);
//           li.appendChild(button);
//           return li;
//       }
// with chaining.
//  document.addEventListener('DOMContentLoaded',function (event) {
//      document.querySelector('button').addEventListener('click',function (event) {
//          let inputBox = document.getElementById('item');
//          console.log(document.getElementById('item').value);
//
//      });
//
// });
//
//
//
//   function createNewListItem(itemName) {
//       let li = document.createElement('li');
//
//       let span = document.createElement('span');
//       let spanText = document.createTextNode(itemName);
//       span.appendChild(spanText);
//       li.appendChild(span);
//
//       let button = document.createElement('button');
//       let text = document.createTextNode('delete');
//       button.appendChild(text);
//       li.appendChild(button);
//       return li;
//
//   }
//
//
//


