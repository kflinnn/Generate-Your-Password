//Create global variables for password entries
var specials = ["!", "@", "#", "$", "%", "^", "&", "*"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
console.log(specials)
console.log(numbers)
console.log(lowercase)
console.log(uppercase)

// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

//Presented with prompts for how many characters in password
function generatePassword() {
  var amountCharacters = window.prompt("Please select number of characters (must be between 8 and 128 characters)");

}



//User selects with criteria to include in the password

//User prompted for the length of the password

//User chooses length of at least 8 characters but no more than 128

//User is asked for character types to include and user confirms

//User answers prompts input is validated and at least one character type is selected

//Password generates once all criteria is selected and is displayed in an alert or written to the page

