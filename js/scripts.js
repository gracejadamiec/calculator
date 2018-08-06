// var add = function(number1, number2){
//   return number1 + number2
// };
//
// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
// var result = add(number1, number2);
// alert(result);
//
// var subtract = function (number1, number2) {
//   return number1 - number2
// };
//
// var number1 = parseInt(prompt("number subtract)"))
// var number2 = parseInt(prompt("number subtract)"))
// var result = subtract(number1, number2);
//
// alert(result);
//
// var multiply = function (number1, number2) {
//   return number1 * number2
// };
//
// var number1 = parseInt(prompt("number multiply")))
// var number2 = parseInt(prompt("number multiply")))
// var result = multiply(number1, number2);
//
// alert(result);
//
// var divide = function (number1, number2) {
//   return number1 * number2
// };
//
// var number1 = parseInt(prompt("number divide")))
// var number2 = parseInt(prompt("number divide")))
// var result = divide(number1, number2);
//
// alert(result);

var bmi = function(weight, height){
  return  weight / (height**2) * 703
}

var weight = parseInt(prompt("weight"));
var height = parseInt(prompt("height"));

var result = bmi(weight, height);

alert(result);
