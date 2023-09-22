// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to generate a random password based on selected criteria
function generatePassword() {
  // Prompt user for password length and validate the input
  var length = parseInt(prompt("Enter the password length (between 8 and 128):"));
  while (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid input! Please enter a number between 8 and 128.");
    length = parseInt(prompt("Enter the password length (between 8 and 128):"));
  }

  // Confirm character types to include in the password
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumbers = confirm("Include numeric characters?");
  var includeSymbols = confirm("Include special characters?");

  // Validate that at least one character type is selected
  while (!(includeLowercase || includeUppercase || includeNumbers || includeSymbols)) {
    alert("You must select at least one character type!");
    includeLowercase = confirm("Include lowercase characters?");
    includeUppercase = confirm("Include uppercase characters?");
    includeNumbers = confirm("Include numeric characters?");
    includeSymbols = confirm("Include special characters?");
  }

  // Define character sets
  var lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
  var upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numberChars = '0123456789';
  var symbolChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';

  var allowedChars = '';
  if (includeLowercase) allowedChars += lowerCaseChars;
  if (includeUppercase) allowedChars += upperCaseChars;
  if (includeNumbers) allowedChars += numberChars;
  if (includeSymbols) allowedChars += symbolChars;

  var password = '';
  for (var i = 0; i < length; i++) {
    password += allowedChars[Math.floor(Math.random() * allowedChars.length)];
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
