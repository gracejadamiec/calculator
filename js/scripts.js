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
var teaspoon = function(tablespoon){
  return tablespoon * 3
};

var tablespoon = parseInt(prompt("How many tablespoons do you have?"));
var result = teaspoon(tablespoon);

alert("You have " + result + " teaspoons.");
