

// function paragraph(){
//     let p = document.createElement('p');
//     let txt = document.createTextNode('A new text');
//     p.appendChild(txt);
//     let b = document.getElementById('the-body');
//     b.appendChild(p);
// }
// document.addEventListener('DOMContentLoaded', function(event) {
//     document.getElementById("text").addEventListener('click', function(){
//         paragraph()
//     });
// });


function list() {
    console.log('Hello');
    let ptxt = document.createTextNode('item one');
    let htxt = document.createTextNode('item two');
    let gtxt = document.createTextNode('item three');
    let p = document.createElement('ul');
    let content = document.createElement('li');
    let pBody = document.getElementById('the-body');
    content.appendChild(ptxt);
    let pnew = document.createTextNode('item one');
    let hnew = document.createTextNode('item two');
    let gnew = document.createTextNode('item three');
    let pContent = document.createElement('li');
    p.appendChild(content);
    let palt = document.createTextNode('item one');
    let halt = document.createTextNode('item two');
    let galt = document.createTextNode('item three');
    let hContent = document.createElement('li');
   pContent.appendChild(htxt);


    pBody.appendChild(p);
}

document.addEventListener('DOMContentLoaded', function (event) {
    document.getElementById('text').addEventListener('click', function () {
        list();

        });



});