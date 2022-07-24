// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// this lists out all the prompts for the user to answer.
function userprompts() {
  length = prompt('Please decide on the length of your password, it must be at least 8 characters long and no more than 128 characters.');
  //  ensures that the user selects on a password length within parameters or else generation of password is terminated.
  if (!length) {
    alert("Selection of length is required in order to proceed");
    return;
  } else if (length < 8 || length > 128) {
    alert("Selection of length must be between 8 and 128 characters");
    return;
  }
  lowercase = confirm('Would you like to include lowercase letters? (Ok = Yes, Cancel = No');
  uppercase = confirm('Uppercase? (Ok = Yes, Cancel = No)');
  numbers = confirm('Numbers? (Ok = Yes, Cancel = No)');
  special_characters = confirm('Special Characters (such as !@#$%^&*)? (Ok = Yes, Cancel = No)');
  // ensures that the user selects at least one of the criteria or else generation of password is terminated.
  if (!lowercase && !uppercase && !numbers && !special_characters) {
    alert("You must select at least one of the character types to be included in the password");
    return;
  }
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
  // one criteria selection
  if (lowercase) {
    selection = lowerCharset;
  } else if (uppercase) {
    selection = upperCharset;
  } else if (numbers) {
    selection = numbersCharset;
  } else if (special_characters) {
    selection = specialCharset;
    // two criteria selection 
  } else if (lowercase && uppercase) {
    selection = lowerCharset.concat(upperCharset);
  } else if (lowercase && numbers) {
    selection = lowerCharset.concat(numbersCharset);
  } else if (lowercase && special_characters) {
    selection = lowerCharset.concat(specialCharset);
  } else if (uppercase && numbers) {
    selection = upperCharset.concat(numbersCharset);
  } else if (uppercase && special_characters) {
    selection = upperCharset.concat(specialCharset);
  } else if (numbers && special_characters) {
    selection = numbersCharset.concat(specialCharset);
    // three criteria selection
  } else if (lowercase && uppercase && numbers) {
    selection = lowerCharset.concat(upperCharset, numbersCharset);
  } else if (lowercase && uppercase && special_characters) {
    selection = lowerCharset.concat(upperCharset, specialCharset);
  } else if (uppercase && numbers && special_characters) {
    selection = upperCharset.concat(numbersCharset, specialCharset);
    // all four criteria selection
  } else if (lowercase && uppercase && numbers && special_characters) {
    selection = lowerCharset.concat(upperCharset, numbersCharset, specialCharset);
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

