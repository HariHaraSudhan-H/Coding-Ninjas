var interval;
var startbutton = document.getElementById('button');
var counting = document.getElementById('count');
var maxCount = document.getElementById('maxCount');
startbutton.addEventListener('click',counter);
function counter(){
    startbutton.disabled=true;
    var number = maxCount.value;
     if (isNaN(number)) {
        alert("Please enter a number");
        clearInterval(interval);
        reset();   // This is important for the condition when a counter is running and you entered a wrong input for a new counter
        return;
    }
    if (number < 1 || number > 9) {
        alert("Range out of bounds");
        clearInterval(interval);
        reset();
        return;
    }
    let currentNum = document.getElementById('0');
    let nextNum = document.getElementById('1');
    var count=0;
    interval = setInterval(function(){
        if(count==number){
            window.alert("Times Up!! Counter has stopped");
            reset(currentNum,nextNum);
            clearInterval(interval);
            return;
        }
        increaseCount(currentNum,nextNum);
        count++;
    },1000);
}
function reset(currentNum,nextNum){
    maxCount.value="0";
    startbutton.disabled=false;
    currentNum.innerHTML="0";
    nextNum.innerHTML="1";
}
function increaseCount(currentNum,nextNum){
    nextNum.classList.add("animate");
    setTimeout(function() {
        currentNum.innerHTML=nextNum.innerHTML;
        nextNum.classList.remove("animate")
        nextNum.innerHTML=parseInt(nextNum.innerHTML)+1;
    }, 500);
}