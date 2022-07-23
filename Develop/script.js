// Assignment code here
// test commit

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let length = window.prompt('Please decide on the length of your password, it must be at least 8 characters long and no more than 128 characters.');
  let special_characters = prompt('Would you like special characters to be included in your password?');
  // include if function to detect if the client would like special characters or not
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
