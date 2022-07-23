// Assignment code here
// test commit

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let length = prompt('Please decide on the length of your password, it must be at least 8 characters long and no more than 128 characters.');
  let lowercase = prompt('Would you like to include lowercase letters?');
  let uppercase = prompt('Uppercase?');
  let numbers = prompt('Numbers?');
  let special_characters = prompt('Special Characters (such as !@#$%^&*)?');
  // include if function to detect if the client would like special characters or not
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var lowerCharset = 'abcdefghijklmnopqrstuvwxyz0123456789';
  var upperCharset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numbersCharset = '0123456789';
  var specialCharset = ' !"#$%&\'\'()*+,-./:;<=>?@[\]^_`{|}~';
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
