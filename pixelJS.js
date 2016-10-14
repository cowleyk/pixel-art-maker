// var containerBox = document.querySelector('#container');
// var newDiv = document.createElement('div');
// containerBox.appendChild(newdiv);
var colorChoice = 'black';
var colorArray = document.querySelectorAll('.color');
for(let j=0;j<colorArray.length;j++){
    colorArray[j].addEventListener('click', function(event){
      colorChoice = (event.target.style.background);
    });
}

var pixel = document.getElementsByTagName('td');
for(var i=0;i<pixel.length;i++){
  pixel[i].addEventListener('click', function(event){
  event.target.style.backgroundColor=colorChoice;
  });
}
