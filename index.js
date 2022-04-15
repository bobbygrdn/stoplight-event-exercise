(function() {
  'use strict';

  var stopButton = document.getElementById('stopButton');
  var slowButton = document.getElementById('slowButton');
  var goButton = document.getElementById('goButton');

  var stopLight = document.getElementById('stopLight');
  var slowLight = document.getElementById('slowLight');
  var goLight = document.getElementById('goLight');

  var controls = document.getElementById('controls');

  stopButton.addEventListener('click', function() {
  if(stopLight.style.backgroundColor == 'black') {
    stopLight.style.background = 'red'
  } else {
    stopLight.style.backgroundColor = 'black';
  }
  });

  slowButton.addEventListener('click', function() {
  if(slowLight.style.backgroundColor == 'black') {
    slowLight.style.background = 'yellow'
  } else {
    slowLight.style.backgroundColor = 'black';
  }
  });
  
  goButton.addEventListener('click', function() {
   if(goLight.style.backgroundColor == 'black') {
      goLight.style.background = 'green'
   } else {
      goLight.style.backgroundColor = 'black';
   }
  });  

  stopButton.addEventListener('mouseenter', function() {
    console.log('Entered Stop Button');
  })
  
  stopButton.addEventListener('mouseleave', function() {
    console.log('Left Stop Button');
  })

  slowButton.addEventListener('mouseenter', function() {
    console.log('Entered Slow Button');
  })
  
  slowButton.addEventListener('mouseleave', function() {
    console.log('Left Slow Button');
  })

  goButton.addEventListener('mouseenter', function() {
    console.log('Entered Go Button');
  })
  
  goButton.addEventListener('mouseleave', function() {
    console.log('Left Go Button');
  })

  controls.addEventListener('click', function(event) {
    if(event.target && event.target.matches('.button') && event.target.style.backgroundColor !== 'black') {
      console.log(event.target.textContent + ' bulb on')
    } else if(event.target && event.target.matches('.button') && event.target.style.backgroundColor === 'black') {
      console.log(event.target.textContent + " bulb off")
    }
  });

})();
