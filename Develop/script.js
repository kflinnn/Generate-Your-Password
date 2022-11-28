//Create global variables for password entries
 var specials = ["!", "@", "#", "$", "%", "^", "&", "*"];
 var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
 var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
 var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// // Assignment Code
 var generateBtn = document.querySelector("#generate");

// // // Write password to the #password input
 function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");

   passwordText.value = password;
 }

// // // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Presented with prompts for how many characters in password and user selects
function generatePassword() {
  var choices = []; 
  var results = [];
  var amountCharacters = parseInt(prompt("Please select number of characters (must be between 8 and 128 characters)"));
  
  if (!amountCharacters) {
    alert("This needs a value");
  } 

  //User chooses length of at least 8 characters but no more than 128
  if (amountCharacters < 8 || amountCharacters > 128) {
    return;
  }
  
  //User selects which criteria to include in the password
  var hasNumbers = confirm("Will this contain numbers?");
  var hasSpecials = confirm("Will this contain special characters?");
  var hasLowercase = confirm("Will this contain lowercase letters?");
  var hasUppercase = confirm("Will this contain uppercase letters?");
  
//Negative input
  if (!hasNumbers && !hasSpecials && !hasLowercase && !hasUppercase){
    alert("Please choose password criteria");
}  
//Positive user input
if (hasNumbers){
  choices = choices.concat(numbers)
}

if (hasSpecials){
  choices = choices.concat(specials)
}

if (hasLowercase){
  choices = choices.concat(lowercase)
}

if (hasUppercase){
  choices = choices.concat(uppercase)
}

for (let i = 0; i < amountCharacters; i++) {
  results.push(choices[Math.floor(Math.random() * choices.length)]); 
}
// // //Password generates once all criteria is selected and is displayed written to the page
  return results.join("");
}

