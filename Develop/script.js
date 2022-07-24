// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// this lists out all the prompts for the user to answer.
function userprompts() {
  length = prompt('Please decide on the length of your password, it must be at least 8 characters long and no more than 128 characters.');
  if (!length) {
    alert("Selection of length is required in order to proceed");
    return;
  } else if (length < 8 || length > 128) {
    alert("Selection of length must be between 8 and 128 characters");
    return;
  }
  lowercase = prompt('Would you like to include lowercase letters? (Y/N)');
  uppercase = prompt('Uppercase? (Y/N)');
  numbers = prompt('Numbers? (Y/N)');
  special_characters = prompt('Special Characters (such as !@#$%^&*)? (Y/N)');
}

var charSetSelection = {
  lowerCharset: 'abcdefghijklmnopqrstuvwxyz0123456789',
  upperCharset: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbersCharset: '0123456789',
  specialCharset: ' !"#$%&\'\'()*+,-./:;<=>?@[\]^_`{|}~',
}

// Write password to the #password input
function writePassword() {
  userprompts();
  // include if function to detect if the client would like special characters or not
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

