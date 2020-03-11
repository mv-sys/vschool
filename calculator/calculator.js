const readlineSync = require('readline-sync');
// Each function will have 2 parameters, num1, num2
//A function that adds two numbers & returns the result
const add = (num1, num2) => { //means return/function
    console.log ('The answer is: ${num1 + num2}')
}
//A function that subtracts two numbers & returns the result
const subtract = (num1, num2) => {
    console.log('The answer is: ${num1 - num2}')
}
//A function that divides two numbers & returns the result
const divide =  (num1, num2) => {
    console.log('The answer is: ${num1 % num2}')
}
//A function that multiplies two numbers & returns the result
const multiply = (num1, num2) => {
    console.log('The answer is: ${num1 * num2}')
}
//enter your first number & store that number
letNum1 = Number(readlineSync.question('pleaseenteryourfirstnumber\n'))
//please enter your second number(store that second number)
letNum2 = Number(readlineSync.question('please eneter your second number\n'))
//areValidNumb = isNumber(num1, num2)

// Please enter the operation to perform: add, sub, mul, div (then store the operation)
const operationToPerform = () => {

}

if (operation === `add`) {
    return `The result is:  ${add(num1, num2)}`;

} else if (operation === `subtract`) {
    return `The result is:  ${subtract(num1, num2)}`;

} else if (operation === `multiply`) {

    return `The result is:  ${multiply(num1, num2)}`;
} else if (operation === `divide`) {

    return `The result is: ${divide(num1, num2)}`;
} else {
    console.log(
    `Invalid operation! Please choose from the following. Add, subtract, multiply and divide.`
    );
};

operationToPerform();