document.addEventListener('DOMContentLoaded',function (event) {
    document.querySelector('button').addEventListener('click',function (event) {
        console.log('Hello Ahmad');
        let el =document.getElementById('item');
        console.log('Hello');
        el.value = 'haha'

    });
});