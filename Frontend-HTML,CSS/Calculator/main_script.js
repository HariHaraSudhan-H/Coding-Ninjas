"use strict"
var buttons = document.getElementsByClassName('button');
var display = document.getElementById('display');
var operator = null;
var op1 = 0;
var op2 = null;
var ans = false;
function evaluate(value) {
    if (value == '+' || value == '*' || value == '/') {
        op1 = display.innerText;
        display.innerText = "";
        operator = value;
    } else if (value == '-') {
        if (op1 == 0 || operator != null) {
            display.innerText = "-";
        } else {
            op1 = display.innerText;
            display.innerText = "";
            operator = value;
        }
    }
    else if (value == '=') {
        ans = true;
        op2 = display.innerText;
        var result = eval(op1 + " " + operator + " " + op2);
        if (result == 'Infinity')
            display.innerText = "Error";
        else
            display.innerText = result;
        op2 = null;
        operator = null;
    } else if (value == '.') {
        if (display.innerText == '') {
            display.innerText = '0' + value;
        } else if (Number.isInteger(Number(display.innerText))) {
            display.innerText += value;
        }
    }
    else if (Number.isInteger(Number.parseInt(value))) {
        if (ans) {
            display.innerText = value
            ans = false;
        }
        else
            display.innerText += value;
    }
}
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', calculate);
    // buttons[i].addEventListener('keypress',calculateK);
}
function calculate() {
    var value = this.innerText;
    if (value == 'AC') {
        display.innerText = "";
        op1 = 0;
        op2 = null;
        operator = null;
    } else if (value == '+/-') {
        var sign = '+';
        if (display.innerText > 0) {
            sign = '-';
            display.innerText = sign + display.innerText;
        } else if (display.innerText == 0) {
            display.innerText = '-';
        } else {
            display.innerText = sign + display.innerText.slice(1);
        }
    } else if (value == '%') {
        display.innerText /= 100;
    } else {
        evaluate(value);
    }
}

document.addEventListener('keydown', calculateK);
function calculateK(event) {
    var value = event.key;
    if (value == 'Delete') {
        display.innerText = "";
        op1 = 0;
        op2 = null;
        operator = null;
    } else if (value == 'Enter') {
        ans = true;
        op2 = display.innerText;
        var result = eval(op1 + " " + operator + " " + op2);
        if (result == 'Infinity')
            display.innerText = "Error";
        else
            display.innerText = result;
    } else {
        evaluate(value);
    }
}