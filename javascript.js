let num1 = "0";
let num2 = "0";
let operator = "";
const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const divide = document.querySelector("#divide");
const multiply = document.querySelector("#multiply");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");
const displayedText = document.querySelector("#displayedText");
zero.addEventListener("click", () => {
  identifyInput(0);
});
one.addEventListener("click", () => {
  identifyInput(1);
});
two.addEventListener("click", () => {
  identifyInput(2);
});
three.addEventListener("click", () => {
  identifyInput(3);
});
four.addEventListener("click", () => {
  identifyInput(4);
});
five.addEventListener("click", () => {
  identifyInput(5);
});
six.addEventListener("click", () => {
  identifyInput(6);
});
seven.addEventListener("click", () => {
  identifyInput(7);
});
eight.addEventListener("click", () => {
  identifyInput(8);
});
nine.addEventListener("click", () => {
  identifyInput(9);
});
minus.addEventListener("click", () => {
  identifyInput("-");
});
plus.addEventListener("click", () => {
  identifyInput("+");
});
divide.addEventListener("click", () => {
  identifyInput("/");
});
multiply.addEventListener("click", () => {
  identifyInput("*");
});
equal.addEventListener("click", () => {
  identifyInput("=");
});
clear.addEventListener("click", () => {
  clearDisplayedText();
});

function addition() {
  convertNumsToNumber();
  num1 += num2;
  roundNumToTwoDeci();
  clearOperatorAndNum2();
  convertNumsToString();
  displayOnScreen();
}

function subtraction() {
  convertNumsToNumber();
  num1 -= num2;
  roundNumToTwoDeci();
  clearOperatorAndNum2();
  convertNumsToString();
  displayOnScreen();
}

function multiplication() {
  convertNumsToNumber();
  num1 *= num2;
  roundNumToTwoDeci();
  clearOperatorAndNum2();
  convertNumsToString();
  displayOnScreen();
}

function division() {
  convertNumsToNumber();
  num1 /= num2;
  roundNumToTwoDeci();
  clearOperatorAndNum2();
  convertNumsToString();
  displayOnScreen();
}

function clearDisplayedText() {
  displayedText.innerHTML = "";
  num1 = "0";
  num2 = "0";
  operator = "";
}

function displayOnScreen() {
  if (operator == "*") {
    operator = "x";
  }

  if (num2 !== "0" || (num2 == 0 && operator != "")) {
    displayedText.textContent = num1 + operator + num2;
    // } else if (num1 == "0" && operator != "") {
  } else {
    displayedText.textContent = num1 + operator;
  }
  if (operator == "x") {
    operator = "*";
  }
}

// identify whether input is numerical or operator
function identifyInput(input) {
  if (typeof input == "number") {
    setNumber(input);
  } else if (input == "+" || input == "-" || input == "*" || input == "/") {
    setOperator(input);
  } else if (input == "=") {
    initiateCalculation();
  }
}

// set numerical either for num1 or num2
function setNumber(inputNumber) {
  // debugger;
  if (operator == "") {
    if (num1 == "0") {
      num1 = inputNumber.toString();
    } else {
      combinedNumber = num1.toString() + inputNumber.toString();
      num1 = combinedNumber;
    }
  } else if (operator != "") {
    if (num2 == "0") {
      num2 = inputNumber.toString();
    } else {
      combinedNumber = num2.toString() + inputNumber.toString();
      num2 = combinedNumber;
    }
  }

  displayOnScreen();
}

function setOperator(inputOperator) {
  if (operator == "") {
    operator = inputOperator;
  } else {
    operator = "";
    operator = inputOperator;
  }
  displayOnScreen();
}
function clearOperatorAndNum2() {
  operator = "";
  num2 = "0";
}
function initiateCalculation() {
  if (operator == "/" && num1 == "0") {
    displayedText.textContent = "Error";
    clearOperatorAndNum2();
  } else {
    switch (operator) {
      case "+":
        addition();
        break;
      case "-":
        subtraction();
        break;
      case "*":
        multiplication();
        break;
      case "/":
        division();
        break;
    }
  }
}

function convertNumsToNumber() {
  temp1 = Number(num1);
  temp2 = Number(num2);
  num1 = temp1;
  num2 = temp2;
}

function convertNumsToString() {
  temp1 = num1.toString();
  temp2 = num2.toString();
  num1 = temp1;
  num2 = temp2;
}

function roundNumToTwoDeci() {
  num1 = Math.round(num1 * 100) / 100;
}

// function combine(num) {
//   let combinedNum = "";
//   if (num == "+" || num == "-" || num == "/" || num == "*") {
//     operator = num;
//   } else {
//     if (num1 == null) {
//       combinedNum = num.toString();
//       num1 = Number(num);
//     } else {
//       if (combinedNum == "00") {
//         combinedNum = "0";
//       }
//       if (typeof num && num1 != 0) {
//         combinedNum = num1.toString() + num.toString();
//       } else if (num1 == 0) {
//         combinedNum = Number(num);
//       }
//       num1 = Number(combinedNum);
//     }
//     displayedText.textContent = combinedNum;
//   }
//   displayedText.textContent = operator;
// }

// function displayCalculation() {
//   displayedText.textContent = "";
// }
