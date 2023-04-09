var buttons = document.getElementsByClassName('button');
var display = document.getElementById('display');
var operator = null;
var op1=0;
var op2=null;

for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',calculate);
}
function calculate(){
    var value = this.innerText;
    if(value=='AC'){
        display.innerText="";
    }else if(value=='+'){
        op1=display.innerText;
        display.innerText="";
        operator=value;
    }else if(value=='-'){
        op1=display.innerText;
        display.innerText="";
        operator=value;
    }else if(value=='*'){
        op1=display.innerText;
        display.innerText="";
        operator=value;
    }else if(value=='/'){
        op1=display.innerText;
        display.innerText="";
        operator=value;
    }else if(value=='='){
        op2=display.innerText;
        display.innerText=eval(op1+" "+operator+" "+op2);
    }else if(value=='+/-'){
        var sign='+';
        if(display.innerText>0){
            sign='-';
            display.innerText=sign+display.innerText;
        }else{
            display.innerText=sign+display.innerText.slice(1);
        }
    }else if(value=='%'){
        display.innerText/=100;
    }else if(value=='.'){
        if(display.innerText==''){
            display.innerText='0'+value;
        }else if(Number.isInteger(Number(display.innerText))){
            display.innerText+=value;
        }
    }
    else{
        display.innerText+=value;
    }
}