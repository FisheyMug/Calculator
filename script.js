const display = document.getElementById("display");
const buttons = document.querySelectorAll('button');
let a1 = null;
let a2 = null
let operator = "";
let waitingForSecondOperator = false;
let decimalPresent = false;



function input(value) {
  if ( isNaN(value)===false) {
      i = value;
      display.innerHTML += i;
  } 
  if (waitingForSecondOperator===false && ((value ==="+") || (value ==="-") || (value==="*") || (value === "/"))) {
      operator= value;
      a1= display.innerHTML;
      waitingForSecondOperator= true;
      display.innerHTML="";
      decimalPresent=false;
  }   else if ( waitingForSecondOperator===true && ((value ==="+") || (value ==="-") || (value==="*") || (value === "/"))) {     
      a1 = operate(a1,display.innerHTML,operator);
      display.innerHTML=a1;
      operator = value;
      display.innerHTML="";
      decimalPresent=false;
  }   else if (value=== "="&& waitingForSecondOperator==true) {
      display.innerHTML = operate(a1,display.innerHTML,operator);
      waitingForSecondOperator= false;
      decimalPresent=false;
  } else if (value==="false") {
    clear();
  } else if (value ==="." && decimalPresent===false) {
    display.innerHTML += "."
    decimalPresent = true;
  } else if (value==="delete") {
    display.innerHTML= display.innerHTML.slice(0,-1);
  } console.log(value);
};


function operate (num1,num2,symbol) {
  if (symbol == "+") {
    result= Number(num1)+Number(num2);
    return Math.round(result*100)/100;
  } else if (symbol == "-") {
    result= Number(num1)-Number(num2);
    return Math.round(result*100)/100;
  } else if (symbol == "*") {
    result= Number(num1)*Number(num2);
    return Math.round(result*100)/100;
  } else if (symbol == "/") {
    result= Number(num1)/Number(num2);
    return Math.round(result*100)/100;
  }
};

function clear() {
  a1 = null;
  operator = "";
  waitingForSecondOperator = false;
  display.innerHTML="";
  decimalPresent=false;
};



buttons.forEach((button) => {
  button.addEventListener("click", () => {
      input(button.value);
    })
});

window.onkeydown = function(e) {
  let choice;
  let x= e.key;
  switch (x) {
    case "1":
      choice = document.querySelector("#one");
      choice.click();
      break;
    case "2":
      choice= document.querySelector("#two")
      choice.click();
      break;
    case "3":
      choice = document.querySelector("#three")
      choice.click();
      break;
      case "4":
      choice = document.querySelector("#four")
      choice.click();
      break;
      case "5":
      choice = document.querySelector("#five")
      choice.click();
      break;
      case "6":
      choice = document.querySelector("#six")
      choice.click();
      break;
      case "7":
      choice = document.querySelector("#seven")
      choice.click();
      break;
      case "8":
      choice = document.querySelector("#eight")
      choice.click();
      break;
      case "9":
      choice = document.querySelector("#nine")
      choice.click();
      break;
      case "0":
      choice = document.querySelector("#zero")
      choice.click();
      break;
      case "+":
      choice = document.querySelector("#plus")
      choice.click();
      break;
      case "-":
      choice = document.querySelector("#minus")
      choice.click();
      break;
      case "*":
      choice = document.querySelector("#times")
      choice.click();
      break;
      case "/":
      choice = document.querySelector("#divide")
      choice.click();
      break;
      case "Enter":
      choice = document.querySelector("#equals")
      choice.click();
      break;
      case ".":
        choice = document.querySelector("#decimal")
        choice.click();
        break;
  }
};