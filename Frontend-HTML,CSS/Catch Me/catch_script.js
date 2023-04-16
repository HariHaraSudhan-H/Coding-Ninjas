var button = document.getElementById('button');
button.addEventListener('mouseover',hover);
var app = document.getElementById('app');
var appWidth = parseInt(app.clientWidth);
var appHeight = parseInt(app.clientHeight);
function hover(){
    console.log("Chnaging")
    var top = parseInt(button.style.top);
    var left = parseInt(button.style.left);
    var newTop = Math.floor(Math.random()*(appHeight-110));
    var newLeft = Math.floor(Math.random()*(appWidth-110));
    console.log(newTop,newLeft)
    button.style.top=newTop+"px";
    button.style.left=newLeft+"px";
}