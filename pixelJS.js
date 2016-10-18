// var containerBox = document.querySelector('#container');
// var newDiv = document.createElement('div');
// containerBox.appendChild(newdiv);
var colorChoice = 'black';
var colorArray = document.querySelectorAll('.color');
document.querySelector('#currentColor').style.background = colorChoice;
for(let j=0;j<colorArray.length;j++){
    colorArray[j].addEventListener('click', function(event){
      colorChoice = (event.target.style.background);
      document.querySelector('#currentColor').style.background = colorChoice;
    });
}

var pixel = document.getElementsByTagName('td');
for(var i=0;i<pixel.length;i++){
  pixel[i].addEventListener('click', function(event){
  event.target.style.backgroundColor=colorChoice;
  });
}

var eraseAll = document.querySelector('#erase');
eraseAll.addEventListener('click', function(event){
  for(var k=0;k<pixel.length;k++){
    pixel[k].style.backgroundColor='white';
  }
});
