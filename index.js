var numPad = document.getElementsByClassName("buttonNum");
var plusButton = document.getElementById("plus");
var minusButton = document.getElementById("minus");
var multiplyButton = document.getElementById("multiply");
var divideButton = document.getElementById("divide");
var equalButton = document.getElementById("equals");
var screenEdit = document.getElementById("screen");
var clearButton = document.getElementById("clear");
var string = "";
//Give the computer one operation.
var number1;
//Below will hold the rest of the numbers/operation.
//These will be updated until it meets an equals.
var operator;
var number2;

numPad[0].addEventListener("click", num1);
numPad[1].addEventListener("click", num2);
numPad[2].addEventListener("click", num3);
numPad[3].addEventListener("click", num4);
numPad[4].addEventListener("click", num5);
numPad[5].addEventListener("click", num6);
numPad[6].addEventListener("click", num7);
numPad[7].addEventListener("click", num8);
numPad[8].addEventListener("click", num9);

plusButton.addEventListener("click", plus);
minusButton.addEventListener("click", minus);
multiplyButton.addEventListener("click", multiply);
divideButton.addEventListener("click", divide);
equalButton.addEventListener("click", equals);
clearButton.addEventListener("click", clears);


function num1(){
  string = string + "1";
  screenEdit.innerHTML = string;
}
function num2(){
  string = string + "2";
  screenEdit.innerHTML = string;
}
function num3(){
  string = string + "3";
  screenEdit.innerHTML = string;
}
function num4(){
  string = string + "4";
  screenEdit.innerHTML = string;
}
function num5(){
  string = string + "5";
  screenEdit.innerHTML = string;
}
function num6(){
  string = string + "6";
  screenEdit.innerHTML = string;
}
function num7(){
  string = string + "7";
  screenEdit.innerHTML = string;
}
function num8(){
  string = string + "8";
  screenEdit.innerHTML = string;
}
function num9(){
  string = string + "9";
  screenEdit.innerHTML = string;
}

function plus(){
  number1 = parseFloat(string);
  string = "";
  operator = "+";
  screenEdit.innerHTML = string;
}
function minus(){
  number1 = parseFloat(string);
  string = "";
  operator = "-";
  screenEdit.innerHTML = string;
}
function multiply(){
  number1 = parseFloat(string);
  string = "";
  operator = "*";
  screenEdit.innerHTML = string;
}
function divide(){
  number1 = parseFloat(string);
  string = "";
  operator = "/";
  screenEdit.innerHTML = string;
}

function equals(){
  if(operator == "+"){
      number2 = parseFloat(string);
      string = number1 + number2;
    }
  else if(operator == "-"){
    number2 = parseFloat(string);
    //Display answer.
    string = number1 - number2;
  }
  else if(operator == "*"){
    number2 = parseFloat(string);
    //Display answer.
    string = number1 * number2;
  }
  else if(operator == "/"){
    number2 = parseFloat(string);
    //Display answer.
    string = number1 / number2;
  }

  screenEdit.innerHTML = string;
}

function clears(){
  string = "";
  screenEdit.innerHTML = string;
}
