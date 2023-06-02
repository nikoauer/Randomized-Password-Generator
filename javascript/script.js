
// The variables pull value from id element tags in the index.html and retains value in each respective variable
var characterAmountInput = document.getElementById('characterAmount');
var useUppercaseInput = document.getElementById('useUppercase');
var useLowercaseInput = document.getElementById('useLowercase');
var useSpecialCharactersInput = document.getElementById('useSpecialCharacters');
var useNumbersInput = document.getElementById('useNumbers');
var form = document.getElementById('passwordGeneratorCriteria');
var passwordDisplay = document.getElementById('passwordDisplay');

// This function prevents the default refreshing of the page happening each time a password is generated
form.addEventListener('submit', e => {
  e.preventDefault();
  var characterAmount = characterAmountInput.value;
  var useUppercase = useUppercaseInput.checked;
  var useLowercase = useLowercaseInput.checked;
  var useSpecialCharacters = useSpecialCharactersInput.checked;
  var useNumbers = useNumbersInput.checked;
  var password = generatePassword(characterAmount, useUppercase, useLowercase, useSpecialCharacters, useNumbers);
  passwordDisplay.innerText = password;
});

//this function implements the actual password randomization 
function generatePassword(characterAmount,useUppercase, useLowercase, useSpecialCharacters, useNumbers) {
  var lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
  var uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var specialCharacters = '!@#$%^&*()_+~`|}{[]\\:;?><,./-=';
  var numberCharacters = '0123456789';

  // this varible stores and adds the above characters respective to if the checkboxes are selected for the differing characters
  var allowedCharacters = '';

  // these if statements are triggered true if the checkboxes are selected thus adding the respective character set to the allowedcharacters variable
  if (useLowercase) {
    allowedCharacters += lowercaseCharacters;
  }
  if (useUppercase) {
    allowedCharacters += uppercaseCharacters;
  }
  if (useNumbers) {
    allowedCharacters += numberCharacters;
  }
  if (useSpecialCharacters) {
    allowedCharacters += specialCharacters;
  }
  // this alert notifies the person that a minimum of one checkbox must be selected in order to generate a password
  // if the variable is equal to being empty then no checkbox has been selected 
  if (allowedCharacters === '') {
    alert('A minimum of one character type is required. Please select one or more for a strong Password to be generated.');
    return '';
  }

  //This for loop repeats respective to the number put in the character amount
  var password = '';
  for (var i = 0; i < characterAmount; i++) {
    //inside the loop the random variable stores the result of when Math.random method multiplies a random number to the allowCharacters.length 
    var random = Math.floor(Math.random() * allowedCharacters.length);
    // the password stores the randomely generated character within the allowCharacters variable and adds on with each loop
    password += allowedCharacters[random];
  }
  return password;
}
