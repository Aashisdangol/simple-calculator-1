let Num1 = parseFloat(prompt("Enter a Number"))
let operator = (prompt("Enter a operator (+,-,*,/,**)"))
let Num2 = parseFloat(prompt("Enter a Number"))


let result;
switch (operator) {
   case '+':
       result = Num1 + Num2;
       break;
   case '-':
       result = Num1 - Num2;
       break;
   case '*':
       result = Num1 * Num2;
       break;
   case '/':
       result = Num1 / Num2;
       break;
   case '**':
       result = Num1 ** Num2;
       break;
   default:
       result = 'Invalid operator';
}






let outputTag1 = document.getElementById('number-1')
outputTag1.innerText = Num1;


let outputTag2 = document.getElementById('number-2')
outputTag2.innerText = operator;


let outputTag3 = document.getElementById('number-3')
outputTag3.innerText = Num2;


let outputTag4 = document.getElementById('result')
outputTag4.innerText = result;