var ball = document.getElementById('ball');
ball.style.top=ball.offsetTop+"px";
ball.style.left=ball.offsetLeft+"px";
var main = document.getElementById('main');
var mainWidth = parseInt(main.clientWidth);
var mainHeight = parseInt(main.clientHeight);
console.log(mainWidth,mainHeight);
window.addEventListener('keypress',function(event){
    var key = event.key;
    move(key);
})

function move(key){
    var top=parseInt(ball.style.top);
    var left=parseInt(ball.style.left);
    if(key==='W'||key==='w'){
        if(top>10)
            ball.style.top=top-10+"px";
    }
    if(key==='A'||key==='a'){
        if(left>10)
            ball.style.left=left-10+"px";
    }
    if(key==='S'||key==='s'){
        if(mainHeight-top>110)
            ball.style.top=top+10+"px";
    }
    if(key==='D'||key==='d'){
        if(mainWidth-left>110)
            ball.style.left=left+10+"px";
    }
}