var readlineSync = require('readline-sync');
var firstNum = readlineSync.questionInt("Please enter firstnumber: ");
var secondNum = readlineSync.questionInt("Please enter secondnumber: ");
var userOperation= readlineSync.question("Please enter operation to perform( add, sub,mul,div):")

// Function Defination
function myCustomCalculator(num1,num2,operation){
if (operation== "add"){
// Call Addition Function
    console.log("Addition of the two numbers: " + num1 +" + "+ num2 + " = "+  myAddFunction(num1, num2));
}else if(operation=="sub" ){
// Call Subtraction Function
console.log("Substraction of the two numbers: " + num1 +" - "+ num2 + " = "+  mySubFunction(num1, num2));
}else if(operation== "mul"){
    //Call Multiplication function
    console.log("Multiplication of the two numbers: " + num1 +" * "+ num2 + " = "+  myMulFunction(num1, num2));
}
else if(operation== "div"){
// Call Division Function  
console.log("Division of the two numbers: " + num1 +" / "+ num2 + " = "+  myDivFunction(num1, num2));
}else {
    console.log("Invalid operation,please try again ");

}

}
//Addition function
function myAddFunction(num1, num2){
    return  num1 + num2;
}

//Substraction function
function mySubFunction(num1, num2){
    return  num1 - num2;
}
//Multiplication function
function myMulFunction(num1, num2){
    return  num1 * num2;
}
//Division function
function myDivFunction(num1, num2){
    if(num2 == 0){
        return "Division by 0 is undefine.";
    }else{
        return  num1 / num2;
    }
}
// Call the Function
myCustomCalculator(firstNum, secondNum, userOperation);
