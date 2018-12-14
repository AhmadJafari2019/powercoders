
  //Javascript code goes here
  console.log('My code is running!');
  function greet(name) {
    console.log('Hello,' + name);
  }
  function setClassTip(event) {
    let el = document.getElementById('mypara');
    el.className= 'tip';
    console.log('event')
  }

  function clearClass(event) {
    let el = document.getElementById('mypara');
    el.className= '';
    console.log('event');
  }
  function setClassWarning(event) {
    let el = document.getElementById('mypara');
    el.className= 'warning';
    console.log('event');
  }
