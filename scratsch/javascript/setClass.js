
  //Javascript code goes here
  console.log('My code is running!');
  function greet(name) {
    console.log('Hello,' + name);
  }

  console.log('This is the first js line');
  
  function setClass(className) {
    let el = document.getElementById('mypara');
    el.className= className;
  }

  document.addEventListener('DOMContentLoaded', function (event) {
    let makeWarning = document.getElementById('make-warning');
    makeWarning.addEventListener('click', function (event) {
    setClass( 'warning')
    });

    let makeTip = document.getElementById('make-tip');
    makeTip.addEventListener('click', function (event) {
        setClass( 'tip');
    });

    let makeNormal =document.getElementById('make-normal');
    makeNormal.addEventListener('click', function (event) {
      setClass( '');
    });
  });
