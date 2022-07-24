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

// list of characters for selection 

var charSetSelection = {
  lower: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  upper: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  numbersSelect: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  // !!difficulty inserting some symbols!!
  special: ["!", "#", "$", "%", "&", "*", "+", ",", "-", "<", ">", "?"],
};

function generatePassword() {
  userprompts();
  // one criteria selection
  if (lowercase) {
    selection = charSetSelection.lower;
  } else if (uppercase) {
    selection = charSetSelection.upper;
  } else if (numbers) {
    selection = charSetSelection.numbersSelect;
  } else if (special_characters) {
    selection = charSetSelection.special;
    // two criteria selection 
  } else if (lowercase && uppercase) {
    selection = charSetSelection.lower.concat(charSetSelection.upper);
  } else if (lowercase && numbers) {
    selection = charSetSelection.lower.concat(charSetSelection.numbersSelect);
  } else if (lowercase && special_characters) {
    selection = charSetSelection.lower.concat(charSetSelection.special);
  } else if (uppercase && numbers) {
    selection = charSetSelection.upper.concat(charSetSelection.numbersSelect);
  } else if (uppercase && special_characters) {
    selection = charSetSelection.upper.concat(charSetSelection.special);
  } else if (numbers && special_characters) {
    selection = charSetSelection.numbersSelect.concat(charSetSelection.special);
    // three criteria selection
  } else if (lowercase && uppercase && numbers) {
    selection = charSetSelection.lower.concat(charSetSelection.upper, charSetSelection.numbersSelect);
  } else if (lowercase && uppercase && special_characters) {
    selection = charSetSelection.lower.concat(charSetSelection.upper, charSetSelection.special);
  } else if (uppercase && numbers && special_characters) {
    selection = charSetSelection.upper.concat(charSetSelection.numbersSelect, charSetSelection.special);
    // all four criteria selection
  } else if (lowercase && uppercase && numbers && special_characters) {
    selection = charSetSelection.lower.concat(charSetSelection.upper, charSetSelection.numbersSelect, charSetSelection.special);
  };
  // console.log(selection);
  ranPassGen = [];
  for (var i = 0; i < length; i++) {
    choiceSelections = selection[Math.floor(Math.random() * selection.length)];
    // console.log(choiceSelections);
    ranPassGen.push(choiceSelections);
    // console.log(ranPassGen.join(''));
    newGeneratedPassword = ranPassGen.join('');
  };
  return ranPassGen;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = newGeneratedPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

