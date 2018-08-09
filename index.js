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


// function operationSelector(number1, operator, number2){
//   //Find out if the operation is a +, -, * or divide.
//   if(operator == "+"){
//     console.log(number1 + number2);
//     //Display answer.
//     return number1 + number2;
//   }
//   else if(operator == "-"){
//     console.log(number1 - number2);
//     //Display answer.
//     return number1 - number2;
//   }
//   else if(operator == "*"){
//     console.log(number1 * number2);
//     //Display answer.
//     return number1 * number2;
//   }
//   else if(operator == "/"){
//     console.log(number1 / number2);
//     //Display answer.
//     return number1 / number2;
//   }
// }
//
//
//
//
//
// function basicLong(){
//   //Give the computer one operation.
//   var number1 = parseInt(prompt("Enter first number"));
//   //Below will hold the rest of the numbers/operation.
//   //These will be updated until it meets an equals.
//   var operator;
//   var number2;
//   //Variable below holds false to activate the loop.
//   var pressedEqual = false;
//   //The while loop checks if the boolean variable is still false.
//   while(!pressedEqual){
//     //Below asks for an operation.
//     operator = prompt("Enter an operation");
//     //Find out if the operation is a +, -, * or divide.
//     if(operator == "+" || operator == "-" || operator == "*" || operator == "/"){
//         number2 = parseInt(prompt("Enter a number"));
//         number1 = operationSelector(number1, operator, number2);
//     }
//     //If the operation is equals, close the loop and show answer.
//     else if(operator == "="){
//       //Display answer
//       alert(number1);
//       pressedEqual = true;
//     }
//     //If it is none of the operations above, send error.
//     else{
//       console.log("Does not compute operator.");
//       basicLong();
//     }
//   }
//   //Call the choice function to start again.
//   choice();
// }
