//Create global variables for password entries
 var specials = ["!", "@", "#", "$", "%", "^", "&", "*"];
 var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
 var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
 var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
 var choices; 
 var enter;
// // // Assignment Code
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
  var amountCharacters = parseInt(prompt("Please select number of characters (must be between 8 and 128 characters)"));
  var randomPassword = [];
  // console.log(typeof amountCharacters)
 console.log(amountCharacters)

  if (!amountCharacters) {
    alert("This needs a value");
  } 

  //User chooses length of at least 8 characters but no more than 128
  else if (amountCharacters < 8 || amountCharacters > 128) {
    amountChars = parseInt(prompt("Please input a number between 8 and 128"));
  }
  
  //User selects which criteria to include in the password
  var hasNumbers = confirm("Will this contain numbers?");
  var hasSpecials = confirm("Will this contain special characters?");
  var hasLowercase = confirm("Will this contain lowercase letters?");
  var hasUppercase = confirm("Will this contain uppercase letters?");
  
//Negative input
  if (!hasNumbers && !hasSpecials && !hasLowercase && !hasUppercase){
    choices = alert("Please choose password criteria");
}  
console.log(hasNumbers, hasSpecials, hasLowercase, hasUppercase)

//4 Positive Inputs
 if (hasNumbers && hasSpecials && hasLowercase && hasUppercase) {
  choices = specials.concat(numbers, lowercase, uppercase);
  console.log(choices);
}
//3 Positive inputs
else if (hasSpecials && hasLowercase && hasUppercase){
  choices = specials.concat(lowercase, uppercase);
console.log(choices);
}

else if (hasNumbers && hasLowercase && hasUppercase){
  choices = numbers.concat(lowercase, uppercase);
  }

else if (hasSpecials && hasNumbers && hasUppercase){
    choices = specials.concat(numbers, uppercase);
    }
  
else if (hasSpecials && hasNumbers && hasLowercase){
      choices = specials.concat(numbers, lowercase);
      }  
for (var i = 0; i < enter; i++) {
  var pickChoices = choices[Math.floor(Math.random() * choices.length)];
  randomPassword.push(pickChoices);
}


//User answers prompts input is validated and at least one character type is selected
// var length = amountCharacters;

//   if (hasNumbers && hasSpecials && hasLowercase && hasUppercase) {
//     var index = Math.floor(Math.random() * amountCharacters.length);
//     var choices = amountCharacters[index];
  
//   }
//   console.log(choices) 

// if (hasNumbers) {
//   var yesNumbers = Math.floor(Math.random() * numbers.length);
//   var numberChoice = numbers[yesNumbers];
//   console.log(numberChoice)
//   randomPassword.push(numberChoice);
// }

// if (hasSpecials) {
//   var yesSpecials = Math.floor(Math.random() * specials.length);
//   var specialChoice = specials[yesSpecials];
//   console.log(specialChoice)
//   randomPassword.push(specialChoice);
// }
 
// if (hasNumbers) {
//   var yesLowercase = Math.floor(Math.random() * lowercase.length);
//   var lowercaseChoice = lowercase[yesLowercase];
//   console.log(lowercaseChoice)
//   randomPassword.push(lowercaseChoice);
// }

// if (hasUppercase) {
//   var yesUppercase = Math.floor(Math.random() * uppercase.length);
//   var uppercaseChoice = uppercase[yesUppercase];
//   console.log(uppercaseChoice)
//   randomPassword.push(uppercaseChoice);
// }
// //Password generates once all criteria is selected and is displayed in an alert or written to the page
  return randomPassword;
 }