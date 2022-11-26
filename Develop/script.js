//Create global variables for password entries
 var specials = ["!", "@", "#", "$", "%", "^", "&", "*"];
 var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
 var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
 var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

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

//Presented with prompts for how many characters in password
function generatePassword() {
  var amountCharacters = window.parseInt(prompt["Please select number of characters (must be between 8 and 128 characters)"]);
 // console.log(typeof amountCharacters)
 // console.log(amountCharacters)

  if (!amountCharacters) {
    alert("This needs a value");
  } 
  else if (amountCharacters < 8 || amountCharacters > 128) {
    amountChars = parseInt(prompt["Please input a number between 8 and 128"]);
  }
  else {
    numbers = confirm("Will this contain numbers?");
    specials = confirm("Will this contain special characters?");
    lowercase = confirm("Will this contain lowercase letters?");
    uppercase = confirm("Will this contain uppercase letters?");
  }
//Negative input
  if (!numbers && !specials && !lowercase && !uppercase){
    alert("Please choose password criteria");
}  
//Positive input
  else if (numbers && specials && lowercase && uppercase) {
    choices = (numbers + specials + lowercase + uppercase);
  }


  //function lengthRange(inputText, minlength, maxlength)
  // {  	
  //    var userCharacterInput = inputText.value;  
  //    if(userCharacterInput.length >= 8 && userCharacterInput.length <= 128)
  //       {  	
  //         return true;  	
  //       }
  //    else
  //       {  	
  //   alert("Please input between " + 8 + " and " + 128 + " characters");  		
  //         return false;  	
  //       }  
  // }
}
generatePassword()





//User selects with criteria to include in the password

//User prompted for the length of the password

//User chooses length of at least 8 characters but no more than 128

//User is asked for character types to include and user confirms

//User answers prompts input is validated and at least one character type is selected

//Password generates once all criteria is selected and is displayed in an alert or written to the page

