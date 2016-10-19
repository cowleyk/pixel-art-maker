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
//set selected color to variable colorChoice

var colorPick = document.querySelector('#colorPicker');
colorPick.addEventListener('click',function(event){
  colorChoice = colorPick.value;
  document.querySelector('#currentColor').style.background = colorChoice;
});
//set input color to brush color

var pixel = document.getElementsByTagName('td');
for(var i=0;i<pixel.length;i++){
  var bools = false;
  document.querySelector('.grid').addEventListener('mousedown', function(){
    bools=true;
  });

  pixel[i].addEventListener('mouseover', function(event){
    if(bools){
      event.target.style.backgroundColor=colorChoice;
      console.log(bools);
    }
  });

  document.querySelector('.grid').addEventListener('mouseup', function(){
    bools=false;
  });
};
//make clicked pixel have background color colorChoice
//should the #grid event listeners be inside the for loop?

var eraseAll = document.querySelector('#erase');
eraseAll.addEventListener('click', function(event){
  for(var k=0;k<pixel.length;k++){
    pixel[k].style.backgroundColor='white';
  }
});
//reset all pixels to white
