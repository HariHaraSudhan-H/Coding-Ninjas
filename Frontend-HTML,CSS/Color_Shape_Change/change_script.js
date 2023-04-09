var colors = ["green","grey", "orange","black","lightgrey","cyan","red","yellow","maroon","lightgreen"];
var shapes = ["square","rectangle","triangle-up","triangle-down","triangle-bottom-right","triangle-top-right","triangle-bottom-left","triangle-top-left"]
var outer=document.getElementById('outer');
var inner=document.getElementById('inner');
var color = document.getElementById('colorChange');
var shape = document.getElementById('shapeChange');
color.addEventListener('click',colorChange);
function colorChange(){
    var nextColor = colors[Math.floor(Math.random()*colors.length)];
    console.log(nextColor);
    outer.style.backgroundColor=nextColor;
}
shape.addEventListener('click',shapeChange);
function shapeChange(){
    var nextShape = shapes[Math.floor(Math.random()*shapes.length)];
    inner.setAttribute("class",nextShape);
}