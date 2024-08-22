/**const firstNumber=document.getElementsByTagName("input")
const operator=document.getElementsByClassName("operator")
const secondNumber=document.getElementsByTagName("input")
const equal=document.getElementById("final")
const displayBox=document.getElementById("display")

document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    let firstOperand = '';
    let secondOperand = '';
    let operator = null;
    let isSecondOperand = false;
})

function calculateResult() {
    let result;
    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(secondOperand);

    if (operator && secondOperand !== '') {
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                result = 'Error';
        }
        display.innerHTML = result;
        firstOperand = result.toString();
        secondOperand = '';
        operator = null;
        isSecondOperand = false;
    }
}

/*if(operator=='+'){
    equal=firstNumber+secondNumber
}
else  if(operator=='-'){
    equal=firstNumber-secondNumber
}
else if(operator=='*'){
    equal=firstNumber*secondNumber
}
else{
    equal=firstNumber/secondNumber
}*/
//function myFunction() {
  //  document.getElementById("display").innerHTML=result
//}

let string=""
let buttons=document.querySelectorAll(".button")
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string=eval(string)
            document.querySelector('display').value=string
        }
        else{
            console.log(e.target)
            string=string+e.target.innerHTML
            document.querySelector('display').value=string
        }
    })
})