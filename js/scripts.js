//BMI Calculator
// var bmi = function(weight, height){
//   return  weight / (height**2) * 703
// }
//
// var weight = parseInt(prompt("weight"));
// var height = parseInt(prompt("height"));
//
// var result = bmi(weight, height);
//
// alert(result);

//Celsius to Freedom
// var fahrenheit = function(celsius){
//   return celsius * (9/5) + 32
// };
//
// var celsius = parseInt(prompt("Temp in celsius, please: "));
//
// var result = fahrenheit(celsius);
//
// alert(result);

//Cooking
// var teaspoon = function(tablespoon){
//   return tablespoon * 3
// };
//
// var tablespoon = parseInt(prompt("How many tablespoons do you have?"));
// var result = teaspoon(tablespoon);
//
// alert("You have " + result + " teaspoons.");

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

$(document).ready(function() {
  $("button#add").click(function(event) {
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var result = add(number1, number2);
    $("#output").text(result);
    event.preventDefault();
  });
  $("button#subtract").click(function (event) {
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var result = subtract(number1, number2);
    $("#output").text(result);
    event.preventDefault();
  });
  $("button#multiply").click(function (event) {
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var result = multiply(number1, number2);
    $("#output").text(result);
    event.preventDefault();
  });
  $("button#divide").click(function (event) {
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var result = divide(number1, number2);
    $("#output").text(result);
    event.preventDefault();
  });
});
